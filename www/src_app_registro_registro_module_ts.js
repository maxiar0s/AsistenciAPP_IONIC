"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_registro_registro_module_ts"],{

/***/ 4967:
/*!*****************************************************!*\
  !*** ./src/app/registro/registro-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageRoutingModule": () => (/* binding */ RegistroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page */ 2299);




const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_0__.RegistroPage
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroPageRoutingModule);



/***/ }),

/***/ 636:
/*!*********************************************!*\
  !*** ./src/app/registro/registro.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageModule": () => (/* binding */ RegistroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-routing.module */ 4967);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page */ 2299);








let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroPageRoutingModule
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_1__.RegistroPage]
    })
], RegistroPageModule);



/***/ }),

/***/ 2299:
/*!*******************************************!*\
  !*** ./src/app/registro/registro.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPage": () => (/* binding */ RegistroPage)
/* harmony export */ });
/* harmony import */ var C_Users_maxia_OneDrive_Escritorio_RegistrAPP_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _registro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page.html?ngResource */ 9575);
/* harmony import */ var _registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registro.page.scss?ngResource */ 7177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _service_registroservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/registroservice.service */ 9303);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);










let RegistroPage = class RegistroPage {
  constructor(alertController, registroService, toastController, navController, fb) {
    this.alertController = alertController;
    this.registroService = registroService;
    this.toastController = toastController;
    this.navController = navController;
    this.fb = fb;
    this.newUsuario = {};
    this.usuarios = [];
    this.usuario = {
      nombre: '',
      email: '',
      password: '',
      repassword: '',
      tipousuario: ''
    };
    this.formularioRegistro = this.fb.group({
      'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
      'correo': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]),
      'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(12)])),
      'confirmaPass': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(12)])),
      'tipoUsuario': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required)
    });
  }

  ngOnInit() {}

  onSubmit() {
    console.log('submit');
    console.log(this.usuario);
  }
  /*async CrearUsuario(){
    var f= this.formularioRegistro.value;
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'datos incompletos',
        message: 'Tienes que llenar',
        buttons: ['aceptar']
      });
      await alert.present();
      return;
      
    }
    var usuario = {
      nomUsuario: f.nombre,
      correoUsuario: f.correo,
      passUsuario : f.password,
      repassUsuario : f.confirmaPass,
      tipoUsuario : f.tipoUs
    }
    localStorage.setItem('usuario',JSON.stringify(usuario))
  }*/


  CrearUsuario() {
    var _this = this;

    return (0,C_Users_maxia_OneDrive_Escritorio_RegistrAPP_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var form = _this.formularioRegistro.value;
      var existe = 0;

      if (_this.formularioRegistro.invalid) {
        _this.alertError();
      } else {
        _this.newUsuario.nomUsuario = form.nombre;
        _this.newUsuario.correoUsuario = form.correo;
        _this.newUsuario.passUsuario = form.password;
        _this.newUsuario.repassUsuario = form.confirmaPass;
        _this.newUsuario.tipoUsuario = form.tipoUs;

        _this.registroService.getUsuarios().then(datos => {
          _this.usuarios = datos;

          if (!datos || datos.length == 0) {
            _this.registroService.addDatos(_this.newUsuario).then(dato => {
              _this.newUsuario = {};

              _this.showToast('Usuario Creado satisfactoriamente');
            });

            _this.formularioRegistro.reset();

            _this.navController.navigateRoot('login');
          } else {
            for (let obj of _this.usuarios) {
              if (_this.newUsuario.correoUsuario == obj.correoUsuario) {
                existe = 1;
              }
            } //Fin del for


            if (existe == 1) {
              _this.alertCorreoDuplicado();

              _this.formularioRegistro.reset();
            } else {
              _this.registroService.addDatos(_this.newUsuario).then(dato => {
                _this.newUsuario = {};

                _this.showToast('Usuario Creado satisfactoriamente');
              });

              _this.formularioRegistro.reset();

              _this.navController.navigateRoot('login');
            }
          }
        });
      } //finelse

    })();
  } //findelmetodo


  alertError() {
    var _this2 = this;

    return (0,C_Users_maxia_OneDrive_Escritorio_RegistrAPP_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        header: 'Error..',
        message: 'Debe completar todos los datos',
        buttons: ['Aceptar']
      });
      yield alert.present();
    })();
  }

  showToast(msg) {
    var _this3 = this;

    return (0,C_Users_maxia_OneDrive_Escritorio_RegistrAPP_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this3.toastController.create({
        message: msg,
        duration: 3000
      });
      toast.present();
    })();
  }

  alertCorreoDuplicado() {
    var _this4 = this;

    return (0,C_Users_maxia_OneDrive_Escritorio_RegistrAPP_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
        header: '¡Error!',
        message: 'El correo ingresado ya existe',
        buttons: ['Aceptar']
      });
      yield alert.present();
    })();
  }

};

RegistroPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}, {
  type: _service_registroservice_service__WEBPACK_IMPORTED_MODULE_3__.RegistroserviceService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
}];

RegistroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-registro',
  template: _registro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], RegistroPage);


/***/ }),

/***/ 7177:
/*!********************************************************!*\
  !*** ./src/app/registro/registro.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.lbl {\n  font-size: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUZKOztBQUtFO0VBQ0UscUJBQUE7QUFGSjs7QUFJRTtFQUNFLDBCQUFBO0FBREoiLCJmaWxlIjoicmVnaXN0cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICBcclxuICAgIGNvbG9yOiAjOGM4YzhjO1xyXG4gIFxyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAubGJseyBcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50OyBcclxuICB9Il19 */";

/***/ }),

/***/ 9575:
/*!********************************************************!*\
  !*** ./src/app/registro/registro.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title color=\"warning\">Registro</ion-title>\n  </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <form [formGroup]=\"formularioRegistro\" (keyup.enter)=\"CrearUsuario()\"\n     #formulario=\"ngForm\" (ngSubmit) =\"onSubmit()\">\n      <ion-list-header>\n        <br>\n        <ion-label class=\"lbl\">Registro de acceso DUOC</ion-label>\n        <br>\n      </ion-list-header>\n      <ion-label class=\"lbl\">¿Ya estas registrado?</ion-label>\n      <br>\n      <ion-button expand=\"block\" shape=\"round\" size=\"small\" color=\"warning\"  routerLink=\"/login\">\n        INICIAR SESION\n      </ion-button>\n      <br><br>\n      <ion-item>\n        <ion-label>Usuario: </ion-label>\n        <ion-input type=\"text\" placeholder=\"Usuario\" formControlName=\"nombre\"\n                   name=\"nombre\" [(ngModel)]= \"usuario.nombre\" required>\n        </ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label>Correo: </ion-label>\n        <ion-input type=\"email\" placeholder=\"Correo\" formControlName=\"correo\"\n                   name=\"email\" value=\"\" [(ngModel)]= \"usuario.email\"\n                   pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\"\n                   required>\n        </ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label>Contraseña: </ion-label>\n        <ion-input type=\"password\" placeholder=\"Contraseña\" formControlName=\"password\"\n                   name=\"password\" value=\"\" [(ngModel)]= \"usuario.password\"\n                   required>\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Repetir: </ion-label>\n        <ion-input type=\"password\" placeholder=\"Contraseña\" formControlName=\"confirmaPass\"\n                   name=\"repassword\" value=\"\" [(ngModel)]= \"usuario.repassword\"\n                   required>\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>[ 1 ] si es Profesor  [ 2 ] si es Alumno</ion-label>\n        <ion-input type=\"number\"  placeholder=\"Cargo\" formControlName=\"tipoUsuario\"\n        name=\"tipousuario\" value=\"\" [(ngModel)]= \"usuario.tipousuario\" required>\n      </ion-input>\n      </ion-item>\n      <br><br>\n      <ion-button [disabled] =\"formulario.invalid\" (click)=\"CrearUsuario()\"\n      expand=\"block\" shape=\"round\" size=\"large\" color=\"warning\"  routerLink=\"/login\">\n        ACEPTAR\n      </ion-button>\n    </form>\n  </ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_registro_registro_module_ts.js.map