(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./assets/js/theme/catalog.js":
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_url_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var CatalogPage = function (_PageManager) {
    _inherits(CatalogPage, _PageManager);

    function CatalogPage() {
        _classCallCheck(this, CatalogPage);

        return _possibleConstructorReturn(this, _PageManager.apply(this, arguments));
    }

    CatalogPage.prototype.onSortBySubmit = function onSortBySubmit(event) {
        var url = url__WEBPACK_IMPORTED_MODULE_2___default.a.parse(window.location.href, true);
        var queryParams = $(event.currentTarget).serialize().split('=');

        url.query[queryParams[0]] = queryParams[1];
        delete url.query.page;

        event.preventDefault();
        window.location = url__WEBPACK_IMPORTED_MODULE_2___default.a.format({ pathname: url.pathname, search: _common_url_utils__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString(url.query) });
    };

    return CatalogPage;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (CatalogPage);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/faceted-search.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/faceted-search.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/without */ "./node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _url_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _form_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }










/**
 * Faceted search view component
 */

var FacetedSearch = function () {
    /**
     * @param {object} requestOptions - Object with options for the ajax requests
     * @param {function} callback - Function to execute after fetching templates
     * @param {object} options - Configurable options
     * @example
     *
     * let requestOptions = {
     *      templates: {
     *          productListing: 'category/product-listing',
     *          sidebar: 'category/sidebar'
     *     }
     * };
     *
     * let templatesDidLoad = function(content) {
     *     $productListingContainer.html(content.productListing);
     *     $facetedSearchContainer.html(content.sidebar);
     * };
     *
     * let facetedSearch = new FacetedSearch(requestOptions, templatesDidLoad);
     */
    function FacetedSearch(requestOptions, callback, options) {
        var _this = this;

        _classCallCheck(this, FacetedSearch);

        var defaultOptions = {
            accordionToggleSelector: '#facetedSearch .accordion-navigation, #facetedSearch .facetedSearch-toggle',
            blockerSelector: '#facetedSearch .blocker',
            clearFacetSelector: '#facetedSearch .facetedSearch-clearLink',
            componentSelector: '#facetedSearch-navList',
            facetNavListSelector: '#facetedSearch .navList',
            priceRangeErrorSelector: '#facet-range-form .form-inlineMessage',
            priceRangeFieldsetSelector: '#facet-range-form .form-fieldset',
            priceRangeFormSelector: '#facet-range-form',
            priceRangeMaxPriceSelector: '#facet-range-form [name=max_price]',
            priceRangeMinPriceSelector: '#facet-range-form [name=min_price]',
            showMoreToggleSelector: '#facetedSearch .accordion-content .toggleLink',
            facetedSearchFilterItems: '#facetedSearch-filterItems .form-input',
            modal: Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["default"])('#modal')[0],
            modalOpen: false
        };

        // Private properties
        this.requestOptions = requestOptions;
        this.callback = callback;
        this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_3___default()({}, defaultOptions, options);
        this.collapsedFacets = [];
        this.collapsedFacetItems = [];

        // Init collapsibles
        Object(_collapsible__WEBPACK_IMPORTED_MODULE_8__["default"])();

        // Init price validator
        this.initPriceValidator();

        // Show limited items by default
        $(this.options.facetNavListSelector).each(function (index, navList) {
            _this.collapseFacetItems($(navList));
        });

        // Mark initially collapsed accordions
        $(this.options.accordionToggleSelector).each(function (index, accordionToggle) {
            var $accordionToggle = $(accordionToggle);
            var collapsible = $accordionToggle.data('collapsibleInstance');

            if (collapsible.isCollapsed) {
                _this.collapsedFacets.push(collapsible.targetId);
            }
        });

        // Collapse all facets if initially hidden
        // NOTE: Need to execute after Collapsible gets bootstrapped
        setTimeout(function () {
            if ($(_this.options.componentSelector).is(':hidden')) {
                _this.collapseAllFacets();
            }
        });

        // Observe user events
        this.onStateChange = this.onStateChange.bind(this);
        this.onToggleClick = this.onToggleClick.bind(this);
        this.onAccordionToggle = this.onAccordionToggle.bind(this);
        this.onClearFacet = this.onClearFacet.bind(this);
        this.onFacetClick = this.onFacetClick.bind(this);
        this.onRangeSubmit = this.onRangeSubmit.bind(this);
        this.onSortBySubmit = this.onSortBySubmit.bind(this);
        this.filterFacetItems = this.filterFacetItems.bind(this);

        this.bindEvents();
    }

    // Public methods


    FacetedSearch.prototype.refreshView = function refreshView(content) {
        if (content) {
            this.callback(content);
        }

        // Init collapsibles
        Object(_collapsible__WEBPACK_IMPORTED_MODULE_8__["default"])();

        // Init price validator
        this.initPriceValidator();

        // Restore view state
        this.restoreCollapsedFacets();
        this.restoreCollapsedFacetItems();

        // Bind events
        this.bindEvents();
    };

    FacetedSearch.prototype.updateView = function updateView() {
        var _this2 = this;

        $(this.options.blockerSelector).show();

        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["api"].getPage(_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl(), this.requestOptions, function (err, content) {
            $(_this2.options.blockerSelector).hide();

            if (err) {
                throw new Error(err);
            }

            // Refresh view with new content
            _this2.refreshView(content);
        });
    };

    FacetedSearch.prototype.expandFacetItems = function expandFacetItems($navList) {
        var id = $navList.attr('id');

        // Remove
        this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
    };

    FacetedSearch.prototype.collapseFacetItems = function collapseFacetItems($navList) {
        var id = $navList.attr('id');
        var hasMoreResults = $navList.data('hasMoreResults');

        if (hasMoreResults) {
            this.collapsedFacetItems = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, [id]);
        } else {
            this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
        }
    };

    FacetedSearch.prototype.toggleFacetItems = function toggleFacetItems($navList) {
        var id = $navList.attr('id');

        // Toggle depending on `collapsed` flag
        if (lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacetItems, id)) {
            this.getMoreFacetResults($navList);

            return true;
        }

        this.collapseFacetItems($navList);

        return false;
    };

    FacetedSearch.prototype.getMoreFacetResults = function getMoreFacetResults($navList) {
        var _this3 = this;

        var facet = $navList.data('facet');
        var facetUrl = _url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl();

        if (this.requestOptions.showMore) {
            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["api"].getPage(facetUrl, {
                template: this.requestOptions.showMore,
                params: {
                    list_all: facet
                }
            }, function (err, response) {
                if (err) {
                    throw new Error(err);
                }

                _this3.options.modal.open();
                _this3.options.modalOpen = true;
                _this3.options.modal.updateContent(response);
            });
        }

        this.collapseFacetItems($navList);

        return false;
    };

    FacetedSearch.prototype.filterFacetItems = function filterFacetItems(event) {
        var $items = $('.navList-item');
        var query = $(event.currentTarget).val().toLowerCase();

        $items.each(function (index, element) {
            var text = $(element).text().toLowerCase();
            if (text.indexOf(query) !== -1) {
                $(element).show();
            } else {
                $(element).hide();
            }
        });
    };

    FacetedSearch.prototype.expandFacet = function expandFacet($accordionToggle) {
        var collapsible = $accordionToggle.data('collapsibleInstance');

        collapsible.open();
    };

    FacetedSearch.prototype.collapseFacet = function collapseFacet($accordionToggle) {
        var collapsible = $accordionToggle.data('collapsibleInstance');

        collapsible.close();
    };

    FacetedSearch.prototype.collapseAllFacets = function collapseAllFacets() {
        var _this4 = this;

        var $accordionToggles = $(this.options.accordionToggleSelector);

        $accordionToggles.each(function (index, accordionToggle) {
            var $accordionToggle = $(accordionToggle);

            _this4.collapseFacet($accordionToggle);
        });
    };

    FacetedSearch.prototype.expandAllFacets = function expandAllFacets() {
        var _this5 = this;

        var $accordionToggles = $(this.options.accordionToggleSelector);

        $accordionToggles.each(function (index, accordionToggle) {
            var $accordionToggle = $(accordionToggle);

            _this5.expandFacet($accordionToggle);
        });
    };

    // Private methods


    FacetedSearch.prototype.initPriceValidator = function initPriceValidator() {
        if ($(this.options.priceRangeFormSelector).length === 0) {
            return;
        }

        var validator = Object(_nod__WEBPACK_IMPORTED_MODULE_10__["default"])();
        var selectors = {
            errorSelector: this.options.priceRangeErrorSelector,
            fieldsetSelector: this.options.priceRangeFieldsetSelector,
            formSelector: this.options.priceRangeFormSelector,
            maxPriceSelector: this.options.priceRangeMaxPriceSelector,
            minPriceSelector: this.options.priceRangeMinPriceSelector
        };

        _form_utils__WEBPACK_IMPORTED_MODULE_9__["Validators"].setMinMaxPriceValidation(validator, selectors);

        this.priceRangeValidator = validator;
    };

    FacetedSearch.prototype.restoreCollapsedFacetItems = function restoreCollapsedFacetItems() {
        var _this6 = this;

        var $navLists = $(this.options.facetNavListSelector);

        // Restore collapsed state for each facet
        $navLists.each(function (index, navList) {
            var $navList = $(navList);
            var id = $navList.attr('id');
            var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this6.collapsedFacetItems, id);

            if (shouldCollapse) {
                _this6.collapseFacetItems($navList);
            } else {
                _this6.expandFacetItems($navList);
            }
        });
    };

    FacetedSearch.prototype.restoreCollapsedFacets = function restoreCollapsedFacets() {
        var _this7 = this;

        var $accordionToggles = $(this.options.accordionToggleSelector);

        $accordionToggles.each(function (index, accordionToggle) {
            var $accordionToggle = $(accordionToggle);
            var collapsible = $accordionToggle.data('collapsibleInstance');
            var id = collapsible.targetId;
            var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this7.collapsedFacets, id);

            if (shouldCollapse) {
                _this7.collapseFacet($accordionToggle);
            } else {
                _this7.expandFacet($accordionToggle);
            }
        });
    };

    FacetedSearch.prototype.bindEvents = function bindEvents() {
        // Clean-up
        this.unbindEvents();

        // DOM events
        $(window).on('statechange', this.onStateChange);
        $(document).on('click', this.options.showMoreToggleSelector, this.onToggleClick);
        $(document).on('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
        $(document).on('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
        $(this.options.clearFacetSelector).on('click', this.onClearFacet);

        // Hooks
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('facetedSearch-facet-clicked', this.onFacetClick);
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('facetedSearch-range-submitted', this.onRangeSubmit);
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    };

    FacetedSearch.prototype.unbindEvents = function unbindEvents() {
        // DOM events
        $(window).off('statechange', this.onStateChange);
        $(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
        $(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
        $(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
        $(this.options.clearFacetSelector).off('click', this.onClearFacet);

        // Hooks
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('facetedSearch-facet-clicked', this.onFacetClick);
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('facetedSearch-range-submitted', this.onRangeSubmit);
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('sortBy-submitted', this.onSortBySubmit);
    };

    FacetedSearch.prototype.onClearFacet = function onClearFacet(event) {
        var $link = $(event.currentTarget);
        var url = $link.attr('href');

        event.preventDefault();
        event.stopPropagation();

        // Update URL
        _url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url);
    };

    FacetedSearch.prototype.onToggleClick = function onToggleClick(event) {
        var $toggle = $(event.currentTarget);
        var $navList = $($toggle.attr('href'));

        // Prevent default
        event.preventDefault();

        // Toggle visible items
        this.toggleFacetItems($navList);
    };

    FacetedSearch.prototype.onFacetClick = function onFacetClick(event) {
        var $link = $(event.currentTarget);
        var url = $link.attr('href');

        event.preventDefault();

        $link.toggleClass('is-selected');

        // Update URL
        _url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url);

        if (this.options.modalOpen) {
            this.options.modal.close();
        }
    };

    FacetedSearch.prototype.onSortBySubmit = function onSortBySubmit(event) {
        var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);
        var queryParams = $(event.currentTarget).serialize().split('=');

        url.query[queryParams[0]] = queryParams[1];
        delete url.query.page;

        event.preventDefault();

        _url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5___default.a.format({ pathname: url.pathname, search: _url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(url.query) }));
    };

    FacetedSearch.prototype.onRangeSubmit = function onRangeSubmit(event) {
        event.preventDefault();

        if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_10__["default"].constants.VALID)) {
            return;
        }

        var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href);
        var queryParams = decodeURI($(event.currentTarget).serialize());

        _url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5___default.a.format({ pathname: url.pathname, search: '?' + queryParams }));
    };

    FacetedSearch.prototype.onStateChange = function onStateChange() {
        this.updateView();
    };

    FacetedSearch.prototype.onAccordionToggle = function onAccordionToggle(event) {
        var $accordionToggle = $(event.currentTarget);
        var collapsible = $accordionToggle.data('collapsibleInstance');
        var id = collapsible.targetId;

        if (collapsible.isCollapsed) {
            this.collapsedFacets = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacets, [id]);
        } else {
            this.collapsedFacets = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacets, id);
        }
    };

    return FacetedSearch;
}();

/* harmony default export */ __webpack_exports__["default"] = (FacetedSearch);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0YWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2ZhY2V0ZWQtc2VhcmNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vZm9ybS11dGlscy5qcyJdLCJuYW1lcyI6WyJDYXRhbG9nUGFnZSIsIm9uU29ydEJ5U3VibWl0IiwiZXZlbnQiLCJ1cmwiLCJVcmwiLCJwYXJzZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInF1ZXJ5UGFyYW1zIiwiJCIsImN1cnJlbnRUYXJnZXQiLCJzZXJpYWxpemUiLCJzcGxpdCIsInF1ZXJ5IiwicGFnZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybWF0IiwicGF0aG5hbWUiLCJzZWFyY2giLCJ1cmxVdGlscyIsImJ1aWxkUXVlcnlTdHJpbmciLCJQYWdlTWFuYWdlciIsIkZhY2V0ZWRTZWFyY2giLCJyZXF1ZXN0T3B0aW9ucyIsImNhbGxiYWNrIiwib3B0aW9ucyIsImRlZmF1bHRPcHRpb25zIiwiYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IiLCJibG9ja2VyU2VsZWN0b3IiLCJjbGVhckZhY2V0U2VsZWN0b3IiLCJjb21wb25lbnRTZWxlY3RvciIsImZhY2V0TmF2TGlzdFNlbGVjdG9yIiwicHJpY2VSYW5nZUVycm9yU2VsZWN0b3IiLCJwcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvciIsInByaWNlUmFuZ2VGb3JtU2VsZWN0b3IiLCJwcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvciIsInByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yIiwic2hvd01vcmVUb2dnbGVTZWxlY3RvciIsImZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcyIsIm1vZGFsIiwibW9kYWxGYWN0b3J5IiwibW9kYWxPcGVuIiwiY29sbGFwc2VkRmFjZXRzIiwiY29sbGFwc2VkRmFjZXRJdGVtcyIsImNvbGxhcHNpYmxlRmFjdG9yeSIsImluaXRQcmljZVZhbGlkYXRvciIsImVhY2giLCJpbmRleCIsIm5hdkxpc3QiLCJjb2xsYXBzZUZhY2V0SXRlbXMiLCJhY2NvcmRpb25Ub2dnbGUiLCIkYWNjb3JkaW9uVG9nZ2xlIiwiY29sbGFwc2libGUiLCJkYXRhIiwiaXNDb2xsYXBzZWQiLCJwdXNoIiwidGFyZ2V0SWQiLCJzZXRUaW1lb3V0IiwiaXMiLCJjb2xsYXBzZUFsbEZhY2V0cyIsIm9uU3RhdGVDaGFuZ2UiLCJiaW5kIiwib25Ub2dnbGVDbGljayIsIm9uQWNjb3JkaW9uVG9nZ2xlIiwib25DbGVhckZhY2V0Iiwib25GYWNldENsaWNrIiwib25SYW5nZVN1Ym1pdCIsImZpbHRlckZhY2V0SXRlbXMiLCJiaW5kRXZlbnRzIiwicmVmcmVzaFZpZXciLCJjb250ZW50IiwicmVzdG9yZUNvbGxhcHNlZEZhY2V0cyIsInJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zIiwidXBkYXRlVmlldyIsInNob3ciLCJhcGkiLCJnZXRQYWdlIiwiZ2V0VXJsIiwiZXJyIiwiaGlkZSIsIkVycm9yIiwiZXhwYW5kRmFjZXRJdGVtcyIsIiRuYXZMaXN0IiwiaWQiLCJhdHRyIiwiaGFzTW9yZVJlc3VsdHMiLCJ0b2dnbGVGYWNldEl0ZW1zIiwiZ2V0TW9yZUZhY2V0UmVzdWx0cyIsImZhY2V0IiwiZmFjZXRVcmwiLCJzaG93TW9yZSIsInRlbXBsYXRlIiwicGFyYW1zIiwibGlzdF9hbGwiLCJyZXNwb25zZSIsIm9wZW4iLCJ1cGRhdGVDb250ZW50IiwiJGl0ZW1zIiwidmFsIiwidG9Mb3dlckNhc2UiLCJlbGVtZW50IiwidGV4dCIsImluZGV4T2YiLCJleHBhbmRGYWNldCIsImNvbGxhcHNlRmFjZXQiLCJjbG9zZSIsIiRhY2NvcmRpb25Ub2dnbGVzIiwiZXhwYW5kQWxsRmFjZXRzIiwibGVuZ3RoIiwidmFsaWRhdG9yIiwibm9kIiwic2VsZWN0b3JzIiwiZXJyb3JTZWxlY3RvciIsImZpZWxkc2V0U2VsZWN0b3IiLCJmb3JtU2VsZWN0b3IiLCJtYXhQcmljZVNlbGVjdG9yIiwibWluUHJpY2VTZWxlY3RvciIsIlZhbGlkYXRvcnMiLCJzZXRNaW5NYXhQcmljZVZhbGlkYXRpb24iLCJwcmljZVJhbmdlVmFsaWRhdG9yIiwiJG5hdkxpc3RzIiwic2hvdWxkQ29sbGFwc2UiLCJ1bmJpbmRFdmVudHMiLCJvbiIsImRvY3VtZW50IiwiaG9va3MiLCJvZmYiLCIkbGluayIsInN0b3BQcm9wYWdhdGlvbiIsImdvVG9VcmwiLCIkdG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJhcmVBbGwiLCJjb25zdGFudHMiLCJWQUxJRCIsImRlY29kZVVSSSIsImlucHV0VGFnTmFtZXMiLCJjbGFzc2lmeUlucHV0IiwiaW5wdXQiLCJmb3JtRmllbGRDbGFzcyIsIiRpbnB1dCIsIiRmb3JtRmllbGQiLCJwYXJlbnQiLCJ0YWdOYW1lIiwicHJvcCIsImNsYXNzTmFtZSIsInNwZWNpZmljQ2xhc3NOYW1lIiwiaW5wdXRUeXBlIiwiYWRkQ2xhc3MiLCJjbGFzc2lmeUZvcm0iLCIkZm9ybSIsIiRpbnB1dHMiLCJmaW5kIiwiam9pbiIsIl9fIiwiZ2V0RmllbGRJZCIsIiRmaWVsZCIsImZpZWxkSWQiLCJtYXRjaCIsImluc2VydFN0YXRlSGlkZGVuRmllbGQiLCIkc3RhdGVGaWVsZCIsInN0YXRlRmllbGRBdHRycyIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJhZnRlciIsInNldEVtYWlsVmFsaWRhdGlvbiIsImZpZWxkIiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwicmVzdWx0IiwiZm9ybXMiLCJlbWFpbCIsImVycm9yTWVzc2FnZSIsInNldFBhc3N3b3JkVmFsaWRhdGlvbiIsInBhc3N3b3JkU2VsZWN0b3IiLCJwYXNzd29yZDJTZWxlY3RvciIsInJlcXVpcmVtZW50cyIsImlzT3B0aW9uYWwiLCIkcGFzc3dvcmQiLCJwYXNzd29yZFZhbGlkYXRpb25zIiwiUmVnRXhwIiwiYWxwaGEiLCJudW1lcmljIiwibWlubGVuZ3RoIiwiZXJyb3IiLCJjb25maWd1cmUiLCJmb3JtIiwicHJldmVudFN1Ym1pdCIsInN1Y2Nlc3NDbGFzcyIsInNldE1lc3NhZ2VPcHRpb25zIiwiZXJyb3JTcGFuIiwic2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbiIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCIkZmllbGRDbGFzc0VsZW1lbnQiLCJPYmplY3QiLCJrZXlzIiwiY2xhc3NlcyIsImZvckVhY2giLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRXFCQSxXOzs7Ozs7Ozs7MEJBQ2pCQyxjLDJCQUFlQyxLLEVBQU87QUFDbEIsWUFBTUMsTUFBTUMsMENBQUdBLENBQUNDLEtBQUosQ0FBVUMsT0FBT0MsUUFBUCxDQUFnQkMsSUFBMUIsRUFBZ0MsSUFBaEMsQ0FBWjtBQUNBLFlBQU1DLGNBQWNDLEVBQUVSLE1BQU1TLGFBQVIsRUFBdUJDLFNBQXZCLEdBQW1DQyxLQUFuQyxDQUF5QyxHQUF6QyxDQUFwQjs7QUFFQVYsWUFBSVcsS0FBSixDQUFVTCxZQUFZLENBQVosQ0FBVixJQUE0QkEsWUFBWSxDQUFaLENBQTVCO0FBQ0EsZUFBT04sSUFBSVcsS0FBSixDQUFVQyxJQUFqQjs7QUFFQWIsY0FBTWMsY0FBTjtBQUNBVixlQUFPQyxRQUFQLEdBQWtCSCwwQ0FBR0EsQ0FBQ2EsTUFBSixDQUFXLEVBQUVDLFVBQVVmLElBQUllLFFBQWhCLEVBQTBCQyxRQUFRQyx5REFBUUEsQ0FBQ0MsZ0JBQVQsQ0FBMEJsQixJQUFJVyxLQUE5QixDQUFsQyxFQUFYLENBQWxCO0FBQ0gsSzs7O0VBVm9DUSxxRDs7QUFBcEJ0QiwwRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7SUFHTXVCLGE7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkEsMkJBQVlDLGNBQVosRUFBNEJDLFFBQTVCLEVBQXNDQyxPQUF0QyxFQUErQztBQUFBOztB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QUNwQyxLQUFELEVBQVc7QUFDeEMsZ0JBQUlnQyxtQkFBbUJLLFFBQW5CLENBQTRCM0YsNENBQUdBLENBQUN5RixPQUFKLENBQVluQyxLQUFaLENBQTVCLENBQUosRUFBcUQ7QUFDakRnQyxtQ0FBbUJNLFdBQW5CLENBQStCNUYsNENBQUdBLENBQUN5RixPQUFKLENBQVluQyxLQUFaLENBQS9CO0FBQ0g7QUFDSixTQUpEO0FBS0g7QUFoTGMsQ0FBbkIiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vY29tbW9uL3VybC11dGlscyc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGFsb2dQYWdlIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIG9uU29ydEJ5U3VibWl0KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKS5zcGxpdCgnPScpO1xuXG4gICAgICAgIHVybC5xdWVyeVtxdWVyeVBhcmFtc1swXV0gPSBxdWVyeVBhcmFtc1sxXTtcbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5wYWdlO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KSB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBob29rcywgYXBpIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL3VybC11dGlscyc7XG5pbXBvcnQgbW9kYWxGYWN0b3J5IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29sbGFwc2libGUnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJy4vZm9ybS11dGlscyc7XG5pbXBvcnQgbm9kIGZyb20gJy4vbm9kJztcblxuLyoqXG4gKiBGYWNldGVkIHNlYXJjaCB2aWV3IGNvbXBvbmVudFxuICovXG5jbGFzcyBGYWNldGVkU2VhcmNoIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVxdWVzdE9wdGlvbnMgLSBPYmplY3Qgd2l0aCBvcHRpb25zIGZvciB0aGUgYWpheCByZXF1ZXN0c1xuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gZXhlY3V0ZSBhZnRlciBmZXRjaGluZyB0ZW1wbGF0ZXNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIENvbmZpZ3VyYWJsZSBvcHRpb25zXG4gICAgICogQGV4YW1wbGVcbiAgICAgKlxuICAgICAqIGxldCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgKiAgICAgIHRlbXBsYXRlczoge1xuICAgICAqICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgKiAgICAgICAgICBzaWRlYmFyOiAnY2F0ZWdvcnkvc2lkZWJhcidcbiAgICAgKiAgICAgfVxuICAgICAqIH07XG4gICAgICpcbiAgICAgKiBsZXQgdGVtcGxhdGVzRGlkTG9hZCA9IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgKiAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICogICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcbiAgICAgKiB9O1xuICAgICAqXG4gICAgICogbGV0IGZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgdGVtcGxhdGVzRGlkTG9hZCk7XG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVxdWVzdE9wdGlvbnMsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYWNjb3JkaW9uLW5hdmlnYXRpb24sICNmYWNldGVkU2VhcmNoIC5mYWNldGVkU2VhcmNoLXRvZ2dsZScsXG4gICAgICAgICAgICBibG9ja2VyU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYmxvY2tlcicsXG4gICAgICAgICAgICBjbGVhckZhY2V0U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuZmFjZXRlZFNlYXJjaC1jbGVhckxpbmsnLFxuICAgICAgICAgICAgY29tcG9uZW50U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaC1uYXZMaXN0JyxcbiAgICAgICAgICAgIGZhY2V0TmF2TGlzdFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLm5hdkxpc3QnLFxuICAgICAgICAgICAgcHJpY2VSYW5nZUVycm9yU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSAuZm9ybS1pbmxpbmVNZXNzYWdlJyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gLmZvcm0tZmllbGRzZXQnLFxuICAgICAgICAgICAgcHJpY2VSYW5nZUZvcm1TZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtJyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9bWF4X3ByaWNlXScsXG4gICAgICAgICAgICBwcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPW1pbl9wcmljZV0nLFxuICAgICAgICAgICAgc2hvd01vcmVUb2dnbGVTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5hY2NvcmRpb24tY29udGVudCAudG9nZ2xlTGluaycsXG4gICAgICAgICAgICBmYWNldGVkU2VhcmNoRmlsdGVySXRlbXM6ICcjZmFjZXRlZFNlYXJjaC1maWx0ZXJJdGVtcyAuZm9ybS1pbnB1dCcsXG4gICAgICAgICAgICBtb2RhbDogbW9kYWxGYWN0b3J5KCcjbW9kYWwnKVswXSxcbiAgICAgICAgICAgIG1vZGFsT3BlbjogZmFsc2UsXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUHJpdmF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMucmVxdWVzdE9wdGlvbnMgPSByZXF1ZXN0T3B0aW9ucztcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBfLmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IFtdO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBbXTtcblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICAvLyBJbml0IHByaWNlIHZhbGlkYXRvclxuICAgICAgICB0aGlzLmluaXRQcmljZVZhbGlkYXRvcigpO1xuXG4gICAgICAgIC8vIFNob3cgbGltaXRlZCBpdGVtcyBieSBkZWZhdWx0XG4gICAgICAgICQodGhpcy5vcHRpb25zLmZhY2V0TmF2TGlzdFNlbGVjdG9yKS5lYWNoKChpbmRleCwgbmF2TGlzdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJChuYXZMaXN0KSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE1hcmsgaW5pdGlhbGx5IGNvbGxhcHNlZCBhY2NvcmRpb25zXG4gICAgICAgICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKS5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICAgICAgaWYgKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMucHVzaChjb2xsYXBzaWJsZS50YXJnZXRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENvbGxhcHNlIGFsbCBmYWNldHMgaWYgaW5pdGlhbGx5IGhpZGRlblxuICAgICAgICAvLyBOT1RFOiBOZWVkIHRvIGV4ZWN1dGUgYWZ0ZXIgQ29sbGFwc2libGUgZ2V0cyBib290c3RyYXBwZWRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzLm9wdGlvbnMuY29tcG9uZW50U2VsZWN0b3IpLmlzKCc6aGlkZGVuJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlQWxsRmFjZXRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE9ic2VydmUgdXNlciBldmVudHNcbiAgICAgICAgdGhpcy5vblN0YXRlQ2hhbmdlID0gdGhpcy5vblN0YXRlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Ub2dnbGVDbGljayA9IHRoaXMub25Ub2dnbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlID0gdGhpcy5vbkFjY29yZGlvblRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2xlYXJGYWNldCA9IHRoaXMub25DbGVhckZhY2V0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25GYWNldENsaWNrID0gdGhpcy5vbkZhY2V0Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblJhbmdlU3VibWl0ID0gdGhpcy5vblJhbmdlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyA9IHRoaXMuZmlsdGVyRmFjZXRJdGVtcy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIC8vIFB1YmxpYyBtZXRob2RzXG4gICAgcmVmcmVzaFZpZXcoY29udGVudCkge1xuICAgICAgICBpZiAoY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayhjb250ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgIC8vIEluaXQgcHJpY2UgdmFsaWRhdG9yXG4gICAgICAgIHRoaXMuaW5pdFByaWNlVmFsaWRhdG9yKCk7XG5cbiAgICAgICAgLy8gUmVzdG9yZSB2aWV3IHN0YXRlXG4gICAgICAgIHRoaXMucmVzdG9yZUNvbGxhcHNlZEZhY2V0cygpO1xuICAgICAgICB0aGlzLnJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zKCk7XG5cbiAgICAgICAgLy8gQmluZCBldmVudHNcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVmlldygpIHtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuYmxvY2tlclNlbGVjdG9yKS5zaG93KCk7XG5cbiAgICAgICAgYXBpLmdldFBhZ2UodXJsVXRpbHMuZ2V0VXJsKCksIHRoaXMucmVxdWVzdE9wdGlvbnMsIChlcnIsIGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICQodGhpcy5vcHRpb25zLmJsb2NrZXJTZWxlY3RvcikuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlZnJlc2ggdmlldyB3aXRoIG5ldyBjb250ZW50XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hWaWV3KGNvbnRlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBhbmRGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcblxuICAgICAgICAvLyBSZW1vdmVcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG4gICAgICAgIGNvbnN0IGhhc01vcmVSZXN1bHRzID0gJG5hdkxpc3QuZGF0YSgnaGFzTW9yZVJlc3VsdHMnKTtcblxuICAgICAgICBpZiAoaGFzTW9yZVJlc3VsdHMpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8udW5pb24odGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBbaWRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSBkZXBlbmRpbmcgb24gYGNvbGxhcHNlZGAgZmxhZ1xuICAgICAgICBpZiAoXy5pbmNsdWRlcyh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKSkge1xuICAgICAgICAgICAgdGhpcy5nZXRNb3JlRmFjZXRSZXN1bHRzKCRuYXZMaXN0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgZmFjZXQgPSAkbmF2TGlzdC5kYXRhKCdmYWNldCcpO1xuICAgICAgICBjb25zdCBmYWNldFVybCA9IHVybFV0aWxzLmdldFVybCgpO1xuXG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlKSB7XG4gICAgICAgICAgICBhcGkuZ2V0UGFnZShmYWNldFVybCwge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBsaXN0X2FsbDogZmFjZXQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwub3BlbigpO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbE9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmaWx0ZXJGYWNldEl0ZW1zKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRpdGVtcyA9ICQoJy5uYXZMaXN0LWl0ZW0nKTtcbiAgICAgICAgY29uc3QgcXVlcnkgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgJGl0ZW1zLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gJChlbGVtZW50KS50ZXh0KCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmICh0ZXh0LmluZGV4T2YocXVlcnkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSkge1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuXG4gICAgICAgIGNvbGxhcHNpYmxlLm9wZW4oKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICBjb2xsYXBzaWJsZS5jbG9zZSgpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlQWxsRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEFsbEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcblxuICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZSBtZXRob2RzXG4gICAgaW5pdFByaWNlVmFsaWRhdG9yKCkge1xuICAgICAgICBpZiAoJCh0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSBub2QoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JzID0ge1xuICAgICAgICAgICAgZXJyb3JTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VFcnJvclNlbGVjdG9yLFxuICAgICAgICAgICAgZmllbGRzZXRTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZm9ybVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIG1heFByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIG1pblByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgfTtcblxuICAgICAgICBWYWxpZGF0b3JzLnNldE1pbk1heFByaWNlVmFsaWRhdGlvbih2YWxpZGF0b3IsIHNlbGVjdG9ycyk7XG5cbiAgICAgICAgdGhpcy5wcmljZVJhbmdlVmFsaWRhdG9yID0gdmFsaWRhdG9yO1xuICAgIH1cblxuICAgIHJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zKCkge1xuICAgICAgICBjb25zdCAkbmF2TGlzdHMgPSAkKHRoaXMub3B0aW9ucy5mYWNldE5hdkxpc3RTZWxlY3Rvcik7XG5cbiAgICAgICAgLy8gUmVzdG9yZSBjb2xsYXBzZWQgc3RhdGUgZm9yIGVhY2ggZmFjZXRcbiAgICAgICAgJG5hdkxpc3RzLmVhY2goKGluZGV4LCBuYXZMaXN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkbmF2TGlzdCA9ICQobmF2TGlzdCk7XG4gICAgICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRDb2xsYXBzZSA9IF8uaW5jbHVkZXModGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XG5cbiAgICAgICAgICAgIGlmIChzaG91bGRDb2xsYXBzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldEl0ZW1zKCRuYXZMaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzdG9yZUNvbGxhcHNlZEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGNvbGxhcHNpYmxlLnRhcmdldElkO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkQ29sbGFwc2UgPSBfLmluY2x1ZGVzKHRoaXMuY29sbGFwc2VkRmFjZXRzLCBpZCk7XG5cbiAgICAgICAgICAgIGlmIChzaG91bGRDb2xsYXBzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgLy8gQ2xlYW4tdXBcbiAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcblxuICAgICAgICAvLyBET00gZXZlbnRzXG4gICAgICAgICQod2luZG93KS5vbignc3RhdGVjaGFuZ2UnLCB0aGlzLm9uU3RhdGVDaGFuZ2UpO1xuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCB0aGlzLm9wdGlvbnMuc2hvd01vcmVUb2dnbGVTZWxlY3RvciwgdGhpcy5vblRvZ2dsZUNsaWNrKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ3RvZ2dsZS5jb2xsYXBzaWJsZScsIHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvciwgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsIHRoaXMub3B0aW9ucy5mYWNldGVkU2VhcmNoRmlsdGVySXRlbXMsIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyk7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmNsZWFyRmFjZXRTZWxlY3Rvcikub24oJ2NsaWNrJywgdGhpcy5vbkNsZWFyRmFjZXQpO1xuXG4gICAgICAgIC8vIEhvb2tzXG4gICAgICAgIGhvb2tzLm9uKCdmYWNldGVkU2VhcmNoLWZhY2V0LWNsaWNrZWQnLCB0aGlzLm9uRmFjZXRDbGljayk7XG4gICAgICAgIGhvb2tzLm9uKCdmYWNldGVkU2VhcmNoLXJhbmdlLXN1Ym1pdHRlZCcsIHRoaXMub25SYW5nZVN1Ym1pdCk7XG4gICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICAvLyBET00gZXZlbnRzXG4gICAgICAgICQod2luZG93KS5vZmYoJ3N0YXRlY2hhbmdlJywgdGhpcy5vblN0YXRlQ2hhbmdlKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljaycsIHRoaXMub3B0aW9ucy5zaG93TW9yZVRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uVG9nZ2xlQ2xpY2spO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ3RvZ2dsZS5jb2xsYXBzaWJsZScsIHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvciwgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZigna2V5dXAnLCB0aGlzLm9wdGlvbnMuZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zLCB0aGlzLmZpbHRlckZhY2V0SXRlbXMpO1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5jbGVhckZhY2V0U2VsZWN0b3IpLm9mZignY2xpY2snLCB0aGlzLm9uQ2xlYXJGYWNldCk7XG5cbiAgICAgICAgLy8gSG9va3NcbiAgICAgICAgaG9va3Mub2ZmKCdmYWNldGVkU2VhcmNoLWZhY2V0LWNsaWNrZWQnLCB0aGlzLm9uRmFjZXRDbGljayk7XG4gICAgICAgIGhvb2tzLm9mZignZmFjZXRlZFNlYXJjaC1yYW5nZS1zdWJtaXR0ZWQnLCB0aGlzLm9uUmFuZ2VTdWJtaXQpO1xuICAgICAgICBob29rcy5vZmYoJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICB9XG5cbiAgICBvbkNsZWFyRmFjZXQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGxpbmsgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCB1cmwgPSAkbGluay5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIFVSTFxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG4gICAgfVxuXG4gICAgb25Ub2dnbGVDbGljayhldmVudCkge1xuICAgICAgICBjb25zdCAkdG9nZ2xlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgJG5hdkxpc3QgPSAkKCR0b2dnbGUuYXR0cignaHJlZicpKTtcblxuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHRcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBUb2dnbGUgdmlzaWJsZSBpdGVtc1xuICAgICAgICB0aGlzLnRvZ2dsZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgIH1cblxuICAgIG9uRmFjZXRDbGljayhldmVudCkge1xuICAgICAgICBjb25zdCAkbGluayA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHVybCA9ICRsaW5rLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICRsaW5rLnRvZ2dsZUNsYXNzKCdpcy1zZWxlY3RlZCcpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBVUkxcbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubW9kYWxPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU29ydEJ5U3VibWl0KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKS5zcGxpdCgnPScpO1xuXG4gICAgICAgIHVybC5xdWVyeVtxdWVyeVBhcmFtc1swXV0gPSBxdWVyeVBhcmFtc1sxXTtcbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5wYWdlO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSkgfSkpO1xuICAgIH1cblxuICAgIG9uUmFuZ2VTdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoIXRoaXMucHJpY2VSYW5nZVZhbGlkYXRvci5hcmVBbGwobm9kLmNvbnN0YW50cy5WQUxJRCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gZGVjb2RlVVJJKCQoZXZlbnQuY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkpO1xuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwoVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogYD8ke3F1ZXJ5UGFyYW1zfWAgfSkpO1xuICAgIH1cblxuICAgIG9uU3RhdGVDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgIH1cblxuICAgIG9uQWNjb3JkaW9uVG9nZ2xlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuICAgICAgICBjb25zdCBpZCA9IGNvbGxhcHNpYmxlLnRhcmdldElkO1xuXG4gICAgICAgIGlmIChjb2xsYXBzaWJsZS5pc0NvbGxhcHNlZCkge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBfLnVuaW9uKHRoaXMuY29sbGFwc2VkRmFjZXRzLCBbaWRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRzLCBpZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZhY2V0ZWRTZWFyY2g7XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG5vZCBmcm9tICcuL25vZCc7XG5pbXBvcnQgZm9ybXMgZnJvbSAnLi9tb2RlbHMvZm9ybXMnO1xuXG5jb25zdCBpbnB1dFRhZ05hbWVzID0gW1xuICAgICdpbnB1dCcsXG4gICAgJ3NlbGVjdCcsXG4gICAgJ3RleHRhcmVhJyxcbl07XG5cbi8qKlxuICogQXBwbHkgY2xhc3MgbmFtZSB0byBhbiBpbnB1dCBlbGVtZW50IG9uIGl0cyB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gaW5wdXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtRmllbGRDbGFzc1xuICogQHJldHVybiB7b2JqZWN0fSBFbGVtZW50IGl0c2VsZlxuICovXG5mdW5jdGlvbiBjbGFzc2lmeUlucHV0KGlucHV0LCBmb3JtRmllbGRDbGFzcykge1xuICAgIGNvbnN0ICRpbnB1dCA9ICQoaW5wdXQpO1xuICAgIGNvbnN0ICRmb3JtRmllbGQgPSAkaW5wdXQucGFyZW50KGAuJHtmb3JtRmllbGRDbGFzc31gKTtcbiAgICBjb25zdCB0YWdOYW1lID0gJGlucHV0LnByb3AoJ3RhZ05hbWUnKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgbGV0IGNsYXNzTmFtZSA9IGAke2Zvcm1GaWVsZENsYXNzfS0tJHt0YWdOYW1lfWA7XG4gICAgbGV0IHNwZWNpZmljQ2xhc3NOYW1lO1xuXG4gICAgLy8gSW5wdXQgY2FuIGJlIHRleHQvY2hlY2tib3gvcmFkaW8gZXRjLi4uXG4gICAgaWYgKHRhZ05hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgY29uc3QgaW5wdXRUeXBlID0gJGlucHV0LnByb3AoJ3R5cGUnKTtcblxuICAgICAgICBpZiAoXy5pbmNsdWRlcyhbJ3JhZGlvJywgJ2NoZWNrYm94JywgJ3N1Ym1pdCddLCBpbnB1dFR5cGUpKSB7XG4gICAgICAgICAgICAvLyBpZTogLmZvcm0tZmllbGQtLWNoZWNrYm94LCAuZm9ybS1maWVsZC0tcmFkaW9cbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGAke2Zvcm1GaWVsZENsYXNzfS0tJHtfLmNhbWVsQ2FzZShpbnB1dFR5cGUpfWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBpZTogLmZvcm0tZmllbGQtLWlucHV0IC5mb3JtLWZpZWxkLS1pbnB1dFRleHRcbiAgICAgICAgICAgIHNwZWNpZmljQ2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lfSR7Xy5jYXBpdGFsaXplKGlucHV0VHlwZSl9YDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFwcGx5IGNsYXNzIG1vZGlmaWVyXG4gICAgcmV0dXJuICRmb3JtRmllbGRcbiAgICAgICAgLmFkZENsYXNzKGNsYXNzTmFtZSlcbiAgICAgICAgLmFkZENsYXNzKHNwZWNpZmljQ2xhc3NOYW1lKTtcbn1cblxuLyoqXG4gKiBBcHBseSBjbGFzcyBuYW1lIHRvIGVhY2ggaW5wdXQgZWxlbWVudCBpbiBhIGZvcm0gYmFzZWQgb24gaXRzIHR5cGVcbiAqIEBleGFtcGxlXG4gKiAvLyBCZWZvcmVcbiAqIDxmb3JtIGlkPVwiZm9ybVwiPlxuICogICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkXCI+XG4gKiAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPlxuICogICAgIDwvZGl2PlxuICogICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkXCI+XG4gKiAgICAgICAgIDxzZWxlY3Q+Li4uPC9zZWxlY3Q+XG4gKiAgICAgPC9kaXY+XG4gKiA8L2Zvcm0+XG4gKlxuICogY2xhc3NpZnlGb3JtKCcjZm9ybScsIHsgZm9ybUZpZWxkQ2xhc3M6ICdmb3JtLWZpZWxkJyB9KTtcbiAqXG4gKiAvLyBBZnRlclxuICogPGRpdiBjbGFzcz1cImZvcm0tZmllbGQgZm9ybS1maWVsZC0taW5wdXQgZm9ybS1maWVsZC0taW5wdXRUZXh0XCI+Li4uPC9kaXY+XG4gKiA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZCBmb3JtLWZpZWxkLS1zZWxlY3RcIj4uLi48L2Rpdj5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IGZvcm1TZWxlY3RvciAtIHNlbGVjdG9yIG9yIGVsZW1lbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtqUXVlcnl9IEVsZW1lbnQgaXRzZWxmXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2lmeUZvcm0oZm9ybVNlbGVjdG9yLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCAkZm9ybSA9ICQoZm9ybVNlbGVjdG9yKTtcbiAgICBjb25zdCAkaW5wdXRzID0gJGZvcm0uZmluZChpbnB1dFRhZ05hbWVzLmpvaW4oJywgJykpO1xuXG4gICAgLy8gT2J0YWluIG9wdGlvbnNcbiAgICBjb25zdCB7IGZvcm1GaWVsZENsYXNzID0gJ2Zvcm0tZmllbGQnIH0gPSBvcHRpb25zO1xuXG4gICAgLy8gQ2xhc3NpZnkgZWFjaCBpbnB1dCBpbiBhIGZvcm1cbiAgICAkaW5wdXRzLmVhY2goKF9fLCBpbnB1dCkgPT4ge1xuICAgICAgICBjbGFzc2lmeUlucHV0KGlucHV0LCBmb3JtRmllbGRDbGFzcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gJGZvcm07XG59XG5cbi8qKlxuICogR2V0IGlkIGZyb20gZ2l2ZW4gZmllbGRcbiAqIEBwYXJhbSB7b2JqZWN0fSAkZmllbGQgSlF1ZXJ5IGZpZWxkIG9iamVjdFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRGaWVsZElkKCRmaWVsZCkge1xuICAgIGNvbnN0IGZpZWxkSWQgPSAkZmllbGQucHJvcCgnbmFtZScpLm1hdGNoKC8oXFxbLipcXF0pLyk7XG5cbiAgICBpZiAoZmllbGRJZCAmJiBmaWVsZElkLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gZmllbGRJZFswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogSW5zZXJ0IGhpZGRlbiBmaWVsZCBhZnRlciBTdGF0ZS9Qcm92aW5jZSBmaWVsZFxuICogQHBhcmFtIHtvYmplY3R9ICRzdGF0ZUZpZWxkIEpRdWVyeSBmaWVsZCBvYmplY3RcbiAqL1xuZnVuY3Rpb24gaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCgkc3RhdGVGaWVsZCkge1xuICAgIGNvbnN0IGZpZWxkSWQgPSBnZXRGaWVsZElkKCRzdGF0ZUZpZWxkKTtcbiAgICBjb25zdCBzdGF0ZUZpZWxkQXR0cnMgPSB7XG4gICAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgICBuYW1lOiBgRm9ybUZpZWxkSXNUZXh0JHtmaWVsZElkfWAsXG4gICAgICAgIHZhbHVlOiAnMScsXG4gICAgfTtcblxuICAgICRzdGF0ZUZpZWxkLmFmdGVyKCQoJzxpbnB1dCAvPicsIHN0YXRlRmllbGRBdHRycykpO1xufVxuXG5jb25zdCBWYWxpZGF0b3JzID0ge1xuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSBuZXcgdmFsaWRhdGlvbiB3aGVuIHRoZSBmb3JtIGlzIGRpcnR5XG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqL1xuICAgIHNldEVtYWlsVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1zLmVtYWlsKHZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdSBtdXN0IGVudGVyIGEgdmFsaWQgZW1haWwuJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlIHBhc3N3b3JkIGZpZWxkc1xuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gcGFzc3dvcmRTZWxlY3RvclxuICAgICAqIEBwYXJhbSBwYXNzd29yZDJTZWxlY3RvclxuICAgICAqIEBwYXJhbSByZXF1aXJlbWVudHNcbiAgICAgKiBAcGFyYW0gaXNPcHRpb25hbFxuICAgICAqL1xuICAgIHNldFBhc3N3b3JkVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgcGFzc3dvcmRTZWxlY3RvciwgcGFzc3dvcmQyU2VsZWN0b3IsIHJlcXVpcmVtZW50cywgaXNPcHRpb25hbCkgPT4ge1xuICAgICAgICBjb25zdCAkcGFzc3dvcmQgPSAkKHBhc3N3b3JkU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBwYXNzd29yZFZhbGlkYXRpb25zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZFNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2IodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnWW91IG11c3QgZW50ZXIgYSBwYXNzd29yZC4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLm1hdGNoKG5ldyBSZWdFeHAocmVxdWlyZW1lbnRzLmFscGhhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHZhbC5tYXRjaChuZXcgUmVnRXhwKHJlcXVpcmVtZW50cy5udW1lcmljKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHZhbC5sZW5ndGggPj0gcmVxdWlyZW1lbnRzLm1pbmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBvcHRpb25hbCBhbmQgbm90aGluZyBlbnRlcmVkLCBpdCBpcyB2YWxpZFxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCAmJiB2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2IodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiByZXF1aXJlbWVudHMuZXJyb3IsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdSBtdXN0IGVudGVyIGEgcGFzc3dvcmQuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkMlNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwgPT09ICRwYXNzd29yZC52YWwoKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnWW91ciBwYXNzd29yZHMgZG8gbm90IG1hdGNoLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQocGFzc3dvcmRWYWxpZGF0aW9ucyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlIHBhc3N3b3JkIGZpZWxkc1xuICAgICAqIEBwYXJhbSB7Tm9kfSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc2VsZWN0b3JzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5lcnJvclNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5maWVsZHNldFNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5mb3JtU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLm1heFByaWNlU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLm1pblByaWNlU2VsZWN0b3JcbiAgICAgKi9cbiAgICBzZXRNaW5NYXhQcmljZVZhbGlkYXRpb246ICh2YWxpZGF0b3IsIHNlbGVjdG9ycykgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBlcnJvclNlbGVjdG9yLFxuICAgICAgICAgICAgZmllbGRzZXRTZWxlY3RvcixcbiAgICAgICAgICAgIGZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIG1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICBtaW5QcmljZVNlbGVjdG9yLFxuICAgICAgICB9ID0gc2VsZWN0b3JzO1xuXG4gICAgICAgIHZhbGlkYXRvci5jb25maWd1cmUoe1xuICAgICAgICAgICAgZm9ybTogZm9ybVNlbGVjdG9yLFxuICAgICAgICAgICAgcHJldmVudFN1Ym1pdDogdHJ1ZSxcbiAgICAgICAgICAgIHN1Y2Nlc3NDbGFzczogJ18nLCAvLyBLTFVER0U6IERvbid0IGFwcGx5IHN1Y2Nlc3MgY2xhc3NcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdNaW4gcHJpY2UgbXVzdCBiZSBsZXNzIHRoYW4gbWF4LiBwcmljZS4nLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogYG1pbi1tYXg6JHttaW5QcmljZVNlbGVjdG9yfToke21heFByaWNlU2VsZWN0b3J9YCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdNaW4gcHJpY2UgbXVzdCBiZSBsZXNzIHRoYW4gbWF4LiBwcmljZS4nLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogYG1pbi1tYXg6JHttaW5QcmljZVNlbGVjdG9yfToke21heFByaWNlU2VsZWN0b3J9YCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdNYXguIHByaWNlIGlzIHJlcXVpcmVkLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01pbi4gcHJpY2UgaXMgcmVxdWlyZWQuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtaW5QcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnSW5wdXQgbXVzdCBiZSBncmVhdGVyIHRoYW4gMC4nLFxuICAgICAgICAgICAgc2VsZWN0b3I6IFttaW5QcmljZVNlbGVjdG9yLCBtYXhQcmljZVNlbGVjdG9yXSxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAnbWluLW51bWJlcjowJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLnNldE1lc3NhZ2VPcHRpb25zKHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBbbWluUHJpY2VTZWxlY3RvciwgbWF4UHJpY2VTZWxlY3Rvcl0sXG4gICAgICAgICAgICBwYXJlbnQ6IGZpZWxkc2V0U2VsZWN0b3IsXG4gICAgICAgICAgICBlcnJvclNwYW46IGVycm9yU2VsZWN0b3IsXG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgbmV3IHZhbGlkYXRpb24gd2hlbiB0aGUgZm9ybSBpcyBkaXJ0eVxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBzZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCkgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdUaGUgXFwnU3RhdGUvUHJvdmluY2VcXCcgZmllbGQgY2Fubm90IGJlIGJsYW5rLicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGNsYXNzZXMgZnJvbSBkaXJ0eSBmb3JtIGlmIHByZXZpb3VzbHkgY2hlY2tlZFxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqL1xuICAgIGNsZWFuVXBTdGF0ZVZhbGlkYXRpb246IChmaWVsZCkgPT4ge1xuICAgICAgICBjb25zdCAkZmllbGRDbGFzc0VsZW1lbnQgPSAkKChgW2RhdGEtdHlwZT1cIiR7ZmllbGQuZGF0YSgnZmllbGRUeXBlJyl9XCJdYCkpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKG5vZC5jbGFzc2VzKS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCRmaWVsZENsYXNzRWxlbWVudC5oYXNDbGFzcyhub2QuY2xhc3Nlc1t2YWx1ZV0pKSB7XG4gICAgICAgICAgICAgICAgJGZpZWxkQ2xhc3NFbGVtZW50LnJlbW92ZUNsYXNzKG5vZC5jbGFzc2VzW3ZhbHVlXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG59O1xuXG5leHBvcnQgeyBWYWxpZGF0b3JzLCBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIH07XG4iXSwic291cmNlUm9vdCI6IiJ9