(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./assets/js/theme/search.js":
/*!***********************************!*\
  !*** ./assets/js/theme/search.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _common_url_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jstree */ "./node_modules/jstree/dist/jstree.min.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jstree__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Search = function (_CatalogPage) {
    _inherits(Search, _CatalogPage);

    function Search() {
        _classCallCheck(this, Search);

        return _possibleConstructorReturn(this, _CatalogPage.apply(this, arguments));
    }

    Search.prototype.formatCategoryTreeForJSTree = function formatCategoryTreeForJSTree(node) {
        var _this2 = this;

        var nodeData = {
            text: node.data,
            id: node.metadata.id,
            state: {
                selected: node.selected
            }
        };

        if (node.state) {
            nodeData.state.opened = node.state === 'open';
            nodeData.children = true;
        }

        if (node.children) {
            nodeData.children = [];
            node.children.forEach(function (childNode) {
                nodeData.children.push(_this2.formatCategoryTreeForJSTree(childNode));
            });
        }

        return nodeData;
    };

    Search.prototype.showProducts = function showProducts() {
        var url = _common_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].replaceParams(window.location.href, {
            section: 'product'
        });

        this.$productListingContainer.removeClass('u-hiddenVisually');
        this.$facetedSearchContainer.removeClass('u-hiddenVisually');
        this.$contentResultsContainer.addClass('u-hiddenVisually');

        jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-content-results-toggle]').removeClass('navBar-action-color--active');
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-content-results-toggle]').addClass('navBar-action');

        jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-results-toggle]').removeClass('navBar-action');
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-results-toggle]').addClass('navBar-action-color--active');

        _common_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].goToUrl(url);
    };

    Search.prototype.showContent = function showContent() {
        var url = _common_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].replaceParams(window.location.href, {
            section: 'content'
        });

        this.$contentResultsContainer.removeClass('u-hiddenVisually');
        this.$productListingContainer.addClass('u-hiddenVisually');
        this.$facetedSearchContainer.addClass('u-hiddenVisually');

        jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-results-toggle]').removeClass('navBar-action-color--active');
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-results-toggle]').addClass('navBar-action');

        jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-content-results-toggle]').removeClass('navBar-action');
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-content-results-toggle]').addClass('navBar-action-color--active');

        _common_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].goToUrl(url);
    };

    Search.prototype.onReady = function onReady() {
        var _this3 = this;

        var $searchForm = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-advanced-search-form]');
        var $categoryTreeContainer = $searchForm.find('[data-search-category-tree]');
        var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);
        var treeData = [];
        this.$productListingContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#product-listing-container');
        this.$facetedSearchContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#faceted-search-container');
        this.$contentResultsContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#search-results-content');

        // Init faceted search
        if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#facetedSearch').length > 0) {
            this.initFacetedSearch();
        } else {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
        }

        // Init collapsibles
        Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_6__["default"])();

        jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-results-toggle]').on('click', function (event) {
            event.preventDefault();
            _this3.showProducts();
        });

        jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-content-results-toggle]').on('click', function (event) {
            event.preventDefault();
            _this3.showContent();
        });

        if (this.$productListingContainer.find('li.product').length === 0 || url.query.section === 'content') {
            this.showContent();
        } else {
            this.showProducts();
        }

        var validator = this.initValidation($searchForm).bindValidation($searchForm.find('#search_query_adv'));

        this.context.categoryTree.forEach(function (node) {
            treeData.push(_this3.formatCategoryTreeForJSTree(node));
        });

        this.categoryTreeData = treeData;
        this.createCategoryTree($categoryTreeContainer);

        $searchForm.on('submit', function (event) {
            var selectedCategoryIds = $categoryTreeContainer.jstree().get_selected();

            if (!validator.check()) {
                return event.preventDefault();
            }

            $searchForm.find('input[name="category\[\]"]').remove();

            for (var _iterator = selectedCategoryIds, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                var _ref;

                if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref = _i.value;
                }

                var categoryId = _ref;

                var input = jquery__WEBPACK_IMPORTED_MODULE_2___default()('<input>', {
                    type: 'hidden',
                    name: 'category[]',
                    value: categoryId
                });

                $searchForm.append(input);
            }
        });

        //for b2b user
        if (sessionStorage.getItem("bundleb2b_user") && sessionStorage.getItem("bundleb2b_user") != "none") {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()(".body").addClass("b2b-products");
            this.handleCatalogProducts();
        } else {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()(".navList-item .product-count").show();
        }
    };

    Search.prototype.loadTreeNodes = function loadTreeNodes(node, cb) {
        var _this4 = this;

        jquery__WEBPACK_IMPORTED_MODULE_2___default.a.ajax({
            url: '/remote/v1/category-tree',
            data: {
                selectedCategoryId: node.id,
                prefix: 'category'
            }
        }).done(function (data) {
            var formattedResults = [];

            data.forEach(function (dataNode) {
                formattedResults.push(_this4.formatCategoryTreeForJSTree(dataNode));
            });

            cb(formattedResults);
        });
    };

    Search.prototype.createCategoryTree = function createCategoryTree($container) {
        var _this5 = this;

        var treeOptions = {
            core: {
                data: function data(node, cb) {
                    // Root node
                    if (node.id === '#') {
                        cb(_this5.categoryTreeData);
                    } else {
                        // Lazy loaded children
                        _this5.loadTreeNodes(node, cb);
                    }
                },
                themes: {
                    icons: true
                }
            },
            checkbox: {
                three_state: false
            },
            plugins: ['checkbox']
        };

        $container.jstree(treeOptions);
    };

    Search.prototype.initFacetedSearch = function initFacetedSearch() {
        var _this6 = this;

        var $productListingContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#product-listing-container');
        var $facetedSearchContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#faceted-search-container');
        var $searchHeading = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#search-results-heading');
        var $searchCount = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#search-results-product-count');
        var productsPerPage = this.context.searchProductsPerPage;
        var requestOptions = {
            template: {
                productListing: 'search/product-listing',
                sidebar: 'search/sidebar',
                heading: 'search/heading',
                productCount: 'search/product-count'
            },
            config: {
                product_results: {
                    limit: productsPerPage
                }
            },
            showMore: 'search/show-more'
        };

        this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
            $productListingContainer.html(content.productListing);
            $facetedSearchContainer.html(content.sidebar);
            $searchHeading.html(content.heading);
            $searchCount.html(content.productCount);

            if (sessionStorage.getItem("bundleb2b_user") && sessionStorage.getItem("bundleb2b_user") != "none") {
                //for b2b user
                _this6.handleCatalogProducts();
            } else {
                //for non b2b user
                jquery__WEBPACK_IMPORTED_MODULE_2___default()(".navList-item .product-count").show();
            }

            jquery__WEBPACK_IMPORTED_MODULE_2___default()('html, body').animate({
                scrollTop: 0
            }, 100);
        });
    };

    Search.prototype.initValidation = function initValidation($form) {
        this.$form = $form;
        this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_8__["default"])({
            submit: $form
        });

        return this;
    };

    Search.prototype.bindValidation = function bindValidation($element) {
        if (this.validator) {
            this.validator.add({
                selector: $element,
                validate: 'presence',
                errorMessage: $element.data('errorMessage')
            });
        }

        return this;
    };

    Search.prototype.check = function check() {
        if (this.validator) {
            this.validator.performCheck();
            return this.validator.areAll('valid');
        }

        return false;
    };

    //for b2b


    Search.prototype.handleCatalogProducts = function handleCatalogProducts() {
        var catalog_products = JSON.parse(sessionStorage.getItem("catalog_products"));
        var products = jquery__WEBPACK_IMPORTED_MODULE_2___default()(".product");

        for (var product_id in catalog_products) {

            var productSelector = '[catalog-product-' + product_id + ']';
            if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('' + productSelector).length > 0) {

                jquery__WEBPACK_IMPORTED_MODULE_2___default()('' + productSelector).attr("catalog-product", "true");

                var base_price = jquery__WEBPACK_IMPORTED_MODULE_2___default()('' + productSelector).find(".price.price--withTax").text().replace("$", "").replace(",", "") || jquery__WEBPACK_IMPORTED_MODULE_2___default()('' + productSelector).find(".price.price--withoutTax").text().replace("$", "").replace(",", "");
                var tier_price = void 0;
                var catalog_price = void 0;
                var variantArr = catalog_products[product_id] || [];
                if (variantArr.length == 1) {
                    tier_price = variantArr[0].tier_price || [];
                    catalog_price = this.getCatalogPrice(base_price, tier_price, 1);
                }
                if (catalog_price) {
                    jquery__WEBPACK_IMPORTED_MODULE_2___default()('' + productSelector).find(".price.price--withoutTax").text("$" + parseFloat(catalog_price).toFixed(2));
                    jquery__WEBPACK_IMPORTED_MODULE_2___default()('' + productSelector).find(".price.price--withTax").text("$" + parseFloat(catalog_price).toFixed(2));
                }
            }
        }

        //product Gallery, for listing page
        var $productGallery = jquery__WEBPACK_IMPORTED_MODULE_2___default()("[b2b-products-gallery]");
        $productGallery.each(function () {
            var catalogProductCount = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).find("[catalog-product]").length;
            if (catalogProductCount == 0) {
                jquery__WEBPACK_IMPORTED_MODULE_2___default()("[catalog-listing-wrap]").show();
                jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).parents(".page").html("We can't find products matching the selection.");
            } else {
                jquery__WEBPACK_IMPORTED_MODULE_2___default()("[catalog-listing-wrap]").show();
                var $catalogProductCounter = jquery__WEBPACK_IMPORTED_MODULE_2___default()("[data-catalog-product-counter]");
                if ($catalogProductCounter.length > 0) {
                    $catalogProductCounter.text(catalogProductCount);
                }
            }
        });
    };

    //for bundleb2b


    Search.prototype.getCatalogPrice = function getCatalogPrice(base_price, tier_price_array, qty) {
        //let tier_price = base_price;
        var tier_price = base_price;

        for (var j = 0; j < tier_price_array.length; j++) {
            var type = tier_price_array[j].type;
            var base_qty = tier_price_array[j].qty;
            var price = tier_price_array[j].price;

            if (qty >= base_qty) {
                if (type == "fixed") {
                    tier_price = price;
                } else {
                    tier_price = base_price - base_price * price / 100;
                }
            }
        }
        return tier_price;
    };

    return Search;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvc2VhcmNoLmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsImZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZSIsIm5vZGUiLCJub2RlRGF0YSIsInRleHQiLCJkYXRhIiwiaWQiLCJtZXRhZGF0YSIsInN0YXRlIiwic2VsZWN0ZWQiLCJvcGVuZWQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJwdXNoIiwic2hvd1Byb2R1Y3RzIiwidXJsIiwidXJsVXRpbHMiLCJyZXBsYWNlUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic2VjdGlvbiIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsInJlbW92ZUNsYXNzIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCIkY29udGVudFJlc3VsdHNDb250YWluZXIiLCJhZGRDbGFzcyIsIiQiLCJnb1RvVXJsIiwic2hvd0NvbnRlbnQiLCJvblJlYWR5IiwiJHNlYXJjaEZvcm0iLCIkY2F0ZWdvcnlUcmVlQ29udGFpbmVyIiwiZmluZCIsIlVybCIsInBhcnNlIiwidHJlZURhdGEiLCJsZW5ndGgiLCJpbml0RmFjZXRlZFNlYXJjaCIsIm9uU29ydEJ5U3VibWl0IiwiYmluZCIsImhvb2tzIiwib24iLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicXVlcnkiLCJ2YWxpZGF0b3IiLCJpbml0VmFsaWRhdGlvbiIsImJpbmRWYWxpZGF0aW9uIiwiY29udGV4dCIsImNhdGVnb3J5VHJlZSIsImNhdGVnb3J5VHJlZURhdGEiLCJjcmVhdGVDYXRlZ29yeVRyZWUiLCJzZWxlY3RlZENhdGVnb3J5SWRzIiwianN0cmVlIiwiZ2V0X3NlbGVjdGVkIiwiY2hlY2siLCJyZW1vdmUiLCJjYXRlZ29yeUlkIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiYXBwZW5kIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiaGFuZGxlQ2F0YWxvZ1Byb2R1Y3RzIiwic2hvdyIsImxvYWRUcmVlTm9kZXMiLCJjYiIsImFqYXgiLCJzZWxlY3RlZENhdGVnb3J5SWQiLCJwcmVmaXgiLCJkb25lIiwiZm9ybWF0dGVkUmVzdWx0cyIsImRhdGFOb2RlIiwiJGNvbnRhaW5lciIsInRyZWVPcHRpb25zIiwiY29yZSIsInRoZW1lcyIsImljb25zIiwiY2hlY2tib3giLCJ0aHJlZV9zdGF0ZSIsInBsdWdpbnMiLCIkc2VhcmNoSGVhZGluZyIsIiRzZWFyY2hDb3VudCIsInByb2R1Y3RzUGVyUGFnZSIsInNlYXJjaFByb2R1Y3RzUGVyUGFnZSIsInJlcXVlc3RPcHRpb25zIiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsInNpZGViYXIiLCJoZWFkaW5nIiwicHJvZHVjdENvdW50IiwiY29uZmlnIiwicHJvZHVjdF9yZXN1bHRzIiwibGltaXQiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJGYWNldGVkU2VhcmNoIiwiY29udGVudCIsImh0bWwiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiJGZvcm0iLCJub2QiLCJzdWJtaXQiLCIkZWxlbWVudCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJlcnJvck1lc3NhZ2UiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJjYXRhbG9nX3Byb2R1Y3RzIiwiSlNPTiIsInByb2R1Y3RzIiwicHJvZHVjdF9pZCIsInByb2R1Y3RTZWxlY3RvciIsImF0dHIiLCJiYXNlX3ByaWNlIiwicmVwbGFjZSIsInRpZXJfcHJpY2UiLCJjYXRhbG9nX3ByaWNlIiwidmFyaWFudEFyciIsImdldENhdGFsb2dQcmljZSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiJHByb2R1Y3RHYWxsZXJ5IiwiZWFjaCIsImNhdGFsb2dQcm9kdWN0Q291bnQiLCJwYXJlbnRzIiwiJGNhdGFsb2dQcm9kdWN0Q291bnRlciIsInRpZXJfcHJpY2VfYXJyYXkiLCJxdHkiLCJqIiwiYmFzZV9xdHkiLCJwcmljZSIsIkNh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SUFBNUI7QUFDQXpDLDZEQUFDQSxDQUFDLElBQUYsRUFBUXlHLE9BQVIsQ0FBZ0IsT0FBaEIsRUFBeUI5QixJQUF6QixDQUE4QixnREFBOUI7QUFDSCxhQUhELE1BR087QUFDSDNFLDZEQUFDQSxDQUFDLHdCQUFGLEVBQTRCeUMsSUFBNUI7QUFDQSxvQkFBTWlFLHlCQUF5QjFHLDZDQUFDQSxDQUFDLGdDQUFGLENBQS9CO0FBQ0Esb0JBQUkwRyx1QkFBdUJoRyxNQUF2QixHQUFnQyxDQUFwQyxFQUF1QztBQUNuQ2dHLDJDQUF1QmxJLElBQXZCLENBQTRCZ0ksbUJBQTVCO0FBQ0g7QUFDSjtBQUNKLFNBWkQ7QUFjSCxLOztBQUVEOzs7cUJBQ0FMLGUsNEJBQWdCTCxVLEVBQVlhLGdCLEVBQWtCQyxHLEVBQUs7QUFDL0M7QUFDQSxZQUFJWixhQUFhRixVQUFqQjs7QUFFQSxhQUFLLElBQUllLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsaUJBQWlCakcsTUFBckMsRUFBNkNtRyxHQUE3QyxFQUFrRDtBQUM5QyxnQkFBTTNFLE9BQU95RSxpQkFBaUJFLENBQWpCLEVBQW9CM0UsSUFBakM7QUFDQSxnQkFBTTRFLFdBQVdILGlCQUFpQkUsQ0FBakIsRUFBb0JELEdBQXJDO0FBQ0EsZ0JBQU1HLFFBQVFKLGlCQUFpQkUsQ0FBakIsRUFBb0JFLEtBQWxDOztBQUVBLGdCQUFJSCxPQUFPRSxRQUFYLEVBQXFCO0FBQ2pCLG9CQUFJNUUsUUFBUSxPQUFaLEVBQXFCO0FBQ2pCOEQsaUNBQWFlLEtBQWI7QUFFSCxpQkFIRCxNQUdPO0FBQ0hmLGlDQUFhRixhQUFhQSxhQUFhaUIsS0FBYixHQUFxQixHQUEvQztBQUNIO0FBQ0o7QUFDSjtBQUNELGVBQU9mLFVBQVA7QUFDSCxLOzs7RUFoVStCZ0IsZ0Q7O0FBQWY1SSxxRSIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIGhvb2tzXG59IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBDYXRhbG9nUGFnZSBmcm9tICcuL2NhdGFsb2cnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBGYWNldGVkU2VhcmNoIGZyb20gJy4vY29tbW9uL2ZhY2V0ZWQtc2VhcmNoJztcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL2NvbW1vbi91cmwtdXRpbHMnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgJ2pzdHJlZSc7XG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIENhdGFsb2dQYWdlIHtcbiAgICBmb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUobm9kZSkge1xuICAgICAgICBjb25zdCBub2RlRGF0YSA9IHtcbiAgICAgICAgICAgIHRleHQ6IG5vZGUuZGF0YSxcbiAgICAgICAgICAgIGlkOiBub2RlLm1ldGFkYXRhLmlkLFxuICAgICAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogbm9kZS5zZWxlY3RlZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG5vZGUuc3RhdGUpIHtcbiAgICAgICAgICAgIG5vZGVEYXRhLnN0YXRlLm9wZW5lZCA9IG5vZGUuc3RhdGUgPT09ICdvcGVuJztcbiAgICAgICAgICAgIG5vZGVEYXRhLmNoaWxkcmVuID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbiA9IFtdO1xuICAgICAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbi5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKGNoaWxkTm9kZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZURhdGE7XG4gICAgfVxuXG4gICAgc2hvd1Byb2R1Y3RzKCkge1xuICAgICAgICBjb25zdCB1cmwgPSB1cmxVdGlscy5yZXBsYWNlUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB7XG4gICAgICAgICAgICBzZWN0aW9uOiAncHJvZHVjdCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIHRoaXMuJGZhY2V0ZWRTZWFyY2hDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgdGhpcy4kY29udGVudFJlc3VsdHNDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcblxuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuICAgIH1cblxuICAgIHNob3dDb250ZW50KCkge1xuICAgICAgICBjb25zdCB1cmwgPSB1cmxVdGlscy5yZXBsYWNlUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB7XG4gICAgICAgICAgICBzZWN0aW9uOiAnY29udGVudCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIHRoaXMuJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xuXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0ICRzZWFyY2hGb3JtID0gJCgnW2RhdGEtYWR2YW5jZWQtc2VhcmNoLWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRjYXRlZ29yeVRyZWVDb250YWluZXIgPSAkc2VhcmNoRm9ybS5maW5kKCdbZGF0YS1zZWFyY2gtY2F0ZWdvcnktdHJlZV0nKTtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgdHJlZURhdGEgPSBbXTtcbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLiRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLiRjb250ZW50UmVzdWx0c0NvbnRhaW5lciA9ICQoJyNzZWFyY2gtcmVzdWx0cy1jb250ZW50Jyk7XG5cbiAgICAgICAgLy8gSW5pdCBmYWNldGVkIHNlYXJjaFxuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmZpbmQoJ2xpLnByb2R1Y3QnKS5sZW5ndGggPT09IDAgfHwgdXJsLnF1ZXJ5LnNlY3Rpb24gPT09ICdjb250ZW50Jykge1xuICAgICAgICAgICAgdGhpcy5zaG93Q29udGVudCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93UHJvZHVjdHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMuaW5pdFZhbGlkYXRpb24oJHNlYXJjaEZvcm0pXG4gICAgICAgICAgICAuYmluZFZhbGlkYXRpb24oJHNlYXJjaEZvcm0uZmluZCgnI3NlYXJjaF9xdWVyeV9hZHYnKSk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmNhdGVnb3J5VHJlZS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICB0cmVlRGF0YS5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKG5vZGUpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jYXRlZ29yeVRyZWVEYXRhID0gdHJlZURhdGE7XG4gICAgICAgIHRoaXMuY3JlYXRlQ2F0ZWdvcnlUcmVlKCRjYXRlZ29yeVRyZWVDb250YWluZXIpO1xuXG4gICAgICAgICRzZWFyY2hGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZENhdGVnb3J5SWRzID0gJGNhdGVnb3J5VHJlZUNvbnRhaW5lci5qc3RyZWUoKS5nZXRfc2VsZWN0ZWQoKTtcblxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0b3IuY2hlY2soKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkc2VhcmNoRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiY2F0ZWdvcnlcXFtcXF1cIl0nKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBjYXRlZ29yeUlkIG9mIHNlbGVjdGVkQ2F0ZWdvcnlJZHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9ICQoJzxpbnB1dD4nLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2F0ZWdvcnlbXScsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjYXRlZ29yeUlkLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJHNlYXJjaEZvcm0uYXBwZW5kKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9mb3IgYjJiIHVzZXJcbiAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJidW5kbGViMmJfdXNlclwiKSAmJiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYnVuZGxlYjJiX3VzZXJcIikgIT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICQoXCIuYm9keVwiKS5hZGRDbGFzcyhcImIyYi1wcm9kdWN0c1wiKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2F0YWxvZ1Byb2R1Y3RzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiLm5hdkxpc3QtaXRlbSAucHJvZHVjdC1jb3VudFwiKS5zaG93KCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGxvYWRUcmVlTm9kZXMobm9kZSwgY2IpIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJy9yZW1vdGUvdjEvY2F0ZWdvcnktdHJlZScsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeUlkOiBub2RlLmlkLFxuICAgICAgICAgICAgICAgIHByZWZpeDogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLmRvbmUoZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRSZXN1bHRzID0gW107XG5cbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoZGF0YU5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRSZXN1bHRzLnB1c2godGhpcy5mb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUoZGF0YU5vZGUpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjYihmb3JtYXR0ZWRSZXN1bHRzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2F0ZWdvcnlUcmVlKCRjb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgdHJlZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb3JlOiB7XG4gICAgICAgICAgICAgICAgZGF0YTogKG5vZGUsIGNiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJvb3Qgbm9kZVxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5pZCA9PT0gJyMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYih0aGlzLmNhdGVnb3J5VHJlZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGF6eSBsb2FkZWQgY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFRyZWVOb2Rlcyhub2RlLCBjYik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW1lczoge1xuICAgICAgICAgICAgICAgICAgICBpY29uczogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoZWNrYm94OiB7XG4gICAgICAgICAgICAgICAgdGhyZWVfc3RhdGU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgICAgICAnY2hlY2tib3gnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfTtcblxuICAgICAgICAkY29udGFpbmVyLmpzdHJlZSh0cmVlT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaW5pdEZhY2V0ZWRTZWFyY2goKSB7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkc2VhcmNoSGVhZGluZyA9ICQoJyNzZWFyY2gtcmVzdWx0cy1oZWFkaW5nJyk7XG4gICAgICAgIGNvbnN0ICRzZWFyY2hDb3VudCA9ICQoJyNzZWFyY2gtcmVzdWx0cy1wcm9kdWN0LWNvdW50Jyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5zZWFyY2hQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ3NlYXJjaC9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdzZWFyY2gvc2lkZWJhcicsXG4gICAgICAgICAgICAgICAgaGVhZGluZzogJ3NlYXJjaC9oZWFkaW5nJyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0Q291bnQ6ICdzZWFyY2gvcHJvZHVjdC1jb3VudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdF9yZXN1bHRzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93TW9yZTogJ3NlYXJjaC9zaG93LW1vcmUnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG4gICAgICAgICAgICAkc2VhcmNoSGVhZGluZy5odG1sKGNvbnRlbnQuaGVhZGluZyk7XG4gICAgICAgICAgICAkc2VhcmNoQ291bnQuaHRtbChjb250ZW50LnByb2R1Y3RDb3VudCk7XG5cblxuICAgICAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJidW5kbGViMmJfdXNlclwiKSAmJiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYnVuZGxlYjJiX3VzZXJcIikgIT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICAvL2ZvciBiMmIgdXNlclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2F0YWxvZ1Byb2R1Y3RzKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vZm9yIG5vbiBiMmIgdXNlclxuICAgICAgICAgICAgICAgICQoXCIubmF2TGlzdC1pdGVtIC5wcm9kdWN0LWNvdW50XCIpLnNob3coKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdFZhbGlkYXRpb24oJGZvcm0pIHtcbiAgICAgICAgdGhpcy4kZm9ybSA9ICRmb3JtO1xuICAgICAgICB0aGlzLnZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICRmb3JtLFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBiaW5kVmFsaWRhdGlvbigkZWxlbWVudCkge1xuICAgICAgICBpZiAodGhpcy52YWxpZGF0b3IpIHtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICRlbGVtZW50LFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJGVsZW1lbnQuZGF0YSgnZXJyb3JNZXNzYWdlJyksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNoZWNrKCkge1xuICAgICAgICBpZiAodGhpcy52YWxpZGF0b3IpIHtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvL2ZvciBiMmJcbiAgICBoYW5kbGVDYXRhbG9nUHJvZHVjdHMoKSB7XG4gICAgICAgIGNvbnN0IGNhdGFsb2dfcHJvZHVjdHMgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJjYXRhbG9nX3Byb2R1Y3RzXCIpKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSAkKFwiLnByb2R1Y3RcIik7XG5cbiAgICAgICAgZm9yICh2YXIgcHJvZHVjdF9pZCBpbiBjYXRhbG9nX3Byb2R1Y3RzKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RTZWxlY3RvciA9IGBbY2F0YWxvZy1wcm9kdWN0LSR7cHJvZHVjdF9pZH1dYDtcbiAgICAgICAgICAgIGlmICgkKGAke3Byb2R1Y3RTZWxlY3Rvcn1gKS5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgICAgICAkKGAke3Byb2R1Y3RTZWxlY3Rvcn1gKS5hdHRyKFwiY2F0YWxvZy1wcm9kdWN0XCIsIFwidHJ1ZVwiKTtcblxuICAgICAgICAgICAgICAgIGxldCBiYXNlX3ByaWNlID0gJChgJHtwcm9kdWN0U2VsZWN0b3J9YCkuZmluZChcIi5wcmljZS5wcmljZS0td2l0aFRheFwiKS50ZXh0KCkucmVwbGFjZShcIiRcIiwgXCJcIikucmVwbGFjZShcIixcIiwgXCJcIikgfHwgJChgJHtwcm9kdWN0U2VsZWN0b3J9YCkuZmluZChcIi5wcmljZS5wcmljZS0td2l0aG91dFRheFwiKS50ZXh0KCkucmVwbGFjZShcIiRcIiwgXCJcIikucmVwbGFjZShcIixcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgbGV0IHRpZXJfcHJpY2U7XG4gICAgICAgICAgICAgICAgbGV0IGNhdGFsb2dfcHJpY2U7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFyaWFudEFyciA9IGNhdGFsb2dfcHJvZHVjdHNbcHJvZHVjdF9pZF0gfHwgW107XG4gICAgICAgICAgICAgICAgaWYgKHZhcmlhbnRBcnIubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGllcl9wcmljZSA9IHZhcmlhbnRBcnJbMF0udGllcl9wcmljZSB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgY2F0YWxvZ19wcmljZSA9IHRoaXMuZ2V0Q2F0YWxvZ1ByaWNlKGJhc2VfcHJpY2UsIHRpZXJfcHJpY2UsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2F0YWxvZ19wcmljZSkge1xuICAgICAgICAgICAgICAgICAgICAkKGAke3Byb2R1Y3RTZWxlY3Rvcn1gKS5maW5kKFwiLnByaWNlLnByaWNlLS13aXRob3V0VGF4XCIpLnRleHQoXCIkXCIgKyBwYXJzZUZsb2F0KGNhdGFsb2dfcHJpY2UpLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgICAgICAgICAkKGAke3Byb2R1Y3RTZWxlY3Rvcn1gKS5maW5kKFwiLnByaWNlLnByaWNlLS13aXRoVGF4XCIpLnRleHQoXCIkXCIgKyBwYXJzZUZsb2F0KGNhdGFsb2dfcHJpY2UpLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vcHJvZHVjdCBHYWxsZXJ5LCBmb3IgbGlzdGluZyBwYWdlXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0R2FsbGVyeSA9ICQoXCJbYjJiLXByb2R1Y3RzLWdhbGxlcnldXCIpO1xuICAgICAgICAkcHJvZHVjdEdhbGxlcnkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhdGFsb2dQcm9kdWN0Q291bnQgPSAkKHRoaXMpLmZpbmQoXCJbY2F0YWxvZy1wcm9kdWN0XVwiKS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoY2F0YWxvZ1Byb2R1Y3RDb3VudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgJChcIltjYXRhbG9nLWxpc3Rpbmctd3JhcF1cIikuc2hvdygpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cyhcIi5wYWdlXCIpLmh0bWwoXCJXZSBjYW4ndCBmaW5kIHByb2R1Y3RzIG1hdGNoaW5nIHRoZSBzZWxlY3Rpb24uXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKFwiW2NhdGFsb2ctbGlzdGluZy13cmFwXVwiKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgJGNhdGFsb2dQcm9kdWN0Q291bnRlciA9ICQoXCJbZGF0YS1jYXRhbG9nLXByb2R1Y3QtY291bnRlcl1cIik7XG4gICAgICAgICAgICAgICAgaWYgKCRjYXRhbG9nUHJvZHVjdENvdW50ZXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAkY2F0YWxvZ1Byb2R1Y3RDb3VudGVyLnRleHQoY2F0YWxvZ1Byb2R1Y3RDb3VudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8vZm9yIGJ1bmRsZWIyYlxuICAgIGdldENhdGFsb2dQcmljZShiYXNlX3ByaWNlLCB0aWVyX3ByaWNlX2FycmF5LCBxdHkpIHtcbiAgICAgICAgLy9sZXQgdGllcl9wcmljZSA9IGJhc2VfcHJpY2U7XG4gICAgICAgIGxldCB0aWVyX3ByaWNlID0gYmFzZV9wcmljZTtcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRpZXJfcHJpY2VfYXJyYXkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0aWVyX3ByaWNlX2FycmF5W2pdLnR5cGU7XG4gICAgICAgICAgICBjb25zdCBiYXNlX3F0eSA9IHRpZXJfcHJpY2VfYXJyYXlbal0ucXR5O1xuICAgICAgICAgICAgY29uc3QgcHJpY2UgPSB0aWVyX3ByaWNlX2FycmF5W2pdLnByaWNlO1xuXG4gICAgICAgICAgICBpZiAocXR5ID49IGJhc2VfcXR5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gXCJmaXhlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpZXJfcHJpY2UgPSBwcmljZTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRpZXJfcHJpY2UgPSBiYXNlX3ByaWNlIC0gYmFzZV9wcmljZSAqIHByaWNlIC8gMTAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGllcl9wcmljZTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==