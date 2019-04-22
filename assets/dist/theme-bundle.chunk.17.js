(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./assets/js/theme/compare.js":
/*!************************************!*\
  !*** ./assets/js/theme/compare.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Compare = function (_PageManager) {
    _inherits(Compare, _PageManager);

    function Compare() {
        _classCallCheck(this, Compare);

        return _possibleConstructorReturn(this, _PageManager.apply(this, arguments));
    }

    Compare.prototype.onReady = function onReady() {
        var _this2 = this;

        Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context.urls);

        var message = this.context.compareRemoveMessage;

        $('body').on('click', '[data-comparison-remove]', function (event) {
            if (_this2.context.comparisons.length <= 2) {
                Object(_global_modal__WEBPACK_IMPORTED_MODULE_1__["showAlertModal"])(message);
                event.preventDefault();
            }
        });
    };

    return Compare;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Compare);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tcGFyZS5qcyJdLCJuYW1lcyI6WyJDb21wYXJlIiwib25SZWFkeSIsImNvbXBhcmVQcm9kdWN0cyIsImNvbnRleHQiLCJ1cmxzIiwibWVzc2FnZSIsImNvbXBhcmVSZW1vdmVNZXNzYWdlIiwiJCIsIm9uIiwiY29tcGFyaXNvbnMiLCJsZW5ndGgiLCJzaG93QWxlcnRNb2RhbCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJQYWdlTWFuYWdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRXFCQSxPOzs7Ozs7Ozs7c0JBQ2pCQyxPLHNCQUFVO0FBQUE7O0FBQ05DLGdGQUFlQSxDQUFDLEtBQUtDLE9BQUwsQ0FBYUMsSUFBN0I7O0FBRUEsWUFBTUMsVUFBVSxLQUFLRixPQUFMLENBQWFHLG9CQUE3Qjs7QUFFQUMsVUFBRSxNQUFGLEVBQVVDLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLDBCQUF0QixFQUFrRCxpQkFBUztBQUN2RCxnQkFBSSxPQUFLTCxPQUFMLENBQWFNLFdBQWIsQ0FBeUJDLE1BQXpCLElBQW1DLENBQXZDLEVBQTBDO0FBQ3RDQyxvRkFBY0EsQ0FBQ04sT0FBZjtBQUNBTyxzQkFBTUMsY0FBTjtBQUNIO0FBQ0osU0FMRDtBQU1ILEs7OztFQVpnQ0MscUQ7O0FBQWhCZCxzRSIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wYXJlIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuY29udGV4dC5jb21wYXJlUmVtb3ZlTWVzc2FnZTtcblxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLWNvbXBhcmlzb24tcmVtb3ZlXScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRleHQuY29tcGFyaXNvbnMubGVuZ3RoIDw9IDIpIHtcbiAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbChtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9