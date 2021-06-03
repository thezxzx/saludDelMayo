(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["providers-pages-providers-providers-module"],{

/***/ "3RV8":
/*!***************************************************************!*\
  !*** ./src/app/providers/pages/providers/providers.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm92aWRlcnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "Jg7H":
/*!*************************************************************!*\
  !*** ./src/app/providers/pages/providers/providers.page.ts ***!
  \*************************************************************/
/*! exports provided: ProvidersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersPage", function() { return ProvidersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_providers_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./providers.page.html */ "yk0w");
/* harmony import */ var _providers_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./providers.page.scss */ "3RV8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/modal/modal.component */ "WAyj");
/* harmony import */ var _services_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/provider.service */ "SgBk");







let ProvidersPage = class ProvidersPage {
    constructor(menu, modalCtrl, providerService, alerCtrl) {
        this.menu = menu;
        this.modalCtrl = modalCtrl;
        this.providerService = providerService;
        this.alerCtrl = alerCtrl;
        this.allProviders = [];
        this.providers = this.providerService.getAllProviders();
        this.providers
            .subscribe(providers => {
            // Asignación de todos los proveedores y ordenados por nombre de compañia.
            this.allProviders = providers.sort((a, b) => {
                if (a.nameCompany > b.nameCompany) {
                    return 1;
                }
                if (a.nameCompany < b.nameCompany) {
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
    onToggleMenu() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
    onDelete(providerId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.presentAlert(providerId);
        });
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"],
                cssClass: 'modal'
            });
            return yield modal.present();
        });
    }
    presentModalProps(provider) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"],
                cssClass: 'modal',
                componentProps: {
                    'name': provider.nameProvider,
                    'nameCompany': provider.nameCompany,
                    'category': provider.category,
                    'telephone': provider.telephone,
                    'email': provider.email,
                    'providerId': provider.id
                }
            });
            return yield modal.present();
        });
    }
    presentAlert(providerId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alerCtrl.create({
                header: '¿Está seguro que desea eliminar?',
                buttons: [
                    {
                        text: 'Cancelar'
                    },
                    {
                        text: 'OK',
                        handler: () => {
                            this.providerService.deleteProvider(providerId);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ProvidersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_provider_service__WEBPACK_IMPORTED_MODULE_6__["ProviderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
ProvidersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-providers',
        template: _raw_loader_providers_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_providers_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProvidersPage);



/***/ }),

/***/ "ixS/":
/*!***********************************************************************!*\
  !*** ./src/app/providers/pages/providers/providers-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ProvidersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersPageRoutingModule", function() { return ProvidersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _providers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./providers.page */ "Jg7H");




const routes = [
    {
        path: '',
        component: _providers_page__WEBPACK_IMPORTED_MODULE_3__["ProvidersPage"]
    }
];
let ProvidersPageRoutingModule = class ProvidersPageRoutingModule {
};
ProvidersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProvidersPageRoutingModule);



/***/ }),

/***/ "qz0O":
/*!***************************************************************!*\
  !*** ./src/app/providers/pages/providers/providers.module.ts ***!
  \***************************************************************/
/*! exports provided: ProvidersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersPageModule", function() { return ProvidersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _providers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./providers-routing.module */ "ixS/");
/* harmony import */ var _providers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./providers.page */ "Jg7H");







let ProvidersPageModule = class ProvidersPageModule {
};
ProvidersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _providers_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProvidersPageRoutingModule"]
        ],
        declarations: [_providers_page__WEBPACK_IMPORTED_MODULE_6__["ProvidersPage"]]
    })
], ProvidersPageModule);



/***/ }),

/***/ "yk0w":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/providers/pages/providers/providers.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"onToggleMenu()\">\n        <ion-icon slot=\"icon-only\" name=\"menu-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">\n      Proveedores\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"success\" fill=\"solid\" shape=\"round\" (click)=\"presentModal()\">\n        <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n        Agregar\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-grid>\n          <ion-row> <!-- Encabezados -->\n            <ion-col size=\"3\" class=\"ion-text-center\"><h6> Nombre </h6></ion-col>\n            <ion-col size=\"2\" class=\"ion-text-center\"><h6> Compañia </h6></ion-col>\n            <ion-col size=\"1\" class=\"ion-text-center\"><h6> Categoría </h6></ion-col>\n            <ion-col size=\"2\" class=\"ion-text-center\"><h6> Celular </h6></ion-col>\n            <ion-col size=\"2\" class=\"ion-text-center\"><h6> Correo </h6></ion-col>\n          </ion-row> <!-- Fin de los encabezados-->\n          <ion-row *ngFor=\"let provider of allProviders\"> <!-- Fila a repetir -->\n            <ion-col size=\"3\" class=\"ion-text-center\">\n              <p>{{ provider.nameProvider }}</p>\n            </ion-col>\n            <ion-col size=\"2\" class=\"ion-text-center\">\n              <p>{{ provider.nameCompany }}</p>\n            </ion-col>\n            <ion-col size=\"1\" class=\"ion-text-center\">\n              <p>{{ provider.category }}</p>\n            </ion-col>\n            <ion-col size=\"2\" class=\"ion-text-center\">\n              <p>{{ provider.telephone }}</p>\n            </ion-col>\n            <ion-col size=\"2\" class=\"ion-text-center\">\n              <p>{{ provider.email }}</p>\n            </ion-col>\n            <ion-col size=\"2\">\n              <ion-button color=\"danger\" class=\"ion-margin-end\" (click)=\"onDelete( provider.id )\">\n                <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n              </ion-button>\n\n              <ion-button color=\"success\" (click)=\"presentModalProps( provider )\">\n                <ion-icon slot=\"icon-only\" name=\"pencil-outline\"></ion-icon>\n              </ion-button>\n            </ion-col>\n\n          </ion-row> <!-- Fin de la fila a repetir-->\n        </ion-grid>\n      </ion-col> <!-- Fin de la columna de 9-->\n    </ion-row> <!-- Fin de la fila principal -->\n  </ion-grid>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=providers-pages-providers-providers-module-es2015.js.map