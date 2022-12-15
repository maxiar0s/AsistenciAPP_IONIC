"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_inicio2_inicio2_module_ts"],{

/***/ 3531:
/*!***************************************************!*\
  !*** ./src/app/inicio2/inicio2-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Inicio2PageRoutingModule": () => (/* binding */ Inicio2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _inicio2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio2.page */ 2937);




const routes = [
    {
        path: '',
        component: _inicio2_page__WEBPACK_IMPORTED_MODULE_0__.Inicio2Page
    }
];
let Inicio2PageRoutingModule = class Inicio2PageRoutingModule {
};
Inicio2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Inicio2PageRoutingModule);



/***/ }),

/***/ 2613:
/*!*******************************************!*\
  !*** ./src/app/inicio2/inicio2.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Inicio2PageModule": () => (/* binding */ Inicio2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _inicio2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio2-routing.module */ 3531);
/* harmony import */ var _inicio2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio2.page */ 2937);







let Inicio2PageModule = class Inicio2PageModule {
};
Inicio2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _inicio2_routing_module__WEBPACK_IMPORTED_MODULE_0__.Inicio2PageRoutingModule
        ],
        declarations: [_inicio2_page__WEBPACK_IMPORTED_MODULE_1__.Inicio2Page]
    })
], Inicio2PageModule);



/***/ }),

/***/ 2937:
/*!*****************************************!*\
  !*** ./src/app/inicio2/inicio2.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Inicio2Page": () => (/* binding */ Inicio2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _inicio2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio2.page.html?ngResource */ 3071);
/* harmony import */ var _inicio2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio2.page.scss?ngResource */ 3333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let Inicio2Page = class Inicio2Page {
    constructor(menuController) {
        this.menuController = menuController;
    }
    ngOnInit() {
    }
    mostrarMenu() {
        this.menuController.open('first');
    }
};
Inicio2Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController }
];
Inicio2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-inicio2',
        template: _inicio2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_inicio2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Inicio2Page);



/***/ }),

/***/ 3333:
/*!******************************************************!*\
  !*** ./src/app/inicio2/inicio2.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpbzIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRko7O0FBS0U7RUFDRSxxQkFBQTtBQUZKIiwiZmlsZSI6ImluaWNpbzIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICBcclxuICAgIGNvbG9yOiAjOGM4YzhjO1xyXG4gIFxyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH0iXX0= */";

/***/ }),

/***/ 3071:
/*!******************************************************!*\
  !*** ./src/app/inicio2/inicio2.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n   <ion-title color=\"warning\">ALUMNO</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-list-header>\n  <br>\n  <ion-label class=\"lbl\">Utiliza tu camara para escanear</ion-label>\n  <br><br>\n</ion-list-header>\n<ion-content>\n  <ion-button expand=\"full\" shape=\"round\" size=\"large\" color=\"warning\">\n    <ion-icon slot=\"icon-only\"name=\"camera-outline\" size=\"large\"></ion-icon>\n  </ion-button>\n  <br><br><br><br><br><br><br><br><br><br><br><br>\n  <ion-button expand=\"full\" shape=\"round\" size=\"large\" color=\"warning\" fill=\"outline\" routerLink=\"\">\n    Cerrar Sesión\n  </ion-button>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_inicio2_inicio2_module_ts.js.map