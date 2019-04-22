(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./assets/js/theme/account.js":
/*!************************************!*\
  !*** ./assets/js/theme/account.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _common_payment_method__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/payment-method */ "./assets/js/theme/common/payment-method.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Account = function (_PageManager) {
    _inherits(Account, _PageManager);

    function Account(context) {
        _classCallCheck(this, Account);

        var _this = _possibleConstructorReturn(this, _PageManager.call(this, context));

        _this.$state = $('[data-field-type="State"]');
        _this.$body = $('body');
        return _this;
    }

    Account.prototype.onReady = function onReady() {
        var $editAccountForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-edit-account-form]');
        var $addressForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-address-form]');
        var $inboxForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-inbox-form]');
        var $accountReturnForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('[data-account-return-form]');
        var $paymentMethodForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-payment-method-form]');
        var $reorderForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('[data-account-reorder-form]');
        var $invoiceButton = $('[data-print-invoice]');

        // Injected via template
        this.passwordRequirements = this.context.passwordRequirements;

        // Instantiates wish list JS
        _wishlist__WEBPACK_IMPORTED_MODULE_4__["default"].load(this.context);

        if ($editAccountForm.length) {
            this.registerEditAccountValidation($editAccountForm);
            if (this.$state.is('input')) {
                Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_7__["insertStateHiddenField"])(this.$state);
            }
        }

        if ($invoiceButton.length) {
            $invoiceButton.on('click', function () {
                var left = window.screen.availWidth / 2 - 450;
                var top = window.screen.availHeight / 2 - 320;
                var url = $invoiceButton.data('printInvoice');

                window.open(url, 'orderInvoice', 'width=900,height=650,left=' + left + ',top=' + top + ',scrollbars=1');
            });
        }

        if ($addressForm.length) {
            this.initAddressFormValidation($addressForm);

            if (this.$state.is('input')) {
                Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_7__["insertStateHiddenField"])(this.$state);
            }
        }

        if ($inboxForm.length) {
            this.registerInboxValidation($inboxForm);
        }

        if ($accountReturnForm.length) {
            this.initAccountReturnFormValidation($accountReturnForm);
        }

        if ($paymentMethodForm.length) {
            this.initPaymentMethodFormValidation($paymentMethodForm);
        }

        if ($reorderForm.length) {
            this.initReorderForm($reorderForm);
        }

        this.bindDeleteAddress();
        this.bindDeletePaymentMethod();
    };

    /**
     * Binds a submit hook to ensure the customer receives a confirmation dialog before deleting an address
     */


    Account.prototype.bindDeleteAddress = function bindDeleteAddress() {
        $('[data-delete-address]').on('submit', function (event) {
            var message = $(event.currentTarget).data('deleteAddress');

            if (!window.confirm(message)) {
                event.preventDefault();
            }
        });
    };

    Account.prototype.bindDeletePaymentMethod = function bindDeletePaymentMethod() {
        $('[data-delete-payment-method]').on('submit', function (event) {
            var message = $(event.currentTarget).data('deletePaymentMethod');

            if (!window.confirm(message)) {
                event.preventDefault();
            }
        });
    };

    Account.prototype.initReorderForm = function initReorderForm($reorderForm) {
        var _this2 = this;

        $reorderForm.on('submit', function (event) {
            var $productReorderCheckboxes = $('.account-listItem .form-checkbox:checked');
            var submitForm = false;

            $reorderForm.find('[name^="reorderitem"]').remove();

            $productReorderCheckboxes.each(function (index, productCheckbox) {
                var productId = $(productCheckbox).val();
                var $input = $('<input>', {
                    type: 'hidden',
                    name: 'reorderitem[' + productId + ']',
                    value: '1'
                });

                submitForm = true;

                $reorderForm.append($input);
            });

            if (!submitForm) {
                event.preventDefault();
                Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_9__["default"])({
                    text: _this2.context.selectItem,
                    type: 'error'
                });
            }
        });
    };

    Account.prototype.initAddressFormValidation = function initAddressFormValidation($addressForm) {
        var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($addressForm);
        var stateSelector = 'form[data-address-form] [data-field-type="State"]';
        var $stateElement = $(stateSelector);
        var addressValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
            submit: 'form[data-address-form] input[type="submit"]'
        });

        addressValidator.add(validationModel);

        if ($stateElement) {
            var $last = void 0;

            // Requests the states for a country with AJAX
            Object(_common_state_country__WEBPACK_IMPORTED_MODULE_6__["default"])($stateElement, this.context, function (err, field) {
                if (err) {
                    throw new Error(err);
                }

                var $field = $(field);

                if (addressValidator.getStatus($stateElement) !== 'undefined') {
                    addressValidator.remove($stateElement);
                }

                if ($last) {
                    addressValidator.remove($last);
                }

                if ($field.is('select')) {
                    $last = field;
                    _common_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setStateCountryValidation(addressValidator, field);
                } else {
                    _common_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].cleanUpStateValidation(field);
                }
            });
        }

        $addressForm.on('submit', function (event) {
            addressValidator.performCheck();

            if (addressValidator.areAll('valid')) {
                return;
            }

            event.preventDefault();
        });
    };

    Account.prototype.initAccountReturnFormValidation = function initAccountReturnFormValidation($accountReturnForm) {
        var errorMessage = $accountReturnForm.data('accountReturnFormError');

        $accountReturnForm.on('submit', function (event) {
            var formSubmit = false;

            // Iterate until we find a non-zero value in the dropdown for quantity
            $('[name^="return_qty"]', $accountReturnForm).each(function (i, ele) {
                if (parseInt($(ele).val(), 10) !== 0) {
                    formSubmit = true;

                    // Exit out of loop if we found at least one return
                    return true;
                }
            });

            if (formSubmit) {
                return true;
            }

            Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_9__["default"])({
                text: errorMessage,
                type: 'error'
            });

            return event.preventDefault();
        });
    };

    Account.prototype.initPaymentMethodFormValidation = function initPaymentMethodFormValidation($paymentMethodForm) {
        var _this3 = this;

        // Inject validations into form fields before validation runs
        $paymentMethodForm.find('#first_name.form-field').attr('data-validation', '{ "type": "singleline", "label": "' + this.context.firstNameLabel + '", "required": true, "maxlength": 0 }');
        $paymentMethodForm.find('#last_name.form-field').attr('data-validation', '{ "type": "singleline", "label": "' + this.context.lastNameLabel + '", "required": true, "maxlength": 0 }');
        $paymentMethodForm.find('#company.form-field').attr('data-validation', '{ "type": "singleline", "label": "' + this.context.companyLabel + '", "required": false, "maxlength": 0 }');
        $paymentMethodForm.find('#phone.form-field').attr('data-validation', '{ "type": "singleline", "label": "' + this.context.phoneLabel + '", "required": false, "maxlength": 0 }');
        $paymentMethodForm.find('#address1.form-field').attr('data-validation', '{ "type": "singleline", "label": "' + this.context.address1Label + '", "required": true, "maxlength": 0 }');
        $paymentMethodForm.find('#address2.form-field').attr('data-validation', '{ "type": "singleline", "label": "' + this.context.address2Label + '", "required": false, "maxlength": 0 }');
        $paymentMethodForm.find('#city.form-field').attr('data-validation', '{ "type": "singleline", "label": "' + this.context.cityLabel + '", "required": true, "maxlength": 0 }');
        $paymentMethodForm.find('#country.form-field').attr('data-validation', '{ "type": "singleselect", "label": "' + this.context.countryLabel + '", "required": true, prefix: "' + this.context.chooseCountryLabel + '" }');
        $paymentMethodForm.find('#state.form-field').attr('data-validation', '{ "type": "singleline", "label": "' + this.context.stateLabel + '", "required": true, "maxlength": 0 }');
        $paymentMethodForm.find('#postal_code.form-field').attr('data-validation', '{ "type": "singleline", "label": "' + this.context.postalCodeLabel + '", "required": true, "maxlength": 0 }');

        var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($paymentMethodForm);
        var paymentMethodSelector = 'form[data-payment-method-form]';
        var paymentMethodValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({ submit: paymentMethodSelector + ' input[type="submit"]' });
        var $stateElement = $(paymentMethodSelector + ' [data-field-type="State"]');

        var $last = void 0;
        // Requests the states for a country with AJAX
        Object(_common_state_country__WEBPACK_IMPORTED_MODULE_6__["default"])($stateElement, this.context, function (err, field) {
            if (err) {
                throw new Error(err);
            }

            var $field = $(field);

            if (paymentMethodValidator.getStatus($stateElement) !== 'undefined') {
                paymentMethodValidator.remove($stateElement);
            }

            if ($last) {
                paymentMethodValidator.remove($last);
            }

            if ($field.is('select')) {
                $last = field;
                _common_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setStateCountryValidation(paymentMethodValidator, field);
            } else {
                _common_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].cleanUpStateValidation(field);
            }
        });

        // Use credit card number input listener to highlight credit card type
        var cardType = void 0;
        $(paymentMethodSelector + ' input[name="credit_card_number"]').on('keyup', function (_ref) {
            var target = _ref.target;

            cardType = Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_8__["creditCardType"])(target.value);
            if (cardType) {
                $(paymentMethodSelector + ' img[alt="' + cardType + '"').siblings().css('opacity', '.2');
            } else {
                $(paymentMethodSelector + ' img').css('opacity', '1');
            }
        });

        // Set of credit card validation
        _common_payment_method__WEBPACK_IMPORTED_MODULE_8__["Validators"].setCreditCardNumberValidation(paymentMethodValidator, paymentMethodSelector + ' input[name="credit_card_number"]', this.context.creditCardNumber);
        _common_payment_method__WEBPACK_IMPORTED_MODULE_8__["Validators"].setExpirationValidation(paymentMethodValidator, paymentMethodSelector + ' input[name="expiration"]', this.context.expiration);
        _common_payment_method__WEBPACK_IMPORTED_MODULE_8__["Validators"].setNameOnCardValidation(paymentMethodValidator, paymentMethodSelector + ' input[name="name_on_card"]', this.context.nameOnCard);
        _common_payment_method__WEBPACK_IMPORTED_MODULE_8__["Validators"].setCvvValidation(paymentMethodValidator, paymentMethodSelector + ' input[name="cvv"]', this.context.cvv, function () {
            return cardType;
        });

        // Set of credit card format
        _common_payment_method__WEBPACK_IMPORTED_MODULE_8__["Formatters"].setCreditCardNumberFormat(paymentMethodSelector + ' input[name="credit_card_number"]');
        _common_payment_method__WEBPACK_IMPORTED_MODULE_8__["Formatters"].setExpirationFormat(paymentMethodSelector + ' input[name="expiration"');

        // Billing address validation
        paymentMethodValidator.add(validationModel);

        $paymentMethodForm.on('submit', function (event) {
            event.preventDefault();
            // Perform final form validation
            paymentMethodValidator.performCheck();
            if (paymentMethodValidator.areAll('valid')) {
                // Serialize form data and reduce it to object
                var data = lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default()($paymentMethodForm.serializeArray(), function (obj, item) {
                    var refObj = obj;
                    refObj[item.name] = item.value;
                    return refObj;
                }, {});

                // Assign country and state code
                var country = lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(_this3.context.countries, function (_ref2) {
                    var value = _ref2.value;
                    return value === data.country;
                });
                var state = country && lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(country.states, function (_ref3) {
                    var value = _ref3.value;
                    return value === data.state;
                });
                data.country_code = country ? country.code : data.country;
                data.state_or_province_code = state ? state.code : data.state;

                // Default Instrument
                data.default_instrument = !!data.default_instrument;

                // Store credit card
                Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_8__["storeInstrument"])(_this3.context, data, function () {
                    window.location.href = _this3.context.paymentMethodsUrl;
                }, function () {
                    Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_9__["default"])({
                        text: _this3.context.generic_error,
                        type: 'error'
                    });
                });
            }
        });
    };

    Account.prototype.registerEditAccountValidation = function registerEditAccountValidation($editAccountForm) {
        var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($editAccountForm);
        var formEditSelector = 'form[data-edit-account-form]';
        var editValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
            submit: '${formEditSelector} input[type="submit"]'
        });
        var emailSelector = formEditSelector + ' [data-field-type="EmailAddress"]';
        var $emailElement = $(emailSelector);
        var passwordSelector = formEditSelector + ' [data-field-type="Password"]';
        var $passwordElement = $(passwordSelector);
        var password2Selector = formEditSelector + ' [data-field-type="ConfirmPassword"]';
        var $password2Element = $(password2Selector);
        var currentPasswordSelector = formEditSelector + ' [data-field-type="CurrentPassword"]';
        var $currentPassword = $(currentPasswordSelector);

        // This only handles the custom fields, standard fields are added below
        editValidator.add(validationModel);

        if ($emailElement) {
            editValidator.remove(emailSelector);
            _common_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setEmailValidation(editValidator, emailSelector);
        }

        if ($passwordElement && $password2Element) {
            editValidator.remove(passwordSelector);
            editValidator.remove(password2Selector);
            _common_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setPasswordValidation(editValidator, passwordSelector, password2Selector, this.passwordRequirements, true);
        }

        if ($currentPassword) {
            editValidator.add({
                selector: currentPasswordSelector,
                validate: function validate(cb, val) {
                    var result = true;

                    if (val === '' && $passwordElement.val() !== '') {
                        result = false;
                    }

                    cb(result);
                },
                errorMessage: this.context.currentPassword
            });
        }

        editValidator.add([{
            selector: formEditSelector + ' input[name=\'account_firstname\']',
            validate: function validate(cb, val) {
                var result = val.length;

                cb(result);
            },
            errorMessage: this.context.firstName
        }, {
            selector: formEditSelector + ' input[name=\'account_lastname\']',
            validate: function validate(cb, val) {
                var result = val.length;

                cb(result);
            },
            errorMessage: this.context.lastName
        }]);

        $editAccountForm.on('submit', function (event) {
            editValidator.performCheck();

            if (editValidator.areAll('valid')) {
                return;
            }

            event.preventDefault();
        });
    };

    Account.prototype.registerInboxValidation = function registerInboxValidation($inboxForm) {
        var inboxValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
            submit: 'form[data-inbox-form] input[type="submit"]'
        });

        inboxValidator.add([{
            selector: 'form[data-inbox-form] select[name="message_order_id"]',
            validate: function validate(cb, val) {
                var result = Number(val) !== 0;

                cb(result);
            },
            errorMessage: this.context.enterOrderNum
        }, {
            selector: 'form[data-inbox-form] input[name="message_subject"]',
            validate: function validate(cb, val) {
                var result = val.length;

                cb(result);
            },
            errorMessage: this.context.enterSubject
        }, {
            selector: 'form[data-inbox-form] textarea[name="message_content"]',
            validate: function validate(cb, val) {
                var result = val.length;

                cb(result);
            },
            errorMessage: this.context.enterMessage
        }]);

        $inboxForm.on('submit', function (event) {
            inboxValidator.performCheck();

            if (inboxValidator.areAll('valid')) {
                return;
            }

            event.preventDefault();
        });
    };

    return Account;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Account);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/payment-method.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/payment-method.js ***!
  \**************************************************/
/*! exports provided: creditCardType, storeInstrument, Formatters, Validators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creditCardType", function() { return creditCardType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeInstrument", function() { return storeInstrument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Formatters", function() { return Formatters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! creditcards */ "./node_modules/creditcards/index.js");
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(creditcards__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Omit null or empty string properties of object
 * @param {Object} object
 * @returns {Object}
 */
var omitNullString = function omitNullString(obj) {
    var refObj = obj;

    $.each(refObj, function (key, value) {
        if (value === null || value === '') {
            delete refObj[key];
        }
    });

    return refObj;
};

/**
 * Get credit card type from credit card number
 * @param {string} value
 */
var creditCardType = function creditCardType(value) {
    return creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.type(creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.parse(value), true);
};

/**
 * Wrapper for ajax request to store a new instrument in bigpay
 * @param {object} Representing the data needed for the header
 * @param {object} Representing the data needed for the body
 * @param {function} done Function to execute on a successful response
 * @param {function} fail Function to execute on a unsuccessful response
 */
var storeInstrument = function storeInstrument(_ref, _ref2, done, fail) {
    var paymentsUrl = _ref.paymentsUrl,
        shopperId = _ref.shopperId,
        storeHash = _ref.storeHash,
        vaultToken = _ref.vaultToken;
    var provider_id = _ref2.provider_id,
        credit_card_number = _ref2.credit_card_number,
        expiration = _ref2.expiration,
        name_on_card = _ref2.name_on_card,
        cvv = _ref2.cvv,
        default_instrument = _ref2.default_instrument,
        address1 = _ref2.address1,
        address2 = _ref2.address2,
        city = _ref2.city,
        postal_code = _ref2.postal_code,
        state_or_province_code = _ref2.state_or_province_code,
        country_code = _ref2.country_code,
        company = _ref2.company,
        first_name = _ref2.first_name,
        last_name = _ref2.last_name,
        email = _ref2.email,
        phone = _ref2.phone;

    var expiry = expiration.split('/');

    $.ajax({
        url: paymentsUrl + '/stores/' + storeHash + '/customers/' + shopperId + '/stored_instruments',
        dataType: 'json',
        method: 'POST',
        cache: false,
        headers: {
            Authorization: vaultToken,
            Accept: 'application/vnd.bc.v1+json',
            'Content-Type': 'application/vnd.bc.v1+json'
        },
        data: JSON.stringify({
            instrument: {
                type: 'card',
                cardholder_name: name_on_card,
                number: creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.parse(credit_card_number),
                expiry_month: creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.month.parse(expiry[0]),
                expiry_year: creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.year.parse(expiry[1], true),
                verification_value: cvv
            },
            billing_address: omitNullString({
                address1: address1,
                address2: address2,
                city: city,
                postal_code: postal_code,
                state_or_province_code: state_or_province_code,
                country_code: country_code,
                company: company,
                first_name: first_name,
                last_name: last_name,
                email: email,
                phone: phone
            }),
            provider_id: provider_id,
            default_instrument: default_instrument
        })
    }).done(done).fail(fail);
};

var Formatters = {
    /**
     * Sets up a format for credit card number
     * @param field
     */
    setCreditCardNumberFormat: function setCreditCardNumberFormat(field) {
        if (field) {
            $(field).on('keyup', function (_ref3) {
                var target = _ref3.target;

                var refTarget = target;
                refTarget.value = creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.format(creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.parse(target.value));
            });
        }
    },

    /**
     * Sets up a format for expiration date
     * @param field
     */
    setExpirationFormat: function setExpirationFormat(field) {
        if (field) {
            $(field).on('keyup', function (_ref4) {
                var target = _ref4.target,
                    which = _ref4.which;

                var refTarget = target;
                if (which === 8 && /.*(\/)$/.test(target.value)) {
                    refTarget.value = target.value.slice(0, -1);
                } else if (target.value.length > 4) {
                    refTarget.value = target.value.slice(0, 5);
                } else if (which !== 8) {
                    refTarget.value = target.value.replace(/^([1-9]\/|[2-9])$/g, '0$1/').replace(/^(0[1-9]|1[0-2])$/g, '$1/').replace(/^([0-1])([3-9])$/g, '0$1/$2').replace(/^(0[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2').replace(/^([0]+)\/|[0]+$/g, '0').replace(/[^\d\/]|^[\/]*$/g, '').replace(/\/\//g, '/');
                }
            });
        }
    }
};

var Validators = {
    /**
     * Sets up a validation for credit card number
     * @param validator
     * @param field
     * @param errorMessage
     */
    setCreditCardNumberValidation: function setCreditCardNumberValidation(validator, field, errorMessage) {
        if (field) {
            validator.add({
                selector: field,
                validate: function validate(cb, val) {
                    var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.isValid(creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.parse(val));

                    cb(result);
                },
                errorMessage: errorMessage
            });
        }
    },

    /**
     * Sets up a validation for expiration date
     * @param validator
     * @param field
     * @param errorMessage
     */
    setExpirationValidation: function setExpirationValidation(validator, field, errorMessage) {
        if (field) {
            validator.add({
                selector: field,
                validate: function validate(cb, val) {
                    var expiry = val.split('/');
                    var result = val.length && /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(val);
                    result = result && !creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.isPast(creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.month.parse(expiry[0]), creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.year.parse(expiry[1], true));

                    cb(result);
                },
                errorMessage: errorMessage
            });
        }
    },

    /**
     * Sets up a validation for name on card
     * @param validator
     * @param field
     * @param errorMessage
     */
    setNameOnCardValidation: function setNameOnCardValidation(validator, field, errorMessage) {
        if (field) {
            validator.add({
                selector: field,
                validate: function validate(cb, val) {
                    var result = !!val.length;

                    cb(result);
                },
                errorMessage: errorMessage
            });
        }
    },

    /**
     * Sets up a validation for cvv
     * @param validator
     * @param field
     * @param errorMessage
     * @param {any} cardType The credit card number type
     */
    setCvvValidation: function setCvvValidation(validator, field, errorMessage, cardType) {
        if (field) {
            validator.add({
                selector: field,
                validate: function validate(cb, val) {
                    var type = typeof cardType === 'function' ? cardType() : cardType;
                    var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.cvc.isValid(val, type);

                    cb(result);
                },
                errorMessage: errorMessage
            });
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3BheW1lbnQtbWV0aG9kLmpzIl0sIm5hbWVzIjpbIkFjY291bnQiLCJjb250ZXh0IiwiJHN0YXRlIiwiJCIsIiRib2R5Iiwib25SZWFkeSIsIiRlZGl0QWNjb3VudEZvcm0iLCJjbGFzc2lmeUZvcm0iLCIkYWRkcmVzc0Zvcm0iLCIkaW5ib3hGb3JtIiwiJGFjY291bnRSZXR1cm5Gb3JtIiwiJHBheW1lbnRNZXRob2RGb3JtIiwiJHJlb3JkZXJGb3JtIiwiJGludm9pY2VCdXR0b24iLCJwYXNzd29yZFJlcXVpcmVtZW50cyIsIldpc2hsaXN0IiwibG9hZCIsImxlbmd0aCIsInJlZ2lzdGVyRWRpdEFjY291bnRWYWxpZGF0aW9uIiwiaXMiLCJpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIiwib24iLCJsZWZ0Iiwid2luZG93Iiwic2NyZWVuIiwiYXZhaWxXaWR0aCIsInRvcCIsImF2YWlsSGVpZ2h0IiwidXJsIiwiZGF0YSIsIm9wZW4iLCJpbml0QWRkcmVzc0Zvcm1WYWxpZGF0aW9uIiwicmVnaXN0ZXJJbmJveFZhbGlkYXRpb24iLCJpbml0QWNjb3VudFJldHVybkZvcm1WYWxpZGF0aW9uIiwiaW5pdFBheW1lbnRNZXRob2RGb3JtVmFsaWRhdGlvbiIsImluaXRSZW9yZGVyRm9ybSIsImJpbmREZWxldGVBZGRyZXNzIiwiYmluZERlbGV0ZVBheW1lbnRNZXRob2QiLCJtZXNzYWdlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiY29uZmlybSIsInByZXZlbnREZWZhdWx0IiwiJHByb2R1Y3RSZW9yZGVyQ2hlY2tib3hlcyIsInN1Ym1pdEZvcm0iLCJmaW5kIiwicmVtb3ZlIiwiZWFjaCIsImluZGV4IiwicHJvZHVjdENoZWNrYm94IiwicHJvZHVjdElkIiwidmFsIiwiJGlucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImFwcGVuZCIsInN3YWwiLCJ0ZXh0Iiwic2VsZWN0SXRlbSIsInZhbGlkYXRpb25Nb2RlbCIsInZhbGlkYXRpb24iLCJzdGF0ZVNlbGVjdG9yIiwiJHN0YXRlRWxlbWVudCIsImFkZHJlc3NWYWxpZGF0b3IiLCJub2QiLCJzdWJtaXQiLCJhZGQiLCIkbGFzdCIsInN0YXRlQ291bnRyeSIsImVyciIsImZpZWxkIiwiRXJyb3IiLCIkZmllbGQiLCJnZXRTdGF0dXMiLCJWYWxpZGF0b3JzIiwic2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbiIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJlcnJvck1lc3NhZ2UiLCJmb3JtU3VibWl0IiwiaSIsImVsZSIsInBhcnNlSW50IiwiYXR0ciIsImZpcnN0TmFtZUxhYmVsIiwibGFzdE5hbWVMYWJlbCIsImNvbXBhbnlMYWJlbCIsInBob25lTGFiZWwiLCJhZGRyZXNzMUxhYmVsIiwiYWRkcmVzczJMYWJlbCIsImNpdHlMYWJlbCIsImNvdW50cnlMYWJlbCIsImNob29zZUNvdW50cnlMYWJlbCIsInN0YXRlTGFiZWwiLCJwb3N0YWxDb2RlTGFiZWwiLCJwYXltZW50TWV0aG9kU2VsZWN0b3IiLCJwYXltZW50TWV0aG9kVmFsaWRhdG9yIiwiY2FyZFR5cGUiLCJ0YXJnZXQiLCJjcmVkaXRDYXJkVHlwZSIsInNpYmxpbmdzIiwiY3NzIiwiQ0NWYWxpZGF0b3JzIiwic2V0Q3JlZGl0Q2FyZE51bWJlclZhbGlkYXRpb24iLCJjcmVkaXRDYXJkTnVtYmVyIiwic2V0RXhwaXJhdGlvblZhbGlkYXRpb24iLCJleHBpcmF0aW9uIiwic2V0TmFtZU9uQ2FyZFZhbGlkYXRpb24iLCJuYW1lT25DYXJkIiwic2V0Q3Z2VmFsaWRhdGlvbiIsImN2diIsIkNDRm9ybWF0dGVycyIsInNldENyZWRpdENhcmROdW1iZXJGb3JtYXQiLCJzZXRFeHBpcmF0aW9uRm9ybWF0Iiwic2VyaWFsaXplQXJyYXkiLCJvYmoiLCJpdGVtIiwicmVmT2JqIiwiY291bnRyeSIsImNvdW50cmllcyIsInN0YXRlIiwic3RhdGVzIiwiY291bnRyeV9jb2RlIiwiY29kZSIsInN0YXRlX29yX3Byb3ZpbmNlX2NvZGUiLCJkZWZhdWx0X2luc3RydW1lbnQiLCJzdG9yZUluc3RydW1lbnQiLCJsb2NhdGlvbiIsImhyZWYiLCJwYXltZW50TWV0aG9kc1VybCIsImdlbmVyaWNfZXJyb3IiLCJmb3JtRWRpdFNlbGVjdG9yIiwiZWRpdFZhbGlkYXRvciIsImVtYWlsU2VsZWN0b3IiLCIkZW1haWxFbGVtZW50IiwicGFzc3dvcmRTZWxlY3RvciIsIiRwYXNzd29yZEVsZW1lbnQiLCJwYXNzd29yZDJTZWxlY3RvciIsIiRwYXNzd29yZDJFbGVtZW50IiwiY3VycmVudFBhc3N3b3JkU2VsZWN0b3IiLCIkY3VycmVudFBhc3N3b3JkIiwic2V0RW1haWxWYWxpZGF0aW9uIiwic2V0UGFzc3dvcmRWYWxpZGF0aW9uIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwicmVzdWx0IiwiY3VycmVudFBhc3N3b3JkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJpbmJveFZhbGlkYXRvciIsIk51bWJlciIsImVudGVyT3JkZXJOdW0iLCJlbnRlclN1YmplY3QiLCJlbnRlck1lc3NhZ2UiLCJQYWdlTWFuYWdlciIsIm9taXROdWxsU3RyaW5nIiwia2V5IiwiY3JlZGl0Y2FyZHMiLCJjYXJkIiwicGFyc2UiLCJkb25lIiwiZmFpbCIsInBheW1lbnRzVXJsIiwic2hvcHBlcklkIiwic3RvcmVIYXNoIiwidmF1bHRUb2tlbiIsInByb3ZpZGVyX2lkIiwiY3JlZGl0X2NhcmRfbnVtYmVyIiwibmFtZV9vbl9jYXJkIiwiYWRkcmVzczEiLCJhZGRyZXNzMiIsImNpdHkiLCJwb3N0YWxfY29kZSIsImNvbXBhbnkiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJwaG9uZSIsImV4cGlyeSIsInNwbGl0IiwiYWpheCIsImRhdGFUeXBlIiwibWV0aG9kIiwiY2FjaGUiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIkFjY2VwdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbnN0cnVtZW50IiwiY2FyZGhvbGRlcl9uYW1lIiwibnVtYmVyIiwiZXhwaXJ5X21vbnRoIiwibW9udGgiLCJleHBpcnlfeWVhciIsInllYXIiLCJ2ZXJpZmljYXRpb25fdmFsdWUiLCJiaWxsaW5nX2FkZHJlc3MiLCJGb3JtYXR0ZXJzIiwicmVmVGFyZ2V0IiwiZm9ybWF0Iiwid2hpY2giLCJ0ZXN0Iiwic2xpY2UiLCJyZXBsYWNlIiwidmFsaWRhdG9yIiwiaXNWYWxpZCIsImlzUGFzdCIsImN2YyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLE87OztBQUNqQixxQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUFBLHFEQUNqQix3QkFBTUEsT0FBTixDQURpQjs7QUFHakIsY0FBS0MsTUFBTCxHQUFjQyxFQUFFLDJCQUFGLENBQWQ7QUFDQSxjQUFLQyxLQUFMLEdBQWFELEVBQUUsTUFBRixDQUFiO0FBSmlCO0FBS3BCOztzQkFFREUsTyxzQkFBVTtBQUNOLFlBQU1DLG1CQUFtQkMsdUVBQVlBLENBQUMsOEJBQWIsQ0FBekI7QUFDQSxZQUFNQyxlQUFlRCx1RUFBWUEsQ0FBQyx5QkFBYixDQUFyQjtBQUNBLFlBQU1FLGFBQWFGLHVFQUFZQSxDQUFDLHVCQUFiLENBQW5CO0FBQ0EsWUFBTUcscUJBQXFCSCx1RUFBWUEsQ0FBQyw0QkFBYixDQUEzQjtBQUNBLFlBQU1JLHFCQUFxQkosdUVBQVlBLENBQUMsZ0NBQWIsQ0FBM0I7QUFDQSxZQUFNSyxlQUFlTCx1RUFBWUEsQ0FBQyw2QkFBYixDQUFyQjtBQUNBLFlBQU1NLGlCQUFpQlYsRUFBRSxzQkFBRixDQUF2Qjs7QUFFQTtBQUNBLGFBQUtXLG9CQUFMLEdBQTRCLEtBQUtiLE9BQUwsQ0FBYWEsb0JBQXpDOztBQUVBO0FBQ0FDLHlEQUFRQSxDQUFDQyxJ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MEJBQUNpRyxTQUFELEVBQVl6SSxLQUFaLEVBQW1CUyxZQUFuQixFQUFpQ21CLFFBQWpDLEVBQThDO0FBQzVELFlBQUk1QixLQUFKLEVBQVc7QUFDUHlJLHNCQUFVN0ksR0FBVixDQUFjO0FBQ1Y4RSwwQkFBVTFFLEtBREE7QUFFVjJFLDBCQUFVLGtCQUFDQyxFQUFELEVBQUtoRyxHQUFMLEVBQWE7QUFDbkIsd0JBQU1FLE9BQU8sT0FBTzhDLFFBQVAsS0FBb0IsVUFBcEIsR0FBaUNBLFVBQWpDLEdBQThDQSxRQUEzRDtBQUNBLHdCQUFNaUQsU0FBU2pHLElBQUlsQyxNQUFKLElBQWMrSSxrREFBV0EsQ0FBQ21ELEdBQVosQ0FBZ0JGLE9BQWhCLENBQXdCOUosR0FBeEIsRUFBNkJFLElBQTdCLENBQTdCOztBQUVBOEYsdUJBQUdDLE1BQUg7QUFDSCxpQkFQUztBQVFWcEU7QUFSVSxhQUFkO0FBVUg7QUFDSjtBQW5GcUIsQ0FBbkIsQyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcbmltcG9ydCBXaXNobGlzdCBmcm9tICcuL3dpc2hsaXN0JztcbmltcG9ydCB2YWxpZGF0aW9uIGZyb20gJy4vY29tbW9uL2Zvcm0tdmFsaWRhdGlvbic7XG5pbXBvcnQgc3RhdGVDb3VudHJ5IGZyb20gJy4vY29tbW9uL3N0YXRlLWNvdW50cnknO1xuaW1wb3J0IHsgY2xhc3NpZnlGb3JtLCBWYWxpZGF0b3JzLCBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIH0gZnJvbSAnLi9jb21tb24vZm9ybS11dGlscyc7XG5pbXBvcnQgeyBjcmVkaXRDYXJkVHlwZSwgc3RvcmVJbnN0cnVtZW50LCBWYWxpZGF0b3JzIGFzIENDVmFsaWRhdG9ycywgRm9ybWF0dGVycyBhcyBDQ0Zvcm1hdHRlcnMgfSBmcm9tICcuL2NvbW1vbi9wYXltZW50LW1ldGhvZCc7XG5pbXBvcnQgc3dhbCBmcm9tICcuL2dsb2JhbC9zd2VldC1hbGVydCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY291bnQgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcblxuICAgICAgICB0aGlzLiRzdGF0ZSA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuICAgICAgICB0aGlzLiRib2R5ID0gJCgnYm9keScpO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0ICRlZGl0QWNjb3VudEZvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1lZGl0LWFjY291bnQtZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJGFkZHJlc3NGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtYWRkcmVzcy1mb3JtXScpO1xuICAgICAgICBjb25zdCAkaW5ib3hGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtaW5ib3gtZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJGFjY291bnRSZXR1cm5Gb3JtID0gY2xhc3NpZnlGb3JtKCdbZGF0YS1hY2NvdW50LXJldHVybi1mb3JtXScpO1xuICAgICAgICBjb25zdCAkcGF5bWVudE1ldGhvZEZvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1wYXltZW50LW1ldGhvZC1mb3JtXScpO1xuICAgICAgICBjb25zdCAkcmVvcmRlckZvcm0gPSBjbGFzc2lmeUZvcm0oJ1tkYXRhLWFjY291bnQtcmVvcmRlci1mb3JtXScpO1xuICAgICAgICBjb25zdCAkaW52b2ljZUJ1dHRvbiA9ICQoJ1tkYXRhLXByaW50LWludm9pY2VdJyk7XG5cbiAgICAgICAgLy8gSW5qZWN0ZWQgdmlhIHRlbXBsYXRlXG4gICAgICAgIHRoaXMucGFzc3dvcmRSZXF1aXJlbWVudHMgPSB0aGlzLmNvbnRleHQucGFzc3dvcmRSZXF1aXJlbWVudHM7XG5cbiAgICAgICAgLy8gSW5zdGFudGlhdGVzIHdpc2ggbGlzdCBKU1xuICAgICAgICBXaXNobGlzdC5sb2FkKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgaWYgKCRlZGl0QWNjb3VudEZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRWRpdEFjY291bnRWYWxpZGF0aW9uKCRlZGl0QWNjb3VudEZvcm0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuJHN0YXRlLmlzKCdpbnB1dCcpKSB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCh0aGlzLiRzdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGludm9pY2VCdXR0b24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAkaW52b2ljZUJ1dHRvbi5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdCA9IHdpbmRvdy5zY3JlZW4uYXZhaWxXaWR0aCAvIDIgLSA0NTA7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9wID0gd2luZG93LnNjcmVlbi5hdmFpbEhlaWdodCAvIDIgLSAzMjA7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gJGludm9pY2VCdXR0b24uZGF0YSgncHJpbnRJbnZvaWNlJyk7XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cub3Blbih1cmwsICdvcmRlckludm9pY2UnLCBgd2lkdGg9OTAwLGhlaWdodD02NTAsbGVmdD0ke2xlZnR9LHRvcD0ke3RvcH0sc2Nyb2xsYmFycz0xYCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkYWRkcmVzc0Zvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRBZGRyZXNzRm9ybVZhbGlkYXRpb24oJGFkZHJlc3NGb3JtKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuJHN0YXRlLmlzKCdpbnB1dCcpKSB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCh0aGlzLiRzdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGluYm94Rm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJJbmJveFZhbGlkYXRpb24oJGluYm94Rm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGFjY291bnRSZXR1cm5Gb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pbml0QWNjb3VudFJldHVybkZvcm1WYWxpZGF0aW9uKCRhY2NvdW50UmV0dXJuRm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHBheW1lbnRNZXRob2RGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pbml0UGF5bWVudE1ldGhvZEZvcm1WYWxpZGF0aW9uKCRwYXltZW50TWV0aG9kRm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHJlb3JkZXJGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pbml0UmVvcmRlckZvcm0oJHJlb3JkZXJGb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYmluZERlbGV0ZUFkZHJlc3MoKTtcbiAgICAgICAgdGhpcy5iaW5kRGVsZXRlUGF5bWVudE1ldGhvZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGEgc3VibWl0IGhvb2sgdG8gZW5zdXJlIHRoZSBjdXN0b21lciByZWNlaXZlcyBhIGNvbmZpcm1hdGlvbiBkaWFsb2cgYmVmb3JlIGRlbGV0aW5nIGFuIGFkZHJlc3NcbiAgICAgKi9cbiAgICBiaW5kRGVsZXRlQWRkcmVzcygpIHtcbiAgICAgICAgJCgnW2RhdGEtZGVsZXRlLWFkZHJlc3NdJykub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2RlbGV0ZUFkZHJlc3MnKTtcblxuICAgICAgICAgICAgaWYgKCF3aW5kb3cuY29uZmlybShtZXNzYWdlKSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmREZWxldGVQYXltZW50TWV0aG9kKCkge1xuICAgICAgICAkKCdbZGF0YS1kZWxldGUtcGF5bWVudC1tZXRob2RdJykub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2RlbGV0ZVBheW1lbnRNZXRob2QnKTtcblxuICAgICAgICAgICAgaWYgKCF3aW5kb3cuY29uZmlybShtZXNzYWdlKSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRSZW9yZGVyRm9ybSgkcmVvcmRlckZvcm0pIHtcbiAgICAgICAgJHJlb3JkZXJGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkcHJvZHVjdFJlb3JkZXJDaGVja2JveGVzID0gJCgnLmFjY291bnQtbGlzdEl0ZW0gLmZvcm0tY2hlY2tib3g6Y2hlY2tlZCcpO1xuICAgICAgICAgICAgbGV0IHN1Ym1pdEZvcm0gPSBmYWxzZTtcblxuICAgICAgICAgICAgJHJlb3JkZXJGb3JtLmZpbmQoJ1tuYW1lXj1cInJlb3JkZXJpdGVtXCJdJykucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICRwcm9kdWN0UmVvcmRlckNoZWNrYm94ZXMuZWFjaCgoaW5kZXgsIHByb2R1Y3RDaGVja2JveCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQocHJvZHVjdENoZWNrYm94KS52YWwoKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkaW5wdXQgPSAkKCc8aW5wdXQ+Jywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogYHJlb3JkZXJpdGVtWyR7cHJvZHVjdElkfV1gLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJzEnLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAkcmVvcmRlckZvcm0uYXBwZW5kKCRpbnB1dCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFzdWJtaXRGb3JtKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy5jb250ZXh0LnNlbGVjdEl0ZW0sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRBZGRyZXNzRm9ybVZhbGlkYXRpb24oJGFkZHJlc3NGb3JtKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RlbCA9IHZhbGlkYXRpb24oJGFkZHJlc3NGb3JtKTtcbiAgICAgICAgY29uc3Qgc3RhdGVTZWxlY3RvciA9ICdmb3JtW2RhdGEtYWRkcmVzcy1mb3JtXSBbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nO1xuICAgICAgICBjb25zdCAkc3RhdGVFbGVtZW50ID0gJChzdGF0ZVNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgYWRkcmVzc1ZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICdmb3JtW2RhdGEtYWRkcmVzcy1mb3JtXSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYWRkcmVzc1ZhbGlkYXRvci5hZGQodmFsaWRhdGlvbk1vZGVsKTtcblxuICAgICAgICBpZiAoJHN0YXRlRWxlbWVudCkge1xuICAgICAgICAgICAgbGV0ICRsYXN0O1xuXG4gICAgICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXG4gICAgICAgICAgICBzdGF0ZUNvdW50cnkoJHN0YXRlRWxlbWVudCwgdGhpcy5jb250ZXh0LCAoZXJyLCBmaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgJGZpZWxkID0gJChmaWVsZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYWRkcmVzc1ZhbGlkYXRvci5nZXRTdGF0dXMoJHN0YXRlRWxlbWVudCkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NWYWxpZGF0b3IucmVtb3ZlKCRzdGF0ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkbGFzdCkge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLnJlbW92ZSgkbGFzdCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCRmaWVsZC5pcygnc2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgJGxhc3QgPSBmaWVsZDtcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uKGFkZHJlc3NWYWxpZGF0b3IsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLmNsZWFuVXBTdGF0ZVZhbGlkYXRpb24oZmllbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJGFkZHJlc3NGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAoYWRkcmVzc1ZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRBY2NvdW50UmV0dXJuRm9ybVZhbGlkYXRpb24oJGFjY291bnRSZXR1cm5Gb3JtKSB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9ICRhY2NvdW50UmV0dXJuRm9ybS5kYXRhKCdhY2NvdW50UmV0dXJuRm9ybUVycm9yJyk7XG5cbiAgICAgICAgJGFjY291bnRSZXR1cm5Gb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBsZXQgZm9ybVN1Ym1pdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBJdGVyYXRlIHVudGlsIHdlIGZpbmQgYSBub24temVybyB2YWx1ZSBpbiB0aGUgZHJvcGRvd24gZm9yIHF1YW50aXR5XG4gICAgICAgICAgICAkKCdbbmFtZV49XCJyZXR1cm5fcXR5XCJdJywgJGFjY291bnRSZXR1cm5Gb3JtKS5lYWNoKChpLCBlbGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoJChlbGUpLnZhbCgpLCAxMCkgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybVN1Ym1pdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRXhpdCBvdXQgb2YgbG9vcCBpZiB3ZSBmb3VuZCBhdCBsZWFzdCBvbmUgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoZm9ybVN1Ym1pdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdFBheW1lbnRNZXRob2RGb3JtVmFsaWRhdGlvbigkcGF5bWVudE1ldGhvZEZvcm0pIHtcbiAgICAgICAgLy8gSW5qZWN0IHZhbGlkYXRpb25zIGludG8gZm9ybSBmaWVsZHMgYmVmb3JlIHZhbGlkYXRpb24gcnVuc1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2ZpcnN0X25hbWUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmZpcnN0TmFtZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2xhc3RfbmFtZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQubGFzdE5hbWVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNjb21wYW55LmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5jb21wYW55TGFiZWx9XCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI3Bob25lLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5waG9uZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNhZGRyZXNzMS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuYWRkcmVzczFMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNhZGRyZXNzMi5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuYWRkcmVzczJMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjY2l0eS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuY2l0eUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2NvdW50cnkuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZXNlbGVjdFwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuY291bnRyeUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIHByZWZpeDogXCIke3RoaXMuY29udGV4dC5jaG9vc2VDb3VudHJ5TGFiZWx9XCIgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI3N0YXRlLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5zdGF0ZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI3Bvc3RhbF9jb2RlLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5wb3N0YWxDb2RlTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGVsID0gdmFsaWRhdGlvbigkcGF5bWVudE1ldGhvZEZvcm0pO1xuICAgICAgICBjb25zdCBwYXltZW50TWV0aG9kU2VsZWN0b3IgPSAnZm9ybVtkYXRhLXBheW1lbnQtbWV0aG9kLWZvcm1dJztcbiAgICAgICAgY29uc3QgcGF5bWVudE1ldGhvZFZhbGlkYXRvciA9IG5vZCh7IHN1Ym1pdDogYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFt0eXBlPVwic3VibWl0XCJdYCB9KTtcbiAgICAgICAgY29uc3QgJHN0YXRlRWxlbWVudCA9ICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl1gKTtcblxuICAgICAgICBsZXQgJGxhc3Q7XG4gICAgICAgIC8vIFJlcXVlc3RzIHRoZSBzdGF0ZXMgZm9yIGEgY291bnRyeSB3aXRoIEFKQVhcbiAgICAgICAgc3RhdGVDb3VudHJ5KCRzdGF0ZUVsZW1lbnQsIHRoaXMuY29udGV4dCwgKGVyciwgZmllbGQpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJGZpZWxkID0gJChmaWVsZCk7XG5cbiAgICAgICAgICAgIGlmIChwYXltZW50TWV0aG9kVmFsaWRhdG9yLmdldFN0YXR1cygkc3RhdGVFbGVtZW50KSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kVmFsaWRhdG9yLnJlbW92ZSgkc3RhdGVFbGVtZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRsYXN0KSB7XG4gICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZFZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGZpZWxkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5jbGVhblVwU3RhdGVWYWxpZGF0aW9uKGZpZWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVXNlIGNyZWRpdCBjYXJkIG51bWJlciBpbnB1dCBsaXN0ZW5lciB0byBoaWdobGlnaHQgY3JlZGl0IGNhcmQgdHlwZVxuICAgICAgICBsZXQgY2FyZFR5cGU7XG4gICAgICAgICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3JlZGl0X2NhcmRfbnVtYmVyXCJdYCkub24oJ2tleXVwJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgICAgIGNhcmRUeXBlID0gY3JlZGl0Q2FyZFR5cGUodGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIGlmIChjYXJkVHlwZSkge1xuICAgICAgICAgICAgICAgICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbWdbYWx0PVwiJHtjYXJkVHlwZX1cImApLnNpYmxpbmdzKCkuY3NzKCdvcGFjaXR5JywgJy4yJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbWdgKS5jc3MoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTZXQgb2YgY3JlZGl0IGNhcmQgdmFsaWRhdGlvblxuICAgICAgICBDQ1ZhbGlkYXRvcnMuc2V0Q3JlZGl0Q2FyZE51bWJlclZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3JlZGl0X2NhcmRfbnVtYmVyXCJdYCwgdGhpcy5jb250ZXh0LmNyZWRpdENhcmROdW1iZXIpO1xuICAgICAgICBDQ1ZhbGlkYXRvcnMuc2V0RXhwaXJhdGlvblZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiZXhwaXJhdGlvblwiXWAsIHRoaXMuY29udGV4dC5leHBpcmF0aW9uKTtcbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldE5hbWVPbkNhcmRWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cIm5hbWVfb25fY2FyZFwiXWAsIHRoaXMuY29udGV4dC5uYW1lT25DYXJkKTtcbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldEN2dlZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3Z2XCJdYCwgdGhpcy5jb250ZXh0LmN2diwgKCkgPT4gY2FyZFR5cGUpO1xuXG4gICAgICAgIC8vIFNldCBvZiBjcmVkaXQgY2FyZCBmb3JtYXRcbiAgICAgICAgQ0NGb3JtYXR0ZXJzLnNldENyZWRpdENhcmROdW1iZXJGb3JtYXQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3JlZGl0X2NhcmRfbnVtYmVyXCJdYCk7XG4gICAgICAgIENDRm9ybWF0dGVycy5zZXRFeHBpcmF0aW9uRm9ybWF0KGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImV4cGlyYXRpb25cImApO1xuXG4gICAgICAgIC8vIEJpbGxpbmcgYWRkcmVzcyB2YWxpZGF0aW9uXG4gICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IuYWRkKHZhbGlkYXRpb25Nb2RlbCk7XG5cbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gUGVyZm9ybSBmaW5hbCBmb3JtIHZhbGlkYXRpb25cbiAgICAgICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICBpZiAocGF5bWVudE1ldGhvZFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICAvLyBTZXJpYWxpemUgZm9ybSBkYXRhIGFuZCByZWR1Y2UgaXQgdG8gb2JqZWN0XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IF8ucmVkdWNlKCRwYXltZW50TWV0aG9kRm9ybS5zZXJpYWxpemVBcnJheSgpLCAob2JqLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZk9iaiA9IG9iajtcbiAgICAgICAgICAgICAgICAgICAgcmVmT2JqW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVmT2JqO1xuICAgICAgICAgICAgICAgIH0sIHt9KTtcblxuICAgICAgICAgICAgICAgIC8vIEFzc2lnbiBjb3VudHJ5IGFuZCBzdGF0ZSBjb2RlXG4gICAgICAgICAgICAgICAgY29uc3QgY291bnRyeSA9IF8uZmluZCh0aGlzLmNvbnRleHQuY291bnRyaWVzLCAoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gZGF0YS5jb3VudHJ5KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGNvdW50cnkgJiYgXy5maW5kKGNvdW50cnkuc3RhdGVzLCAoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gZGF0YS5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgZGF0YS5jb3VudHJ5X2NvZGUgPSBjb3VudHJ5ID8gY291bnRyeS5jb2RlIDogZGF0YS5jb3VudHJ5O1xuICAgICAgICAgICAgICAgIGRhdGEuc3RhdGVfb3JfcHJvdmluY2VfY29kZSA9IHN0YXRlID8gc3RhdGUuY29kZSA6IGRhdGEuc3RhdGU7XG5cbiAgICAgICAgICAgICAgICAvLyBEZWZhdWx0IEluc3RydW1lbnRcbiAgICAgICAgICAgICAgICBkYXRhLmRlZmF1bHRfaW5zdHJ1bWVudCA9ICEhZGF0YS5kZWZhdWx0X2luc3RydW1lbnQ7XG5cbiAgICAgICAgICAgICAgICAvLyBTdG9yZSBjcmVkaXQgY2FyZFxuICAgICAgICAgICAgICAgIHN0b3JlSW5zdHJ1bWVudCh0aGlzLmNvbnRleHQsIGRhdGEsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmNvbnRleHQucGF5bWVudE1ldGhvZHNVcmw7XG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuY29udGV4dC5nZW5lcmljX2Vycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRWRpdEFjY291bnRWYWxpZGF0aW9uKCRlZGl0QWNjb3VudEZvcm0pIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGVsID0gdmFsaWRhdGlvbigkZWRpdEFjY291bnRGb3JtKTtcbiAgICAgICAgY29uc3QgZm9ybUVkaXRTZWxlY3RvciA9ICdmb3JtW2RhdGEtZWRpdC1hY2NvdW50LWZvcm1dJztcbiAgICAgICAgY29uc3QgZWRpdFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICcke2Zvcm1FZGl0U2VsZWN0b3J9IGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZW1haWxTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJFbWFpbEFkZHJlc3NcIl1gO1xuICAgICAgICBjb25zdCAkZW1haWxFbGVtZW50ID0gJChlbWFpbFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJQYXNzd29yZFwiXWA7XG4gICAgICAgIGNvbnN0ICRwYXNzd29yZEVsZW1lbnQgPSAkKHBhc3N3b3JkU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBwYXNzd29yZDJTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJDb25maXJtUGFzc3dvcmRcIl1gO1xuICAgICAgICBjb25zdCAkcGFzc3dvcmQyRWxlbWVudCA9ICQocGFzc3dvcmQyU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBjdXJyZW50UGFzc3dvcmRTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJDdXJyZW50UGFzc3dvcmRcIl1gO1xuICAgICAgICBjb25zdCAkY3VycmVudFBhc3N3b3JkID0gJChjdXJyZW50UGFzc3dvcmRTZWxlY3Rvcik7XG5cbiAgICAgICAgLy8gVGhpcyBvbmx5IGhhbmRsZXMgdGhlIGN1c3RvbSBmaWVsZHMsIHN0YW5kYXJkIGZpZWxkcyBhcmUgYWRkZWQgYmVsb3dcbiAgICAgICAgZWRpdFZhbGlkYXRvci5hZGQodmFsaWRhdGlvbk1vZGVsKTtcblxuICAgICAgICBpZiAoJGVtYWlsRWxlbWVudCkge1xuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5yZW1vdmUoZW1haWxTZWxlY3Rvcik7XG4gICAgICAgICAgICBWYWxpZGF0b3JzLnNldEVtYWlsVmFsaWRhdGlvbihlZGl0VmFsaWRhdG9yLCBlbWFpbFNlbGVjdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkcGFzc3dvcmRFbGVtZW50ICYmICRwYXNzd29yZDJFbGVtZW50KSB7XG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLnJlbW92ZShwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucmVtb3ZlKHBhc3N3b3JkMlNlbGVjdG9yKTtcbiAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0UGFzc3dvcmRWYWxpZGF0aW9uKFxuICAgICAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRjdXJyZW50UGFzc3dvcmQpIHtcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogY3VycmVudFBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT09ICcnICYmICRwYXNzd29yZEVsZW1lbnQudmFsKCkgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5jdXJyZW50UGFzc3dvcmQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVkaXRWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gaW5wdXRbbmFtZT0nYWNjb3VudF9maXJzdG5hbWUnXWAsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmZpcnN0TmFtZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGAke2Zvcm1FZGl0U2VsZWN0b3J9IGlucHV0W25hbWU9J2FjY291bnRfbGFzdG5hbWUnXWAsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0Lmxhc3ROYW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgJGVkaXRBY2NvdW50Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKGVkaXRWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWdpc3RlckluYm94VmFsaWRhdGlvbigkaW5ib3hGb3JtKSB7XG4gICAgICAgIGNvbnN0IGluYm94VmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaW5ib3hWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXSBzZWxlY3RbbmFtZT1cIm1lc3NhZ2Vfb3JkZXJfaWRcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBOdW1iZXIodmFsKSAhPT0gMDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZW50ZXJPcmRlck51bSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gaW5wdXRbbmFtZT1cIm1lc3NhZ2Vfc3ViamVjdFwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyU3ViamVjdCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gdGV4dGFyZWFbbmFtZT1cIm1lc3NhZ2VfY29udGVudFwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyTWVzc2FnZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgICRpbmJveEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGluYm94VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAoaW5ib3hWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgY3JlZGl0Y2FyZHMgZnJvbSAnY3JlZGl0Y2FyZHMnO1xuXG4vKipcbiAqIE9taXQgbnVsbCBvciBlbXB0eSBzdHJpbmcgcHJvcGVydGllcyBvZiBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmNvbnN0IG9taXROdWxsU3RyaW5nID0gb2JqID0+IHtcbiAgICBjb25zdCByZWZPYmogPSBvYmo7XG5cbiAgICAkLmVhY2gocmVmT2JqLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICBkZWxldGUgcmVmT2JqW2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZWZPYmo7XG59O1xuXG4vKipcbiAqIEdldCBjcmVkaXQgY2FyZCB0eXBlIGZyb20gY3JlZGl0IGNhcmQgbnVtYmVyXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWRpdENhcmRUeXBlID0gdmFsdWUgPT4gY3JlZGl0Y2FyZHMuY2FyZC50eXBlKGNyZWRpdGNhcmRzLmNhcmQucGFyc2UodmFsdWUpLCB0cnVlKTtcblxuLyoqXG4gKiBXcmFwcGVyIGZvciBhamF4IHJlcXVlc3QgdG8gc3RvcmUgYSBuZXcgaW5zdHJ1bWVudCBpbiBiaWdwYXlcbiAqIEBwYXJhbSB7b2JqZWN0fSBSZXByZXNlbnRpbmcgdGhlIGRhdGEgbmVlZGVkIGZvciB0aGUgaGVhZGVyXG4gKiBAcGFyYW0ge29iamVjdH0gUmVwcmVzZW50aW5nIHRoZSBkYXRhIG5lZWRlZCBmb3IgdGhlIGJvZHlcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGRvbmUgRnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBhIHN1Y2Nlc3NmdWwgcmVzcG9uc2VcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZhaWwgRnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBhIHVuc3VjY2Vzc2Z1bCByZXNwb25zZVxuICovXG5leHBvcnQgY29uc3Qgc3RvcmVJbnN0cnVtZW50ID0gKHtcbiAgICAvLyBIb3N0bmFtZSwgSWRzICYgVG9rZW5cbiAgICBwYXltZW50c1VybCxcbiAgICBzaG9wcGVySWQsXG4gICAgc3RvcmVIYXNoLFxuICAgIHZhdWx0VG9rZW4sXG59LCB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAvLyBQcm92aWRlciBOYW1lXG4gICAgcHJvdmlkZXJfaWQsXG5cbiAgICAvLyBJbnN0cnVtZW50IERldGFpbHNcbiAgICBjcmVkaXRfY2FyZF9udW1iZXIsXG4gICAgZXhwaXJhdGlvbixcbiAgICBuYW1lX29uX2NhcmQsXG4gICAgY3Z2LFxuICAgIGRlZmF1bHRfaW5zdHJ1bWVudCxcblxuICAgIC8vIEJpbGxpbmcgQWRkcmVzc1xuICAgIGFkZHJlc3MxLFxuICAgIGFkZHJlc3MyLFxuICAgIGNpdHksXG4gICAgcG9zdGFsX2NvZGUsXG4gICAgc3RhdGVfb3JfcHJvdmluY2VfY29kZSxcbiAgICBjb3VudHJ5X2NvZGUsXG4gICAgY29tcGFueSxcbiAgICBmaXJzdF9uYW1lLFxuICAgIGxhc3RfbmFtZSxcbiAgICBlbWFpbCxcbiAgICBwaG9uZSxcbiAgICAvKiBlc2xpbnQtZW5hYmxlICovXG59LCBkb25lLCBmYWlsKSA9PiB7XG4gICAgY29uc3QgZXhwaXJ5ID0gZXhwaXJhdGlvbi5zcGxpdCgnLycpO1xuXG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBgJHtwYXltZW50c1VybH0vc3RvcmVzLyR7c3RvcmVIYXNofS9jdXN0b21lcnMvJHtzaG9wcGVySWR9L3N0b3JlZF9pbnN0cnVtZW50c2AsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHZhdWx0VG9rZW4sXG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi92bmQuYmMudjEranNvbicsXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3ZuZC5iYy52MStqc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgaW5zdHJ1bWVudDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjYXJkJyxcbiAgICAgICAgICAgICAgICBjYXJkaG9sZGVyX25hbWU6IG5hbWVfb25fY2FyZCxcbiAgICAgICAgICAgICAgICBudW1iZXI6IGNyZWRpdGNhcmRzLmNhcmQucGFyc2UoY3JlZGl0X2NhcmRfbnVtYmVyKSxcbiAgICAgICAgICAgICAgICBleHBpcnlfbW9udGg6IGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ubW9udGgucGFyc2UoZXhwaXJ5WzBdKSxcbiAgICAgICAgICAgICAgICBleHBpcnlfeWVhcjogY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi55ZWFyLnBhcnNlKGV4cGlyeVsxXSwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uX3ZhbHVlOiBjdnYsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmlsbGluZ19hZGRyZXNzOiBvbWl0TnVsbFN0cmluZyh7XG4gICAgICAgICAgICAgICAgYWRkcmVzczEsXG4gICAgICAgICAgICAgICAgYWRkcmVzczIsXG4gICAgICAgICAgICAgICAgY2l0eSxcbiAgICAgICAgICAgICAgICBwb3N0YWxfY29kZSxcbiAgICAgICAgICAgICAgICBzdGF0ZV9vcl9wcm92aW5jZV9jb2RlLFxuICAgICAgICAgICAgICAgIGNvdW50cnlfY29kZSxcbiAgICAgICAgICAgICAgICBjb21wYW55LFxuICAgICAgICAgICAgICAgIGZpcnN0X25hbWUsXG4gICAgICAgICAgICAgICAgbGFzdF9uYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgIHBob25lLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBwcm92aWRlcl9pZCxcbiAgICAgICAgICAgIGRlZmF1bHRfaW5zdHJ1bWVudCxcbiAgICAgICAgfSksXG4gICAgfSlcbiAgICAgICAgLmRvbmUoZG9uZSlcbiAgICAgICAgLmZhaWwoZmFpbCk7XG59O1xuXG5leHBvcnQgY29uc3QgRm9ybWF0dGVycyA9IHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgZm9ybWF0IGZvciBjcmVkaXQgY2FyZCBudW1iZXJcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBzZXRDcmVkaXRDYXJkTnVtYmVyRm9ybWF0OiBmaWVsZCA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgJChmaWVsZCkub24oJ2tleXVwJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWZUYXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgcmVmVGFyZ2V0LnZhbHVlID0gY3JlZGl0Y2FyZHMuY2FyZC5mb3JtYXQoY3JlZGl0Y2FyZHMuY2FyZC5wYXJzZSh0YXJnZXQudmFsdWUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSBmb3JtYXQgZm9yIGV4cGlyYXRpb24gZGF0ZVxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqL1xuICAgIHNldEV4cGlyYXRpb25Gb3JtYXQ6IGZpZWxkID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICAkKGZpZWxkKS5vbigna2V5dXAnLCAoeyB0YXJnZXQsIHdoaWNoIH0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWZUYXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgaWYgKHdoaWNoID09PSA4ICYmIC8uKihcXC8pJC8udGVzdCh0YXJnZXQudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZlRhcmdldC52YWx1ZSA9IHRhcmdldC52YWx1ZS5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQudmFsdWUubGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgICAgICAgICByZWZUYXJnZXQudmFsdWUgPSB0YXJnZXQudmFsdWUuc2xpY2UoMCwgNSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh3aGljaCAhPT0gOCkge1xuICAgICAgICAgICAgICAgICAgICByZWZUYXJnZXQudmFsdWUgPSB0YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKFsxLTldXFwvfFsyLTldKSQvZywgJzAkMS8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oMFsxLTldfDFbMC0yXSkkL2csICckMS8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oWzAtMV0pKFszLTldKSQvZywgJzAkMS8kMicpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXigwWzEtOV18MVswLTJdKShbMC05XXsyfSkkL2csICckMS8kMicpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXihbMF0rKVxcL3xbMF0rJC9nLCAnMCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvW15cXGRcXC9dfF5bXFwvXSokL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcL1xcLy9nLCAnLycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBWYWxpZGF0b3JzID0ge1xuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBjcmVkaXQgY2FyZCBudW1iZXJcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxuICAgICAqL1xuICAgIHNldENyZWRpdENhcmROdW1iZXJWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JNZXNzYWdlKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoICYmIGNyZWRpdGNhcmRzLmNhcmQuaXNWYWxpZChjcmVkaXRjYXJkcy5jYXJkLnBhcnNlKHZhbCkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgdmFsaWRhdGlvbiBmb3IgZXhwaXJhdGlvbiBkYXRlXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqIEBwYXJhbSBlcnJvck1lc3NhZ2VcbiAgICAgKi9cbiAgICBzZXRFeHBpcmF0aW9uVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSkgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhwaXJ5ID0gdmFsLnNwbGl0KCcvJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB2YWwubGVuZ3RoICYmIC9eKDBbMS05XXwxWzAtMl0pXFwvKFswLTldezJ9KSQvLnRlc3QodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICYmICFjcmVkaXRjYXJkcy5leHBpcmF0aW9uLmlzUGFzdChjcmVkaXRjYXJkcy5leHBpcmF0aW9uLm1vbnRoLnBhcnNlKGV4cGlyeVswXSksIGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ueWVhci5wYXJzZShleHBpcnlbMV0sIHRydWUpKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIHZhbGlkYXRpb24gZm9yIG5hbWUgb24gY2FyZFxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlXG4gICAgICovXG4gICAgc2V0TmFtZU9uQ2FyZFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkLCBlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9ICEhdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIHZhbGlkYXRpb24gZm9yIGN2dlxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlXG4gICAgICogQHBhcmFtIHthbnl9IGNhcmRUeXBlIFRoZSBjcmVkaXQgY2FyZCBudW1iZXIgdHlwZVxuICAgICAqL1xuICAgIHNldEN2dlZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkLCBlcnJvck1lc3NhZ2UsIGNhcmRUeXBlKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gdHlwZW9mIGNhcmRUeXBlID09PSAnZnVuY3Rpb24nID8gY2FyZFR5cGUoKSA6IGNhcmRUeXBlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoICYmIGNyZWRpdGNhcmRzLmN2Yy5pc1ZhbGlkKHZhbCwgdHlwZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9