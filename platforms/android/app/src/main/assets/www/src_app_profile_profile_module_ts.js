"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 6829:
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 2919);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 4523:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 6829);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 2919);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 2919:
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page.html?ngResource */ 8907);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss?ngResource */ 8430);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cart.service */ 910);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage-angular */ 2879);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/events.service */ 106);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/config.service */ 946);
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/orders.service */ 2331);
/* harmony import */ var _services_useradr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/useradr.service */ 2626);













let ProfilePage = class ProfilePage {
    constructor(api, cart, loadingController, alertController, navCtrl, events, storage, config, route, orders, useradr) {
        this.api = api;
        this.cart = cart;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.events = events;
        this.storage = storage;
        this.config = config;
        this.route = route;
        this.orders = orders;
        this.useradr = useradr;
        this.userid = '';
        this.first_name = '';
        this.last_name = '';
        this.personEmail = '';
        this.personGender = '';
        this.personBirthday = '';
        this.personPhone = '';
        this.personPhoneShow = '';
        this.gender = '';
        this.date_birth = '';
        this.spinner = false;
        this.title3 = '';
        this.technologies = [];
        this.arrAddr = [];
        this.nameTabPerson = 'Данные';
        this.bonusval = '';
        this.is_iiko = false;
        this.showAdr = false;
        this.is_bonus = false;
    }
    ngOnInit() {
        this.is_iiko = this.config.defaultSettings['is_iiko'];
        this.is_iiko = true;
        this.is_bonus = this.config.defaultSettings['is_bonus'];
        if (this.is_bonus) {
            this.title3 = 'Бонусы';
        }
        this.clickMe();
        // this.technologies = this.orders.oldOrders;
        this.route.queryParams.subscribe(params => {
            this.params = params;
            this.orders.getAllOrders(this.params.userid);
            setTimeout(() => {
                this.technologies = this.orders.oldOrders;
                console.log('GGG', this.technologies);
            }, 1000);
            console.log('this.params', this.params);
            if (this.params.userid && this.params.userid !== '') {
                this.api.getApi('clients', { 'id': this.params.userid }).then((response) => {
                    console.log(response);
                    if (response.hasOwnProperty('data')) {
                        if (response['data'].length) {
                            if (response['data'][0].is_blacklist) {
                                this.errorSms('Ваш профиль заблокирован!', 'Обратитесь к Администратору!');
                            }
                            else {
                                this.storage.set('user', response['data'][0]);
                                let user = response['data'][0];
                                this.userid = user.id;
                                this.first_name = user.first_name;
                                this.last_name = user.last_name;
                                this.personEmail = user.email;
                                this.personBirthday = user.date_birth;
                                this.personPhone = user.phone;
                                this.personPhoneShow = _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService.createPhoneNumber(user.phone);
                                this.personGender = user.gender.hasOwnProperty('title') ? user.gender.title : '';
                                this.date_birth = user.date_birth;
                                this.orders.getAllOrders(this.userid);
                                this.useradr.getCustomerAddreses(user.id).then(resp => {
                                    this.showAdr = true;
                                    if (resp && resp.length) {
                                        this.arrAddr = resp;
                                    }
                                });
                                // console.log('this.arrAddr', this.arrAddr);
                            }
                        }
                        // else {
                        //   this.storage.get('user').then(user => {
                        //     console.log('this.USER', user);
                        //     if(user!==''){
                        //       this.userid = user.id;
                        //       this.first_name = user.first_name;
                        //       this.last_name = user.last_name;
                        //       this.personEmail = user.email;
                        //       this.personBirthday = user.date_birth;
                        //       this.personPhone = user.phone;
                        //       this.personPhoneShow = ApiService.createPhoneNumber(user.phone);
                        //       this.personGender = user.gender.hasOwnProperty('title') ? user.gender.title : '';
                        //       this.date_birth = user.date_birth;
                        //       // this.getCustomerInfo(this.userid);
                        //       // this.getAdress(this.userid);
                        //       // this.technologies = this.orders.oldOrders;
                        //     } else {
                        //       this.userid ='';
                        //     }
                        //   });
                        // }
                    }
                });
            }
            if (this.params.edit == '1') {
                // this.getAdress(this.userid);
            }
            if (this.params.update == 'prof') {
                // this.getCustomerInfo(this.userid);
            }
        });
        // console.log('contactPerson',this.contactPerson);
    }
    clickMe() {
        this.api.spinner = false;
        this.nameTabPerson = this.cart.nameTabPerson;
        console.log('this.nameTabPerson', this.nameTabPerson);
        if (this.nameTabPerson == 'Бонусы') {
            if (this.is_bonus) {
                this.api.getBonus('clients', { phone: this.personPhone }).then(result => {
                    console.log('result', result);
                    console.log('this.personPhone', this.personPhone);
                    if (result.hasOwnProperty('data')) {
                        if (result['data']) {
                            this.bonusval = result['data'];
                        }
                        else {
                            this.bonusval = '0';
                        }
                    }
                    else {
                        this.bonusval = '0';
                    }
                });
            }
        }
        if (this.nameTabPerson == 'Заказы') {
            console.log('this.personPhone', this.personPhone);
            console.log('this.userid', this.userid);
            this.orders.getAllOrders(this.userid);
            this.technologies = this.orders.oldOrders;
            console.log('this.technologies', this.technologies);
        }
    }
    goToChangProfile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                subHeader: 'Вы действительно хотите изменить данные аккаунта?',
                buttons: ['Нет', {
                        text: 'Да',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                            const loading = yield this.loadingController.create({
                                message: 'Перенаправление...',
                                spinner: 'crescent'
                            });
                            yield loading.present();
                            yield loading.dismiss();
                            this.navCtrl.navigateRoot('/editprofile?userid=' + this.userid);
                            // this.api.logout().then(async () => {
                            //   this.events.publishSomeData({login : false});
                            //   this.cart.clearCart();
                            //   this.storage.remove('username');
                            //   this.storage.remove('userid');
                            //   await loading.dismiss();
                            //   this.navCtrl.navigateRoot('/editprofile');
                            // });
                        })
                    }]
            });
            yield alert.present();
        });
    }
    goToDelProfile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                subHeader: 'Вы хотите УДАЛИТЬ данные аккаунта?',
                buttons: ['Нет', {
                        text: 'Да',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                            const loading = yield this.loadingController.create({
                                message: 'Перенаправление...',
                                spinner: 'crescent'
                            });
                            yield loading.present();
                            //await loading.dismiss();
                            //this.navCtrl.navigateRoot('/');
                            this.api.removeUserApi('clients', { 'id': this.params.userid }).then((response) => {
                                console.log(response);
                                if (response.hasOwnProperty('data')) {
                                    if (response['data'].length) {
                                    }
                                }
                            });
                            this.api.logout().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                                // this.events.publishSomeData({login : false});
                                // this.authorized = false;
                                this.events.publishLoginId(0);
                                // this.events.publishLoginEv(false);
                                this.cart.clearCart();
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
    errorSms(title = 'Ошибка!', text = '') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: text,
                cssClass: 'auth_mess',
                buttons: [
                    {
                        text: 'На главную',
                        role: 'cancel',
                        cssClass: 'link_reg_home',
                        handler: () => {
                            this.navCtrl.navigateRoot('/');
                        }
                    },
                    {
                        text: 'Повторить',
                        cssClass: 'link_reg',
                        handler: () => {
                            window.location.reload();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    goToAddAdress() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                subHeader: 'Вы хотите добавить адрес?',
                buttons: ['Нет', {
                        text: 'Да',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                            const loading = yield this.loadingController.create({
                                message: 'Перенаправление...',
                                spinner: 'crescent'
                            });
                            yield loading.present();
                            yield loading.dismiss();
                            this.navCtrl.navigateRoot('/editadres?userid=' + this.userid + '&tit=Добавить');
                            // if(this.adr2){
                            //   console.log('ADR22222', this.adr2);
                            // } else if(this.adr1){
                            //   console.log('ADR11111', this.adr1);
                            //   this.navCtrl.navigateRoot('/editadres?userid='+this.userid+'&type=shipping&tit=Добавить');
                            // } else if(!this.adr1){
                            //   this.navCtrl.navigateRoot('/editadres?userid='+this.userid+'&type=billing&tit=Добавить');
                            //   console.log('НЕТ АДРЕСОВ');
                            // }
                            // this.navCtrl.navigateRoot('/editprofile');
                            // this.api.logout().then(async () => {
                            //   this.events.publishSomeData({login : false});
                            //   this.cart.clearCart();
                            //   this.storage.remove('username');
                            //   this.storage.remove('userid');
                            //   await loading.dismiss();
                            //
                            // });
                        })
                    }]
            });
            yield alert.present();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_4__.EventsService },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_10__.Storage },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_5__.ConfigService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: _services_orders_service__WEBPACK_IMPORTED_MODULE_6__.OrdersService },
    { type: _services_useradr_service__WEBPACK_IMPORTED_MODULE_7__.UseradrService }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-profile',
        template: _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 8430:
/*!******************************************************!*\
  !*** ./src/app/profile/profile.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".block-wrapper {\n  background-color: var(--block-wrapper-bg);\n  border-radius: 10px;\n  padding-bottom: 40px;\n}\n\nion-item::part(native) {\n  background: var(--block-wrapper-bg);\n  color: var(--tab-deault);\n}\n\nion-label p {\n  color: var(--tab-active);\n}\n\n.add-more-address {\n  color: var(--main-color);\n  margin-top: 20px;\n  font-weight: 600;\n}\n\n.person_info ion-label {\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQ0FBQTtFQUNBLHdCQUFBO0FBRUY7O0FBQUE7RUFDRSx3QkFBQTtBQUdGOztBQURBO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBRkE7RUFDRSxhQUFBO0FBS0YiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY2std3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2NrLXdyYXBwZXItYmcpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbn1cbmlvbi1pdGVtOjpwYXJ0KG5hdGl2ZSkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibG9jay13cmFwcGVyLWJnKTtcbiAgY29sb3I6IHZhcigtLXRhYi1kZWF1bHQpO1xufVxuaW9uLWxhYmVsIHB7XG4gIGNvbG9yOiB2YXIoLS10YWItYWN0aXZlKTtcbn1cbi5hZGQtbW9yZS1hZGRyZXNzIHtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnBlcnNvbl9pbmZvIGlvbi1sYWJlbHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 8907:
/*!******************************************************!*\
  !*** ./src/app/profile/profile.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<app-header title=\"Профиль\" [isMain]=\"false\" [isCart]=\"true\"></app-header>\n\n<ion-content>\n  <!--<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">-->\n  <!--<ion-refresher-content></ion-refresher-content>-->\n  <!--</ion-refresher>-->\n  <div class=\"ion-padding\">\n    <h1 class=\"title\">Личный кабинет</h1>\n    <div class=\"block-wrapper\">\n      <app-cabmenu title1=\"Данные\" title2=\"Заказы\" title3=\"{{title3}}\" (click)=\"clickMe()\"></app-cabmenu>\n\n      <div *ngIf=\"nameTabPerson == 'Данные'\" class=\"padding15\">\n        <div *ngIf=\"!personPhone\">\n          <ion-progress-bar type=\"indeterminate\" color=\"mainapp\"></ion-progress-bar>\n          <br>\n        </div>\n        <div *ngIf=\"personPhone\" class=\"person_info\">\n          <ion-item lines=\"none\">\n            <ion-label class=\"ion-text-wrap\">\n              <ion-text>\n                <h3>Телефон</h3>\n              </ion-text>\n              <p>{{personPhoneShow}}</p>\n            </ion-label>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-label class=\"ion-text-wrap\">\n              <ion-text>\n                <h3>Имя</h3>\n              </ion-text>\n              <p *ngIf=\"first_name\">{{first_name}}</p>\n              <p *ngIf=\"!first_name\">Не заполнено</p>\n            </ion-label>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-label class=\"ion-text-wrap\">\n              <ion-text>\n                <h3>Фамилия</h3>\n              </ion-text>\n              <p *ngIf=\"last_name\">{{last_name}}</p>\n              <p *ngIf=\"!last_name\">Не заполнено</p>\n            </ion-label>\n          </ion-item>\n\n          <ion-item lines=\"none\">\n            <ion-label class=\"ion-text-wrap\">\n              <ion-text>\n                <h3>E-mail</h3>\n              </ion-text>\n              <p *ngIf=\"personEmail\">{{personEmail}}</p>\n              <p *ngIf=\"!personEmail\">Не внесен</p>\n            </ion-label>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-label class=\"ion-text-wrap\">\n              <ion-text>\n                <h3>Пол</h3>\n              </ion-text>\n              <p *ngIf=\"personGender\">{{personGender}}</p>\n              <p *ngIf=\"!personGender\">Не указан</p>\n            </ion-label>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-label class=\"ion-text-wrap\">\n              <ion-text>\n                <h3>Дата рождения</h3>\n              </ion-text>\n              <p *ngIf=\"personBirthday\">{{personBirthday | date: 'dd.MM.yyyy'}}</p>\n              <p *ngIf=\"!personBirthday\">Не указана</p>\n            </ion-label>\n          </ion-item>\n          <p class=\"terms\">\n            Указать дату рождения и пол можно только один раз. <br>\n            Если вы ошиблись, свяжитесь с администратором.\n          </p>\n          <!--<ion-item>-->\n          <!--<ion-label class=\"ion-text-wrap\">-->\n          <!--<ion-text>-->\n          <!--<h3>Бонусы </h3>-->\n          <!--</ion-text>-->\n          <!--<p *ngIf=\"bonusval\">Доступно <b>{{bonusval}} </b> бонусов</p>-->\n          <!--<p *ngIf=\"!bonusval\">Информация обновляется</p>-->\n          <!--</ion-label>-->\n          <!--</ion-item>-->\n          <div class=\"personal-area__bottom\">\n            <ion-button expand=\"block\" (click)=\"goToChangProfile()\">Внести изменения</ion-button>\n          </div>\n          <div class=\"personal-area__bottom\">\n            <ion-button expand=\"block\" (click)=\"goToDelProfile()\">Удалить аккаунт</ion-button>\n          </div>\n        </div>\n        <div *ngIf=\"!is_iiko\">\n                <h2 style=\"margin-top: 25px; margin-bottom: 10px;font-size: 21px;font-weight: 600\">Мои адреса</h2>\n                <div *ngIf=\"!showAdr\">\n                  <ion-progress-bar type=\"indeterminate\" color=\"mainapp\"></ion-progress-bar>\n                  <br>\n                </div>\n                <div *ngIf=\"showAdr\">\n                  <div *ngIf=\"arrAddr.length\">\n                    <h2>ADDR array is!</h2>\n                  </div>\n                  <div class=\"add-more-address\" (click)=\"goToAddAdress()\">+ Добавить еще один адрес</div>\n                  <!--<ion-button expand=\"block\" >Добавить адрес</ion-button>-->\n\n\n                </div>\n                <!--<ion-item lines=\"none\" *ngIf=\"adr1\">-->\n                  <!--<ion-text slot=\"start\" class=\"item_adr\">{{adr1}}</ion-text>-->\n                  <!--&lt;!&ndash;<ion-icon name=\"create-outline\" slot=\"end\" (click)=\"goToEditAdr(userid, 'billing')\" [routerLink]=\"['/editadres']\" [queryParams]=\"{userid, type : 'billing'}\"></ion-icon>&ndash;&gt;-->\n                  <!--<ion-icon name=\"create-outline\" slot=\"end\" [routerLink]=\"['/editadres']\" [queryParams]=\"{userid, type : 'billing', street: adr1street, house:adr1house, flat:adr1flat}\"></ion-icon>-->\n                <!--</ion-item>-->\n                <!--<ion-item lines=\"none\" *ngIf=\"adr2\">-->\n                  <!--<ion-text slot=\"start\" class=\"item_adr\">{{adr2}}</ion-text>-->\n                  <!--<ion-icon name=\"create-outline\" slot=\"end\" [routerLink]=\"['/editadres']\" [queryParams]=\"{userid, type : 'shipping', street: adr2street, house:adr2house, flat:adr2flat}\"></ion-icon>-->\n                  <!--<ion-icon name=\"trash-bin-outline\" slot=\"end\" (click)=\"goToDelAdr(userid,'shipping')\"></ion-icon>-->\n                <!--</ion-item>-->\n        </div>\n\n      </div>\n      <div *ngIf=\"nameTabPerson == 'Заказы'\" class=\"padding15\">\n        <p style=\"margin-top: 10px;margin-bottom: 10px;\">История заказов</p>\n        <div class=\"content\" *ngIf=\"!api.spinner\">\n          <div *ngIf=\"technologies.length\">\n            <app-accordion *ngFor=\"let technology of technologies\"\n                           datezak=\"{{ technology.created_at }}\"\n                           name=\"{{ technology.id }}\"\n                           total=\"{{ technology.cart_price }}\"\n                           [prodarr]=\"technology.products\"\n                           orderid=\"{{ technology.id }}\"\n                           (change)=\"captureName($event)\"\n            ></app-accordion>\n          </div>\n          <div *ngIf=\"!technologies.length\">\n            <small>У Вас пока нет заказов в истории<br> либо информация обновляется</small>\n          </div>\n        </div>\n        <div class=\"content\" *ngIf=\"api.spinner\">\n          <ion-text>Перенаправление в корзину...</ion-text>\n          <ion-progress-bar type=\"indeterminate\" color=\"mainapp\"></ion-progress-bar>\n        </div>\n      </div>\n      <div *ngIf=\"nameTabPerson == 'Бонусы'\" class=\"padding15\">\n        <!--<div *ngIf=\"authorized\" class=\"ion-padding\">-->\n        <div class=\"order__box\">\n          <div *ngIf=\"!bonusval\">\n            <ion-progress-bar type=\"indeterminate\" color=\"mainapp\"></ion-progress-bar>\n            <br>\n          </div>\n          <div class=\"text-content\">\n\n            <h2 *ngIf=\"bonusval\">У вас {{bonusval}} бонусов</h2>\n            <h3 *ngIf=\"bonusval=='0'\">У вас пока нет бонусов, сделайте заказ и используйте их</h3>\n            <p>Вы можете использовать бонусы для частичной, до 20% от общей суммы заказа, оплаты вашего заказа</p>\n            <p style=\"color: #c9cbce; font-size: 14px;\">Бонусы – расчетные бонусные единицы, зачисляемые на Бонусный\n              счет Участника в соответствии с Правилами Программы, а также при выполнении Участником иных условий,\n              определенных Организатором самостоятельно либо по согласованию с Партнерами, являющихся основанием для\n              начисления Бонусов. Бонусы не имеют наличного выражения и не предоставляют Участнику право на получение их\n              в денежном эквиваленте. Срок действия Бонусов, начисленных за покупку на Бонусный счет Участника – 1 год с\n              даты их начисления. Срок действия акционных Бонусов устанавливается Организатором дополнительно по каждой\n              акции в отдельности.</p>\n          </div>\n        </div>\n\n\n      </div>\n    </div>\n    <!--<ion-button (click)=\"getAllOrders('129')\">Получить заказы</ion-button>-->\n    <!--<ion-button (click)=\"getCustomerInfo('129')\">Данные клиента</ion-button>-->\n    <!--<ion-button (click)=\"getCustomerId('79393010443')\">Получить id 79393010443</ion-button>-->\n    <!--<ion-button (click)=\"setOrder()\">Создать заказ</ion-button>-->\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map