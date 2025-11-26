(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5485);



const routes = [
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_auth_auth_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 1674)).then(m => m.AuthPageModule)
    },
    {
        path: 'cart',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_cart_cart_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cart/cart.module */ 2943)).then(m => m.CartPageModule)
    },
    {
        path: 'checkout',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_checkout_checkout_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./checkout/checkout.module */ 8400)).then(m => m.CheckoutPageModule)
    },
    {
        path: 'product/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_product_product_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./product/product.module */ 1589)).then(m => m.ProductPageModule)
    },
    {
        path: 'pages/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_pages_pages_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 4756)).then(m => m.PagesPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 4523)).then(m => m.ProfilePageModule)
    },
    {
        path: 'editprofile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_editprofile_editprofile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./editprofile/editprofile.module */ 9285)).then(m => m.EditprofilePageModule)
    },
    {
        path: 'editadres',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_editadres_editadres_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./editadres/editadres.module */ 5816)).then(m => m.EditadresPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 2009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/splash-screen/ngx */ 6834);
/* harmony import */ var _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/status-bar/ngx */ 5739);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/api.service */ 5830);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/cart.service */ 910);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/config.service */ 946);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage-angular */ 2879);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/events.service */ 106);
/* harmony import */ var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! onesignal-cordova-plugin */ 8369);
/* harmony import */ var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_8__);













let AppComponent = class AppComponent {
    constructor(platform, alertController, navCtrl, menu, splashScreen, statusBar, loadingController, api, cart, config, event, storage) {
        this.platform = platform;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.loadingController = loadingController;
        this.api = api;
        this.cart = cart;
        this.config = config;
        this.event = event;
        this.storage = storage;
        this.authorized = false;
        this.pagesArr = [];
        this.menuPhone = '';
        this.userid = '';
        this.social_vk = '';
        this.social_inst = '';
        this.menu.swipeGesture(false);
        this.storage.get('user').then((res) => {
            if (res && res.hasOwnProperty('id')) {
                this.authorized = true;
                this.userid = res['id'];
            }
        });
        this.event.getLoginId().subscribe((data) => {
            this.authorized = data;
            if (data === 0) {
                this.authorized = false;
            }
            else {
                this.authorized = true;
            }
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.initializeApp();
            this.getPages();
            this.storage.get('appSet').then(resp => {
                // console.log('nameGET', resp);
                if (resp.hasOwnProperty('phonesite')) {
                    this.menuPhone = resp['phonesite'];
                }
                if (resp.hasOwnProperty('social_vk')) {
                    this.social_vk = resp['social_vk'];
                }
                if (resp.hasOwnProperty('social_inst')) {
                    this.social_inst = resp['social_inst'];
                    // this.menuPhoneDisplay = ApiService.createPhoneNumber(this.menuPhone)
                }
            });
        });
    }
    initializeApp() {
        this.platform.ready().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.splashScreen.hide();
            this.statusBar.styleLightContent();
            this.OneSignalInit();
        }));
    }
    getPages() {
        return new Promise((resolve) => {
            this.api.getApi('infoPages', {}).then(result => {
                if (result.hasOwnProperty('data')) {
                    console.log(result['data']);
                    let ids = ["main", "checkout"];
                    let idsMap = ids.reduce(function (map, article) {
                        map[article] = true;
                        return map;
                    }, {});
                    this.pagesArr = result['data'].filter(function (el) {
                        return !idsMap[el.article];
                    });
                }
                else {
                    this.pagesArr = [];
                }
            });
        });
    }
    OneSignalInit(stor = this.storage, api = this.api) {
        // Uncomment to set OneSignal device logging to VERBOSE
        // OneSignal.setLogLevel(6, 0);
        // NOTE: Update the setAppId value below with your OneSignal AppId.
        onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_8___default().setAppId("7bccee8e-2fc5-4ea3-9ec5-32575f7fb300");
        onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_8___default().setNotificationOpenedHandler(function (jsonData) {
            let msg = jsonData.notification.body ? '<p>' + jsonData.notification.body + '</p>' : '';
            let title = jsonData.notification.title;
            // let additionalData = jsonData.payload.additionalData;
            console.log('title=', title);
            console.log('msg=', msg);
            let img = jsonData.notification.rawPayload['bicon'] ? '<div class="img_alert"><img src="' + jsonData.notification.rawPayload['bicon'] + '"></div>' : '';
            api.alertMessage(title, msg + img);
            console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        });
        // iOS - Prompts the user for notification permissions.
        //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 6) to better communicate to your users what notifications they will get.
        onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_8___default().promptForPushNotificationsWithUserResponse(function (accepted) {
            console.log("User accepted notifications: " + accepted);
        });
    }
    doLogout() {
        this.cart.doLogout();
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.MenuController },
    { type: _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen },
    { type: _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_5__.CartService },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_6__.ConfigService },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_7__.EventsService },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__.Storage }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 8394);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8336);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/splash-screen/ngx */ 6834);
/* harmony import */ var _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/status-bar/ngx */ 5739);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage-angular */ 505);
/* harmony import */ var _awesome_cordova_plugins_app_version_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/app-version/ngx */ 8285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ 2710);














// import {RemoveCommaPipe} from "./pipes/removecomma.pipe";
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__.IonicSelectableModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__.IonicStorageModule.forRoot(),
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot({
                swipeBackEnabled: true
            })
        ],
        providers: [
            _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar,
            _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen,
            _awesome_cordova_plugins_app_version_ngx__WEBPACK_IMPORTED_MODULE_4__.AppVersion,
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 5830:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8336);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage-angular */ 2879);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 5472);





let ApiService = class ApiService {
    constructor(http, storage, alertController) {
        this.http = http;
        this.storage = storage;
        this.alertController = alertController;
        this.apiuser = 'ck_d6513f01a79bdc7208fbfe5842a38cfc91225ad1';
        this.apisecret = 'cs_3652f29603f0c6dc2677dc1f8114a3f4c0476f74';
        // public urlApi = 'https://demo.eatobox-api.ru';
        this.urlApi = 'https://sushihouse.eatobox-api.ru';
        this.urlSmsru = 'https://sms.ru/sms/send?api_id=';
        this.spinner = false;
        this.storage.create();
        this.storage.get('apiuser').then(response => {
            this.apiuser = response;
            if (!response) {
                this.apiuser = 'ck_d6513f01a79bdc7208fbfe5842a38cfc91225ad1';
            }
        });
        this.storage.get('apisecret').then(response => {
            this.apisecret = response;
            if (!response) {
                this.apisecret = 'cs_3652f29603f0c6dc2677dc1f8114a3f4c0476f74';
            }
            console.log('this.apisecret', this.apisecret);
        });
    }
    static phonenum(num) {
        return num.replace(/[^\d]/g, '');
        ;
    }
    static formatPhoneNumber(phoneNumberString) {
        var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
        var match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
        if (match) {
            return '+' + match[1] + ' ' + match[2] + ' ' + match[3] + '-' + match[4] + '-' + match[5];
        }
        return null;
    }
    static createPhoneNumber(numbers) {
        return numbers.replace(/(.)(...)(...)(..)(..)/, '+$1 ($2) $3-$4-$5');
    }
    static formatDateString(datestring) {
        // let df='2011-04-11T10:20:30';
        // let df1='YYYY-MM-DDTHH:MM:SS';
        // let df2='DD.MM.YYYY, HH:MM';
        var cleaned = ('' + datestring).replace(/\D/g, '');
        // console.log('cleaned',cleaned);
        var match = cleaned.match(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/);
        if (match) {
            return match[3] + '.' + match[2] + '.' + match[1] + ', ' + match[4] + ':' + match[5];
        }
        return null;
    }
    static kitcut(text, limit) {
        text = text.trim();
        if (text.length <= limit)
            return text;
        text = text.slice(0, limit); // тупо отрезать по лимиту
        let lastSpace = text.lastIndexOf(" ");
        if (lastSpace > 0) { // нашлась граница слов, ещё укорачиваем
            text = text.substr(0, lastSpace);
        }
        return text + "...";
    }
    alertMessage(header, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'alert-class',
                header,
                message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    sendKodApi(phonenumber, type = 'flashcall') {
        const headers = { 'content-type': 'application/json' };
        let params = {
            "application": 'clients',
            "command": "send-validation-code",
            "data": { 'phone': phonenumber, 'type': type },
        };
        let param = JSON.stringify(params, null, ' ');
        return new Promise((resolve) => {
            // let data = {data:"OK"};
            // setTimeout(() => resolve(data), 1000);
            this.http.put(this.urlApi, param, { 'headers': headers })
                .subscribe((resp) => {
                resolve(resp);
                if (resp.hasOwnProperty('status')) {
                    if (resp['status'] !== 200) {
                        this.alertMessage('Искренне сожалеем,', 'произошла ошибка. Попробуйте чуть позже.');
                    }
                }
                else {
                    this.alertMessage('Искренне сожалеем,', 'произошла ошибка. Попробуйте чуть позже.');
                }
            }, (error) => {
                resolve(error);
            });
        });
        // return new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //     const resp = {
        //       'codefromapi' : 1111,
        //       'statussms' : 'OK'
        //     };
        //     resolve(resp);
        //   }, 1000);
        // });
    }
    getApi(application, data, limit = 0) {
        const headers = { 'content-type': 'application/json' };
        let params = {
            "application": application,
            "command": "get",
            "data": data,
        };
        let param = JSON.stringify(params, null, ' ');
        return new Promise((resolve) => {
            // let data = {data:"OK"};
            // setTimeout(() => resolve(data), 1000);
            this.http.put(this.urlApi, param, { 'headers': headers })
                .subscribe((resp) => {
                resolve(resp);
                if (resp.hasOwnProperty('status')) {
                    if (resp['status'] !== 200) {
                        this.alertMessage('Искренне сожалеем,', 'произошла ошибка. Попробуйте чуть позже.');
                    }
                }
                else {
                    this.alertMessage('Искренне сожалеем,', 'произошла ошибка. Попробуйте чуть позже.');
                }
            }, (error) => {
                resolve(error);
            });
        });
    }
    addApi(application, data, limit = 0) {
        const headers = { 'content-type': 'application/json' };
        let params = {
            "application": application,
            "command": "add",
            "data": data,
        };
        let param = JSON.stringify(params, null, ' ');
        return new Promise((resolve) => {
            this.http.put(this.urlApi, param, { 'headers': headers })
                .subscribe((resp) => {
                resolve(resp);
                if (resp.hasOwnProperty('status')) {
                    if (resp['status'] !== 200) {
                        this.alertMessage('Искренне сожалеем,', 'произошла ошибка. Попробуйте чуть позже.');
                    }
                }
                else {
                    this.alertMessage('Искренне сожалеем,', 'произошла ошибка. Попробуйте чуть позже.');
                }
            }, (error) => {
                resolve(error);
            });
        });
    }
    calculateApi(application, data, limit = 0) {
        const headers = { 'content-type': 'application/json' };
        let params = {
            "application": application,
            "command": "calculate",
            "data": data,
        };
        let param = JSON.stringify(params, null, ' ');
        return new Promise((resolve) => {
            this.http.put(this.urlApi, param, { 'headers': headers })
                .subscribe((resp) => {
                resolve(resp);
                if (resp.hasOwnProperty('status')) {
                    if (resp['status'] !== 200) {
                        this.alertMessage('Искренне сожалеем,', 'произошла ошибка. Попробуйте чуть позже.');
                    }
                }
                else {
                    this.alertMessage('Искренне сожалеем,', 'произошла ошибка. Попробуйте чуть позже.');
                }
            }, (error) => {
                resolve(error);
            });
        });
    }
    getBonus(application, data, limit = 0) {
        const headers = { 'content-type': 'application/json' };
        let params = {
            "application": application,
            "command": "bonuses-get",
            "data": data,
        };
        let param = JSON.stringify(params, null, ' ');
        return new Promise((resolve) => {
            // let data = {data:"OK"};
            // setTimeout(() => resolve(data), 1000);
            this.http.put(this.urlApi, param, { 'headers': headers })
                .subscribe((resp) => {
                resolve(resp);
                if (resp.hasOwnProperty('status')) {
                    if (resp['status'] !== 200) {
                        this.alertMessage('Искренне сожалеем,', 'произошла ошибка. Попробуйте чуть позже.');
                    }
                }
                else {
                    this.alertMessage('Искренне сожалеем,', 'произошла ошибка. Попробуйте чуть позже.');
                }
            }, (error) => {
                resolve(error);
            });
        });
    }
    updateApi(application, data) {
        const headers = { 'content-type': 'application/json' };
        let params = {
            "application": application,
            "command": "update",
            "data": data,
        };
        let param = JSON.stringify(params, null, ' ');
        return new Promise((resolve) => {
            this.http.put(this.urlApi, param, { 'headers': headers })
                .subscribe((resp) => {
                resolve(resp);
                if (resp.hasOwnProperty('status')) {
                    if (resp['status'] !== 200) {
                        this.alertMessage('Искренне сожалеем,', 'произошла ошибка. Попробуйте чуть позже.');
                    }
                }
                else {
                    this.alertMessage('Искренне сожалеем,', 'произошла ошибка. Попробуйте чуть позже.');
                }
            }, (error) => {
                resolve(error);
            });
        });
    }
    removeUserApi(application, data) {
        const headers = { 'content-type': 'application/json' };
        let params = {
            "application": application,
            "command": "remove",
            "data": data,
        };
        let param = JSON.stringify(params, null, ' ');
        return new Promise((resolve) => {
            this.http.put(this.urlApi, param, { 'headers': headers })
                .subscribe((resp) => {
                resolve(resp);
                if (resp.hasOwnProperty('status')) {
                    if (resp['status'] !== 200) {
                        this.alertMessage('Искренне сожалеем,', 'профиль не удалился. Попробуйте чуть позже.');
                    }
                }
                else {
                    this.alertMessage('Искренне сожалеем,', 'профиль не удалился. Попробуйте чуть позже.');
                }
            }, (error) => {
                resolve(error);
            });
        });
    }
    logout() {
        return this.storage.remove('userphone').then(() => {
            // this.sid = null;
        });
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController }
];
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ 910:
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartService": () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 5830);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ 2879);
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.service */ 106);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.service */ 946);
var CartService_1;







let CartService = CartService_1 = class CartService {
    constructor(events, api, config, storage, loadingController, navCtrl, alertController) {
        this.events = events;
        this.api = api;
        this.config = config;
        this.storage = storage;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.minCart = 0;
        this.sum = 0;
        this.is_iiko = false;
        this.cities = [];
        this.giftsArr = [];
        this.giftsArrDish = [];
        this.giftsSum = 0;
        this.tmpSumGift = 0;
        this.cartbtnTxt = '~60 мин';
        this.moStart = '';
        this.moEnd = '';
        this.tuStart = '';
        this.tuEnd = '';
        this.weStart = '';
        this.weEnd = '';
        this.thStart = '';
        this.thEnd = '';
        this.frStart = '';
        this.frEnd = '';
        this.stStart = '';
        this.stEnd = '';
        this.suStart = '';
        this.suEnd = '';
        this.nameTabPerson = 'Данные';
        this.addedItems = {};
        this.is_iiko = this.config.is_iiko;
        this.getGifts();
        this.getStreets();
    }
    static getDishById(dishId) {
        // for (var i = 0; i < CartService.dishes.length; i++) {
        //   console.log(CartService.dishes[i].id);
        // }
        const dish = CartService_1.dishes.filter(dishItem => dishItem.id == dishId);
        console.log('dish', dish);
        console.log('dishes', this.dishes);
        if (dish.length) {
            return dish[0];
        }
        else {
            return undefined;
        }
    }
    static getDishesByParent(parentId) {
        return CartService_1.dishes.filter(dish => dish.parent == parentId);
    }
    doLogout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                subHeader: 'Вы действительно хотите выйти из аккаунта?',
                buttons: ['Нет', {
                        text: 'Да',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                            const loading = yield this.loadingController.create({
                                message: 'Выход из аккаунта...',
                                spinner: 'crescent'
                            });
                            yield loading.present();
                            this.api.logout().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                                // this.events.publishSomeData({login : false});
                                // this.authorized = false;
                                this.events.publishLoginId(0);
                                // this.events.publishLoginEv(false);
                                this.clearCart();
                                this.storage.remove('user');
                                this.storage.remove('username');
                                this.storage.remove('userid');
                                yield loading.dismiss();
                                this.navCtrl.navigateRoot('/');
                                // setTimeout(() => this.navCtrl.navigateRoot('/'), 100);
                            }));
                        })
                    }]
            });
            yield alert.present();
        });
    }
    getGifts() {
        this.api.getApi('gifts', {}).then((res) => {
            if (res.hasOwnProperty('data') && res['data'].length) {
                this.giftsArr = res['data'].sort((a, b) => {
                    let nameA = parseInt(a['basket_price']); // ignore upper and lowercase
                    let nameB = parseInt(b['basket_price']); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });
            }
        });
    }
    getStreets() {
        return new Promise((resolve) => {
            this.api.getApi('cities', { 'is_not_empty': true }).then(result => {
                // console.log('cities', result);
                if (result.hasOwnProperty('data')) {
                    this.cities = result['data'];
                    // console.log('citiesaaa', this.cities[0]['id']);
                    // console.log('SRTART STREET3',this.config.defaultSettings['is_iiko']);
                    if (this.config.defaultSettings['is_iiko']) {
                        this.cities.forEach((item) => {
                            this.api.getApi('iiko_streets', { 'city_id': item['id'], 'limit': 0 }).then(result => {
                                // console.log('streets', result);
                                if (result.hasOwnProperty('data')) {
                                    item['street'] = result['data'];
                                }
                                else {
                                    item['street'] = [];
                                }
                            });
                        });
                        console.log('pointsNEW', this.cities);
                    }
                }
                else {
                    this.cities = [];
                }
            });
        });
    }
    clearCart() {
        this.addedItems = {};
        this.events.publishSomeData({ countchange: false });
        this.events.publishcartClear(true);
        // CartService.dishes = [];
        // this.dishes = [];
        this.sum = 0;
        // this.storage.remove('store_type');
    }
    workTime() {
        console.log("11111", this.config.defaultSettings);
        if (this.config.defaultSettings && this.config.defaultSettings.hasOwnProperty('monday_from')) {
            this.moStart = this.config.defaultSettings['monday_from'];
        }
        if (this.config.defaultSettings && this.config.defaultSettings.hasOwnProperty('monday_to')) {
            this.moEnd = this.config.defaultSettings['monday_to'];
        }
        if (this.config.defaultSettings && this.config.defaultSettings.hasOwnProperty('tuesday_from')) {
            console.log('SERVICE TU');
            this.tuStart = this.config.defaultSettings['tuesday_from'];
        }
        if (this.config.defaultSettings && this.config.defaultSettings.hasOwnProperty('tuesday_to')) {
            this.tuEnd = this.config.defaultSettings['tuesday_to'];
        }
        if (this.config.defaultSettings && this.config.defaultSettings.hasOwnProperty('wednesday_from')) {
            this.weStart = this.config.defaultSettings['wednesday_from'];
        }
        if (this.config.defaultSettings && this.config.defaultSettings.hasOwnProperty('wednesday_to')) {
            this.weEnd = this.config.defaultSettings['wednesday_to'];
        }
        if (this.config.defaultSettings && this.config.defaultSettings.hasOwnProperty('thursday_from')) {
            this.thStart = this.config.defaultSettings['thursday_from'];
        }
        if (this.config.defaultSettings && this.config.defaultSettings.hasOwnProperty('thursday_to')) {
            this.thEnd = this.config.defaultSettings['thursday_to'];
        }
        if (this.config.defaultSettings && this.config.defaultSettings.hasOwnProperty('friday_from')) {
            this.frStart = this.config.defaultSettings['friday_from'];
        }
        if (this.config.defaultSettings && this.config.defaultSettings.hasOwnProperty('friday_to')) {
            this.frEnd = this.config.defaultSettings['friday_to'];
        }
        if (this.config.defaultSettings && this.config.defaultSettings.hasOwnProperty('saturday_from')) {
            this.stStart = this.config.defaultSettings['saturday_from'];
        }
        if (this.config.defaultSettings && this.config.defaultSettings.hasOwnProperty('saturday_to')) {
            this.stEnd = this.config.defaultSettings['saturday_to'];
        }
        if (this.config.defaultSettings && this.config.defaultSettings.hasOwnProperty('sunday_from')) {
            this.suStart = this.config.defaultSettings['sunday_from'];
        }
        if (this.config.defaultSettings && this.config.defaultSettings.hasOwnProperty('sunday_to')) {
            this.suEnd = this.config.defaultSettings['sunday_to'];
        }
        // this.minCart=result['acf']['opt_min_cart'];
        // this.cartbtnTxt = result['acf']['opt_cartbtn_txt'];
    }
    getItemQuantity(dishId) {
        const item = this.addedItems[dishId];
        if (item) {
            return item.quantity;
        }
        else {
            return;
        }
    }
    getAddedDishes() {
        return this.addedItems;
    }
    sortDishes(obj, field = 'order_position') {
        return obj.sort((a, b) => {
            let nameA = a[field]; // ignore upper and lowercase
            let nameB = b[field]; // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
    }
    getDishesSum() {
        let tmpSum = 0;
        for (const dishId in this.addedItems) {
            if (this.addedItems.hasOwnProperty(dishId)) {
                console.log('dishId', dishId);
                // tmpSum += CartService.getDishById(dishId)['price'] * this.addedItems[dishId]['quantity'];
                tmpSum += this.addedItems[dishId]['price'] * this.addedItems[dishId]['quantity'];
            }
        }
        if (tmpSum == 0) {
            this.storage.remove('store_type');
        }
        if (this.giftsArr.length) {
            this.giftsSum = parseInt(this.giftsArr[0]['basket_price']);
            if (tmpSum < parseInt(this.giftsArr[0]['basket_price'])) {
                console.log('LITLE');
                this.giftsArrDish = [];
                this.giftsArrDish.length = 0;
                this.events.publishChangeCnt(true);
                // return;
            }
            this.giftsArr.forEach((item, index) => {
                console.log('basket_price', parseInt(item['basket_price']));
                if (tmpSum >= parseInt(item['basket_price'])) {
                    if (index + 1 <= this.giftsArr.length - 1) {
                        // console.log('555', this.giftsArr[index+1]['basket_price']);
                        this.giftsSum = parseInt(this.giftsArr[index + 1]['basket_price']);
                    }
                    // console.log('item22', item);
                    this.giftsArrDish = item['gifts_id'];
                    // this.giftsArrDish.forEach( item => {
                    // this.addedItems[item['value']+'_gift'] = {
                    //   quantity: 1, price: '1', modifiers: Array(0)
                    // }
                    // });
                    this.events.publishChangeCnt(true);
                    console.log('GIFT is', this.giftsArrDish);
                    console.log('GIFT giftsSum', this.giftsSum);
                    this.tmpSumGift = this.giftsArrDish.length;
                }
            });
            // this.giftsArrDish =
        }
        console.log('tmpSum', tmpSum);
        // if(this.tmpSumGift){
        //   return tmpSum+this.tmpSumGift;
        // } else {
        return tmpSum;
        // }
    }
    getDishesSumCart(obg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let tmpSum = 0;
            for (const dishId in obg) {
                if (obg.hasOwnProperty(dishId)) {
                    console.log('dishId', dishId);
                    // tmpSum += CartService.getDishById(dishId)['price'] * this.addedItems[dishId]['quantity'];
                    tmpSum += obg[dishId]['price'] * obg[dishId]['quantity'];
                }
            }
            // if (tmpSum == 0) {
            //   this.storage.remove('store_type');
            // }
            this.sum = tmpSum;
            console.log('tmpSum', tmpSum);
            return tmpSum;
        });
    }
    addItemModif(itemId, isAdd, quantity = 1, modifiers, price) {
        if (this.addedItems.hasOwnProperty(itemId)) {
            if (this.addedItems[itemId]['price'] == price) {
                if (isAdd) {
                    this.addedItems[itemId].quantity += quantity;
                }
                else {
                    if (this.addedItems[itemId].quantity == 0) {
                        return false;
                    }
                    this.addedItems[itemId].quantity -= 1;
                    // console.log('DELETE1', this.sum );
                    if (this.sum == 0) {
                        this.addedItems = [];
                    }
                    // delete this.addedItems[itemId];
                }
            }
            else {
                console.log('diff');
            }
        }
        else {
            if (isAdd) {
                console.log('LOGIC ПРОВЕРИТЬ');
                this.addedItems[itemId] = {
                    quantity: quantity,
                    price: price,
                    modifiers: modifiers,
                };
            }
            else {
                delete this.addedItems[itemId];
            }
        }
        this.sum = this.getDishesSum();
        if (this.addedItems[itemId]) {
            if (this.addedItems[itemId]['price'] == price) {
                quantity = this.addedItems[itemId].quantity;
                this.events.publishSomeData({
                    cart: 'added',
                    itemId: itemId,
                    quantity: quantity
                });
                this.events.publishSomeData({ countchange: true });
            }
        }
        if (this.sum == 0) {
            this.addedItems = [];
        }
    }
    setQuantity(itemId, isAdd, count = 1, pack = 1) {
        console.log('CARTSERV', this.addedItems);
        if (this.addedItems.hasOwnProperty(itemId)) {
            console.log('pack start=', pack);
            console.log('count=', count);
            console.log('this.addedItems[itemId].quantity=', this.addedItems[itemId].quantity);
            // if (isAdd) {
            //   if (this.addedItems[itemId].quantity+pack > count ) {
            //     this.api.alertMessage('Превышено количество на остатке', '');
            //   } else {
            //     this.addedItems[itemId].quantity+=pack;
            //   }
            // } else {
            //   if (this.addedItems[itemId].quantity > pack) {
            //     this.addedItems[itemId].quantity-=pack;
            //   } else {
            //     delete this.addedItems[itemId];
            //   }
            // }
            if (isAdd) {
                this.addedItems[itemId].quantity += pack;
            }
            else {
                console.log('3333333', this.addedItems[itemId].quantity);
                if (this.addedItems[itemId].quantity == 0) {
                    return false;
                }
                this.addedItems[itemId].quantity -= pack;
                if (this.addedItems[itemId].quantity == 0) {
                    console.log('DDDDDDDDDD');
                }
                console.log('DELETE1', this.sum);
                if (this.sum == 0) {
                    this.addedItems = [];
                }
                // delete this.addedItems[itemId];
            }
        }
        else {
            console.log('pack else=', pack);
            if (isAdd) {
                console.log('LOGIC ПРОВЕРИТЬ');
                if (pack > count) {
                    this.api.alertMessage('Превышено количество на остатке', '');
                }
                else {
                    this.addedItems[itemId] = {
                        quantity: (pack) ? pack : 1,
                        price: CartService_1.getDishById(itemId)['price'],
                        modifiers: [],
                    };
                }
            }
            else {
                delete this.addedItems[itemId];
            }
        }
        this.sum = this.getDishesSum();
        let quantity = 0;
        if (this.addedItems[itemId]) {
            quantity = this.addedItems[itemId].quantity;
            this.events.publishSomeData({
                cart: 'added',
                itemId: itemId,
                quantity: quantity
            });
            this.events.publishSomeData({ countchange: true });
        }
        if (this.sum == 0) {
            this.addedItems = [];
        }
        // this.events.publish('cart:added', itemId, quantity);
    }
};
CartService.dishes = [];
CartService.ctorParameters = () => [
    { type: _events_service__WEBPACK_IMPORTED_MODULE_1__.EventsService },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
CartService = CartService_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], CartService);



/***/ }),

/***/ 946:
/*!********************************************!*\
  !*** ./src/app/services/config.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8336);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage-angular */ 2879);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 5830);





let ConfigService = class ConfigService {
    constructor(api, http, storage) {
        this.api = api;
        this.http = http;
        this.storage = storage;
        this.defaultSettings = {};
        this.gifts = [];
        this.optVersionAndroid = '1.2';
        this.optVersionIos = '1.2';
        this.defaultSettingsGet();
    }
    defaultSettingsGet() {
        return new Promise((resolve) => {
            this.api.getApi('settings', {}).then(result => {
                console.log('this.result', result);
                if (result.hasOwnProperty('data')) {
                    this.defaultSettings = {
                        'phonesite': result['data']['company_phone'],
                        'noimgProd': result['data']['noimg'] ? result['data']['noimg'] : 'https://oxbox.ru/noimg.jpg',
                        'optVersion': result['data']['andoroid_version'],
                        'optVersionios': result['data']['ios_version'],
                        'company_address': result['data']['company_address'],
                        'social_vk': result['data']['social_vk'],
                        'social_inst': result['data']['social_inst'],
                        'company_inn': result['data']['company_inn'],
                        'company_ogrn': result['data']['company_inn'],
                        'company_phone': result['data']['company_phone'],
                        'company_title': result['data']['company_title'],
                        'support_email': result['data']['support_email'],
                        'is_iiko': result['data']['is_iiko'],
                        'is_bonus': result['data']['is_iiko'],
                        'copyright': result['data']['copyright'],
                        'delivery_price': result['data']['delivery_price'],
                        'order_price_for_free_delivery': result['data']['order_price_for_free_delivery'],
                        'max_bonuses': result['data']['max_bonuses'],
                        'direct_api_key': result['data']['direct_api_key'],
                        'friday_from': result['data']['friday_from'].slice(0, -3),
                        'friday_to': result['data']['friday_to'].slice(0, -3),
                        'monday_from': result['data']['monday_from'].slice(0, -3),
                        'monday_to': result['data']['monday_to'].slice(0, -3),
                        'saturday_from': result['data']['saturday_from'].slice(0, -3),
                        'saturday_to': result['data']['saturday_to'].slice(0, -3),
                        'sunday_from': result['data']['sunday_from'].slice(0, -3),
                        'sunday_to': result['data']['sunday_to'].slice(0, -3),
                        'thursday_from': result['data']['thursday_from'].slice(0, -3),
                        'thursday_to': result['data']['thursday_to'].slice(0, -3),
                        'tuesday_from': result['data']['tuesday_from'].slice(0, -3),
                        'tuesday_to': result['data']['tuesday_to'].slice(0, -3),
                        'wednesday_from': result['data']['wednesday_from'].slice(0, -3),
                        'wednesday_to': result['data']['wednesday_to'].slice(0, -3),
                        'mincart': 0
                    };
                    this.is_iiko = this.defaultSettings['is_iiko'];
                    // if(!this.is_iiko){
                    //   this.api.getApi('gifts',{}).then(resp =>{
                    //     if(resp.hasOwnProperty('data')&& resp['data'].length){
                    //       this.gifts = resp['data'];
                    //       this.gifts = this.gifts.sort((a, b) => {
                    //         let nameA = parseInt(a['basket_price']); // ignore upper and lowercase
                    //         let nameB = parseInt(b['basket_price']); // ignore upper and lowercase
                    //         if (nameA < nameB) {
                    //           return -1;
                    //         }
                    //         if (nameA > nameB) {
                    //           return 1;
                    //         }
                    //         return 0;
                    //       });
                    //     }
                    // console.log('GIFTS CONFIG',this.gifts);
                    // });
                    // }
                    console.log('this.defaultSettings', this.defaultSettings);
                    this.storage.set('appSet', this.defaultSettings).then((res) => {
                        // console.log(res);
                    });
                }
            });
        });
    }
};
ConfigService.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__.Storage }
];
ConfigService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], ConfigService);



/***/ }),

/***/ 106:
/*!********************************************!*\
  !*** ./src/app/services/events.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsService": () => (/* binding */ EventsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6671);



let EventsService = class EventsService {
    constructor() {
        this.fooSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.changeCnt = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.loginEv = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.loginId = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.cartClear = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    publishSomeData(data) {
        this.fooSubject.next(data);
    }
    getObservable() {
        return this.fooSubject;
    }
    publishChangeCnt(change) {
        this.changeCnt.next(change);
    }
    getChangeCnt() {
        return this.changeCnt;
    }
    publishLoginEv(login) {
        this.loginEv.next(login);
    }
    getLoginEv() {
        return this.loginEv;
    }
    publishLoginId(id) {
        this.loginId.next(id);
    }
    getLoginId() {
        return this.loginId;
    }
    publishcartClear(cartclear) {
        this.cartClear.next(cartclear);
    }
    getcartClear() {
        return this.cartClear;
    }
};
EventsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], EventsService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4909);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		470,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		2725,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		2979,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		9288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		1031,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		8310,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		1983,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		7039,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		7945,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		8714,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		1786,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		4702,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		6981,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		795,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		6976,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1417,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		8412,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4706,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		3459,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3354,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		1025,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		8592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		2526,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		2447,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4820,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		3212,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		7557,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8692,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3544,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		42,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		718,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		5981,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		6488,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		7937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		942,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		816,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		9062,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		3466,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		8404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		953,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		4254,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		5195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		6116,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		9781,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8323,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		376,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2072,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 2009:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-menu::part(container) {\n  background: var(--header-bg);\n}\n\nion-menu ion-list {\n  background: var(--header-bg);\n}\n\n.list-ios {\n  padding-top: 15px;\n}\n\nion-menu ion-item::part(native) {\n  background: var(--header-bg);\n  color: var(--header-text);\n}\n\na {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLDRCQUFBO0FBQUY7O0FBRUE7RUFDRSw0QkFBQTtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7QUFFRjs7QUFBQTtFQUNFLDRCQUFBO0VBQ0EseUJBQUE7QUFHRjs7QUFEQTtFQUNFLHFCQUFBO0FBSUYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tbWVudTo6cGFydChjb250YWluZXIpIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taGVhZGVyLWJnKTtcbn1cbmlvbi1tZW51IGlvbi1saXN0e1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oZWFkZXItYmcpO1xufVxuLmxpc3QtaW9ze1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbmlvbi1tZW51IGlvbi1pdGVtOjpwYXJ0KG5hdGl2ZSkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oZWFkZXItYmcpO1xuICBjb2xvcjogdmFyKC0taGVhZGVyLXRleHQpO1xufVxuYXtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLy9pb24tbWVudSBpb24taWNvbiBzdmcgcGF0aCB7XG4vLyAgc3Ryb2tlOiB2YXIoLS1tYWluLWNvbG9yKSFpbXBvcnRhbnQ7XG4vL31cbi8vLmlvbmljb24ge1xuLy8gIHN0cm9rZTogdmFyKC0tbWFpbi1jb2xvcikhaW1wb3J0YW50O1xuLy99XG4iXX0= */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-menu class=\"main_menu\" side=\"end\" menuId=\"logged\" contentId=\"logged\" type=\"reveal\" swipe-gesture=\"false\">\n  <!--<ion-menu class=\"main_menu\" side=\"end\" menuId=\"logged\" contentId=\"logged\" type=\"reveal\">-->\n\n    <ion-list lines=\"none\">\n      <ion-row class=\"ion-justify-content-end\" (click)=\"menu.close('logged')\">\n        <!--<img *ngIf=\"menuLogo\" class=\"logo\" alt=\"Logo\" src=\"{{menuLogo}}\" height=\"{{logoHeight}}\">-->\n        <img src=\"./assets/img/close1.svg\" height=\"25\" style=\"margin-right: 5px;\">\n      </ion-row>\n      <!--<ion-item color=\"light\" (click)=\"storageKeys()\">STORAGE</ion-item>-->\n      <ion-item *ngIf=\"authorized\" (click)=\"menu.close('logged')\" button=\"true\" routerLink=\"/profile\" [queryParams]=\"{userid: userid}\">\n        <ion-label>Профиль</ion-label>\n      </ion-item>\n\n      <ion-item *ngIf=\"!authorized\" (click)=\"menu.close('logged');\" button=\"true\" routerLink=\"/auth\">\n        <ion-label>Войти</ion-label>\n      </ion-item>\n      <div *ngIf=\"pagesArr.length\">\n        <ion-item *ngFor=\"let pagesingle  of pagesArr\" (click)=\"menu.close('logged')\" button=\"true\"  [routerLink]=\"['/pages/', pagesingle['id']]\" [queryParams]=\"{title: pagesingle.title}\">\n          <ion-label>{{pagesingle.title}}</ion-label>\n        </ion-item>\n      </div>\n      <ion-item *ngIf=\"authorized\" (click)=\"menu.close('logged'); doLogout()\" button=\"true\">\n        <ion-label>Выйти</ion-label>\n      </ion-item>\n    </ion-list>\n    <ion-list lines=\"none\">\n      <a *ngIf=\"menuPhone\" href=\"tel:{{menuPhone}}\">\n        <ion-item button=\"true\">\n          <ion-icon name=\"call-outline\" slot=\"start\" color=\"secondary\"></ion-icon>\n          <ion-label>{{menuPhone}}</ion-label>\n        </ion-item>\n      </a>\n      <a *ngIf=\"social_vk\" href=\"{{social_vk}}\">\n        <ion-item button=\"true\">\n          <ion-icon name=\"logo-vk\" slot=\"start\" color=\"secondary\"></ion-icon>\n          <ion-label>ВКонтакте</ion-label>\n        </ion-item>\n      </a>\n      <a *ngIf=\"social_inst\" href=\"{{social_inst}}\">\n        <ion-item button=\"true\">\n          <ion-icon name=\"logo-instagram\" slot=\"start\" color=\"secondary\"></ion-icon>\n          <ion-label>Instagram</ion-label>\n        </ion-item>\n      </a>\n      <!--<a *ngIf=\"menuAcffb\" href=\"{{menuAcffb}}\">-->\n        <!--<ion-item button=\"true\">-->\n          <!--<ion-icon name=\"logo-facebook\" slot=\"start\" color=\"secondary\"></ion-icon>-->\n          <!--<ion-label>Facebook</ion-label>-->\n        <!--</ion-item>-->\n      <!--</a>-->\n      <!--<a *ngIf=\"menuAcfyb\" href=\"{{menuAcfyb}}\">-->\n        <!--<ion-item button=\"true\">-->\n          <!--<ion-icon name=\"logo-youtube\" slot=\"start\" color=\"secondary\"></ion-icon>-->\n          <!--<ion-label>You Tube</ion-label>-->\n        <!--</ion-item>-->\n      <!--</a>-->\n      <!--<ion-item (click)=\"showDeveloperInfo()\" color=\"light\" button=\"true\">-->\n      <!--<ion-icon name=\"information-circle\" slot=\"start\"></ion-icon>-->\n      <!--<ion-label>О приложении</ion-label>-->\n      <!--</ion-item>-->\n    </ion-list>\n  </ion-menu>\n  <ion-router-outlet id=\"logged\"></ion-router-outlet>\n</ion-app>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map