(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./assets/js/theme/auth.js":
/*!*********************************!*\
  !*** ./assets/js/theme/auth.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Auth = function (_PageManager) {
    _inherits(Auth, _PageManager);

    function Auth(context) {
        _classCallCheck(this, Auth);

        var _this = _possibleConstructorReturn(this, _PageManager.call(this, context));

        _this.formCreateSelector = 'form[data-create-account-form]';
        return _this;
    }

    Auth.prototype.registerLoginValidation = function registerLoginValidation($loginForm) {
        var _this2 = this;

        var loginModel = _common_models_forms__WEBPACK_IMPORTED_MODULE_4__["default"];

        this.loginValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
            submit: '.login-form input[type="submit"]'
        });

        this.loginValidator.add([{
            selector: '.login-form input[name="login_email"]',
            validate: function validate(cb, val) {
                var result = loginModel.email(val);

                cb(result);
            },
            errorMessage: this.context.useValidEmail
        }, {
            selector: '.login-form input[name="login_pass"]',
            validate: function validate(cb, val) {
                var result = loginModel.password(val);

                cb(result);
            },
            errorMessage: this.context.enterPass
        }]);

        $loginForm.on('submit', function (event) {
            _this2.loginValidator.performCheck();

            if (_this2.loginValidator.areAll('valid')) {
                return;
            }

            event.preventDefault();
        });
    };

    Auth.prototype.registerForgotPasswordValidation = function registerForgotPasswordValidation($forgotPasswordForm) {
        var _this3 = this;

        this.forgotPasswordValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
            submit: '.forgot-password-form input[type="submit"]'
        });

        this.forgotPasswordValidator.add([{
            selector: '.forgot-password-form input[name="email"]',
            validate: function validate(cb, val) {
                var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_4__["default"].email(val);

                cb(result);
            },
            errorMessage: this.context.useValidEmail
        }]);

        $forgotPasswordForm.on('submit', function (event) {
            _this3.forgotPasswordValidator.performCheck();

            if (_this3.forgotPasswordValidator.areAll('valid')) {
                return;
            }

            event.preventDefault();
        });
    };

    Auth.prototype.registerNewPasswordValidation = function registerNewPasswordValidation() {
        var newPasswordForm = '.new-password-form';
        var newPasswordValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
            submit: $(newPasswordForm + ' input[type="submit"]')
        });
        var passwordSelector = $(newPasswordForm + ' input[name="password"]');
        var password2Selector = $(newPasswordForm + ' input[name="password_confirm"]');

        _common_form_utils__WEBPACK_IMPORTED_MODULE_5__["Validators"].setPasswordValidation(newPasswordValidator, passwordSelector, password2Selector, this.passwordRequirements);
    };

    Auth.prototype.registerCreateAccountValidator = function registerCreateAccountValidator($createAccountForm) {
        var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_3__["default"])($createAccountForm);
        var createAccountValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
            submit: this.formCreateSelector + ' input[type=\'submit\']'
        });
        var $stateElement = $('[data-field-type="State"]');
        var emailSelector = this.formCreateSelector + ' [data-field-type=\'EmailAddress\']';
        var $emailElement = $(emailSelector);
        var passwordSelector = this.formCreateSelector + ' [data-field-type=\'Password\']';
        var $passwordElement = $(passwordSelector);
        var password2Selector = this.formCreateSelector + ' [data-field-type=\'ConfirmPassword\']';
        var $password2Element = $(password2Selector);

        createAccountValidator.add(validationModel);

        if ($stateElement) {
            var $last = void 0;

            // Requests the states for a country with AJAX
            Object(_common_state_country__WEBPACK_IMPORTED_MODULE_1__["default"])($stateElement, this.context, function (err, field) {
                if (err) {
                    throw new Error(err);
                }

                var $field = $(field);

                if (createAccountValidator.getStatus($stateElement) !== 'undefined') {
                    createAccountValidator.remove($stateElement);
                }

                if ($last) {
                    createAccountValidator.remove($last);
                }

                if ($field.is('select')) {
                    $last = field;
                    _common_form_utils__WEBPACK_IMPORTED_MODULE_5__["Validators"].setStateCountryValidation(createAccountValidator, field);
                } else {
                    _common_form_utils__WEBPACK_IMPORTED_MODULE_5__["Validators"].cleanUpStateValidation(field);
                }
            });
        }

        if ($emailElement) {
            createAccountValidator.remove(emailSelector);
            _common_form_utils__WEBPACK_IMPORTED_MODULE_5__["Validators"].setEmailValidation(createAccountValidator, emailSelector);
        }

        if ($passwordElement && $password2Element) {
            createAccountValidator.remove(passwordSelector);
            createAccountValidator.remove(password2Selector);
            _common_form_utils__WEBPACK_IMPORTED_MODULE_5__["Validators"].setPasswordValidation(createAccountValidator, passwordSelector, password2Selector, this.passwordRequirements);
        }

        $createAccountForm.on('submit', function (event) {
            createAccountValidator.performCheck();

            if (createAccountValidator.areAll('valid')) {
                return;
            }

            event.preventDefault();
        });
    };

    /**
     * Request is made in this function to the remote endpoint and pulls back the states for country.
     */


    Auth.prototype.onReady = function onReady() {
        var $createAccountForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_5__["classifyForm"])(this.formCreateSelector);
        var $loginForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_5__["classifyForm"])('.login-form');
        var $forgotPasswordForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_5__["classifyForm"])('.forgot-password-form');
        var $newPasswordForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_5__["classifyForm"])('.new-password-form'); // reset password

        // Injected via auth.html
        this.passwordRequirements = this.context.passwordRequirements;

        if ($loginForm.length) {
            this.registerLoginValidation($loginForm);
        }

        if ($newPasswordForm.length) {
            this.registerNewPasswordValidation();
        }

        if ($forgotPasswordForm.length) {
            this.registerForgotPasswordValidation($forgotPasswordForm);
        }

        if ($createAccountForm.length) {
            this.registerCreateAccountValidator($createAccountForm);
        }
    };

    return Auth;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Auth);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/each.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/each.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/transform.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/transform.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/**
 * An alternative to `_.reduce`; this method transforms `object` to a new
 * `accumulator` object which is the result of running each of its own
 * enumerable string keyed properties thru `iteratee`, with each invocation
 * potentially mutating the `accumulator` object. If `accumulator` is not
 * provided, a new object with the same `[[Prototype]]` will be used. The
 * iteratee is invoked with four arguments: (accumulator, value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 1.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The custom accumulator value.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * _.transform([2, 3, 4], function(result, n) {
 *   result.push(n *= n);
 *   return n % 2 == 0;
 * }, []);
 * // => [4, 9]
 *
 * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] }
 */
function transform(object, iteratee, accumulator) {
  var isArr = isArray(object),
      isArrLike = isArr || isBuffer(object) || isTypedArray(object);

  iteratee = baseIteratee(iteratee, 4);
  if (accumulator == null) {
    var Ctor = object && object.constructor;
    if (isArrLike) {
      accumulator = isArr ? new Ctor : [];
    }
    else if (isObject(object)) {
      accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
    }
    else {
      accumulator = {};
    }
  }
  (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
    return iteratee(accumulator, value, index, object);
  });
  return accumulator;
}

module.exports = transform;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VGb3JPd24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUl0ZXJhdGVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUJhc2VGb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdHJhbnNmb3JtLmpzIl0sIm5hbWVzIjpbIkF1dGgiLCJjb250ZXh0IiwiZm9ybUNyZWF0ZVNlbGVjdG9yIiwicmVnaXN0ZXJMb2dpblZhbGlkYXRpb24iLCIkbG9naW5Gb3JtIiwibG9naW5Nb2RlbCIsImZvcm1zIiwibG9naW5WYWxpZGF0b3IiLCJub2QiLCJzdWJtaXQiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJ2YWwiLCJyZXN1bHQiLCJlbWFpbCIsImVycm9yTWVzc2FnZSIsInVzZVZhbGlkRW1haWwiLCJwYXNzd29yZCIsImVudGVyUGFzcyIsIm9uIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlZ2lzdGVyRm9yZ290UGFzc3dvcmRWYWxpZGF0aW9uIiwiJGZvcmdvdFBhc3N3b3JkRm9ybSIsImZvcmdvdFBhc3N3b3JkVmFsaWRhdG9yIiwicmVnaXN0ZXJOZXdQYXNzd29yZFZhbGlkYXRpb24iLCJuZXdQYXNzd29yZEZvcm0iLCJuZXdQYXNzd29yZFZhbGlkYXRvciIsIiQiLCJwYXNzd29yZFNlbGVjdG9yIiwicGFzc3dvcmQyU2VsZWN0b3IiLCJWYWxpZGF0b3JzIiwic2V0UGFzc3dvcmRWYWxpZGF0aW9uIiwicGFzc3dvcmRSZXF1aXJlbWVudHMiLCJyZWdpc3RlckNyZWF0ZUFjY291bnRWYWxpZGF0b3IiLCIkY3JlYXRlQWNjb3VudEZvcm0iLCJ2YWxpZGF0aW9uTW9kZWwiLCJ2YWxpZGF0aW9uIiwiY3JlYXRlQWNjb3VudFZhbGlkYXRvciIsIiRzdGF0ZUVsZW1lbnQiLCJlbWFpbFNlbGVjdG9yIiwiJGVtYWlsRWxlbWVudCIsIiRwYXNzd29yZEVsZW1lbnQiLCIkcGFzc3dvcmQyRWxlbWVudCIsIiRsYXN0Iiwic3RhdGVDb3VudHJ5IiwiZXJyIiwiZmllbGQiLCJFcnJvciIsIiRmaWVsZCIsImdldFN0YXR1cyIsInJlbW92ZSIsImlzIiwic2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbiIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCJzZXRFbWFpbFZhbGlkYXRpb24iLCJvblJlYWR5IiwiY2xhc3NpZnlGb3JtIiwiJG5ld1Bhc3N3b3JkRm9ybSIsImxlbmd0aCIsIlBhZ2VNYW5hZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLEk7OztBQUNqQixrQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUFBLHFEQUNqQix3QkFBTUEsT0FBTixDQURpQjs7QUFFakIsY0FBS0Msa0JBQUwsR0FBMEIsZ0NBQTFCO0FBRmlCO0FBR3BCOzttQkFFREMsdUIsb0NBQXdCQyxVLEVBQVk7QUFBQTs7QUFDaEMsWUFBTUMsYUFBYUMsNERBQW5COztBQUVBLGFBQUtDLGNBQUwsR0FBc0JDLDJEQUFHQSxDQUFDO0FBQ3RCQyxvQkFBUTtBQURjLFNBQUosQ0FBdEI7O0FBSUEsYUFBS0YsY0FBTCxDQUFvQkcsR0FBcEIsQ0FBd0IsQ0FDcEI7QUFDSUMsc0JBQVUsdUNBRGQ7QUFFSUMsc0JBQVUsa0JBQUNDLEVBQUQsRUFBS0MsR0FBTCxFQUFhO0FBQ25CLG9CQUFNQyxTQUFTVixXQUFXVyxLQUFYLENBQWlCRixHQUFqQixDQUFmOztBQUVBRCxtQkFB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QUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQkFBZ0IseUJBQXlCO0FBQ3pDO0FBQ0EsSUFBSSxJQUFJO0FBQ1IsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay44LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBzdGF0ZUNvdW50cnkgZnJvbSAnLi9jb21tb24vc3RhdGUtY291bnRyeSc7XG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tICcuL2NvbW1vbi9mb3JtLXZhbGlkYXRpb24nO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4vY29tbW9uL21vZGVscy9mb3Jtcyc7XG5pbXBvcnQgeyBjbGFzc2lmeUZvcm0sIFZhbGlkYXRvcnMgfSBmcm9tICcuL2NvbW1vbi9mb3JtLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLmZvcm1DcmVhdGVTZWxlY3RvciA9ICdmb3JtW2RhdGEtY3JlYXRlLWFjY291bnQtZm9ybV0nO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyTG9naW5WYWxpZGF0aW9uKCRsb2dpbkZvcm0pIHtcbiAgICAgICAgY29uc3QgbG9naW5Nb2RlbCA9IGZvcm1zO1xuXG4gICAgICAgIHRoaXMubG9naW5WYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAnLmxvZ2luLWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubG9naW5WYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy5sb2dpbi1mb3JtIGlucHV0W25hbWU9XCJsb2dpbl9lbWFpbFwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGxvZ2luTW9kZWwuZW1haWwodmFsKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQudXNlVmFsaWRFbWFpbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcubG9naW4tZm9ybSBpbnB1dFtuYW1lPVwibG9naW5fcGFzc1wiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGxvZ2luTW9kZWwucGFzc3dvcmQodmFsKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZW50ZXJQYXNzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgJGxvZ2luRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2dpblZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMubG9naW5WYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWdpc3RlckZvcmdvdFBhc3N3b3JkVmFsaWRhdGlvbigkZm9yZ290UGFzc3dvcmRGb3JtKSB7XG4gICAgICAgIHRoaXMuZm9yZ290UGFzc3dvcmRWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAnLmZvcmdvdC1wYXNzd29yZC1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmZvcmdvdFBhc3N3b3JkVmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcuZm9yZ290LXBhc3N3b3JkLWZvcm0gaW5wdXRbbmFtZT1cImVtYWlsXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm9ybXMuZW1haWwodmFsKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQudXNlVmFsaWRFbWFpbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgICRmb3Jnb3RQYXNzd29yZEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9yZ290UGFzc3dvcmRWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZvcmdvdFBhc3N3b3JkVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJOZXdQYXNzd29yZFZhbGlkYXRpb24oKSB7XG4gICAgICAgIGNvbnN0IG5ld1Bhc3N3b3JkRm9ybSA9ICcubmV3LXBhc3N3b3JkLWZvcm0nO1xuICAgICAgICBjb25zdCBuZXdQYXNzd29yZFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICQoYCR7bmV3UGFzc3dvcmRGb3JtfSBpbnB1dFt0eXBlPVwic3VibWl0XCJdYCksXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBwYXNzd29yZFNlbGVjdG9yID0gJChgJHtuZXdQYXNzd29yZEZvcm19IGlucHV0W25hbWU9XCJwYXNzd29yZFwiXWApO1xuICAgICAgICBjb25zdCBwYXNzd29yZDJTZWxlY3RvciA9ICQoYCR7bmV3UGFzc3dvcmRGb3JtfSBpbnB1dFtuYW1lPVwicGFzc3dvcmRfY29uZmlybVwiXWApO1xuXG4gICAgICAgIFZhbGlkYXRvcnMuc2V0UGFzc3dvcmRWYWxpZGF0aW9uKFxuICAgICAgICAgICAgbmV3UGFzc3dvcmRWYWxpZGF0b3IsXG4gICAgICAgICAgICBwYXNzd29yZFNlbGVjdG9yLFxuICAgICAgICAgICAgcGFzc3dvcmQyU2VsZWN0b3IsXG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQ3JlYXRlQWNjb3VudFZhbGlkYXRvcigkY3JlYXRlQWNjb3VudEZvcm0pIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGVsID0gdmFsaWRhdGlvbigkY3JlYXRlQWNjb3VudEZvcm0pO1xuICAgICAgICBjb25zdCBjcmVhdGVBY2NvdW50VmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogYCR7dGhpcy5mb3JtQ3JlYXRlU2VsZWN0b3J9IGlucHV0W3R5cGU9J3N1Ym1pdCddYCxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0ICRzdGF0ZUVsZW1lbnQgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nKTtcbiAgICAgICAgY29uc3QgZW1haWxTZWxlY3RvciA9IGAke3RoaXMuZm9ybUNyZWF0ZVNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPSdFbWFpbEFkZHJlc3MnXWA7XG4gICAgICAgIGNvbnN0ICRlbWFpbEVsZW1lbnQgPSAkKGVtYWlsU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBwYXNzd29yZFNlbGVjdG9yID0gYCR7dGhpcy5mb3JtQ3JlYXRlU2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9J1Bhc3N3b3JkJ11gO1xuICAgICAgICBjb25zdCAkcGFzc3dvcmRFbGVtZW50ID0gJChwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmQyU2VsZWN0b3IgPSBgJHt0aGlzLmZvcm1DcmVhdGVTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT0nQ29uZmlybVBhc3N3b3JkJ11gO1xuICAgICAgICBjb25zdCAkcGFzc3dvcmQyRWxlbWVudCA9ICQocGFzc3dvcmQyU2VsZWN0b3IpO1xuXG4gICAgICAgIGNyZWF0ZUFjY291bnRWYWxpZGF0b3IuYWRkKHZhbGlkYXRpb25Nb2RlbCk7XG5cbiAgICAgICAgaWYgKCRzdGF0ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCAkbGFzdDtcblxuICAgICAgICAgICAgLy8gUmVxdWVzdHMgdGhlIHN0YXRlcyBmb3IgYSBjb3VudHJ5IHdpdGggQUpBWFxuICAgICAgICAgICAgc3RhdGVDb3VudHJ5KCRzdGF0ZUVsZW1lbnQsIHRoaXMuY29udGV4dCwgKGVyciwgZmllbGQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNyZWF0ZUFjY291bnRWYWxpZGF0b3IuZ2V0U3RhdHVzKCRzdGF0ZUVsZW1lbnQpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVBY2NvdW50VmFsaWRhdG9yLnJlbW92ZSgkc3RhdGVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJGxhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlQWNjb3VudFZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkZmllbGQuaXMoJ3NlbGVjdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbihjcmVhdGVBY2NvdW50VmFsaWRhdG9yLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5jbGVhblVwU3RhdGVWYWxpZGF0aW9uKGZpZWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkZW1haWxFbGVtZW50KSB7XG4gICAgICAgICAgICBjcmVhdGVBY2NvdW50VmFsaWRhdG9yLnJlbW92ZShlbWFpbFNlbGVjdG9yKTtcbiAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0RW1haWxWYWxpZGF0aW9uKGNyZWF0ZUFjY291bnRWYWxpZGF0b3IsIGVtYWlsU2VsZWN0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRwYXNzd29yZEVsZW1lbnQgJiYgJHBhc3N3b3JkMkVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNyZWF0ZUFjY291bnRWYWxpZGF0b3IucmVtb3ZlKHBhc3N3b3JkU2VsZWN0b3IpO1xuICAgICAgICAgICAgY3JlYXRlQWNjb3VudFZhbGlkYXRvci5yZW1vdmUocGFzc3dvcmQyU2VsZWN0b3IpO1xuICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRQYXNzd29yZFZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgY3JlYXRlQWNjb3VudFZhbGlkYXRvcixcbiAgICAgICAgICAgICAgICBwYXNzd29yZFNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkMlNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHRoaXMucGFzc3dvcmRSZXF1aXJlbWVudHMsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgJGNyZWF0ZUFjY291bnRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjcmVhdGVBY2NvdW50VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAoY3JlYXRlQWNjb3VudFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcXVlc3QgaXMgbWFkZSBpbiB0aGlzIGZ1bmN0aW9uIHRvIHRoZSByZW1vdGUgZW5kcG9pbnQgYW5kIHB1bGxzIGJhY2sgdGhlIHN0YXRlcyBmb3IgY291bnRyeS5cbiAgICAgKi9cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCAkY3JlYXRlQWNjb3VudEZvcm0gPSBjbGFzc2lmeUZvcm0odGhpcy5mb3JtQ3JlYXRlU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCAkbG9naW5Gb3JtID0gY2xhc3NpZnlGb3JtKCcubG9naW4tZm9ybScpO1xuICAgICAgICBjb25zdCAkZm9yZ290UGFzc3dvcmRGb3JtID0gY2xhc3NpZnlGb3JtKCcuZm9yZ290LXBhc3N3b3JkLWZvcm0nKTtcbiAgICAgICAgY29uc3QgJG5ld1Bhc3N3b3JkRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnLm5ldy1wYXNzd29yZC1mb3JtJyk7IC8vIHJlc2V0IHBhc3N3b3JkXG5cbiAgICAgICAgLy8gSW5qZWN0ZWQgdmlhIGF1dGguaHRtbFxuICAgICAgICB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzID0gdGhpcy5jb250ZXh0LnBhc3N3b3JkUmVxdWlyZW1lbnRzO1xuXG4gICAgICAgIGlmICgkbG9naW5Gb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckxvZ2luVmFsaWRhdGlvbigkbG9naW5Gb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkbmV3UGFzc3dvcmRGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3Rlck5ld1Bhc3N3b3JkVmFsaWRhdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRmb3Jnb3RQYXNzd29yZEZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRm9yZ290UGFzc3dvcmRWYWxpZGF0aW9uKCRmb3Jnb3RQYXNzd29yZEZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRjcmVhdGVBY2NvdW50Rm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJDcmVhdGVBY2NvdW50VmFsaWRhdG9yKCRjcmVhdGVBY2NvdW50Rm9ybSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJ2YXIgY3JlYXRlQmFzZUZvciA9IHJlcXVpcmUoJy4vX2NyZWF0ZUJhc2VGb3InKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYmFzZUZvck93bmAgd2hpY2ggaXRlcmF0ZXMgb3ZlciBgb2JqZWN0YFxuICogcHJvcGVydGllcyByZXR1cm5lZCBieSBga2V5c0Z1bmNgIGFuZCBpbnZva2VzIGBpdGVyYXRlZWAgZm9yIGVhY2ggcHJvcGVydHkuXG4gKiBJdGVyYXRlZSBmdW5jdGlvbnMgbWF5IGV4aXQgaXRlcmF0aW9uIGVhcmx5IGJ5IGV4cGxpY2l0bHkgcmV0dXJuaW5nIGBmYWxzZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbnZhciBiYXNlRm9yID0gY3JlYXRlQmFzZUZvcigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGb3I7XG4iLCJ2YXIgYmFzZUZvciA9IHJlcXVpcmUoJy4vX2Jhc2VGb3InKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZm9yT3duYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUZvck93bihvYmplY3QsIGl0ZXJhdGVlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgYmFzZUZvcihvYmplY3QsIGl0ZXJhdGVlLCBrZXlzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRm9yT3duO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBpdCByZWNlaXZlcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqXG4gKiBjb25zb2xlLmxvZyhfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcbiIsIi8qKlxuICogQ3JlYXRlcyBhIGJhc2UgZnVuY3Rpb24gZm9yIG1ldGhvZHMgbGlrZSBgXy5mb3JJbmAgYW5kIGBfLmZvck93bmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYmFzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmFzZUZvcihmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCwgaXRlcmF0ZWUsIGtleXNGdW5jKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGl0ZXJhYmxlID0gT2JqZWN0KG9iamVjdCksXG4gICAgICAgIHByb3BzID0ga2V5c0Z1bmMob2JqZWN0KSxcbiAgICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcHNbZnJvbVJpZ2h0ID8gbGVuZ3RoIDogKytpbmRleF07XG4gICAgICBpZiAoaXRlcmF0ZWUoaXRlcmFibGVba2V5XSwga2V5LCBpdGVyYWJsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUJhc2VGb3I7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlFYWNoO1xuIiwidmFyIGFycmF5RWFjaCA9IHJlcXVpcmUoJy4vX2FycmF5RWFjaCcpLFxuICAgIGJhc2VDcmVhdGUgPSByZXF1aXJlKCcuL19iYXNlQ3JlYXRlJyksXG4gICAgYmFzZUZvck93biA9IHJlcXVpcmUoJy4vX2Jhc2VGb3JPd24nKSxcbiAgICBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKlxuICogQW4gYWx0ZXJuYXRpdmUgdG8gYF8ucmVkdWNlYDsgdGhpcyBtZXRob2QgdHJhbnNmb3JtcyBgb2JqZWN0YCB0byBhIG5ld1xuICogYGFjY3VtdWxhdG9yYCBvYmplY3Qgd2hpY2ggaXMgdGhlIHJlc3VsdCBvZiBydW5uaW5nIGVhY2ggb2YgaXRzIG93blxuICogZW51bWVyYWJsZSBzdHJpbmcga2V5ZWQgcHJvcGVydGllcyB0aHJ1IGBpdGVyYXRlZWAsIHdpdGggZWFjaCBpbnZvY2F0aW9uXG4gKiBwb3RlbnRpYWxseSBtdXRhdGluZyB0aGUgYGFjY3VtdWxhdG9yYCBvYmplY3QuIElmIGBhY2N1bXVsYXRvcmAgaXMgbm90XG4gKiBwcm92aWRlZCwgYSBuZXcgb2JqZWN0IHdpdGggdGhlIHNhbWUgYFtbUHJvdG90eXBlXV1gIHdpbGwgYmUgdXNlZC4gVGhlXG4gKiBpdGVyYXRlZSBpcyBpbnZva2VkIHdpdGggZm91ciBhcmd1bWVudHM6IChhY2N1bXVsYXRvciwgdmFsdWUsIGtleSwgb2JqZWN0KS5cbiAqIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdCBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseSByZXR1cm5pbmcgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDEuMy4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGN1c3RvbSBhY2N1bXVsYXRvciB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50cmFuc2Zvcm0oWzIsIDMsIDRdLCBmdW5jdGlvbihyZXN1bHQsIG4pIHtcbiAqICAgcmVzdWx0LnB1c2gobiAqPSBuKTtcbiAqICAgcmV0dXJuIG4gJSAyID09IDA7XG4gKiB9LCBbXSk7XG4gKiAvLyA9PiBbNCwgOV1cbiAqXG4gKiBfLnRyYW5zZm9ybSh7ICdhJzogMSwgJ2InOiAyLCAnYyc6IDEgfSwgZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwga2V5KSB7XG4gKiAgIChyZXN1bHRbdmFsdWVdIHx8IChyZXN1bHRbdmFsdWVdID0gW10pKS5wdXNoKGtleSk7XG4gKiB9LCB7fSk7XG4gKiAvLyA9PiB7ICcxJzogWydhJywgJ2MnXSwgJzInOiBbJ2InXSB9XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybShvYmplY3QsIGl0ZXJhdGVlLCBhY2N1bXVsYXRvcikge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KG9iamVjdCksXG4gICAgICBpc0Fyckxpa2UgPSBpc0FyciB8fCBpc0J1ZmZlcihvYmplY3QpIHx8IGlzVHlwZWRBcnJheShvYmplY3QpO1xuXG4gIGl0ZXJhdGVlID0gYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlLCA0KTtcbiAgaWYgKGFjY3VtdWxhdG9yID09IG51bGwpIHtcbiAgICB2YXIgQ3RvciA9IG9iamVjdCAmJiBvYmplY3QuY29uc3RydWN0b3I7XG4gICAgaWYgKGlzQXJyTGlrZSkge1xuICAgICAgYWNjdW11bGF0b3IgPSBpc0FyciA/IG5ldyBDdG9yIDogW107XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIGFjY3VtdWxhdG9yID0gaXNGdW5jdGlvbihDdG9yKSA/IGJhc2VDcmVhdGUoZ2V0UHJvdG90eXBlKG9iamVjdCkpIDoge307XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgYWNjdW11bGF0b3IgPSB7fTtcbiAgICB9XG4gIH1cbiAgKGlzQXJyTGlrZSA/IGFycmF5RWFjaCA6IGJhc2VGb3JPd24pKG9iamVjdCwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBvYmplY3QpIHtcbiAgICByZXR1cm4gaXRlcmF0ZWUoYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgb2JqZWN0KTtcbiAgfSk7XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0cmFuc2Zvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9