(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sales-pages-sale-sale-module"], {
    /***/
    "FGgO":
    /*!****************************************************!*\
      !*** ./src/app/sales/pipes/product-filter.pipe.ts ***!
      \****************************************************/

    /*! exports provided: ProductFilterPipe */

    /***/
    function FGgO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductFilterPipe", function () {
        return ProductFilterPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProductFilterPipe = /*#__PURE__*/function () {
        function ProductFilterPipe() {
          _classCallCheck(this, ProductFilterPipe);
        }

        _createClass(ProductFilterPipe, [{
          key: "transform",
          value: function transform(allProducts, searchProduct) {
            if (searchProduct === '') {
              return;
            }

            searchProduct = searchProduct.toLowerCase();
            return allProducts.filter(function (item) {
              return item.name.toLowerCase().includes(searchProduct);
            });
          }
        }]);

        return ProductFilterPipe;
      }();

      ProductFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'productFilter'
      })], ProductFilterPipe);
      /***/
    },

    /***/
    "IbY2":
    /*!*********************************************************!*\
      !*** ./src/app/sales/pages/sale/sale-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: SalePageRoutingModule */

    /***/
    function IbY2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SalePageRoutingModule", function () {
        return SalePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _sale_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sale.page */
      "ah6Z");

      var routes = [{
        path: '',
        component: _sale_page__WEBPACK_IMPORTED_MODULE_3__["SalePage"]
      }];

      var SalePageRoutingModule = function SalePageRoutingModule() {
        _classCallCheck(this, SalePageRoutingModule);
      };

      SalePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SalePageRoutingModule);
      /***/
    },

    /***/
    "Kq7c":
    /*!*************************************************!*\
      !*** ./src/app/sales/pages/sale/sale.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function Kq7c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "ah6Z":
    /*!***********************************************!*\
      !*** ./src/app/sales/pages/sale/sale.page.ts ***!
      \***********************************************/

    /*! exports provided: SalePage */

    /***/
    function ah6Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SalePage", function () {
        return SalePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sale_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sale.page.html */
      "iUaK");
      /* harmony import */


      var _sale_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sale.page.scss */
      "Kq7c");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_sale_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/sale.service */
      "t5L3");
      /* harmony import */


      var _products_services_products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../products/services/products.service */
      "8z/i");

      var SalePage = /*#__PURE__*/function () {
        function SalePage(menu, saleService, productsService) {
          var _this = this;

          _classCallCheck(this, SalePage);

          this.menu = menu;
          this.saleService = saleService;
          this.productsService = productsService;
          this.search = '';
          this.allProducts = [];
          this.productsService.getAllProducts().subscribe(function (products) {
            _this.allProducts = products;
          });
        }

        _createClass(SalePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Evita que el menú se abra arrastrando
            this.menu.swipeGesture(false, 'first');
          } // Abrir menú

        }, {
          key: "onToggleMenu",
          value: function onToggleMenu() {
            this.menu.enable(true, 'first');
            this.menu.open('first');
          } // Buscar producto por el buscador ( nombre )

        }, {
          key: "onSearchProduct",
          value: function onSearchProduct(productName) {
            this.search = productName.detail.value;
          } // Obtener producto por código de barra

        }, {
          key: "getProductByBarCode",
          value: function getProductByBarCode(barCode) {
            this.saleService.getProductByBarCode(barCode);
          }
        }]);

        return SalePage;
      }();

      SalePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _services_sale_service__WEBPACK_IMPORTED_MODULE_5__["SaleService"]
        }, {
          type: _products_services_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"]
        }];
      };

      SalePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sale',
        template: _raw_loader_sale_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sale_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SalePage);
      /***/
    },

    /***/
    "iUaK":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sales/pages/sale/sale.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function iUaK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"onToggleMenu()\">\n        <ion-icon slot=\"icon-only\" name=\"menu-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Ventas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- \n  Campos a mostrar en la tabla\n  * Codigo\n  * nombre\n  * cantidad\n  * precio\n -->\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"9\">\n        <ion-grid>\n          <ion-row> <!-- Encabezados -->\n            <ion-col size=\"3\" class=\"ion-text-center\"><h6> Código </h6></ion-col>\n            <ion-col size=\"3\" class=\"ion-text-center\"><h6> Nombre </h6></ion-col>\n            <ion-col size=\"2\" class=\"ion-text-center\"><h6> Precio </h6></ion-col>\n            <ion-col size=\"2\" class=\"ion-text-center\"><h6> Cantidad </h6></ion-col>\n          </ion-row> <!-- Fin de los encabezados-->\n          <ion-row *ngFor=\"let product of [0, 1, 2]\"> <!-- Fila a repetir -->\n            <ion-col size=\"3\" class=\"ion-text-center\">\n              <p>Código</p>\n            </ion-col>\n            <ion-col size=\"3\" class=\"ion-text-center\">\n              <p>Nombre</p>\n            </ion-col>\n            <ion-col size=\"2\" class=\"ion-text-center\">\n              <p>Precio</p>\n            </ion-col>\n            <ion-col size=\"2\" class=\"ion-text-center\">\n              <ion-input type=\"number\" value=\"1\" min=\"0\" max=\"20\"></ion-input>\n            </ion-col>\n            <ion-col size=\"2\">\n              <ion-button color=\"danger\" (click)=\" getProductByBarCode( '123123123' ) \">\n                <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row> <!-- Fin de la fila a repetir-->\n        </ion-grid>\n      </ion-col> <!-- Fin de la columna de 9-->\n      <ion-col size=\"3\"> <!-- Columna de la barra de búsqueda-->\n        <ion-searchbar\n          placeholder=\"buscar\"\n          animated\n          debounce=\"500\"\n          (ionChange)=\"onSearchProduct( $event )\"\n          >\n        </ion-searchbar>\n        <ion-list>\n          <ion-item *ngFor=\"let product of allProducts | productFilter: search\">\n            <ion-label>{{ product.name }}</ion-label>\n          </ion-item>\n        </ion-list>\n          <!-- <ion-list *ngIf=\"isItemAvailable\">\n            <ion-item *ngFor=\"let producto of productosFiltrados\"> {{ producto.nombre }} </ion-item>\n          </ion-list> -->\n          \n      </ion-col> <!-- Fin de la columna de la barra de búsqueda-->\n    </ion-row> <!-- Fin de la fila principal -->\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "t5L3":
    /*!************************************************!*\
      !*** ./src/app/sales/services/sale.service.ts ***!
      \************************************************/

    /*! exports provided: SaleService */

    /***/
    function t5L3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SaleService", function () {
        return SaleService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _products_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../products/services/products.service */
      "8z/i");

      var SaleService = /*#__PURE__*/function () {
        function SaleService(productsService) {
          _classCallCheck(this, SaleService);

          this.productsService = productsService;
        }

        _createClass(SaleService, [{
          key: "getProductByBarCode",
          value: function getProductByBarCode(barCode) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var product;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.productsService.getProductByBarCode(barCode);

                    case 2:
                      product = _context.sent;
                      console.log(product);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return SaleService;
      }();

      SaleService.ctorParameters = function () {
        return [{
          type: _products_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]
        }];
      };

      SaleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SaleService);
      /***/
    },

    /***/
    "uzno":
    /*!*************************************************!*\
      !*** ./src/app/sales/pages/sale/sale.module.ts ***!
      \*************************************************/

    /*! exports provided: SalePageModule */

    /***/
    function uzno(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SalePageModule", function () {
        return SalePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _sale_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sale-routing.module */
      "IbY2");
      /* harmony import */


      var _sale_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sale.page */
      "ah6Z");
      /* harmony import */


      var _pipes_product_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../pipes/product-filter.pipe */
      "FGgO");

      var SalePageModule = function SalePageModule() {
        _classCallCheck(this, SalePageModule);
      };

      SalePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sale_routing_module__WEBPACK_IMPORTED_MODULE_5__["SalePageRoutingModule"]],
        declarations: [_sale_page__WEBPACK_IMPORTED_MODULE_6__["SalePage"], _pipes_product_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["ProductFilterPipe"]]
      })], SalePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=sales-pages-sale-sale-module-es5.js.map