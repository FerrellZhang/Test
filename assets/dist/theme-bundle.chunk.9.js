(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./assets/js/theme/cart.js":
/*!*********************************!*\
  !*** ./assets/js/theme/cart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/bind */ "./node_modules/lodash/bind.js");
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cart/shipping-estimator */ "./assets/js/theme/cart/shipping-estimator.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _b2b_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./b2b/config */ "./assets/js/theme/b2b/config.js");




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Cart = function (_PageManager) {
    _inherits(Cart, _PageManager);

    function Cart() {
        _classCallCheck(this, Cart);

        return _possibleConstructorReturn(this, _PageManager.apply(this, arguments));
    }

    Cart.prototype.onReady = function onReady() {
        this.$cartContent = jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-cart-content]');
        this.$cartMessages = jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-cart-status]');
        this.$cartTotals = jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-cart-totals]');
        this.$overlay = jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-cart] .loadingOverlay').hide(); // TODO: temporary until roper pulls in his cart components

        this.bindEvents();
    };

    Cart.prototype.cartUpdate = function cartUpdate($target) {
        var _this2 = this;

        var itemId = $target.data('cartItemid');
        var $el = jquery__WEBPACK_IMPORTED_MODULE_4___default()('#qty-' + itemId);
        var oldQty = parseInt($el.val(), 10);
        var maxQty = parseInt($el.data('quantityMax'), 10);
        var minQty = parseInt($el.data('quantityMin'), 10);
        var minError = $el.data('quantityMinError');
        var maxError = $el.data('quantityMaxError');
        var newQty = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1;

        // Does not quality for min/max quantity
        if (newQty < minQty) {
            return sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({
                text: minError,
                type: 'error'
            });
        } else if (maxQty > 0 && newQty > maxQty) {
            return sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({
                text: maxError,
                type: 'error'
            });
        }

        this.$overlay.show();

        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
            _this2.$overlay.hide();

            if (response.data.status === 'succeed') {
                // if the quantity is changed "1" from "0", we have to remove the row.
                var remove = newQty === 0;
                //this.refreshContent(remove);


                //for bundleb2b
                if (sessionStorage.getItem("bundleb2b_user") && sessionStorage.getItem("bundleb2b_user") != "none") {
                    _this2.updateCatalogPrice(itemId);
                } else {
                    _this2.refreshContent(remove);
                }
            } else {
                $el.val(oldQty);
                sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({
                    text: response.data.errors.join('\n'),
                    type: 'error'
                });
            }
        });
    };

    Cart.prototype.cartRemoveItem = function cartRemoveItem(itemId) {
        var _this3 = this;

        this.$overlay.show();
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.cart.itemRemove(itemId, function (err, response) {
            if (response.data.status === 'succeed') {
                _this3.refreshContent(true);
            } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({
                    text: response.data.errors.join('\n'),
                    type: 'error'
                });
            }
        });
    };

    Cart.prototype.cartEditOptions = function cartEditOptions(itemId) {
        var _this4 = this;

        var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_8__["defaultModal"])();
        var options = {
            template: 'cart/modals/configure-product'
        };

        modal.open();

        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.productAttributes.configureInCart(itemId, options, function (err, response) {
            modal.updateContent(response.content);

            _this4.bindGiftWrappingForm();
        });

        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].hooks.on('product-option-change', function (event, option) {
            var $changedOption = jquery__WEBPACK_IMPORTED_MODULE_4___default()(option);
            var $form = $changedOption.parents('form');
            var $submit = jquery__WEBPACK_IMPORTED_MODULE_4___default()('input.button', $form);
            var $messageBox = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.alertMessageBox');
            var item = jquery__WEBPACK_IMPORTED_MODULE_4___default()('[name="item_id"]', $form).attr('value');

            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.productAttributes.optionChange(item, $form.serialize(), function (err, result) {
                var data = result.data || {};

                if (err) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({
                        text: err,
                        type: 'error'
                    });
                    return false;
                }

                if (data.purchasing_message) {
                    jquery__WEBPACK_IMPORTED_MODULE_4___default()('p.alertBox-message', $messageBox).text(data.purchasing_message);
                    $submit.prop('disabled', true);
                    $messageBox.show();
                } else {
                    $submit.prop('disabled', false);
                    $messageBox.hide();
                }

                if (!data.purchasable || !data.instock) {
                    $submit.prop('disabled', true);
                } else {
                    $submit.prop('disabled', false);
                }
            });
        });
    };

    Cart.prototype.refreshContent = function refreshContent(remove) {
        var _this5 = this;

        var $cartItemsRows = jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-item-row]', this.$cartContent);
        var $cartPageTitle = jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-cart-page-title]');
        var options = {
            template: {
                content: 'cart/content',
                totals: 'cart/totals',
                pageTitle: 'cart/page-title',
                statusMessages: 'cart/status-messages'
            }
        };

        this.$overlay.show();

        // Remove last item from cart? Reload
        if (remove && $cartItemsRows.length === 1) {
            return window.location.reload();
        }

        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.cart.getContent(options, function (err, response) {
            _this5.$cartContent.html(response.content);
            _this5.$cartTotals.html(response.totals);
            _this5.$cartMessages.html(response.statusMessages);

            $cartPageTitle.replaceWith(response.pageTitle);
            _this5.bindEvents();
            _this5.$overlay.hide();

            var quantity = jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-cart-quantity]', _this5.$cartContent).data('cartQuantity') || 0;

            jquery__WEBPACK_IMPORTED_MODULE_4___default()('body').trigger('cart-quantity-update', quantity);
        });
    };

    Cart.prototype.bindCartEvents = function bindCartEvents() {
        var _this6 = this;

        var debounceTimeout = 400;
        var cartUpdate = lodash_bind__WEBPACK_IMPORTED_MODULE_2___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(this.cartUpdate, debounceTimeout), this);
        var cartRemoveItem = lodash_bind__WEBPACK_IMPORTED_MODULE_2___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(this.cartRemoveItem, debounceTimeout), this);

        // cart update
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-cart-update]', this.$cartContent).on('click', function (event) {
            var $target = jquery__WEBPACK_IMPORTED_MODULE_4___default()(event.currentTarget);

            event.preventDefault();

            // update cart quantity
            cartUpdate($target);
        });

        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.cart-remove', this.$cartContent).on('click', function (event) {
            var itemId = jquery__WEBPACK_IMPORTED_MODULE_4___default()(event.currentTarget).data('cartItemid');
            var string = jquery__WEBPACK_IMPORTED_MODULE_4___default()(event.currentTarget).data('confirmDelete');
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({
                text: string,
                type: 'warning',
                showCancelButton: true
            }).then(function () {
                // remove item from cart
                cartRemoveItem(itemId);
            });
            event.preventDefault();
        });

        jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-item-edit]', this.$cartContent).on('click', function (event) {
            var itemId = jquery__WEBPACK_IMPORTED_MODULE_4___default()(event.currentTarget).data('itemEdit');

            event.preventDefault();
            // edit item in cart
            _this6.cartEditOptions(itemId);
        });
    };

    Cart.prototype.bindPromoCodeEvents = function bindPromoCodeEvents() {
        var _this7 = this;

        var $couponContainer = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.coupon-code');
        var $couponForm = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.coupon-form');
        var $codeInput = jquery__WEBPACK_IMPORTED_MODULE_4___default()('[name="couponcode"]', $couponForm);

        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.coupon-code-add').on('click', function (event) {
            event.preventDefault();

            jquery__WEBPACK_IMPORTED_MODULE_4___default()(event.currentTarget).hide();
            $couponContainer.show();
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.coupon-code-cancel').show();
            $codeInput.trigger('focus');
        });

        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.coupon-code-cancel').on('click', function (event) {
            event.preventDefault();

            $couponContainer.hide();
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.coupon-code-cancel').hide();
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.coupon-code-add').show();
        });

        $couponForm.on('submit', function (event) {
            var code = $codeInput.val();

            event.preventDefault();

            // Empty code
            if (!code) {
                return sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({
                    text: $codeInput.data('error'),
                    type: 'error'
                });
            }

            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.cart.applyCode(code, function (err, response) {
                if (response.data.status === 'success') {
                    _this7.refreshContent();
                } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({
                        text: response.data.errors.join('\n'),
                        type: 'error'
                    });
                }
            });
        });
    };

    Cart.prototype.bindGiftCertificateEvents = function bindGiftCertificateEvents() {
        var _this8 = this;

        var $certContainer = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.gift-certificate-code');
        var $certForm = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.cart-gift-certificate-form');
        var $certInput = jquery__WEBPACK_IMPORTED_MODULE_4___default()('[name="certcode"]', $certForm);

        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.gift-certificate-add').on('click', function (event) {
            event.preventDefault();
            jquery__WEBPACK_IMPORTED_MODULE_4___default()(event.currentTarget).toggle();
            $certContainer.toggle();
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.gift-certificate-cancel').toggle();
        });

        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.gift-certificate-cancel').on('click', function (event) {
            event.preventDefault();
            $certContainer.toggle();
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.gift-certificate-add').toggle();
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.gift-certificate-cancel').toggle();
        });

        $certForm.on('submit', function (event) {
            var code = $certInput.val();

            event.preventDefault();

            if (!Object(_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_5__["default"])(code)) {
                return sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({
                    text: $certInput.data('error'),
                    type: 'error'
                });
            }

            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.cart.applyGiftCertificate(code, function (err, resp) {
                if (resp.data.status === 'success') {
                    _this8.refreshContent();
                } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({
                        text: resp.data.errors.join('\n'),
                        type: 'error'
                    });
                }
            });
        });
    };

    Cart.prototype.bindGiftWrappingEvents = function bindGiftWrappingEvents() {
        var _this9 = this;

        var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_8__["defaultModal"])();

        jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-item-giftwrap]').on('click', function (event) {
            var itemId = jquery__WEBPACK_IMPORTED_MODULE_4___default()(event.currentTarget).data('itemGiftwrap');
            var options = {
                template: 'cart/modals/gift-wrapping-form'
            };

            event.preventDefault();

            modal.open();

            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.cart.getItemGiftWrappingOptions(itemId, options, function (err, response) {
                modal.updateContent(response.content);

                _this9.bindGiftWrappingForm();
            });
        });
    };

    Cart.prototype.bindGiftWrappingForm = function bindGiftWrappingForm() {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.giftWrapping-select').on('change', function (event) {
            var $select = jquery__WEBPACK_IMPORTED_MODULE_4___default()(event.currentTarget);
            var id = $select.val();
            var index = $select.data('index');

            if (!id) {
                return;
            }

            var allowMessage = $select.find('option[value=' + id + ']').data('allowMessage');

            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.giftWrapping-image-' + index).hide();
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('#giftWrapping-image-' + index + '-' + id).show();

            if (allowMessage) {
                jquery__WEBPACK_IMPORTED_MODULE_4___default()('#giftWrapping-message-' + index).show();
            } else {
                jquery__WEBPACK_IMPORTED_MODULE_4___default()('#giftWrapping-message-' + index).hide();
            }
        });

        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.giftWrapping-select').trigger('change');

        function toggleViews() {
            var value = jquery__WEBPACK_IMPORTED_MODULE_4___default()('input:radio[name ="giftwraptype"]:checked').val();
            var $singleForm = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.giftWrapping-single');
            var $multiForm = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.giftWrapping-multiple');

            if (value === 'same') {
                $singleForm.show();
                $multiForm.hide();
            } else {
                $singleForm.hide();
                $multiForm.show();
            }
        }

        jquery__WEBPACK_IMPORTED_MODULE_4___default()('[name="giftwraptype"]').on('click', toggleViews);

        toggleViews();
    };

    Cart.prototype.bindEvents = function bindEvents() {
        this.bindCartEvents();
        this.bindPromoCodeEvents();
        this.bindGiftWrappingEvents();
        this.bindGiftCertificateEvents();

        // initiate shipping estimator module
        this.shippingEstimator = new _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_7__["default"](jquery__WEBPACK_IMPORTED_MODULE_4___default()('[data-shipping-estimator]'));
    };

    // for bundleb2b
    // for simple products


    Cart.prototype.getVariantIdByProductId = function getVariantIdByProductId(productId) {
        var variantId = void 0;

        if (this.catalog_products && this.catalog_products[productId]) {
            var variantSkus = this.catalog_products[productId];
            variantId = variantSkus[0].variant_id;
        }
        return variantId;
    };

    // for bundleb2b


    Cart.prototype.handlePickListOptions = function handlePickListOptions(cartItemObj, cb) {
        var _this10 = this;

        var cartItemId = cartItemObj.item_id;
        var product_id = cartItemObj.product_id;
        var variant_id = cartItemObj.variant_id;

        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.productAttributes.configureInCart(cartItemId, {
            template: 'b2b/configure-product-data'
        }, function (err, response) {
            console.log(response.data);

            var selectedPickListOptins = [];

            if (response.data && response.data.options) {
                var options = response.data.options;

                for (var i = 0; i < options.length; i++) {
                    var option = options[i];

                    if (option.partial == "product-list") {
                        var optionValues = option.values;

                        for (var j = 0; j < optionValues.length; j++) {
                            var optionValue = optionValues[j];

                            if (optionValue.selected) {
                                selectedPickListOptins.push({
                                    "option_id": option.id,
                                    "option_value": optionValue.id,
                                    "option_data": optionValue.data
                                });
                            }
                        }
                    }
                }

                console.log(selectedPickListOptins);
            }

            if (selectedPickListOptins) {
                jquery__WEBPACK_IMPORTED_MODULE_4___default.a.ajax({
                    type: "GET",
                    url: _b2b_config__WEBPACK_IMPORTED_MODULE_10__["default"].apiRootUrl + '/productvariants?store_hash=' + _b2b_config__WEBPACK_IMPORTED_MODULE_10__["default"].storeHash + '&product_id=' + product_id + '&variant_id=' + variant_id,
                    success: function success(data) {
                        console.log(data);
                        var extras_list = [];

                        for (var k = 0; k < selectedPickListOptins.length; k++) {
                            var showCustomPrice = true;

                            if (data && data.option_list) {
                                var _options = data.option_list;

                                for (var _j = 0; _j < _options.length; _j++) {
                                    var optionId = _options[_j].option_id;
                                    var _optionValue = _options[_j].option_value;

                                    if (optionId == selectedPickListOptins[k].option_id && _optionValue == selectedPickListOptins[k].option_value) {
                                        showCustomPrice = false;
                                    }
                                }

                                if (showCustomPrice) {
                                    var extra_product_id = selectedPickListOptins[k].option_data;
                                    var extra_variant_id = _this10.getVariantIdByProductId(extra_product_id);
                                    if (extra_variant_id) {
                                        extras_list.push({
                                            "extra_product_id": extra_product_id,
                                            "extra_variant_id": extra_variant_id
                                        });
                                    } else {
                                        extras_list.push({
                                            "extra_product_id": extra_product_id
                                        });
                                    }
                                }
                            }
                        }

                        if (extras_list) {
                            cartItemObj.extras_list = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default()(extras_list);
                        }

                        if (cb) {
                            cb();
                        }
                    },
                    error: function error(jqXHR, textStatus, errorThrown) {
                        console.log("error", JSON.stringify(jqXHR));
                    }
                });
            } else {
                if (cb) {
                    cb();
                }
            }
        });
    };

    //for bundleb2b


    Cart.prototype.updateCatalogPrice = function updateCatalogPrice(cartItemId, cb) {
        var _this11 = this;

        this.$overlay.show();
        jquery__WEBPACK_IMPORTED_MODULE_4___default.a.ajax({
            type: "GET",
            url: "../api/storefront/carts",
            contentType: "application/json",
            accept: "application/json",
            success: function success(data) {
                console.log("cart", data);
                if (data && data.length > 0) {
                    (function () {
                        var cartId = data[0].id;
                        console.log("cartId", cartId);
                        //const cartItems = data[0].lineItems.physicalItems;
                        var cartItems_all = data[0].lineItems.physicalItems;
                        var cartItems = cartItems_all.filter(function (item) {
                            return item.parentId == null;
                        });

                        for (var i = 0; i < cartItems.length; i++) {

                            var cartItem = cartItems[i];
                            var itemId = cartItem.id;

                            if (cartItemId == itemId) {
                                (function () {
                                    var itemProductId = cartItem.productId;
                                    var itemVariantId = cartItem.variantId;
                                    var itemQty = cartItem.quantity;
                                    var gCatalogId = sessionStorage.getItem("catalog_id");

                                    var cartItemObj = {
                                        "item_id": itemId,
                                        "product_id": itemProductId,
                                        "variant_id": itemVariantId,
                                        "quantity": itemQty,
                                        "catalog_id": gCatalogId
                                    };

                                    console.log("putdata", JSON.stringify(cartItemObj));

                                    _this11.handlePickListOptions(cartItemObj, function () {
                                        console.log("putdata2", JSON.stringify(cartItemObj));

                                        var bypass_store_hash = '' + _b2b_config__WEBPACK_IMPORTED_MODULE_10__["default"].storeHash;

                                        jquery__WEBPACK_IMPORTED_MODULE_4___default.a.ajax({
                                            type: "PUT",
                                            url: _b2b_config__WEBPACK_IMPORTED_MODULE_10__["default"].apiRootUrl + '/cart?store_hash=' + bypass_store_hash + '&cart_id=' + cartId,
                                            data: JSON.stringify(cartItemObj),
                                            success: function success(data) {
                                                console.log("update price done.");
                                                window.location.reload();
                                            },
                                            error: function error(jqXHR, textStatus, errorThrown) {
                                                _this11.$overlay.hide();
                                                alert("update catalog price error");
                                            }
                                        });
                                    });
                                })();
                            }
                        }
                    })();
                } else {
                    _this11.$overlay.hide();
                }
            },
            error: function error(jqXHR, textStatus, errorThrown) {
                _this11.$overlay.hide();
                console.log("error", JSON.stringify(jqXHR));
                sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({
                    type: "error",
                    text: "There has some error, please try again."
                });
            }
        });
    };

    return Cart;
}(_page_manager__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ "./assets/js/theme/cart/shipping-estimator.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/cart/shipping-estimator.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var ShippingEstimator = function () {
    function ShippingEstimator($element) {
        _classCallCheck(this, ShippingEstimator);

        this.$element = $element;

        this.$state = $('[data-field-type="State"]', this.$element);
        this.initFormValidation();
        this.bindStateCountryChange();
        this.bindEstimatorEvents();
    }

    ShippingEstimator.prototype.initFormValidation = function initFormValidation() {
        var _this = this;

        this.shippingEstimator = 'form[data-shipping-estimator]';
        this.shippingValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
            submit: this.shippingEstimator + ' .shipping-estimate-submit'
        });

        $('.shipping-estimate-submit', this.$element).on('click', function (event) {
            // When switching between countries, the state/region is dynamic
            // Only perform a check for all fields when country has a value
            // Otherwise areAll('valid') will check country for validity
            if ($(_this.shippingEstimator + ' select[name="shipping-country"]').val()) {
                _this.shippingValidator.performCheck();
            }

            if (_this.shippingValidator.areAll('valid')) {
                return;
            }

            event.preventDefault();
        });

        this.bindValidation();
        this.bindStateValidation();
        this.bindUPSRates();
    };

    ShippingEstimator.prototype.bindValidation = function bindValidation() {
        this.shippingValidator.add([{
            selector: this.shippingEstimator + ' select[name="shipping-country"]',
            validate: function validate(cb, val) {
                var countryId = Number(val);
                var result = countryId !== 0 && !Number.isNaN(countryId);

                cb(result);
            },
            errorMessage: 'The \'Country\' field cannot be blank.'
        }]);
    };

    ShippingEstimator.prototype.bindStateValidation = function bindStateValidation() {
        var _this2 = this;

        this.shippingValidator.add([{
            selector: $(this.shippingEstimator + ' select[name="shipping-state"]'),
            validate: function validate(cb) {
                var result = void 0;

                var $ele = $(_this2.shippingEstimator + ' select[name="shipping-state"]');

                if ($ele.length) {
                    var eleVal = $ele.val();

                    result = eleVal && eleVal.length && eleVal !== 'State/province';
                }

                cb(result);
            },
            errorMessage: 'The \'State/Province\' field cannot be blank.'
        }]);
    };

    /**
     * Toggle between default shipping and ups shipping rates
     */


    ShippingEstimator.prototype.bindUPSRates = function bindUPSRates() {
        var UPSRateToggle = '.estimator-form-toggleUPSRate';

        $('body').on('click', UPSRateToggle, function (event) {
            var $estimatorFormUps = $('.estimator-form--ups');
            var $estimatorFormDefault = $('.estimator-form--default');

            event.preventDefault();

            $estimatorFormUps.toggleClass('u-hiddenVisually');
            $estimatorFormDefault.toggleClass('u-hiddenVisually');
        });
    };

    ShippingEstimator.prototype.bindStateCountryChange = function bindStateCountryChange() {
        var _this3 = this;

        var $last = void 0;

        // Requests the states for a country with AJAX
        Object(_common_state_country__WEBPACK_IMPORTED_MODULE_0__["default"])(this.$state, this.context, { useIdForStates: true }, function (err, field) {
            if (err) {
                Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_4__["default"])({
                    text: err,
                    type: 'error'
                });

                throw new Error(err);
            }

            var $field = $(field);

            if (_this3.shippingValidator.getStatus(_this3.$state) !== 'undefined') {
                _this3.shippingValidator.remove(_this3.$state);
            }

            if ($last) {
                _this3.shippingValidator.remove($last);
            }

            if ($field.is('select')) {
                $last = field;
                _this3.bindStateValidation();
            } else {
                $field.attr('placeholder', 'State/province');
                _common_form_utils__WEBPACK_IMPORTED_MODULE_3__["Validators"].cleanUpStateValidation(field);
            }

            // When you change a country, you swap the state/province between an input and a select dropdown
            // Not all countries require the province to be filled
            // We have to remove this class when we swap since nod validation doesn't cleanup for us
            $(_this3.shippingEstimator).find('.form-field--success').removeClass('form-field--success');
        });
    };

    ShippingEstimator.prototype.bindEstimatorEvents = function bindEstimatorEvents() {
        var $estimatorContainer = $('.shipping-estimator');
        var $estimatorForm = $('.estimator-form');

        $estimatorForm.on('submit', function (event) {
            var params = {
                country_id: $('[name="shipping-country"]', $estimatorForm).val(),
                state_id: $('[name="shipping-state"]', $estimatorForm).val(),
                city: $('[name="shipping-city"]', $estimatorForm).val(),
                zip_code: $('[name="shipping-zip"]', $estimatorForm).val()
            };

            event.preventDefault();

            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.getShippingQuotes(params, 'cart/shipping-quotes', function (err, response) {
                $('.shipping-quotes').html(response.content);

                // bind the select button
                $('.select-shipping-quote').on('click', function (clickEvent) {
                    var quoteId = $('.shipping-quote:checked').val();

                    clickEvent.preventDefault();

                    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.submitShippingQuote(quoteId, function () {
                        window.location.reload();
                    });
                });
            });
        });

        $('.shipping-estimate-show').on('click', function (event) {
            event.preventDefault();

            $(event.currentTarget).hide();
            $estimatorContainer.removeClass('u-hiddenVisually');
            $('.shipping-estimate-hide').show();
        });

        $('.shipping-estimate-hide').on('click', function (event) {
            event.preventDefault();

            $estimatorContainer.addClass('u-hiddenVisually');
            $('.shipping-estimate-show').show();
            $('.shipping-estimate-hide').hide();
        });
    };

    return ShippingEstimator;
}();

/* harmony default export */ __webpack_exports__["default"] = (ShippingEstimator);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/gift-certificate-validator.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/common/gift-certificate-validator.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (cert) {
    if (typeof cert !== 'string') {
        return false;
    }

    // Add any custom gift certificate validation logic here
    return true;
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2FydC9zaGlwcGluZy1lc3RpbWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9naWZ0LWNlcnRpZmljYXRlLXZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJDYXJ0Iiwib25SZWFkeSIsIiRjYXJ0Q29udGVudCIsIiQiLCIkY2FydE1lc3NhZ2VzIiwiJGNhcnRUb3RhbHMiLCIkb3ZlcmxheSIsImhpZGUiLCJiaW5kRXZlbnRzIiwiY2FydFVwZGF0ZSIsIiR0YXJnZXQiLCJpdGVtSWQiLCJkYXRhIiwiJGVsIiwib2xkUXR5IiwicGFyc2VJbnQiLCJ2YWwiLCJtYXhRdHkiLCJtaW5RdHkiLCJtaW5FcnJvciIsIm1heEVycm9yIiwibmV3UXR5Iiwic3dhbCIsInRleHQiLCJ0eXBlIiwic2hvdyIsInV0aWxzIiwiYXBpIiwiY2FydCIsIml0ZW1VcGRhdGUiLCJlcnIiLCJyZXNwb25zZSIsInN0YXR1cyIsInJlbW92ZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInVwZGF0ZUNhdGFsb2dQcmljZSIsInJlZnJlc2hDb250ZW50IiwiZXJyb3JzIiwiam9pbiIsImNhcnRSZW1vdmVJdGVtIiwiaXRlbVJlbW92ZSIsImNhcnRFZGl0T3B0aW9ucyIsIm1vZGFsIiwiZGVmYXVsdE1vZGFsIiwib3B0aW9ucyIsInRlbXBsYXRlIiwib3BlbiIsInByb2R1Y3RBdHRyaWJ1dGVzIiwiY29uZmlndXJlSW5DYXJ0IiwidXBkYXRlQ29udGVudCIsImNvbnRlbnQiLCJiaW5kR2lmdFdyYXBwaW5nRm9ybSIsImhvb2tzIiwib24iLCJldmVudCIsIm9wdGlvbiIsIiRjaGFuZ2VkT3B0aW9uIiwiJGZvcm0iLCJwYXJlbnRzIiwiJHN1Ym1pdCIsIiRtZXNzYWdlQm94IiwiaXRlbSIsImF0dHIiLCJvcHRpb25DaGFuZ2UiLCJzZXJpYWxpemUiLCJyZXN1bHQiLCJwdXJjaGFzaW5nX21lc3NhZ2UiLCJwcm9wIiwicHVyY2hhc2FibGUiLCJpbnN0b2NrIiwiJGNhcnRJdGVtc1Jvd3MiLCIkY2FydFBhZ2VUaXRsZSIsInRvdGFscyIsInBhZ2VUaXRsZSIsInN0YXR1c01lc3NhZ2VzIiwibGVuZ3RoIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJnZXRDb250ZW50IiwiaHRtbCIsInJlcGxhY2VXaXRoIiwicXVhbnRpdHkiLCJ0cmlnZ2VyIiwiYmluZENhcnRFdmVudHMiLCJkZWJvdW5jZVRpbWVvdXQiLCJjdXJyZW50VGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJzdHJpbmciLCJzaG93Q2FuY2VsQnV0dG9uIiwidGhlbiIsImJpbmRQcm9tb0NvZGVFdmVudHMiLCIkY291cG9uQ29udGFpbmVyIiwiJGNvdXBvbkZvcm0iLCIkY29kZUlucHV0IiwiY29kZSIsImFwcGx5Q29kZSIsImJpbmRHaWZ0Q2VydGlmaWNhdGVFdmVudHMiLCIkY2VydENvbnRhaW5lciIsIiRjZXJ0Rm9ybSIsIiRjZXJ0SW5wdXQiLCJ0b2dnbGUiLCJnaWZ0Q2VydENoZWNrIiwiYXBwbHlHaWZ0Q2VydGlmaWNhdGUiLCJyZXNwIiwiYmluZEdpZnRXcmFwcGluZ0V2ZW50cyIsImdldEl0ZW1HaWZ0V3JhcHBpbmdPcHRpb25zIiwiJHNlbGVjdCIsImlkIiwiaW5kZXgiLCJhbGxvd01lc3NhZ2UiLCJmaW5kIiwidG9nZ2xlVmlld3MiLCJ2YWx1ZSIsIiRzaW5nbGVGb3JtIiwiJG11bHRpRm9ybSIsInNoaXBwaW5nRXN0aW1hdG9yIiwiU2hpcHBpbmdFc3RpbWF0b3IiLCJnZXRWYXJpYW50SWRCeVByb2R1Y3RJZCIsInByb2R1Y3RJZCIsInZhcmlhbnRJZCIsImNhdGFsb2dfcHJvZHVjdHMiLCJ2YXJpYW50U2t1cyIsInZhcmlhbnRfaWQiLCJoYW5kbGVQaWNrTGlzdE9wdGlvbnMiLCJjYXJ0SXRlbU9iaiIsImNiIiwiY2FydEl0ZW1JZCIsIml0ZW1faWQiLCJwcm9kdWN0X2lkIiwiY29uc29sZSIsImxvZyIsInNlbGVjdGVkUGlja0xpc3RPcHRpbnMiLCJpIiwicGFydGlhbCIsIm9wdGlvblZhbHVlcyIsInZhbHVlcyIsImoiLCJvcHRpb25WYWx1ZSIsInNlbGVjdGVkIiwicHVzaCIsImFqYXgiLCJ1cmwiLCJjb25maWciLCJhcGlSb290VXJsIiwic3RvcmVIYXNoIiwic3VjY2VzcyIsImV4dHJhc19saXN0IiwiayIsInNob3dDdXN0b21QcmljZSIsIm9wdGlvbl9saXN0Iiwib3B0aW9uSWQiLCJvcHRpb25faWQiLCJvcHRpb25fdmFsdWUiLCJleHRyYV9wcm9kdWN0X2lkIiwib3B0aW9uX2RhdGEiLCJleHRyYV92YXJpYW50X2lkIiwiZXJyb3IiLCJqcVhIUiIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb250ZW50VHlwZSIsImFjY2VwdCIsImNhcnRJZCIsImNhcnRJdGVtc19hbGwiLCJsaW5lSXRlbXMiLCJwaHlzaWNhbEl0ZW1zIiwiY2FydEl0ZW1zIiwiZmlsdGVyIiwicGFyZW50SWQiLCJjYXJ0SXRlbSIsIml0ZW1Qcm9kdWN0SWQiLCJpdGVtVmFyaWFudElkIiwiaXRlbVF0eSIsImdDYXRhbG9nSWQiLCJieXBhc3Nfc3RvcmVfaGFzaCIsImFsZXJ0IiwiUGFnZU1hbmFnZXIiLCIkZWxlbWVudCIsIiRzdGF0ZSIsImluaXRGb3JtVmFsaWRhdGlvbiIsImJpbmRTdGF0ZUNvdW50cnlDaGFuZ2UiLCJiaW5kRXN0aW1hdG9yRXZlbnRzIiwic2hpcHBpbmdWYWxpZGF0b3IiLCJub2QiLCJzdWJtaXQiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJiaW5kVmFsaWRhdGlvbiIsImJpbmRTdGF0ZVZhbGlkYXRpb24iLCJiaW5kVVBTUmF0ZXMiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY291bnRyeUlkIiwiTnVtYmVyIiwiaXNOYU4iLCJlcnJvck1lc3NhZ2UiLCIkZWxlIiwiZWxlVmFsIiwiVVBTUmF0ZVRvZ2dsZSIsIiRlc3RpbWF0b3JGb3JtVXBzIiwiJGVzdGltYXRvckZvcm1EZWZhdWx0IiwidG9nZ2xlQ2xhc3MiLCIkbGFzdCIsInN0YXRlQ291bnRyeSIsImNvbnRleHQiLCJ1c2VJZEZvclN0YXRlcyIsImZpZWxkIiwiRXJyb3IiLCIkZmllbGQiLCJnZXRTdGF0dXMiLCJpcyIsIlZhbGlkYXRvcnMiLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwicmVtb3ZlQ2xhc3MiLCIkZXN0aW1hdG9yQ29udGFpbmVyIiwiJGVzdGltYXRvckZvcm0iLCJwYXJhbXMiLCJjb3VudHJ5X2lkIiwic3RhdGVfaWQiLCJjaXR5IiwiemlwX2NvZGUiLCJnZXRTaGlwcGluZ1F1b3RlcyIsInF1b3RlSWQiLCJjbGlja0V2ZW50Iiwic3VibWl0U2hpcHBpbmdRdW90ZSIsImFkZENsYXNzIiwiY2VydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztJQUVxQkEsSTs7Ozs7Ozs7O21CQUNqQkMsTyxzQkFBVTtBQUNOLGFBQUtDLFlBQUwsR0FBb0JDLDZDQUFDQSxDQUFDLHFCQUFGLENBQXBCO0FBQ0EsYUFBS0MsYUFBTCxHQUFxQkQsNkNBQUNBLENBQUMsb0JBQUYsQ0FBckI7QUFDQSxhQUFLRSxXQUFMLEdBQW1CRiw2Q0FBQ0EsQ0FBQyxvQkFBRixDQUFuQjtBQUNBLGFBQUtHLFFBQUwsR0FBZ0JILDZDQUFDQSxDQUFDLDZCQUFGLEVBQ1hJLElBRFcsRUFBaEIsQ0FKTSxDQUtPOztBQUViLGFBQUtDLFVBQUw7QUFDSCxLOzttQkFFREMsVSx1QkFBV0MsTyxFQUFTO0FBQUE7O0FBQ2hCLFlBQU1DLFNBQVNELFFBQVFFLElBQVIsQ0FBYSxZQUFiLENBQWY7QUFDQSxZQUFNQyxNQUFNViw2Q0FBQ0EsV0FBU1EsTUFBVixDQUFaO0FBQ0EsWUFBTUcsU0FBU0MsU0FBU0YsSUFBSUcsR0FBSixFQUFULEVBQW9C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RUFBNkJzQixJQUE3QjtBQUNBdEIsY0FBRSx5QkFBRixFQUE2QkksSUFBN0I7QUFDSCxTQU5EO0FBT0gsSzs7Ozs7QUEvS2dCK0csZ0Y7Ozs7Ozs7Ozs7Ozs7QUNOckI7QUFBZSx5RUFBVWlILElBQVYsRUFBZ0I7QUFDM0IsUUFBSSxPQUFPQSxJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQzFCLGVBQU8sS0FBUDtBQUNIOztBQUVEO0FBQ0EsV0FBTyxJQUFQO0FBQ0gsQyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBnaWZ0Q2VydENoZWNrIGZyb20gJy4vY29tbW9uL2dpZnQtY2VydGlmaWNhdGUtdmFsaWRhdG9yJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgU2hpcHBpbmdFc3RpbWF0b3IgZnJvbSAnLi9jYXJ0L3NoaXBwaW5nLWVzdGltYXRvcic7XG5pbXBvcnQge1xuICAgIGRlZmF1bHRNb2RhbFxufSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4vYjJiL2NvbmZpZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnQgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgdGhpcy4kY2FydENvbnRlbnQgPSAkKCdbZGF0YS1jYXJ0LWNvbnRlbnRdJyk7XG4gICAgICAgIHRoaXMuJGNhcnRNZXNzYWdlcyA9ICQoJ1tkYXRhLWNhcnQtc3RhdHVzXScpO1xuICAgICAgICB0aGlzLiRjYXJ0VG90YWxzID0gJCgnW2RhdGEtY2FydC10b3RhbHNdJyk7XG4gICAgICAgIHRoaXMuJG92ZXJsYXkgPSAkKCdbZGF0YS1jYXJ0XSAubG9hZGluZ092ZXJsYXknKVxuICAgICAgICAgICAgLmhpZGUoKTsgLy8gVE9ETzogdGVtcG9yYXJ5IHVudGlsIHJvcGVyIHB1bGxzIGluIGhpcyBjYXJ0IGNvbXBvbmVudHNcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBjYXJ0VXBkYXRlKCR0YXJnZXQpIHtcbiAgICAgICAgY29uc3QgaXRlbUlkID0gJHRhcmdldC5kYXRhKCdjYXJ0SXRlbWlkJyk7XG4gICAgICAgIGNvbnN0ICRlbCA9ICQoYCNxdHktJHtpdGVtSWR9YCk7XG4gICAgICAgIGNvbnN0IG9sZFF0eSA9IHBhcnNlSW50KCRlbC52YWwoKSwgMTApO1xuICAgICAgICBjb25zdCBtYXhRdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNYXgnKSwgMTApO1xuICAgICAgICBjb25zdCBtaW5RdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNaW4nKSwgMTApO1xuICAgICAgICBjb25zdCBtaW5FcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1pbkVycm9yJyk7XG4gICAgICAgIGNvbnN0IG1heEVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWF4RXJyb3InKTtcbiAgICAgICAgY29uc3QgbmV3UXR5ID0gJHRhcmdldC5kYXRhKCdhY3Rpb24nKSA9PT0gJ2luYycgPyBvbGRRdHkgKyAxIDogb2xkUXR5IC0gMTtcblxuICAgICAgICAvLyBEb2VzIG5vdCBxdWFsaXR5IGZvciBtaW4vbWF4IHF1YW50aXR5XG4gICAgICAgIGlmIChuZXdRdHkgPCBtaW5RdHkpIHtcbiAgICAgICAgICAgIHJldHVybiBzd2FsKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBtaW5FcnJvcixcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWF4UXR5ID4gMCAmJiBuZXdRdHkgPiBtYXhRdHkpIHtcbiAgICAgICAgICAgIHJldHVybiBzd2FsKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBtYXhFcnJvcixcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcblxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtVXBkYXRlKGl0ZW1JZCwgbmV3UXR5LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHF1YW50aXR5IGlzIGNoYW5nZWQgXCIxXCIgZnJvbSBcIjBcIiwgd2UgaGF2ZSB0byByZW1vdmUgdGhlIHJvdy5cbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSAobmV3UXR5ID09PSAwKTtcbiAgICAgICAgICAgICAgICAvL3RoaXMucmVmcmVzaENvbnRlbnQocmVtb3ZlKTtcblxuXG4gICAgICAgICAgICAgICAgLy9mb3IgYnVuZGxlYjJiXG4gICAgICAgICAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJidW5kbGViMmJfdXNlclwiKSAmJiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYnVuZGxlYjJiX3VzZXJcIikgIT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDYXRhbG9nUHJpY2UoaXRlbUlkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHJlbW92ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XG4gICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYXJ0UmVtb3ZlSXRlbShpdGVtSWQpIHtcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1SZW1vdmUoaXRlbUlkLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhcnRFZGl0T3B0aW9ucyhpdGVtSWQpIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9tb2RhbHMvY29uZmlndXJlLXByb2R1Y3QnLFxuICAgICAgICB9O1xuXG4gICAgICAgIG1vZGFsLm9wZW4oKTtcblxuICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMuY29uZmlndXJlSW5DYXJ0KGl0ZW1JZCwgb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UuY29udGVudCk7XG5cbiAgICAgICAgICAgIHRoaXMuYmluZEdpZnRXcmFwcGluZ0Zvcm0oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdXRpbHMuaG9va3Mub24oJ3Byb2R1Y3Qtb3B0aW9uLWNoYW5nZScsIChldmVudCwgb3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkY2hhbmdlZE9wdGlvbiA9ICQob3B0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0ICRmb3JtID0gJGNoYW5nZWRPcHRpb24ucGFyZW50cygnZm9ybScpO1xuICAgICAgICAgICAgY29uc3QgJHN1Ym1pdCA9ICQoJ2lucHV0LmJ1dHRvbicsICRmb3JtKTtcbiAgICAgICAgICAgIGNvbnN0ICRtZXNzYWdlQm94ID0gJCgnLmFsZXJ0TWVzc2FnZUJveCcpO1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9ICQoJ1tuYW1lPVwiaXRlbV9pZFwiXScsICRmb3JtKS5hdHRyKCd2YWx1ZScpO1xuXG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKGl0ZW0sICRmb3JtLnNlcmlhbGl6ZSgpLCAoZXJyLCByZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzdWx0LmRhdGEgfHwge307XG5cbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgncC5hbGVydEJveC1tZXNzYWdlJywgJG1lc3NhZ2VCb3gpLnRleHQoZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICRtZXNzYWdlQm94LnNob3coKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAkbWVzc2FnZUJveC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhLnB1cmNoYXNhYmxlIHx8ICFkYXRhLmluc3RvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZnJlc2hDb250ZW50KHJlbW92ZSkge1xuICAgICAgICBjb25zdCAkY2FydEl0ZW1zUm93cyA9ICQoJ1tkYXRhLWl0ZW0tcm93XScsIHRoaXMuJGNhcnRDb250ZW50KTtcbiAgICAgICAgY29uc3QgJGNhcnRQYWdlVGl0bGUgPSAkKCdbZGF0YS1jYXJ0LXBhZ2UtdGl0bGVdJyk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdjYXJ0L2NvbnRlbnQnLFxuICAgICAgICAgICAgICAgIHRvdGFsczogJ2NhcnQvdG90YWxzJyxcbiAgICAgICAgICAgICAgICBwYWdlVGl0bGU6ICdjYXJ0L3BhZ2UtdGl0bGUnLFxuICAgICAgICAgICAgICAgIHN0YXR1c01lc3NhZ2VzOiAnY2FydC9zdGF0dXMtbWVzc2FnZXMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcblxuICAgICAgICAvLyBSZW1vdmUgbGFzdCBpdGVtIGZyb20gY2FydD8gUmVsb2FkXG4gICAgICAgIGlmIChyZW1vdmUgJiYgJGNhcnRJdGVtc1Jvd3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0Q29udGVudChvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kY2FydENvbnRlbnQuaHRtbChyZXNwb25zZS5jb250ZW50KTtcbiAgICAgICAgICAgIHRoaXMuJGNhcnRUb3RhbHMuaHRtbChyZXNwb25zZS50b3RhbHMpO1xuICAgICAgICAgICAgdGhpcy4kY2FydE1lc3NhZ2VzLmh0bWwocmVzcG9uc2Uuc3RhdHVzTWVzc2FnZXMpO1xuXG4gICAgICAgICAgICAkY2FydFBhZ2VUaXRsZS5yZXBsYWNlV2l0aChyZXNwb25zZS5wYWdlVGl0bGUpO1xuICAgICAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcblxuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSAkKCdbZGF0YS1jYXJ0LXF1YW50aXR5XScsIHRoaXMuJGNhcnRDb250ZW50KS5kYXRhKCdjYXJ0UXVhbnRpdHknKSB8fCAwO1xuXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRDYXJ0RXZlbnRzKCkge1xuICAgICAgICBjb25zdCBkZWJvdW5jZVRpbWVvdXQgPSA0MDA7XG4gICAgICAgIGNvbnN0IGNhcnRVcGRhdGUgPSBfLmJpbmQoXy5kZWJvdW5jZSh0aGlzLmNhcnRVcGRhdGUsIGRlYm91bmNlVGltZW91dCksIHRoaXMpO1xuICAgICAgICBjb25zdCBjYXJ0UmVtb3ZlSXRlbSA9IF8uYmluZChfLmRlYm91bmNlKHRoaXMuY2FydFJlbW92ZUl0ZW0sIGRlYm91bmNlVGltZW91dCksIHRoaXMpO1xuXG4gICAgICAgIC8vIGNhcnQgdXBkYXRlXG4gICAgICAgICQoJ1tkYXRhLWNhcnQtdXBkYXRlXScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIGNhcnQgcXVhbnRpdHlcbiAgICAgICAgICAgIGNhcnRVcGRhdGUoJHRhcmdldCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5jYXJ0LXJlbW92ZScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2NhcnRJdGVtaWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHN0cmluZyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnY29uZmlybURlbGV0ZScpO1xuICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgdGV4dDogc3RyaW5nLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGl0ZW0gZnJvbSBjYXJ0XG4gICAgICAgICAgICAgICAgY2FydFJlbW92ZUl0ZW0oaXRlbUlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtaXRlbS1lZGl0XScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2l0ZW1FZGl0Jyk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyBlZGl0IGl0ZW0gaW4gY2FydFxuICAgICAgICAgICAgdGhpcy5jYXJ0RWRpdE9wdGlvbnMoaXRlbUlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZFByb21vQ29kZUV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgJGNvdXBvbkNvbnRhaW5lciA9ICQoJy5jb3Vwb24tY29kZScpO1xuICAgICAgICBjb25zdCAkY291cG9uRm9ybSA9ICQoJy5jb3Vwb24tZm9ybScpO1xuICAgICAgICBjb25zdCAkY29kZUlucHV0ID0gJCgnW25hbWU9XCJjb3Vwb25jb2RlXCJdJywgJGNvdXBvbkZvcm0pO1xuXG4gICAgICAgICQoJy5jb3Vwb24tY29kZS1hZGQnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmhpZGUoKTtcbiAgICAgICAgICAgICRjb3Vwb25Db250YWluZXIuc2hvdygpO1xuICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLnNob3coKTtcbiAgICAgICAgICAgICRjb2RlSW5wdXQudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICRjb3Vwb25Db250YWluZXIuaGlkZSgpO1xuICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLmhpZGUoKTtcbiAgICAgICAgICAgICQoJy5jb3Vwb24tY29kZS1hZGQnKS5zaG93KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRjb3Vwb25Gb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gJGNvZGVJbnB1dC52YWwoKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gRW1wdHkgY29kZVxuICAgICAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAkY29kZUlucHV0LmRhdGEoJ2Vycm9yJyksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmFwcGx5Q29kZShjb2RlLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRHaWZ0Q2VydGlmaWNhdGVFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0ICRjZXJ0Q29udGFpbmVyID0gJCgnLmdpZnQtY2VydGlmaWNhdGUtY29kZScpO1xuICAgICAgICBjb25zdCAkY2VydEZvcm0gPSAkKCcuY2FydC1naWZ0LWNlcnRpZmljYXRlLWZvcm0nKTtcbiAgICAgICAgY29uc3QgJGNlcnRJbnB1dCA9ICQoJ1tuYW1lPVwiY2VydGNvZGVcIl0nLCAkY2VydEZvcm0pO1xuXG4gICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWFkZCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJGNlcnRDb250YWluZXIudG9nZ2xlKCk7XG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS50b2dnbGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtY2FuY2VsJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICRjZXJ0Q29udGFpbmVyLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtYWRkJykudG9nZ2xlKCk7XG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS50b2dnbGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGNlcnRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gJGNlcnRJbnB1dC52YWwoKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKCFnaWZ0Q2VydENoZWNrKGNvZGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAkY2VydElucHV0LmRhdGEoJ2Vycm9yJyksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmFwcGx5R2lmdENlcnRpZmljYXRlKGNvZGUsIChlcnIsIHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcC5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3AuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEdpZnRXcmFwcGluZ0V2ZW50cygpIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcblxuICAgICAgICAkKCdbZGF0YS1pdGVtLWdpZnR3cmFwXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnaXRlbUdpZnR3cmFwJyk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9tb2RhbHMvZ2lmdC13cmFwcGluZy1mb3JtJyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIG1vZGFsLm9wZW4oKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0SXRlbUdpZnRXcmFwcGluZ09wdGlvbnMoaXRlbUlkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UuY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRHaWZ0V3JhcHBpbmdGb3JtKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEdpZnRXcmFwcGluZ0Zvcm0oKSB7XG4gICAgICAgICQoJy5naWZ0V3JhcHBpbmctc2VsZWN0Jykub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSAkc2VsZWN0LnZhbCgpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSAkc2VsZWN0LmRhdGEoJ2luZGV4Jyk7XG5cbiAgICAgICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGFsbG93TWVzc2FnZSA9ICRzZWxlY3QuZmluZChgb3B0aW9uW3ZhbHVlPSR7aWR9XWApLmRhdGEoJ2FsbG93TWVzc2FnZScpO1xuXG4gICAgICAgICAgICAkKGAuZ2lmdFdyYXBwaW5nLWltYWdlLSR7aW5kZXh9YCkuaGlkZSgpO1xuICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1pbWFnZS0ke2luZGV4fS0ke2lkfWApLnNob3coKTtcblxuICAgICAgICAgICAgaWYgKGFsbG93TWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICQoYCNnaWZ0V3JhcHBpbmctbWVzc2FnZS0ke2luZGV4fWApLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1tZXNzYWdlLSR7aW5kZXh9YCkuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuZ2lmdFdyYXBwaW5nLXNlbGVjdCcpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZVZpZXdzKCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAkKCdpbnB1dDpyYWRpb1tuYW1lID1cImdpZnR3cmFwdHlwZVwiXTpjaGVja2VkJykudmFsKCk7XG4gICAgICAgICAgICBjb25zdCAkc2luZ2xlRm9ybSA9ICQoJy5naWZ0V3JhcHBpbmctc2luZ2xlJyk7XG4gICAgICAgICAgICBjb25zdCAkbXVsdGlGb3JtID0gJCgnLmdpZnRXcmFwcGluZy1tdWx0aXBsZScpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09ICdzYW1lJykge1xuICAgICAgICAgICAgICAgICRzaW5nbGVGb3JtLnNob3coKTtcbiAgICAgICAgICAgICAgICAkbXVsdGlGb3JtLmhpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHNpbmdsZUZvcm0uaGlkZSgpO1xuICAgICAgICAgICAgICAgICRtdWx0aUZvcm0uc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJCgnW25hbWU9XCJnaWZ0d3JhcHR5cGVcIl0nKS5vbignY2xpY2snLCB0b2dnbGVWaWV3cyk7XG5cbiAgICAgICAgdG9nZ2xlVmlld3MoKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmJpbmRDYXJ0RXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYmluZFByb21vQ29kZUV2ZW50cygpO1xuICAgICAgICB0aGlzLmJpbmRHaWZ0V3JhcHBpbmdFdmVudHMoKTtcbiAgICAgICAgdGhpcy5iaW5kR2lmdENlcnRpZmljYXRlRXZlbnRzKCk7XG5cbiAgICAgICAgLy8gaW5pdGlhdGUgc2hpcHBpbmcgZXN0aW1hdG9yIG1vZHVsZVxuICAgICAgICB0aGlzLnNoaXBwaW5nRXN0aW1hdG9yID0gbmV3IFNoaXBwaW5nRXN0aW1hdG9yKCQoJ1tkYXRhLXNoaXBwaW5nLWVzdGltYXRvcl0nKSk7XG4gICAgfVxuXG4gICAgLy8gZm9yIGJ1bmRsZWIyYlxuICAgIC8vIGZvciBzaW1wbGUgcHJvZHVjdHNcbiAgICBnZXRWYXJpYW50SWRCeVByb2R1Y3RJZChwcm9kdWN0SWQpIHtcbiAgICAgICAgbGV0IHZhcmlhbnRJZDtcblxuICAgICAgICBpZiAodGhpcy5jYXRhbG9nX3Byb2R1Y3RzICYmIHRoaXMuY2F0YWxvZ19wcm9kdWN0c1twcm9kdWN0SWRdKSB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYW50U2t1cyA9IHRoaXMuY2F0YWxvZ19wcm9kdWN0c1twcm9kdWN0SWRdO1xuICAgICAgICAgICAgdmFyaWFudElkID0gdmFyaWFudFNrdXNbMF0udmFyaWFudF9pZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFyaWFudElkO1xuICAgIH1cblxuICAgIC8vIGZvciBidW5kbGViMmJcbiAgICBoYW5kbGVQaWNrTGlzdE9wdGlvbnMoY2FydEl0ZW1PYmosIGNiKSB7XG4gICAgICAgIGNvbnN0IGNhcnRJdGVtSWQgPSBjYXJ0SXRlbU9iai5pdGVtX2lkO1xuICAgICAgICBjb25zdCBwcm9kdWN0X2lkID0gY2FydEl0ZW1PYmoucHJvZHVjdF9pZDtcbiAgICAgICAgY29uc3QgdmFyaWFudF9pZCA9IGNhcnRJdGVtT2JqLnZhcmlhbnRfaWQ7XG5cbiAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLmNvbmZpZ3VyZUluQ2FydChjYXJ0SXRlbUlkLCB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2IyYi9jb25maWd1cmUtcHJvZHVjdC1kYXRhJyxcbiAgICAgICAgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRQaWNrTGlzdE9wdGlucyA9IFtdO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLm9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gcmVzcG9uc2UuZGF0YS5vcHRpb25zO1xuXG5cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBvcHRpb25zW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24ucGFydGlhbCA9PSBcInByb2R1Y3QtbGlzdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25WYWx1ZXMgPSBvcHRpb24udmFsdWVzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG9wdGlvblZhbHVlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvblZhbHVlID0gb3B0aW9uVmFsdWVzW2pdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvblZhbHVlLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUGlja0xpc3RPcHRpbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvbl9pZFwiOiBvcHRpb24uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvbl92YWx1ZVwiOiBvcHRpb25WYWx1ZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uX2RhdGFcIjogb3B0aW9uVmFsdWUuZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkUGlja0xpc3RPcHRpbnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRQaWNrTGlzdE9wdGlucykge1xuICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogYCR7Y29uZmlnLmFwaVJvb3RVcmx9L3Byb2R1Y3R2YXJpYW50cz9zdG9yZV9oYXNoPSR7Y29uZmlnLnN0b3JlSGFzaH0mcHJvZHVjdF9pZD0ke3Byb2R1Y3RfaWR9JnZhcmlhbnRfaWQ9JHt2YXJpYW50X2lkfWAsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBleHRyYXNfbGlzdCA9IFtdO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgc2VsZWN0ZWRQaWNrTGlzdE9wdGlucy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaG93Q3VzdG9tUHJpY2UgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5vcHRpb25fbGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gZGF0YS5vcHRpb25fbGlzdDtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgb3B0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uSWQgPSBvcHRpb25zW2pdLm9wdGlvbl9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvblZhbHVlID0gb3B0aW9uc1tqXS5vcHRpb25fdmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25JZCA9PSBzZWxlY3RlZFBpY2tMaXN0T3B0aW5zW2tdLm9wdGlvbl9pZCAmJiBvcHRpb25WYWx1ZSA9PSBzZWxlY3RlZFBpY2tMaXN0T3B0aW5zW2tdLm9wdGlvbl92YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDdXN0b21QcmljZSA9IGZhbHNlO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG93Q3VzdG9tUHJpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4dHJhX3Byb2R1Y3RfaWQgPSBzZWxlY3RlZFBpY2tMaXN0T3B0aW5zW2tdLm9wdGlvbl9kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXh0cmFfdmFyaWFudF9pZCA9IHRoaXMuZ2V0VmFyaWFudElkQnlQcm9kdWN0SWQoZXh0cmFfcHJvZHVjdF9pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXh0cmFfdmFyaWFudF9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhc19saXN0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4dHJhX3Byb2R1Y3RfaWRcIjogZXh0cmFfcHJvZHVjdF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHRyYV92YXJpYW50X2lkXCI6IGV4dHJhX3ZhcmlhbnRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFzX2xpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXh0cmFfcHJvZHVjdF9pZFwiOiBleHRyYV9wcm9kdWN0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXh0cmFzX2xpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJ0SXRlbU9iai5leHRyYXNfbGlzdCA9IF8uY2xvbmVEZWVwKGV4dHJhc19saXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgSlNPTi5zdHJpbmdpZnkoanFYSFIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLy9mb3IgYnVuZGxlYjJiXG4gICAgdXBkYXRlQ2F0YWxvZ1ByaWNlKGNhcnRJdGVtSWQsIGNiKSB7XG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgIHVybDogXCIuLi9hcGkvc3RvcmVmcm9udC9jYXJ0c1wiLFxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgYWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYXJ0XCIsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJ0SWQgPSBkYXRhWzBdLmlkO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhcnRJZFwiLCBjYXJ0SWQpO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnN0IGNhcnRJdGVtcyA9IGRhdGFbMF0ubGluZUl0ZW1zLnBoeXNpY2FsSXRlbXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcnRJdGVtc19hbGwgPSBkYXRhWzBdLmxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJ0SXRlbXMgPSBjYXJ0SXRlbXNfYWxsLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5wYXJlbnRJZCA9PSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcnRJdGVtcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJ0SXRlbSA9IGNhcnRJdGVtc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9IGNhcnRJdGVtLmlkO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXJ0SXRlbUlkID09IGl0ZW1JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1Qcm9kdWN0SWQgPSBjYXJ0SXRlbS5wcm9kdWN0SWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbVZhcmlhbnRJZCA9IGNhcnRJdGVtLnZhcmlhbnRJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtUXR5ID0gY2FydEl0ZW0ucXVhbnRpdHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ0NhdGFsb2dJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJjYXRhbG9nX2lkXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FydEl0ZW1PYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbV9pZFwiOiBpdGVtSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZHVjdF9pZFwiOiBpdGVtUHJvZHVjdElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhcmlhbnRfaWRcIjogaXRlbVZhcmlhbnRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiBpdGVtUXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhdGFsb2dfaWRcIjogZ0NhdGFsb2dJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInB1dGRhdGFcIiwgSlNPTi5zdHJpbmdpZnkoY2FydEl0ZW1PYmopKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlUGlja0xpc3RPcHRpb25zKGNhcnRJdGVtT2JqLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHV0ZGF0YTJcIiwgSlNPTi5zdHJpbmdpZnkoY2FydEl0ZW1PYmopKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBieXBhc3Nfc3RvcmVfaGFzaCA9IGAke2NvbmZpZy5zdG9yZUhhc2h9YDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQVVRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogYCR7Y29uZmlnLmFwaVJvb3RVcmx9L2NhcnQ/c3RvcmVfaGFzaD0ke2J5cGFzc19zdG9yZV9oYXNofSZjYXJ0X2lkPSR7Y2FydElkfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbU9iaiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRlIHByaWNlIGRvbmUuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwidXBkYXRlIGNhdGFsb2cgcHJpY2UgZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBKU09OLnN0cmluZ2lmeShqcVhIUikpO1xuICAgICAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiVGhlcmUgaGFzIHNvbWUgZXJyb3IsIHBsZWFzZSB0cnkgYWdhaW4uXCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG59IiwiaW1wb3J0IHN0YXRlQ291bnRyeSBmcm9tICcuLi9jb21tb24vc3RhdGUtY291bnRyeSc7XG5pbXBvcnQgbm9kIGZyb20gJy4uL2NvbW1vbi9ub2QnO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICcuLi9jb21tb24vZm9ybS11dGlscyc7XG5pbXBvcnQgc3dhbCBmcm9tICcuLi9nbG9iYWwvc3dlZXQtYWxlcnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwcGluZ0VzdGltYXRvciB7XG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xuXG4gICAgICAgIHRoaXMuJHN0YXRlID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJywgdGhpcy4kZWxlbWVudCk7XG4gICAgICAgIHRoaXMuaW5pdEZvcm1WYWxpZGF0aW9uKCk7XG4gICAgICAgIHRoaXMuYmluZFN0YXRlQ291bnRyeUNoYW5nZSgpO1xuICAgICAgICB0aGlzLmJpbmRFc3RpbWF0b3JFdmVudHMoKTtcbiAgICB9XG5cbiAgICBpbml0Rm9ybVZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2hpcHBpbmdFc3RpbWF0b3IgPSAnZm9ybVtkYXRhLXNoaXBwaW5nLWVzdGltYXRvcl0nO1xuICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gLnNoaXBwaW5nLWVzdGltYXRlLXN1Ym1pdGAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1zdWJtaXQnLCB0aGlzLiRlbGVtZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICAvLyBXaGVuIHN3aXRjaGluZyBiZXR3ZWVuIGNvdW50cmllcywgdGhlIHN0YXRlL3JlZ2lvbiBpcyBkeW5hbWljXG4gICAgICAgICAgICAvLyBPbmx5IHBlcmZvcm0gYSBjaGVjayBmb3IgYWxsIGZpZWxkcyB3aGVuIGNvdW50cnkgaGFzIGEgdmFsdWVcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSBhcmVBbGwoJ3ZhbGlkJykgd2lsbCBjaGVjayBjb3VudHJ5IGZvciB2YWxpZGl0eVxuICAgICAgICAgICAgaWYgKCQoYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1jb3VudHJ5XCJdYCkudmFsKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYmluZFZhbGlkYXRpb24oKTtcbiAgICAgICAgdGhpcy5iaW5kU3RhdGVWYWxpZGF0aW9uKCk7XG4gICAgICAgIHRoaXMuYmluZFVQU1JhdGVzKCk7XG4gICAgfVxuXG4gICAgYmluZFZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1jb3VudHJ5XCJdYCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY291bnRyeUlkID0gTnVtYmVyKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvdW50cnlJZCAhPT0gMCAmJiAhTnVtYmVyLmlzTmFOKGNvdW50cnlJZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1RoZSBcXCdDb3VudHJ5XFwnIGZpZWxkIGNhbm5vdCBiZSBibGFuay4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgYmluZFN0YXRlVmFsaWRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctc3RhdGVcIl1gKSxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGVsZSA9ICQoYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1zdGF0ZVwiXWApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkZWxlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlVmFsID0gJGVsZS52YWwoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZWxlVmFsICYmIGVsZVZhbC5sZW5ndGggJiYgZWxlVmFsICE9PSAnU3RhdGUvcHJvdmluY2UnO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1RoZSBcXCdTdGF0ZS9Qcm92aW5jZVxcJyBmaWVsZCBjYW5ub3QgYmUgYmxhbmsuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBiZXR3ZWVuIGRlZmF1bHQgc2hpcHBpbmcgYW5kIHVwcyBzaGlwcGluZyByYXRlc1xuICAgICAqL1xuICAgIGJpbmRVUFNSYXRlcygpIHtcbiAgICAgICAgY29uc3QgVVBTUmF0ZVRvZ2dsZSA9ICcuZXN0aW1hdG9yLWZvcm0tdG9nZ2xlVVBTUmF0ZSc7XG5cbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsIFVQU1JhdGVUb2dnbGUsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGVzdGltYXRvckZvcm1VcHMgPSAkKCcuZXN0aW1hdG9yLWZvcm0tLXVwcycpO1xuICAgICAgICAgICAgY29uc3QgJGVzdGltYXRvckZvcm1EZWZhdWx0ID0gJCgnLmVzdGltYXRvci1mb3JtLS1kZWZhdWx0Jyk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICRlc3RpbWF0b3JGb3JtVXBzLnRvZ2dsZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICAkZXN0aW1hdG9yRm9ybURlZmF1bHQudG9nZ2xlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZFN0YXRlQ291bnRyeUNoYW5nZSgpIHtcbiAgICAgICAgbGV0ICRsYXN0O1xuXG4gICAgICAgIC8vIFJlcXVlc3RzIHRoZSBzdGF0ZXMgZm9yIGEgY291bnRyeSB3aXRoIEFKQVhcbiAgICAgICAgc3RhdGVDb3VudHJ5KHRoaXMuJHN0YXRlLCB0aGlzLmNvbnRleHQsIHsgdXNlSWRGb3JTdGF0ZXM6IHRydWUgfSwgKGVyciwgZmllbGQpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZXJyLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5nZXRTdGF0dXModGhpcy4kc3RhdGUpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IucmVtb3ZlKHRoaXMuJHN0YXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRsYXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kU3RhdGVWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRmaWVsZC5hdHRyKCdwbGFjZWhvbGRlcicsICdTdGF0ZS9wcm92aW5jZScpO1xuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFdoZW4geW91IGNoYW5nZSBhIGNvdW50cnksIHlvdSBzd2FwIHRoZSBzdGF0ZS9wcm92aW5jZSBiZXR3ZWVuIGFuIGlucHV0IGFuZCBhIHNlbGVjdCBkcm9wZG93blxuICAgICAgICAgICAgLy8gTm90IGFsbCBjb3VudHJpZXMgcmVxdWlyZSB0aGUgcHJvdmluY2UgdG8gYmUgZmlsbGVkXG4gICAgICAgICAgICAvLyBXZSBoYXZlIHRvIHJlbW92ZSB0aGlzIGNsYXNzIHdoZW4gd2Ugc3dhcCBzaW5jZSBub2QgdmFsaWRhdGlvbiBkb2Vzbid0IGNsZWFudXAgZm9yIHVzXG4gICAgICAgICAgICAkKHRoaXMuc2hpcHBpbmdFc3RpbWF0b3IpLmZpbmQoJy5mb3JtLWZpZWxkLS1zdWNjZXNzJykucmVtb3ZlQ2xhc3MoJ2Zvcm0tZmllbGQtLXN1Y2Nlc3MnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEVzdGltYXRvckV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgJGVzdGltYXRvckNvbnRhaW5lciA9ICQoJy5zaGlwcGluZy1lc3RpbWF0b3InKTtcbiAgICAgICAgY29uc3QgJGVzdGltYXRvckZvcm0gPSAkKCcuZXN0aW1hdG9yLWZvcm0nKTtcblxuICAgICAgICAkZXN0aW1hdG9yRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIGNvdW50cnlfaWQ6ICQoJ1tuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgICAgICBzdGF0ZV9pZDogJCgnW25hbWU9XCJzaGlwcGluZy1zdGF0ZVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgICAgICBjaXR5OiAkKCdbbmFtZT1cInNoaXBwaW5nLWNpdHlcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXG4gICAgICAgICAgICAgICAgemlwX2NvZGU6ICQoJ1tuYW1lPVwic2hpcHBpbmctemlwXCJdJywgJGVzdGltYXRvckZvcm0pLnZhbCgpLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0U2hpcHBpbmdRdW90ZXMocGFyYW1zLCAnY2FydC9zaGlwcGluZy1xdW90ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy5zaGlwcGluZy1xdW90ZXMnKS5odG1sKHJlc3BvbnNlLmNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gYmluZCB0aGUgc2VsZWN0IGJ1dHRvblxuICAgICAgICAgICAgICAgICQoJy5zZWxlY3Qtc2hpcHBpbmctcXVvdGUnKS5vbignY2xpY2snLCBjbGlja0V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVvdGVJZCA9ICQoJy5zaGlwcGluZy1xdW90ZTpjaGVja2VkJykudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2xpY2tFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LnN1Ym1pdFNoaXBwaW5nUXVvdGUocXVvdGVJZCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtc2hvdycpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuaGlkZSgpO1xuICAgICAgICAgICAgJGVzdGltYXRvckNvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLWhpZGUnKS5zaG93KCk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLWhpZGUnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkZXN0aW1hdG9yQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtc2hvdycpLnNob3coKTtcbiAgICAgICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1oaWRlJykuaGlkZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY2VydCkge1xuICAgIGlmICh0eXBlb2YgY2VydCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIEFkZCBhbnkgY3VzdG9tIGdpZnQgY2VydGlmaWNhdGUgdmFsaWRhdGlvbiBsb2dpYyBoZXJlXG4gICAgcmV0dXJuIHRydWU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9