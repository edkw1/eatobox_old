"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_pages_module_ts"],{

/***/ 9730:
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesPageRoutingModule": () => (/* binding */ PagesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _pages_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.page */ 8886);




const routes = [
    {
        path: '',
        component: _pages_page__WEBPACK_IMPORTED_MODULE_0__.PagesPage
    }
];
let PagesPageRoutingModule = class PagesPageRoutingModule {
};
PagesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PagesPageRoutingModule);



/***/ }),

/***/ 4756:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesPageModule": () => (/* binding */ PagesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages-routing.module */ 9730);
/* harmony import */ var _pages_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.page */ 8886);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);








let PagesPageModule = class PagesPageModule {
};
PagesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagesPageRoutingModule
        ],
        declarations: [_pages_page__WEBPACK_IMPORTED_MODULE_1__.PagesPage]
    })
], PagesPageModule);



/***/ }),

/***/ 8886:
/*!*************************************!*\
  !*** ./src/app/pages/pages.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesPage": () => (/* binding */ PagesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _pages_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.page.html?ngResource */ 1664);
/* harmony import */ var _pages_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.page.scss?ngResource */ 5482);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 5830);






let PagesPage = class PagesPage {
    constructor(route, api) {
        this.route = route;
        this.api = api;
        this.itemPage = [];
        this.slides = [];
        this.slideOptions = {
            slidesPerView: 1.2,
            spaceBetween: 10,
            autoHeight: true,
            preloadImages: true,
            loop: true,
            autoplay: {
                delay: 2000,
            }
        };
        this.id = this.route.snapshot.paramMap.get('id');
        this.loadPage();
    }
    loadPage() {
        console.log('ITEM ');
        this.getPageItem(this.id);
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.params = params;
        });
    }
    getPageItem(id) {
        return new Promise((resolve) => {
            this.api.getApi('infoPages', { 'id': id }).then(result => {
                if (result.hasOwnProperty('data')) {
                    this.itemPage = result['data'][0];
                    if (this.itemPage.hasOwnProperty('article')) {
                        this.loadContentPage(this.itemPage['article']);
                    }
                }
                else {
                    this.itemPage = [];
                }
                console.log('itemPage', this.itemPage);
            });
        });
    }
    loadContentPage(pageslug) {
        // this.storage.get('user_type').then(result => {
        //     this.userType = result;
        // });
        return new Promise((resolve) => {
            this.api.getApi('slides', { 'page_article': pageslug }).then(result => {
                console.log(result);
                // resolve();
                if (result.hasOwnProperty('data')) {
                    this.slides = result['data'];
                    console.log(this.slides);
                }
            });
        });
    }
};
PagesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
PagesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-pages',
        template: _pages_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pages_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PagesPage);



/***/ }),

/***/ 5482:
/*!**************************************************!*\
  !*** ./src/app/pages/pages.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".block-wrapper {\n  background-color: var(--block-wrapper-bg);\n  border-radius: 10px;\n  padding-bottom: 40px;\n  padding-top: 5px;\n}\n\n.block-inner {\n  max-width: 1080px;\n  width: 100%;\n  padding: 0 15px;\n}\n\nion-slides {\n  background-color: var(--banner-categories-bg);\n  padding-top: 5px;\n  padding-bottom: 10px;\n  padding-left: 15px;\n}\n\n.slider_img img {\n  object-fit: cover;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQUE7RUFDRSw2Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUlGIiwiZmlsZSI6InBhZ2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9jay13cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxvY2std3JhcHBlci1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLmJsb2NrLWlubmVyIHtcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5pb24tc2xpZGVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFubmVyLWNhdGVnb3JpZXMtYmcpO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLnNsaWRlcl9pbWcgaW1ne1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 1664:
/*!**************************************************!*\
  !*** ./src/app/pages/pages.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<app-header title=\"{{params['title'] || ''}}\" [isMain]=\"false\" [isMenu]=\"true\"></app-header>\n<ion-content>\n  <div *ngIf=\"!itemPage\">\n    <ion-progress-bar type=\"indeterminate\" color=\"mainapp\"></ion-progress-bar>\n    <br>\n  </div>\n\n  <div class=\"news ion-padding\">\n    <div class=\"block-wrapper\">\n      <ion-slides pager=\"false\" *ngIf=\"slides.length\" [options]=\"slideOptions\">\n        <ion-slide tappable *ngFor=\"let slide of slides\">\n          <div *ngIf=\"slide['image']\">\n            <a class=\"slider_img\">\n              <img src=\"{{slide['image']}}\" />\n            </a>\n          </div>\n        </ion-slide>\n      </ion-slides>\n      <div class=\"block-inner\">\n        <div class=\"text-content\">\n          <div class=\"wp_content\" *ngIf=\"itemPage.body\" [innerHTML]=\"itemPage.body\"></div>\n          <div class=\"wp_content\" *ngIf=\"!itemPage.body\"><h2>Информация будет скоро предоставлена</h2></div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n<app-footer></app-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pages_module_ts.js.map