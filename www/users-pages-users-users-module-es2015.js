(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-pages-users-users-module"],{

/***/ "3Wic":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/pages/users/users.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"onToggleMenu()\">\n        <ion-icon slot=\"icon-only\" name=\"menu-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">\n      Usuarios\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"8\">\n        <ion-grid>\n          <ion-row> <!-- Encabezados -->\n            <ion-col size=\"2\" class=\"ion-text-center\"><h6>Nombre</h6></ion-col>\n            <ion-col size=\"2\" class=\"ion-text-center\"><h6>Apellido</h6></ion-col>\n            <ion-col size=\"2\" class=\"ion-text-center\"><h6>Teléfono</h6></ion-col>\n            <ion-col size=\"2\" class=\"ion-text-center\"><h6>Rol</h6></ion-col>\n          </ion-row> <!-- Fin de los encabezados-->\n          <ion-row *ngFor=\"let user of allUsers\"> <!-- Fila a repetir -->\n            <ion-col size=\"2\" class=\"ion-text-center\">{{ user.name | titlecase }}</ion-col>\n            <ion-col size=\"2\" class=\"ion-text-center\">{{ user.lastName | titlecase }}</ion-col>\n            <ion-col size=\"2\" class=\"ion-text-center\">{{ user.phone }}</ion-col>\n            <ion-col size=\"2\" class=\"ion-text-center\">{{ user.role }}</ion-col>\n            <ion-col size=\"2\">\n              <ion-button (click)=\"getUserRole( user )\">\n                <ion-icon slot=\"icon-only\" name=\"sync-outline\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"danger\" (click)=\"onDeleteUser( user.id )\">\n                <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row> <!-- Fin de la fila a repetir-->\n        </ion-grid>\n      </ion-col> <!-- Fin de la columna de 8-->\n      <ion-col size=\"4\"> <!-- Columna del formulario-->\n        <form (ngSubmit)=\"onUpdateRole()\" [formGroup]=\"form\" >\n          <ion-item>\n            <ion-label>Puesto:</ion-label>\n            <ion-select placeholder=\"Seleccione uno\" interface=\"popover\" formControlName=\"role\">\n                <ion-select-option [value]=\"rol.name\" *ngFor=\"let rol of roles\">\n                  {{ rol.name }}\n                </ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <div class=\"buttons\">\n            <ion-button class=\"ion-margin-top\" fill=\"outline\" type=\"button\" color=\"danger\">\n              <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n              Cancelar\n            </ion-button>\n\n            <ion-button class=\"ion-margin-top\" fill=\"outline\" (click)=\"onUpdateRole()\">\n              <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n              Actualizar\n            </ion-button>\n\n            <!-- <ion-button class=\"ion-margin-top\" fill=\"outline\" type=\"submit\" *ngIf=\" !isUpdating \">\n              <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n              Guardar\n            </ion-button> -->\n\n          </div>\n        </form>\n      </ion-col> <!-- Fin de la columna del formulario-->\n    </ion-row> <!-- Fin de la fila principal -->\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "MP20":
/*!***************************************************!*\
  !*** ./src/app/users/pages/users/users.module.ts ***!
  \***************************************************/
/*! exports provided: UsersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageModule", function() { return UsersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users-routing.module */ "xmAa");
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users.page */ "mx2/");







let UsersPageModule = class UsersPageModule {
};
UsersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _users_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsersPageRoutingModule"]
        ],
        declarations: [_users_page__WEBPACK_IMPORTED_MODULE_6__["UsersPage"]]
    })
], UsersPageModule);



/***/ }),

/***/ "d+Lw":
/*!***************************************************!*\
  !*** ./src/app/users/pages/users/users.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "mx2/":
/*!*************************************************!*\
  !*** ./src/app/users/pages/users/users.page.ts ***!
  \*************************************************/
/*! exports provided: UsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPage", function() { return UsersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_users_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./users.page.html */ "3Wic");
/* harmony import */ var _users_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.page.scss */ "d+Lw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "zLM3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







let UsersPage = class UsersPage {
    constructor(menu, formBuilder, userService) {
        this.menu = menu;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.roles = [
            {
                name: 'Administrador'
            },
            {
                name: 'Gerente'
            },
            {
                name: 'Empleado'
            }
        ];
        this.allUsers = [];
        this.form = this.formBuilder.group({
            role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
        });
        this.users = this.userService.getAllUsers();
        this.users
            .subscribe(users => {
            console.log(users);
            this.allUsers = users.filter(user => {
                return user.role !== 'Administrador';
            });
        });
    }
    ngOnInit() {
        // Evita que el menú se abra arrastrando
        this.menu.swipeGesture(false, 'first');
    }
    getUserRole(user) {
        this.updateUser = user;
        this.form.get('role').setValue(user.role);
    }
    onUpdateRole() {
        if (this.form.invalid) {
            return;
        }
        this.updateUser.role = this.form.get('role').value;
        this.userService.updateUser(this.updateUser);
    }
    onDeleteUser(id) {
        this.userService.deleteUser(id);
    }
    onToggleMenu() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
};
UsersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
UsersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-users',
        template: _raw_loader_users_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_users_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UsersPage);



/***/ }),

/***/ "xmAa":
/*!***********************************************************!*\
  !*** ./src/app/users/pages/users/users-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: UsersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageRoutingModule", function() { return UsersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.page */ "mx2/");




const routes = [
    {
        path: '',
        component: _users_page__WEBPACK_IMPORTED_MODULE_3__["UsersPage"]
    }
];
let UsersPageRoutingModule = class UsersPageRoutingModule {
};
UsersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UsersPageRoutingModule);



/***/ }),

/***/ "zLM3":
/*!************************************************!*\
  !*** ./src/app/users/services/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");





let UserService = class UserService {
    constructor(af, afa) {
        this.af = af;
        this.afa = afa;
        this.usersCollection = this.af.collection('users');
        this.users = this.usersCollection.snapshotChanges()
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
    // Obtener todos los productos
    getAllUsers() {
        try {
            return this.users;
        }
        catch (err) {
            console.log(err);
        }
    }
    // Actualizar producto
    updateUser(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const id = user.id;
                this.af.collection('users').doc(id).update(user);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    // Eliminar producto
    deleteUser(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.af.collection('users').doc(id).delete();
            }
            catch (err) {
                console.log(err);
            }
        });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ })

}]);
//# sourceMappingURL=users-pages-users-users-module-es2015.js.map