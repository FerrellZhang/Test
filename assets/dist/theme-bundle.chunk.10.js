(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./assets/js/theme/account.js":
/*!************************************!*\
  !*** ./assets/js/theme/account.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Account; });
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _common_payment_method__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/payment-method */ "./assets/js/theme/common/payment-method.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");






function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }










var Account =
/*#__PURE__*/
function (_PageManager) {
  _inheritsLoose(Account, _PageManager);

  function Account(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    _this.$state = $('[data-field-type="State"]');
    _this.$body = $('body');
    return _this;
  }

  var _proto = Account.prototype;

  _proto.onReady = function onReady() {
    var $editAccountForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_10__["classifyForm"])('form[data-edit-account-form]');
    var $addressForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_10__["classifyForm"])('form[data-address-form]');
    var $inboxForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_10__["classifyForm"])('form[data-inbox-form]');
    var $accountReturnForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_10__["classifyForm"])('[data-account-return-form]');
    var $paymentMethodForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_10__["classifyForm"])('form[data-payment-method-form]');
    var $reorderForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_10__["classifyForm"])('[data-account-reorder-form]');
    var $invoiceButton = $('[data-print-invoice]'); // Injected via template

    this.passwordRequirements = this.context.passwordRequirements; // Instantiates wish list JS

    _wishlist__WEBPACK_IMPORTED_MODULE_7__["default"].load(this.context);

    if ($editAccountForm.length) {
      this.registerEditAccountValidation($editAccountForm);

      if (this.$state.is('input')) {
        Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_10__["insertStateHiddenField"])(this.$state);
      }
    }

    if ($invoiceButton.length) {
      $invoiceButton.on('click', function () {
        var left = window.screen.availWidth / 2 - 450;
        var top = window.screen.availHeight / 2 - 320;
        var url = $invoiceButton.data('printInvoice');
        window.open(url, 'orderInvoice', "width=900,height=650,left=" + left + ",top=" + top + ",scrollbars=1");
      });
    }

    if ($addressForm.length) {
      this.initAddressFormValidation($addressForm);

      if (this.$state.is('input')) {
        Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_10__["insertStateHiddenField"])(this.$state);
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
  }
  /**
   * Binds a submit hook to ensure the customer receives a confirmation dialog before deleting an address
   */
  ;

  _proto.bindDeleteAddress = function bindDeleteAddress() {
    $('[data-delete-address]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deleteAddress');

      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };

  _proto.bindDeletePaymentMethod = function bindDeletePaymentMethod() {
    $('[data-delete-payment-method]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deletePaymentMethod');

      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };

  _proto.initReorderForm = function initReorderForm($reorderForm) {
    var _this2 = this;

    $reorderForm.on('submit', function (event) {
      var $productReorderCheckboxes = $('.account-listItem .form-checkbox:checked');
      var submitForm = false;
      $reorderForm.find('[name^="reorderitem"]').remove();
      $productReorderCheckboxes.each(function (index, productCheckbox) {
        var productId = $(productCheckbox).val();
        var $input = $('<input>', {
          type: 'hidden',
          name: "reorderitem[" + productId + "]",
          value: '1'
        });
        submitForm = true;
        $reorderForm.append($input);
      });

      if (!submitForm) {
        event.preventDefault();
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_12__["default"])({
          text: _this2.context.selectItem,
          type: 'error'
        });
      }
    });
  };

  _proto.initAddressFormValidation = function initAddressFormValidation($addressForm) {
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_8__["default"])($addressForm);
    var stateSelector = 'form[data-address-form] [data-field-type="State"]';
    var $stateElement = $(stateSelector);
    var addressValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_6__["default"])({
      submit: 'form[data-address-form] input[type="submit"]'
    });
    addressValidator.add(validationModel);

    if ($stateElement) {
      var $last; // Requests the states for a country with AJAX

      Object(_common_state_country__WEBPACK_IMPORTED_MODULE_9__["default"])($stateElement, this.context, function (err, field) {
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
          _common_form_utils__WEBPACK_IMPORTED_MODULE_10__["Validators"].setStateCountryValidation(addressValidator, field);
        } else {
          _common_form_utils__WEBPACK_IMPORTED_MODULE_10__["Validators"].cleanUpStateValidation(field);
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

  _proto.initAccountReturnFormValidation = function initAccountReturnFormValidation($accountReturnForm) {
    var errorMessage = $accountReturnForm.data('accountReturnFormError');
    $accountReturnForm.on('submit', function (event) {
      var formSubmit = false; // Iterate until we find a non-zero value in the dropdown for quantity

      $('[name^="return_qty"]', $accountReturnForm).each(function (i, ele) {
        if (parseInt($(ele).val(), 10) !== 0) {
          formSubmit = true; // Exit out of loop if we found at least one return

          return true;
        }
      });

      if (formSubmit) {
        return true;
      }

      Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_12__["default"])({
        text: errorMessage,
        type: 'error'
      });
      return event.preventDefault();
    });
  };

  _proto.initPaymentMethodFormValidation = function initPaymentMethodFormValidation($paymentMethodForm) {
    var _this3 = this;

    // Inject validations into form fields before validation runs
    $paymentMethodForm.find('#first_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.firstNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#last_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.lastNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#company.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.companyLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#phone.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.phoneLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address1.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address1Label + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address2.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address2Label + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#city.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.cityLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#country.form-field').attr('data-validation', "{ \"type\": \"singleselect\", \"label\": \"" + this.context.countryLabel + "\", \"required\": true, prefix: \"" + this.context.chooseCountryLabel + "\" }");
    $paymentMethodForm.find('#state.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.stateLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#postal_code.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.postalCodeLabel + "\", \"required\": true, \"maxlength\": 0 }");
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_8__["default"])($paymentMethodForm);
    var paymentMethodSelector = 'form[data-payment-method-form]';
    var paymentMethodValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_6__["default"])({
      submit: paymentMethodSelector + " input[type=\"submit\"]"
    });
    var $stateElement = $(paymentMethodSelector + " [data-field-type=\"State\"]");
    var $last; // Requests the states for a country with AJAX

    Object(_common_state_country__WEBPACK_IMPORTED_MODULE_9__["default"])($stateElement, this.context, function (err, field) {
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
        _common_form_utils__WEBPACK_IMPORTED_MODULE_10__["Validators"].setStateCountryValidation(paymentMethodValidator, field);
      } else {
        _common_form_utils__WEBPACK_IMPORTED_MODULE_10__["Validators"].cleanUpStateValidation(field);
      }
    }); // Use credit card number input listener to highlight credit card type

    var cardType;
    $(paymentMethodSelector + " input[name=\"credit_card_number\"]").on('keyup', function (_ref) {
      var target = _ref.target;
      cardType = Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_11__["creditCardType"])(target.value);

      if (cardType) {
        $(paymentMethodSelector + " img[alt=\"" + cardType + "\"").siblings().css('opacity', '.2');
      } else {
        $(paymentMethodSelector + " img").css('opacity', '1');
      }
    }); // Set of credit card validation

    _common_payment_method__WEBPACK_IMPORTED_MODULE_11__["Validators"].setCreditCardNumberValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"credit_card_number\"]", this.context.creditCardNumber);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_11__["Validators"].setExpirationValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"expiration\"]", this.context.expiration);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_11__["Validators"].setNameOnCardValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"name_on_card\"]", this.context.nameOnCard);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_11__["Validators"].setCvvValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"cvv\"]", this.context.cvv, function () {
      return cardType;
    }); // Set of credit card format

    _common_payment_method__WEBPACK_IMPORTED_MODULE_11__["Formatters"].setCreditCardNumberFormat(paymentMethodSelector + " input[name=\"credit_card_number\"]");
    _common_payment_method__WEBPACK_IMPORTED_MODULE_11__["Formatters"].setExpirationFormat(paymentMethodSelector + " input[name=\"expiration\""); // Billing address validation

    paymentMethodValidator.add(validationModel);
    $paymentMethodForm.on('submit', function (event) {
      event.preventDefault(); // Perform final form validation

      paymentMethodValidator.performCheck();

      if (paymentMethodValidator.areAll('valid')) {
        // Serialize form data and reduce it to object
        var data = lodash_reduce__WEBPACK_IMPORTED_MODULE_4___default()($paymentMethodForm.serializeArray(), function (obj, item) {
          var refObj = obj;
          refObj[item.name] = item.value;
          return refObj;
        }, {}); // Assign country and state code


        var country = lodash_find__WEBPACK_IMPORTED_MODULE_3___default()(_this3.context.countries, function (_ref2) {
          var value = _ref2.value;
          return value === data.country;
        });

        var state = country && lodash_find__WEBPACK_IMPORTED_MODULE_3___default()(country.states, function (_ref3) {
          var value = _ref3.value;
          return value === data.state;
        });

        data.country_code = country ? country.code : data.country;
        data.state_or_province_code = state ? state.code : data.state; // Default Instrument

        data.default_instrument = !!data.default_instrument; // Store credit card

        Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_11__["storeInstrument"])(_this3.context, data, function () {
          window.location.href = _this3.context.paymentMethodsUrl;
        }, function () {
          Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_12__["default"])({
            text: _this3.context.generic_error,
            type: 'error'
          });
        });
      }
    });
  };

  _proto.registerEditAccountValidation = function registerEditAccountValidation($editAccountForm) {
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_8__["default"])($editAccountForm);
    var formEditSelector = 'form[data-edit-account-form]';
    var editValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_6__["default"])({
      submit: '${formEditSelector} input[type="submit"]'
    });
    var emailSelector = formEditSelector + " [data-field-type=\"EmailAddress\"]";
    var $emailElement = $(emailSelector);
    var passwordSelector = formEditSelector + " [data-field-type=\"Password\"]";
    var $passwordElement = $(passwordSelector);
    var password2Selector = formEditSelector + " [data-field-type=\"ConfirmPassword\"]";
    var $password2Element = $(password2Selector);
    var currentPasswordSelector = formEditSelector + " [data-field-type=\"CurrentPassword\"]";
    var $currentPassword = $(currentPasswordSelector); // This only handles the custom fields, standard fields are added below

    editValidator.add(validationModel);

    if ($emailElement) {
      editValidator.remove(emailSelector);
      _common_form_utils__WEBPACK_IMPORTED_MODULE_10__["Validators"].setEmailValidation(editValidator, emailSelector);
    }

    if ($passwordElement && $password2Element) {
      editValidator.remove(passwordSelector);
      editValidator.remove(password2Selector);
      _common_form_utils__WEBPACK_IMPORTED_MODULE_10__["Validators"].setPasswordValidation(editValidator, passwordSelector, password2Selector, this.passwordRequirements, true);
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
      selector: formEditSelector + " input[name='account_firstname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.firstName
    }, {
      selector: formEditSelector + " input[name='account_lastname']",
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

  _proto.registerInboxValidation = function registerInboxValidation($inboxForm) {
    var inboxValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_6__["default"])({
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
}(_page_manager__WEBPACK_IMPORTED_MODULE_5__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/form-validation.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/form-validation.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__);





/**
 * Validate that the given date for the day/month/year select inputs is within potential range
 * @param $formField
 * @param validation
 * @returns {{selector: string, triggeredBy: string, validate: Function, errorMessage: string}}
 */
function buildDateValidation($formField, validation) {
  // No date range restriction, skip
  if (validation.min_date && validation.max_date) {
    var invalidMessage = "Your chosen date must fall between " + validation.min_date + " and " + validation.max_date + ".";
    var formElementId = $formField.attr('id');
    var minSplit = validation.min_date.split('-');
    var maxSplit = validation.max_date.split('-');
    var minDate = new Date(minSplit[0], minSplit[1] - 1, minSplit[2]);
    var maxDate = new Date(maxSplit[0], maxSplit[1] - 1, maxSplit[2]);
    return {
      selector: "#" + formElementId + " select[data-label=\"year\"]",
      triggeredBy: "#" + formElementId + " select:not([data-label=\"year\"])",
      validate: function validate(cb, val) {
        var day = Number($formField.find('select[data-label="day"]').val());
        var month = Number($formField.find('select[data-label="month"]').val()) - 1;
        var year = Number(val);
        var chosenDate = new Date(year, month, day);
        cb(chosenDate >= minDate && chosenDate <= maxDate);
      },
      errorMessage: invalidMessage
    };
  }
}
/**
 * We validate checkboxes separately from single input fields, as they must have at least one checked option
 * from many different inputs
 * @param $formField
 * @param validation
 */


function buildRequiredCheckboxValidation($formField, validation) {
  var formFieldId = $formField.attr('id');
  var primarySelector = "#" + formFieldId + " input:first-of-type";
  var secondarySelector = "#" + formFieldId + " input";
  return {
    selector: primarySelector,
    triggeredBy: secondarySelector,
    validate: function validate(cb) {
      var result = false;
      $(secondarySelector).each(function (index, checkbox) {
        if (checkbox.checked) {
          result = true;
          return false;
        }
      });
      cb(result);
    },
    errorMessage: "The '" + validation.label + "' field cannot be blank."
  };
}

function buildRequiredValidation(validation, selector) {
  return {
    selector: selector,
    validate: function validate(cb, val) {
      cb(val.length > 0);
    },
    errorMessage: "The '" + validation.label + "' field cannot be blank."
  };
}

function buildNumberRangeValidation(validation, formFieldSelector) {
  var invalidMessage = "The value for " + validation.label + " must be between " + validation.min + " and " + validation.max + ".";
  var min = Number(validation.min);
  var max = Number(validation.max);
  return {
    selector: formFieldSelector + " input[name=\"" + validation.name + "\"]",
    validate: function validate(cb, val) {
      var numberVal = Number(val);
      cb(numberVal >= min && numberVal <= max);
    },
    errorMessage: invalidMessage
  };
}

function buildValidation($validateableElement) {
  var validation = $validateableElement.data('validation');
  var fieldValidations = [];
  var formFieldSelector = "#" + $validateableElement.attr('id');

  if (validation.type === 'datechooser') {
    var dateValidation = buildDateValidation($validateableElement, validation);

    if (dateValidation) {
      fieldValidations.push(dateValidation);
    }
  } else if (validation.required && (validation.type === 'checkboxselect' || validation.type === 'radioselect')) {
    fieldValidations.push(buildRequiredCheckboxValidation($validateableElement, validation));
  } else {
    $validateableElement.find('input, select, textarea').each(function (index, element) {
      var $inputElement = $(element);
      var tagName = $inputElement.get(0).tagName;
      var inputName = $inputElement.attr('name');
      var elementSelector = formFieldSelector + " " + tagName + "[name=\"" + inputName + "\"]";

      if (validation.type === 'numberonly') {
        fieldValidations.push(buildNumberRangeValidation(validation, formFieldSelector));
      }

      if (validation.required) {
        fieldValidations.push(buildRequiredValidation(validation, elementSelector));
      }
    });
  }

  return fieldValidations;
}
/**
 * Builds the validation model for dynamic forms
 * @param $form
 * @returns {Array}
 */


/* harmony default export */ __webpack_exports__["default"] = (function ($form) {
  var validationsToPerform = [];
  $form.find('[data-validation]').each(function (index, input) {
    validationsToPerform = validationsToPerform.concat(buildValidation($(input)));
  });
  return validationsToPerform;
});
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
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! creditcards */ "./node_modules/creditcards/index.js");
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(creditcards__WEBPACK_IMPORTED_MODULE_2__);



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
  return creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.card.type(creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.card.parse(value), true);
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
    url: paymentsUrl + "/stores/" + storeHash + "/customers/" + shopperId + "/stored_instruments",
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
        number: creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.card.parse(credit_card_number),
        expiry_month: creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.expiration.month.parse(expiry[0]),
        expiry_year: creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.expiration.year.parse(expiry[1], true),
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
        refTarget.value = creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.card.format(creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.card.parse(target.value));
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
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.card.isValid(creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.card.parse(val));
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
          result = result && !creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.expiration.isPast(creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.expiration.month.parse(expiry[0]), creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.expiration.year.parse(expiry[1], true));
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
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.cvc.isValid(val, type);
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/global/sweet-alert.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/global/sweet-alert.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
 // Set defaults for sweetalert2 popup boxes

sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.setDefaults({
  buttonsStyling: false,
  confirmButtonClass: 'button',
  cancelButtonClass: 'button'
}); // Re-export

/* harmony default export */ __webpack_exports__["default"] = (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Zvcm0tdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3BheW1lbnQtbWV0aG9kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9nbG9iYWwvc3dlZXQtYWxlcnQuanMiXSwibmFtZXMiOlsiQWNjb3VudCIsImNvbnRleHQiLCIkc3RhdGUiLCIkIiwiJGJvZHkiLCJvblJlYWR5IiwiJGVkaXRBY2NvdW50Rm9ybSIsImNsYXNzaWZ5Rm9ybSIsIiRhZGRyZXNzRm9ybSIsIiRpbmJveEZvcm0iLCIkYWNjb3VudFJldHVybkZvcm0iLCIkcGF5bWVudE1ldGhvZEZvcm0iLCIkcmVvcmRlckZvcm0iLCIkaW52b2ljZUJ1dHRvbiIsInBhc3N3b3JkUmVxdWlyZW1lbnRzIiwiV2lzaGxpc3QiLCJsb2FkIiwibGVuZ3RoIiwicmVnaXN0ZXJFZGl0QWNjb3VudFZhbGlkYXRpb24iLCJpcyIsImluc2VydFN0YXRlSGlkZGVuRmllbGQiLCJvbiIsImxlZnQiLCJ3aW5kb3ciLCJzY3JlZW4iLCJhdmFpbFdpZHRoIiwidG9wIiwiYXZhaWxIZWlnaHQiLCJ1cmwiLCJkYXRhIiwib3BlbiIsImluaXRBZGRyZXNzRm9ybVZhbGlkYXRpb24iLCJyZWdpc3RlckluYm94VmFsaWRhdGlvbiIsImluaXRBY2NvdW50UmV0dXJuRm9ybVZhbGlkYXRpb24iLCJpbml0UGF5bWVudE1ldGhvZEZvcm1WYWxpZGF0aW9uIiwiaW5pdFJlb3JkZXJGb3JtIiwiYmluZERlbGV0ZUFkZHJlc3MiLCJiaW5kRGVsZXRlUGF5bWVudE1ldGhvZCIsImV2ZW50IiwibWVzc2FnZSIsImN1cnJlbnRUYXJnZXQiLCJjb25maXJtIiwicHJldmVudERlZmF1bHQiLCIkcHJvZHVjdFJlb3JkZXJDaGVja2JveGVzIiwic3VibWl0Rm9ybSIsImZpbmQiLCJyZW1vdmUiLCJlYWNoIiwiaW5kZXgiLCJwcm9kdWN0Q2hlY2tib3giLCJwcm9kdWN0SWQiLCJ2YWwiLCIkaW5wdXQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiYXBwZW5kIiwic3dhbCIsInRleHQiLCJzZWxlY3RJdGVtIiwidmFsaWRhdGlvbk1vZGVsIiwidmFsaWRhdGlvbiIsInN0YXRlU2VsZWN0b3IiLCIkc3RhdGVFbGVtZW50IiwiYWRkcmVzc1ZhbGlkYXRvciIsIm5vZCIsInN1Ym1pdCIsImFkZCIsIiRsYXN0Iiwic3RhdGVDb3VudHJ5IiwiZXJyIiwiZmllbGQiLCJFcnJvciIsIiRmaWVsZCIsImdldFN0YXR1cyIsIlZhbGlkYXRvcnMiLCJzZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uIiwiY2xlYW5VcFN0YXRlVmFsaWRhdGlvbiIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsImVycm9yTWVzc2FnZSIsImZvcm1TdWJtaXQiLCJpIiwiZWxlIiwicGFyc2VJbnQiLCJhdHRyIiwiZmlyc3ROYW1lTGFiZWwiLCJsYXN0TmFtZUxhYmVsIiwiY29tcGFueUxhYmVsIiwicGhvbmVMYWJlbCIsImFkZHJlc3MxTGFiZWwiLCJhZGRyZXNzMkxhYmVsIiwiY2l0eUxhYmVsIiwiY291bnRyeUxhYmVsIiwiY2hvb3NlQ291bnRyeUxhYmVsIiwic3RhdGVMYWJlbCIsInBvc3RhbENvZGVMYWJlbCIsInBheW1lbnRNZXRob2RTZWxlY3RvciIsInBheW1lbnRNZXRob2RWYWxpZGF0b3IiLCJjYXJkVHlwZSIsInRhcmdldCIsImNyZWRpdENhcmRUeXBlIiwic2libGluZ3MiLCJjc3MiLCJDQ1ZhbGlkYXRvcnMiLCJzZXRDcmVkaXRDYXJkTnVtYmVyVmFsaWRhdGlvbiIsImNyZWRpdENhcmROdW1iZXIiLCJzZXRFeHBpcmF0aW9uVmFsaWRhdGlvbiIsImV4cGlyYXRpb24iLCJzZXROYW1lT25DYXJkVmFsaWRhdGlvbiIsIm5hbWVPbkNhcmQiLCJzZXRDdnZWYWxpZGF0aW9uIiwiY3Z2IiwiQ0NGb3JtYXR0ZXJzIiwic2V0Q3JlZGl0Q2FyZE51bWJlckZvcm1hdCIsInNldEV4cGlyYXRpb25Gb3JtYXQiLCJzZXJpYWxpemVBcnJheSIsIm9iaiIsIml0ZW0iLCJyZWZPYmoiLCJjb3VudHJ5IiwiY291bnRyaWVzIiwic3RhdGUiLCJzdGF0ZXMiLCJjb3VudHJ5X2NvZGUiLCJjb2RlIiwic3RhdGVfb3JfcHJvdmluY2VfY29kZSIsImRlZmF1bHRfaW5zdHJ1bWVudCIsInN0b3JlSW5zdHJ1bWVudCIsImxvY2F0aW9uIiwiaHJlZiIsInBheW1lbnRNZXRob2RzVXJsIiwiZ2VuZXJpY19lcnJvciIsImZvcm1FZGl0U2VsZWN0b3IiLCJlZGl0VmFsaWRhdG9yIiwiZW1haWxTZWxlY3RvciIsIiRlbWFpbEVsZW1lbnQiLCJwYXNzd29yZFNlbGVjdG9yIiwiJHBhc3N3b3JkRWxlbWVudCIsInBhc3N3b3JkMlNlbGVjdG9yIiwiJHBhc3N3b3JkMkVsZW1lbnQiLCJjdXJyZW50UGFzc3dvcmRTZWxlY3RvciIsIiRjdXJyZW50UGFzc3dvcmQiLCJzZXRFbWFpbFZhbGlkYXRpb24iLCJzZXRQYXNzd29yZFZhbGlkYXRpb24iLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJyZXN1bHQiLCJjdXJyZW50UGFzc3dvcmQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImluYm94VmFsaWRhdG9yIiwiTnVtYmVyIiwiZW50ZXJPcmRlck51bSIsImVudGVyU3ViamVjdCIsImVudGVyTWVzc2FnZSIsIlBhZ2VNYW5hZ2VyIiwiYnVpbGREYXRlVmFsaWRhdGlvbiIsIiRmb3JtRmllbGQiLCJtaW5fZGF0ZSIsIm1heF9kYXRlIiwiaW52YWxpZE1lc3NhZ2UiLCJmb3JtRWxlbWVudElkIiwibWluU3BsaXQiLCJzcGxpdCIsIm1heFNwbGl0IiwibWluRGF0ZSIsIkRhdGUiLCJtYXhEYXRlIiwidHJpZ2dlcmVkQnkiLCJkYXkiLCJtb250aCIsInllYXIiLCJjaG9zZW5EYXRlIiwiYnVpbGRSZXF1aXJlZENoZWNrYm94VmFsaWRhdGlvbiIsImZvcm1GaWVsZElkIiwicHJpbWFyeVNlbGVjdG9yIiwic2Vjb25kYXJ5U2VsZWN0b3IiLCJjaGVja2JveCIsImNoZWNrZWQiLCJsYWJlbCIsImJ1aWxkUmVxdWlyZWRWYWxpZGF0aW9uIiwiYnVpbGROdW1iZXJSYW5nZVZhbGlkYXRpb24iLCJmb3JtRmllbGRTZWxlY3RvciIsIm1pbiIsIm1heCIsIm51bWJlclZhbCIsImJ1aWxkVmFsaWRhdGlvbiIsIiR2YWxpZGF0ZWFibGVFbGVtZW50IiwiZmllbGRWYWxpZGF0aW9ucyIsImRhdGVWYWxpZGF0aW9uIiwicHVzaCIsInJlcXVpcmVkIiwiZWxlbWVudCIsIiRpbnB1dEVsZW1lbnQiLCJ0YWdOYW1lIiwiZ2V0IiwiaW5wdXROYW1lIiwiZWxlbWVudFNlbGVjdG9yIiwiJGZvcm0iLCJ2YWxpZGF0aW9uc1RvUGVyZm9ybSIsImlucHV0IiwiY29uY2F0Iiwib21pdE51bGxTdHJpbmciLCJrZXkiLCJjcmVkaXRjYXJkcyIsImNhcmQiLCJwYXJzZSIsImRvbmUiLCJmYWlsIiwicGF5bWVudHNVcmwiLCJzaG9wcGVySWQiLCJzdG9yZUhhc2giLCJ2YXVsdFRva2VuIiwicHJvdmlkZXJfaWQiLCJjcmVkaXRfY2FyZF9udW1iZXIiLCJuYW1lX29uX2NhcmQiLCJhZGRyZXNzMSIsImFkZHJlc3MyIiwiY2l0eSIsInBvc3RhbF9jb2RlIiwiY29tcGFueSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJlbWFpbCIsInBob25lIiwiZXhwaXJ5IiwiYWpheCIsImRhdGFUeXBlIiwibWV0aG9kIiwiY2FjaGUiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIkFjY2VwdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbnN0cnVtZW50IiwiY2FyZGhvbGRlcl9uYW1lIiwibnVtYmVyIiwiZXhwaXJ5X21vbnRoIiwiZXhwaXJ5X3llYXIiLCJ2ZXJpZmljYXRpb25fdmFsdWUiLCJiaWxsaW5nX2FkZHJlc3MiLCJGb3JtYXR0ZXJzIiwicmVmVGFyZ2V0IiwiZm9ybWF0Iiwid2hpY2giLCJ0ZXN0Iiwic2xpY2UiLCJyZXBsYWNlIiwidmFsaWRhdG9yIiwiaXNWYWxpZCIsImlzUGFzdCIsImN2YyIsInN3ZWV0QWxlcnQiLCJzZXREZWZhdWx0cyIsImJ1dHRvbnNTdHlsaW5nIiwiY29uZmlybUJ1dHRvbkNsYXNzIiwiY2FuY2VsQnV0dG9uQ2xhc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLE87Ozs7O0FBQ2pCLG1CQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ2pCLG9DQUFNQSxPQUFOO0FBRUEsVUFBS0MsTUFBTCxHQUFjQyxDQUFDLENBQUMsMkJBQUQsQ0FBZjtBQUNBLFVBQUtDLEtBQUwsR0FBYUQsQ0FBQyxDQUFDLE1BQUQsQ0FBZDtBQUppQjtBQUtwQjs7OztTQUVERSxPLEdBQUEsbUJBQVU7QUFDTixRQUFNQyxnQkFBZ0IsR0FBR0Msd0VBQVksQ0FBQyw4QkFBRCxDQUFyQztBQUNBLFFBQU1DLFlBQVksR0FBR0Qsd0VBQVksQ0FBQyx5QkFBRCxDQUFqQztBQUNBLFFBQU1FLFVBQVUsR0FBR0Ysd0VBQVksQ0FBQyx1QkFBRCxDQUEvQjtBQUNBLFFBQU1HLGtCQUFrQixHQUFHSCx3RUFBWSxDQUFDLDRCQUFELENBQXZDO0FBQ0EsUUFBTUksa0JBQWtCLEdBQUdKLHdFQUFZLENBQUMsZ0NBQUQsQ0FBdkM7QUFDQSxRQUFNSyxZQUFZLEdBQUdMLHdFQUFZLENBQUMsNkJBQUQsQ0FBakM7QUFDQSxRQUFNTSxjQUFjLEdBQUdWLENBQUMsQ0FBQyxzQkFBRCxDQUF4QixDQVBNLENBU047O0FBQ0EsU0FBS1csb0JBQUwsR0FBNEIsS0FBS2IsT0FBTCxDQUFhYSxvQkFBekMsQ0FWTSxDQVlOOztBQUNBQyxxREFBUSxDQUFDQyxJQUFULENBQWMsS0FBS2YsT0FBbkI7O0FBRUEsUUFBSUssZ0JBQWdCLENBQUNXLE1BQXJCLEVB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Q0MsV0FBWCxDQUF1QjtBQUNuQkMsZ0JBQWMsRUFBRSxLQURHO0FBRW5CQyxvQkFBa0IsRUFBRSxRQUZEO0FBR25CQyxtQkFBaUIsRUFBRTtBQUhBLENBQXZCLEUsQ0FNQTs7QUFDZUosaUhBQWYsRSIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcbmltcG9ydCBXaXNobGlzdCBmcm9tICcuL3dpc2hsaXN0JztcbmltcG9ydCB2YWxpZGF0aW9uIGZyb20gJy4vY29tbW9uL2Zvcm0tdmFsaWRhdGlvbic7XG5pbXBvcnQgc3RhdGVDb3VudHJ5IGZyb20gJy4vY29tbW9uL3N0YXRlLWNvdW50cnknO1xuaW1wb3J0IHsgY2xhc3NpZnlGb3JtLCBWYWxpZGF0b3JzLCBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIH0gZnJvbSAnLi9jb21tb24vZm9ybS11dGlscyc7XG5pbXBvcnQgeyBjcmVkaXRDYXJkVHlwZSwgc3RvcmVJbnN0cnVtZW50LCBWYWxpZGF0b3JzIGFzIENDVmFsaWRhdG9ycywgRm9ybWF0dGVycyBhcyBDQ0Zvcm1hdHRlcnMgfSBmcm9tICcuL2NvbW1vbi9wYXltZW50LW1ldGhvZCc7XG5pbXBvcnQgc3dhbCBmcm9tICcuL2dsb2JhbC9zd2VldC1hbGVydCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY291bnQgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcblxuICAgICAgICB0aGlzLiRzdGF0ZSA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuICAgICAgICB0aGlzLiRib2R5ID0gJCgnYm9keScpO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0ICRlZGl0QWNjb3VudEZvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1lZGl0LWFjY291bnQtZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJGFkZHJlc3NGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtYWRkcmVzcy1mb3JtXScpO1xuICAgICAgICBjb25zdCAkaW5ib3hGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtaW5ib3gtZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJGFjY291bnRSZXR1cm5Gb3JtID0gY2xhc3NpZnlGb3JtKCdbZGF0YS1hY2NvdW50LXJldHVybi1mb3JtXScpO1xuICAgICAgICBjb25zdCAkcGF5bWVudE1ldGhvZEZvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1wYXltZW50LW1ldGhvZC1mb3JtXScpO1xuICAgICAgICBjb25zdCAkcmVvcmRlckZvcm0gPSBjbGFzc2lmeUZvcm0oJ1tkYXRhLWFjY291bnQtcmVvcmRlci1mb3JtXScpO1xuICAgICAgICBjb25zdCAkaW52b2ljZUJ1dHRvbiA9ICQoJ1tkYXRhLXByaW50LWludm9pY2VdJyk7XG5cbiAgICAgICAgLy8gSW5qZWN0ZWQgdmlhIHRlbXBsYXRlXG4gICAgICAgIHRoaXMucGFzc3dvcmRSZXF1aXJlbWVudHMgPSB0aGlzLmNvbnRleHQucGFzc3dvcmRSZXF1aXJlbWVudHM7XG5cbiAgICAgICAgLy8gSW5zdGFudGlhdGVzIHdpc2ggbGlzdCBKU1xuICAgICAgICBXaXNobGlzdC5sb2FkKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgaWYgKCRlZGl0QWNjb3VudEZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRWRpdEFjY291bnRWYWxpZGF0aW9uKCRlZGl0QWNjb3VudEZvcm0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuJHN0YXRlLmlzKCdpbnB1dCcpKSB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCh0aGlzLiRzdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGludm9pY2VCdXR0b24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAkaW52b2ljZUJ1dHRvbi5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdCA9IHdpbmRvdy5zY3JlZW4uYXZhaWxXaWR0aCAvIDIgLSA0NTA7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9wID0gd2luZG93LnNjcmVlbi5hdmFpbEhlaWdodCAvIDIgLSAzMjA7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gJGludm9pY2VCdXR0b24uZGF0YSgncHJpbnRJbnZvaWNlJyk7XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cub3Blbih1cmwsICdvcmRlckludm9pY2UnLCBgd2lkdGg9OTAwLGhlaWdodD02NTAsbGVmdD0ke2xlZnR9LHRvcD0ke3RvcH0sc2Nyb2xsYmFycz0xYCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkYWRkcmVzc0Zvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRBZGRyZXNzRm9ybVZhbGlkYXRpb24oJGFkZHJlc3NGb3JtKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuJHN0YXRlLmlzKCdpbnB1dCcpKSB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCh0aGlzLiRzdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGluYm94Rm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJJbmJveFZhbGlkYXRpb24oJGluYm94Rm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGFjY291bnRSZXR1cm5Gb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pbml0QWNjb3VudFJldHVybkZvcm1WYWxpZGF0aW9uKCRhY2NvdW50UmV0dXJuRm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHBheW1lbnRNZXRob2RGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pbml0UGF5bWVudE1ldGhvZEZvcm1WYWxpZGF0aW9uKCRwYXltZW50TWV0aG9kRm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHJlb3JkZXJGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pbml0UmVvcmRlckZvcm0oJHJlb3JkZXJGb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYmluZERlbGV0ZUFkZHJlc3MoKTtcbiAgICAgICAgdGhpcy5iaW5kRGVsZXRlUGF5bWVudE1ldGhvZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGEgc3VibWl0IGhvb2sgdG8gZW5zdXJlIHRoZSBjdXN0b21lciByZWNlaXZlcyBhIGNvbmZpcm1hdGlvbiBkaWFsb2cgYmVmb3JlIGRlbGV0aW5nIGFuIGFkZHJlc3NcbiAgICAgKi9cbiAgICBiaW5kRGVsZXRlQWRkcmVzcygpIHtcbiAgICAgICAgJCgnW2RhdGEtZGVsZXRlLWFkZHJlc3NdJykub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2RlbGV0ZUFkZHJlc3MnKTtcblxuICAgICAgICAgICAgaWYgKCF3aW5kb3cuY29uZmlybShtZXNzYWdlKSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmREZWxldGVQYXltZW50TWV0aG9kKCkge1xuICAgICAgICAkKCdbZGF0YS1kZWxldGUtcGF5bWVudC1tZXRob2RdJykub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2RlbGV0ZVBheW1lbnRNZXRob2QnKTtcblxuICAgICAgICAgICAgaWYgKCF3aW5kb3cuY29uZmlybShtZXNzYWdlKSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRSZW9yZGVyRm9ybSgkcmVvcmRlckZvcm0pIHtcbiAgICAgICAgJHJlb3JkZXJGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkcHJvZHVjdFJlb3JkZXJDaGVja2JveGVzID0gJCgnLmFjY291bnQtbGlzdEl0ZW0gLmZvcm0tY2hlY2tib3g6Y2hlY2tlZCcpO1xuICAgICAgICAgICAgbGV0IHN1Ym1pdEZvcm0gPSBmYWxzZTtcblxuICAgICAgICAgICAgJHJlb3JkZXJGb3JtLmZpbmQoJ1tuYW1lXj1cInJlb3JkZXJpdGVtXCJdJykucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICRwcm9kdWN0UmVvcmRlckNoZWNrYm94ZXMuZWFjaCgoaW5kZXgsIHByb2R1Y3RDaGVja2JveCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQocHJvZHVjdENoZWNrYm94KS52YWwoKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkaW5wdXQgPSAkKCc8aW5wdXQ+Jywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogYHJlb3JkZXJpdGVtWyR7cHJvZHVjdElkfV1gLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJzEnLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAkcmVvcmRlckZvcm0uYXBwZW5kKCRpbnB1dCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFzdWJtaXRGb3JtKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy5jb250ZXh0LnNlbGVjdEl0ZW0sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRBZGRyZXNzRm9ybVZhbGlkYXRpb24oJGFkZHJlc3NGb3JtKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RlbCA9IHZhbGlkYXRpb24oJGFkZHJlc3NGb3JtKTtcbiAgICAgICAgY29uc3Qgc3RhdGVTZWxlY3RvciA9ICdmb3JtW2RhdGEtYWRkcmVzcy1mb3JtXSBbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nO1xuICAgICAgICBjb25zdCAkc3RhdGVFbGVtZW50ID0gJChzdGF0ZVNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgYWRkcmVzc1ZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICdmb3JtW2RhdGEtYWRkcmVzcy1mb3JtXSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYWRkcmVzc1ZhbGlkYXRvci5hZGQodmFsaWRhdGlvbk1vZGVsKTtcblxuICAgICAgICBpZiAoJHN0YXRlRWxlbWVudCkge1xuICAgICAgICAgICAgbGV0ICRsYXN0O1xuXG4gICAgICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXG4gICAgICAgICAgICBzdGF0ZUNvdW50cnkoJHN0YXRlRWxlbWVudCwgdGhpcy5jb250ZXh0LCAoZXJyLCBmaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgJGZpZWxkID0gJChmaWVsZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYWRkcmVzc1ZhbGlkYXRvci5nZXRTdGF0dXMoJHN0YXRlRWxlbWVudCkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NWYWxpZGF0b3IucmVtb3ZlKCRzdGF0ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkbGFzdCkge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLnJlbW92ZSgkbGFzdCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCRmaWVsZC5pcygnc2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgJGxhc3QgPSBmaWVsZDtcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uKGFkZHJlc3NWYWxpZGF0b3IsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLmNsZWFuVXBTdGF0ZVZhbGlkYXRpb24oZmllbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJGFkZHJlc3NGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAoYWRkcmVzc1ZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRBY2NvdW50UmV0dXJuRm9ybVZhbGlkYXRpb24oJGFjY291bnRSZXR1cm5Gb3JtKSB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9ICRhY2NvdW50UmV0dXJuRm9ybS5kYXRhKCdhY2NvdW50UmV0dXJuRm9ybUVycm9yJyk7XG5cbiAgICAgICAgJGFjY291bnRSZXR1cm5Gb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBsZXQgZm9ybVN1Ym1pdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBJdGVyYXRlIHVudGlsIHdlIGZpbmQgYSBub24temVybyB2YWx1ZSBpbiB0aGUgZHJvcGRvd24gZm9yIHF1YW50aXR5XG4gICAgICAgICAgICAkKCdbbmFtZV49XCJyZXR1cm5fcXR5XCJdJywgJGFjY291bnRSZXR1cm5Gb3JtKS5lYWNoKChpLCBlbGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoJChlbGUpLnZhbCgpLCAxMCkgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybVN1Ym1pdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRXhpdCBvdXQgb2YgbG9vcCBpZiB3ZSBmb3VuZCBhdCBsZWFzdCBvbmUgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoZm9ybVN1Ym1pdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdFBheW1lbnRNZXRob2RGb3JtVmFsaWRhdGlvbigkcGF5bWVudE1ldGhvZEZvcm0pIHtcbiAgICAgICAgLy8gSW5qZWN0IHZhbGlkYXRpb25zIGludG8gZm9ybSBmaWVsZHMgYmVmb3JlIHZhbGlkYXRpb24gcnVuc1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2ZpcnN0X25hbWUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmZpcnN0TmFtZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2xhc3RfbmFtZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQubGFzdE5hbWVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNjb21wYW55LmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5jb21wYW55TGFiZWx9XCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI3Bob25lLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5waG9uZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNhZGRyZXNzMS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuYWRkcmVzczFMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNhZGRyZXNzMi5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuYWRkcmVzczJMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjY2l0eS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuY2l0eUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2NvdW50cnkuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZXNlbGVjdFwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuY291bnRyeUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIHByZWZpeDogXCIke3RoaXMuY29udGV4dC5jaG9vc2VDb3VudHJ5TGFiZWx9XCIgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI3N0YXRlLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5zdGF0ZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI3Bvc3RhbF9jb2RlLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5wb3N0YWxDb2RlTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGVsID0gdmFsaWRhdGlvbigkcGF5bWVudE1ldGhvZEZvcm0pO1xuICAgICAgICBjb25zdCBwYXltZW50TWV0aG9kU2VsZWN0b3IgPSAnZm9ybVtkYXRhLXBheW1lbnQtbWV0aG9kLWZvcm1dJztcbiAgICAgICAgY29uc3QgcGF5bWVudE1ldGhvZFZhbGlkYXRvciA9IG5vZCh7IHN1Ym1pdDogYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFt0eXBlPVwic3VibWl0XCJdYCB9KTtcbiAgICAgICAgY29uc3QgJHN0YXRlRWxlbWVudCA9ICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl1gKTtcblxuICAgICAgICBsZXQgJGxhc3Q7XG4gICAgICAgIC8vIFJlcXVlc3RzIHRoZSBzdGF0ZXMgZm9yIGEgY291bnRyeSB3aXRoIEFKQVhcbiAgICAgICAgc3RhdGVDb3VudHJ5KCRzdGF0ZUVsZW1lbnQsIHRoaXMuY29udGV4dCwgKGVyciwgZmllbGQpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJGZpZWxkID0gJChmaWVsZCk7XG5cbiAgICAgICAgICAgIGlmIChwYXltZW50TWV0aG9kVmFsaWRhdG9yLmdldFN0YXR1cygkc3RhdGVFbGVtZW50KSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kVmFsaWRhdG9yLnJlbW92ZSgkc3RhdGVFbGVtZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRsYXN0KSB7XG4gICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZFZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGZpZWxkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5jbGVhblVwU3RhdGVWYWxpZGF0aW9uKGZpZWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVXNlIGNyZWRpdCBjYXJkIG51bWJlciBpbnB1dCBsaXN0ZW5lciB0byBoaWdobGlnaHQgY3JlZGl0IGNhcmQgdHlwZVxuICAgICAgICBsZXQgY2FyZFR5cGU7XG4gICAgICAgICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3JlZGl0X2NhcmRfbnVtYmVyXCJdYCkub24oJ2tleXVwJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgICAgIGNhcmRUeXBlID0gY3JlZGl0Q2FyZFR5cGUodGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIGlmIChjYXJkVHlwZSkge1xuICAgICAgICAgICAgICAgICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbWdbYWx0PVwiJHtjYXJkVHlwZX1cImApLnNpYmxpbmdzKCkuY3NzKCdvcGFjaXR5JywgJy4yJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbWdgKS5jc3MoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTZXQgb2YgY3JlZGl0IGNhcmQgdmFsaWRhdGlvblxuICAgICAgICBDQ1ZhbGlkYXRvcnMuc2V0Q3JlZGl0Q2FyZE51bWJlclZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3JlZGl0X2NhcmRfbnVtYmVyXCJdYCwgdGhpcy5jb250ZXh0LmNyZWRpdENhcmROdW1iZXIpO1xuICAgICAgICBDQ1ZhbGlkYXRvcnMuc2V0RXhwaXJhdGlvblZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiZXhwaXJhdGlvblwiXWAsIHRoaXMuY29udGV4dC5leHBpcmF0aW9uKTtcbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldE5hbWVPbkNhcmRWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cIm5hbWVfb25fY2FyZFwiXWAsIHRoaXMuY29udGV4dC5uYW1lT25DYXJkKTtcbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldEN2dlZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3Z2XCJdYCwgdGhpcy5jb250ZXh0LmN2diwgKCkgPT4gY2FyZFR5cGUpO1xuXG4gICAgICAgIC8vIFNldCBvZiBjcmVkaXQgY2FyZCBmb3JtYXRcbiAgICAgICAgQ0NGb3JtYXR0ZXJzLnNldENyZWRpdENhcmROdW1iZXJGb3JtYXQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3JlZGl0X2NhcmRfbnVtYmVyXCJdYCk7XG4gICAgICAgIENDRm9ybWF0dGVycy5zZXRFeHBpcmF0aW9uRm9ybWF0KGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImV4cGlyYXRpb25cImApO1xuXG4gICAgICAgIC8vIEJpbGxpbmcgYWRkcmVzcyB2YWxpZGF0aW9uXG4gICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IuYWRkKHZhbGlkYXRpb25Nb2RlbCk7XG5cbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gUGVyZm9ybSBmaW5hbCBmb3JtIHZhbGlkYXRpb25cbiAgICAgICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICBpZiAocGF5bWVudE1ldGhvZFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICAvLyBTZXJpYWxpemUgZm9ybSBkYXRhIGFuZCByZWR1Y2UgaXQgdG8gb2JqZWN0XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IF8ucmVkdWNlKCRwYXltZW50TWV0aG9kRm9ybS5zZXJpYWxpemVBcnJheSgpLCAob2JqLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZk9iaiA9IG9iajtcbiAgICAgICAgICAgICAgICAgICAgcmVmT2JqW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVmT2JqO1xuICAgICAgICAgICAgICAgIH0sIHt9KTtcblxuICAgICAgICAgICAgICAgIC8vIEFzc2lnbiBjb3VudHJ5IGFuZCBzdGF0ZSBjb2RlXG4gICAgICAgICAgICAgICAgY29uc3QgY291bnRyeSA9IF8uZmluZCh0aGlzLmNvbnRleHQuY291bnRyaWVzLCAoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gZGF0YS5jb3VudHJ5KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGNvdW50cnkgJiYgXy5maW5kKGNvdW50cnkuc3RhdGVzLCAoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gZGF0YS5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgZGF0YS5jb3VudHJ5X2NvZGUgPSBjb3VudHJ5ID8gY291bnRyeS5jb2RlIDogZGF0YS5jb3VudHJ5O1xuICAgICAgICAgICAgICAgIGRhdGEuc3RhdGVfb3JfcHJvdmluY2VfY29kZSA9IHN0YXRlID8gc3RhdGUuY29kZSA6IGRhdGEuc3RhdGU7XG5cbiAgICAgICAgICAgICAgICAvLyBEZWZhdWx0IEluc3RydW1lbnRcbiAgICAgICAgICAgICAgICBkYXRhLmRlZmF1bHRfaW5zdHJ1bWVudCA9ICEhZGF0YS5kZWZhdWx0X2luc3RydW1lbnQ7XG5cbiAgICAgICAgICAgICAgICAvLyBTdG9yZSBjcmVkaXQgY2FyZFxuICAgICAgICAgICAgICAgIHN0b3JlSW5zdHJ1bWVudCh0aGlzLmNvbnRleHQsIGRhdGEsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmNvbnRleHQucGF5bWVudE1ldGhvZHNVcmw7XG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuY29udGV4dC5nZW5lcmljX2Vycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRWRpdEFjY291bnRWYWxpZGF0aW9uKCRlZGl0QWNjb3VudEZvcm0pIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGVsID0gdmFsaWRhdGlvbigkZWRpdEFjY291bnRGb3JtKTtcbiAgICAgICAgY29uc3QgZm9ybUVkaXRTZWxlY3RvciA9ICdmb3JtW2RhdGEtZWRpdC1hY2NvdW50LWZvcm1dJztcbiAgICAgICAgY29uc3QgZWRpdFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICcke2Zvcm1FZGl0U2VsZWN0b3J9IGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZW1haWxTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJFbWFpbEFkZHJlc3NcIl1gO1xuICAgICAgICBjb25zdCAkZW1haWxFbGVtZW50ID0gJChlbWFpbFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJQYXNzd29yZFwiXWA7XG4gICAgICAgIGNvbnN0ICRwYXNzd29yZEVsZW1lbnQgPSAkKHBhc3N3b3JkU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBwYXNzd29yZDJTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJDb25maXJtUGFzc3dvcmRcIl1gO1xuICAgICAgICBjb25zdCAkcGFzc3dvcmQyRWxlbWVudCA9ICQocGFzc3dvcmQyU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBjdXJyZW50UGFzc3dvcmRTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJDdXJyZW50UGFzc3dvcmRcIl1gO1xuICAgICAgICBjb25zdCAkY3VycmVudFBhc3N3b3JkID0gJChjdXJyZW50UGFzc3dvcmRTZWxlY3Rvcik7XG5cbiAgICAgICAgLy8gVGhpcyBvbmx5IGhhbmRsZXMgdGhlIGN1c3RvbSBmaWVsZHMsIHN0YW5kYXJkIGZpZWxkcyBhcmUgYWRkZWQgYmVsb3dcbiAgICAgICAgZWRpdFZhbGlkYXRvci5hZGQodmFsaWRhdGlvbk1vZGVsKTtcblxuICAgICAgICBpZiAoJGVtYWlsRWxlbWVudCkge1xuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5yZW1vdmUoZW1haWxTZWxlY3Rvcik7XG4gICAgICAgICAgICBWYWxpZGF0b3JzLnNldEVtYWlsVmFsaWRhdGlvbihlZGl0VmFsaWRhdG9yLCBlbWFpbFNlbGVjdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkcGFzc3dvcmRFbGVtZW50ICYmICRwYXNzd29yZDJFbGVtZW50KSB7XG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLnJlbW92ZShwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucmVtb3ZlKHBhc3N3b3JkMlNlbGVjdG9yKTtcbiAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0UGFzc3dvcmRWYWxpZGF0aW9uKFxuICAgICAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRjdXJyZW50UGFzc3dvcmQpIHtcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogY3VycmVudFBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT09ICcnICYmICRwYXNzd29yZEVsZW1lbnQudmFsKCkgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5jdXJyZW50UGFzc3dvcmQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVkaXRWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gaW5wdXRbbmFtZT0nYWNjb3VudF9maXJzdG5hbWUnXWAsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmZpcnN0TmFtZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGAke2Zvcm1FZGl0U2VsZWN0b3J9IGlucHV0W25hbWU9J2FjY291bnRfbGFzdG5hbWUnXWAsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0Lmxhc3ROYW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgJGVkaXRBY2NvdW50Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKGVkaXRWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWdpc3RlckluYm94VmFsaWRhdGlvbigkaW5ib3hGb3JtKSB7XG4gICAgICAgIGNvbnN0IGluYm94VmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaW5ib3hWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXSBzZWxlY3RbbmFtZT1cIm1lc3NhZ2Vfb3JkZXJfaWRcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBOdW1iZXIodmFsKSAhPT0gMDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZW50ZXJPcmRlck51bSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gaW5wdXRbbmFtZT1cIm1lc3NhZ2Vfc3ViamVjdFwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyU3ViamVjdCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gdGV4dGFyZWFbbmFtZT1cIm1lc3NhZ2VfY29udGVudFwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyTWVzc2FnZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgICRpbmJveEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGluYm94VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAoaW5ib3hWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCIvKipcbiAqIFZhbGlkYXRlIHRoYXQgdGhlIGdpdmVuIGRhdGUgZm9yIHRoZSBkYXkvbW9udGgveWVhciBzZWxlY3QgaW5wdXRzIGlzIHdpdGhpbiBwb3RlbnRpYWwgcmFuZ2VcbiAqIEBwYXJhbSAkZm9ybUZpZWxkXG4gKiBAcGFyYW0gdmFsaWRhdGlvblxuICogQHJldHVybnMge3tzZWxlY3Rvcjogc3RyaW5nLCB0cmlnZ2VyZWRCeTogc3RyaW5nLCB2YWxpZGF0ZTogRnVuY3Rpb24sIGVycm9yTWVzc2FnZTogc3RyaW5nfX1cbiAqL1xuZnVuY3Rpb24gYnVpbGREYXRlVmFsaWRhdGlvbigkZm9ybUZpZWxkLCB2YWxpZGF0aW9uKSB7XG4gICAgLy8gTm8gZGF0ZSByYW5nZSByZXN0cmljdGlvbiwgc2tpcFxuICAgIGlmICh2YWxpZGF0aW9uLm1pbl9kYXRlICYmIHZhbGlkYXRpb24ubWF4X2RhdGUpIHtcbiAgICAgICAgY29uc3QgaW52YWxpZE1lc3NhZ2UgPSBgWW91ciBjaG9zZW4gZGF0ZSBtdXN0IGZhbGwgYmV0d2VlbiAke3ZhbGlkYXRpb24ubWluX2RhdGV9IGFuZCAke3ZhbGlkYXRpb24ubWF4X2RhdGV9LmA7XG4gICAgICAgIGNvbnN0IGZvcm1FbGVtZW50SWQgPSAkZm9ybUZpZWxkLmF0dHIoJ2lkJyk7XG4gICAgICAgIGNvbnN0IG1pblNwbGl0ID0gdmFsaWRhdGlvbi5taW5fZGF0ZS5zcGxpdCgnLScpO1xuICAgICAgICBjb25zdCBtYXhTcGxpdCA9IHZhbGlkYXRpb24ubWF4X2RhdGUuc3BsaXQoJy0nKTtcbiAgICAgICAgY29uc3QgbWluRGF0ZSA9IG5ldyBEYXRlKG1pblNwbGl0WzBdLCBtaW5TcGxpdFsxXSAtIDEsIG1pblNwbGl0WzJdKTtcbiAgICAgICAgY29uc3QgbWF4RGF0ZSA9IG5ldyBEYXRlKG1heFNwbGl0WzBdLCBtYXhTcGxpdFsxXSAtIDEsIG1heFNwbGl0WzJdKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2VsZWN0b3I6IGAjJHtmb3JtRWxlbWVudElkfSBzZWxlY3RbZGF0YS1sYWJlbD1cInllYXJcIl1gLFxuICAgICAgICAgICAgdHJpZ2dlcmVkQnk6IGAjJHtmb3JtRWxlbWVudElkfSBzZWxlY3Q6bm90KFtkYXRhLWxhYmVsPVwieWVhclwiXSlgLFxuICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF5ID0gTnVtYmVyKCRmb3JtRmllbGQuZmluZCgnc2VsZWN0W2RhdGEtbGFiZWw9XCJkYXlcIl0nKS52YWwoKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9udGggPSBOdW1iZXIoJGZvcm1GaWVsZC5maW5kKCdzZWxlY3RbZGF0YS1sYWJlbD1cIm1vbnRoXCJdJykudmFsKCkpIC0gMTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ZWFyID0gTnVtYmVyKHZhbCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hvc2VuRGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xuXG4gICAgICAgICAgICAgICAgY2IoY2hvc2VuRGF0ZSA+PSBtaW5EYXRlICYmIGNob3NlbkRhdGUgPD0gbWF4RGF0ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBpbnZhbGlkTWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbi8qKlxuICogV2UgdmFsaWRhdGUgY2hlY2tib3hlcyBzZXBhcmF0ZWx5IGZyb20gc2luZ2xlIGlucHV0IGZpZWxkcywgYXMgdGhleSBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIGNoZWNrZWQgb3B0aW9uXG4gKiBmcm9tIG1hbnkgZGlmZmVyZW50IGlucHV0c1xuICogQHBhcmFtICRmb3JtRmllbGRcbiAqIEBwYXJhbSB2YWxpZGF0aW9uXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkUmVxdWlyZWRDaGVja2JveFZhbGlkYXRpb24oJGZvcm1GaWVsZCwgdmFsaWRhdGlvbikge1xuICAgIGNvbnN0IGZvcm1GaWVsZElkID0gJGZvcm1GaWVsZC5hdHRyKCdpZCcpO1xuICAgIGNvbnN0IHByaW1hcnlTZWxlY3RvciA9IGAjJHtmb3JtRmllbGRJZH0gaW5wdXQ6Zmlyc3Qtb2YtdHlwZWA7XG4gICAgY29uc3Qgc2Vjb25kYXJ5U2VsZWN0b3IgPSBgIyR7Zm9ybUZpZWxkSWR9IGlucHV0YDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdG9yOiBwcmltYXJ5U2VsZWN0b3IsXG4gICAgICAgIHRyaWdnZXJlZEJ5OiBzZWNvbmRhcnlTZWxlY3RvcixcbiAgICAgICAgdmFsaWRhdGU6IChjYikgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAkKHNlY29uZGFyeVNlbGVjdG9yKS5lYWNoKChpbmRleCwgY2hlY2tib3gpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBgVGhlICcke3ZhbGlkYXRpb24ubGFiZWx9JyBmaWVsZCBjYW5ub3QgYmUgYmxhbmsuYCxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBidWlsZFJlcXVpcmVkVmFsaWRhdGlvbih2YWxpZGF0aW9uLCBzZWxlY3Rvcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdG9yLFxuICAgICAgICB2YWxpZGF0ZShjYiwgdmFsKSB7XG4gICAgICAgICAgICBjYih2YWwubGVuZ3RoID4gMCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yTWVzc2FnZTogYFRoZSAnJHt2YWxpZGF0aW9uLmxhYmVsfScgZmllbGQgY2Fubm90IGJlIGJsYW5rLmAsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGROdW1iZXJSYW5nZVZhbGlkYXRpb24odmFsaWRhdGlvbiwgZm9ybUZpZWxkU2VsZWN0b3IpIHtcbiAgICBjb25zdCBpbnZhbGlkTWVzc2FnZSA9IGBUaGUgdmFsdWUgZm9yICR7dmFsaWRhdGlvbi5sYWJlbH0gbXVzdCBiZSBiZXR3ZWVuICR7dmFsaWRhdGlvbi5taW59IGFuZCAke3ZhbGlkYXRpb24ubWF4fS5gO1xuICAgIGNvbnN0IG1pbiA9IE51bWJlcih2YWxpZGF0aW9uLm1pbik7XG4gICAgY29uc3QgbWF4ID0gTnVtYmVyKHZhbGlkYXRpb24ubWF4KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdG9yOiBgJHtmb3JtRmllbGRTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cIiR7dmFsaWRhdGlvbi5uYW1lfVwiXWAsXG4gICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyVmFsID0gTnVtYmVyKHZhbCk7XG5cbiAgICAgICAgICAgIGNiKG51bWJlclZhbCA+PSBtaW4gJiYgbnVtYmVyVmFsIDw9IG1heCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yTWVzc2FnZTogaW52YWxpZE1lc3NhZ2UsXG4gICAgfTtcbn1cblxuXG5mdW5jdGlvbiBidWlsZFZhbGlkYXRpb24oJHZhbGlkYXRlYWJsZUVsZW1lbnQpIHtcbiAgICBjb25zdCB2YWxpZGF0aW9uID0gJHZhbGlkYXRlYWJsZUVsZW1lbnQuZGF0YSgndmFsaWRhdGlvbicpO1xuICAgIGNvbnN0IGZpZWxkVmFsaWRhdGlvbnMgPSBbXTtcbiAgICBjb25zdCBmb3JtRmllbGRTZWxlY3RvciA9IGAjJHskdmFsaWRhdGVhYmxlRWxlbWVudC5hdHRyKCdpZCcpfWA7XG5cbiAgICBpZiAodmFsaWRhdGlvbi50eXBlID09PSAnZGF0ZWNob29zZXInKSB7XG4gICAgICAgIGNvbnN0IGRhdGVWYWxpZGF0aW9uID0gYnVpbGREYXRlVmFsaWRhdGlvbigkdmFsaWRhdGVhYmxlRWxlbWVudCwgdmFsaWRhdGlvbik7XG5cbiAgICAgICAgaWYgKGRhdGVWYWxpZGF0aW9uKSB7XG4gICAgICAgICAgICBmaWVsZFZhbGlkYXRpb25zLnB1c2goZGF0ZVZhbGlkYXRpb24pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh2YWxpZGF0aW9uLnJlcXVpcmVkICYmICh2YWxpZGF0aW9uLnR5cGUgPT09ICdjaGVja2JveHNlbGVjdCcgfHwgdmFsaWRhdGlvbi50eXBlID09PSAncmFkaW9zZWxlY3QnKSkge1xuICAgICAgICBmaWVsZFZhbGlkYXRpb25zLnB1c2goYnVpbGRSZXF1aXJlZENoZWNrYm94VmFsaWRhdGlvbigkdmFsaWRhdGVhYmxlRWxlbWVudCwgdmFsaWRhdGlvbikpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICR2YWxpZGF0ZWFibGVFbGVtZW50LmZpbmQoJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dEVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuICAgICAgICAgICAgY29uc3QgdGFnTmFtZSA9ICRpbnB1dEVsZW1lbnQuZ2V0KDApLnRhZ05hbWU7XG4gICAgICAgICAgICBjb25zdCBpbnB1dE5hbWUgPSAkaW5wdXRFbGVtZW50LmF0dHIoJ25hbWUnKTtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRTZWxlY3RvciA9IGAke2Zvcm1GaWVsZFNlbGVjdG9yfSAke3RhZ05hbWV9W25hbWU9XCIke2lucHV0TmFtZX1cIl1gO1xuXG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbi50eXBlID09PSAnbnVtYmVyb25seScpIHtcbiAgICAgICAgICAgICAgICBmaWVsZFZhbGlkYXRpb25zLnB1c2goYnVpbGROdW1iZXJSYW5nZVZhbGlkYXRpb24odmFsaWRhdGlvbiwgZm9ybUZpZWxkU2VsZWN0b3IpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uLnJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGJ1aWxkUmVxdWlyZWRWYWxpZGF0aW9uKHZhbGlkYXRpb24sIGVsZW1lbnRTZWxlY3RvcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmllbGRWYWxpZGF0aW9ucztcbn1cblxuLyoqXG4gKiBCdWlsZHMgdGhlIHZhbGlkYXRpb24gbW9kZWwgZm9yIGR5bmFtaWMgZm9ybXNcbiAqIEBwYXJhbSAkZm9ybVxuICogQHJldHVybnMge0FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoJGZvcm0pIHtcbiAgICBsZXQgdmFsaWRhdGlvbnNUb1BlcmZvcm0gPSBbXTtcblxuICAgICRmb3JtLmZpbmQoJ1tkYXRhLXZhbGlkYXRpb25dJykuZWFjaCgoaW5kZXgsIGlucHV0KSA9PiB7XG4gICAgICAgIHZhbGlkYXRpb25zVG9QZXJmb3JtID0gdmFsaWRhdGlvbnNUb1BlcmZvcm0uY29uY2F0KGJ1aWxkVmFsaWRhdGlvbigkKGlucHV0KSkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhbGlkYXRpb25zVG9QZXJmb3JtO1xufVxuIiwiaW1wb3J0IGNyZWRpdGNhcmRzIGZyb20gJ2NyZWRpdGNhcmRzJztcblxuLyoqXG4gKiBPbWl0IG51bGwgb3IgZW1wdHkgc3RyaW5nIHByb3BlcnRpZXMgb2Ygb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5jb25zdCBvbWl0TnVsbFN0cmluZyA9IG9iaiA9PiB7XG4gICAgY29uc3QgcmVmT2JqID0gb2JqO1xuXG4gICAgJC5lYWNoKHJlZk9iaiwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgZGVsZXRlIHJlZk9ialtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVmT2JqO1xufTtcblxuLyoqXG4gKiBHZXQgY3JlZGl0IGNhcmQgdHlwZSBmcm9tIGNyZWRpdCBjYXJkIG51bWJlclxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKi9cbmV4cG9ydCBjb25zdCBjcmVkaXRDYXJkVHlwZSA9IHZhbHVlID0+IGNyZWRpdGNhcmRzLmNhcmQudHlwZShjcmVkaXRjYXJkcy5jYXJkLnBhcnNlKHZhbHVlKSwgdHJ1ZSk7XG5cbi8qKlxuICogV3JhcHBlciBmb3IgYWpheCByZXF1ZXN0IHRvIHN0b3JlIGEgbmV3IGluc3RydW1lbnQgaW4gYmlncGF5XG4gKiBAcGFyYW0ge29iamVjdH0gUmVwcmVzZW50aW5nIHRoZSBkYXRhIG5lZWRlZCBmb3IgdGhlIGhlYWRlclxuICogQHBhcmFtIHtvYmplY3R9IFJlcHJlc2VudGluZyB0aGUgZGF0YSBuZWVkZWQgZm9yIHRoZSBib2R5XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBkb25lIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgb24gYSBzdWNjZXNzZnVsIHJlc3BvbnNlXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmYWlsIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgb24gYSB1bnN1Y2Nlc3NmdWwgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNvbnN0IHN0b3JlSW5zdHJ1bWVudCA9ICh7XG4gICAgLy8gSG9zdG5hbWUsIElkcyAmIFRva2VuXG4gICAgcGF5bWVudHNVcmwsXG4gICAgc2hvcHBlcklkLFxuICAgIHN0b3JlSGFzaCxcbiAgICB2YXVsdFRva2VuLFxufSwge1xuICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgLy8gUHJvdmlkZXIgTmFtZVxuICAgIHByb3ZpZGVyX2lkLFxuXG4gICAgLy8gSW5zdHJ1bWVudCBEZXRhaWxzXG4gICAgY3JlZGl0X2NhcmRfbnVtYmVyLFxuICAgIGV4cGlyYXRpb24sXG4gICAgbmFtZV9vbl9jYXJkLFxuICAgIGN2dixcbiAgICBkZWZhdWx0X2luc3RydW1lbnQsXG5cbiAgICAvLyBCaWxsaW5nIEFkZHJlc3NcbiAgICBhZGRyZXNzMSxcbiAgICBhZGRyZXNzMixcbiAgICBjaXR5LFxuICAgIHBvc3RhbF9jb2RlLFxuICAgIHN0YXRlX29yX3Byb3ZpbmNlX2NvZGUsXG4gICAgY291bnRyeV9jb2RlLFxuICAgIGNvbXBhbnksXG4gICAgZmlyc3RfbmFtZSxcbiAgICBsYXN0X25hbWUsXG4gICAgZW1haWwsXG4gICAgcGhvbmUsXG4gICAgLyogZXNsaW50LWVuYWJsZSAqL1xufSwgZG9uZSwgZmFpbCkgPT4ge1xuICAgIGNvbnN0IGV4cGlyeSA9IGV4cGlyYXRpb24uc3BsaXQoJy8nKTtcblxuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogYCR7cGF5bWVudHNVcmx9L3N0b3Jlcy8ke3N0b3JlSGFzaH0vY3VzdG9tZXJzLyR7c2hvcHBlcklkfS9zdG9yZWRfaW5zdHJ1bWVudHNgLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiB2YXVsdFRva2VuLFxuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vdm5kLmJjLnYxK2pzb24nLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi92bmQuYmMudjEranNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGluc3RydW1lbnQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2FyZCcsXG4gICAgICAgICAgICAgICAgY2FyZGhvbGRlcl9uYW1lOiBuYW1lX29uX2NhcmQsXG4gICAgICAgICAgICAgICAgbnVtYmVyOiBjcmVkaXRjYXJkcy5jYXJkLnBhcnNlKGNyZWRpdF9jYXJkX251bWJlciksXG4gICAgICAgICAgICAgICAgZXhwaXJ5X21vbnRoOiBjcmVkaXRjYXJkcy5leHBpcmF0aW9uLm1vbnRoLnBhcnNlKGV4cGlyeVswXSksXG4gICAgICAgICAgICAgICAgZXhwaXJ5X3llYXI6IGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ueWVhci5wYXJzZShleHBpcnlbMV0sIHRydWUpLFxuICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvbl92YWx1ZTogY3Z2LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbGxpbmdfYWRkcmVzczogb21pdE51bGxTdHJpbmcoe1xuICAgICAgICAgICAgICAgIGFkZHJlc3MxLFxuICAgICAgICAgICAgICAgIGFkZHJlc3MyLFxuICAgICAgICAgICAgICAgIGNpdHksXG4gICAgICAgICAgICAgICAgcG9zdGFsX2NvZGUsXG4gICAgICAgICAgICAgICAgc3RhdGVfb3JfcHJvdmluY2VfY29kZSxcbiAgICAgICAgICAgICAgICBjb3VudHJ5X2NvZGUsXG4gICAgICAgICAgICAgICAgY29tcGFueSxcbiAgICAgICAgICAgICAgICBmaXJzdF9uYW1lLFxuICAgICAgICAgICAgICAgIGxhc3RfbmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICBwaG9uZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcHJvdmlkZXJfaWQsXG4gICAgICAgICAgICBkZWZhdWx0X2luc3RydW1lbnQsXG4gICAgICAgIH0pLFxuICAgIH0pXG4gICAgICAgIC5kb25lKGRvbmUpXG4gICAgICAgIC5mYWlsKGZhaWwpO1xufTtcblxuZXhwb3J0IGNvbnN0IEZvcm1hdHRlcnMgPSB7XG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIGZvcm1hdCBmb3IgY3JlZGl0IGNhcmQgbnVtYmVyXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgc2V0Q3JlZGl0Q2FyZE51bWJlckZvcm1hdDogZmllbGQgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgICQoZmllbGQpLm9uKCdrZXl1cCcsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVmVGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgIHJlZlRhcmdldC52YWx1ZSA9IGNyZWRpdGNhcmRzLmNhcmQuZm9ybWF0KGNyZWRpdGNhcmRzLmNhcmQucGFyc2UodGFyZ2V0LnZhbHVlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgZm9ybWF0IGZvciBleHBpcmF0aW9uIGRhdGVcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBzZXRFeHBpcmF0aW9uRm9ybWF0OiBmaWVsZCA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgJChmaWVsZCkub24oJ2tleXVwJywgKHsgdGFyZ2V0LCB3aGljaCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVmVGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgIGlmICh3aGljaCA9PT0gOCAmJiAvLiooXFwvKSQvLnRlc3QodGFyZ2V0LnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZWZUYXJnZXQudmFsdWUgPSB0YXJnZXQudmFsdWUuc2xpY2UoMCwgLTEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmVGFyZ2V0LnZhbHVlID0gdGFyZ2V0LnZhbHVlLnNsaWNlKDAsIDUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAod2hpY2ggIT09IDgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmVGFyZ2V0LnZhbHVlID0gdGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXihbMS05XVxcL3xbMi05XSkkL2csICcwJDEvJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKDBbMS05XXwxWzAtMl0pJC9nLCAnJDEvJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKFswLTFdKShbMy05XSkkL2csICcwJDEvJDInKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oMFsxLTldfDFbMC0yXSkoWzAtOV17Mn0pJC9nLCAnJDEvJDInKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oWzBdKylcXC98WzBdKyQvZywgJzAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1teXFxkXFwvXXxeW1xcL10qJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXC8vZywgJy8nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG59O1xuXG5leHBvcnQgY29uc3QgVmFsaWRhdG9ycyA9IHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgdmFsaWRhdGlvbiBmb3IgY3JlZGl0IGNhcmQgbnVtYmVyXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqIEBwYXJhbSBlcnJvck1lc3NhZ2VcbiAgICAgKi9cbiAgICBzZXRDcmVkaXRDYXJkTnVtYmVyVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSkgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aCAmJiBjcmVkaXRjYXJkcy5jYXJkLmlzVmFsaWQoY3JlZGl0Y2FyZHMuY2FyZC5wYXJzZSh2YWwpKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIHZhbGlkYXRpb24gZm9yIGV4cGlyYXRpb24gZGF0ZVxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlXG4gICAgICovXG4gICAgc2V0RXhwaXJhdGlvblZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkLCBlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cGlyeSA9IHZhbC5zcGxpdCgnLycpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdmFsLmxlbmd0aCAmJiAvXigwWzEtOV18MVswLTJdKVxcLyhbMC05XXsyfSkkLy50ZXN0KHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCAmJiAhY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi5pc1Bhc3QoY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi5tb250aC5wYXJzZShleHBpcnlbMF0pLCBjcmVkaXRjYXJkcy5leHBpcmF0aW9uLnllYXIucGFyc2UoZXhwaXJ5WzFdLCB0cnVlKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBuYW1lIG9uIGNhcmRcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxuICAgICAqL1xuICAgIHNldE5hbWVPbkNhcmRWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JNZXNzYWdlKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSAhIXZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBjdnZcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxuICAgICAqIEBwYXJhbSB7YW55fSBjYXJkVHlwZSBUaGUgY3JlZGl0IGNhcmQgbnVtYmVyIHR5cGVcbiAgICAgKi9cbiAgICBzZXRDdnZWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JNZXNzYWdlLCBjYXJkVHlwZSkgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IHR5cGVvZiBjYXJkVHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IGNhcmRUeXBlKCkgOiBjYXJkVHlwZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aCAmJiBjcmVkaXRjYXJkcy5jdmMuaXNWYWxpZCh2YWwsIHR5cGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG59O1xuIiwiaW1wb3J0IHN3ZWV0QWxlcnQgZnJvbSAnc3dlZXRhbGVydDInO1xuXG4vLyBTZXQgZGVmYXVsdHMgZm9yIHN3ZWV0YWxlcnQyIHBvcHVwIGJveGVzXG5zd2VldEFsZXJ0LnNldERlZmF1bHRzKHtcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgY29uZmlybUJ1dHRvbkNsYXNzOiAnYnV0dG9uJyxcbiAgICBjYW5jZWxCdXR0b25DbGFzczogJ2J1dHRvbicsXG59KTtcblxuLy8gUmUtZXhwb3J0XG5leHBvcnQgZGVmYXVsdCBzd2VldEFsZXJ0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==