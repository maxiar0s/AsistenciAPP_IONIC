"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_asist_asist_module_ts"],{

/***/ 3547:
/*!***********************************************!*\
  !*** ./src/app/asist/asist-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsistPageRoutingModule": () => (/* binding */ AsistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _asist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asist.page */ 9724);




const routes = [
    {
        path: '',
        component: _asist_page__WEBPACK_IMPORTED_MODULE_0__.AsistPage
    }
];
let AsistPageRoutingModule = class AsistPageRoutingModule {
};
AsistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AsistPageRoutingModule);



/***/ }),

/***/ 460:
/*!***************************************!*\
  !*** ./src/app/asist/asist.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsistPageModule": () => (/* binding */ AsistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _asist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asist-routing.module */ 3547);
/* harmony import */ var _asist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asist.page */ 9724);







let AsistPageModule = class AsistPageModule {
};
AsistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _asist_routing_module__WEBPACK_IMPORTED_MODULE_0__.AsistPageRoutingModule
        ],
        declarations: [_asist_page__WEBPACK_IMPORTED_MODULE_1__.AsistPage]
    })
], AsistPageModule);



/***/ }),

/***/ 9724:
/*!*************************************!*\
  !*** ./src/app/asist/asist.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsistPage": () => (/* binding */ AsistPage)
/* harmony export */ });
/* harmony import */ var C_Users_maxia_OneDrive_Escritorio_RegistrAPP_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _asist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asist.page.html?ngResource */ 7935);
/* harmony import */ var _asist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asist.page.scss?ngResource */ 5709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);







let AsistPage = class AsistPage {
  constructor(alertController, menuController) {
    this.alertController = alertController;
    this.menuController = menuController;
  }

  ngOnInit() {}

  mostrarMenu() {
    this.menuController.open('first');
  }

  Guardar() {
    var _this = this;

    return (0,C_Users_maxia_OneDrive_Escritorio_RegistrAPP_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: 'Asistencia',
        message: 'La asistencia se ha guardado',
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

};

AsistPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController
}];

AsistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-asist',
  template: _asist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_asist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AsistPage);


/***/ }),

/***/ 5709:
/*!**************************************************!*\
  !*** ./src/app/asist/asist.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.lbl {\n  font-size: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUZKOztBQUtFO0VBQ0UscUJBQUE7QUFGSjs7QUFJRTtFQUNFLDBCQUFBO0FBREoiLCJmaWxlIjoiYXNpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICBcclxuICAgIGNvbG9yOiAjOGM4YzhjO1xyXG4gIFxyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAubGJseyBcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50OyBcclxuICB9Il19 */";

/***/ }),

/***/ 7935:
/*!**************************************************!*\
  !*** ./src/app/asist/asist.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"mostrarMenu()\" color=\"warning\">\n        <ion-icon slot=\"icon-only\" name=\"menu-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n   <ion-title color=\"warning\">ASISTENCIA</ion-title>\n  </ion-toolbar>\n</ion-header>\n<br>\n<ion-list-header>\n  <ion-label class=\"lbl\">Revisa las asistencias</ion-label>\n</ion-list-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-select interface=\"popover\" placeholder=\"Seleccione sección\">\n        <ion-select-option value=\"Seccion1\">Seccion 001</ion-select-option>\n        <ion-select-option value=\"Seccion2\">Seccion 002</ion-select-option>\n        <ion-select-option value=\"Seccion3\">Seccion 003</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n  <ion-item>\n    <ion-label>Alumno Uno</ion-label>\n    <ion-checkbox color=\"warning\" slot=\"start\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Alumno Dos</ion-label>\n    <ion-checkbox color=\"warning\" checked=\"true\"slot=\"start\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Alumno Tres</ion-label>\n    <ion-checkbox color=\"warning\" checked=\"true\" slot=\"start\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Alumno Cuatro</ion-label>\n    <ion-checkbox color=\"warning\" checked=\"true\" slot=\"start\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Alumno Cinco</ion-label>\n    <ion-checkbox color=\"warning\" slot=\"start\"></ion-checkbox>\n  </ion-item>\n</ion-list>\n<br><br>\n<ion-button (click)=\"Guardar()\"expand=\"full\" shape=\"round\" size=\"large\" color=\"warning\" fill=\"outline\">\n  Guardar\n</ion-button>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_asist_asist_module_ts.js.map