(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/thezx/Escritorio/DesktopApp/tienda/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2OOJ":
    /*!**********************************************************************!*\
      !*** ./src/app/shared/components/side-menu/side-menu.component.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function OOJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --width: 200px;\n  box-shadow: 11px 1px 0px 10px rgba(0, 0, 0, 0.43);\n}\n\n.cursor {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NpZGUtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxpREFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6InNpZGUtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLXdpZHRoOiAyMDBweDtcbiAgICBib3gtc2hhZG93OiAxMXB4IDFweCAwcHggMTBweCByZ2JhKDAsMCwwLDAuNDMpO1xufVxuXG4uY3Vyc29yIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment, firebaseConfig */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "firebaseConfig", function () {
        return firebaseConfig;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      var firebaseConfig = {
        apiKey: "AIzaSyCY8J4yfJ9KMn2DVCa2PnvI0sh5iXHKNU8",
        authDomain: "saluddelmayo.firebaseapp.com",
        projectId: "saluddelmayo",
        storageBucket: "saluddelmayo.appspot.com",
        messagingSenderId: "184337444111",
        appId: "1:184337444111:web:cbc56a2726d1f3845ae27a",
        measurementId: "G-QJGZJH5SJS"
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "N/25":
    /*!***********************************************!*\
      !*** ./src/app/auth/services/auth.service.ts ***!
      \***********************************************/

    /*! exports provided: AuthService */

    /***/
    function N25(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
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


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _auth_errors_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./auth-errors.service */
      "OX3P");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(afa, afs, authErrorsService) {
          var _this = this;

          _classCallCheck(this, AuthService);

          this.afa = afa;
          this.afs = afs;
          this.authErrorsService = authErrorsService;
          this.usersCollection = 'users';
          this.user$ = this.afa.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (user) {
            if (user) {
              return _this.afs.doc("".concat(_this.usersCollection, "/").concat(user.uid)).valueChanges();
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
          }));
        } // Constructor


        _createClass(AuthService, [{
          key: "registerWithEmailPassword",
          value: function registerWithEmailPassword(email, password, User) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _yield$this$afa$creat, user, userRecord, error;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.prev = 0;
                      _context.next = 3;
                      return this.afa.createUserWithEmailAndPassword(email, password);

                    case 3:
                      _yield$this$afa$creat = _context.sent;
                      user = _yield$this$afa$creat.user;
                      _context.next = 7;
                      return this.sendEmailVerification();

                    case 7:
                      // Asigna las propiedades del usuario de firebase y el usuario del formulario a un único registro.
                      userRecord = Object.assign(Object.assign({}, user), User); // Crea el registro del usuario

                      this.updateUserData(userRecord);
                      return _context.abrupt("return", user);

                    case 12:
                      _context.prev = 12;
                      _context.t0 = _context["catch"](0);
                      console.log("🚀 ~ file: auth.service.ts ~ line 20 ~ AuthService ~ registerEmailPassword ~ err", _context.t0);
                      error = _context.t0; // Llamar al servicio para crear los mensajes de alerta

                      this.authErrorsService.errorAlert(error.code);

                    case 17:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[0, 12]]);
            }));
          } // Registrar con correo y contraseña

        }, {
          key: "loginWithEmailPassword",
          value: function loginWithEmailPassword(email, password) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _yield$this$afa$signI, user, error;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.prev = 0;
                      _context2.next = 3;
                      return this.afa.signInWithEmailAndPassword(email, password);

                    case 3:
                      _yield$this$afa$signI = _context2.sent;
                      user = _yield$this$afa$signI.user;
                      this.updateUserData(user);
                      return _context2.abrupt("return", user);

                    case 9:
                      _context2.prev = 9;
                      _context2.t0 = _context2["catch"](0);
                      console.log("🚀 ~ file: auth.service.ts ~ line 52 ~ AuthService ~ loginWithEmailPassword ~ err", _context2.t0);
                      error = _context2.t0; // Llamar al servicio para crear los mensajes de alerta

                      this.authErrorsService.errorAlert(error.code);

                    case 14:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[0, 9]]);
            }));
          } // Iniciar sesión con correo y contraseña.

        }, {
          key: "sendEmailVerification",
          value: function sendEmailVerification() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.prev = 0;
                      _context3.next = 3;
                      return this.afa.currentUser;

                    case 3:
                      _context3.sent.sendEmailVerification();

                      _context3.next = 10;
                      break;

                    case 6:
                      _context3.prev = 6;
                      _context3.t0 = _context3["catch"](0);
                      console.log("🚀 ~ file: auth.service.ts ~ line 33 ~ AuthService ~ sendEmailVerification ~ err", _context3.t0);
                      console.log(_context3.t0.code);

                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[0, 6]]);
            }));
          } // Enviar correo de verificación.

        }, {
          key: "isEmailVerified",
          value: function isEmailVerified(user) {
            return user.emailVerified === true ? true : false;
          } // Correo verificado

        }, {
          key: "addUser",
          value: function addUser(user) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var userRef;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.prev = 0;
                      userRef = this.afs.doc("users/".concat(user.uid));
                      return _context4.abrupt("return", userRef.set(user, {
                        merge: true
                      }));

                    case 5:
                      _context4.prev = 5;
                      _context4.t0 = _context4["catch"](0);
                      console.log("🚀 ~ file: auth.service.ts ~ line 36 ~ AuthService ~ addUser ~ error", _context4.t0);

                    case 8:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[0, 5]]);
            }));
          } // Añadir usuario ( registro en firestore )

        }, {
          key: "updateUserData",
          value: function updateUserData(user) {
            var userRef = this.afs.doc("users/".concat(user.uid)); // Información que se registrará en la base de datos.

            var data = {
              uid: user.uid,
              email: user.email,
              emailVerified: user.emailVerified
            };
            return userRef.set(data, {
              merge: true
            });
          } // Actualizar información del usuario

        }, {
          key: "resetPassword",
          value: function resetPassword(email) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.prev = 0;
                      _context5.next = 3;
                      return this.afa.sendPasswordResetEmail(email);

                    case 3:
                      return _context5.abrupt("return", _context5.sent);

                    case 6:
                      _context5.prev = 6;
                      _context5.t0 = _context5["catch"](0);
                      console.log("🚀 ~ file: auth.service.ts ~ line 63 ~ AuthService ~ resetPassword ~ error", _context5.t0);

                    case 9:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this, [[0, 6]]);
            }));
          } // Reiniciar contraseña

        }, {
          key: "logout",
          value: function logout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.prev = 0;
                      _context6.next = 3;
                      return this.afa.signOut();

                    case 3:
                      return _context6.abrupt("return", _context6.sent);

                    case 6:
                      _context6.prev = 6;
                      _context6.t0 = _context6["catch"](0);
                      console.log("🚀 ~ file: auth.service.ts ~ line 91 ~ AuthService ~ logout ~ error", _context6.t0);

                    case 9:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this, [[0, 6]]);
            }));
          } // Cerrar sesión

        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
        }, {
          type: _auth_errors_service__WEBPACK_IMPORTED_MODULE_6__["AuthErrorsService"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "OX3P":
    /*!******************************************************!*\
      !*** ./src/app/auth/services/auth-errors.service.ts ***!
      \******************************************************/

    /*! exports provided: AuthErrorsService */

    /***/
    function OX3P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthErrorsService", function () {
        return AuthErrorsService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var AuthErrorsService = /*#__PURE__*/function () {
        function AuthErrorsService(alertCtrl) {
          _classCallCheck(this, AuthErrorsService);

          this.alertCtrl = alertCtrl;
        }

        _createClass(AuthErrorsService, [{
          key: "errorAlert",
          value: function errorAlert(errorCode) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.t0 = errorCode;
                      _context7.next = _context7.t0 === 'auth/email-already-in-use' ? 3 : _context7.t0 === 'auth/invalid-email' ? 6 : _context7.t0 === 'auth/wrong-password' ? 9 : _context7.t0 === 'auth/user-not-found' ? 12 : _context7.t0 === 'auth/email-already-in-use' ? 15 : 18;
                      break;

                    case 3:
                      _context7.next = 5;
                      return this.presentAlert('Este correo electrónico ya está registrado.');

                    case 5:
                      return _context7.abrupt("break", 19);

                    case 6:
                      _context7.next = 8;
                      return this.presentAlert('El correo electrónico no es válido.');

                    case 8:
                      return _context7.abrupt("break", 19);

                    case 9:
                      _context7.next = 11;
                      return this.presentAlert('La contraseña es inválida o el usuario no tiene una contraseña.');

                    case 11:
                      return _context7.abrupt("break", 19);

                    case 12:
                      _context7.next = 14;
                      return this.presentAlert('No hay un usuario con este correo electrónico.');

                    case 14:
                      return _context7.abrupt("break", 19);

                    case 15:
                      _context7.next = 17;
                      return this.presentAlert('Este correo ya ésta registrado.');

                    case 17:
                      return _context7.abrupt("break", 19);

                    case 18:
                      return _context7.abrupt("break", 19);

                    case 19:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var alert;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.alertCtrl.create({
                        header: '',
                        message: message,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context8.sent;
                      _context8.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }]);

        return AuthErrorsService;
      }();

      AuthErrorsService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      AuthErrorsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthErrorsService);
      /***/
    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/side-menu/side-menu.component */
      "vQ30");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_4__["SideMenuComponent"]],
        exports: [_components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_4__["SideMenuComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
      })], SharedModule);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent.ctorParameters = function () {
        return [];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <app-side-menu></app-side-menu>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "XPuj":
    /*!*********************************************!*\
      !*** ./src/app/auth/services/auth.guard.ts ***!
      \*********************************************/

    /*! exports provided: AuthGuard */

    /***/
    function XPuj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./auth.service */
      "N/25");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(authService, router) {
          _classCallCheck(this, AuthGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var _this2 = this;

            return this.authService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
              if (user) {
                // this.router.navigate( ['/home'] );
                return true;
              } else {
                // Redirige a la pagina de login
                _this2.router.navigate(['/login']);

                return false;
              }
            }));
          }
        }, {
          key: "canLoad",
          value: function canLoad(route, segments) {
            return true;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthGuard);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire */
      "spgP");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./shared/shared.module */
      "PCNd");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR"); // Firebase


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["firebaseConfig"]), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorageModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"]],
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "orWt":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/side-menu/side-menu.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function orWt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-menu-toggle>\n  <ion-menu side=\"start\"\n            menuId=\"first\"\n            contentId=\"main\">\n    <ion-header>\n      <ion-toolbar color=\"primary\">\n        <ion-title>Menú</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-item routerLink=\"/home\">\n          <ion-icon slot=\"start\" name=\"home-outline\"></ion-icon>\n          <ion-label>Inicio</ion-label>\n        </ion-item>\n        <ion-item routerLink=\"/sale\">\n          <ion-icon slot=\"start\" name=\"cash-outline\"></ion-icon>\n          <ion-label>Ventas</ion-label>\n        </ion-item>\n        <ion-item routerLink=\"/products\">\n          <ion-icon slot=\"start\" name=\"cart-outline\"></ion-icon>\n          <ion-label>Productos</ion-label>\n        </ion-item>\n        <ion-item routerLink=\"\">\n          <ion-icon slot=\"start\" name=\"newspaper-outline\"></ion-icon>\n          <ion-label>Reportes</ion-label>\n        </ion-item>\n        <ion-item routerLink=\"/users\">\n          <ion-icon slot=\"start\" name=\"person-outline\"></ion-icon>\n          <ion-label>Usuarios</ion-label>\n        </ion-item>\n        <ion-item routerLink=\"\">\n          <ion-icon slot=\"start\" name=\"person-outline\"></ion-icon>\n          <ion-label>Otros recursos</ion-label>\n        </ion-item>\n  \n        <ion-item-divider></ion-item-divider>\n        \n        <ion-item>\n          <ion-label class=\"ion-text-center\">{{ usuario | titlecase }}</ion-label>\n        </ion-item>\n\n        <ion-item (click)=\"onLogOut()\" routerLink=\"/login\">\n          <ion-label class=\"ion-text-center\" color=\"danger\">Cerrar Sesión</ion-label>\n        </ion-item>\n\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n</ion-menu-toggle>";
      /***/
    },

    /***/
    "vQ30":
    /*!********************************************************************!*\
      !*** ./src/app/shared/components/side-menu/side-menu.component.ts ***!
      \********************************************************************/

    /*! exports provided: SideMenuComponent */

    /***/
    function vQ30(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function () {
        return SideMenuComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_side_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./side-menu.component.html */
      "orWt");
      /* harmony import */


      var _side_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./side-menu.component.scss */
      "2OOJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../auth/services/auth.service */
      "N/25");

      var SideMenuComponent = /*#__PURE__*/function () {
        function SideMenuComponent(authService) {
          var _this3 = this;

          _classCallCheck(this, SideMenuComponent);

          this.authService = authService;
          this.usuario = '';

          if (this.authService.user$) {
            this.authService.user$.subscribe(function (user) {
              if (user) {
                _this3.usuario = "".concat(user.name, " ").concat(user.lastName);
              } else {
                _this3.usuario = '';
              }
            });
          }
        }

        _createClass(SideMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onLogOut",
          value: function onLogOut() {
            this.authService.logout();
          }
        }]);

        return SideMenuComponent;
      }();

      SideMenuComponent.ctorParameters = function () {
        return [{
          type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      };

      SideMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-side-menu',
        template: _raw_loader_side_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_side_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SideMenuComponent);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth/services/auth.guard */
      "XPuj");

      var routes = [{
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | home-pages-home-module */
          "home-pages-home-module").then(__webpack_require__.bind(null,
          /*! ./home//pages/home.module */
          "TWsR")).then(function (m) {
            return m.HomePageModule;
          });
        },
        canActivate: [_auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'register',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | auth-pages-register-register-module */
          "auth-pages-register-register-module").then(__webpack_require__.bind(null,
          /*! ./auth/pages/register/register.module */
          "jaOa")).then(function (m) {
            return m.RegisterPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | auth-pages-login-login-module */
          "auth-pages-login-login-module").then(__webpack_require__.bind(null,
          /*! ./auth/pages/login/login.module */
          "q4Kd")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'products',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | products-pages-products-products-module */
          [__webpack_require__.e("common"), __webpack_require__.e("products-pages-products-products-module")]).then(__webpack_require__.bind(null,
          /*! ./products/pages/products/products.module */
          "szOk")).then(function (m) {
            return m.ProductsPageModule;
          });
        },
        canActivate: [_auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'sale',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | sales-pages-sale-sale-module */
          [__webpack_require__.e("common"), __webpack_require__.e("sales-pages-sale-sale-module")]).then(__webpack_require__.bind(null,
          /*! ./sales/pages/sale/sale.module */
          "uzno")).then(function (m) {
            return m.SalePageModule;
          });
        },
        canActivate: [_auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'users',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | users-pages-users-users-module */
          "users-pages-users-users-module").then(__webpack_require__.bind(null,
          /*! ./users/pages/users/users.module */
          "MP20")).then(function (m) {
            return m.UsersPageModule;
          });
        },
        canActivate: [_auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map