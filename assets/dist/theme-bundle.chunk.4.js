(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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

/***/ }),

/***/ "./assets/js/theme/gift-certificate.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/gift-certificate.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var GiftCertificate = function (_PageManager) {
    _inherits(GiftCertificate, _PageManager);

    function GiftCertificate(context) {
        _classCallCheck(this, GiftCertificate);

        var _this = _possibleConstructorReturn(this, _PageManager.call(this, context));

        var $certBalanceForm = $('#gift-certificate-balance');

        var purchaseModel = {
            recipientName: function recipientName(val) {
                return val.length;
            },
            recipientEmail: function recipientEmail() {
                return _common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"].email.apply(_common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"], arguments);
            },
            senderName: function senderName(val) {
                return val.length;
            },
            senderEmail: function senderEmail() {
                return _common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"].email.apply(_common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"], arguments);
            },
            customAmount: function customAmount(value, min, max) {
                return value && value >= min && value <= max;
            },
            setAmount: function setAmount(value, options) {
                var found = false;

                options.forEach(function (option) {
                    if (option === value) {
                        found = true;
                        return false;
                    }
                });

                return found;
            }
        };

        var $purchaseForm = $('#gift-certificate-form');
        var $customAmounts = $purchaseForm.find('input[name="certificate_amount"]');
        var purchaseValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
            submit: '#gift-certificate-form input[type="submit"]',
            delay: 300
        });

        if ($customAmounts.length) {
            var $element = $purchaseForm.find('input[name="certificate_amount"]');
            var min = $element.data('min');
            var minFormatted = $element.data('minFormatted');
            var max = $element.data('max');
            var maxFormatted = $element.data('maxFormatted');

            purchaseValidator.add({
                selector: '#gift-certificate-form input[name="certificate_amount"]',
                validate: function validate(cb, val) {
                    var numberVal = Number(val);

                    if (!numberVal) {
                        cb(false);
                    }

                    cb(numberVal >= min && numberVal <= max);
                },
                errorMessage: 'You must enter a certificate amount between ' + minFormatted + ' and ' + maxFormatted + '.'
            });
        }

        purchaseValidator.add([{
            selector: '#gift-certificate-form input[name="to_name"]',
            validate: function validate(cb, val) {
                var result = purchaseModel.recipientName(val);

                cb(result);
            },
            errorMessage: _this.context.toName
        }, {
            selector: '#gift-certificate-form input[name="to_email"]',
            validate: function validate(cb, val) {
                var result = purchaseModel.recipientEmail(val);

                cb(result);
            },
            errorMessage: _this.context.toEmail
        }, {
            selector: '#gift-certificate-form input[name="from_name"]',
            validate: function validate(cb, val) {
                var result = purchaseModel.senderName(val);

                cb(result);
            },
            errorMessage: _this.context.fromName
        }, {
            selector: '#gift-certificate-form input[name="from_email"]',
            validate: function validate(cb, val) {
                var result = purchaseModel.senderEmail(val);

                cb(result);
            },
            errorMessage: _this.context.fromEmail
        }, {
            selector: '#gift-certificate-form input[name="certificate_theme"]:first-of-type',
            triggeredBy: '#gift-certificate-form input[name="certificate_theme"]',
            validate: function validate(cb) {
                var val = $purchaseForm.find('input[name="certificate_theme"]:checked').val();

                cb(typeof val === 'string');
            },
            errorMessage: _this.context.certTheme
        }, {
            selector: '#gift-certificate-form input[name="agree"]',
            validate: function validate(cb) {
                var val = $purchaseForm.find('input[name="agree"]').get(0).checked;

                cb(val);
            },
            errorMessage: _this.context.agreeToTerms
        }, {
            selector: '#gift-certificate-form input[name="agree2"]',
            validate: function validate(cb) {
                var val = $purchaseForm.find('input[name="agree2"]').get(0).checked;

                cb(val);
            },
            errorMessage: _this.context.agreeToTerms
        }]);

        if ($certBalanceForm.length) {
            var balanceVal = _this.checkCertBalanceValidator($certBalanceForm);

            $certBalanceForm.on('submit', function () {
                balanceVal.performCheck();

                if (!balanceVal.areAll('valid')) {
                    return false;
                }
            });
        }

        $purchaseForm.on('submit', function (event) {
            purchaseValidator.performCheck();

            if (!purchaseValidator.areAll('valid')) {
                return event.preventDefault();
            }
        });

        $('#gift-certificate-preview').click(function (event) {
            event.preventDefault();

            purchaseValidator.performCheck();

            if (!purchaseValidator.areAll('valid')) {
                return;
            }

            var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_5__["defaultModal"])();
            var previewUrl = $(event.currentTarget).data('previewUrl') + '&' + $purchaseForm.serialize();

            modal.open();

            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["api"].getPage(previewUrl, {}, function (err, content) {
                if (err) {
                    return modal.updateContent(_this.context.previewError);
                }

                modal.updateContent(content, { wrap: true });
            });
        });
        return _this;
    }

    GiftCertificate.prototype.checkCertBalanceValidator = function checkCertBalanceValidator($balanceForm) {
        var balanceValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
            submit: $balanceForm.find('input[type="submit"]')
        });

        balanceValidator.add({
            selector: $balanceForm.find('input[name="giftcertificatecode"]'),
            validate: function validate(cb, val) {
                cb(Object(_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_2__["default"])(val));
            },

            errorMessage: 'You must enter a certificate code.'
        });

        return balanceValidator;
    };

    return GiftCertificate;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (GiftCertificate);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2dpZnQtY2VydGlmaWNhdGUtdmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9naWZ0LWNlcnRpZmljYXRlLmpzIl0sIm5hbWVzIjpbImNlcnQiLCJHaWZ0Q2VydGlmaWNhdGUiLCJjb250ZXh0IiwiJGNlcnRCYWxhbmNlRm9ybSIsIiQiLCJwdXJjaGFzZU1vZGVsIiwicmVjaXBpZW50TmFtZSIsInZhbCIsImxlbmd0aCIsInJlY2lwaWVudEVtYWlsIiwiZm9ybU1vZGVsIiwiZW1haWwiLCJzZW5kZXJOYW1lIiwic2VuZGVyRW1haWwiLCJjdXN0b21BbW91bnQiLCJ2YWx1ZSIsIm1pbiIsIm1heCIsInNldEFtb3VudCIsIm9wdGlvbnMiLCJmb3VuZCIsImZvckVhY2giLCJvcHRpb24iLCIkcHVyY2hhc2VGb3JtIiwiJGN1c3RvbUFtb3VudHMiLCJmaW5kIiwicHVyY2hhc2VWYWxpZGF0b3IiLCJub2QiLCJzdWJtaXQiLCJkZWxheSIsIiRlbGVtZW50IiwiZGF0YSIsIm1pbkZvcm1hdHRlZCIsIm1heEZvcm1hdHRlZCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsIm51bWJlclZhbCIsIk51bWJlciIsImVycm9yTWVzc2FnZSIsInJlc3VsdCIsInRvTmFtZSIsInRvRW1haWwiLCJmcm9tTmFtZSIsImZyb21FbWFpbCIsInRyaWdnZXJlZEJ5IiwiY2VydFRoZW1lIiwiZ2V0IiwiY2hlY2tlZCIsImFncmVlVG9UZXJtcyIsImJhbGFuY2VWYWwiLCJjaGVja0NlcnRCYWxhbmNlVmFsaWRhdG9yIiwib24iLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2xpY2siLCJtb2RhbCIsImRlZmF1bHRNb2RhbCIsInByZXZpZXdVcmwiLCJjdXJyZW50VGFyZ2V0Iiwic2VyaWFsaXplIiwib3BlbiIsImFwaSIsImdldFBhZ2UiLCJlcnIiLCJjb250ZW50IiwidXBkYXRlQ29udGVudCIsInByZXZpZXdFcnJvciIsIndyYXAiLCIkYmFsYW5jZUZvcm0iLCJiYWxhbmNlVmFsaWRhdG9yIiwiZ2lmdENlcnRDaGVja2VyIiwiUGFnZU1hbmFnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFlLHlFQUFVQSxJQUFWLEVBQWdCO0FBQzNCLFFBQUksT0FBT0EsSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUMxQixlQUFPLEtBQVA7QUFDSDs7QUFFRDtBQUNBLFdBQU8sSUFBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQyxlOzs7QUFDakIsNkJBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFBQSxxREFDakIsd0JBQU1BLE9BQU4sQ0FEaUI7O0FBR2pCLFlBQU1DLG1CQUFtQkMsRUFBRSwyQkFBRixDQUF6Qjs7QUFFQSxZQUFNQyxnQkFBZ0I7QUFDbEJDLHlCQURrQix5QkFDSkMsR0FESSxFQUNDO0FBQ2YsdUJBQU9BLElBQUlDLE1BQVg7QUFDSCxhQUhpQjtBQUlsQkMsMEJBSmtCLDRCQUlNO0FBQ3BCLHVCQUFPQyw0REFBU0EsQ0FBQ0MsS0FBVixtRUFBUyxZQUFoQjtBQUNILGFBTmlCO0FBT2xCQyxzQkFQa0Isc0JBT1BMLEdBUE8sRUFPRjtBQUNaLHVCQUFPQSxJQUFJQyxNQUFYO0FBQ0gsYUFUaUI7QUFVbEJLLHVCQVZrQix5QkFVRztBQUNqQix1QkFBT0gsNERBQVNBLENBQUNDLEtBQVYsbUVBQVMsWUFBaEI7QUFDSCxhQVppQjtBQWFsQkcsd0JBYmtCLHdCQWFMQyxLQWJLLEVBYUVDLEdBYkYsRUFhT0MsR0FiUCxFQWFZO0FBQzFCLHVCQUFPRixTQUFTQSxTQUFTQyxHQUFsQixJQUF5QkQsU0FBU0UsR0FBekM7QUFDSCxhQWZpQjtBQWdCbEJDLHFCQWhCa0IscUJBZ0JSSCxLQWhCUSxFQWdCREksT0FoQkMsRUFnQlE7QUFDdEIsb0JBQUlD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YztBQUxHLFNBQXJCOztBQVFBLGVBQU9pQyxnQkFBUDtBQUNILEs7OztFQTlMd0NFLHFEOztBQUF4QjFFLDhFIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay40LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNlcnQpIHtcbiAgICBpZiAodHlwZW9mIGNlcnQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgYW55IGN1c3RvbSBnaWZ0IGNlcnRpZmljYXRlIHZhbGlkYXRpb24gbG9naWMgaGVyZVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcbmltcG9ydCBnaWZ0Q2VydENoZWNrZXIgZnJvbSAnLi9jb21tb24vZ2lmdC1jZXJ0aWZpY2F0ZS12YWxpZGF0b3InO1xuaW1wb3J0IGZvcm1Nb2RlbCBmcm9tICcuL2NvbW1vbi9tb2RlbHMvZm9ybXMnO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdE1vZGFsIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHaWZ0Q2VydGlmaWNhdGUgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcblxuICAgICAgICBjb25zdCAkY2VydEJhbGFuY2VGb3JtID0gJCgnI2dpZnQtY2VydGlmaWNhdGUtYmFsYW5jZScpO1xuXG4gICAgICAgIGNvbnN0IHB1cmNoYXNlTW9kZWwgPSB7XG4gICAgICAgICAgICByZWNpcGllbnROYW1lKHZhbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWwubGVuZ3RoO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlY2lwaWVudEVtYWlsKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybU1vZGVsLmVtYWlsKC4uLmFyZ3MpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbmRlck5hbWUodmFsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5sZW5ndGg7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VuZGVyRW1haWwoLi4uYXJncykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtTW9kZWwuZW1haWwoLi4uYXJncyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3VzdG9tQW1vdW50KHZhbHVlLCBtaW4sIG1heCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZSA+PSBtaW4gJiYgdmFsdWUgPD0gbWF4O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldEFtb3VudCh2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbiA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCAkcHVyY2hhc2VGb3JtID0gJCgnI2dpZnQtY2VydGlmaWNhdGUtZm9ybScpO1xuICAgICAgICBjb25zdCAkY3VzdG9tQW1vdW50cyA9ICRwdXJjaGFzZUZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImNlcnRpZmljYXRlX2Ftb3VudFwiXScpO1xuICAgICAgICBjb25zdCBwdXJjaGFzZVZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgICAgICAgICAgZGVsYXk6IDMwMCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCRjdXN0b21BbW91bnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgJGVsZW1lbnQgPSAkcHVyY2hhc2VGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJjZXJ0aWZpY2F0ZV9hbW91bnRcIl0nKTtcbiAgICAgICAgICAgIGNvbnN0IG1pbiA9ICRlbGVtZW50LmRhdGEoJ21pbicpO1xuICAgICAgICAgICAgY29uc3QgbWluRm9ybWF0dGVkID0gJGVsZW1lbnQuZGF0YSgnbWluRm9ybWF0dGVkJyk7XG4gICAgICAgICAgICBjb25zdCBtYXggPSAkZWxlbWVudC5kYXRhKCdtYXgnKTtcbiAgICAgICAgICAgIGNvbnN0IG1heEZvcm1hdHRlZCA9ICRlbGVtZW50LmRhdGEoJ21heEZvcm1hdHRlZCcpO1xuXG4gICAgICAgICAgICBwdXJjaGFzZVZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwiY2VydGlmaWNhdGVfYW1vdW50XCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbnVtYmVyVmFsID0gTnVtYmVyKHZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFudW1iZXJWYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKG51bWJlclZhbCA+PSBtaW4gJiYgbnVtYmVyVmFsIDw9IG1heCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IGBZb3UgbXVzdCBlbnRlciBhIGNlcnRpZmljYXRlIGFtb3VudCBiZXR3ZWVuICR7bWluRm9ybWF0dGVkfSBhbmQgJHttYXhGb3JtYXR0ZWR9LmAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1cmNoYXNlVmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W25hbWU9XCJ0b19uYW1lXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcHVyY2hhc2VNb2RlbC5yZWNpcGllbnROYW1lKHZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnRvTmFtZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W25hbWU9XCJ0b19lbWFpbFwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHB1cmNoYXNlTW9kZWwucmVjaXBpZW50RW1haWwodmFsKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQudG9FbWFpbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W25hbWU9XCJmcm9tX25hbWVcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwdXJjaGFzZU1vZGVsLnNlbmRlck5hbWUodmFsKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZnJvbU5hbWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwiZnJvbV9lbWFpbFwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHB1cmNoYXNlTW9kZWwuc2VuZGVyRW1haWwodmFsKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZnJvbUVtYWlsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbbmFtZT1cImNlcnRpZmljYXRlX3RoZW1lXCJdOmZpcnN0LW9mLXR5cGUnLFxuICAgICAgICAgICAgICAgIHRyaWdnZXJlZEJ5OiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwiY2VydGlmaWNhdGVfdGhlbWVcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gJHB1cmNoYXNlRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiY2VydGlmaWNhdGVfdGhlbWVcIl06Y2hlY2tlZCcpLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHR5cGVvZiAodmFsKSA9PT0gJ3N0cmluZycpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuY2VydFRoZW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbbmFtZT1cImFncmVlXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9ICRwdXJjaGFzZUZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImFncmVlXCJdJykuZ2V0KDApLmNoZWNrZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IodmFsKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmFncmVlVG9UZXJtcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W25hbWU9XCJhZ3JlZTJcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gJHB1cmNoYXNlRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiYWdyZWUyXCJdJykuZ2V0KDApLmNoZWNrZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IodmFsKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmFncmVlVG9UZXJtcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGlmICgkY2VydEJhbGFuY2VGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgYmFsYW5jZVZhbCA9IHRoaXMuY2hlY2tDZXJ0QmFsYW5jZVZhbGlkYXRvcigkY2VydEJhbGFuY2VGb3JtKTtcblxuICAgICAgICAgICAgJGNlcnRCYWxhbmNlRm9ybS5vbignc3VibWl0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGJhbGFuY2VWYWwucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWJhbGFuY2VWYWwuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICRwdXJjaGFzZUZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHB1cmNoYXNlVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAoIXB1cmNoYXNlVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcjZ2lmdC1jZXJ0aWZpY2F0ZS1wcmV2aWV3JykuY2xpY2soZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgcHVyY2hhc2VWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmICghcHVyY2hhc2VWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBtb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xuICAgICAgICAgICAgY29uc3QgcHJldmlld1VybCA9IGAkeyQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgncHJldmlld1VybCcpfSYkeyRwdXJjaGFzZUZvcm0uc2VyaWFsaXplKCl9YDtcblxuICAgICAgICAgICAgbW9kYWwub3BlbigpO1xuXG4gICAgICAgICAgICBhcGkuZ2V0UGFnZShwcmV2aWV3VXJsLCB7fSwgKGVyciwgY29udGVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZGFsLnVwZGF0ZUNvbnRlbnQodGhpcy5jb250ZXh0LnByZXZpZXdFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChjb250ZW50LCB7IHdyYXA6IHRydWUgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hlY2tDZXJ0QmFsYW5jZVZhbGlkYXRvcigkYmFsYW5jZUZvcm0pIHtcbiAgICAgICAgY29uc3QgYmFsYW5jZVZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICRiYWxhbmNlRm9ybS5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJhbGFuY2VWYWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAkYmFsYW5jZUZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImdpZnRjZXJ0aWZpY2F0ZWNvZGVcIl0nKSxcbiAgICAgICAgICAgIHZhbGlkYXRlKGNiLCB2YWwpIHtcbiAgICAgICAgICAgICAgICBjYihnaWZ0Q2VydENoZWNrZXIodmFsKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnWW91IG11c3QgZW50ZXIgYSBjZXJ0aWZpY2F0ZSBjb2RlLicsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBiYWxhbmNlVmFsaWRhdG9yO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=