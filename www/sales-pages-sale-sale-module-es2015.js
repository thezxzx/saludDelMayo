(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sales-pages-sale-sale-module"],{

/***/ "FGgO":
/*!****************************************************!*\
  !*** ./src/app/sales/pipes/product-filter.pipe.ts ***!
  \****************************************************/
/*! exports provided: ProductFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilterPipe", function() { return ProductFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ProductFilterPipe = class ProductFilterPipe {
    transform(allProducts, searchProduct) {
        if (searchProduct === '') {
            return;
        }
        searchProduct = searchProduct.toLowerCase();
        return allProducts.filter(item => {
            return item.name.toLowerCase().includes(searchProduct);
        });
    }
};
ProductFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'productFilter'
    })
], ProductFilterPipe);



/***/ }),

/***/ "IbY2":
/*!*********************************************************!*\
  !*** ./src/app/sales/pages/sale/sale-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SalePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalePageRoutingModule", function() { return SalePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sale_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sale.page */ "ah6Z");




const routes = [
    {
        path: '',
        component: _sale_page__WEBPACK_IMPORTED_MODULE_3__["SalePage"]
    }
];
let SalePageRoutingModule = class SalePageRoutingModule {
};
SalePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SalePageRoutingModule);



/***/ }),

/***/ "Kq7c":
/*!*************************************************!*\
  !*** ./src/app/sales/pages/sale/sale.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "ah6Z":
/*!***********************************************!*\
  !*** ./src/app/sales/pages/sale/sale.page.ts ***!
  \***********************************************/
/*! exports provided: SalePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalePage", function() { return SalePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sale_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sale.page.html */ "iUaK");
/* harmony import */ var _sale_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sale.page.scss */ "Kq7c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_sale_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/sale.service */ "t5L3");
/* harmony import */ var _products_services_products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../products/services/products.service */ "8z/i");







let SalePage = class SalePage {
    constructor(menu, saleService, productsService) {
        this.menu = menu;
        this.saleService = saleService;
        this.productsService = productsService;
        this.search = '';
        this.allProducts = [];
        this.productsService.getAllProducts().subscribe(products => {
            this.allProducts = products;
        });
    }
    ngOnInit() {
        // Evita que el menú se abra arrastrando
        this.menu.swipeGesture(false, 'first');
    }
    // Abrir menú
    onToggleMenu() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
    // Buscar producto por el buscador ( nombre )
    onSearchProduct(productName) {
        this.search = productName.detail.value;
    }
    // Obtener producto por código de barra
    getProductByBarCode(barCode) {
        this.saleService.getProductByBarCode(barCode);
    }
};
SalePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _services_sale_service__WEBPACK_IMPORTED_MODULE_5__["SaleService"] },
    { type: _products_services_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"] }
];
SalePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sale',
        template: _raw_loader_sale_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sale_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SalePage);



/***/ }),

/***/ "iUaK":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sales/pages/sale/sale.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"onToggleMenu()\">\n        <ion-icon slot=\"icon-only\" name=\"menu-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Ventas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- \n  Campos a mostrar en la tabla\n  * Codigo\n  * nombre\n  * cantidad\n  * precio\n -->\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"9\">\n        <ion-grid>\n          <ion-row> <!-- Encabezados -->\n            <ion-col size=\"3\" class=\"ion-text-center\"><h6> Código </h6></ion-col>\n            <ion-col size=\"3\" class=\"ion-text-center\"><h6> Nombre </h6></ion-col>\n            <ion-col size=\"2\" class=\"ion-text-center\"><h6> Precio </h6></ion-col>\n            <ion-col size=\"2\" class=\"ion-text-center\"><h6> Cantidad </h6></ion-col>\n          </ion-row> <!-- Fin de los encabezados-->\n          <ion-row *ngFor=\"let product of [0, 1, 2]\"> <!-- Fila a repetir -->\n            <ion-col size=\"3\" class=\"ion-text-center\">\n              <p>Código</p>\n            </ion-col>\n            <ion-col size=\"3\" class=\"ion-text-center\">\n              <p>Nombre</p>\n            </ion-col>\n            <ion-col size=\"2\" class=\"ion-text-center\">\n              <p>Precio</p>\n            </ion-col>\n            <ion-col size=\"2\" class=\"ion-text-center\">\n              <ion-input type=\"number\" value=\"1\" min=\"0\" max=\"20\"></ion-input>\n            </ion-col>\n            <ion-col size=\"2\">\n              <ion-button color=\"danger\" (click)=\" getProductByBarCode( '123123123' ) \">\n                <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row> <!-- Fin de la fila a repetir-->\n        </ion-grid>\n      </ion-col> <!-- Fin de la columna de 9-->\n      <ion-col size=\"3\"> <!-- Columna de la barra de búsqueda-->\n        <ion-searchbar\n          placeholder=\"buscar\"\n          animated\n          debounce=\"500\"\n          (ionChange)=\"onSearchProduct( $event )\"\n          >\n        </ion-searchbar>\n        <ion-list>\n          <ion-item *ngFor=\"let product of allProducts | productFilter: search\">\n            <ion-label>{{ product.name }}</ion-label>\n          </ion-item>\n        </ion-list>\n          <!-- <ion-list *ngIf=\"isItemAvailable\">\n            <ion-item *ngFor=\"let producto of productosFiltrados\"> {{ producto.nombre }} </ion-item>\n          </ion-list> -->\n          \n      </ion-col> <!-- Fin de la columna de la barra de búsqueda-->\n    </ion-row> <!-- Fin de la fila principal -->\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "t5L3":
/*!************************************************!*\
  !*** ./src/app/sales/services/sale.service.ts ***!
  \************************************************/
/*! exports provided: SaleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleService", function() { return SaleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _products_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../products/services/products.service */ "8z/i");



let SaleService = class SaleService {
    constructor(productsService) {
        this.productsService = productsService;
    }
    getProductByBarCode(barCode) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const product = yield this.productsService.getProductByBarCode(barCode);
            console.log(product);
        });
    }
};
SaleService.ctorParameters = () => [
    { type: _products_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }
];
SaleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SaleService);



/***/ }),

/***/ "uzno":
/*!*************************************************!*\
  !*** ./src/app/sales/pages/sale/sale.module.ts ***!
  \*************************************************/
/*! exports provided: SalePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalePageModule", function() { return SalePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _sale_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sale-routing.module */ "IbY2");
/* harmony import */ var _sale_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sale.page */ "ah6Z");
/* harmony import */ var _pipes_product_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/product-filter.pipe */ "FGgO");








let SalePageModule = class SalePageModule {
};
SalePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sale_routing_module__WEBPACK_IMPORTED_MODULE_5__["SalePageRoutingModule"]
        ],
        declarations: [
            _sale_page__WEBPACK_IMPORTED_MODULE_6__["SalePage"],
            _pipes_product_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["ProductFilterPipe"]
        ]
    })
], SalePageModule);



/***/ })

}]);
//# sourceMappingURL=sales-pages-sale-sale-module-es2015.js.map