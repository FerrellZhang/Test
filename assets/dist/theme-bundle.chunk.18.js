(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./assets/js/theme/contact-us.js":
/*!***************************************!*\
  !*** ./assets/js/theme/contact-us.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/models/forms */ "./assets/js/theme/common/models/forms.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ContactUs = function (_PageManager) {
    _inherits(ContactUs, _PageManager);

    function ContactUs() {
        _classCallCheck(this, ContactUs);

        return _possibleConstructorReturn(this, _PageManager.apply(this, arguments));
    }

    ContactUs.prototype.onReady = function onReady() {
        this.registerContactFormValidation();
    };

    ContactUs.prototype.registerContactFormValidation = function registerContactFormValidation() {
        var formSelector = 'form[data-contact-form]';
        var contactUsValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
            submit: formSelector + ' input[type="submit"]'
        });
        var $contactForm = $(formSelector);

        contactUsValidator.add([{
            selector: formSelector + ' input[name="contact_email"]',
            validate: function validate(cb, val) {
                var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_2__["default"].email(val);

                cb(result);
            },
            errorMessage: this.context.contactEmail
        }, {
            selector: formSelector + ' textarea[name="contact_question"]',
            validate: function validate(cb, val) {
                var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_2__["default"].notEmpty(val);

                cb(result);
            },
            errorMessage: this.context.contactQuestion
        }]);

        $contactForm.on('submit', function (event) {
            contactUsValidator.performCheck();

            if (contactUsValidator.areAll('valid')) {
                return;
            }

            event.preventDefault();
        });
    };

    return ContactUs;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (ContactUs);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29udGFjdC11cy5qcyJdLCJuYW1lcyI6WyJDb250YWN0VXMiLCJvblJlYWR5IiwicmVnaXN0ZXJDb250YWN0Rm9ybVZhbGlkYXRpb24iLCJmb3JtU2VsZWN0b3IiLCJjb250YWN0VXNWYWxpZGF0b3IiLCJub2QiLCJzdWJtaXQiLCIkY29udGFjdEZvcm0iLCIkIiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwidmFsIiwicmVzdWx0IiwiZm9ybXMiLCJlbWFpbCIsImVycm9yTWVzc2FnZSIsImNvbnRleHQiLCJjb250YWN0RW1haWwiLCJub3RFbXB0eSIsImNvbnRhY3RRdWVzdGlvbiIsIm9uIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIlBhZ2VNYW5hZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFcUJBLFM7Ozs7Ozs7Ozt3QkFDakJDLE8sc0JBQVU7QUFDTixhQUFLQyw2QkFBTDtBQUNILEs7O3dCQUVEQSw2Qiw0Q0FBZ0M7QUFDNUIsWUFBTUMsZUFBZSx5QkFBckI7QUFDQSxZQUFNQyxxQkFBcUJDLDJEQUFHQSxDQUFDO0FBQzNCQyxvQkFBV0gsWUFBWDtBQUQyQixTQUFKLENBQTNCO0FBR0EsWUFBTUksZUFBZUMsRUFBRUwsWUFBRixDQUFyQjs7QUFFQUMsMkJBQW1CSyxHQUFuQixDQUF1QixDQUNuQjtBQUNJQyxzQkFBYVAsWUFBYixpQ0FESjtBQUVJUSxzQkFBVSxrQkFBQ0MsRUFBRCxFQUFLQyxHQUFMLEVBQWE7QUFDbkIsb0JBQU1DLFNBQVNDLDREQUFLQSxDQUFDQyxLQUFOLENBQVlILEdBQVosQ0FBZjs7QUFFQUQsbUJBQUdFLE1BQUg7QUFDSCxhQU5MO0FBT0lHLDBCQUFjLEtBQUtDLE9BQUwsQ0FBYUM7QUFQL0IsU0FEbUIsRUFVbkI7QUFDSVQsc0JBQWFQLFlBQWIsdUNBREo7QUFFSVEsc0JBQVUsa0JBQUNDLEVBQUQsRUFBS0MsR0FBTCxFQUFhO0FBQ25CLG9CQUFNQyxTQUFTQyw0REFBS0EsQ0FBQ0ssUUFBTixDQUFlUCxHQUFmLENBQWY7O0FBRUFELG1CQUFHRSxNQUFIO0FBQ0gsYUFOTDtBQU9JRywwQkFBYyxLQUFLQyxPQUFMLENBQWFHO0FBUC9CLFNBVm1CLENBQXZCOztBQXFCQWQscUJBQWFlLEVBQWIsQ0FBZ0IsUUFBaEIsRUFBMEIsaUJBQVM7QUFDL0JsQiwrQkFBbUJtQixZQUFuQjs7QUFFQSxnQkFBSW5CLG1CQUFtQm9CLE1BQW5CLENBQTBCLE9BQTFCLENBQUosRUFBd0M7QUFDcEM7QUFDSDs7QUFFREMsa0JBQU1DLGNBQU47QUFDSCxTQVJEO0FBU0gsSzs7O0VBMUNrQ0MscUQ7O0FBQWxCM0Isd0UiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcbmltcG9ydCBmb3JtcyBmcm9tICcuL2NvbW1vbi9tb2RlbHMvZm9ybXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0VXMgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlckNvbnRhY3RGb3JtVmFsaWRhdGlvbigpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQ29udGFjdEZvcm1WYWxpZGF0aW9uKCkge1xuICAgICAgICBjb25zdCBmb3JtU2VsZWN0b3IgPSAnZm9ybVtkYXRhLWNvbnRhY3QtZm9ybV0nO1xuICAgICAgICBjb25zdCBjb250YWN0VXNWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiBgJHtmb3JtU2VsZWN0b3J9IGlucHV0W3R5cGU9XCJzdWJtaXRcIl1gLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgJGNvbnRhY3RGb3JtID0gJChmb3JtU2VsZWN0b3IpO1xuXG4gICAgICAgIGNvbnRhY3RVc1ZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBgJHtmb3JtU2VsZWN0b3J9IGlucHV0W25hbWU9XCJjb250YWN0X2VtYWlsXCJdYCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm9ybXMuZW1haWwodmFsKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuY29udGFjdEVtYWlsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogYCR7Zm9ybVNlbGVjdG9yfSB0ZXh0YXJlYVtuYW1lPVwiY29udGFjdF9xdWVzdGlvblwiXWAsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1zLm5vdEVtcHR5KHZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmNvbnRhY3RRdWVzdGlvbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgICRjb250YWN0Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29udGFjdFVzVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAoY29udGFjdFVzVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==