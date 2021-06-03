(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/thezx/Escritorio/Github projects/saludDelMayo/src/main.ts */"zUnb");


/***/ }),

/***/ "2OOJ":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/side-menu/side-menu.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --width: 200px;\n  box-shadow: 11px 1px 0px 10px rgba(0, 0, 0, 0.43);\n}\n\n.cursor {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NpZGUtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxpREFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6InNpZGUtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLXdpZHRoOiAyMDBweDtcbiAgICBib3gtc2hhZG93OiAxMXB4IDFweCAwcHggMTBweCByZ2JhKDAsMCwwLDAuNDMpO1xufVxuXG4uY3Vyc29yIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "8z/i":
/*!*******************************************************!*\
  !*** ./src/app/products/services/products.service.ts ***!
  \*******************************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ProductsService = class ProductsService {
    constructor(af) {
        this.af = af;
        // Obtener datos cuando se produzca un cambio ( ingresar, actualizar, eliminar )    
        this.productsCollection = this.af.collection('products');
        this.products = this.productsCollection.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            }); // actions / map 
        } // actions
        ) // map 
        ); // pipe 
    } // constructor
    // Añadir producto
    addProduct(product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.af.collection('products').add(product);
            }
            catch (err) {
                console.log("🚀 ~ file: products.service.ts ~ line 39 ~ ProductsService ~ addProduct ~ err", err);
            }
        });
    }
    // Obtener todos los productos
    getAllProducts() {
        try {
            return this.products;
        }
        catch (err) {
            console.log("🚀 ~ file: products.service.ts ~ line 48 ~ ProductsService ~ getAllProduct ~ err", err);
        }
    }
    getProductByBarCode(barCode) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const product = yield this.productsCollection.ref.where('barCode', '==', barCode).get().then(this.returnDocs);
                // const product = (await this.af.collection('products').ref.where( 'barCode', '==', barCode ).get()).docs[0].data();
                return product;
            }
            catch (err) {
                console.log('🚀 ~ file: products.service.ts ~ line 58 ~ ProductsService ~ getProductByBarCode ~ err', err);
            }
        });
    }
    // Eliminar producto
    deleteProduct(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.af.collection('products').doc(id).delete();
            }
            catch (err) {
                console.log("🚀 ~ file: products.service.ts ~ line 60 ~ ProductsService ~ deleteProduct ~ err", err);
            }
        });
    }
    // Actualizar producto
    updateProduct(product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const id = product.id;
                this.af.collection('products').doc(id).update(product);
            }
            catch (err) {
                console.log("🚀 ~ file: products.service.ts ~ line 68 ~ ProductsService ~ updateProduct ~ err", err);
            }
        });
    }
    returnDocs(snapshot) {
        const docs = [];
        snapshot.forEach(snap => {
            docs.push(Object.assign({ id: snap.id }, snap.data()));
        });
        return docs;
    }
};
ProductsService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
ProductsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductsService);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, firebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
const firebaseConfig = {
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


/***/ }),

/***/ "FWVF":
/*!*****************************************************************!*\
  !*** ./src/app/providers/components/modal/modal.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n  display: flex;\n  justify-content: center;\n}\n\n.error {\n  --border-style: none;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLFVBQUE7QUFDSiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmVycm9yIHtcbiAgICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbiAgICBjb2xvcjogcmVkO1xufSJdfQ== */");

/***/ }),

/***/ "MJh5":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/providers/components/modal/modal.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <form (ngSubmit)=\"onAddProvider()\" [formGroup]=\"form\">\n    <ion-list>\n      <!-- Campo de nombre de proveedor -->\n      <ion-item>\n        <ion-label position=\"floating\">Nombre Proveedor<ion-text color=\"danger\">*</ion-text></ion-label>\n        <ion-input type=\"text\" formControlName=\"nameProvider\"></ion-input>\n      </ion-item>\n\n      <!-- Mensaje de error nombre de proveedor -->\n      <ion-item class=\"error\" *ngIf=\" campoNoValido( 'nameProvider' ) \">\n        <ion-label>{{ nameProviderErrorMsg }}</ion-label>\n      </ion-item>\n      \n      <!-- Campo de nombre de compañia -->\n      <ion-item>\n        <ion-label position=\"floating\">Nombre compañia<ion-text color=\"danger\">*</ion-text></ion-label>\n        <ion-input type=\"text\" formControlName=\"nameCompany\"></ion-input>\n      </ion-item>\n  \n      <!-- Mensaje de error nombre de compañia  -->\n      <ion-item class=\"error\" *ngIf=\" campoNoValido( 'nameCompany' ) \">\n        <ion-label>{{ nameCompanyErrorMsg }}</ion-label>\n      </ion-item>\n\n      <!-- Campo de categoría -->\n      <ion-item>\n        <ion-select placeholder=\"Categoría\" interface=\"popover\" formControlName=\"category\">\n          <ion-select-option [value]=\"item.name\" *ngFor=\"let item of categorias\">{{ item.name }}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      \n      <!-- Mensaje de error de categoría  -->\n      <ion-item class=\"error\" *ngIf=\" campoNoValido( 'category' ) \">\n        <ion-label>{{ categoryErrorMsg }}</ion-label>\n      </ion-item>\n      \n      <!-- Campo de celular / teléfono -->\n      <ion-item>\n        <ion-label position=\"floating\">Celular<ion-text color=\"danger\">*</ion-text></ion-label>\n        <ion-input type=\"tel\" pattern=\"(\\(\\d{3}\\)[.-]?|\\d{3}[.-]?)?\\d{3}[.-]?\\d{4}\" formControlName=\"telephone\"></ion-input>\n      </ion-item>\n  \n      <!-- Mensaje de error de teléfono  -->\n      <ion-item class=\"error\" *ngIf=\" campoNoValido( 'telephone' ) \">\n        <ion-label>{{ telephoneErrorMsg }}</ion-label>\n      </ion-item>\n\n      <!-- Campo de correo -->\n      <ion-item>\n        <ion-label position=\"floating\">Correo<ion-text color=\"danger\">*</ion-text></ion-label>\n        <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n      </ion-item>\n\n      <!-- Mensaje de error de correo  -->\n      <ion-item class=\"error\" *ngIf=\" campoNoValido( 'email' ) \">\n        <ion-label>{{ emailErrorMsg }}</ion-label>\n      </ion-item>\n\n      <!-- Botón de añadir -->\n      <div *ngIf=\"!name\">\n        <ion-button type=\"submit\" color=\"success\" expand=\"block\" fill=\"outline\" shape=\"round\" class=\"ion-margin-top\">\n          Añadir\n        </ion-button>\n      </div>\n\n      <!-- Botón de actualizar -->\n      <div *ngIf=\"name\">\n        <ion-button (click)=\"onUpdate()\" color=\"success\" expand=\"block\" fill=\"outline\" shape=\"round\" class=\"ion-margin-top\">\n          Actualizar\n        </ion-button>\n      </div>\n    </ion-list>\n  </form>\n</div>");

/***/ }),

/***/ "N/25":
/*!***********************************************!*\
  !*** ./src/app/auth/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_errors_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-errors.service */ "OX3P");







let AuthService = class AuthService {
    constructor(afa, afs, authErrorsService) {
        this.afa = afa;
        this.afs = afs;
        this.authErrorsService = authErrorsService;
        this.usersCollection = 'users';
        this.user$ = this.afa.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(user => {
            if (user) {
                return this.afs.doc(`${this.usersCollection}/${user.uid}`).valueChanges();
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    } // Constructor
    registerWithEmailPassword(email, password, User) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const { user } = yield this.afa.createUserWithEmailAndPassword(email, password);
                // Enviar correo de verificación.
                yield this.sendEmailVerification();
                // Asigna las propiedades del usuario de firebase y el usuario del formulario a un único registro.
                const userRecord = Object.assign(Object.assign({}, user), User);
                // Crea el registro del usuario
                this.updateUserData(userRecord);
                return user;
            }
            catch (err) {
                console.log("🚀 ~ file: auth.service.ts ~ line 20 ~ AuthService ~ registerEmailPassword ~ err", err);
                const error = err;
                // Llamar al servicio para crear los mensajes de alerta
                this.authErrorsService.errorAlert(error.code);
            }
        });
    } // Registrar con correo y contraseña
    loginWithEmailPassword(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const { user } = yield this.afa.signInWithEmailAndPassword(email, password);
                this.updateUserData(user);
                return user;
            }
            catch (err) {
                console.log("🚀 ~ file: auth.service.ts ~ line 52 ~ AuthService ~ loginWithEmailPassword ~ err", err);
                const error = err;
                // Llamar al servicio para crear los mensajes de alerta
                this.authErrorsService.errorAlert(error.code);
            }
        });
    } // Iniciar sesión con correo y contraseña.
    sendEmailVerification() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                (yield this.afa.currentUser).sendEmailVerification();
            }
            catch (err) {
                console.log("🚀 ~ file: auth.service.ts ~ line 33 ~ AuthService ~ sendEmailVerification ~ err", err);
                console.log(err.code);
            }
        });
    } // Enviar correo de verificación.
    isEmailVerified(user) {
        return user.emailVerified === true ? true : false;
    } // Correo verificado
    addUser(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const userRef = this.afs.doc(`users/${user.uid}`);
                return userRef.set(user, { merge: true });
            }
            catch (error) {
                console.log("🚀 ~ file: auth.service.ts ~ line 36 ~ AuthService ~ addUser ~ error", error);
            }
        });
    } // Añadir usuario ( registro en firestore )
    updateUserData(user) {
        const userRef = this.afs.doc(`users/${user.uid}`);
        // Información que se registrará en la base de datos.
        const data = {
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
        };
        return userRef.set(data, { merge: true });
    } // Actualizar información del usuario
    resetPassword(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return yield this.afa.sendPasswordResetEmail(email);
            }
            catch (error) {
                console.log("🚀 ~ file: auth.service.ts ~ line 63 ~ AuthService ~ resetPassword ~ error", error);
            }
        });
    } // Reiniciar contraseña
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return yield this.afa.signOut();
            }
            catch (error) {
                console.log("🚀 ~ file: auth.service.ts ~ line 91 ~ AuthService ~ logout ~ error", error);
            }
        });
    } // Cerrar sesión
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _auth_errors_service__WEBPACK_IMPORTED_MODULE_6__["AuthErrorsService"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "OX3P":
/*!******************************************************!*\
  !*** ./src/app/auth/services/auth-errors.service.ts ***!
  \******************************************************/
/*! exports provided: AuthErrorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthErrorsService", function() { return AuthErrorsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let AuthErrorsService = class AuthErrorsService {
    constructor(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    errorAlert(errorCode) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            switch (errorCode) {
                case 'auth/email-already-in-use':
                    yield this.presentAlert('Este correo electrónico ya está registrado.');
                    break;
                case 'auth/invalid-email':
                    yield this.presentAlert('El correo electrónico no es válido.');
                    break;
                case 'auth/wrong-password':
                    yield this.presentAlert('La contraseña es inválida o el usuario no tiene una contraseña.');
                    break;
                case 'auth/user-not-found':
                    yield this.presentAlert('No hay un usuario con este correo electrónico.');
                    break;
                case 'auth/email-already-in-use':
                    yield this.presentAlert('Este correo ya ésta registrado.');
                    break;
                default:
                    break;
            }
        });
    }
    presentAlert(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: '',
                message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
AuthErrorsService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
AuthErrorsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthErrorsService);



/***/ }),

/***/ "Oe7f":
/*!************************************************************************!*\
  !*** ./src/app/products/components/search-bar/search-bar.component.ts ***!
  \************************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_search_bar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./search-bar.component.html */ "ksG8");
/* harmony import */ var _search_bar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-bar.component.scss */ "t4pU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/products.service */ "8z/i");





let SearchBarComponent = class SearchBarComponent {
    constructor(productsService) {
        this.productsService = productsService;
        this.search = '';
        this.allProducts = [];
        productsService.getAllProducts().subscribe(products => {
            this.allProducts = products;
        });
    }
    ngOnInit() { }
    // Buscar producto por el buscador ( nombre )
    onSearchProduct(productName) {
        this.search = productName.detail.value;
    }
    doSomething(product) {
        console.log(product);
    }
};
SearchBarComponent.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] }
];
SearchBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-search-bar',
        template: _raw_loader_search_bar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_search_bar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SearchBarComponent);



/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/side-menu/side-menu.component */ "vQ30");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_5__["SideMenuComponent"]
        ],
        exports: [
            _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_5__["SideMenuComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "SgBk":
/*!********************************************************!*\
  !*** ./src/app/providers/services/provider.service.ts ***!
  \********************************************************/
/*! exports provided: ProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderService", function() { return ProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ProviderService = class ProviderService {
    constructor(af) {
        this.af = af;
        // Obtener datos cuando se produzca un cambio ( ingresar, actualizar, eliminar )    
        this.providersCollection = this.af.collection('providers');
        this.providers = this.providersCollection.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            }); // actions / map 
        } // actions
        ) // map 
        ); // pipe 
    }
    // Obtener todos los proveedores
    getAllProviders() {
        try {
            return this.providers;
        }
        catch (err) {
            console.log('Error en la línea 25 provider.Service', err);
        }
    }
    // Añadir Proveedor
    addProvider(provider) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.af.collection('providers').add(provider);
            }
            catch (err) {
                console.log('Error en la línea 25 provider.Service', err);
            }
        });
    }
    // Eliminar Proveedor
    deleteProvider(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.af.collection('providers').doc(id).delete();
            }
            catch (err) {
                console.log('Error en la línea 35 provider.Service', err);
            }
        });
    }
    // Actualizar producto
    updateProvider(provider) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const id = provider.id;
                this.af.collection('providers').doc(id).update(provider);
            }
            catch (err) {
                console.log('Error en la línea 44 provider.Service', err);
            }
        });
    }
};
ProviderService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
ProviderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProviderService);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.initializeApp();
    }
    initializeApp() {
        this.checkDarkTheme();
    }
    checkDarkTheme() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        if (prefersDark.matches) {
            document.body.classList.toggle('dark');
        }
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <app-side-menu></app-side-menu>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "WAyj":
/*!***************************************************************!*\
  !*** ./src/app/providers/components/modal/modal.component.ts ***!
  \***************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal.component.html */ "MJh5");
/* harmony import */ var _modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.component.scss */ "FWVF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/provider.service */ "SgBk");






let ModalComponent = class ModalComponent {
    constructor(formBuilder, providerService) {
        this.formBuilder = formBuilder;
        this.providerService = providerService;
        // Patrones
        this.namePattern = '[a-zA-Z ]{3,50}';
        this.emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
        // TODO: Quitar esta sección más adelante.
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
        this.form = this.formBuilder.group({
            nameProvider: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.namePattern)]],
            nameCompany: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]],
            category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            telephone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.emailPattern)]]
        });
    }
    // Mensajes de errores
    campoNoValido(campo) {
        var _a, _b;
        return ((_a = this.form.get(campo)) === null || _a === void 0 ? void 0 : _a.invalid) && ((_b = this.form.get(campo)) === null || _b === void 0 ? void 0 : _b.touched);
    }
    // Mensjaes de errores
    // Errores de nombre de proveedor
    get nameProviderErrorMsg() {
        var _a;
        const errors = (_a = this.form.get('nameProvider')) === null || _a === void 0 ? void 0 : _a.errors;
        if (errors === null || errors === void 0 ? void 0 : errors.required) {
            return 'El campo es obligatorio.';
        }
        else if (errors === null || errors === void 0 ? void 0 : errors.minlength) {
            return 'Debe contener mínimo 3 caracteres.';
        }
        else if (errors === null || errors === void 0 ? void 0 : errors.pattern) {
            return 'El nombre no es válido.';
        }
        return '';
    }
    // Errores de nombre de compañia
    get nameCompanyErrorMsg() {
        var _a;
        const errors = (_a = this.form.get('nameCompany')) === null || _a === void 0 ? void 0 : _a.errors;
        if (errors === null || errors === void 0 ? void 0 : errors.required) {
            return 'El campo es obligatorio.';
        }
        else if (errors === null || errors === void 0 ? void 0 : errors.minlength) {
            return 'Debe contener mínimo 3 caracteres.';
        }
        return '';
    }
    // Errores de categoría
    get categoryErrorMsg() {
        var _a;
        const errors = (_a = this.form.get('category')) === null || _a === void 0 ? void 0 : _a.errors;
        if (errors === null || errors === void 0 ? void 0 : errors.required) {
            return 'El campo es obligatorio.';
        }
        return '';
    }
    // Errores de teléfono / celular
    get telephoneErrorMsg() {
        var _a;
        const errors = (_a = this.form.get('telephone')) === null || _a === void 0 ? void 0 : _a.errors;
        if (errors === null || errors === void 0 ? void 0 : errors.required) {
            return 'El campo es obligatorio.';
        }
        else if (errors === null || errors === void 0 ? void 0 : errors.pattern) {
            return 'El teléfono no tiene un formato correcto.';
        }
        return '';
    }
    // Errores de teléfono / celular
    get emailErrorMsg() {
        var _a;
        const errors = (_a = this.form.get('email')) === null || _a === void 0 ? void 0 : _a.errors;
        if (errors === null || errors === void 0 ? void 0 : errors.required) {
            return 'El campo es obligatorio.';
        }
        else if (errors === null || errors === void 0 ? void 0 : errors.pattern) {
            return 'El correo no tiene un formato correcto.';
        }
        return '';
    }
    onAddProvider() {
        console.log(this.form.getError('telephone'));
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        this.providerService.addProvider(this.form.value);
    }
    onUpdate() {
        const provider = this.form.value;
        provider.id = this.providerId;
        // Llamar función para actualizar
        this.providerService.updateProvider(provider);
        this.name = '';
        this.form.reset();
    }
    ngOnInit() {
        if (this.name) {
            this.form.get('nameProvider').setValue(this.name);
            this.form.get('nameCompany').setValue(this.nameCompany);
            this.form.get('category').setValue(this.category);
            this.form.get('telephone').setValue(this.telephone);
            this.form.get('email').setValue(this.email);
        }
    }
};
ModalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_provider_service__WEBPACK_IMPORTED_MODULE_5__["ProviderService"] }
];
ModalComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nameCompany: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    category: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    telephone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    providerId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal',
        template: _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalComponent);



/***/ }),

/***/ "WLUK":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/search-bar/search-bar.component */ "Oe7f");
/* harmony import */ var _pipes_product_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/product-filter.pipe */ "uzvk");






let ProductsModule = class ProductsModule {
};
ProductsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_4__["SearchBarComponent"],
            _pipes_product_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["ProductFilterPipe"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]
        ],
        exports: [
            _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_4__["SearchBarComponent"]
        ]
    })
], ProductsModule);



/***/ }),

/***/ "XPuj":
/*!*********************************************!*\
  !*** ./src/app/auth/services/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "N/25");





let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.authService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(user => {
            if (user) {
                // this.router.navigate( ['/home'] );
                return true;
            }
            else {
                // Redirige a la pagina de login
                this.router.navigate(['/login']);
                return false;
            }
        }));
    }
    canLoad(route, segments) {
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _providers_components_components_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./providers/components/components.module */ "ol0e");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _products_products_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./products/products.module */ "WLUK");







// Firebase









let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        ],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["firebaseConfig"]),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorageModule"],
            _products_products_module__WEBPACK_IMPORTED_MODULE_15__["ProductsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            _providers_components_components_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsModule"]
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }
        ],
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        ],
    })
], AppModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "ksG8":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/components/search-bar/search-bar.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <ion-searchbar\n    placeholder=\"buscar\"\n    animated\n    debounce=\"500\"\n    (ionChange)=\"onSearchProduct( $event )\"\n    >\n  </ion-searchbar>\n  \n  <ion-list>\n    <ion-item *ngFor=\"let product of allProducts | productFilter: search\">\n      <ion-label (click)=\"doSomething( product )\">{{ product.name }}</ion-label>\n    </ion-item>\n  </ion-list>\n</div>");

/***/ }),

/***/ "ol0e":
/*!***********************************************************!*\
  !*** ./src/app/providers/components/components.module.ts ***!
  \***********************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal/modal.component */ "WAyj");







let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "orWt":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/side-menu/side-menu.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu-toggle>\n  <ion-menu side=\"start\"\n            menuId=\"first\"\n            contentId=\"main\">\n    <ion-header>\n      <ion-toolbar color=\"menu\">\n        <ion-title>Menú</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <!-- Opción de inicio -->\n        <ion-item routerLink=\"/home\">\n          <ion-icon slot=\"start\" name=\"home-outline\"></ion-icon>\n          <ion-label>Inicio</ion-label>\n        </ion-item>\n        <!-- Opciónd e ventas -->\n        <ion-item routerLink=\"/sale\">\n          <ion-icon slot=\"start\" name=\"cash-outline\"></ion-icon>\n          <ion-label>Ventas</ion-label>\n        </ion-item>\n        <!-- Opción de productos -->\n        <ion-item routerLink=\"/products\">\n          <ion-icon slot=\"start\" name=\"cart-outline\"></ion-icon>\n          <ion-label>Productos</ion-label>\n        </ion-item>\n        <!-- Opciónde usuarios ( solo administrador ) -->\n        <ion-item *ngIf=\"userRole === 'Administrador'\" routerLink=\"/users\">\n          <ion-icon slot=\"start\" name=\"person-outline\"></ion-icon>\n          <ion-label>Usuarios</ion-label>\n        </ion-item>\n        <!-- Opción de proveedores ( solo administador ) -->\n        <ion-item *ngIf=\"userRole === 'Administrador'\" routerLink=\"/providers\">\n          <ion-icon slot=\"start\" name=\"person-outline\"></ion-icon>\n          <ion-label>Proveedores</ion-label>\n        </ion-item>\n  \n        <ion-item-divider></ion-item-divider>\n        \n        <ion-item>\n          <ion-icon slot=\"start\" name=\"moon\"></ion-icon>\n          <ion-label>Modo oscuro</ion-label>\n          <ion-toggle slot=\"end\"\n                      [ngModel]=\"darkMode\"\n                      (ionChange)=\"toggleDarkTheme()\"></ion-toggle>\n        </ion-item>\n\n        <ion-item>\n          <ion-label class=\"ion-text-center\">{{ user | titlecase }}</ion-label>\n        </ion-item>\n\n        <ion-item (click)=\"onLogOut()\" routerLink=\"/login\">\n          <ion-label class=\"ion-text-center\" color=\"danger\">Cerrar Sesión</ion-label>\n        </ion-item>\n\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n</ion-menu-toggle>");

/***/ }),

/***/ "t4pU":
/*!**************************************************************************!*\
  !*** ./src/app/products/components/search-bar/search-bar.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  cursor: pointer;\n  --color: #3880ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NlYXJjaC1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJzZWFyY2gtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVsIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLS1jb2xvcjogIzM4ODBmZjtcbn0iXX0= */");

/***/ }),

/***/ "uzvk":
/*!*******************************************************!*\
  !*** ./src/app/products/pipes/product-filter.pipe.ts ***!
  \*******************************************************/
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

/***/ "vQ30":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/side-menu/side-menu.component.ts ***!
  \********************************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_side_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./side-menu.component.html */ "orWt");
/* harmony import */ var _side_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side-menu.component.scss */ "2OOJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/services/auth.service */ "N/25");





let SideMenuComponent = class SideMenuComponent {
    constructor(authService) {
        this.authService = authService;
        this.darkMode = true;
        this.user = '';
        this.userRole = '';
        if (this.authService.user$) {
            this.authService.user$.subscribe(user => {
                if (user) {
                    this.user = `${user.name} ${user.lastName}`;
                    this.userRole = user.role;
                }
                else {
                    this.user = '';
                }
            });
        }
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        this.darkMode = prefersDark.matches;
    } // Constructor
    // Activar / desactivar tema oscuro
    toggleDarkTheme() {
        this.darkMode = !this.darkMode;
        document.body.classList.toggle('dark');
    }
    ngOnInit() { }
    onLogOut() {
        this.authService.logout();
    }
};
SideMenuComponent.ctorParameters = () => [
    { type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
SideMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-side-menu',
        template: _raw_loader_side_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_side_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SideMenuComponent);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/services/auth.guard */ "XPuj");




const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | home-pages-home-module */ "home-pages-home-module").then(__webpack_require__.bind(null, /*! ./home//pages/home.module */ "TWsR")).then(m => m.HomePageModule),
        canActivate: [_auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() | auth-pages-register-register-module */[__webpack_require__.e("common"), __webpack_require__.e("auth-pages-register-register-module")]).then(__webpack_require__.bind(null, /*! ./auth/pages/register/register.module */ "jaOa")).then(m => m.RegisterPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | auth-pages-login-login-module */ "auth-pages-login-login-module").then(__webpack_require__.bind(null, /*! ./auth/pages/login/login.module */ "q4Kd")).then(m => m.LoginPageModule)
    },
    {
        path: 'products',
        loadChildren: () => Promise.all(/*! import() | products-pages-products-products-module */[__webpack_require__.e("common"), __webpack_require__.e("products-pages-products-products-module")]).then(__webpack_require__.bind(null, /*! ./products/pages/products/products.module */ "szOk")).then(m => m.ProductsPageModule),
        canActivate: [_auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'sale',
        loadChildren: () => __webpack_require__.e(/*! import() | sales-pages-sale-sale-module */ "sales-pages-sale-sale-module").then(__webpack_require__.bind(null, /*! ./sales/pages/sale/sale.module */ "uzno")).then(m => m.SalePageModule),
        canActivate: [_auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'users',
        loadChildren: () => __webpack_require__.e(/*! import() | users-pages-users-users-module */ "users-pages-users-users-module").then(__webpack_require__.bind(null, /*! ./users/pages/users/users.module */ "MP20")).then(m => m.UsersPageModule),
        canActivate: [_auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'providers',
        loadChildren: () => __webpack_require__.e(/*! import() | providers-pages-providers-providers-module */ "providers-pages-providers-providers-module").then(__webpack_require__.bind(null, /*! ./providers/pages/providers/providers.module */ "qz0O")).then(m => m.ProvidersPageModule),
        canActivate: [_auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: '**',
        redirectTo: 'products',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map