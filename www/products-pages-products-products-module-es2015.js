(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-pages-products-products-module"],{

/***/ "L3bW":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/pages/products/products.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"onToggleMenu()\">\n        <ion-icon slot=\"icon-only\" name=\"menu-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"presentModal()\">\n        <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n        Buscar\n      </ion-button>\n    </ion-buttons>\n    <!-- <ion-title>Productos</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"8\">\n          <ion-grid>\n            <ion-row> <!-- Encabezados -->\n              <ion-col size=\"2\" class=\"ion-text-center\"><h6>Código</h6></ion-col>              \n              <ion-col size=\"2\" class=\"ion-text-center\"><h6>Nombre</h6></ion-col>\n              <ion-col size=\"2\" class=\"ion-text-center\"><h6>Precio</h6></ion-col>\n              <ion-col size=\"2\" class=\"ion-text-center\"><h6>Cantidad</h6></ion-col>\n              <ion-col size=\"2\" class=\"ion-text-center\"><h6>Categoría</h6></ion-col>\n              <!-- <ion-col size=\"2\" class=\"ion-text-center\"><h6>Proveedor</h6></ion-col> -->\n            </ion-row> <!-- Fin de los encabezados-->\n\n            <div class=\"scroll\">\n              <ion-row *ngFor=\"let product of allProducts\" class=\"row-product\"> <!-- Fila a repetir -->\n                \n                <ion-col size=\"2\" class=\"ion-text-center\">{{ product.barCode }}</ion-col>\n                <ion-col size=\"2\" class=\"ion-text-center\">{{ product.name }}</ion-col>\n                <ion-col size=\"2\" class=\"ion-text-center\">{{ product.unitPrice }}</ion-col>\n                <ion-col size=\"2\" class=\"ion-text-center\">{{ product.stock }}</ion-col>\n                <ion-col size=\"2\" class=\"ion-text-center\">{{ product.category }}</ion-col>\n                <!-- <ion-col size=\"2\" class=\"ion-text-center\">{{ product.provider }}</ion-col> -->\n                <ion-col size=\"2\">\n                  <ion-button (click)=\"fillFormToUpdate( product )\">\n                    <ion-icon slot=\"icon-only\" name=\"sync-outline\"></ion-icon>\n                  </ion-button>\n                  <ion-button color=\"danger\" (click)=\"onDelete( product.id )\">\n                    <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n                  </ion-button>\n                </ion-col>\n              </ion-row> <!-- Fin de la fila a repetir-->\n            </div>\n\n          </ion-grid>\n        </ion-col> <!-- Fin de la columna de 8-->\n        <ion-col size=\"4\"> <!-- Columna del formulario-->\n          <form (ngSubmit)=\"onAddProduct()\" [formGroup]=\"form\" >\n            <ion-item>\n              <ion-label position=\"floating\">Nombre</ion-label>\n              <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Código</ion-label>\n              <ion-input type=\"number\" formControlName=\"barCode\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Precio</ion-label>\n              <ion-input type=\"number\" formControlName=\"unitPrice\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Cantidad</ion-label>\n              <ion-input type=\"number\" formControlName=\"stock\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label>Categoría</ion-label>\n              <ion-select placeholder=\"Seleccione uno\" interface=\"popover\" formControlName=\"category\">\n                  <ion-select-option [value]=\"item.name\" *ngFor=\"let item of categorias\">{{ item.name }}</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n            <!-- <ion-item>\n              <ion-label>Proveedor</ion-label>\n              <ion-select placeholder=\"Seleccione uno\" interface=\"popover\" formControlName=\"provider\">\n                  <ion-select-option [value]=\"item.name\" *ngFor=\"let item of categorias\">{{ item.name }}</ion-select-option>\n              </ion-select>\n            </ion-item> -->\n\n            <div class=\"buttons\">\n              <ion-button class=\"ion-margin-top\" fill=\"outline\" type=\"button\" color=\"danger\" (click)=\"onCancel()\">\n                <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n                Cancelar\n              </ion-button>\n\n              <ion-button class=\"ion-margin-top\" fill=\"outline\" *ngIf=\" isUpdating \" (click)=\"onUpdate()\">\n                <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n                Actualizar\n              </ion-button>\n\n              <ion-button class=\"ion-margin-top\" fill=\"outline\" type=\"submit\" *ngIf=\" !isUpdating \">\n                <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n                Guardar\n              </ion-button>\n  \n            </div>\n          </form>\n        </ion-col> <!-- Fin de la columna del formulario-->\n      </ion-row> <!-- Fin de la fila principal -->\n    </ion-grid>\n</ion-content>");

/***/ }),

/***/ "OEo5":
/*!************************************************************!*\
  !*** ./src/app/products/pages/products/products.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-row {\n  border-bottom: 1px solid black;\n}\n\nform {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nform div.buttons {\n  display: flex;\n  justify-content: space-between;\n}\n\n.row-product:nth-child(odd) {\n  background-color: #c7c7c7;\n}\n\n.row-product:hover {\n  background-color: #949494;\n  color: #000000;\n}\n\n.scroll {\n  height: 400px;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2R1Y3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFBUjs7QUFJQTtFQUNJLHlCQUFBO0FBREo7O0FBSUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQURKIiwiZmlsZSI6InByb2R1Y3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1yb3cge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cblxuZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8vIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAgIGRpdi5idXR0b25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbn1cblxuLnJvdy1wcm9kdWN0Om50aC1jaGlsZChvZGQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk5LCAxOTksIDE5OSk7XG59XG5cbi5yb3ctcHJvZHVjdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OCwgMTQ4LCAxNDgpO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uc2Nyb2xsIHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn0iXX0= */");

/***/ }),

/***/ "qeqS":
/*!**********************************************************!*\
  !*** ./src/app/products/pages/products/products.page.ts ***!
  \**********************************************************/
/*! exports provided: ProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPage", function() { return ProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_products_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./products.page.html */ "L3bW");
/* harmony import */ var _products_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.page.scss */ "OEo5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/products.service */ "8z/i");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _auth_services_validator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../auth/services/validator.service */ "PZxA");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/search-bar/search-bar.component */ "Oe7f");









let ProductsPage = class ProductsPage {
    constructor(formBuilder, productsService, menu, validatorService, modalCtrl) {
        this.formBuilder = formBuilder;
        this.productsService = productsService;
        this.menu = menu;
        this.validatorService = validatorService;
        this.modalCtrl = modalCtrl;
        this.allProducts = [];
        this.isUpdating = false;
        this.productId = '';
        this.categorias = [
            {
                name: 'Pastillas'
            },
            {
                name: 'Hierbas'
            },
            {
                name: 'Esotéricos'
            }
        ];
        // Campos del formulario
        this.form = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            barCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]],
            unitPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(1000)]],
            stock: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(500)]],
            category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        }, {
            validators: [this.validatorService.codigoExiste('barCode')]
        });
        this.products = this.productsService.getAllProducts();
        this.products
            .subscribe(products => {
            // Asignación de todos los productos y ordenados por la fecha de creación.
            this.allProducts = products.sort((a, b) => {
                if (a.createdAt > b.createdAt) {
                    return 1;
                }
                if (a.createdAt < b.createdAt) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
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
    // Guardar Producto
    onAddProduct() {
        const product = this.form.value;
        product.createdAt = new Date();
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            console.log(this.form);
            console.log(product);
            return;
        }
        this.productsService.addProduct(product);
        this.form.reset();
    }
    // Eliminar Producto
    onDelete(id) {
        this.productsService.deleteProduct(id);
    }
    // Llenar el formulario cuando se da click en el botón de actualizar
    fillFormToUpdate(product) {
        // Obtener todos los capmos de la tabla
        const { unitPrice, stock, barCode, category, id, name } = product;
        this.productId = id;
        // Asignar todos los campos al formulario
        this.form.get('name').setValue(name);
        this.form.get('barCode').setValue(barCode);
        this.form.get('unitPrice').setValue(unitPrice);
        this.form.get('stock').setValue(stock);
        this.form.get('category').setValue(category);
        // this.form.get('provider').setValue( provider );
        // Mostrar el botón de actualizar
        this.isUpdating = true;
    }
    // Reiniciar el formulario
    onCancel() {
        this.form.reset();
        this.isUpdating = false;
    }
    // Actualizar producto
    onUpdate() {
        // Obtener todos los valores del formulario y agregar la propiedad del id
        const product = this.form.value;
        product.id = this.productId;
        // Llamado del servicio para actualizar el producto.
        this.productsService.updateProduct(product);
        this.isUpdating = false;
        this.form.reset();
    }
    // Barra de busquedas
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__["SearchBarComponent"],
                cssClass: 'modal'
            });
            return yield modal.present();
        });
    }
};
ProductsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
    { type: _auth_services_validator_service__WEBPACK_IMPORTED_MODULE_7__["ValidatorService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
ProductsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-products',
        template: _raw_loader_products_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_products_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductsPage);



/***/ }),

/***/ "s1LJ":
/*!********************************************************************!*\
  !*** ./src/app/products/pages/products/products-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ProductsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageRoutingModule", function() { return ProductsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.page */ "qeqS");




const routes = [
    {
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_3__["ProductsPage"]
    }
];
let ProductsPageRoutingModule = class ProductsPageRoutingModule {
};
ProductsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductsPageRoutingModule);



/***/ }),

/***/ "szOk":
/*!************************************************************!*\
  !*** ./src/app/products/pages/products/products.module.ts ***!
  \************************************************************/
/*! exports provided: ProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products-routing.module */ "s1LJ");
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products.page */ "qeqS");







let ProductsPageModule = class ProductsPageModule {
};
ProductsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _products_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductsPageRoutingModule"]
        ],
        declarations: [
            _products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]
        ]
    })
], ProductsPageModule);



/***/ })

}]);
//# sourceMappingURL=products-pages-products-products-module-es2015.js.map