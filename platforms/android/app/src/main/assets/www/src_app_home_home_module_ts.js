"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 1670);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 7206);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 2879);
/* harmony import */ var _awesome_cordova_plugins_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/app-version/ngx */ 8285);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cart.service */ 910);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/events.service */ 106);











let HomePage = class HomePage {
    constructor(api, storage, appVersion, platform, alertController, cart, events) {
        this.api = api;
        this.storage = storage;
        this.appVersion = appVersion;
        this.platform = platform;
        this.alertController = alertController;
        this.cart = cart;
        this.events = events;
        this.slides = [];
        this.allProd = [];
        this.noimg = '';
        this.arrEl = [];
        this.activeMenu = '15';
        this.iosVers = '2.0';
        this.androidVers = '2.0';
        this.android_applink = '';
        this.ios_applink = '';
        this.inputValue = '';
        this.searchArr = [];
        this.categories = [];
        this.catListParent = [];
        this.catListParentTemp = [];
        this.skeletonArr = Array(4).fill(1);
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
        this.loadContentPage();
        this.getCategory();
        this.events.getObservable().subscribe((data) => {
            // console.log("Data received:", data);
            // if(data.cart == 'added'){
            //   this.check(data.itemId)
            // //
            // }
        });
    }
    ngOnInit() {
        console.log('!!!!!!!! ngOnInit');
    }
    //   ionViewWillEnter(){
    //     console.log('!!!!!!!! WillEnter');
    // }
    ionViewDidEnter() {
        this.checkVersion();
    }
    // ionViewWillLeave  (){
    //   console.log('!!!!!!!! WillLeave');
    // }
    // ionViewDidLeave   (){
    //   console.log('!!!!!!!! DidLeave');
    // }
    // ngOnDestroy    (){
    //   console.log('!!!!!!!! ngOnDestroy ');
    // }
    check(id) {
        if (this.allProd.includes(id)) {
            return true;
        }
    }
    eventCaught(event, sec = false) {
        this.selectedIndex = event;
        if (sec) {
            let alldish = this.cart.getAddedDishes();
            let tempAllProd = Object.keys(alldish);
            tempAllProd.forEach(item => {
                let isSlash = item.indexOf('/');
                if (isSlash > 0) {
                    let id = item.slice(0, isSlash);
                    this.allProd.push(id);
                }
                else {
                    this.allProd.push(item);
                }
            });
            console.log('CHECK', this.allProd);
        }
    }
    getSearchProduct() {
        if (this.inputValue.length < 3) {
            this.api.alertMessage('Введите не менее трех символов', '');
        }
        else {
            let arr1 = _services_cart_service__WEBPACK_IMPORTED_MODULE_4__.CartService.dishes;
            let valinp = this.inputValue.toLowerCase();
            let res = arr1.filter(item => item.title.toLowerCase().indexOf(valinp) !== -1);
            if (res.length) {
                this.searchArr = res;
            }
            else {
                this.api.alertMessage('Ничего не найдено', 'Измените параметры поиска');
            }
        }
    }
    clearSearch() {
        this.searchArr = [];
        this.searchText = '';
    }
    goProduct(id) {
        console.log('SCROLL');
        let titleELem = document.getElementById('prod_' + id);
        this.content.scrollToPoint(0, titleELem.offsetTop, 1000);
    }
    getCategory() {
        let dataorder = {
            "limit": 0
        };
        this.api.getApi("productCategories", dataorder).then((res) => {
            console.log('res', res);
            if (res.hasOwnProperty('data')) {
                this.catListParentTemp = res['data'];
                this.catListParentTemp = this.catListParentTemp.sort((a, b) => {
                    let nameA = a['order_position']; // ignore upper and lowercase
                    let nameB = b['order_position']; // ignore upper and lowercase
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });
                _services_cart_service__WEBPACK_IMPORTED_MODULE_4__.CartService.dishes = [];
                let test = [];
                this.catListParentTemp.forEach(valuecat => {
                    if (valuecat['products_count']) {
                        return this.api.getApi('products', { 'category_id': valuecat['id'], 'limit': 0 }).then((result) => {
                            if (result.hasOwnProperty('data')) {
                                valuecat['products'] = result['data'];
                                // console.log('TYPE',typeof(valuecat['products']));
                                // console.log('TYPEresult',typeof(result['data']));
                                // console.log('valuecat',valuecat['products'].length);
                                if (result['data'].length) {
                                    this.arrEl.push(valuecat['id']);
                                    result['data'].forEach((val) => {
                                        _services_cart_service__WEBPACK_IMPORTED_MODULE_4__.CartService.dishes.push(val);
                                        // dishestemp.push(val);
                                        if (val.modifierCategories.length) {
                                            test.push(val.id);
                                        }
                                    });
                                }
                            }
                        });
                    }
                });
                console.log('ЕУЫЕ', test);
            }
            else {
                this.api.alertMessage('Искренне сожалеем,', 'произошла ошибка. Попробуйте чуть позже.');
            }
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(this.catListParentTemp), 1000);
            });
        }).then((resp) => {
            console.log('resp', resp);
            this.catListParentTemp.map(item => {
                if (item['products_count']) {
                    this.catListParent.push(item);
                }
            });
            _services_cart_service__WEBPACK_IMPORTED_MODULE_4__.CartService.dishes = _services_cart_service__WEBPACK_IMPORTED_MODULE_4__.CartService.dishes.sort((a, b) => {
                let nameA = a['order_position']; // ignore upper and lowercase
                let nameB = b['order_position']; // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
            console.log('this.catListParent', this.catListParent);
            console.log('CARTSERV', _services_cart_service__WEBPACK_IMPORTED_MODULE_4__.CartService.dishes);
        });
    }
    functionToTriggerOnScroll() {
        console.log('functionToTriggerOnScroll');
        if (this.arrEl.length) {
            this.arrEl.forEach((value) => {
                if (this.isElementInViewport(document.getElementById(value))) {
                    this.activeMenu = value;
                }
            });
            // if (this.isElementInViewport(document.getElementById('ae138589-a6d5-431c-8b94-562fbb6c3921'))) {
            //     console.log('4454454');
            //   }
            //   if (this.isElementInViewport(document.getElementById('6f6d1e08-1abe-4cd7-91a9-8ce42795f97a'))) {
            //     console.log('4454454');
            //   }
        }
    }
    isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        // console.log(el);
        return (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight - 100 || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth));
    }
    checkVersion() {
        console.log('ZAPROS LOADIMG');
        this.storage.get('appSet').then((res) => {
            if (res) {
                this.androidVers = res['optVersion'];
                this.android_applink = res['android_app'];
                this.ios_applink = res['ios_app'];
                this.iosVers = res['optVersionios'];
                this.noimg = res['noimgProd'];
            }
        }).then(() => {
            // if (this.iosVers) {
            if (this.platform.is('ios')) {
                this.appVersion.getVersionNumber().then(value => {
                    if (value !== this.iosVers) {
                        this.wrongVersion(this.ios_applink);
                    }
                }).catch(err => {
                });
            }
            else {
                this.appVersion.getVersionNumber().then(value => {
                    if (value !== this.androidVers) {
                        this.wrongVersion(this.android_applink);
                    }
                }).catch(err => {
                    console.log(err);
                });
            }
            console.log(' this.noimg', this.noimg);
            // }
        });
    }
    loadContentPage() {
        return new Promise((resolve) => {
            this.api.getApi('slides', {}).then(result => {
                console.log(result);
                // resolve();
                if (result.hasOwnProperty('data')) {
                    this.slides = result['data'];
                    console.log(this.slides);
                    let newarr = this.slides.map(function (elem) {
                        console.log(elem['href']);
                        if (elem.hasOwnProperty('href') && elem['href']) {
                            console.log(typeof (elem['href']));
                            let str = elem['href'];
                            if (str.indexOf('promotion')) {
                                elem['href'] = str.replace("/promotion/", "");
                            }
                        }
                        return elem;
                    });
                    console.log(newarr);
                }
            });
        });
    }
    scrollToLabel(label) {
        if (label) {
            let titleELe = document.getElementById(label);
            this.content.scrollToPoint(0, titleELe.offsetTop, 1000);
        }
    }
    wrongVersion(link) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (link) {
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'ОБНОВИТЕ ПРИЛОЖЕНИЕ',
                    message: 'У Вас не актуальная версия<br><strong>Приложение будет работать не корректно!</strong><br>Обновите версию приложения на своем устройстве',
                    buttons: [
                        {
                            text: 'Обновить',
                            cssClass: 'link_reg',
                            handler: () => {
                                window.location.href = link;
                            }
                        }
                    ]
                });
                yield alert.present();
            }
            else {
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'ОБНОВИТЕ ПРИЛОЖЕНИЕ',
                    message: 'У Вас не актуальная версия<br><strong>Приложение будет работать не корректно!</strong><br>Обновите версию приложения на своем устройстве',
                    buttons: ['OK']
                });
                yield alert.present();
            }
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: _awesome_cordova_plugins_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__.AppVersion },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__.CartService },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_5__.EventsService }
];
HomePage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, { static: false },] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 7206:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".gridhome {\n  padding: 0;\n  height: 55px;\n  align-items: center;\n  background: var(--banner-categories-bg);\n  display: flex;\n  max-height: 55px;\n  margin-bottom: -1px;\n  width: 100%;\n}\n\n.searchbar .item-inner {\n  border: none;\n}\n\nion-item.searchbar::part(native) .item-inner {\n  border: none;\n}\n\n:host {\n  --inner-border-width: 0;\n}\n\nion-item.searchbar::part(native) {\n  border: none;\n}\n\n.item-interactive.ion-valid {\n  --highlight-background: --main-color!important;\n}\n\nion-list {\n  background: var(--banner-categories-bg) !important;\n}\n\n.bord_yel {\n  border-bottom: 3px solid var(--product-active-border);\n}\n\nion-card-subtitle {\n  text-transform: none;\n}\n\n.truncate-text-4 {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  text-transform: none;\n  min-height: 40px;\n}\n\n.gridhome ion-col {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\nion-slides {\n  background-color: var(--banner-categories-bg);\n  padding-top: 5px;\n  padding-bottom: 10px;\n  padding-left: 15px;\n}\n\n.slider_img img {\n  object-fit: cover;\n  border-radius: 10px;\n}\n\n.segment_wrapper {\n  margin-right: 10px;\n}\n\n.segment_wrapper, ion-segment-button {\n  height: 34px;\n  background: var(--category-bg);\n  border-radius: 10px;\n}\n\nion-segment {\n  padding-top: 11px;\n  height: 64px;\n}\n\nion-segment::-webkit-scrollbar {\n  width: 0 !important;\n}\n\nion-segment-button {\n  min-height: auto;\n  min-width: auto;\n  --padding-start: 15px;\n  --padding-end: 15px;\n  text-transform: none;\n  color: var(--category-text);\n}\n\n.segment-button-indicator {\n  opacity: 0;\n}\n\nion-segment-button ion-label {\n  margin: 0;\n}\n\nion-card {\n  box-shadow: none;\n  margin: 3px;\n  border-radius: 10px;\n  background-color: var(--product-bg);\n  color: var(--product-name-price);\n}\n\nion-card img {\n  height: 120px;\n  object-fit: cover;\n  width: 100%;\n}\n\nion-list ion-icon {\n  margin: 0 10px 0 0;\n}\n\nion-list ion-item span {\n  color: var(--main-color);\n}\n\nion-list ion-item::part(native) {\n  background-color: var(--banner-categories-bg);\n}\n\nion-card ion-item {\n  background-color: var(--product-bg);\n  color: var(--product-name-price);\n}\n\nion-card-header {\n  padding: 5px 10px 10px 10px;\n}\n\nion-card-subtitle {\n  color: var(--product-name-price);\n  font-size: 16px;\n}\n\nion-card-subtitle b {\n  font-weight: 600;\n}\n\nion-card-subtitle span {\n  font-weight: normal;\n  font-size: 14px;\n  color: var(--body-text);\n  white-space: nowrap;\n}\n\n.price-container {\n  width: 100%;\n}\n\nion-card-content {\n  padding: 0 10px 15px 10px;\n}\n\n.priceprod {\n  padding: 10px;\n  text-align: center;\n  border-radius: 6px;\n  width: 100%;\n  color: var(--category-text);\n  background-color: var(--category-bg);\n  margin: 0;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-segment-button::part(indicator-background) {\n  background: transparent;\n}\n\n.segment-button-checked {\n  color: var(--category-active-text);\n  background-color: var(--category-active-bg);\n  z-index: 10;\n}\n\nion-item.searchbar::part(native) {\n  background: var(--banner-categories-bg);\n  padding-bottom: 18px;\n  margin-bottom: -5px;\n}\n\nion-item.cat_name::part(native) {\n  background: transparent;\n  color: var(--product-box-name);\n  font-size: 18px;\n}\n\n.countprod sup {\n  background-color: var(--product-box-count-bg);\n  color: var(--product-box-cont-text);\n  border-radius: 10px;\n  padding: 5px 10px;\n  font-size: 13px;\n  top: -10px;\n  right: -3px;\n}\n\n.hideclass {\n  display: none;\n}\n\n.card_dop {\n  padding: 5px 10px;\n  max-height: 255px;\n}\n\n.upsell__items {\n  max-height: 225px;\n  overflow: auto;\n}\n\n.upsell__item {\n  flex-direction: column;\n  padding-right: 5px;\n  margin-bottom: 10px;\n}\n\n.upsell__item-img {\n  flex-shrink: 0;\n  margin-right: 0;\n  margin-bottom: 5px;\n  width: 65px;\n  height: 40px;\n}\n\n.upsell__item-img img {\n  border-radius: 7px;\n  -o-object-fit: cover;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.upsell__item-name {\n  font-size: 12px;\n  color: var(--product-name-price);\n  font-weight: 600;\n  margin-bottom: 7px;\n}\n\n.upsell__item-price {\n  font-size: 12px;\n  width: 50px;\n}\n\n.upsell-prod__head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.upsell-prod__head .icon-close {\n  position: relative;\n  top: 0;\n  right: 0;\n  width: 15px;\n  height: 15px;\n}\n\n.icon-close:before, .icon-close:after {\n  content: \"\";\n  transition: all 0.3s;\n  height: 2px;\n  width: 15px;\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  transform: translateX(-50%);\n  background: var(--icon-close);\n}\n\n.icon-close:before {\n  transform: rotate(45deg);\n}\n\n.icon-close:after {\n  transform: rotate(-45deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0FBRUY7O0FBQUE7RUFDRSxZQUFBO0FBR0Y7O0FBREE7RUFDRSx1QkFBQTtBQUlGOztBQUFBO0VBQ0UsWUFBQTtBQUdGOztBQURBO0VBQ0UsOENBQUE7QUFJRjs7QUFGQTtFQUNFLGtEQUFBO0FBS0Y7O0FBSEE7RUFDRSxxREFBQTtBQU1GOztBQUpBO0VBQ0Usb0JBQUE7QUFPRjs7QUFMQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQVFGOztBQU5BO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBU0Y7O0FBUEE7RUFDRSw2Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQVVGOztBQVJBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQVdGOztBQVRBO0VBQ0Usa0JBQUE7QUFZRjs7QUFWQTtFQUNFLFlBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBYUY7O0FBWEE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFjRjs7QUFaQTtFQUFpQyxtQkFBQTtBQWdCakM7O0FBZEE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtBQWlCRjs7QUFkQTtFQUNDLFVBQUE7QUFpQkQ7O0FBZEE7RUFDRSxTQUFBO0FBaUJGOztBQWZBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0FBa0JGOztBQWhCQTtFQUVFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFrQkY7O0FBaEJBO0VBQ0Usa0JBQUE7QUFtQkY7O0FBakJBO0VBQ0Usd0JBQUE7QUFvQkY7O0FBbEJBO0VBQ0UsNkNBQUE7QUFxQkY7O0FBbkJBO0VBQ0UsbUNBQUE7RUFDQSxnQ0FBQTtBQXNCRjs7QUFwQkE7RUFDRSwyQkFBQTtBQXVCRjs7QUFyQkE7RUFDRSxnQ0FBQTtFQUVBLGVBQUE7QUF1QkY7O0FBcEJBO0VBQ0UsZ0JBQUE7QUF1QkY7O0FBckJBO0VBQ0UsbUJBQUE7RUFFQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQXVCRjs7QUFyQkE7RUFDRSxXQUFBO0FBd0JGOztBQXRCQTtFQUNFLHlCQUFBO0FBeUJGOztBQXRCQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7RUFDQSxTQUFBO0FBeUJGOztBQXZCQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQTBCRjs7QUF2QkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUEwQkY7O0FBdkJBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUEwQkY7O0FBdkJBO0VBQ0UscUJBQUE7QUEwQkY7O0FBeEJBO0VBQ0UsdUJBQUE7QUEyQkY7O0FBekJBO0VBQ0Usa0NBQUE7RUFDQSwyQ0FBQTtFQUNBLFdBQUE7QUE0QkY7O0FBMUJBO0VBQ0UsdUNBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBNkJGOztBQTNCQTtFQUNFLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBOEJGOztBQTNCQTtFQUNFLDZDQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBOEJGOztBQTNCQTtFQUNFLGFBQUE7QUE4QkY7O0FBNUJBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQStCRjs7QUE1QkE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUErQkY7O0FBN0JBO0VBSUUsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBZ0NGOztBQTlCQTtFQUVFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWlDRjs7QUEvQkE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQWtDRjs7QUFoQ0E7RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBbUNGOztBQWpDQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBb0NGOztBQWxDQTtFQUdFLGFBQUE7RUFHQSw4QkFBQTtFQUdBLG1CQUFBO0VBQ0EsbUJBQUE7QUFxQ0Y7O0FBbkNBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBc0NGOztBQXBDQTtFQUNFLFdBQUE7RUFHQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUdBLDJCQUFBO0VBQ0EsNkJBQUE7QUF1Q0Y7O0FBckNBO0VBR0Usd0JBQUE7QUF3Q0Y7O0FBdENBO0VBR0UseUJBQUE7QUF5Q0YiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZGhvbWV7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogNTVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFubmVyLWNhdGVnb3JpZXMtYmcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtaGVpZ2h0OiA1NXB4O1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5zZWFyY2hiYXIgLml0ZW0taW5uZXJ7XG4gIGJvcmRlcjogbm9uZTtcbn1cbmlvbi1pdGVtLnNlYXJjaGJhcjo6cGFydChuYXRpdmUpIC5pdGVtLWlubmVye1xuICBib3JkZXI6IG5vbmU7XG59XG46aG9zdHtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG59XG5cblxuaW9uLWl0ZW0uc2VhcmNoYmFyOjpwYXJ0KG5hdGl2ZSkge1xuICBib3JkZXI6IG5vbmU7XG59XG4uaXRlbS1pbnRlcmFjdGl2ZS5pb24tdmFsaWQge1xuICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiAtLW1haW4tY29sb3IhaW1wb3J0YW50O1xufVxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYW5uZXItY2F0ZWdvcmllcy1iZykhaW1wb3J0YW50O1xufVxuLmJvcmRfeWVse1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tcHJvZHVjdC1hY3RpdmUtYm9yZGVyKTtcbn1cbmlvbi1jYXJkLXN1YnRpdGxle1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbi50cnVuY2F0ZS10ZXh0LTQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbWluLWhlaWdodDogNDBweDtcbn1cbi5ncmlkaG9tZSBpb24tY29se1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5pb24tc2xpZGVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFubmVyLWNhdGVnb3JpZXMtYmcpO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLnNsaWRlcl9pbWcgaW1ne1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5zZWdtZW50X3dyYXBwZXJ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5zZWdtZW50X3dyYXBwZXIsaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgaGVpZ2h0OiAzNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXRlZ29yeS1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5pb24tc2VnbWVudHtcbiAgcGFkZGluZy10b3A6IDExcHg7XG4gIGhlaWdodDogNjRweDtcbn1cbmlvbi1zZWdtZW50Ojotd2Via2l0LXNjcm9sbGJhciB7IHdpZHRoOiAwICFpbXBvcnRhbnQgfVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICBtaW4taGVpZ2h0OiBhdXRvO1xuICBtaW4td2lkdGg6IGF1dG87XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgLS1wYWRkaW5nLWVuZDogMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS10ZXh0KTtcbiAgLy9vdmVyZmxvdzogaGlkZGVuO1xufVxuLnNlZ21lbnQtYnV0dG9uLWluZGljYXRvciB7XG4gb3BhY2l0eTogMDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIGlvbi1sYWJlbHtcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWNhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW46IDNweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvZHVjdC1iZyk7XG4gIGNvbG9yOiB2YXIoLS1wcm9kdWN0LW5hbWUtcHJpY2UpO1xufVxuaW9uLWNhcmQgaW1ne1xuICAvL2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDhkYWRkO1xuICBoZWlnaHQ6IDEyMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tbGlzdCBpb24taWNvbntcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gc3BhbntcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW06OnBhcnQobmF0aXZlKXtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFubmVyLWNhdGVnb3JpZXMtYmcpO1xufVxuaW9uLWNhcmQgaW9uLWl0ZW17XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2R1Y3QtYmcpO1xuICBjb2xvcjogdmFyKC0tcHJvZHVjdC1uYW1lLXByaWNlKTtcbn1cbmlvbi1jYXJkLWhlYWRlcntcbiAgcGFkZGluZzogNXB4IDEwcHggMTBweCAxMHB4O1xufVxuaW9uLWNhcmQtc3VidGl0bGV7XG4gIGNvbG9yOiB2YXIoLS1wcm9kdWN0LW5hbWUtcHJpY2UpO1xuICAvL2ZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIGJ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5pb24tY2FyZC1zdWJ0aXRsZSBzcGFue1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWJvZHktdGV4dCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ucHJpY2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY2FyZC1jb250ZW50e1xuICBwYWRkaW5nOiAwIDEwcHggMTVweCAxMHB4O1xufVxuXG4ucHJpY2Vwcm9ke1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB2YXIoLS1jYXRlZ29yeS10ZXh0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2F0ZWdvcnktYmcpO1xuICBtYXJnaW46IDA7XG59XG4jY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmlvbi1zZWdtZW50LWJ1dHRvbjo6cGFydChpbmRpY2F0b3ItYmFja2dyb3VuZCkge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5zZWdtZW50LWJ1dHRvbi1jaGVja2Vke1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktYWN0aXZlLXRleHQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXRlZ29yeS1hY3RpdmUtYmcpO1xuICB6LWluZGV4OiAxMDtcbn1cbmlvbi1pdGVtLnNlYXJjaGJhcjo6cGFydChuYXRpdmUpIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFubmVyLWNhdGVnb3JpZXMtYmcpO1xuICBwYWRkaW5nLWJvdHRvbTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcbn1cbmlvbi1pdGVtLmNhdF9uYW1lOjpwYXJ0KG5hdGl2ZSkge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLXByb2R1Y3QtYm94LW5hbWUpO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jb3VudHByb2Qgc3VwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvZHVjdC1ib3gtY291bnQtYmcpO1xuICBjb2xvcjogdmFyKC0tcHJvZHVjdC1ib3gtY29udC10ZXh0KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdG9wOiAtMTBweDtcbiAgcmlnaHQ6IC0zcHg7XG59XG5cbi5oaWRlY2xhc3N7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY2FyZF9kb3Age1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgbWF4LWhlaWdodDogMjU1cHg7XG5cbn1cbi51cHNlbGxfX2l0ZW1zIHtcbiAgbWF4LWhlaWdodDogMjI1cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLnVwc2VsbF9faXRlbSB7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnVwc2VsbF9faXRlbS1pbWcge1xuICAtbXMtZmxleC1uZWdhdGl2ZTogMDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLnVwc2VsbF9faXRlbS1pbWcgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4udXBzZWxsX19pdGVtLW5hbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1wcm9kdWN0LW5hbWUtcHJpY2UpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG4udXBzZWxsX19pdGVtLXByaWNlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogNTBweDtcbn1cbi51cHNlbGwtcHJvZF9faGVhZCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnVwc2VsbC1wcm9kX19oZWFkIC5pY29uLWNsb3NlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuLmljb24tY2xvc2U6YmVmb3JlLCAuaWNvbi1jbG9zZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiAxNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pY29uLWNsb3NlKTtcbn1cbi5pY29uLWNsb3NlOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4uaWNvbi1jbG9zZTphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4iXX0= */";

/***/ }),

/***/ 1670:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<app-header [isMenu]=\"true\"></app-header>\n\n<ion-grid [fixed]=\"true\" class=\"gridhome\">\n  <ion-row style=\"width: 100%;height: 55px;\">\n    <ion-col size=\"12\" style=\"height: 55px;\">\n      <ion-segment [scrollable]=\"true\" [(ngModel)]=\"activeMenu\">\n        <div *ngFor=\"let cat of catListParent\" class=\"segment_wrapper\">\n          <ion-segment-button *ngIf=\"cat['products']\" value={{cat.id}} (click)=\"scrollToLabel(cat.id)\" [ngClass]=\"{'segment-button-checked': cat.id == catListParent[0].id}\" >\n            <ion-label class=\"norm_text\">{{cat.title}}</ion-label>\n          </ion-segment-button>\n        </div>\n      </ion-segment>\n\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"functionToTriggerOnScroll()\">\n  <ion-slides pager=\"false\" *ngIf=\"slides.length\" [options]=\"slideOptions\">\n    <!--<ion-slide tappable *ngFor=\"let slide of slides\" (click)=\"scrollToLabel('')\">-->\n    <ion-slide tappable *ngFor=\"let slide of slides\">\n      <div *ngIf=\"slide['image']\">\n        <!--<a href=\"{{slide['href']}}\"  class=\"slider_img\" *ngIf=\"slide['href']\">-->\n        <!--<img src=\"{{slide['image']}}\" />-->\n        <!--</a>-->\n        <a *ngIf=\"slide['href']\" routerLink=\"/promo\" [queryParams]=\"{id:slide['href']}\" class=\"slider_img\">\n          <!--<a *ngIf=\"!slide['href'].includes('promotion')\" class=\"slider_img\">-->\n          <img src=\"{{slide['image']}}\" />\n        </a>\n        <a *ngIf=\"!slide['href']\" class=\"slider_img\">\n          <!--<a *ngIf=\"!slide['href'].includes('promotion')\" class=\"slider_img\">-->\n          <img src=\"{{slide['image']}}\" />\n        </a>\n      </div>\n    </ion-slide>\n  </ion-slides>\n  <ion-item class=\"searchbar\" lines=\"none\">\n    <ion-input placeholder=\"Введите название товара\" type=\"text\" [(ngModel)]=\"inputValue\" id=\"searchfield\" ></ion-input><ion-icon color=\"mainapp\" name=\"search\" slot=\"end\" (click)=\"getSearchProduct()\"></ion-icon>\n  </ion-item>\n  <ion-list *ngIf=\"searchArr.length\">\n    <ion-item lines=\"none\" (click)=\"clearSearch()\">\n      <ion-icon color=\"mainapp\" slot=\"start\" name=\"sync\"></ion-icon><span >Очистить</span>\n    </ion-item>\n    <ion-item lines=\"none\" *ngFor=\"let itemsearch of searchArr\" (click)=\"goProduct(itemsearch['id'])\" >\n      <ion-text color=\"mainapp\">\n        {{itemsearch.title}}\n      </ion-text>\n    </ion-item>\n  </ion-list>\n  <div>\n    <ion-grid *ngIf=\"!catListParent.length\">\n      <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let i of skeletonArr;\">\n          <ion-card >\n            <ion-thumbnail>\n              <ion-skeleton-text></ion-skeleton-text>\n            </ion-thumbnail>\n            <ion-card-header>\n              <ion-skeleton-text class=\"skeleton-box\" animated></ion-skeleton-text>\n            </ion-card-header>\n\n            <!--<ion-skeleton-text class=\"ion-margin\" animated [ngStyle]=\"{width: '80%'}\"></ion-skeleton-text>-->\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div *ngIf=\"catListParent.length\">\n      <ion-grid *ngFor=\"let category of catListParent;\">\n        <ion-row *ngIf=\"category.products\" id='{{category.id}}'>\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\" class=\"cat_name\">\n              <ion-text class=\"countprod\">{{category.title }} <sup>{{category.products_count}}</sup></ion-text>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"category.products\">\n          <ion-col size=\"6\" *ngFor=\"let item of category.products;\" id=\"prod_{{item.id}}\">\n            <!--<ion-card  [ngClass]=\"{'bord_yel': allProd.includes(item['id'].toString())}\">-->\n            <ion-card  [ngClass]=\"{'bord_yel': check(item['id'].toString())}\">\n              <div [ngClass]=\"{'hideclass': selectedIndex == item['id']&&item['recommendations_id'].length>0}\">\n                <div class=\"card_header\" [routerLink]=\"['/product/'+item['id']]\" [queryParams]=\"{title: item.title}\">\n                  <img *ngIf=\"item['image']\" src=\"{{item['image']}}\" (error)=\"img.src = noimg\" #img>\n                  <img *ngIf=\"!item['image']\" src=\"{{noimg}}\">\n                  <!--<img *ngIf=\"item['image']\" src=\"{{noimg}}\">-->\n                  <ion-card-header>\n                    <!--<ion-card-subtitle><b>{{ (item['title'].length>6) ? (item['title'] | slice:0:6)+'..':(item['title']) }}</b><br><span class=\"weightprod\">{{item['weight']}} г</span></ion-card-subtitle>-->\n                    <ion-card-subtitle><b class=\"truncate-text-4\">{{item['title']}}</b><span class=\"weightprod\" *ngIf=\"item['weight'] && item['weight']!=='0'\">{{item['weight']}} г</span></ion-card-subtitle>\n                  </ion-card-header>\n                  <!--<ion-item lines=\"none\" *ngIf=\"modalDataResponse\">-->\n                  <!--<p>{{modalDataResponse}}</p>-->\n                  <!--</ion-item>-->\n                </div>\n                <ion-card-content class=\"price-container\">\n                  <app-counter  *ngIf=\"item['count']!==0 && !item['modifierCategories'].length\" [id]=\"item['id']\" [count]=\"1\" [btn]=\"true\" [price]=\"item['price']\" (btnClick)=\"eventCaught(item['id'], true)\"></app-counter>\n                  <app-counter *ngIf=\"item['count']!==0 && item['modifierCategories'].length\" [id]=\"item['id']\" [count]=\"1\" [btn]=\"true\" [link]=\"true\" [price]=\"item['price']\" [routerLink]=\"['/product/'+item['id']]\" [queryParams]=\"{title: item.title}\"></app-counter>\n                </ion-card-content>\n              </div>\n              <div class=\"card_dop\" *ngIf=\"item['recommendations_id'].length\" [ngClass]=\"{'hideclass' : selectedIndex !== item['id']}\">\n                <div class=\"upsell-prod__head\">\n                  <span>Рекомендуем</span>\n                  <div class=\"icon-close\" (click)=\"eventCaught('-1')\"></div>\n                </div>\n                <div class=\"upsell__items\">\n                  <div class=\"upsell__item\" *ngFor=\"let recommendations of item['recommendations_id']\">\n                    <div class=\"upsell__item-img\">\n                      <img *ngIf=\"recommendations['image']\" src=\"{{recommendations['image']}}\" (error)=\"img.src = noimg\" #img>\n                      <img *ngIf=\"!recommendations['image']\" src=\"{{noimg}}\">\n                      <!--<img src=\"https://mewbas.com/vlada/eatobox/img/product-1.jpg\" alt=\"\">-->\n                    </div>\n                    <div class=\"upsell__item-info\">\n                      <div class=\"upsell__item-name\">\n                        {{recommendations.title}} <span *ngIf=\"recommendations.weight && recommendations['weight']!=='0'\"> {{recommendations.weight}} г</span>\n                      </div>\n                      <div class=\"upsell__item-price\">\n                        <app-counter [id]=\"recommendations['value']\" [count]=\"1\" [btn]=\"true\" [price]=\"recommendations['price']\"></app-counter>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</ion-content>\n<app-footer></app-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map