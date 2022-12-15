"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_noticias_noticias_module_ts"],{

/***/ 6935:
/*!*****************************************************!*\
  !*** ./src/app/noticias/noticias-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticiasPageRoutingModule": () => (/* binding */ NoticiasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _noticias_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noticias.page */ 241);




const routes = [
    {
        path: '',
        component: _noticias_page__WEBPACK_IMPORTED_MODULE_0__.NoticiasPage
    }
];
let NoticiasPageRoutingModule = class NoticiasPageRoutingModule {
};
NoticiasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NoticiasPageRoutingModule);



/***/ }),

/***/ 7668:
/*!*********************************************!*\
  !*** ./src/app/noticias/noticias.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticiasPageModule": () => (/* binding */ NoticiasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _noticias_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noticias-routing.module */ 6935);
/* harmony import */ var _noticias_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noticias.page */ 241);







let NoticiasPageModule = class NoticiasPageModule {
};
NoticiasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _noticias_routing_module__WEBPACK_IMPORTED_MODULE_0__.NoticiasPageRoutingModule
        ],
        declarations: [_noticias_page__WEBPACK_IMPORTED_MODULE_1__.NoticiasPage]
    })
], NoticiasPageModule);



/***/ }),

/***/ 241:
/*!*******************************************!*\
  !*** ./src/app/noticias/noticias.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticiasPage": () => (/* binding */ NoticiasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _noticias_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noticias.page.html?ngResource */ 4025);
/* harmony import */ var _noticias_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noticias.page.scss?ngResource */ 3481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_noticias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/noticias.service */ 7987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let NoticiasPage = class NoticiasPage {
    constructor(menuController, noticiasService) {
        this.menuController = menuController;
        this.noticiasService = noticiasService;
        this.noticias = [];
    }
    ngOnInit() {
        this.noticiasService.getTopHeadLines().subscribe(resp => {
            console.log('noticias', resp);
            this.noticias.push(...resp.articles);
        });
    }
    mostrarMenu() {
        this.menuController.open();
    }
};
NoticiasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController },
    { type: _services_noticias_service__WEBPACK_IMPORTED_MODULE_2__.NoticiasService }
];
NoticiasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-noticias',
        template: _noticias_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_noticias_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NoticiasPage);



/***/ }),

/***/ 7987:
/*!**********************************************!*\
  !*** ./src/app/services/noticias.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticiasService": () => (/* binding */ NoticiasService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);



let NoticiasService = class NoticiasService {
    constructor(httpclient) {
        this.httpclient = httpclient;
    }
    getTopHeadLines() {
        return (this.httpclient.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cd43b6f7074042db8be67063083f855a'));
    }
};
NoticiasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
NoticiasService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], NoticiasService);



/***/ }),

/***/ 3481:
/*!********************************************************!*\
  !*** ./src/app/noticias/noticias.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpY2lhcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 4025:
/*!********************************************************!*\
  !*** ./src/app/noticias/noticias.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"mostrarMenu()\">\n        <ion-icon slot=\"start\" name=\"menu-outline\" color=\"warning\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"warning\">NOTICIAS</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"warning\">\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\"\n          *ngFor=\"let noticia of noticias; let i=index\">\n          <ion-card>\n            <ion-card-header>\n                <ion-card-subtitle>\n                  <span class=\"text-primary\">{{i + 1}}. </span>\n                  <span class=\"noticia-source-name\">{{noticia.source.name}} </span> </ion-card-subtitle>\n                <ion-card-title>{{noticia.title}}</ion-card-title>\n            </ion-card-header>\n            <ion-img *ngIf=\"noticia.urlToImage\"\n                      [src] =\"noticia.urlToImage\"></ion-img>\n            <ion-card-content>\n              <p>\n                {{noticia.descripcion}}\n              </p>\n            </ion-card-content>\n          </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_noticias_noticias_module_ts.js.map