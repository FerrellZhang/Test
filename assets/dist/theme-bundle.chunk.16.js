(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
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
/* harmony import */ var _b2b_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./b2b/config */ "./assets/js/theme/b2b/config.js");
/* harmony import */ var _b2b_tools_jqPaginator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./b2b/tools/jqPaginator.js */ "./assets/js/theme/b2b/tools/jqPaginator.js");
/* harmony import */ var _b2b_tools_jqPaginator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_b2b_tools_jqPaginator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _b2b_prices_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./b2b/prices-style */ "./assets/js/theme/b2b/prices-style.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Category = function (_CatalogPage) {
    _inherits(Category, _CatalogPage);

    function Category() {
        _classCallCheck(this, Category);

        return _possibleConstructorReturn(this, _CatalogPage.apply(this, arguments));
    }

    Category.prototype.onReady = function onReady() {
        if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#facetedSearch').length > 0) {
            this.initFacetedSearch();
        } else {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
        }

        // for bundleb2b
        this.gCatalogId;
        this.gCategoryId = this.context.categoryId;
        this.gCatalogProducts;
        this.selectedFacets = {};
        this.pageSize = 30;
        this.pageNumber = 1;
        this.sortField = 'updated_date.keyword';
        this.sortOrder = 'asc';
        this.initB2bFeature();
    };

    // for bundleb2b


    Category.prototype.initB2bFeature_o = function initB2bFeature_o() {
        if (sessionStorage.getItem("bundleb2b_user") && sessionStorage.getItem("bundleb2b_user") != "none") {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()("#product-listing-container .productGrid").empty();
            jquery__WEBPACK_IMPORTED_MODULE_2___default()(".pagination").hide();

            if (sessionStorage.getItem("catalog_id")) {
                jquery__WEBPACK_IMPORTED_MODULE_2___default()("#product-listing-container").append('<div class="pagination">\n                <ul class="pagination-list" id="jqPagination"></ul>\n                </div>');
                this.getAllProductsApi();
            } else {
                jquery__WEBPACK_IMPORTED_MODULE_2___default()(".catalog-listing-wrap").html("We can't find products matching the selection.");
            }
        }
    };

    Category.prototype.initB2bFeature = function initB2bFeature() {
        var _this2 = this;

        if (sessionStorage.getItem("bundleb2b_user") && sessionStorage.getItem("bundleb2b_user") != "none") {
            var b2bUserInfo = JSON.parse(sessionStorage.getItem("bundleb2b_user"));
            if (b2bUserInfo.catalog_id) {
                this.gCatalogId = b2bUserInfo.catalog_id;
            }
            if (sessionStorage.getItem("catalog_id")) {
                this.gCatalogId = sessionStorage.getItem("catalog_id");
            }

            this.gCatalogProducts = JSON.parse(sessionStorage.getItem("catalog_products") || "{}");

            jquery__WEBPACK_IMPORTED_MODULE_2___default()(".page").addClass("b2b-search-page").html('<aside class="page-sidebar-b2b" id="faceted-search-container-b2b">\n                <div class="page-sidebar-inner" id="product-filters-container">\n                </div>\n            </aside>\n            <section class="page-content">\n                <div id="b2b_search_result">\n                    <ul class="productGrid">\n                        <li></li>\n                    </ul>\n                    <ul class="pagination-list" id="jqPagination"></ul>\n\n                </div>\n            </scetion>');

            var filterString = '&filtersBy={"category_id":"' + this.gCategoryId + '"}';
            var ajaxUrl = _b2b_config__WEBPACK_IMPORTED_MODULE_6__["default"].apiRootUrl + '/search?store_hash=' + _b2b_config__WEBPACK_IMPORTED_MODULE_6__["default"].storeHash + '&is_facets=1&catalog_id=' + this.gCatalogId + filterString + '&pageNumber=' + this.pageNumber + '&pageSize=' + this.pageSize + '&sortField=' + this.sortField + '&sortOrder=' + this.sortOrder;
            ajaxUrl = encodeURI(ajaxUrl);

            this.search(ajaxUrl).then(function (res) {
                _this2.changeSort();
                _this2._initFacets(res);
                _this2._initProducts(res);

                if (res.total_count == 0) {
                    jquery__WEBPACK_IMPORTED_MODULE_2___default()("#jqPagination").html("");
                    jquery__WEBPACK_IMPORTED_MODULE_2___default()(".page-sidebar-b2b").remove();
                    return;
                }

                jquery__WEBPACK_IMPORTED_MODULE_2___default()("#jqPagination").jqPaginator({
                    totalPages: Math.ceil(res.total_count / _this2.pageSize),
                    visiblePages: 5,
                    currentPage: _this2.pageNumber,
                    onPageChange: function onPageChange(num, type) {
                        if (_this2.pageNumber == num) return;
                        _this2.pageNumber = num;
                        var ajaxUrl = _b2b_config__WEBPACK_IMPORTED_MODULE_6__["default"].apiRootUrl + '/search?store_hash=' + _b2b_config__WEBPACK_IMPORTED_MODULE_6__["default"].storeHash + '&is_facets=1&catalog_id=' + _this2.gCatalogId + filterString + '&pageNumber=' + _this2.pageNumber + '&pageSize=' + _this2.pageSize + '&sortField=' + _this2.sortField + '&sortOrder=' + _this2.sortOrder;
                        ajaxUrl = encodeURI(ajaxUrl);
                        _this2.search(ajaxUrl).then(function (res) {
                            _this2._initFacets(res);
                            _this2._initProducts(res);
                        });
                    }
                });
            });
        }
    };

    // for bundleb2b


    Category.prototype.renderTable = function renderTable(start, end, categoryProducts) {
        var productsHtml = "";
        for (var j = start; j < end; j++) {
            var product = categoryProducts[j];
            productsHtml += '<li class="product">\n                            <article class="card">\n                                <figure class="card-figure">\n                                        <a href="' + product.product_url + '">\n                                            <div class="card-img-container">\n                                                <img class="card-image" src="' + product.primary_image.standard_url + '" alt="" title="">\n                                            </div>\n                                        </a>\n                                    <figcaption class="card-figcaption">\n                                        <div class="card-figcaption-body">\n                                                        <a href="#" class="button button--small card-figcaption-button quickview" data-product-id="' + product.product_id + '">Quick view</a>\n                                                <label class="button button--small card-figcaption-button" for="compare-' + product.product_id + '">\n                                                    Compare <input type="checkbox" name="products[]" value="' + product.product_id + '" id="compare-' + product.product_id + '" data-compare-id="' + product.product_id + '">\n                                                </label>\n                                        </div>\n                                    </figcaption>\n                                </figure>\n                                <div class="card-body">\n                                    <h4 class="card-title">\n                                            <a href="' + product.product_url + '">' + product.product_name + '</a>\n                                    </h4>\n\n                                    <div class="card-text" data-test-info-type="price">\n                                            \n                                    <div class="price-section price-section--withoutTax rrp-price--withoutTax" style="display: none;">\n                                        MSRP:\n                                        <span data-product-rrp-price-without-tax="" class="price price--rrp"> \n                                            \n                                        </span>\n                                    </div>\n                                    <div class="price-section price-section--withoutTax non-sale-price--withoutTax" style="display: none;">\n                                        Was:\n                                        <span data-product-non-sale-price-without-tax="" class="price price--non-sale">\n                                            \n                                        </span>\n                                    </div>\n                                    <div class="price-section price-section--withoutTax">\n                                        <span class="price-label">\n                                            \n                                        </span>\n                                        <span class="price-now-label" style="display: none;">\n                                            Now:\n                                        </span>\n                                        <span data-product-price-without-tax="" class="price price--withoutTax">$' + product.base_price + '</span>\n                                    </div>\n                                    </div>\n                                        </div>\n                            </article>\n                        </li>';
        }

        jquery__WEBPACK_IMPORTED_MODULE_2___default()("#product-listing-container .productGrid").html(productsHtml);
    };

    // for bundleb2b


    Category.prototype.getAllProductsApi = function getAllProductsApi() {
        var _this3 = this;

        var categoryId = this.context.categoryId;
        var catalogId = sessionStorage.getItem("catalog_id");
        var catalogProducts = JSON.parse(sessionStorage.getItem("catalog_products") || "{}");
        var categoryProducts = [];
        //url = `https://fl4mq0bm40.execute-api.us-west-2.amazonaws.com/prod/categoryproducts?id=7120300914635706856&category_id=43`;
        jquery__WEBPACK_IMPORTED_MODULE_2___default.a.ajax({
            type: "GET",
            url: _b2b_config__WEBPACK_IMPORTED_MODULE_6__["default"].apiRootUrl + '/categoryproducts?id=' + catalogId + '&category_id=' + categoryId,
            success: function success(data) {
                console.log("category products", data);
                if (data && data.length > 0) {
                    for (var i = 0; i < data.length; i++) {
                        if (catalogProducts[data[i].product_id]) {
                            categoryProducts.push(data[i]);
                        }
                    }

                    var productsPerPage = _this3.context.categoryProductsPerPage;
                    var productsNum = categoryProducts.length;
                    var totalPage = Math.ceil(productsNum / productsPerPage);
                    if (productsNum > productsPerPage) {
                        jquery__WEBPACK_IMPORTED_MODULE_2___default()("#jqPagination").jqPaginator({
                            totalPages: totalPage,
                            visiblePages: 10,
                            currentPage: 1,
                            onPageChange: function onPageChange(num, type) {
                                var start = (num - 1) * productsPerPage;
                                var end = num * productsPerPage > productsNum ? productsNum : num * productsPerPage;
                                _this3.renderTable(start, end, categoryProducts);
                            }
                        });
                    } else {
                        _this3.renderTable(0, productsNum, categoryProducts);
                        //$("#jqPagination").jqPaginator('destroy');
                        jquery__WEBPACK_IMPORTED_MODULE_2___default()("#jqPagination").html("");
                    }
                }
            },
            error: function error(jqXHR, textStatus, errorThrown) {
                console.log("error", JSON.stringify(jqXHR));
            }
        });
    };

    // for bundleb2b


    Category.prototype.getAllProducts = function getAllProducts() {

        var paginations = this.context.paginationCategory || [];
        if (paginations) {

            for (var i = 1; i < paginations.length; i++) {

                var formatUrl = paginations[i].url;

                var productsPerPage = this.context.categoryProductsPerPage;

                var requestOptions = {
                    config: {
                        category: {
                            shop_by_price: true,
                            products: {
                                limit: productsPerPage
                            }
                        }
                    },
                    template: 'b2b/catalog-product-listing'

                };
                _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["api"].getPage(formatUrl, requestOptions, function (err, content) {

                    var $listing = jquery__WEBPACK_IMPORTED_MODULE_2___default()(content);

                    if (err) {
                        throw new Error(err);
                    }

                    // Refresh view with new content
                    console.log($listing);
                });
            }
        }
    };

    Category.prototype.initFacetedSearch = function initFacetedSearch() {
        var _this4 = this;

        var $productListingContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#product-listing-container');
        var $facetedSearchContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#faceted-search-container');
        var productsPerPage = this.context.categoryProductsPerPage;
        var requestOptions = {
            config: {
                category: {
                    shop_by_price: true,
                    products: {
                        limit: productsPerPage
                    }
                }
            },
            template: {
                productListing: 'category/product-listing',
                sidebar: 'category/sidebar'
            },
            showMore: 'category/show-more'
        };

        this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
            $productListingContainer.html(content.productListing);
            $facetedSearchContainer.html(content.sidebar);

            jquery__WEBPACK_IMPORTED_MODULE_2___default()('html, body').animate({
                scrollTop: 0
            }, 100);

            _this4.initB2bFeature();
        });
    };

    Category.prototype.search = function search(url, _callback) {
        var promise = new Promise(function (resolve, reject) {
            jquery__WEBPACK_IMPORTED_MODULE_2___default.a.ajax({
                type: 'GET',
                url: url,
                success: function success(data) {
                    if (data.code == 200) {
                        resolve(data.response);
                    }
                },
                error: function error(jqXHR, textStatus, errorThrown) {
                    console.log(JSON.stringify(jqXHR));
                }
            });
        });
        return promise;
    };

    Category.prototype.changeSort = function changeSort() {
        var _this5 = this;

        var result = jquery__WEBPACK_IMPORTED_MODULE_2___default()("#b2b_search_result");
        var sort = '<fieldset class="form-fieldset actionBar-section" style="width: 210px; float: none;">\n\t\t\t\t\t\t<div class="form-field">\n\t\t\t\t\t\t\t<label class="form-label" for="sort">Sort By:</label>\n\t\t\t\t\t\t\t<select class="form-select form-select--small" name="sort" id="sort">\n\t\t\t\t\t\t\t\t<option value="updated_date.keyword" data-sort="asc" selected="">Featured Items</option>\n\t\t\t\t\t\t\t\t<option value="updated_date.keyword" data-sort="desc">Newest Items</option>' +
        // <option value="bestselling" >Best Selling</option>
        '<option value="product_name.keyword" data-sort="asc">A to Z</option>\n                                <option value="product_name.keyword" data-sort="desc">Z to A</option>' +
        // <option value="avgcustomerreview" >By Review</option>
        '<option value="base_price" data-sort="asc">Price: Ascending</option>\n\t\t\t\t\t\t\t\t<option value="base_price" data-sort="desc">Price: Descending</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</fieldset>';
        result.prepend(sort);
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#sort').on('change', function () {
            _this5.sortField = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#sort').val();
            _this5.sortOrder = jquery__WEBPACK_IMPORTED_MODULE_2___default()("#sort").find("option:selected").data("sort");
            var filterString = '&filtersBy={"category_id":"' + _this5.gCategoryId + '"}';
            var ajaxUrl = _b2b_config__WEBPACK_IMPORTED_MODULE_6__["default"].apiRootUrl + '/search?store_hash=' + _b2b_config__WEBPACK_IMPORTED_MODULE_6__["default"].storeHash + '&is_facets=1&catalog_id=' + _this5.gCatalogId + filterString + '&pageNumber=' + _this5.pageNumber + '&pageSize=' + _this5.pageSize + '&sortField=' + _this5.sortField + '&sortOrder=' + _this5.sortOrder;
            ajaxUrl = encodeURI(ajaxUrl);
            _this5.search(ajaxUrl).then(function (res) {
                _this5._initFacets(res);
                _this5._initProducts(res);
            });
        });
    };

    Category.prototype._initProducts = function _initProducts(res) {
        var ul = jquery__WEBPACK_IMPORTED_MODULE_2___default()("#b2b_search_result").find(".productGrid");
        ul.empty();

        var prods = res.payload;
        if (!prods || prods.length == 0) {
            return;
        }

        for (var i in prods) {

            var base_price = prods[i].base_price;
            var tier_price = void 0;
            var catalog_price = base_price;
            var product_id = prods[i].product_id;
            var variantArr = this.gCatalogProducts[product_id] || [];
            if (variantArr.length == 1) {
                tier_price = variantArr[0].tier_price || [];
                catalog_price = this.getCatalogPrice(base_price, tier_price, 1);
            }

            var rrp_price = '<span class="b2b-rrp-price">$' + Object(_b2b_prices_style__WEBPACK_IMPORTED_MODULE_8__["default"])(base_price, 2) + '</span>';

            if (base_price == catalog_price) {
                rrp_price = "";
            }

            //catalog_price = parseFloat(catalog_price).toFixed(2);
            catalog_price = Object(_b2b_prices_style__WEBPACK_IMPORTED_MODULE_8__["default"])(catalog_price, 2);
            console.log("this is catalog_price " + catalog_price);

            var pro_bg_a = '<a href="' + prods[i].product_url + '">' + '<div class="card-img-container">' + ('<img class="card-image lazyautosizes lazyloaded" data-sizes="auto" src="' + prods[i].primary_image.standard_url + '" data-src="' + prods[i].primary_image.standard_url + '" alt="" title="" sizes="263px">') + '</div></a>';
            var figcaption = '<figcaption class="card-figcaption"><div class="card-figcaption-body">' + ('<a class="button button--small card-figcaption-button quickview" data-product-id="' + prods[i].product_id + '">Quick view</a>') + ('<label class="button button--small card-figcaption-button" for="compare-' + prods[i].product_id + '">Compare ') + ('<input type="checkbox" name="products[]" value="' + prods[i].product_id + '" id="compare-' + prods[i].product_id + '" data-compare-id="' + prods[i].product_id + '">') + '</label>' + '</div></figcaption>';

            var card_body = '<h4 class="card-title"><a href="' + prods[i].product_url + '">' + prods[i].product_name + '</a></h4>' + '<div class="card-text" data-test-info-type="price">' + '<div class="price-section price-section--withoutTax non-sale-price--withoutTax" style="display: none;">Was:' + '<span data-product-non-sale-price-without-tax="" class="price price--non-sale"></span>' + '</div>' + '<div class="price-section price-section--withoutTax">' + '<span class="price-label"></span>' + '<span class="price-now-label" style="display: none;">Now:</span>' + (rrp_price + '<span data-product-price-without-tax="" class="price price--withoutTax">$' + catalog_price + '</span>') + '</div></div>';
            ul.append('<li class="product"><article class="card">' + ('<figure class="card-figure">' + pro_bg_a + figcaption + '</figure>') + ('<div class="card-body">' + card_body + '</div>') + '</article></li>');
        }
    };

    Category.prototype._initFacets = function _initFacets(res) {
        this.selectedFacets = {};
        var facets = res.facets;

        var $productFiltersContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()("#product-filters-container");
        var filterHtml = "";
        var facetsCount = facets.length;
        for (var i = 0; i < facetsCount; i++) {
            var facet = facets[i];

            var facetHtml = "";
            if (facet.attribute !== "category_id") {
                facetHtml = this.getFacetHtml(facet.type_name, facet.buckets, facet.attribute);
            }

            if (facetHtml.trim() != "") {
                filterHtml += '\n                <div class="product-filters-block" data-attribute="' + facet.attribute + '">\n                    <div class="product-filters-title open">\n                        <h3>' + facet.title + '</h3>\n                        <div class="product-filters-title--toggle">\n                            <span class="toggle-open">&plus;</span>\n                            <span class="toggle-close">&minus;</span>\n                        </div>\n                    </div>\n                    <ul class="product-filters-list open">\n                        ' + facetHtml + '\n                    </ul>\n                </div>';
            }
        }

        $productFiltersContainer.html(filterHtml);
        if (filterHtml.trim() == "") {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()("#faceted-search-container-b2b").remove();
        }

        console.log(this.selectedFacets);
        this._bindEvents();
    };

    Category.prototype.getFacetHtml = function getFacetHtml(type_name, buckets, attribute) {
        var facetHtml = "";

        switch (type_name) {
            case "select":
                facetHtml += "";
                for (var j = 0; j < buckets.length; j++) {
                    var bucket = buckets[j];
                    var bucket_value = bucket.value;
                    var isChecked = bucket.select ? 'checked' : '';
                    if (bucket.count > 0) {
                        facetHtml += '\n                        <li>\n                            <label data-facet-search data-facet-attribute="' + attribute + '" data-facet-value="' + bucket_value + '"><input type="checkbox" value="' + bucket.value + '" ' + isChecked + '><span>' + bucket.title + '</span> <span>(' + bucket.count + ')</span></label>\n                        </li>';

                        if (isChecked) {
                            this.selectedFacets[attribute] = this.selectedFacets[attribute] || [];
                            this.selectedFacets[attribute].push(bucket_value + "");
                        }
                    }
                }
                break;
            case "slider":
                facetHtml += "";
                for (var _j = 0; _j < buckets.length; _j++) {
                    var _bucket = buckets[_j];
                    var _bucket_value = _bucket.value;
                    var _isChecked = _bucket.select ? 'checked' : '';

                    if (_bucket.left != 0 || _bucket.right != 0) {
                        this.selectedFacets[attribute] = this.selectedFacets[attribute] || [];
                        this.selectedFacets[attribute].push(_bucket.left);
                        this.selectedFacets[attribute].push(_bucket.right);

                        facetHtml += '<li><a href="javascript:void(0);" class="clear-price-range" data-faceted-search-range="clear">Clear</a><div class="form-minMaxRow">\n                            <div class="form-field">\n                                <input name="min_price" placeholder="Min." min="0" class="form-input form-input--small" required="" type="number" value="' + _bucket.left + '">\n                            </div>\n\n                            <div class="form-field">\n                                <input name="max_price" placeholder="Max." min="0" class="form-input form-input--small" required="" type="number" value="' + _bucket.right + '">\n                            </div>\n\n                            <div class="form-field">\n                                <button class="button button--small" type="button" data-faceted-search-range>\n                                    Update\n                                </button>\n                            </div>\n                        </div></li>';
                    } else {
                        facetHtml += '<li><div class="form-minMaxRow">\n                            <div class="form-field">\n                                <input name="min_price" placeholder="Min." min="0" class="form-input form-input--small" required="" type="number" value="">\n                            </div>\n\n                            <div class="form-field">\n                                <input name="max_price" placeholder="Max." min="0" class="form-input form-input--small" required="" type="number" value="">\n                            </div>\n\n                            <div class="form-field">\n                                <button class="button button--small" type="button" data-faceted-search-range>\n                                    Update\n                                </button>\n                            </div>\n                        </div></li>';
                    }
                }
                break;
            default:

        }
        return facetHtml;
    };

    Category.prototype._bindEvents = function _bindEvents() {
        var _this6 = this;

        jquery__WEBPACK_IMPORTED_MODULE_2___default()(".product-filters-title").unbind().bind('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).toggleClass("open").next('.product-filters-list').toggleClass("open");
        });

        jquery__WEBPACK_IMPORTED_MODULE_2___default()("[data-facet-search]").unbind().bind('click', function (event) {
            event.preventDefault();
            var $target = jquery__WEBPACK_IMPORTED_MODULE_2___default()(event.currentTarget);
            console.log("facet click");
            var $inputCheckBox = $target.find('input[type="checkbox"]');
            if ($inputCheckBox.length > 0 && $inputCheckBox.prop("checked") == true) {
                $inputCheckBox.prop("checked", false);
            } else {
                $inputCheckBox.prop("checked", true);
            }
            var facetAttribute = $target.attr('data-facet-attribute');
            var facetValue = $target.attr('data-facet-value');

            if (_this6.selectedFacets[facetAttribute]) {
                //exist facet
                var value_arr = _this6.selectedFacets[facetAttribute];
                var value_index = jquery__WEBPACK_IMPORTED_MODULE_2___default.a.inArray(facetValue, value_arr);
                if (value_index == -1) {
                    // new value, add
                    value_arr.push(facetValue);
                } else {
                    // exist value, remove
                    value_arr.splice(value_index, 1);
                }

                // if no values, remove the filter
                if (value_arr.length == 0) {
                    delete _this6.selectedFacets[facetAttribute];
                }
            } else {
                // new facet
                _this6.selectedFacets[facetAttribute] = [facetValue];
            }

            var filterString = ""; //filtersBy={"category_id":%20"23|41|39|61"}

            jquery__WEBPACK_IMPORTED_MODULE_2___default.a.each(_this6.selectedFacets, function (facet, values) {
                var valuesString = values.join("|");
                filterString += ',"' + facet + '":"' + valuesString + '"';
            });

            filterString += ',"category_id":"' + _this6.gCategoryId + '"';

            if (filterString.trim() != "") {
                filterString = filterString.substring(1, filterString.length);
                filterString = "&filtersBy={" + filterString + "}";
            }

            var ajaxUrl2 = _b2b_config__WEBPACK_IMPORTED_MODULE_6__["default"].apiRootUrl + '/search?store_hash=' + _b2b_config__WEBPACK_IMPORTED_MODULE_6__["default"].storeHash + '&is_facets=1&catalog_id=' + _this6.gCatalogId + filterString + '&sortField=' + _this6.sortField + '&sortOrder=' + _this6.sortOrder;
            ajaxUrl2 = encodeURI(ajaxUrl2);
            _this6.search(ajaxUrl2).then(function (res) {
                _this6._initFacets(res);
                _this6._initProducts(res);
            });
        });

        jquery__WEBPACK_IMPORTED_MODULE_2___default()("[data-faceted-search-range]").unbind().bind('click', function (event) {
            _this6.pageNumber = 1;
            var $target = jquery__WEBPACK_IMPORTED_MODULE_2___default()(event.currentTarget);
            var $minPrice = jquery__WEBPACK_IMPORTED_MODULE_2___default()('input[name="min_price"]');
            var $maxPrice = jquery__WEBPACK_IMPORTED_MODULE_2___default()('input[name="max_price"]');
            var minPriceValue = $minPrice.val();
            var maxPriceValue = $maxPrice.val();
            if (minPriceValue == "" || maxPriceValue == "") {
                return alert("Please enter price range");
            }
            if (minPriceValue == 0 && maxPriceValue == 0) {
                return alert("Please enter price range");
            }
            if (parseInt(minPriceValue) > parseInt(maxPriceValue)) {
                return alert("Min price can't be bigger than Max price");
            }

            if ($target.attr("data-faceted-search-range") == "clear") {
                delete _this6.selectedFacets["calculated_price"];
            } else {
                _this6.selectedFacets["calculated_price"] = [minPriceValue, maxPriceValue];
            }

            var filterString = ""; //filtersBy={"category_id":%20"23|41|39|61"}

            jquery__WEBPACK_IMPORTED_MODULE_2___default.a.each(_this6.selectedFacets, function (facet, values) {
                var valuesString = values.join("|");
                filterString += ',"' + facet + '":"' + valuesString + '"';
            });

            filterString += ',"category_id":"' + _this6.gCategoryId + '"';

            if (filterString.trim() != "") {
                filterString = filterString.substring(1, filterString.length);
                filterString = "&filtersBy={" + filterString + "}";
            }

            var ajaxUrl2 = _b2b_config__WEBPACK_IMPORTED_MODULE_6__["default"].apiRootUrl + '/search?store_hash=' + _b2b_config__WEBPACK_IMPORTED_MODULE_6__["default"].storeHash + '&is_facets=1&catalog_id=' + _this6.gCatalogId + filterString + '&pageNumber=' + _this6.pageNumber + '&pageSize=' + _this6.pageSize + '&sortField=' + _this6.sortField + '&sortOrder=' + _this6.sortOrder;
            console.log(ajaxUrl2);
            ajaxUrl2 = encodeURI(ajaxUrl2);
            console.log(ajaxUrl2);
            _this6.search(ajaxUrl2).then(function (res) {
                console.log(res);

                _this6._initFacets(res);
                _this6._initProducts(res);

                if (res.total_count == 0) {
                    jquery__WEBPACK_IMPORTED_MODULE_2___default()("#jqPagination").html("");
                    //$(".page-sidebar-b2b").remove();
                    return;
                }

                jquery__WEBPACK_IMPORTED_MODULE_2___default()("#jqPagination").jqPaginator({
                    totalPages: Math.ceil(res.total_count / _this6.pageSize),
                    visiblePages: 5,
                    currentPage: _this6.pageNumber,
                    onPageChange: function onPageChange(num, type) {
                        if (_this6.pageNumber == num) return;
                        _this6.pageNumber = num;
                        var ajaxUrl = _b2b_config__WEBPACK_IMPORTED_MODULE_6__["default"].apiRootUrl + '/search?store_hash=' + _b2b_config__WEBPACK_IMPORTED_MODULE_6__["default"].storeHash + '&is_facets=1&catalog_id=' + _this6.gCatalogId + filterString + '&pageNumber=' + _this6.pageNumber + '&pageSize=' + _this6.pageSize + '&sortField=' + _this6.sortField + '&sortOrder=' + _this6.sortOrder;
                        ajaxUrl = encodeURI(ajaxUrl);
                        _this6.search(ajaxUrl).then(function (res) {
                            _this6._initFacets(res);
                            _this6._initProducts(res);
                        });
                    }
                });
            });
        });
    };

    Category.prototype.getCatalogPrice = function getCatalogPrice(base_price, tier_price_array, qty) {
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

    return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Category);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJvblJlYWR5IiwiJCIsImxlbmd0aCIsImluaXRGYWNldGVkU2VhcmNoIiwib25Tb3J0QnlTdWJtaXQiLCJiaW5kIiwiaG9va3MiLCJvbiIsImdDYXRhbG9nSWQiLCJnQ2F0ZWdvcnlJZCIsImNvbnRleHQiLCJjYXRlZ29yeUlkIiwiZ0NhdGFsb2dQcm9kdWN0cyIsInNlbGVjdGVkRmFjZXRzIiwicGFnZVNpemUiLCJwYWdlTnVtYmVyIiwic29ydEZpZWxkIiwic29ydE9yZGVyIiwiaW5pdEIyYkZlYXR1cmUiLCJpbml0QjJiRmVhdHVyZV9vIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiZW1wdHkiLCJoaWRlIiwiYXBwZW5kIiwiZ2V0QWxsUHJvZHVjdHNBcGkiLCJodG1sIiwiYjJiVXNlckluZm8iLCJKU09OIiwicGFyc2UiLCJjYXRhbG9nX2lkIiwiYWRkQ2xhc3MiLCJmaWx0ZXJTdHJpbmciLCJhamF4VXJsIiwiY29uZmlnIiwiYXBpUm9vdFVybCIsInN0b3JlSGFzaCIsImVuY29kZVVSSSIsInNlYXJjaCIsInRoZW4iLCJjaGFuZ2VTb3J0IiwiX2luaXRGYWNldHMiLCJyZXMiLCJfaW5pdFByb2R1Y3RzIiwidG90YWxfY291bnQiLCJyZW1vdmUiLCJqcVBhZ2luYXRvciIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsInZpc2libGVQYWdlcyIsImN1cnJlbnRQYWdlIiwib25QYWdlQ2hhbmdlIiwibnVtIiwidHlwZSIsInJlbmRlclRhYmxlIiwic3RhcnQiLCJlbmQiLCJjYXRlZ29yeVByb2R1Y3RzIiwicHJvZHVjdHNIdG1sIiwiaiIsInByb2R1Y3QiLCJwcm9kdWN0X3VybCIsInByaW1hcnlfaW1hZ2UiLCJzdGFuZGFyZF91cmwiLCJwcm9kdWN0X2lkIiwicHJvZHVjdF9uYW1lIiwiYmFzZV9wcmljZSIsImNhdGFsb2dJZCIsImNhdGFsb2dQcm9kdWN0cyIsImFqYXgiLCJ1cmwiLCJzdWNjZXNzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJpIiwicHVzaCIsInByb2R1Y3RzUGVyUGFnZSIsImNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlIiwicHJvZHVjdHNOdW0iLCJ0b3RhbFBhZ2UiLCJlcnJvciIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwic3RyaW5naWZ5IiwiZ2V0QWxsUHJvZHVjdHMiLCJwYWdpbmF0aW9ucyIsInBhZ2luYXRpb25DYXRlZ29yeSIsImZvcm1hdFVybCIsInJlcXVlc3RPcHRpb25zIiwiY2F0ZWdvcnkiLCJzaG9wX2J5X3ByaWNlIiwicHJvZHVjdHMiLCJsaW1pdCIsInRlbXBsYXRlIiwiYXBpIiwiZ2V0UGFnZSIsImVyciIsImNvbnRlbnQiLCIkbGlzdGluZyIsIkVycm9yIiwiJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCJwcm9kdWN0TGlzdGluZyIsInNpZGViYXIiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJGYWNldGVkU2VhcmNoIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIl9jYWxsYmFjayIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNvZGUiLCJyZXNwb25zZSIsInJlc3VsdCIsInNvcnQiLCJwcmVwZW5kIiwidmFsIiwiZmluZCIsInVsIiwicHJvZHMiLCJwYXlsb2FkIiwidGllcl9wcmljZSIsImNhdGFsb2dfcHJpY2UiLCJ2YXJpYW50QXJyIiwiZ2V0Q2F0YWxvZ1ByaWNlIiwicnJwX3ByaWNlIiwicHJpY2VzU3R5bGUiLCJwcm9fYmdfYSIsImZpZ2NhcHRpb24iLCJjYXJkX2JvZHkiLCJmYWNldHMiLCIkcHJvZHVjdEZpbHRlcnNDb250YWluZXIiLCJmaWx0ZXJIdG1sIiwiZmFjZXRzQ291bnQiLCJmYWNldCIsImZhY2V0SHRtbCIsImF0dHJpYnV0ZSIsImdldEZhY2V0SHRtbCIsInR5cGVfbmFtZSIsImJ1Y2tldHMiLCJ0cmltIiwidGl0bGUiLCJfYmluZEV2ZW50cyIsImJ1Y2tldCIsImJ1Y2tldF92YWx1ZSIsInZhbHVlIiwiaXNDaGVja2VkIiwic2VsZWN0IiwiY291bnQiLCJsZWZ0IiwicmlnaHQiLCJ1bmJpbmQiLCJ0b2dnbGVDbGFzcyIsIm5leHQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJHRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCIkaW5wdXRDaGVja0JveCIsInByb3AiLCJmYWNldEF0dHJpYnV0ZSIsImF0dHIiLCJmYWNldFZhbHVlIiwidmFsdWVfYXJyIiwidmFsdWVfaW5kZXgiLCJpbkFycmF5Iiwic3BsaWNlIiwiZWFjaCIsInZhbHVlcyIsInZhbHVlc1N0cmluZyIsImpvaW4iLCJzdWJzdHJpbmciLCJhamF4VXJsMiIsIiRtaW5QcmljZSIsIiRtYXhQcmljZSIsIm1pblByaWNlVmFsdWUiLCJtYXhQcmljZVZhbHVlIiwiYWxlcnQiLCJwYXJzZUludCIsInRpZXJfcHJpY2VfYXJyYXkiLCJxdHkiLCJiYXNlX3F0eSIsInByaWNlIiwiQ2F0YWxvZ1BhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsUTs7Ozs7Ozs7O3VCQUNqQkMsTyxzQkFBVTtBQUNOLFlBQUlDLDZDQUFDQSxDQUFDLGdCQUFGLEVBQW9CQyxNQUFwQixHQUE2QixDQUFqQyxFQUFvQztBQUNoQyxpQkFBS0MsaUJBQUw7QUFDSCxTQUZELE1BRU87QUFDSCxpQkFBS0MsY0FBTCxHQUFzQixLQUFLQSxjQUFMLENBQW9CQyxJQUFwQixDQUF5QixJQUF6QixDQUF0QjtBQUNBQyw0RUFBS0EsQ0FBQ0MsRUFBTixDQUFTLGtCQUFULEVBQTZCLEtBQUtILGNBQWxDO0FBQ0g7O0FBRUQ7QUFDQSxhQUFLSSxVQUFMO0FBQ0EsYUFBS0MsV0FBTCxHQUFtQixLQUFLQyxPQUFMLENB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QUE2QzBELEdBQTdDLEVBQWtEO0FBQzlDLGdCQUFNTixPQUFPbUksaUJBQWlCN0gsQ0FBakIsRUFBb0JOLElBQWpDO0FBQ0EsZ0JBQU1xSSxXQUFXRixpQkFBaUI3SCxDQUFqQixFQUFvQjhILEdBQXJDO0FBQ0EsZ0JBQU1FLFFBQVFILGlCQUFpQjdILENBQWpCLEVBQW9CZ0ksS0FBbEM7O0FBRUEsZ0JBQUlGLE9BQU9DLFFBQVgsRUFBcUI7QUFDakIsb0JBQUlySSxRQUFRLE9BQVosRUFBcUI7QUFDakJ5RSxpQ0FBYTZELEtBQWI7QUFFSCxpQkFIRCxNQUdPO0FBQ0g3RCxpQ0FBYTVELGFBQWFBLGFBQWF5SCxLQUFiLEdBQXFCLEdBQS9DO0FBQ0g7QUFDSjtBQUNKO0FBQ0QsZUFBTzdELFVBQVA7QUFDSCxLOzs7RUF0cUJpQzhELGdEOztBQUFqQjlMLHVFIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgaG9va3MsXG4gICAgYXBpXG59IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBDYXRhbG9nUGFnZSBmcm9tICcuL2NhdGFsb2cnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBGYWNldGVkU2VhcmNoIGZyb20gJy4vY29tbW9uL2ZhY2V0ZWQtc2VhcmNoJztcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL2NvbW1vbi91cmwtdXRpbHMnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2IyYi9jb25maWcnO1xuaW1wb3J0ICcuL2IyYi90b29scy9qcVBhZ2luYXRvci5qcyc7XG5pbXBvcnQgcHJpY2VzU3R5bGUgZnJvbSAnLi9iMmIvcHJpY2VzLXN0eWxlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgaWYgKCQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3IgYnVuZGxlYjJiXG4gICAgICAgIHRoaXMuZ0NhdGFsb2dJZDtcbiAgICAgICAgdGhpcy5nQ2F0ZWdvcnlJZCA9IHRoaXMuY29udGV4dC5jYXRlZ29yeUlkO1xuICAgICAgICB0aGlzLmdDYXRhbG9nUHJvZHVjdHM7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRGYWNldHMgPSB7fTtcbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IDMwO1xuICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAxO1xuICAgICAgICB0aGlzLnNvcnRGaWVsZCA9ICd1cGRhdGVkX2RhdGUua2V5d29yZCc7XG4gICAgICAgIHRoaXMuc29ydE9yZGVyID0gJ2FzYyc7XG4gICAgICAgIHRoaXMuaW5pdEIyYkZlYXR1cmUoKTtcbiAgICB9XG5cbiAgICAvLyBmb3IgYnVuZGxlYjJiXG4gICAgaW5pdEIyYkZlYXR1cmVfbygpIHtcbiAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJidW5kbGViMmJfdXNlclwiKSAmJiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYnVuZGxlYjJiX3VzZXJcIikgIT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICQoXCIjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdEdyaWRcIikuZW1wdHkoKTtcbiAgICAgICAgICAgICQoXCIucGFnaW5hdGlvblwiKS5oaWRlKCk7XG5cbiAgICAgICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiY2F0YWxvZ19pZFwiKSkge1xuICAgICAgICAgICAgICAgICQoXCIjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lclwiKS5hcHBlbmQoYDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicGFnaW5hdGlvbi1saXN0XCIgaWQ9XCJqcVBhZ2luYXRpb25cIj48L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PmApO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QWxsUHJvZHVjdHNBcGkoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChcIi5jYXRhbG9nLWxpc3Rpbmctd3JhcFwiKS5odG1sKFwiV2UgY2FuJ3QgZmluZCBwcm9kdWN0cyBtYXRjaGluZyB0aGUgc2VsZWN0aW9uLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpbml0QjJiRmVhdHVyZSgpIHtcbiAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJidW5kbGViMmJfdXNlclwiKSAmJiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYnVuZGxlYjJiX3VzZXJcIikgIT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGIyYlVzZXJJbmZvID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYnVuZGxlYjJiX3VzZXJcIikpO1xuICAgICAgICAgICAgaWYgKGIyYlVzZXJJbmZvLmNhdGFsb2dfaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdDYXRhbG9nSWQgPSBiMmJVc2VySW5mby5jYXRhbG9nX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJjYXRhbG9nX2lkXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nQ2F0YWxvZ0lkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImNhdGFsb2dfaWRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZ0NhdGFsb2dQcm9kdWN0cyA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImNhdGFsb2dfcHJvZHVjdHNcIikgfHwgXCJ7fVwiKTtcblxuICAgICAgICAgICAgJChcIi5wYWdlXCIpLmFkZENsYXNzKFwiYjJiLXNlYXJjaC1wYWdlXCIpLmh0bWwoYDxhc2lkZSBjbGFzcz1cInBhZ2Utc2lkZWJhci1iMmJcIiBpZD1cImZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lci1iMmJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZS1zaWRlYmFyLWlubmVyXCIgaWQ9XCJwcm9kdWN0LWZpbHRlcnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwYWdlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYjJiX3NlYXJjaF9yZXN1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicHJvZHVjdEdyaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwYWdpbmF0aW9uLWxpc3RcIiBpZD1cImpxUGFnaW5hdGlvblwiPjwvdWw+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2NldGlvbj5gKTtcblxuXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJTdHJpbmcgPSBgJmZpbHRlcnNCeT17XCJjYXRlZ29yeV9pZFwiOlwiJHt0aGlzLmdDYXRlZ29yeUlkfVwifWA7XG4gICAgICAgICAgICBsZXQgYWpheFVybCA9IGAke2NvbmZpZy5hcGlSb290VXJsfS9zZWFyY2g/c3RvcmVfaGFzaD0ke2NvbmZpZy5zdG9yZUhhc2h9JmlzX2ZhY2V0cz0xJmNhdGFsb2dfaWQ9JHt0aGlzLmdDYXRhbG9nSWR9JHtmaWx0ZXJTdHJpbmd9JnBhZ2VOdW1iZXI9JHt0aGlzLnBhZ2VOdW1iZXJ9JnBhZ2VTaXplPSR7dGhpcy5wYWdlU2l6ZX0mc29ydEZpZWxkPSR7dGhpcy5zb3J0RmllbGR9JnNvcnRPcmRlcj0ke3RoaXMuc29ydE9yZGVyfWA7XG4gICAgICAgICAgICBhamF4VXJsID0gZW5jb2RlVVJJKGFqYXhVcmwpO1xuXG4gICAgICAgICAgICB0aGlzLnNlYXJjaChhamF4VXJsKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTb3J0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5faW5pdEZhY2V0cyhyZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRQcm9kdWN0cyhyZXMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlcy50b3RhbF9jb3VudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjanFQYWdpbmF0aW9uXCIpLmh0bWwoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICQoXCIucGFnZS1zaWRlYmFyLWIyYlwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICQoXCIjanFQYWdpbmF0aW9uXCIpLmpxUGFnaW5hdG9yKHtcbiAgICAgICAgICAgICAgICAgICAgdG90YWxQYWdlczogTWF0aC5jZWlsKHJlcy50b3RhbF9jb3VudCAvIHRoaXMucGFnZVNpemUpLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlUGFnZXM6IDUsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLnBhZ2VOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZTogKG51bSwgdHlwZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFnZU51bWJlciA9PSBudW0pIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciA9IG51bTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhamF4VXJsID0gYCR7Y29uZmlnLmFwaVJvb3RVcmx9L3NlYXJjaD9zdG9yZV9oYXNoPSR7Y29uZmlnLnN0b3JlSGFzaH0maXNfZmFjZXRzPTEmY2F0YWxvZ19pZD0ke3RoaXMuZ0NhdGFsb2dJZH0ke2ZpbHRlclN0cmluZ30mcGFnZU51bWJlcj0ke3RoaXMucGFnZU51bWJlcn0mcGFnZVNpemU9JHt0aGlzLnBhZ2VTaXplfSZzb3J0RmllbGQ9JHt0aGlzLnNvcnRGaWVsZH0mc29ydE9yZGVyPSR7dGhpcy5zb3J0T3JkZXJ9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFqYXhVcmwgPSBlbmNvZGVVUkkoYWpheFVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaChhamF4VXJsKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5pdEZhY2V0cyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2luaXRQcm9kdWN0cyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBmb3IgYnVuZGxlYjJiXG4gICAgcmVuZGVyVGFibGUoc3RhcnQsIGVuZCwgY2F0ZWdvcnlQcm9kdWN0cykge1xuICAgICAgICBsZXQgcHJvZHVjdHNIdG1sID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaiA9IHN0YXJ0OyBqIDwgZW5kOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSBjYXRlZ29yeVByb2R1Y3RzW2pdO1xuICAgICAgICAgICAgcHJvZHVjdHNIdG1sICs9IGA8bGkgY2xhc3M9XCJwcm9kdWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJjYXJkLWZpZ3VyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke3Byb2R1Y3QucHJvZHVjdF91cmx9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWltZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJjYXJkLWltYWdlXCIgc3JjPVwiJHtwcm9kdWN0LnByaW1hcnlfaW1hZ2Uuc3RhbmRhcmRfdXJsfVwiIGFsdD1cIlwiIHRpdGxlPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzPVwiY2FyZC1maWdjYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZmlnY2FwdGlvbi1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1zbWFsbCBjYXJkLWZpZ2NhcHRpb24tYnV0dG9uIHF1aWNrdmlld1wiIGRhdGEtcHJvZHVjdC1pZD1cIiR7cHJvZHVjdC5wcm9kdWN0X2lkfVwiPlF1aWNrIHZpZXc8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1zbWFsbCBjYXJkLWZpZ2NhcHRpb24tYnV0dG9uXCIgZm9yPVwiY29tcGFyZS0ke3Byb2R1Y3QucHJvZHVjdF9pZH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wYXJlIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvZHVjdHNbXVwiIHZhbHVlPVwiJHtwcm9kdWN0LnByb2R1Y3RfaWR9XCIgaWQ9XCJjb21wYXJlLSR7cHJvZHVjdC5wcm9kdWN0X2lkfVwiIGRhdGEtY29tcGFyZS1pZD1cIiR7cHJvZHVjdC5wcm9kdWN0X2lkfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImNhcmQtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7cHJvZHVjdC5wcm9kdWN0X3VybH1cIj4ke3Byb2R1Y3QucHJvZHVjdF9uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRleHRcIiBkYXRhLXRlc3QtaW5mby10eXBlPVwicHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4IHJycC1wcmljZS0td2l0aG91dFRheFwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNU1JQOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1ycnAtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS1ycnBcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheCBub24tc2FsZS1wcmljZS0td2l0aG91dFRheFwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXYXM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4PVwiXCIgY2xhc3M9XCJwcmljZSBwcmljZS0tbm9uLXNhbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZS1ub3ctbGFiZWxcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4PVwiXCIgY2xhc3M9XCJwcmljZSBwcmljZS0td2l0aG91dFRheFwiPiQke3Byb2R1Y3QuYmFzZV9wcmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+YDtcblxuICAgICAgICB9XG5cbiAgICAgICAgJChcIiNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0R3JpZFwiKS5odG1sKHByb2R1Y3RzSHRtbCk7XG5cbiAgICB9XG5cbiAgICAvLyBmb3IgYnVuZGxlYjJiXG4gICAgZ2V0QWxsUHJvZHVjdHNBcGkoKSB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5SWQgPSB0aGlzLmNvbnRleHQuY2F0ZWdvcnlJZDtcbiAgICAgICAgY29uc3QgY2F0YWxvZ0lkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImNhdGFsb2dfaWRcIik7XG4gICAgICAgIGNvbnN0IGNhdGFsb2dQcm9kdWN0cyA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImNhdGFsb2dfcHJvZHVjdHNcIikgfHwgXCJ7fVwiKTtcbiAgICAgICAgbGV0IGNhdGVnb3J5UHJvZHVjdHMgPSBbXTtcbiAgICAgICAgLy91cmwgPSBgaHR0cHM6Ly9mbDRtcTBibTQwLmV4ZWN1dGUtYXBpLnVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3Byb2QvY2F0ZWdvcnlwcm9kdWN0cz9pZD03MTIwMzAwOTE0NjM1NzA2ODU2JmNhdGVnb3J5X2lkPTQzYDtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgICAgICB1cmw6IGAke2NvbmZpZy5hcGlSb290VXJsfS9jYXRlZ29yeXByb2R1Y3RzP2lkPSR7Y2F0YWxvZ0lkfSZjYXRlZ29yeV9pZD0ke2NhdGVnb3J5SWR9YCxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYXRlZ29yeSBwcm9kdWN0c1wiLCBkYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2F0YWxvZ1Byb2R1Y3RzW2RhdGFbaV0ucHJvZHVjdF9pZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeVByb2R1Y3RzLnB1c2goZGF0YVtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RzTnVtID0gY2F0ZWdvcnlQcm9kdWN0cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsUGFnZSA9IE1hdGguY2VpbChwcm9kdWN0c051bSAvIHByb2R1Y3RzUGVyUGFnZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0c051bSA+IHByb2R1Y3RzUGVyUGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNqcVBhZ2luYXRpb25cIikuanFQYWdpbmF0b3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUGFnZXM6IHRvdGFsUGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlUGFnZXM6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZTogKG51bSwgdHlwZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IChudW0gLSAxKSAqIHByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5kID0gKG51bSAqIHByb2R1Y3RzUGVyUGFnZSA+IHByb2R1Y3RzTnVtKSA/IHByb2R1Y3RzTnVtIDogbnVtICogcHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclRhYmxlKHN0YXJ0LCBlbmQsIGNhdGVnb3J5UHJvZHVjdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUYWJsZSgwLCBwcm9kdWN0c051bSwgY2F0ZWdvcnlQcm9kdWN0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyQoXCIjanFQYWdpbmF0aW9uXCIpLmpxUGFnaW5hdG9yKCdkZXN0cm95Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2pxUGFnaW5hdGlvblwiKS5odG1sKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgSlNPTi5zdHJpbmdpZnkoanFYSFIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gZm9yIGJ1bmRsZWIyYlxuICAgIGdldEFsbFByb2R1Y3RzKCkge1xuXG5cbiAgICAgICAgY29uc3QgcGFnaW5hdGlvbnMgPSB0aGlzLmNvbnRleHQucGFnaW5hdGlvbkNhdGVnb3J5IHx8IFtdO1xuICAgICAgICBpZiAocGFnaW5hdGlvbnMpIHtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYWdpbmF0aW9ucy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0VXJsID0gcGFnaW5hdGlvbnNbaV0udXJsO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LmNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG9wX2J5X3ByaWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnYjJiL2NhdGFsb2ctcHJvZHVjdC1saXN0aW5nJ1xuXG5cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGFwaS5nZXRQYWdlKGZvcm1hdFVybCwgcmVxdWVzdE9wdGlvbnMsIChlcnIsIGNvbnRlbnQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkbGlzdGluZyA9ICQoY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBSZWZyZXNoIHZpZXcgd2l0aCBuZXcgY29udGVudFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkbGlzdGluZyk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LmNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3BfYnlfcHJpY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ2NhdGVnb3J5L3Byb2R1Y3QtbGlzdGluZycsXG4gICAgICAgICAgICAgICAgc2lkZWJhcjogJ2NhdGVnb3J5L3NpZGViYXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dNb3JlOiAnY2F0ZWdvcnkvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICAgICAgdGhpcy5pbml0QjJiRmVhdHVyZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZWFyY2godXJsLCBfY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuY29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YS5yZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShqcVhIUikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgY2hhbmdlU29ydCgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9ICQoXCIjYjJiX3NlYXJjaF9yZXN1bHRcIik7XG4gICAgICAgIGxldCBzb3J0ID0gYDxmaWVsZHNldCBjbGFzcz1cImZvcm0tZmllbGRzZXQgYWN0aW9uQmFyLXNlY3Rpb25cIiBzdHlsZT1cIndpZHRoOiAyMTBweDsgZmxvYXQ6IG5vbmU7XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJmb3JtLWxhYmVsXCIgZm9yPVwic29ydFwiPlNvcnQgQnk6PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PHNlbGVjdCBjbGFzcz1cImZvcm0tc2VsZWN0IGZvcm0tc2VsZWN0LS1zbWFsbFwiIG5hbWU9XCJzb3J0XCIgaWQ9XCJzb3J0XCI+XG5cdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cInVwZGF0ZWRfZGF0ZS5rZXl3b3JkXCIgZGF0YS1zb3J0PVwiYXNjXCIgc2VsZWN0ZWQ9XCJcIj5GZWF0dXJlZCBJdGVtczwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJ1cGRhdGVkX2RhdGUua2V5d29yZFwiIGRhdGEtc29ydD1cImRlc2NcIj5OZXdlc3QgSXRlbXM8L29wdGlvbj5gICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPG9wdGlvbiB2YWx1ZT1cImJlc3RzZWxsaW5nXCIgPkJlc3QgU2VsbGluZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgPG9wdGlvbiB2YWx1ZT1cInByb2R1Y3RfbmFtZS5rZXl3b3JkXCIgZGF0YS1zb3J0PVwiYXNjXCI+QSB0byBaPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcm9kdWN0X25hbWUua2V5d29yZFwiIGRhdGEtc29ydD1cImRlc2NcIj5aIHRvIEE8L29wdGlvbj5gICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPG9wdGlvbiB2YWx1ZT1cImF2Z2N1c3RvbWVycmV2aWV3XCIgPkJ5IFJldmlldzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgPG9wdGlvbiB2YWx1ZT1cImJhc2VfcHJpY2VcIiBkYXRhLXNvcnQ9XCJhc2NcIj5QcmljZTogQXNjZW5kaW5nPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cImJhc2VfcHJpY2VcIiBkYXRhLXNvcnQ9XCJkZXNjXCI+UHJpY2U6IERlc2NlbmRpbmc8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2ZpZWxkc2V0PmA7XG4gICAgICAgIHJlc3VsdC5wcmVwZW5kKHNvcnQpO1xuICAgICAgICAkKCcjc29ydCcpLm9uKCdjaGFuZ2UnLCAoKT0+IHtcbiAgICAgICAgICAgIHRoaXMuc29ydEZpZWxkID0gJCgnI3NvcnQnKS52YWwoKTtcbiAgICAgICAgICAgIHRoaXMuc29ydE9yZGVyID0gJChcIiNzb3J0XCIpLmZpbmQoXCJvcHRpb246c2VsZWN0ZWRcIikuZGF0YShcInNvcnRcIik7XG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJTdHJpbmcgPSBgJmZpbHRlcnNCeT17XCJjYXRlZ29yeV9pZFwiOlwiJHt0aGlzLmdDYXRlZ29yeUlkfVwifWA7XG4gICAgICAgICAgICBsZXQgYWpheFVybCA9IGAke2NvbmZpZy5hcGlSb290VXJsfS9zZWFyY2g/c3RvcmVfaGFzaD0ke2NvbmZpZy5zdG9yZUhhc2h9JmlzX2ZhY2V0cz0xJmNhdGFsb2dfaWQ9JHt0aGlzLmdDYXRhbG9nSWR9JHtmaWx0ZXJTdHJpbmd9JnBhZ2VOdW1iZXI9JHt0aGlzLnBhZ2VOdW1iZXJ9JnBhZ2VTaXplPSR7dGhpcy5wYWdlU2l6ZX0mc29ydEZpZWxkPSR7dGhpcy5zb3J0RmllbGR9JnNvcnRPcmRlcj0ke3RoaXMuc29ydE9yZGVyfWA7XG4gICAgICAgICAgICBhamF4VXJsID0gZW5jb2RlVVJJKGFqYXhVcmwpO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2goYWpheFVybCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRGYWNldHMocmVzKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbml0UHJvZHVjdHMocmVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIF9pbml0UHJvZHVjdHMocmVzKSB7XG4gICAgICAgIGxldCB1bCA9ICQoXCIjYjJiX3NlYXJjaF9yZXN1bHRcIikuZmluZChcIi5wcm9kdWN0R3JpZFwiKTtcbiAgICAgICAgdWwuZW1wdHkoKTtcblxuICAgICAgICBsZXQgcHJvZHMgPSByZXMucGF5bG9hZDtcbiAgICAgICAgaWYgKCFwcm9kcyB8fCBwcm9kcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cblxuICAgICAgICBmb3IgKGxldCBpIGluIHByb2RzKSB7XG5cbiAgICAgICAgICAgIGxldCBiYXNlX3ByaWNlID0gcHJvZHNbaV0uYmFzZV9wcmljZTtcbiAgICAgICAgICAgIGxldCB0aWVyX3ByaWNlO1xuICAgICAgICAgICAgbGV0IGNhdGFsb2dfcHJpY2UgPSBiYXNlX3ByaWNlO1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdF9pZCA9IHByb2RzW2ldLnByb2R1Y3RfaWQ7XG4gICAgICAgICAgICBjb25zdCB2YXJpYW50QXJyID0gdGhpcy5nQ2F0YWxvZ1Byb2R1Y3RzW3Byb2R1Y3RfaWRdIHx8IFtdO1xuICAgICAgICAgICAgaWYgKHZhcmlhbnRBcnIubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICB0aWVyX3ByaWNlID0gdmFyaWFudEFyclswXS50aWVyX3ByaWNlIHx8IFtdO1xuICAgICAgICAgICAgICAgIGNhdGFsb2dfcHJpY2UgPSB0aGlzLmdldENhdGFsb2dQcmljZShiYXNlX3ByaWNlLCB0aWVyX3ByaWNlLCAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHJycF9wcmljZSA9IGA8c3BhbiBjbGFzcz1cImIyYi1ycnAtcHJpY2VcIj4kJHtwcmljZXNTdHlsZShiYXNlX3ByaWNlLCAyKX08L3NwYW4+YDtcblxuICAgICAgICAgICAgaWYgKGJhc2VfcHJpY2UgPT0gY2F0YWxvZ19wcmljZSkge1xuICAgICAgICAgICAgICAgIHJycF9wcmljZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vY2F0YWxvZ19wcmljZSA9IHBhcnNlRmxvYXQoY2F0YWxvZ19wcmljZSkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgIGNhdGFsb2dfcHJpY2UgPSBwcmljZXNTdHlsZShjYXRhbG9nX3ByaWNlLCAyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBjYXRhbG9nX3ByaWNlIFwiICsgY2F0YWxvZ19wcmljZSk7XG5cbiAgICAgICAgICAgIGxldCBwcm9fYmdfYSA9IGA8YSBocmVmPVwiJHtwcm9kc1tpXS5wcm9kdWN0X3VybH1cIj5gICtcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImNhcmQtaW1nLWNvbnRhaW5lclwiPmAgK1xuICAgICAgICAgICAgICAgIGA8aW1nIGNsYXNzPVwiY2FyZC1pbWFnZSBsYXp5YXV0b3NpemVzIGxhenlsb2FkZWRcIiBkYXRhLXNpemVzPVwiYXV0b1wiIHNyYz1cIiR7cHJvZHNbaV0ucHJpbWFyeV9pbWFnZS5zdGFuZGFyZF91cmx9XCIgZGF0YS1zcmM9XCIke3Byb2RzW2ldLnByaW1hcnlfaW1hZ2Uuc3RhbmRhcmRfdXJsfVwiIGFsdD1cIlwiIHRpdGxlPVwiXCIgc2l6ZXM9XCIyNjNweFwiPmAgK1xuICAgICAgICAgICAgICAgIGA8L2Rpdj48L2E+YDtcbiAgICAgICAgICAgIGxldCBmaWdjYXB0aW9uID0gYDxmaWdjYXB0aW9uIGNsYXNzPVwiY2FyZC1maWdjYXB0aW9uXCI+PGRpdiBjbGFzcz1cImNhcmQtZmlnY2FwdGlvbi1ib2R5XCI+YCArXG4gICAgICAgICAgICAgICAgYDxhIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tc21hbGwgY2FyZC1maWdjYXB0aW9uLWJ1dHRvbiBxdWlja3ZpZXdcIiBkYXRhLXByb2R1Y3QtaWQ9XCIke3Byb2RzW2ldLnByb2R1Y3RfaWR9XCI+UXVpY2sgdmlldzwvYT5gICtcbiAgICAgICAgICAgICAgICBgPGxhYmVsIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tc21hbGwgY2FyZC1maWdjYXB0aW9uLWJ1dHRvblwiIGZvcj1cImNvbXBhcmUtJHtwcm9kc1tpXS5wcm9kdWN0X2lkfVwiPkNvbXBhcmUgYCArXG4gICAgICAgICAgICAgICAgYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvZHVjdHNbXVwiIHZhbHVlPVwiJHtwcm9kc1tpXS5wcm9kdWN0X2lkfVwiIGlkPVwiY29tcGFyZS0ke3Byb2RzW2ldLnByb2R1Y3RfaWR9XCIgZGF0YS1jb21wYXJlLWlkPVwiJHtwcm9kc1tpXS5wcm9kdWN0X2lkfVwiPmAgK1xuICAgICAgICAgICAgICAgIGA8L2xhYmVsPmAgK1xuICAgICAgICAgICAgICAgIGA8L2Rpdj48L2ZpZ2NhcHRpb24+YDtcblxuICAgICAgICAgICAgbGV0IGNhcmRfYm9keSA9IGA8aDQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+PGEgaHJlZj1cIiR7cHJvZHNbaV0ucHJvZHVjdF91cmx9XCI+JHtwcm9kc1tpXS5wcm9kdWN0X25hbWV9PC9hPjwvaDQ+YCArXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJjYXJkLXRleHRcIiBkYXRhLXRlc3QtaW5mby10eXBlPVwicHJpY2VcIj5gICtcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheCBub24tc2FsZS1wcmljZS0td2l0aG91dFRheFwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5XYXM6YCArXG4gICAgICAgICAgICAgICAgYDxzcGFuIGRhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLW5vbi1zYWxlXCI+PC9zcGFuPmAgK1xuICAgICAgICAgICAgICAgIGA8L2Rpdj5gICtcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheFwiPmAgK1xuICAgICAgICAgICAgICAgIGA8c3BhbiBjbGFzcz1cInByaWNlLWxhYmVsXCI+PC9zcGFuPmAgK1xuICAgICAgICAgICAgICAgIGA8c3BhbiBjbGFzcz1cInByaWNlLW5vdy1sYWJlbFwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5Ob3c6PC9zcGFuPmAgK1xuICAgICAgICAgICAgICAgIGAke3JycF9wcmljZX08c3BhbiBkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS13aXRob3V0VGF4XCI+JCR7Y2F0YWxvZ19wcmljZX08L3NwYW4+YCArXG4gICAgICAgICAgICAgICAgYDwvZGl2PjwvZGl2PmA7XG4gICAgICAgICAgICB1bC5hcHBlbmQoYDxsaSBjbGFzcz1cInByb2R1Y3RcIj48YXJ0aWNsZSBjbGFzcz1cImNhcmRcIj5gICtcbiAgICAgICAgICAgICAgICBgPGZpZ3VyZSBjbGFzcz1cImNhcmQtZmlndXJlXCI+JHtwcm9fYmdfYX0ke2ZpZ2NhcHRpb259PC9maWd1cmU+YCArXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj4ke2NhcmRfYm9keX08L2Rpdj5gICtcbiAgICAgICAgICAgICAgICBgPC9hcnRpY2xlPjwvbGk+YClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9pbml0RmFjZXRzKHJlcykge1xuICAgICAgICB0aGlzLnNlbGVjdGVkRmFjZXRzID0ge307XG4gICAgICAgIGNvbnN0IGZhY2V0cyA9IHJlcy5mYWNldHM7XG5cbiAgICAgICAgY29uc3QgJHByb2R1Y3RGaWx0ZXJzQ29udGFpbmVyID0gJChcIiNwcm9kdWN0LWZpbHRlcnMtY29udGFpbmVyXCIpO1xuICAgICAgICBsZXQgZmlsdGVySHRtbCA9IFwiXCI7XG4gICAgICAgIGxldCBmYWNldHNDb3VudCA9IGZhY2V0cy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmFjZXRzQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZmFjZXQgPSBmYWNldHNbaV07XG5cbiAgICAgICAgICAgIGxldCBmYWNldEh0bWwgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKGZhY2V0LmF0dHJpYnV0ZSAhPT0gXCJjYXRlZ29yeV9pZFwiKSB7XG4gICAgICAgICAgICAgICAgZmFjZXRIdG1sID0gdGhpcy5nZXRGYWNldEh0bWwoZmFjZXQudHlwZV9uYW1lLCBmYWNldC5idWNrZXRzLCBmYWNldC5hdHRyaWJ1dGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZmFjZXRIdG1sLnRyaW0oKSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgZmlsdGVySHRtbCArPSBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtZmlsdGVycy1ibG9ja1wiIGRhdGEtYXR0cmlidXRlPVwiJHtmYWNldC5hdHRyaWJ1dGV9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWZpbHRlcnMtdGl0bGUgb3BlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiR7ZmFjZXQudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWZpbHRlcnMtdGl0bGUtLXRvZ2dsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9nZ2xlLW9wZW5cIj4mcGx1czs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b2dnbGUtY2xvc2VcIj4mbWludXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwcm9kdWN0LWZpbHRlcnMtbGlzdCBvcGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2ZhY2V0SHRtbH1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAkcHJvZHVjdEZpbHRlcnNDb250YWluZXIuaHRtbChmaWx0ZXJIdG1sKTtcbiAgICAgICAgaWYgKGZpbHRlckh0bWwudHJpbSgpID09IFwiXCIpIHtcbiAgICAgICAgICAgICQoXCIjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyLWIyYlwiKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRGYWNldHMpO1xuICAgICAgICB0aGlzLl9iaW5kRXZlbnRzKCk7XG5cbiAgICB9XG5cbiAgICBnZXRGYWNldEh0bWwodHlwZV9uYW1lLCBidWNrZXRzLCBhdHRyaWJ1dGUpIHtcbiAgICAgICAgbGV0IGZhY2V0SHRtbCA9IFwiXCI7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlX25hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJzZWxlY3RcIjpcbiAgICAgICAgICAgICAgICBmYWNldEh0bWwgKz0gXCJcIjtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJ1Y2tldHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnVja2V0ID0gYnVja2V0c1tqXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnVja2V0X3ZhbHVlID0gYnVja2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0NoZWNrZWQgPSBidWNrZXQuc2VsZWN0ID8gJ2NoZWNrZWQnIDogJyc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChidWNrZXQuY291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmYWNldEh0bWwgKz0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBkYXRhLWZhY2V0LXNlYXJjaCBkYXRhLWZhY2V0LWF0dHJpYnV0ZT1cIiR7YXR0cmlidXRlfVwiIGRhdGEtZmFjZXQtdmFsdWU9XCIke2J1Y2tldF92YWx1ZX1cIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCIke2J1Y2tldC52YWx1ZX1cIiAke2lzQ2hlY2tlZH0+PHNwYW4+JHtidWNrZXQudGl0bGV9PC9zcGFuPiA8c3Bhbj4oJHtidWNrZXQuY291bnR9KTwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5gO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZhY2V0c1thdHRyaWJ1dGVdID0gdGhpcy5zZWxlY3RlZEZhY2V0c1thdHRyaWJ1dGVdIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGYWNldHNbYXR0cmlidXRlXS5wdXNoKGJ1Y2tldF92YWx1ZSArIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNsaWRlclwiOlxuICAgICAgICAgICAgICAgIGZhY2V0SHRtbCArPSBcIlwiO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYnVja2V0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBidWNrZXQgPSBidWNrZXRzW2pdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBidWNrZXRfdmFsdWUgPSBidWNrZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQ2hlY2tlZCA9IGJ1Y2tldC5zZWxlY3QgPyAnY2hlY2tlZCcgOiAnJztcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYnVja2V0LmxlZnQgIT0gMCB8fCBidWNrZXQucmlnaHQgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZhY2V0c1thdHRyaWJ1dGVdID0gdGhpcy5zZWxlY3RlZEZhY2V0c1thdHRyaWJ1dGVdIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZhY2V0c1thdHRyaWJ1dGVdLnB1c2goYnVja2V0LmxlZnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZhY2V0c1thdHRyaWJ1dGVdLnB1c2goYnVja2V0LnJpZ2h0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZmFjZXRIdG1sICs9IGA8bGk+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImNsZWFyLXByaWNlLXJhbmdlXCIgZGF0YS1mYWNldGVkLXNlYXJjaC1yYW5nZT1cImNsZWFyXCI+Q2xlYXI8L2E+PGRpdiBjbGFzcz1cImZvcm0tbWluTWF4Um93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJtaW5fcHJpY2VcIiBwbGFjZWhvbGRlcj1cIk1pbi5cIiBtaW49XCIwXCIgY2xhc3M9XCJmb3JtLWlucHV0IGZvcm0taW5wdXQtLXNtYWxsXCIgcmVxdWlyZWQ9XCJcIiB0eXBlPVwibnVtYmVyXCIgdmFsdWU9XCIke2J1Y2tldC5sZWZ0fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJtYXhfcHJpY2VcIiBwbGFjZWhvbGRlcj1cIk1heC5cIiBtaW49XCIwXCIgY2xhc3M9XCJmb3JtLWlucHV0IGZvcm0taW5wdXQtLXNtYWxsXCIgcmVxdWlyZWQ9XCJcIiB0eXBlPVwibnVtYmVyXCIgdmFsdWU9XCIke2J1Y2tldC5yaWdodH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1zbWFsbFwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWZhY2V0ZWQtc2VhcmNoLXJhbmdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+PC9saT5gO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmFjZXRIdG1sICs9IGA8bGk+PGRpdiBjbGFzcz1cImZvcm0tbWluTWF4Um93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJtaW5fcHJpY2VcIiBwbGFjZWhvbGRlcj1cIk1pbi5cIiBtaW49XCIwXCIgY2xhc3M9XCJmb3JtLWlucHV0IGZvcm0taW5wdXQtLXNtYWxsXCIgcmVxdWlyZWQ9XCJcIiB0eXBlPVwibnVtYmVyXCIgdmFsdWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibWF4X3ByaWNlXCIgcGxhY2Vob2xkZXI9XCJNYXguXCIgbWluPVwiMFwiIGNsYXNzPVwiZm9ybS1pbnB1dCBmb3JtLWlucHV0LS1zbWFsbFwiIHJlcXVpcmVkPVwiXCIgdHlwZT1cIm51bWJlclwiIHZhbHVlPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tc21hbGxcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1mYWNldGVkLXNlYXJjaC1yYW5nZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjwvbGk+YDtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhY2V0SHRtbDtcblxuICAgIH1cblxuICAgIF9iaW5kRXZlbnRzKCkge1xuICAgICAgICAkKFwiLnByb2R1Y3QtZmlsdGVycy10aXRsZVwiKS51bmJpbmQoKS5iaW5kKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcIm9wZW5cIikubmV4dCgnLnByb2R1Y3QtZmlsdGVycy1saXN0JykudG9nZ2xlQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKFwiW2RhdGEtZmFjZXQtc2VhcmNoXVwiKS51bmJpbmQoKS5iaW5kKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWNldCBjbGlja1wiKTtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dENoZWNrQm94ID0gJHRhcmdldC5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcbiAgICAgICAgICAgIGlmICgkaW5wdXRDaGVja0JveC5sZW5ndGggPiAwICYmICRpbnB1dENoZWNrQm94LnByb3AoXCJjaGVja2VkXCIpID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkaW5wdXRDaGVja0JveC5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGlucHV0Q2hlY2tCb3gucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZhY2V0QXR0cmlidXRlID0gJHRhcmdldC5hdHRyKCdkYXRhLWZhY2V0LWF0dHJpYnV0ZScpO1xuICAgICAgICAgICAgY29uc3QgZmFjZXRWYWx1ZSA9ICR0YXJnZXQuYXR0cignZGF0YS1mYWNldC12YWx1ZScpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEZhY2V0c1tmYWNldEF0dHJpYnV0ZV0pIHtcbiAgICAgICAgICAgICAgICAvL2V4aXN0IGZhY2V0XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlX2FyciA9IHRoaXMuc2VsZWN0ZWRGYWNldHNbZmFjZXRBdHRyaWJ1dGVdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlX2luZGV4ID0gJC5pbkFycmF5KGZhY2V0VmFsdWUsIHZhbHVlX2Fycik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlX2luZGV4ID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5ldyB2YWx1ZSwgYWRkXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlX2Fyci5wdXNoKGZhY2V0VmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGV4aXN0IHZhbHVlLCByZW1vdmVcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVfYXJyLnNwbGljZSh2YWx1ZV9pbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaWYgbm8gdmFsdWVzLCByZW1vdmUgdGhlIGZpbHRlclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZV9hcnIubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0ZWRGYWNldHNbZmFjZXRBdHRyaWJ1dGVdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBuZXcgZmFjZXRcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRmFjZXRzW2ZhY2V0QXR0cmlidXRlXSA9IFtmYWNldFZhbHVlXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGZpbHRlclN0cmluZyA9IFwiXCI7IC8vZmlsdGVyc0J5PXtcImNhdGVnb3J5X2lkXCI6JTIwXCIyM3w0MXwzOXw2MVwifVxuXG4gICAgICAgICAgICAkLmVhY2godGhpcy5zZWxlY3RlZEZhY2V0cywgZnVuY3Rpb24oZmFjZXQsIHZhbHVlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlc1N0cmluZyA9IHZhbHVlcy5qb2luKFwifFwiKTtcbiAgICAgICAgICAgICAgICBmaWx0ZXJTdHJpbmcgKz0gYCxcIiR7ZmFjZXR9XCI6XCIke3ZhbHVlc1N0cmluZ31cImA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZmlsdGVyU3RyaW5nICs9IGAsXCJjYXRlZ29yeV9pZFwiOlwiJHt0aGlzLmdDYXRlZ29yeUlkfVwiYDtcblxuICAgICAgICAgICAgaWYgKGZpbHRlclN0cmluZy50cmltKCkgIT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGZpbHRlclN0cmluZyA9IGZpbHRlclN0cmluZy5zdWJzdHJpbmcoMSwgZmlsdGVyU3RyaW5nLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgZmlsdGVyU3RyaW5nID0gXCImZmlsdGVyc0J5PXtcIiArIGZpbHRlclN0cmluZyArIFwifVwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgYWpheFVybDIgPSBgJHtjb25maWcuYXBpUm9vdFVybH0vc2VhcmNoP3N0b3JlX2hhc2g9JHtjb25maWcuc3RvcmVIYXNofSZpc19mYWNldHM9MSZjYXRhbG9nX2lkPSR7dGhpcy5nQ2F0YWxvZ0lkfSR7ZmlsdGVyU3RyaW5nfSZzb3J0RmllbGQ9JHt0aGlzLnNvcnRGaWVsZH0mc29ydE9yZGVyPSR7dGhpcy5zb3J0T3JkZXJ9YDtcbiAgICAgICAgICAgIGFqYXhVcmwyID0gZW5jb2RlVVJJKGFqYXhVcmwyKTtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoKGFqYXhVcmwyKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5faW5pdEZhY2V0cyhyZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRQcm9kdWN0cyhyZXMpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgICAgICAkKFwiW2RhdGEtZmFjZXRlZC1zZWFyY2gtcmFuZ2VdXCIpLnVuYmluZCgpLmJpbmQoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAxO1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCAkbWluUHJpY2UgPSAkKCdpbnB1dFtuYW1lPVwibWluX3ByaWNlXCJdJyk7XG4gICAgICAgICAgICBjb25zdCAkbWF4UHJpY2UgPSAkKCdpbnB1dFtuYW1lPVwibWF4X3ByaWNlXCJdJyk7XG4gICAgICAgICAgICBjb25zdCBtaW5QcmljZVZhbHVlID0gJG1pblByaWNlLnZhbCgpO1xuICAgICAgICAgICAgY29uc3QgbWF4UHJpY2VWYWx1ZSA9ICRtYXhQcmljZS52YWwoKTtcbiAgICAgICAgICAgIGlmIChtaW5QcmljZVZhbHVlID09IFwiXCIgfHwgbWF4UHJpY2VWYWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIGVudGVyIHByaWNlIHJhbmdlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1pblByaWNlVmFsdWUgPT0gMCAmJiBtYXhQcmljZVZhbHVlID09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJQbGVhc2UgZW50ZXIgcHJpY2UgcmFuZ2VcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyc2VJbnQobWluUHJpY2VWYWx1ZSkgPiBwYXJzZUludChtYXhQcmljZVZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhbGVydChcIk1pbiBwcmljZSBjYW4ndCBiZSBiaWdnZXIgdGhhbiBNYXggcHJpY2VcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkdGFyZ2V0LmF0dHIoXCJkYXRhLWZhY2V0ZWQtc2VhcmNoLXJhbmdlXCIpID09IFwiY2xlYXJcIikge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGVkRmFjZXRzW1wiY2FsY3VsYXRlZF9wcmljZVwiXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZhY2V0c1tcImNhbGN1bGF0ZWRfcHJpY2VcIl0gPSBbbWluUHJpY2VWYWx1ZSwgbWF4UHJpY2VWYWx1ZV07XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgbGV0IGZpbHRlclN0cmluZyA9IFwiXCI7IC8vZmlsdGVyc0J5PXtcImNhdGVnb3J5X2lkXCI6JTIwXCIyM3w0MXwzOXw2MVwifVxuXG4gICAgICAgICAgICAkLmVhY2godGhpcy5zZWxlY3RlZEZhY2V0cywgZnVuY3Rpb24oZmFjZXQsIHZhbHVlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlc1N0cmluZyA9IHZhbHVlcy5qb2luKFwifFwiKTtcbiAgICAgICAgICAgICAgICBmaWx0ZXJTdHJpbmcgKz0gYCxcIiR7ZmFjZXR9XCI6XCIke3ZhbHVlc1N0cmluZ31cImA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZmlsdGVyU3RyaW5nICs9IGAsXCJjYXRlZ29yeV9pZFwiOlwiJHt0aGlzLmdDYXRlZ29yeUlkfVwiYDtcblxuICAgICAgICAgICAgaWYgKGZpbHRlclN0cmluZy50cmltKCkgIT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGZpbHRlclN0cmluZyA9IGZpbHRlclN0cmluZy5zdWJzdHJpbmcoMSwgZmlsdGVyU3RyaW5nLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgZmlsdGVyU3RyaW5nID0gXCImZmlsdGVyc0J5PXtcIiArIGZpbHRlclN0cmluZyArIFwifVwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgYWpheFVybDIgPSBgJHtjb25maWcuYXBpUm9vdFVybH0vc2VhcmNoP3N0b3JlX2hhc2g9JHtjb25maWcuc3RvcmVIYXNofSZpc19mYWNldHM9MSZjYXRhbG9nX2lkPSR7dGhpcy5nQ2F0YWxvZ0lkfSR7ZmlsdGVyU3RyaW5nfSZwYWdlTnVtYmVyPSR7dGhpcy5wYWdlTnVtYmVyfSZwYWdlU2l6ZT0ke3RoaXMucGFnZVNpemV9JnNvcnRGaWVsZD0ke3RoaXMuc29ydEZpZWxkfSZzb3J0T3JkZXI9JHt0aGlzLnNvcnRPcmRlcn1gO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYWpheFVybDIpO1xuICAgICAgICAgICAgYWpheFVybDIgPSBlbmNvZGVVUkkoYWpheFVybDIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYWpheFVybDIpO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2goYWpheFVybDIpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5faW5pdEZhY2V0cyhyZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRQcm9kdWN0cyhyZXMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlcy50b3RhbF9jb3VudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjanFQYWdpbmF0aW9uXCIpLmh0bWwoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vJChcIi5wYWdlLXNpZGViYXItYjJiXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJChcIiNqcVBhZ2luYXRpb25cIikuanFQYWdpbmF0b3Ioe1xuICAgICAgICAgICAgICAgICAgICB0b3RhbFBhZ2VzOiBNYXRoLmNlaWwocmVzLnRvdGFsX2NvdW50IC8gdGhpcy5wYWdlU2l6ZSksXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGVQYWdlczogNSxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2U6IHRoaXMucGFnZU51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlOiAobnVtLCB0eXBlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYWdlTnVtYmVyID09IG51bSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gbnVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFqYXhVcmwgPSBgJHtjb25maWcuYXBpUm9vdFVybH0vc2VhcmNoP3N0b3JlX2hhc2g9JHtjb25maWcuc3RvcmVIYXNofSZpc19mYWNldHM9MSZjYXRhbG9nX2lkPSR7dGhpcy5nQ2F0YWxvZ0lkfSR7ZmlsdGVyU3RyaW5nfSZwYWdlTnVtYmVyPSR7dGhpcy5wYWdlTnVtYmVyfSZwYWdlU2l6ZT0ke3RoaXMucGFnZVNpemV9JnNvcnRGaWVsZD0ke3RoaXMuc29ydEZpZWxkfSZzb3J0T3JkZXI9JHt0aGlzLnNvcnRPcmRlcn1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWpheFVybCA9IGVuY29kZVVSSShhamF4VXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoKGFqYXhVcmwpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbml0RmFjZXRzKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5pdFByb2R1Y3RzKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldENhdGFsb2dQcmljZShiYXNlX3ByaWNlLCB0aWVyX3ByaWNlX2FycmF5LCBxdHkpIHtcbiAgICAgICAgLy9sZXQgdGllcl9wcmljZSA9IGJhc2VfcHJpY2U7XG4gICAgICAgIGxldCB0aWVyX3ByaWNlID0gYmFzZV9wcmljZTtcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRpZXJfcHJpY2VfYXJyYXkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0aWVyX3ByaWNlX2FycmF5W2pdLnR5cGU7XG4gICAgICAgICAgICBjb25zdCBiYXNlX3F0eSA9IHRpZXJfcHJpY2VfYXJyYXlbal0ucXR5O1xuICAgICAgICAgICAgY29uc3QgcHJpY2UgPSB0aWVyX3ByaWNlX2FycmF5W2pdLnByaWNlO1xuXG4gICAgICAgICAgICBpZiAocXR5ID49IGJhc2VfcXR5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gXCJmaXhlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpZXJfcHJpY2UgPSBwcmljZTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRpZXJfcHJpY2UgPSBiYXNlX3ByaWNlIC0gYmFzZV9wcmljZSAqIHByaWNlIC8gMTAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGllcl9wcmljZTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9