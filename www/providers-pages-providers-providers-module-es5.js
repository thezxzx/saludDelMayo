(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["providers-pages-providers-providers-module"], {
    /***/
    "3RV8":
    /*!***************************************************************!*\
      !*** ./src/app/providers/pages/providers/providers.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function RV8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm92aWRlcnMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "Jg7H":
    /*!*************************************************************!*\
      !*** ./src/app/providers/pages/providers/providers.page.ts ***!
      \*************************************************************/

    /*! exports provided: ProvidersPage */

    /***/
    function Jg7H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProvidersPage", function () {
        return ProvidersPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_providers_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./providers.page.html */
      "yk0w");
      /* harmony import */


      var _providers_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./providers.page.scss */
      "3RV8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/modal/modal.component */
      "WAyj");
      /* harmony import */


      var _services_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/provider.service */
      "SgBk");

      var ProvidersPage = /*#__PURE__*/function () {
        function ProvidersPage(menu, modalCtrl, providerService, alerCtrl) {
          var _this = this;

          _classCallCheck(this, ProvidersPage);

          this.menu = menu;
          this.modalCtrl = modalCtrl;
          this.providerService = providerService;
          this.alerCtrl = alerCtrl;
          this.allProviders = [];
          this.providers = this.providerService.getAllProviders();
          this.providers.subscribe(function (providers) {
            // Asignación de todos los proveedores y ordenados por nombre de compañia.
            _this.allProviders = providers.sort(function (a, b) {
              if (a.nameCompany > b.nameCompany) {
                return 1;
              }

              if (a.nameCompany < b.nameCompany) {
                return -1;
              } else {
                return 0;
              }
            });
          });
        }

        _createClass(ProvidersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Evita que el menú se abra arrastrando
            this.menu.swipeGesture(false, 'first');
          }
        }, {
          key: "onToggleMenu",
          value: function onToggleMenu() {
            this.menu.enable(true, 'first');
            this.menu.open('first');
          }
        }, {
          key: "onDelete",
          value: function onDelete(providerId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.presentAlert(providerId);

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentModal",
          value: function presentModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalCtrl.create({
                        component: _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"],
                        cssClass: 'modal'
                      });

                    case 2:
                      modal = _context2.sent;
                      _context2.next = 5;
                      return modal.present();

                    case 5:
                      return _context2.abrupt("return", _context2.sent);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentModalProps",
          value: function presentModalProps(provider) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalCtrl.create({
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

                    case 2:
                      modal = _context3.sent;
                      _context3.next = 5;
                      return modal.present();

                    case 5:
                      return _context3.abrupt("return", _context3.sent);

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(providerId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alerCtrl.create({
                        header: '¿Está seguro que desea eliminar?',
                        buttons: [{
                          text: 'Cancelar'
                        }, {
                          text: 'OK',
                          handler: function handler() {
                            _this2.providerService.deleteProvider(providerId);
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return ProvidersPage;
      }();

      ProvidersPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _services_provider_service__WEBPACK_IMPORTED_MODULE_6__["ProviderService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      ProvidersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-providers',
        template: _raw_loader_providers_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_providers_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProvidersPage);
      /***/
    },

    /***/
    "ixS/":
    /*!***********************************************************************!*\
      !*** ./src/app/providers/pages/providers/providers-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: ProvidersPageRoutingModule */

    /***/
    function ixS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProvidersPageRoutingModule", function () {
        return ProvidersPageRoutingModule;
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


      var _providers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./providers.page */
      "Jg7H");

      var routes = [{
        path: '',
        component: _providers_page__WEBPACK_IMPORTED_MODULE_3__["ProvidersPage"]
      }];

      var ProvidersPageRoutingModule = function ProvidersPageRoutingModule() {
        _classCallCheck(this, ProvidersPageRoutingModule);
      };

      ProvidersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProvidersPageRoutingModule);
      /***/
    },

    /***/
    "qz0O":
    /*!***************************************************************!*\
      !*** ./src/app/providers/pages/providers/providers.module.ts ***!
      \***************************************************************/

    /*! exports provided: ProvidersPageModule */

    /***/
    function qz0O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProvidersPageModule", function () {
        return ProvidersPageModule;
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


      var _providers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./providers-routing.module */
      "ixS/");
      /* harmony import */


      var _providers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./providers.page */
      "Jg7H");

      var ProvidersPageModule = function ProvidersPageModule() {
        _classCallCheck(this, ProvidersPageModule);
      };

      ProvidersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _providers_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProvidersPageRoutingModule"]],
        declarations: [_providers_page__WEBPACK_IMPORTED_MODULE_6__["ProvidersPage"]]
      })], ProvidersPageModule);
      /***/
    },

    /***/
    "yk0w":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/providers/pages/providers/providers.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yk0w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"onToggleMenu()\">\n        <ion-icon slot=\"icon-only\" name=\"menu-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">\n      Proveedores\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"success\" fill=\"solid\" shape=\"round\" (click)=\"presentModal()\">\n        <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n        Agregar\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-grid>\n          <ion-row> <!-- Encabezados -->\n            <ion-col size=\"3\" class=\"ion-text-center\"><h6> Nombre </h6></ion-col>\n            <ion-col size=\"2\" class=\"ion-text-center\"><h6> Compañia </h6></ion-col>\n            <ion-col size=\"1\" class=\"ion-text-center\"><h6> Categoría </h6></ion-col>\n            <ion-col size=\"2\" class=\"ion-text-center\"><h6> Celular </h6></ion-col>\n            <ion-col size=\"2\" class=\"ion-text-center\"><h6> Correo </h6></ion-col>\n          </ion-row> <!-- Fin de los encabezados-->\n          <ion-row *ngFor=\"let provider of allProviders\"> <!-- Fila a repetir -->\n            <ion-col size=\"3\" class=\"ion-text-center\">\n              <p>{{ provider.nameProvider }}</p>\n            </ion-col>\n            <ion-col size=\"2\" class=\"ion-text-center\">\n              <p>{{ provider.nameCompany }}</p>\n            </ion-col>\n            <ion-col size=\"1\" class=\"ion-text-center\">\n              <p>{{ provider.category }}</p>\n            </ion-col>\n            <ion-col size=\"2\" class=\"ion-text-center\">\n              <p>{{ provider.telephone }}</p>\n            </ion-col>\n            <ion-col size=\"2\" class=\"ion-text-center\">\n              <p>{{ provider.email }}</p>\n            </ion-col>\n            <ion-col size=\"2\">\n              <ion-button color=\"danger\" class=\"ion-margin-end\" (click)=\"onDelete( provider.id )\">\n                <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n              </ion-button>\n\n              <ion-button color=\"success\" (click)=\"presentModalProps( provider )\">\n                <ion-icon slot=\"icon-only\" name=\"pencil-outline\"></ion-icon>\n              </ion-button>\n            </ion-col>\n\n          </ion-row> <!-- Fin de la fila a repetir-->\n        </ion-grid>\n      </ion-col> <!-- Fin de la columna de 9-->\n    </ion-row> <!-- Fin de la fila principal -->\n  </ion-grid>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=providers-pages-providers-providers-module-es5.js.map