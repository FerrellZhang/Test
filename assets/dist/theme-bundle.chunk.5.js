(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./assets/js/theme/common/form-utils.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/common/form-utils.js ***!
  \**********************************************/
/*! exports provided: classifyForm, Validators, insertStateHiddenField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classifyForm", function() { return classifyForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStateHiddenField", function() { return insertStateHiddenField; });
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/capitalize */ "./node_modules/lodash/capitalize.js");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _models_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/forms */ "./assets/js/theme/common/models/forms.js");







var inputTagNames = ['input', 'select', 'textarea'];

/**
 * Apply class name to an input element on its type
 * @param {object} input
 * @param {string} formFieldClass
 * @return {object} Element itself
 */
function classifyInput(input, formFieldClass) {
    var $input = $(input);
    var $formField = $input.parent('.' + formFieldClass);
    var tagName = $input.prop('tagName').toLowerCase();

    var className = formFieldClass + '--' + tagName;
    var specificClassName = void 0;

    // Input can be text/checkbox/radio etc...
    if (tagName === 'input') {
        var inputType = $input.prop('type');

        if (lodash_includes__WEBPACK_IMPORTED_MODULE_2___default()(['radio', 'checkbox', 'submit'], inputType)) {
            // ie: .form-field--checkbox, .form-field--radio
            className = formFieldClass + '--' + lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default()(inputType);
        } else {
            // ie: .form-field--input .form-field--inputText
            specificClassName = '' + className + lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default()(inputType);
        }
    }

    // Apply class modifier
    return $formField.addClass(className).addClass(specificClassName);
}

/**
 * Apply class name to each input element in a form based on its type
 * @example
 * // Before
 * <form id="form">
 *     <div class="form-field">
 *         <input type="text">
 *     </div>
 *     <div class="form-field">
 *         <select>...</select>
 *     </div>
 * </form>
 *
 * classifyForm('#form', { formFieldClass: 'form-field' });
 *
 * // After
 * <div class="form-field form-field--input form-field--inputText">...</div>
 * <div class="form-field form-field--select">...</div>
 *
 * @param {string|object} formSelector - selector or element
 * @param {object} options
 * @return {jQuery} Element itself
 */
function classifyForm(formSelector) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var $form = $(formSelector);
    var $inputs = $form.find(inputTagNames.join(', '));

    // Obtain options
    var _options$formFieldCla = options.formFieldClass,
        formFieldClass = _options$formFieldCla === undefined ? 'form-field' : _options$formFieldCla;

    // Classify each input in a form

    $inputs.each(function (__, input) {
        classifyInput(input, formFieldClass);
    });

    return $form;
}

/**
 * Get id from given field
 * @param {object} $field JQuery field object
 * @return {string}
 */
function getFieldId($field) {
    var fieldId = $field.prop('name').match(/(\[.*\])/);

    if (fieldId && fieldId.length !== 0) {
        return fieldId[0];
    }

    return '';
}

/**
 * Insert hidden field after State/Province field
 * @param {object} $stateField JQuery field object
 */
function insertStateHiddenField($stateField) {
    var fieldId = getFieldId($stateField);
    var stateFieldAttrs = {
        type: 'hidden',
        name: 'FormFieldIsText' + fieldId,
        value: '1'
    };

    $stateField.after($('<input />', stateFieldAttrs));
}

var Validators = {
    /**
     * Sets up a new validation when the form is dirty
     * @param validator
     * @param field
     */
    setEmailValidation: function setEmailValidation(validator, field) {
        if (field) {
            validator.add({
                selector: field,
                validate: function validate(cb, val) {
                    var result = _models_forms__WEBPACK_IMPORTED_MODULE_4__["default"].email(val);

                    cb(result);
                },
                errorMessage: 'You must enter a valid email.'
            });
        }
    },

    /**
     * Validate password fields
     * @param validator
     * @param passwordSelector
     * @param password2Selector
     * @param requirements
     * @param isOptional
     */
    setPasswordValidation: function setPasswordValidation(validator, passwordSelector, password2Selector, requirements, isOptional) {
        var $password = $(passwordSelector);
        var passwordValidations = [{
            selector: passwordSelector,
            validate: function validate(cb, val) {
                var result = val.length;

                if (isOptional) {
                    return cb(true);
                }

                cb(result);
            },
            errorMessage: 'You must enter a password.'
        }, {
            selector: passwordSelector,
            validate: function validate(cb, val) {
                var result = val.match(new RegExp(requirements.alpha)) && val.match(new RegExp(requirements.numeric)) && val.length >= requirements.minlength;

                // If optional and nothing entered, it is valid
                if (isOptional && val.length === 0) {
                    return cb(true);
                }

                cb(result);
            },
            errorMessage: requirements.error
        }, {
            selector: password2Selector,
            validate: function validate(cb, val) {
                var result = val.length;

                if (isOptional) {
                    return cb(true);
                }

                cb(result);
            },
            errorMessage: 'You must enter a password.'
        }, {
            selector: password2Selector,
            validate: function validate(cb, val) {
                var result = val === $password.val();

                cb(result);
            },
            errorMessage: 'Your passwords do not match.'
        }];

        validator.add(passwordValidations);
    },

    /**
     * Validate password fields
     * @param {Nod} validator
     * @param {Object} selectors
     * @param {string} selectors.errorSelector
     * @param {string} selectors.fieldsetSelector
     * @param {string} selectors.formSelector
     * @param {string} selectors.maxPriceSelector
     * @param {string} selectors.minPriceSelector
     */
    setMinMaxPriceValidation: function setMinMaxPriceValidation(validator, selectors) {
        var errorSelector = selectors.errorSelector,
            fieldsetSelector = selectors.fieldsetSelector,
            formSelector = selectors.formSelector,
            maxPriceSelector = selectors.maxPriceSelector,
            minPriceSelector = selectors.minPriceSelector;


        validator.configure({
            form: formSelector,
            preventSubmit: true,
            successClass: '_' // KLUDGE: Don't apply success class
        });

        validator.add({
            errorMessage: 'Min price must be less than max. price.',
            selector: minPriceSelector,
            validate: 'min-max:' + minPriceSelector + ':' + maxPriceSelector
        });

        validator.add({
            errorMessage: 'Min price must be less than max. price.',
            selector: maxPriceSelector,
            validate: 'min-max:' + minPriceSelector + ':' + maxPriceSelector
        });

        validator.add({
            errorMessage: 'Max. price is required.',
            selector: maxPriceSelector,
            validate: 'presence'
        });

        validator.add({
            errorMessage: 'Min. price is required.',
            selector: minPriceSelector,
            validate: 'presence'
        });

        validator.add({
            errorMessage: 'Input must be greater than 0.',
            selector: [minPriceSelector, maxPriceSelector],
            validate: 'min-number:0'
        });

        validator.setMessageOptions({
            selector: [minPriceSelector, maxPriceSelector],
            parent: fieldsetSelector,
            errorSpan: errorSelector
        });
    },

    /**
     * Sets up a new validation when the form is dirty
     * @param validator
     * @param field
     */
    setStateCountryValidation: function setStateCountryValidation(validator, field) {
        if (field) {
            validator.add({
                selector: field,
                validate: 'presence',
                errorMessage: 'The \'State/Province\' field cannot be blank.'
            });
        }
    },

    /**
     * Removes classes from dirty form if previously checked
     * @param field
     */
    cleanUpStateValidation: function cleanUpStateValidation(field) {
        var $fieldClassElement = $('[data-type="' + field.data('fieldType') + '"]');

        Object.keys(_nod__WEBPACK_IMPORTED_MODULE_3__["default"].classes).forEach(function (value) {
            if ($fieldClassElement.hasClass(_nod__WEBPACK_IMPORTED_MODULE_3__["default"].classes[value])) {
                $fieldClassElement.removeClass(_nod__WEBPACK_IMPORTED_MODULE_3__["default"].classes[value]);
            }
        });
    }
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 Import all product specific js
 */







var Product = function (_PageManager) {
    _inherits(Product, _PageManager);

    function Product(context) {
        _classCallCheck(this, Product);

        var _this = _possibleConstructorReturn(this, _PageManager.call(this, context));

        _this.url = window.location.href;
        _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
        return _this;
    }

    Product.prototype.onReady = function onReady() {
        var _this2 = this;

        // Listen for foundation modal close events to sanitize URL after review.
        $(document).on('close.fndtn.reveal', function () {
            if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
                window.history.replaceState(null, document.title, window.location.pathname);
            }
        });

        var validator = void 0;

        // Init collapsible
        Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])();

        this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_3__["default"]($('.productView'), this.context, window.BCData.product_attributes);
        this.productDetails.setProductVariant();

        Object(_product_video_gallery__WEBPACK_IMPORTED_MODULE_4__["default"])();

        var $reviewForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_5__["classifyForm"])('.writeReview-form');
        var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_1__["default"]($reviewForm);

        $('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
            validator = review.registerValidation(_this2.context);
        });

        $reviewForm.on('submit', function () {
            if (validator) {
                validator.performCheck();
                return validator.areAll('valid');
            }

            return false;
        });

        this.productReviewHandler();
    };

    Product.prototype.productReviewHandler = function productReviewHandler() {
        if (this.url.indexOf('#write_review') !== -1) {
            this.$reviewLink.trigger('click');
        }
    };

    return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Product);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/reviews.js":
/*!********************************************!*\
  !*** ./assets/js/theme/product/reviews.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var _class = function () {
    function _class($reviewForm) {
        _classCallCheck(this, _class);

        this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_0__["default"])({
            submit: $reviewForm.find('input[type="submit"]')
        });

        this.$reviewsContent = $('#product-reviews');
        this.$collapsible = $('[data-collapsible]', this.$reviewsContent);

        this.initLinkBind();
        this.injectPaginationLink();
        this.collapseReviews();
    }

    /**
     * On initial page load, the user clicks on "(12 Reviews)" link
     * The browser jumps to the review page and should expand the reviews section
     */


    _class.prototype.initLinkBind = function initLinkBind() {
        var _this = this;

        var $content = $('#productReviews-content', this.$reviewsContent);

        $('.productView-reviewLink').on('click', function () {
            if (!$content.hasClass('is-open')) {
                _this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__["CollapsibleEvents"].click);
            }
        });
    };

    _class.prototype.collapseReviews = function collapseReviews() {
        // We're in paginating state, do not collapse
        if (window.location.hash && window.location.hash.indexOf('#product-reviews') === 0) {
            return;
        }

        // force collapse on page load
        this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__["CollapsibleEvents"].click);
    };

    /**
     * Inject ID into the pagination link
     */


    _class.prototype.injectPaginationLink = function injectPaginationLink() {
        var $nextLink = $('.pagination-item--next .pagination-link', this.$reviewsContent);
        var $prevLink = $('.pagination-item--previous .pagination-link', this.$reviewsContent);

        if ($nextLink.length) {
            $nextLink.attr('href', $nextLink.attr('href') + ' #product-reviews');
        }

        if ($prevLink.length) {
            $prevLink.attr('href', $prevLink.attr('href') + ' #product-reviews');
        }
    };

    _class.prototype.registerValidation = function registerValidation(context) {
        this.context = context;
        this.validator.add([{
            selector: '[name="revrating"]',
            validate: 'presence',
            errorMessage: this.context.reviewRating
        }, {
            selector: '[name="revtitle"]',
            validate: 'presence',
            errorMessage: this.context.reviewSubject
        }, {
            selector: '[name="revtext"]',
            validate: 'presence',
            errorMessage: this.context.reviewComment
        }, {
            selector: '[name="email"]',
            validate: function validate(cb, val) {
                var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_2__["default"].email(val);
                cb(result);
            },
            errorMessage: this.context.reviewEmail
        }]);

        return this.validator;
    };

    _class.prototype.validate = function validate() {
        return this.validator.performCheck();
    };

    return _class;
}();

/* harmony default export */ __webpack_exports__["default"] = (_class);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/*! exports provided: VideoGallery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoGallery", function() { return VideoGallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return videoGallery; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VideoGallery = function () {
    function VideoGallery($element) {
        _classCallCheck(this, VideoGallery);

        this.$player = $element.find('[data-video-player]');
        this.$videos = $element.find('[data-video-item]');
        this.currentVideo = {};
        this.bindEvents();
    }

    VideoGallery.prototype.selectNewVideo = function selectNewVideo(e) {
        e.preventDefault();

        var $target = $(e.currentTarget);

        this.currentVideo = {
            id: $target.data('videoId'),
            $selectedThumb: $target
        };

        this.setMainVideo();
        this.setActiveThumb();
    };

    VideoGallery.prototype.setMainVideo = function setMainVideo() {
        this.$player.attr('src', '//www.youtube.com/embed/' + this.currentVideo.id);
    };

    VideoGallery.prototype.setActiveThumb = function setActiveThumb() {
        this.$videos.removeClass('is-active');
        this.currentVideo.$selectedThumb.addClass('is-active');
    };

    VideoGallery.prototype.bindEvents = function bindEvents() {
        this.$videos.on('click', this.selectNewVideo.bind(this));
    };

    return VideoGallery;
}();

function videoGallery() {
    var pluginKey = 'video-gallery';
    var $videoGallery = $('[data-' + pluginKey + ']');

    $videoGallery.each(function (index, element) {
        var $el = $(element);
        var isInitialized = $el.data(pluginKey) instanceof VideoGallery;

        if (isInitialized) {
            return;
        }

        $el.data(pluginKey, new VideoGallery($el));
    });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Zvcm0tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC92aWRlby1nYWxsZXJ5LmpzIl0sIm5hbWVzIjpbImlucHV0VGFnTmFtZXMiLCJjbGFzc2lmeUlucHV0IiwiaW5wdXQiLCJmb3JtRmllbGRDbGFzcyIsIiRpbnB1dCIsIiQiLCIkZm9ybUZpZWxkIiwicGFyZW50IiwidGFnTmFtZSIsInByb3AiLCJ0b0xvd2VyQ2FzZSIsImNsYXNzTmFtZSIsInNwZWNpZmljQ2xhc3NOYW1lIiwiaW5wdXRUeXBlIiwiYWRkQ2xhc3MiLCJjbGFzc2lmeUZvcm0iLCJmb3JtU2VsZWN0b3IiLCJvcHRpb25zIiwiJGZvcm0iLCIkaW5wdXRzIiwiZmluZCIsImpvaW4iLCJlYWNoIiwiX18iLCJnZXRGaWVsZElkIiwiJGZpZWxkIiwiZmllbGRJZCIsIm1hdGNoIiwibGVuZ3RoIiwiaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCIsIiRzdGF0ZUZpZWxkIiwic3RhdGVGaWVsZEF0dHJzIiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImFmdGVyIiwiVmFsaWRhdG9ycyIsInNldEVtYWlsVmFsaWRhdGlvbiIsInZhbGlkYXRvciIsImZpZWxkIiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwidmFsIiwicmVzdWx0IiwiZm9ybXMiLCJlbWFpbCIsImVycm9yTWVzc2FnZSIsInNldFBhc3N3b3JkVmFsaWRhdGlvbiIsInBhc3N3b3JkU2VsZWN0b3IiLCJwYXNzd29yZDJTZWxlY3RvciIsInJlcXVpcmVtZW50cyIsImlzT3B0aW9uYWwiLCIkcGFzc3dvcmQiLCJwYXNzd29yZFZhbGlkYXRpb25zIiwiUmVnRXhwIiwiYWxwaGEiLCJudW1lcmljIiwibWlubGVuZ3RoIiwiZXJyb3IiLCJzZXRNaW5NYXhQcmljZVZhbGlkYXRpb24iLCJzZWxlY3RvcnMiLCJlcnJvclNlbGVjdG9yIiwiZmllbGRzZXRTZWxlY3RvciIsIm1heFByaWNlU2VsZWN0b3IiLCJtaW5QcmljZVNlbGVjdG9yIiwiY29uZmlndXJlIiwiZm9ybSIsInByZXZlbnRTdWJtaXQiLCJzdWNjZXNzQ2xhc3MiLCJzZXRNZXNzYWdlT3B0aW9ucyIsImVycm9yU3BhbiIsInNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24iLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwiJGZpZWxkQ2xhc3NFbGVtZW50IiwiZGF0YSIsIk9iamVjdCIsImtleXMiLCJub2QiLCJjbGFzc2VzIiwiZm9yRWFjaCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJQcm9kdWN0IiwiY29udGV4dCIsInVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIiRyZXZpZXdMaW5rIiwib25SZWFkeSIsImRvY3VtZW50Iiwib24iLCJpbmRleE9mIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsInRpdGxlIiwicGF0aG5hbWUiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJwcm9kdWN0RGV0YWlscyIsIlByb2R1Y3REZXRhaWxzIiwiQkNEYXRhIiwicHJvZHVjdF9hdHRyaWJ1dGVzIiwic2V0UHJvZHVjdFZhcmlhbnQiLCJ2aWRlb0dhbGxlcnkiLCIkcmV2aWV3Rm9ybSIsInJldmlldyIsIlJldmlldyIsInJlZ2lzdGVyVmFsaWRhdGlvbiIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsInByb2R1Y3RSZXZpZXdIYW5kbGVyIiwidHJpZ2dlciIsIlBhZ2VNYW5hZ2VyIiwic3VibWl0IiwiJHJldmlld3NDb250ZW50IiwiJGNvbGxhcHNpYmxlIiwiaW5pdExpbmtCaW5kIiwiaW5qZWN0UGFnaW5hdGlvbkxpbmsiLCJjb2xsYXBzZVJldmlld3MiLCIkY29udGVudCIsIkNvbGxhcHNpYmxlRXZlbnRzIiwiY2xpY2siLCJoYXNoIiwiJG5leHRMaW5rIiwiJHByZXZMaW5rIiwiYXR0ciIsInJldmlld1JhdGluZyIsInJldmlld1N1YmplY3QiLCJyZXZpZXdDb21tZW50IiwicmV2aWV3RW1haWwiLCJWaWRlb0dhbGxlcnkiLCIkZWxlbWVudCIsIiRwbGF5ZXIiLCIkdmlkZW9zIiwiY3VycmVudFZpZGVvIiwiYmluZEV2ZW50cyIsInNlbGVjdE5ld1ZpZGVvIiwiZSIsInByZXZlbnREZWZhdWx0IiwiJHRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsIiRzZWxlY3RlZFRodW1iIiwic2V0TWFpblZpZGVvIiwic2V0QWN0aXZlVGh1bWIiLCJiaW5kIiwicGx1Z2luS2V5IiwiJHZpZGVvR2FsbGVyeSIsImluZGV4IiwiZWxlbWVudCIsIiRlbCIsImlzSW5pdGlhbGl6ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsQ0FDbEIsT0FEa0IsRUFFbEIsUUFGa0IsRUFHbEIsVUFIa0IsQ0FBdEI7O0FBTUE7Ozs7OztBQU1BLFNBQVNDLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCQyxjQUE5QixFQUE4QztBQUMxQyxRQUFNQyxTQUFTQyxFQUFFSCxLQUFGLENBQWY7QUFDQSxRQUFNSSxhQUFhRixPQUFPRyxNQUFQLE9BQWtCSixjQUFsQixDQUFuQjtBQUNBLFFBQU1LLFVBQVVKLE9BQU9LLElBQVAsQ0FBWSxTQUFaLEVBQXVCQyxXQUF2QixFQUFoQjs7QUFFQSxRQUFJQyxZQUFlUixjQUFmLFVBQWtDSyxPQUF0QztBQUNBLFFBQUlJLDBCQUFKOztBQUVBO0FBQ0EsUUFBSUosWUFBWSxPQUFoQixFQUF5QjtBQUNyQixZQUFNSyxZQUFZVCxPQUFPSyxJQUFQLENBQVksTUFBWixDQUFsQjs7QUFFQSxZQUFJLHVEQUFXLENBQUMsT0FBRCxFQUFVLFVBQVYsRUFBc0IsUUFBdEIsQ0FBWCxFQUE0Q0ksU0FBNUMsQ0FBSixFQUE0RDtBQUN4RDtBQUNB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SixFQUFFa0osT0FBRixDQUFaO0FBQ0EsWUFBTUUsZ0JBQWdCRCxJQUFJNUUsSUFBSixDQUFTd0UsU0FBVCxhQUErQmhCLFlBQXJEOztBQUVBLFlBQUlxQixhQUFKLEVBQW1CO0FBQ2Y7QUFDSDs7QUFFREQsWUFBSTVFLElBQUosQ0FBU3dFLFNBQVQsRUFBb0IsSUFBSWhCLFlBQUosQ0FBaUJvQixHQUFqQixDQUFwQjtBQUNILEtBVEQ7QUFVSCxDIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay41LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBub2QgZnJvbSAnLi9ub2QnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4vbW9kZWxzL2Zvcm1zJztcblxuY29uc3QgaW5wdXRUYWdOYW1lcyA9IFtcbiAgICAnaW5wdXQnLFxuICAgICdzZWxlY3QnLFxuICAgICd0ZXh0YXJlYScsXG5dO1xuXG4vKipcbiAqIEFwcGx5IGNsYXNzIG5hbWUgdG8gYW4gaW5wdXQgZWxlbWVudCBvbiBpdHMgdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IGlucHV0XG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybUZpZWxkQ2xhc3NcbiAqIEByZXR1cm4ge29iamVjdH0gRWxlbWVudCBpdHNlbGZcbiAqL1xuZnVuY3Rpb24gY2xhc3NpZnlJbnB1dChpbnB1dCwgZm9ybUZpZWxkQ2xhc3MpIHtcbiAgICBjb25zdCAkaW5wdXQgPSAkKGlucHV0KTtcbiAgICBjb25zdCAkZm9ybUZpZWxkID0gJGlucHV0LnBhcmVudChgLiR7Zm9ybUZpZWxkQ2xhc3N9YCk7XG4gICAgY29uc3QgdGFnTmFtZSA9ICRpbnB1dC5wcm9wKCd0YWdOYW1lJykudG9Mb3dlckNhc2UoKTtcblxuICAgIGxldCBjbGFzc05hbWUgPSBgJHtmb3JtRmllbGRDbGFzc30tLSR7dGFnTmFtZX1gO1xuICAgIGxldCBzcGVjaWZpY0NsYXNzTmFtZTtcblxuICAgIC8vIElucHV0IGNhbiBiZSB0ZXh0L2NoZWNrYm94L3JhZGlvIGV0Yy4uLlxuICAgIGlmICh0YWdOYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgIGNvbnN0IGlucHV0VHlwZSA9ICRpbnB1dC5wcm9wKCd0eXBlJyk7XG5cbiAgICAgICAgaWYgKF8uaW5jbHVkZXMoWydyYWRpbycsICdjaGVja2JveCcsICdzdWJtaXQnXSwgaW5wdXRUeXBlKSkge1xuICAgICAgICAgICAgLy8gaWU6IC5mb3JtLWZpZWxkLS1jaGVja2JveCwgLmZvcm0tZmllbGQtLXJhZGlvXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBgJHtmb3JtRmllbGRDbGFzc30tLSR7Xy5jYW1lbENhc2UoaW5wdXRUeXBlKX1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaWU6IC5mb3JtLWZpZWxkLS1pbnB1dCAuZm9ybS1maWVsZC0taW5wdXRUZXh0XG4gICAgICAgICAgICBzcGVjaWZpY0NsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0ke18uY2FwaXRhbGl6ZShpbnB1dFR5cGUpfWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBcHBseSBjbGFzcyBtb2RpZmllclxuICAgIHJldHVybiAkZm9ybUZpZWxkXG4gICAgICAgIC5hZGRDbGFzcyhjbGFzc05hbWUpXG4gICAgICAgIC5hZGRDbGFzcyhzcGVjaWZpY0NsYXNzTmFtZSk7XG59XG5cbi8qKlxuICogQXBwbHkgY2xhc3MgbmFtZSB0byBlYWNoIGlucHV0IGVsZW1lbnQgaW4gYSBmb3JtIGJhc2VkIG9uIGl0cyB0eXBlXG4gKiBAZXhhbXBsZVxuICogLy8gQmVmb3JlXG4gKiA8Zm9ybSBpZD1cImZvcm1cIj5cbiAqICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuICogICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj5cbiAqICAgICA8L2Rpdj5cbiAqICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuICogICAgICAgICA8c2VsZWN0Pi4uLjwvc2VsZWN0PlxuICogICAgIDwvZGl2PlxuICogPC9mb3JtPlxuICpcbiAqIGNsYXNzaWZ5Rm9ybSgnI2Zvcm0nLCB7IGZvcm1GaWVsZENsYXNzOiAnZm9ybS1maWVsZCcgfSk7XG4gKlxuICogLy8gQWZ0ZXJcbiAqIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLWlucHV0IGZvcm0tZmllbGQtLWlucHV0VGV4dFwiPi4uLjwvZGl2PlxuICogPGRpdiBjbGFzcz1cImZvcm0tZmllbGQgZm9ybS1maWVsZC0tc2VsZWN0XCI+Li4uPC9kaXY+XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBmb3JtU2VsZWN0b3IgLSBzZWxlY3RvciBvciBlbGVtZW50XG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7alF1ZXJ5fSBFbGVtZW50IGl0c2VsZlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnlGb3JtKGZvcm1TZWxlY3Rvciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgJGZvcm0gPSAkKGZvcm1TZWxlY3Rvcik7XG4gICAgY29uc3QgJGlucHV0cyA9ICRmb3JtLmZpbmQoaW5wdXRUYWdOYW1lcy5qb2luKCcsICcpKTtcblxuICAgIC8vIE9idGFpbiBvcHRpb25zXG4gICAgY29uc3QgeyBmb3JtRmllbGRDbGFzcyA9ICdmb3JtLWZpZWxkJyB9ID0gb3B0aW9ucztcblxuICAgIC8vIENsYXNzaWZ5IGVhY2ggaW5wdXQgaW4gYSBmb3JtXG4gICAgJGlucHV0cy5lYWNoKChfXywgaW5wdXQpID0+IHtcbiAgICAgICAgY2xhc3NpZnlJbnB1dChpbnB1dCwgZm9ybUZpZWxkQ2xhc3MpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICRmb3JtO1xufVxuXG4vKipcbiAqIEdldCBpZCBmcm9tIGdpdmVuIGZpZWxkXG4gKiBAcGFyYW0ge29iamVjdH0gJGZpZWxkIEpRdWVyeSBmaWVsZCBvYmplY3RcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0RmllbGRJZCgkZmllbGQpIHtcbiAgICBjb25zdCBmaWVsZElkID0gJGZpZWxkLnByb3AoJ25hbWUnKS5tYXRjaCgvKFxcWy4qXFxdKS8pO1xuXG4gICAgaWYgKGZpZWxkSWQgJiYgZmllbGRJZC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkSWRbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIEluc2VydCBoaWRkZW4gZmllbGQgYWZ0ZXIgU3RhdGUvUHJvdmluY2UgZmllbGRcbiAqIEBwYXJhbSB7b2JqZWN0fSAkc3RhdGVGaWVsZCBKUXVlcnkgZmllbGQgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGluc2VydFN0YXRlSGlkZGVuRmllbGQoJHN0YXRlRmllbGQpIHtcbiAgICBjb25zdCBmaWVsZElkID0gZ2V0RmllbGRJZCgkc3RhdGVGaWVsZCk7XG4gICAgY29uc3Qgc3RhdGVGaWVsZEF0dHJzID0ge1xuICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgbmFtZTogYEZvcm1GaWVsZElzVGV4dCR7ZmllbGRJZH1gLFxuICAgICAgICB2YWx1ZTogJzEnLFxuICAgIH07XG5cbiAgICAkc3RhdGVGaWVsZC5hZnRlcigkKCc8aW5wdXQgLz4nLCBzdGF0ZUZpZWxkQXR0cnMpKTtcbn1cblxuY29uc3QgVmFsaWRhdG9ycyA9IHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgbmV3IHZhbGlkYXRpb24gd2hlbiB0aGUgZm9ybSBpcyBkaXJ0eVxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBzZXRFbWFpbFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHZhbGlkIGVtYWlsLicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBwYXNzd29yZCBmaWVsZHNcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIHBhc3N3b3JkU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcGFzc3dvcmQyU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcmVxdWlyZW1lbnRzXG4gICAgICogQHBhcmFtIGlzT3B0aW9uYWxcbiAgICAgKi9cbiAgICBzZXRQYXNzd29yZFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIHBhc3N3b3JkU2VsZWN0b3IsIHBhc3N3b3JkMlNlbGVjdG9yLCByZXF1aXJlbWVudHMsIGlzT3B0aW9uYWwpID0+IHtcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkID0gJChwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRWYWxpZGF0aW9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdSBtdXN0IGVudGVyIGEgcGFzc3dvcmQuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5tYXRjaChuZXcgUmVnRXhwKHJlcXVpcmVtZW50cy5hbHBoYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWwubWF0Y2gobmV3IFJlZ0V4cChyZXF1aXJlbWVudHMubnVtZXJpYykpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWwubGVuZ3RoID49IHJlcXVpcmVtZW50cy5taW5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgb3B0aW9uYWwgYW5kIG5vdGhpbmcgZW50ZXJlZCwgaXQgaXMgdmFsaWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwgJiYgdmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogcmVxdWlyZW1lbnRzLmVycm9yLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmQyU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHBhc3N3b3JkLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsID09PSAkcGFzc3dvcmQudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdXIgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaC4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHBhc3N3b3JkVmFsaWRhdGlvbnMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBwYXNzd29yZCBmaWVsZHNcbiAgICAgKiBAcGFyYW0ge05vZH0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNlbGVjdG9yc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZXJyb3JTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZmllbGRzZXRTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZm9ybVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5tYXhQcmljZVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5taW5QcmljZVNlbGVjdG9yXG4gICAgICovXG4gICAgc2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBzZWxlY3RvcnMpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZXJyb3JTZWxlY3RvcixcbiAgICAgICAgICAgIGZpZWxkc2V0U2VsZWN0b3IsXG4gICAgICAgICAgICBmb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgfSA9IHNlbGVjdG9ycztcblxuICAgICAgICB2YWxpZGF0b3IuY29uZmlndXJlKHtcbiAgICAgICAgICAgIGZvcm06IGZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIHByZXZlbnRTdWJtaXQ6IHRydWUsXG4gICAgICAgICAgICBzdWNjZXNzQ2xhc3M6ICdfJywgLy8gS0xVREdFOiBEb24ndCBhcHBseSBzdWNjZXNzIGNsYXNzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluIHByaWNlIG11c3QgYmUgbGVzcyB0aGFuIG1heC4gcHJpY2UuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtaW5QcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGBtaW4tbWF4OiR7bWluUHJpY2VTZWxlY3Rvcn06JHttYXhQcmljZVNlbGVjdG9yfWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluIHByaWNlIG11c3QgYmUgbGVzcyB0aGFuIG1heC4gcHJpY2UuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGBtaW4tbWF4OiR7bWluUHJpY2VTZWxlY3Rvcn06JHttYXhQcmljZVNlbGVjdG9yfWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWF4LiBwcmljZSBpcyByZXF1aXJlZC4nLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdNaW4uIHByaWNlIGlzIHJlcXVpcmVkLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ0lucHV0IG11c3QgYmUgZ3JlYXRlciB0aGFuIDAuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBbbWluUHJpY2VTZWxlY3RvciwgbWF4UHJpY2VTZWxlY3Rvcl0sXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ21pbi1udW1iZXI6MCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5zZXRNZXNzYWdlT3B0aW9ucyh7XG4gICAgICAgICAgICBzZWxlY3RvcjogW21pblByaWNlU2VsZWN0b3IsIG1heFByaWNlU2VsZWN0b3JdLFxuICAgICAgICAgICAgcGFyZW50OiBmaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZXJyb3JTcGFuOiBlcnJvclNlbGVjdG9yLFxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIG5ldyB2YWxpZGF0aW9uIHdoZW4gdGhlIGZvcm0gaXMgZGlydHlcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgc2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnVGhlIFxcJ1N0YXRlL1Byb3ZpbmNlXFwnIGZpZWxkIGNhbm5vdCBiZSBibGFuay4nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBjbGFzc2VzIGZyb20gZGlydHkgZm9ybSBpZiBwcmV2aW91c2x5IGNoZWNrZWRcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBjbGVhblVwU3RhdGVWYWxpZGF0aW9uOiAoZmllbGQpID0+IHtcbiAgICAgICAgY29uc3QgJGZpZWxkQ2xhc3NFbGVtZW50ID0gJCgoYFtkYXRhLXR5cGU9XCIke2ZpZWxkLmRhdGEoJ2ZpZWxkVHlwZScpfVwiXWApKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhub2QuY2xhc3NlcykuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICgkZmllbGRDbGFzc0VsZW1lbnQuaGFzQ2xhc3Mobm9kLmNsYXNzZXNbdmFsdWVdKSkge1xuICAgICAgICAgICAgICAgICRmaWVsZENsYXNzRWxlbWVudC5yZW1vdmVDbGFzcyhub2QuY2xhc3Nlc1t2YWx1ZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxufTtcblxuZXhwb3J0IHsgVmFsaWRhdG9ycywgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCB9O1xuIiwiLypcbiBJbXBvcnQgYWxsIHByb2R1Y3Qgc3BlY2lmaWMganNcbiAqL1xuaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBSZXZpZXcgZnJvbSAnLi9wcm9kdWN0L3Jldmlld3MnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSAnLi9jb21tb24vcHJvZHVjdC1kZXRhaWxzJztcbmltcG9ydCB2aWRlb0dhbGxlcnkgZnJvbSAnLi9wcm9kdWN0L3ZpZGVvLWdhbGxlcnknO1xuaW1wb3J0IHsgY2xhc3NpZnlGb3JtIH0gZnJvbSAnLi9jb21tb24vZm9ybS11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy51cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgdGhpcy4kcmV2aWV3TGluayA9ICQoJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLXJldmlldy1mb3JtXCJdJyk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgLy8gTGlzdGVuIGZvciBmb3VuZGF0aW9uIG1vZGFsIGNsb3NlIGV2ZW50cyB0byBzYW5pdGl6ZSBVUkwgYWZ0ZXIgcmV2aWV3LlxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xvc2UuZm5kdG4ucmV2ZWFsJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyN3cml0ZV9yZXZpZXcnKSAhPT0gLTEgJiYgdHlwZW9mIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBkb2N1bWVudC50aXRsZSwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHZhbGlkYXRvcjtcblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMgPSBuZXcgUHJvZHVjdERldGFpbHMoJCgnLnByb2R1Y3RWaWV3JyksIHRoaXMuY29udGV4dCwgd2luZG93LkJDRGF0YS5wcm9kdWN0X2F0dHJpYnV0ZXMpO1xuICAgICAgICB0aGlzLnByb2R1Y3REZXRhaWxzLnNldFByb2R1Y3RWYXJpYW50KCk7XG5cbiAgICAgICAgdmlkZW9HYWxsZXJ5KCk7XG5cbiAgICAgICAgY29uc3QgJHJldmlld0Zvcm0gPSBjbGFzc2lmeUZvcm0oJy53cml0ZVJldmlldy1mb3JtJyk7XG4gICAgICAgIGNvbnN0IHJldmlldyA9IG5ldyBSZXZpZXcoJHJldmlld0Zvcm0pO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtcmV2aWV3LWZvcm1cIl0nLCAoKSA9PiB7XG4gICAgICAgICAgICB2YWxpZGF0b3IgPSByZXZpZXcucmVnaXN0ZXJWYWxpZGF0aW9uKHRoaXMuY29udGV4dCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRyZXZpZXdGb3JtLm9uKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdFJldmlld0hhbmRsZXIoKTtcbiAgICB9XG5cbiAgICBwcm9kdWN0UmV2aWV3SGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyN3cml0ZV9yZXZpZXcnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJHJldmlld0xpbmsudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBub2QgZnJvbSAnLi4vY29tbW9uL25vZCc7XG5pbXBvcnQgeyBDb2xsYXBzaWJsZUV2ZW50cyB9IGZyb20gJy4uL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgZm9ybXMgZnJvbSAnLi4vY29tbW9uL21vZGVscy9mb3Jtcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcigkcmV2aWV3Rm9ybSkge1xuICAgICAgICB0aGlzLnZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICRyZXZpZXdGb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kcmV2aWV3c0NvbnRlbnQgPSAkKCcjcHJvZHVjdC1yZXZpZXdzJyk7XG4gICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlID0gJCgnW2RhdGEtY29sbGFwc2libGVdJywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuXG4gICAgICAgIHRoaXMuaW5pdExpbmtCaW5kKCk7XG4gICAgICAgIHRoaXMuaW5qZWN0UGFnaW5hdGlvbkxpbmsoKTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZVJldmlld3MoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbiBpbml0aWFsIHBhZ2UgbG9hZCwgdGhlIHVzZXIgY2xpY2tzIG9uIFwiKDEyIFJldmlld3MpXCIgbGlua1xuICAgICAqIFRoZSBicm93c2VyIGp1bXBzIHRvIHRoZSByZXZpZXcgcGFnZSBhbmQgc2hvdWxkIGV4cGFuZCB0aGUgcmV2aWV3cyBzZWN0aW9uXG4gICAgICovXG4gICAgaW5pdExpbmtCaW5kKCkge1xuICAgICAgICBjb25zdCAkY29udGVudCA9ICQoJyNwcm9kdWN0UmV2aWV3cy1jb250ZW50JywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuXG4gICAgICAgICQoJy5wcm9kdWN0Vmlldy1yZXZpZXdMaW5rJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCEkY29udGVudC5oYXNDbGFzcygnaXMtb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kY29sbGFwc2libGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbGxhcHNlUmV2aWV3cygpIHtcbiAgICAgICAgLy8gV2UncmUgaW4gcGFnaW5hdGluZyBzdGF0ZSwgZG8gbm90IGNvbGxhcHNlXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAmJiB3aW5kb3cubG9jYXRpb24uaGFzaC5pbmRleE9mKCcjcHJvZHVjdC1yZXZpZXdzJykgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvcmNlIGNvbGxhcHNlIG9uIHBhZ2UgbG9hZFxuICAgICAgICB0aGlzLiRjb2xsYXBzaWJsZS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLmNsaWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmplY3QgSUQgaW50byB0aGUgcGFnaW5hdGlvbiBsaW5rXG4gICAgICovXG4gICAgaW5qZWN0UGFnaW5hdGlvbkxpbmsoKSB7XG4gICAgICAgIGNvbnN0ICRuZXh0TGluayA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLW5leHQgLnBhZ2luYXRpb24tbGluaycsIHRoaXMuJHJldmlld3NDb250ZW50KTtcbiAgICAgICAgY29uc3QgJHByZXZMaW5rID0gJCgnLnBhZ2luYXRpb24taXRlbS0tcHJldmlvdXMgLnBhZ2luYXRpb24tbGluaycsIHRoaXMuJHJldmlld3NDb250ZW50KTtcblxuICAgICAgICBpZiAoJG5leHRMaW5rLmxlbmd0aCkge1xuICAgICAgICAgICAgJG5leHRMaW5rLmF0dHIoJ2hyZWYnLCBgJHskbmV4dExpbmsuYXR0cignaHJlZicpfSAjcHJvZHVjdC1yZXZpZXdzYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHByZXZMaW5rLmxlbmd0aCkge1xuICAgICAgICAgICAgJHByZXZMaW5rLmF0dHIoJ2hyZWYnLCBgJHskcHJldkxpbmsuYXR0cignaHJlZicpfSAjcHJvZHVjdC1yZXZpZXdzYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3RlclZhbGlkYXRpb24oY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLnZhbGlkYXRvci5hZGQoW3tcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZyYXRpbmdcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5yZXZpZXdSYXRpbmcsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZ0aXRsZVwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnJldmlld1N1YmplY3QsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZ0ZXh0XCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3Q29tbWVudCxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmFtZT1cImVtYWlsXCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1zLmVtYWlsKHZhbCk7XG4gICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5yZXZpZXdFbWFpbCxcbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcjtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBWaWRlb0dhbGxlcnkge1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuJHBsYXllciA9ICRlbGVtZW50LmZpbmQoJ1tkYXRhLXZpZGVvLXBsYXllcl0nKTtcbiAgICAgICAgdGhpcy4kdmlkZW9zID0gJGVsZW1lbnQuZmluZCgnW2RhdGEtdmlkZW8taXRlbV0nKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8gPSB7fTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgc2VsZWN0TmV3VmlkZW8oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlbyA9IHtcbiAgICAgICAgICAgIGlkOiAkdGFyZ2V0LmRhdGEoJ3ZpZGVvSWQnKSxcbiAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiAkdGFyZ2V0LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0TWFpblZpZGVvKCk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIoKTtcbiAgICB9XG5cbiAgICBzZXRNYWluVmlkZW8oKSB7XG4gICAgICAgIHRoaXMuJHBsYXllci5hdHRyKCdzcmMnLCBgLy93d3cueW91dHViZS5jb20vZW1iZWQvJHt0aGlzLmN1cnJlbnRWaWRlby5pZH1gKTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVUaHVtYigpIHtcbiAgICAgICAgdGhpcy4kdmlkZW9zLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8uJHNlbGVjdGVkVGh1bWIuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHZpZGVvcy5vbignY2xpY2snLCB0aGlzLnNlbGVjdE5ld1ZpZGVvLmJpbmQodGhpcykpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlkZW9HYWxsZXJ5KCkge1xuICAgIGNvbnN0IHBsdWdpbktleSA9ICd2aWRlby1nYWxsZXJ5JztcbiAgICBjb25zdCAkdmlkZW9HYWxsZXJ5ID0gJChgW2RhdGEtJHtwbHVnaW5LZXl9XWApO1xuXG4gICAgJHZpZGVvR2FsbGVyeS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCAkZWwgPSAkKGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBpc0luaXRpYWxpemVkID0gJGVsLmRhdGEocGx1Z2luS2V5KSBpbnN0YW5jZW9mIFZpZGVvR2FsbGVyeTtcblxuICAgICAgICBpZiAoaXNJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJGVsLmRhdGEocGx1Z2luS2V5LCBuZXcgVmlkZW9HYWxsZXJ5KCRlbCkpO1xuICAgIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==