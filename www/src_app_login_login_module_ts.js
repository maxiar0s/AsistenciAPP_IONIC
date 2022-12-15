"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var C_Users_maxia_OneDrive_Escritorio_RegistrAPP_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _service_registroservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/registroservice.service */ 9303);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);









let LoginPage = class LoginPage {
  constructor(alertController, navController, registroService, fb) {
    this.alertController = alertController;
    this.navController = navController;
    this.registroService = registroService;
    this.fb = fb;
    this.usuarios = [];
    this.usuario = {
      nombre: '',
      email: '',
      password: ''
    };
    this.formularioLogin = this.fb.group({
      'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
      'correo': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
      'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required)
    });
  }

  ngOnInit() {}

  onSubmit() {
    console.log('submit');
    console.log(this.usuario);
  }

  Ingresar() {
    var _this = this;

    return (0,C_Users_maxia_OneDrive_Escritorio_RegistrAPP_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var f = _this.formularioLogin.value;
      var a = 0;

      _this.registroService.getUsuarios().then(datos => {
        _this.usuarios = datos;

        if (datos.length == 0) {
          return null;
        }

        for (let obj of _this.usuarios) {
          if (obj.correoUsuario == f.correo && obj.passUsuario == f.password) {
            a = 1;
            console.log('ingresado');
            localStorage.setItem('ingresado', 'true');

            _this.navController.navigateRoot('inicio');
          }
        }

        console.log(a);

        if (a == 0) {
          _this.alertMsg();
        }
      });
    })();
  }

  alertMsg() {
    var _this2 = this;

    return (0,C_Users_maxia_OneDrive_Escritorio_RegistrAPP_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        header: 'Error...',
        message: 'Los datos ingresados son incorrectos',
        buttons: ['Aceptar']
      });
      yield alert.present();
      return;
    })();
  }

};

LoginPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
}, {
  type: _service_registroservice_service__WEBPACK_IMPORTED_MODULE_3__.RegistroserviceService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.lbl {\n  font-size: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUZKOztBQUtFO0VBQ0UscUJBQUE7QUFGSjs7QUFJRTtFQUNFLDBCQUFBO0FBREoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICBcclxuICAgIGNvbG9yOiAjOGM4YzhjO1xyXG4gIFxyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAubGJseyBcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50OyBcclxuICB9Il19 */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title color=\"warning\">Iniciar Sesión</ion-title>\n  </ion-toolbar>\n  </ion-header>\n  <ion-content>\n\n    <form [formGroup]=\"formularioLogin\" #formulario=\"ngForm\" (ngSubmit) =\"onSubmit()\">\n      <ion-list-header>\n        <br>\n        <ion-label class=\"lbl\">Utiliza tu credenciales de acceso DUOC</ion-label>\n        <br>\n      </ion-list-header>\n      <ion-label class=\"lbl\">¿No estas registrado?</ion-label>\n      <br>\n      <ion-button expand=\"block\" shape=\"round\" size=\"small\" color=\"warning\"  routerLink=\"/registro\">\n        REGISTRO\n      </ion-button>\n      <br><br>\n      <ion-item>\n        <ion-label>Usuario: </ion-label>\n        <ion-input type=\"text\" placeholder=\"Usuario\"\n                   name=\"nombre\" [(ngModel)]= \"usuario.nombre\" formControlName=\"nombre\" required>\n        </ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label>Correo: </ion-label>\n        <ion-input type=\"email\" placeholder=\"Correo\"\n                   name=\"email\" value=\"\" [(ngModel)]= \"usuario.email\" formControlName=\"correo\"\n                   pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\"\n                   required>\n        </ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label>Contraseña: </ion-label>\n        <ion-input type=\"password\" placeholder=\"Contraseña\"\n                   name=\"password\" value=\"\" [(ngModel)]= \"usuario.password\" formControlName=\"password\"\n                   required>\n        </ion-input>\n      </ion-item>\n      <br><br>\n      <ion-button [disabled] =\"formulario.invalid\" (click)=\"Ingresar()\"\n      expand=\"block\" shape=\"round\" size=\"large\" color=\"warning\">\n        INGRESAR\n      </ion-button>\n    </form>\n  </ion-content>\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map