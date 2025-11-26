"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_checkout_checkout_module_ts"],{

/***/ 2290:
/*!*****************************************************!*\
  !*** ./src/app/checkout/checkout-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutPageRoutingModule": () => (/* binding */ CheckoutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout.page */ 5247);




const routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_0__.CheckoutPage
    }
];
let CheckoutPageRoutingModule = class CheckoutPageRoutingModule {
};
CheckoutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CheckoutPageRoutingModule);



/***/ }),

/***/ 8400:
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutPageModule": () => (/* binding */ CheckoutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout-routing.module */ 2290);
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.page */ 5247);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ 2710);









let CheckoutPageModule = class CheckoutPageModule {
};
CheckoutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__.IonicSelectableModule,
            _checkout_routing_module__WEBPACK_IMPORTED_MODULE_0__.CheckoutPageRoutingModule
        ],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_1__.CheckoutPage]
    })
], CheckoutPageModule);



/***/ }),

/***/ 5247:
/*!*******************************************!*\
  !*** ./src/app/checkout/checkout.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutPage": () => (/* binding */ CheckoutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _checkout_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout.page.html?ngResource */ 8964);
/* harmony import */ var _checkout_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.page.scss?ngResource */ 989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cart.service */ 910);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/events.service */ 106);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage-angular */ 2879);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/config.service */ 946);











let CheckoutPage = class CheckoutPage {
    constructor(api, cart, alertController, navCtrl, formBuilder, events, storage, config) {
        this.api = api;
        this.cart = cart;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.events = events;
        this.storage = storage;
        this.config = config;
        this.authorized = false;
        this.isLoading = false;
        this.isLoadingPromo = false;
        this.isCancelPromo = false;
        this.priborshow = true;
        this.oplatashow = false;
        this.cartSum = 0;
        this.sposobi = [];
        this.cashPay = [];
        this.cardPay = [];
        this.cities = [];
        this.points = [];
        this.streets = [];
        this.addedDishes = [];
        this.userphone = '';
        this.userid = '';
        this.sposoboplat = '';
        this.promouse = '';
        // private sumCart: number = 0;
        this.adminUser = false;
        this.is_iiko = false;
        this.is_bonus = false;
        this.smsnumber = '';
        this.btnSmsShow = false;
        this.btnKodSend = true;
        this.smsSend = false;
        this.btnSend = true;
        this.btnSendPreload = false;
        this.userdelivery = '2';
        this.max_bonuses = '';
        this.validationMessages = {
            phone: [
                { type: 'required', message: 'Телефон обязателен' },
                { type: 'minlength', message: 'Недостаточно цифр' },
                { type: 'pattern', message: 'Некорректный телефон' },
            ],
            smsnumber: [
                { type: 'required', message: 'Введите код' },
                { type: 'minlength', message: 'Необходимо 4 цифры' },
                { type: 'maxlength', message: 'Необходимо 4 цифры' },
                { type: 'pattern', message: 'Только цифры!' },
            ],
            delstreet: [
                { type: 'required', message: 'Введите улицу' },
                { type: 'minlength', message: 'Недостаточно букв' },
                { type: 'maxlength', message: 'Слишком длинное' },
            ],
            deliveryadr: [
                { type: 'required', message: 'Выберите город' }
            ],
            skladname: [
                { type: 'required', message: 'Выберите город' }
            ],
            delivery: [
                { type: 'required', message: 'Выберите способ доставки' }
            ],
            varpay: [
                { type: 'required', message: 'Выберите способ оплаты' }
            ],
            pointname: [
                { type: 'required', message: 'Выберите заведение' }
            ],
            iikostreet: [
                { type: 'required', message: 'Выберите улицу' }
            ],
            dopname: [
                { type: 'maxlength', message: 'Слишком длинное' },
            ],
            delhouse: [
                { type: 'required', message: 'Выберите дом' },
                { type: 'maxlength', message: 'Слишком длинное' },
            ],
            delappart: [
                { type: 'maxlength', message: 'Слишком длинное' },
            ],
            entrance: [
                { type: 'maxlength', message: 'Слишком длинное' },
            ],
            floor: [
                { type: 'maxlength', message: 'Слишком длинное' },
            ],
            comment: [
                { type: 'maxlength', message: 'Слишком длинное' },
            ],
            pribor: [
                { type: 'max', message: 'Слишком много' },
            ],
            bonusvalform: [
                { type: 'max', message: 'Вы привысили максимум списания бонусов' },
                { type: 'min', message: 'Минимальное количество 0' },
            ],
            promovalform: [
                { type: 'required', message: 'Введите промокод' },
                { type: 'maxlength', message: 'Слишком длинный' },
                { type: 'minlength', message: 'Слишком мало символов' },
            ],
        };
        this.storage.get('user').then((res) => {
            console.log('userOBJ', res);
            if (res && res.hasOwnProperty('id')) {
                this.authorized = true;
                this.userid = res['id'];
                this.userphone = res['phone'];
                console.log("this.authorized1111", this.userphone);
                this.getBonuses();
            }
        });
    }
    searchPorts(event) {
        let text = event.text.trim().toLowerCase();
        event.component.startSearch();
        if (!text) {
            event.component.items = [];
            event.component.endSearch();
            return;
        }
        event.component.items = this.filterPorts(this.streets, text);
        event.component.endSearch();
    }
    filterPorts(ports, text) {
        return ports.filter(port => {
            return port.title.toLowerCase().indexOf(text) !== -1;
        });
    }
    ngOnInit() {
        console.log('CHECK', this.config.defaultSettings);
        this.is_iiko = this.config.defaultSettings['is_iiko'];
        this.is_bonus = this.config.defaultSettings['is_bonus'];
        if (this.config.defaultSettings.hasOwnProperty('max_bonuses')) {
            this.max_bonuses = this.config.defaultSettings['max_bonuses'];
        }
        console.log('this.max_bonuses', this.max_bonuses);
        this.addedDishes = this.cart.getAddedDishes();
        this.cartSum = this.cart.getDishesSum();
        this.getBonuses();
        this.promo = this.formBuilder.group({
            promovalform: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(4)])
        });
        this.api.getApi('iiko_payments', {}).then(result => {
            if (result.hasOwnProperty('data')) {
                this.sposobi = result['data'];
                this.sposobi.forEach(value => {
                    if (value.article == 'CASH') {
                        this.cashPay = value;
                        this.money = this.formBuilder.group({
                            moneyval: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
                        });
                    }
                    if (value.article == 'CARD') {
                        this.cardPay = value;
                    }
                    console.log(value);
                });
            }
        });
        this.api.getApi('deliveryTypes', {}).then(result => {
            console.log('deliveryTypes', result);
        });
        console.log('is_iiko', this.is_iiko);
        this.getCities();
        this.deliv = this.formBuilder.group({
            delivery: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('2', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        });
        this.sklad = this.formBuilder.group({});
        if (this.sposobi) {
            this.oplata = this.formBuilder.group({
                varpay: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            });
            // this.oplata.controls.sposoboplat.reset();
            if (this.cashPay) {
                // this.oplata.controls.varpay.reset('1');
                // this.money.setControl('moneyval', new FormControl('', Validators.compose([])));
            }
        }
        this.dopinfo = this.formBuilder.group({
            // dopname: new FormControl('', [Validators.maxLength(25)]),
            pribor: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('0', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(25)]),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(200)]),
        });
        console.log('NNNN111', this.max_bonuses);
        console.log('NNNN222', parseInt(this.max_bonuses) * this.cartSum / 100);
        console.log('NNNN333', this.bonusval);
        console.log('addedDishes', this.addedDishes);
        console.log('cartSum', this.cartSum);
        // this.sklad.removeControl('skladname');
        this.oplatashow = true;
        // this.oplata.controls.sposoboplat.reset();
        this.sklad.setControl('deliveryadr', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])));
        if (this.is_iiko) {
            this.sklad.setControl('iikostreet', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])));
        }
        else {
            this.sklad.setControl('delstreet', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(60)])));
        }
        this.sklad.setControl('delhouse', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(60)])));
        this.sklad.setControl('delappart', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(60)])));
        this.sklad.setControl('entrance', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(20)])));
        this.sklad.setControl('floor', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(20)])));
    }
    getBonuses() {
        if (this.is_bonus) {
            console.log('this.userphone000', this.userphone);
            // console.log('this.userphone000', Profile.personPhone);
            this.api.getBonus('clients', { phone: this.userphone }).then(result => {
                console.log('result', result);
                console.log('this.userphone@@@', this.userphone);
                if (result.hasOwnProperty('data')) {
                    console.log('this.userphone', this.userphone);
                    if (result['data']) {
                        this.bonusval = result['data'];
                    }
                    else {
                        console.log('000000');
                        this.bonusval = 0;
                    }
                }
                else {
                    console.log('ELSE000000');
                    this.bonusval = 0;
                }
                if (this.max_bonuses) {
                    this.max_bonusesval = parseInt(this.max_bonuses) * this.cartSum / 100 <= this.bonusval ? parseInt(this.max_bonuses) * this.cartSum / 100 : this.bonusval;
                    console.log('NNNN', this.max_bonusesval);
                    this.bonus = this.formBuilder.group({
                        bonusvalform: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(this.max_bonusesval), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0)])
                    });
                }
                else {
                    this.max_bonusesval = this.bonusval;
                    this.bonus = this.formBuilder.group({
                        bonusvalform: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(this.bonusval), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0)])
                    });
                }
            });
        }
    }
    onItemRadio(event) {
        if (event != undefined) {
            this.userdelivery = event.detail.value;
            console.log('this.userdelivery', this.userdelivery);
            if (this.userdelivery == '2') {
                this.sklad.removeControl('skladname');
                this.sklad.removeControl('pointname');
                this.oplatashow = true;
                // this.oplata.controls.sposoboplat.reset();
                if (this.is_iiko) {
                    this.sklad.setControl('iikostreet', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])));
                }
                else {
                    this.sklad.setControl('delstreet', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(60)])));
                }
                this.sklad.setControl('deliveryadr', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])));
                this.sklad.setControl('delhouse', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(60)])));
                this.sklad.setControl('delappart', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(60)])));
                this.sklad.setControl('entrance', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(20)])));
                this.sklad.setControl('floor', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(20)])));
            }
            if (this.userdelivery == '1') {
                this.sklad.setControl('skladname', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,])));
                this.sklad.setControl('pointname', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,])));
                // this.oplata.setControl('sposoboplat', new FormControl('', Validators.compose([Validators.required, ])));
                // this.sklad.controls.skladname.reset(this.Acfregion[0]);
                this.oplatashow = true;
                // this.oplata.controls.sposoboplat.reset('В заведении');
                this.sklad.removeControl('deliveryadr');
                console.log('this.is_iiko', this.is_iiko);
                if (this.is_iiko) {
                    this.sklad.removeControl('iikostreet');
                }
                else {
                    this.sklad.removeControl('delstreet');
                }
                this.sklad.removeControl('delhouse');
                this.sklad.removeControl('delappart');
                this.sklad.removeControl('entrance');
                this.sklad.removeControl('floor');
            }
        }
        else {
        }
    }
    onItemPoints(event) {
        console.log('events', event);
        if (event != undefined) {
            this.sklad.controls.pointname.reset();
            // this.sklad.removeControl('points');
            this.api.getApi('stores', { 'city_id': event.detail.value }).then(result => {
                console.log('points', result);
                if (result.hasOwnProperty('data') && result['data']) {
                    this.points = result['data'];
                    console.log(' this.points', this.points);
                    // this.sklad.setControl('points', new FormControl('', Validators.compose([Validators.required, ])));
                    // this.sklad.controls.pointname.reset();
                    // console.log('points', this.cities[0]['id']);
                    // this.sklad.controls.deliveryadr.reset(this.cities[0]['id'])
                    // this.sklad.controls['deliveryadr'].setValue(this.cities[0]['id'], {onlySelf: true});
                    // this.sklad.patchValue({
                    //   'deliveryadr': this.cities[0]['id']
                    // });
                }
                else {
                    this.points = [];
                }
            });
            // this.userdelivery = event.detail.value;
            console.log('onItemPoints', event.detail.value);
            // if (this.userdelivery == 'Самовывоз') {
            //   this.sklad.setControl('skladname', new FormControl('', Validators.compose([Validators.required, ])));
            //   // this.oplata.setControl('sposoboplat', new FormControl('', Validators.compose([Validators.required, ])));
            //   // this.sklad.controls.skladname.reset(this.Acfregion[0]);
            //   this.oplatashow = true;
            //   this.oplata.controls.sposoboplat.reset('В заведении');
            //   this.sklad.removeControl('deliveryadr');
            //   this.sklad.removeControl('delstreet');
            //   this.sklad.removeControl('delhouse');
            //   this.sklad.removeControl('delappart');
            // }
            // if (this.userdelivery == 'Доставка') {
            //   this.sklad.removeControl('skladname');
            //   this.oplatashow = true;
            //   this.oplata.controls.sposoboplat.reset();
            //   this.sklad.setControl('deliveryadr', new FormControl('', Validators.compose([Validators.required])));
            //   this.sklad.setControl('delstreet', new FormControl('', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(60)])));
            //   this.sklad.setControl('delhouse', new FormControl('', Validators.compose([Validators.maxLength(60)])));
            //   this.sklad.setControl('delappart', new FormControl('', Validators.compose([Validators.maxLength(60)])));
            //
            // }
        }
        else {
        }
    }
    triggerChange($event) {
        if ($event.detail.checked) {
            this.dopinfo.controls.pribor.reset(1);
            this.priborshow = false;
        }
        else {
            this.dopinfo.controls.pribor.reset(0);
            this.priborshow = true;
        }
    }
    getCities() {
        this.cities = this.cart.cities;
        console.log('DDDATA', this.cities);
    }
    onItemCity(event) {
        console.log('SRTART STREET');
        if (this.is_iiko) {
            this.streets = [];
            this.sklad.controls.iikostreet.reset();
            console.log('SRTART STREET111');
            // console.log('events', event.detail.value);
            if (event != undefined) {
                let tempElem = this.cities.filter(item => item['id'] == event.detail.value);
                if (tempElem.length) {
                    this.streets = tempElem[0]['street'];
                }
                else {
                    this.streets = [];
                }
                console.log('this.streets', this.streets);
            }
        }
    }
    // chooseStreet(id){
    //   this.sklad.controls.iikostreet.reset(id);
    // }
    // startSearch(event){
    //   const query = event.target.value.toLowerCase();
    //   console.log('query',query);
    //   requestAnimationFrame(() => {
    //     const items = Array.from(document.querySelector('ul.cities_list').children);
    //     items.forEach((item) => {
    //       const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
    //       item.className = shouldShow ? 'block' : 'none';
    //     });
    //   });
    // };
    onMoneyRadio(event) {
        if (event != undefined) {
            this.sposoboplat = event.detail.value;
            console.log('this.money', this.money);
            if (this.cashPay && this.sposoboplat == this.cashPay['id']) {
                this.money.setControl('moneyval', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([])));
            }
            if (this.cardPay && this.sposoboplat == this.cardPay['id']) {
                this.money.removeControl('moneyval');
            }
        }
    }
    eventCaught(event) {
        if (event) {
            this.makeOrder();
        }
    }
    getPromo() {
        if (this.isLoadingPromo) {
            return;
        }
        this.isLoadingPromo = true;
        for (let control in this.promo.controls) {
            if (this.promo.controls.hasOwnProperty(control)) {
                this.promo.controls[control].markAsTouched();
            }
        }
        if (this.promo.status === 'INVALID') {
            this.isLoadingPromo = false;
            return;
        }
        let promoval = this.promo.value.promovalform;
        console.log('PROMO=', promoval);
        // let promoOrder['client_phone'] =;
        return new Promise((resolve) => {
            this.api.getApi('promocodes', { code: promoval, client_phone: this.userphone, is_alive: true, limit: 1 }).then(result => {
                console.log('promocodes', result);
                if (result['status'] == '200') {
                    this.isLoadingPromo = false;
                    if (result['data'].length) {
                        this.isCancelPromo = true;
                        this.promouse = promoval;
                        if (result['data'][0]['discount_type']['value'] == 'percent') {
                            let sum = parseInt(result['data'][0]['discount_sum']);
                            this.cart.sum = Math.ceil(this.cart.sum - this.cart.sum * sum / 100);
                        }
                        if (result['data'][0]['discount_type']['value'] == 'fixed') {
                            let sum = parseInt(result['data'][0]['discount_sum']);
                            this.cart.sum = Math.ceil(this.cart.sum - sum);
                        }
                    }
                    else {
                        this.api.alertMessage('Проверьте промокод,', 'Нет информации по данному промокоду');
                    }
                }
                else {
                    this.isLoadingPromo = false;
                    this.api.alertMessage('Искренне сожалеем,', 'произошла ошибка при проверке промокода. Попробуйте чуть позже.');
                }
            });
        });
    }
    clearPromo() {
        this.promo.controls.promovalform.reset('');
        this.isCancelPromo = false;
        this.cart.sum = this.cartSum;
    }
    makeOrder() {
        console.log('makeOrder');
        console.log('this.isLoading', this.isLoading);
        if (this.isLoading) {
            return;
        }
        this.isLoading = true;
        for (let control in this.sklad.controls) {
            if (this.sklad.controls.hasOwnProperty(control)) {
                this.sklad.controls[control].markAsTouched();
            }
        }
        for (let control in this.deliv.controls) {
            if (this.deliv.controls.hasOwnProperty(control)) {
                this.deliv.controls[control].markAsTouched();
            }
        }
        for (let control in this.oplata.controls) {
            if (this.oplata.controls.hasOwnProperty(control)) {
                this.oplata.controls[control].markAsTouched();
            }
        }
        for (let control in this.money.controls) {
            if (this.money.controls.hasOwnProperty(control)) {
                this.money.controls[control].markAsTouched();
            }
        }
        // for (let control in this.bonus.controls) {
        //   if (this.bonus.controls.hasOwnProperty(control)) {
        //     this.bonus.controls[control].markAsTouched();
        //   }
        // }
        // console.log('this.sklad.status', this.sklad.status);
        // console.log('this.sklad.contains', this.sklad.value);
        // console.log('this.deliv.status', this.deliv.status);
        // console.log('this.oplata.status', this.oplata.status);
        // console.log('this.money.status', this.money.status);
        if (this.sklad.status === 'INVALID') {
            this.isLoading = false;
            return;
        }
        if (this.deliv.status === 'INVALID') {
            this.isLoading = false;
            return;
        }
        if (this.oplata.status === 'INVALID') {
            this.isLoading = false;
            return;
        }
        if (this.money.status === 'INVALID') {
            this.isLoading = false;
            return;
        }
        // if (this.bonus.status === 'INVALID') {
        //   this.isLoading = false;
        //   return;
        // }
        let dataOrder = {};
        dataOrder['source'] = 'mobile-app';
        if (this.promouse) {
            dataOrder['promocode'] = this.promouse;
        }
        dataOrder['client_phone'] = this.userphone;
        dataOrder['client_id'] = this.userid;
        dataOrder['deliveryType_id'] = this.deliv.value.delivery ? this.deliv.value.delivery : 1;
        dataOrder['count_devices'] = this.dopinfo.value.pribor;
        dataOrder['comment'] = this.dopinfo.value.comment ? this.dopinfo.value.comment : '';
        if (this.deliv.value.delivery == '2') {
            dataOrder['iiko_city_id'] = this.sklad.value.deliveryadr;
            if (this.is_iiko) {
                console.log('this.sklad.value.iikostreet', this.sklad.value.iikostreet.id);
                dataOrder['iiko_street_id'] = this.sklad.value.iikostreet.id;
            }
            else {
                dataOrder['iiko_street_id'] = this.sklad.value.delstreet;
            }
            dataOrder['delivery_house'] = this.sklad.value.delhouse ? this.sklad.value.delhouse : '';
            dataOrder['delivery_apartment'] = this.sklad.value.delappart ? this.sklad.value.delappart : '';
            dataOrder['delivery_entrance'] = this.sklad.value.entrance ? this.sklad.value.entrance : '';
            dataOrder['delivery_floor'] = this.sklad.value.floor ? this.sklad.value.floor : '';
        }
        if (this.deliv.value.delivery == '1') {
            dataOrder['iiko_city_id'] = this.sklad.value.skladname;
            ;
            dataOrder['iiko_cashbox_id'] = this.sklad.value.pointname;
        }
        dataOrder['iiko_payment_id'] = this.oplata.value.varpay;
        if (this.oplata.value.varpay == '1') {
            dataOrder['comment'] = this.money.value.moneyval ? dataOrder['comment'] + '; Сдача с' + this.money.value.moneyval : dataOrder['comment'];
        }
        // let tmpDishes = this.cart.getAddedDishes();
        let tmpDishes = this.addedDishes;
        let products = [];
        for (var key in tmpDishes) {
            let isSlash = key.indexOf('/');
            let id = '';
            if (isSlash > 0) {
                id = key.slice(0, isSlash);
            }
            else {
                id = key;
            }
            products.push({
                id: id,
                count: tmpDishes[key]['quantity'],
                modifiers: tmpDishes[key]['modifiers']
            });
        }
        if (this.bonus.value.bonusvalform) {
            dataOrder['bonus_count'] = this.bonus.value.bonusvalform;
        }
        dataOrder['products'] = products;
        // console.log("PRODUCTS", products);
        this.api.addApi('orders', dataOrder).then(result => {
            console.log('ORDER', result);
            if (result.hasOwnProperty('data') && result['data']) {
                this.api.alertMessage('Спасибо!', '' +
                    'Номер заказа ' + result['data']);
            }
            else {
                this.api.alertMessage('Искренне сожалеем,', '' +
                    'произошла ошибка при оформлении заказа. Попробуйте чуть позже.');
            }
            this.cart.clearCart();
            this.navCtrl.navigateRoot('/');
        });
        // console.log('dataOrder',dataOrder);
        // let dishesList = [];
    }
    checkOrder() {
        console.log('checkOrder');
        // console.log('this.isLoading', this.isLoading);
        if (this.isLoading) {
            return;
        }
        this.isLoading = true;
        for (let control in this.sklad.controls) {
            if (this.sklad.controls.hasOwnProperty(control)) {
                this.sklad.controls[control].markAsTouched();
            }
        }
        for (let control in this.deliv.controls) {
            if (this.deliv.controls.hasOwnProperty(control)) {
                this.deliv.controls[control].markAsTouched();
            }
        }
        for (let control in this.oplata.controls) {
            if (this.oplata.controls.hasOwnProperty(control)) {
                this.oplata.controls[control].markAsTouched();
            }
        }
        for (let control in this.money.controls) {
            if (this.money.controls.hasOwnProperty(control)) {
                this.money.controls[control].markAsTouched();
            }
        }
        // for (let control in this.bonus.controls) {
        //   if (this.bonus.controls.hasOwnProperty(control)) {
        //     this.bonus.controls[control].markAsTouched();
        //   }
        // }
        // console.log('this.sklad.status', this.sklad.status);
        // console.log('this.sklad.contains', this.sklad.value);
        // console.log('this.deliv.status', this.deliv.status);
        // console.log('this.oplata.status', this.oplata.status);
        // console.log('this.money.status', this.money.status);
        if (this.sklad.status === 'INVALID') {
            this.isLoading = false;
            return;
        }
        if (this.deliv.status === 'INVALID') {
            this.isLoading = false;
            return;
        }
        if (this.oplata.status === 'INVALID') {
            this.isLoading = false;
            return;
        }
        if (this.money.status === 'INVALID') {
            this.isLoading = false;
            return;
        }
        // if (this.bonus.status === 'INVALID') {
        //   this.isLoading = false;
        //   return;
        // }
        let dataOrder = {};
        dataOrder['source'] = 'mobile-app';
        if (this.promouse) {
            dataOrder['promocode'] = this.promouse;
        }
        dataOrder['client_phone'] = this.userphone;
        dataOrder['client_id'] = this.userid;
        dataOrder['deliveryType_id'] = this.deliv.value.delivery ? this.deliv.value.delivery : 1;
        // dataOrder['count_devices'] = this.dopinfo.value.pribor;
        // dataOrder['comment'] = this.dopinfo.value.comment ? this.dopinfo.value.comment : '';
        if (this.deliv.value.delivery == '2') {
            dataOrder['iiko_city_id'] = this.sklad.value.deliveryadr;
            if (this.is_iiko) {
                console.log('this.sklad.value.iikostreet', this.sklad.value.iikostreet.id);
                dataOrder['iiko_street_id'] = this.sklad.value.iikostreet.id;
            }
            else {
                dataOrder['iiko_street_id'] = this.sklad.value.delstreet;
            }
            // dataOrder['delivery_house'] = this.sklad.value.delhouse ? this.sklad.value.delhouse : '';
            // dataOrder['delivery_apartment'] = this.sklad.value.delappart ? this.sklad.value.delappart : '';
            // dataOrder['delivery_entrance'] = this.sklad.value.entrance ? this.sklad.value.entrance : '';
            // dataOrder['delivery_floor'] = this.sklad.value.floor ? this.sklad.value.floor : '';
        }
        if (this.deliv.value.delivery == '1') {
            dataOrder['iiko_city_id'] = this.sklad.value.skladname;
            ;
            dataOrder['iiko_cashbox_id'] = this.sklad.value.pointname;
        }
        dataOrder['iiko_payment_id'] = this.oplata.value.varpay;
        // if(this.oplata.value.varpay=='1'){
        //   dataOrder['comment'] = this.money.value.moneyval ? dataOrder['comment'] + '; Сдача с' + this.money.value.moneyval : dataOrder['comment'];
        // }
        // let tmpDishes = this.cart.getAddedDishes();
        let tmpDishes = this.addedDishes;
        let products = [];
        for (var key in tmpDishes) {
            let isSlash = key.indexOf('/');
            let id = '';
            if (isSlash > 0) {
                id = key.slice(0, isSlash);
            }
            else {
                id = key;
            }
            products.push({
                id: id,
                count: tmpDishes[key]['quantity'],
                modifiers: tmpDishes[key]['modifiers']
            });
        }
        if (this.bonus.value.bonusvalform) {
            dataOrder['bonus_count'] = this.bonus.value.bonusvalform;
        }
        dataOrder['products'] = products;
        // console.log("PRODUCTS", products);
        this.api.calculateApi('orders', dataOrder).then(result => {
            console.log('CALC', result);
            // if(result.hasOwnProperty('data')&& result['data']){
            //   this.api.alertMessage('Спасибо!', '' +
            //     'Номер заказа '+result['data']);
            // } else {
            //   this.api.alertMessage('Искренне сожалеем,', '' +
            //     'произошла ошибка при оформлении заказа. Попробуйте чуть позже.');
            // }
            // this.cart.clearCart();
            // this.navCtrl.navigateRoot('/');
        });
        // console.log('dataOrder',dataOrder);
        // let dishesList = [];
    }
    sendKod() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    errorSms(title = 'Ошибка!', text = '') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
    noUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Пройдите регистрацию',
                // message: this.config.regatxt,
                buttons: [
                    {
                        text: 'Регистрация',
                        cssClass: 'link_reg',
                        handler: () => {
                            // window.location.href = this.config.urlRegasite;
                            // this.navCtrl.navigateRoot('/');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
CheckoutPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_4__.EventsService },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__.Storage },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_5__.ConfigService }
];
CheckoutPage.propDecorators = {
    paymentType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['paymentType', { static: false },] }],
    deliveryType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['deliveryType', { static: false },] }]
};
CheckoutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-checkout',
        template: _checkout_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_checkout_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CheckoutPage);



/***/ }),

/***/ 989:
/*!********************************************************!*\
  !*** ./src/app/checkout/checkout.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-select {\n  border-width: 2px !important;\n  border-style: solid !important;\n  border-color: var(--header-address-border);\n  border-radius: 10px !important;\n  height: 50px;\n  padding: 0 20px !important;\n  color: var(--placeholder) !important;\n}\n\n.order__box .errormess p {\n  background: var(--order-box-bg);\n}\n\nion-select.ng-valid {\n  color: var(--text-content-color) !important;\n}\n\nion-select.ion-invalid.has-value {\n  border-color: #da2f45 !important;\n}\n\nion-selectt.ion-invalid.ion-dirty {\n  border-color: #da2f45 !important;\n}\n\nion-select.ion-invalid.ion-touched {\n  border-color: #da2f45 !important;\n}\n\n.cities_list {\n  list-style: none;\n  width: 100%;\n  position: absolute;\n  top: 40px;\n  padding: 10px 20px;\n  z-index: 1000;\n  border-radius: 0 0 10px 10px;\n  background: var(--order-box-bg);\n}\n\n.cities_list li {\n  padding: 7px 0;\n}\n\n.cities_list li.none {\n  display: none;\n}\n\n.ionic-selectable {\n  display: block;\n  border-width: 2px !important;\n  border-style: solid !important;\n  border-color: var(--header-address-border);\n  border-radius: 10px !important;\n  height: 50px;\n  padding: 0 20px !important;\n  max-width: 45%;\n}\n\nion-textarea {\n  border-width: 2px;\n  border-style: solid;\n  border-color: var(--header-address-border);\n  border-radius: 10px;\n  padding: 10px;\n  color: var(--input-color);\n}\n\nion-radio-group ion-item::part(native) {\n  color: var(--input-color);\n  background: var(--order-box-bg);\n}\n\nion-radio.radio-checked::part(container) {\n  border-color: var(--category-active-bg);\n}\n\nion-radio::part(mark) {\n  background: var(--category-active-bg);\n}\n\nion-select::part(placeholder) {\n  opacity: 1;\n}\n\nion-input.ion-invalid.has-value input {\n  border-color: #da2f45 !important;\n}\n\nion-input.ion-invalid.ion-dirty input {\n  border-color: #da2f45 !important;\n}\n\nion-input.ion-invalid.ion-touched input {\n  border-color: #da2f45 !important;\n}\n\n.order__box {\n  border-radius: 10px;\n  padding: 30px 20px;\n  background-color: var(--order-box-bg);\n  border: 2px solid var(--order-box-border);\n}\n\n.order__box-title {\n  font-size: 18px;\n  margin-bottom: 10px;\n  color: var(--order-box-title);\n}\n\n.errormess ion-text {\n  background: var(--order-box-bg);\n}\n\n.phone-code {\n  font-size: 14px;\n  color: var(--text-content-color);\n}\n\nion-label {\n  margin-bottom: 10px;\n  color: var(--body-text);\n}\n\nion-toggle {\n  --handle-border-radius: 30px;\n  height: 30px;\n  width: 56px;\n  --handle-height: 28px;\n  --handle-width: 28px;\n  padding-top: 0;\n  padding-bottom: 0;\n  --background: var(--products-bg);\n  --background-checked: var(--main-color);\n  --handle-background: var(--order-box-title);\n  --handle-background-checked: var(--order-box-title);\n}\n\ndiv.info {\n  font-size: 12px;\n  border-width: 2px;\n  border-style: solid;\n  border-color: var(--main-color);\n  border-radius: 10px;\n  padding: 10px;\n  color: var(--body-text);\n}\n\n.hideclass {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrb3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7QUFDRjs7QUFDQTtFQUNJLCtCQUFBO0FBRUo7O0FBQUE7RUFDRSwyQ0FBQTtBQUdGOztBQURBO0VBQ0UsZ0NBQUE7QUFJRjs7QUFGQTtFQUNFLGdDQUFBO0FBS0Y7O0FBSEE7RUFDRSxnQ0FBQTtBQU1GOztBQUpBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtBQU1GOztBQUpBO0VBQ0UsY0FBQTtBQU9GOztBQUxBO0VBQ0UsYUFBQTtBQVFGOztBQU5BO0VBQ0UsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQVNGOztBQVBBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBQ0EseUJBQUE7QUFTRjs7QUFQQTtFQUNFLHlCQUFBO0VBQ0EsK0JBQUE7QUFVRjs7QUFSQTtFQUNHLHVDQUFBO0FBV0g7O0FBVEE7RUFDRSxxQ0FBQTtBQVlGOztBQVZBO0VBQ0UsVUFBQTtBQWFGOztBQVJBO0VBQ0UsZ0NBQUE7QUFXRjs7QUFUQTtFQUNFLGdDQUFBO0FBWUY7O0FBVkE7RUFDRSxnQ0FBQTtBQWFGOztBQVhBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7QUFjRjs7QUFaQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBZUY7O0FBYkE7RUFDRSwrQkFBQTtBQWdCRjs7QUFkQTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtBQWlCRjs7QUFmQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUFrQkY7O0FBaEJBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsMkNBQUE7RUFDQSxtREFBQTtBQW1CRjs7QUFqQkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFvQkY7O0FBbEJBO0VBQ0UsYUFBQTtBQXFCRiIsImZpbGUiOiJjaGVja291dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VsZWN0IHtcbiAgYm9yZGVyLXdpZHRoOiAycHghaW1wb3J0YW50O1xuICBib3JkZXItc3R5bGU6IHNvbGlkIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1oZWFkZXItYWRkcmVzcy1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiAwIDIwcHghaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0tcGxhY2Vob2xkZXIpIWltcG9ydGFudDtcbn1cbi5vcmRlcl9fYm94IC5lcnJvcm1lc3MgcCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tb3JkZXItYm94LWJnKTtcbn1cbmlvbi1zZWxlY3QubmctdmFsaWR7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbnRlbnQtY29sb3IpIWltcG9ydGFudDtcbn1cbmlvbi1zZWxlY3QuaW9uLWludmFsaWQuaGFzLXZhbHVlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZGEyZjQ1IWltcG9ydGFudDtcbn1cbmlvbi1zZWxlY3R0Lmlvbi1pbnZhbGlkLmlvbi1kaXJ0eSB7XG4gIGJvcmRlci1jb2xvcjogI2RhMmY0NSFpbXBvcnRhbnQ7XG59XG5pb24tc2VsZWN0Lmlvbi1pbnZhbGlkLmlvbi10b3VjaGVkIHtcbiAgYm9yZGVyLWNvbG9yOiAjZGEyZjQ1IWltcG9ydGFudDtcbn1cbi5jaXRpZXNfbGlzdHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwcHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgei1pbmRleDogMTAwMDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tb3JkZXItYm94LWJnKTtcbn1cbi5jaXRpZXNfbGlzdCBsaXtcbiAgcGFkZGluZzogN3B4IDA7XG59XG4uY2l0aWVzX2xpc3QgbGkubm9uZXtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5pb25pYy1zZWxlY3RhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci13aWR0aDogMnB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1zdHlsZTogc29saWQgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1oZWFkZXItYWRkcmVzcy1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMCAyMHB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogNDUlO1xufVxuaW9uLXRleHRhcmVhe1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1oZWFkZXItYWRkcmVzcy1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAvL2hlaWdodDogOTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IHZhcigtLWlucHV0LWNvbG9yKTtcbn1cbmlvbi1yYWRpby1ncm91cCBpb24taXRlbTo6cGFydChuYXRpdmUpe1xuICBjb2xvcjogdmFyKC0taW5wdXQtY29sb3IpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1vcmRlci1ib3gtYmcpO1xufVxuaW9uLXJhZGlvLnJhZGlvLWNoZWNrZWQ6OnBhcnQoY29udGFpbmVyKSB7XG4gICBib3JkZXItY29sb3I6IHZhcigtLWNhdGVnb3J5LWFjdGl2ZS1iZyk7XG59XG5pb24tcmFkaW86OnBhcnQobWFyayl7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNhdGVnb3J5LWFjdGl2ZS1iZyk7XG59XG5pb24tc2VsZWN0OjpwYXJ0KHBsYWNlaG9sZGVyKSB7XG4gIG9wYWNpdHk6IDE7XG59XG4vL2lvbi1zZWxlY3QgbGFiZWx7XG4vLyAgY29sb3I6IHZhcigtLXBsYWNlaG9sZGVyKSFpbXBvcnRhbnQ7XG4vL31cbmlvbi1pbnB1dC5pb24taW52YWxpZC5oYXMtdmFsdWUgaW5wdXQge1xuICBib3JkZXItY29sb3I6ICNkYTJmNDUhaW1wb3J0YW50O1xufVxuaW9uLWlucHV0Lmlvbi1pbnZhbGlkLmlvbi1kaXJ0eSBpbnB1dCB7XG4gIGJvcmRlci1jb2xvcjogI2RhMmY0NSFpbXBvcnRhbnQ7XG59XG5pb24taW5wdXQuaW9uLWludmFsaWQuaW9uLXRvdWNoZWQgaW5wdXQge1xuICBib3JkZXItY29sb3I6ICNkYTJmNDUhaW1wb3J0YW50O1xufVxuLm9yZGVyX19ib3h7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JkZXItYm94LWJnKTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tb3JkZXItYm94LWJvcmRlcik7XG59XG4ub3JkZXJfX2JveC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6IHZhcigtLW9yZGVyLWJveC10aXRsZSk7XG59XG4uZXJyb3JtZXNzIGlvbi10ZXh0e1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1vcmRlci1ib3gtYmcpO1xufVxuLnBob25lLWNvZGV7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29udGVudC1jb2xvcik7XG59XG5pb24tbGFiZWx7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1ib2R5LXRleHQpO1xufVxuaW9uLXRvZ2dsZSB7XG4gIC0taGFuZGxlLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDU2cHg7XG4gIC0taGFuZGxlLWhlaWdodDogMjhweDtcbiAgLS1oYW5kbGUtd2lkdGg6IDI4cHg7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wcm9kdWN0cy1iZyk7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgLS1oYW5kbGUtYmFja2dyb3VuZDogdmFyKC0tb3JkZXItYm94LXRpdGxlKTtcbiAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1vcmRlci1ib3gtdGl0bGUpO1xufVxuZGl2LmluZm97XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1ib2R5LXRleHQpO1xufVxuLmhpZGVjbGFzcyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iXX0= */";

/***/ }),

/***/ 8964:
/*!********************************************************!*\
  !*** ./src/app/checkout/checkout.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<app-header title=\"Оформление заказа\" [isMain]=\"false\" [isCart]=\"true\"></app-header>\n\n<ion-content>\n  <div *ngIf=\"authorized\" class=\"ion-padding\">\n    <div class=\"order__box\">\n      <div class=\"order__box-title\">Как вы хотите получить заказ?</div>\n      <div class=\"block-wrapper\">\n        <!--<form *ngIf=\"ordering\" [formGroup]=\"ordering\">-->\n          <!--<ion-list class=\"ion-padding-end\">-->\n            <!--<ion-item lines=\"inset\">-->\n              <!--<ion-label position=\"floating\">Номер телефона*</ion-label>-->\n              <!--<ion-input #usertelfield simpleMask=\"+7 999 999-99-99\" formControlName=\"phone\" inputmode=\"tel\"-->\n                         <!--[required]=\"true\" type=\"tel\" placeholder=\"+7 999 999-99-99\"></ion-input>-->\n            <!--</ion-item>-->\n            <!--<div class=\"ion-padding-horizontal\" *ngFor=\"let validation of validationMessages.phone\">-->\n              <!--<div class=\"error-message\"-->\n                   <!--*ngIf=\"ordering.get('phone').hasError(validation.type) && (ordering.get('phone').dirty || ordering.get('phone').touched)\">-->\n                <!--<ion-text color=\"primary\">{{ validation.message }}</ion-text>-->\n              <!--</div>-->\n            <!--</div>-->\n          <!--</ion-list>-->\n        <!--</form>-->\n\n        <form *ngIf=\"deliv\" [formGroup]=\"deliv\">\n          <!--<ion-list class=\"ion-padding-end\">-->\n          <ion-radio-group (ionChange)=\"onItemRadio($event)\" formControlName=\"delivery\">\n            <ion-item lines=\"none\">\n              <ion-label>Доставка</ion-label>\n              <ion-radio slot=\"start\" value=\"2\"></ion-radio>\n            </ion-item>\n            <ion-item lines=\"none\">\n              <ion-label>Самовывоз</ion-label>\n              <ion-radio slot=\"start\" value=\"1\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n          <div class=\"ion-padding-horizontal\" *ngFor=\"let validation of validationMessages.delivery\">\n            <div class=\"error-message\"\n                 *ngIf=\"deliv.get('delivery').hasError(validation.type) && (deliv.get('delivery').dirty || deliv.get('delivery').touched)\">\n              <p>{{ validation.message }}</p>\n            </div>\n          </div>\n          <!--</ion-list>-->\n        </form>\n        <form *ngIf=\"sklad\" [formGroup]=\"sklad\">\n          <div *ngIf=\"userdelivery=='2'\">\n            <!--<div *ngIf=\"adr1||adr2\">-->\n            <!--<ion-item lines=\"none\">-->\n            <!--<p>Выберите свой адрес или введите</p>-->\n            <!--</ion-item>-->\n            <!--<ion-item lines=\"none\" *ngIf=\"adr1\">-->\n            <!--<ion-button color=\"secondary\" size=\"small\" (click)=\"chooseAdr('adr1')\">-->\n            <!--<ion-text color=\"dark\">{{adr1}}</ion-text>-->\n            <!--</ion-button>-->\n            <!--</ion-item>-->\n            <!--<ion-item lines=\"none\" *ngIf=\"adr2\">-->\n            <!--<ion-button color=\"secondary\" size=\"small\" (click)=\"chooseAdr('adr2')\">-->\n            <!--<ion-text color=\"dark\">{{adr2}}</ion-text>-->\n            <!--</ion-button>-->\n            <!--</ion-item>-->\n            <!--</div>-->\n            <ion-row>\n              <ion-col size=\"12\">\n                <div class=\"sel_item\" *ngIf=\"cities.length\">\n                  <ion-select formControlName=\"deliveryadr\" (ionChange)=\"onItemCity($event)\" [required]=\"true\" interface=\"popover\" placeholder=\"Город\">\n                    <ion-select-option *ngFor=\"let storesItem of cities\"\n                                       value=\"{{storesItem['id']}}\">{{storesItem['title']}}</ion-select-option>\n                  </ion-select>\n                  <div class=\"ion-padding-horizontal errormess deliveryadr\"\n                       *ngFor=\"let validation of validationMessages.deliveryadr\">\n                    <div class=\"error-message\"\n                         *ngIf=\"sklad.get('deliveryadr').hasError(validation.type) && (sklad.get('deliveryadr').dirty || sklad.get('deliveryadr').touched)\">\n                      <ion-text color=\"primary\">{{ validation.message }}</ion-text>\n                    </div>\n                  </div>\n                </div>\n\n\n              </ion-col>\n              <ion-col size=\"12\" *ngIf=\"is_iiko\">\n                <div class=\"sel_item\" *ngIf=\"streets.length\">\n                  <ionic-selectable\n                  formControlName=\"iikostreet\"\n                  [items]=\"streets\"\n                  placeholder=\"Улица (без номера дома)\"\n                  searchPlaceholder=\"Поиск улицы\"\n                  closeButtonText=\"Отмена\"\n                  itemValueField=\"id\"\n                  itemTextField=\"title\"\n                  [canSearch]=\"true\"\n                  (onSearch)=\"searchPorts($event)\"\n                  >\n                    <ng-template ionicSelectableSearchFailTemplate>\n                    <div class=\"ion-padding\">\n                      Улица не найдена\n                    </div>\n                  </ng-template>\n\n                    <ng-template ionicSelectableTitleTemplate>\n                      <div class=\"ion-padding\">Выберите улицу</div>\n                    </ng-template>\n                    <!--<ng-template ionicSelectableCloseButtonTemplate>-->\n                      <!--<ion-icon name=\"close-circle\" style=\"font-size: 24px;\"></ion-icon>-->\n                    <!--</ng-template>-->\n                  </ionic-selectable>\n                  <!--<ion-input placeholder=\"Улица (без номера дома)\" formControlName=\"iikostreet\" inputmode=\"text\"-->\n                             <!--maxlength=\"40\" type=\"text\" (ionChange)=\"startSearch($event)\"></ion-input>-->\n\n                  <!--<ion-select formControlName=\"iikostreet\" [required]=\"true\" interface=\"popover\" placeholder=\"Улица (без номера дома)\">-->\n                    <!--<ion-select-option *ngFor=\"let streetsItem of streets\"-->\n                                       <!--value=\"{{streetsItem['id']}}\">{{streetsItem['title']}}</ion-select-option>-->\n                  <!--</ion-select>-->\n                  <div class=\"ion-padding-horizontal errormess\"\n                       *ngFor=\"let validation of validationMessages.iikostreet\">\n                    <div class=\"error-message\"\n                         *ngIf=\"sklad.get('iikostreet').hasError(validation.type) && (sklad.get('iikostreet').dirty || sklad.get('iikostreet').touched)\">\n                      <ion-text color=\"primary\">{{ validation.message }}</ion-text>\n                    </div>\n                  </div>\n                  <!--<ul class=\"cities_list\">-->\n                    <!--<li>30 лет </li>-->\n                    <!--<li>30 лет </li>-->\n                    <!--<li>30 лет </li>-->\n                    <!--<li>30 лет </li>-->\n                    <!--<li *ngFor=\"let streetsItem of streets\" (click)=\"chooseStreet(streetsItem['title']);\" >{{streetsItem['title']}}</li>-->\n                  <!--</ul>-->\n                </div>\n                <div class=\"sel_item\" *ngIf=\"!streets.length\">\n                  <ion-input placeholder=\"Улица (без номера дома)\" formControlName=\"iikostreet\" inputmode=\"text\"\n                             maxlength=\"40\" type=\"text\"></ion-input>\n                  <div class=\"ion-padding-horizontal errormess\"\n                       *ngFor=\"let validation of validationMessages.iikostreet\">\n                    <div class=\"error-message\"\n                         *ngIf=\"sklad.get('iikostreet').hasError(validation.type) && (sklad.get('iikostreet').dirty || sklad.get('iikostreet').touched)\">\n                      <ion-text color=\"primary\">{{ validation.message }}</ion-text>\n                    </div>\n                  </div>\n                </div>\n              </ion-col>\n              <ion-col size=\"12\" *ngIf=\"!is_iiko\">\n                <ion-input placeholder=\"Улица (без номера дома)\" formControlName=\"delstreet\" inputmode=\"text\"\n                           minlength=\"4\" maxlength=\"60\" [required]=\"true\" type=\"text\"\n                           style=\"margin-top: 10px;\"></ion-input>\n                <div class=\"ion-padding-horizontal errormess\" *ngFor=\"let validation of validationMessages.delstreet\">\n                  <div class=\"error-message\"\n                       *ngIf=\"sklad.get('delstreet').hasError(validation.type) && (sklad.get('delstreet').dirty || sklad.get('delstreet').touched)\">\n                    <ion-text color=\"primary\">{{ validation.message }}</ion-text>\n                  </div>\n                </div>\n              </ion-col>\n\n              <ion-col size=\"6\">\n                <ion-input placeholder=\"Дом\" formControlName=\"delhouse\" inputmode=\"text\" maxlength=\"60\" type=\"text\"\n                           style=\"margin-top: 10px;\"></ion-input>\n                <div class=\"ion-padding-horizontal errormess\" *ngFor=\"let validation of validationMessages.delhouse\">\n                  <div class=\"error-message\"\n                       *ngIf=\"sklad.get('delhouse').hasError(validation.type) && (sklad.get('delhouse').dirty || sklad.get('delhouse').touched)\">\n                    <ion-text color=\"primary\">{{ validation.message }}</ion-text>\n                  </div>\n                </div>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-input placeholder=\"Квартира/Офис\" formControlName=\"delappart\" inputmode=\"text\" maxlength=\"60\"\n                           type=\"text\" style=\"margin-top: 10px;\"></ion-input>\n                <div class=\"ion-padding-horizontal errormess\" *ngFor=\"let validation of validationMessages.delappart\">\n                  <div class=\"error-message\"\n                       *ngIf=\"sklad.get('delappart').hasError(validation.type) && (sklad.get('delappart').dirty || sklad.get('delappart').touched)\">\n                    <ion-text color=\"primary\">{{ validation.message }}</ion-text>\n                  </div>\n                </div>\n              </ion-col>\n\n              <ion-col size=\"6\">\n                <ion-input placeholder=\"Подъезд\" formControlName=\"entrance\" inputmode=\"text\" maxlength=\"20\" type=\"text\"\n                           style=\"margin-top: 10px;\"></ion-input>\n                <div class=\"ion-padding-horizontal errormess\" *ngFor=\"let validation of validationMessages.entrance\">\n                  <div class=\"error-message\"\n                       *ngIf=\"sklad.get('entrance').hasError(validation.type) && (sklad.get('entrance').dirty || sklad.get('entrance').touched)\">\n                    <ion-text color=\"primary\">{{ validation.message }}</ion-text>\n                  </div>\n                </div>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-input placeholder=\"Этаж\" formControlName=\"floor\" inputmode=\"text\" maxlength=\"20\"\n                           type=\"text\" style=\"margin-top: 10px;\"></ion-input>\n                <div class=\"ion-padding-horizontal errormess\" *ngFor=\"let validation of validationMessages.floor\">\n                  <div class=\"error-message\"\n                       *ngIf=\"sklad.get('floor').hasError(validation.type) && (sklad.get('floor').dirty || sklad.get('floor').touched)\">\n                    <ion-text color=\"primary\">{{ validation.message }}</ion-text>\n                  </div>\n                </div>\n              </ion-col>\n            </ion-row>\n\n\n            <!--<ion-item lines=\"none\">-->\n            <!--<ion-label position=\"stacked\">Дом</ion-label>-->\n            <!--<ion-input formControlName=\"delhouse\" inputmode=\"text\" maxlength=\"60\" type=\"text\"></ion-input>-->\n            <!--</ion-item>-->\n            <!--<ion-item lines=\"none\">-->\n            <!--<ion-label position=\"stacked\">Квартира/Офис</ion-label>-->\n            <!--<ion-input formControlName=\"delappart\" inputmode=\"text\" maxlength=\"60\" type=\"text\"></ion-input>-->\n            <!--</ion-item>-->\n          </div>\n\n\n\n          <ion-row *ngIf=\"userdelivery=='1'\">\n            <ion-col size=\"12\">\n              <div class=\"sel_item\" *ngIf=\"cities.length\">\n                <ion-select (ionChange)=\"onItemPoints($event)\" formControlName=\"skladname\" [required]=\"true\"\n                            interface=\"popover\" placeholder=\"Город\" value=\"1\">\n                  <ion-select-option *ngFor=\"let storesItem of cities\"\n                                     value=\"{{storesItem['id']}}\">{{storesItem['title']}}</ion-select-option>\n                </ion-select>\n                <div class=\"ion-padding-horizontal errormess\"\n                     *ngFor=\"let validation of validationMessages.skladname\">\n                  <div class=\"error-message\"\n                       *ngIf=\"sklad.get('skladname').hasError(validation.type) && (sklad.get('skladname').dirty || sklad.get('skladname').touched)\">\n                    <ion-text color=\"primary\">{{ validation.message }}</ion-text>\n                  </div>\n                </div>\n              </div>\n            </ion-col>\n            <ion-col size=\"12\">\n              <div class=\"sel_item\" *ngIf=\"points.length\">\n                <ion-select formControlName=\"pointname\" [required]=\"true\" interface=\"popover\" placeholder=\"Где забрать\">\n                  <ion-select-option *ngFor=\"let pointsItem of points\"\n                                     value=\"{{pointsItem['id']}}\">{{pointsItem['title']}}</ion-select-option>\n                </ion-select>\n                <div class=\"ion-padding-horizontal errormess\"\n                     *ngFor=\"let validation of validationMessages.pointname\">\n                  <div class=\"error-message\"\n                       *ngIf=\"sklad.get('pointname').hasError(validation.type) && (sklad.get('pointname').dirty || sklad.get('pointname').touched)\">\n                    <ion-text color=\"primary\">{{ validation.message }}</ion-text>\n                  </div>\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n\n\n\n\n        </form>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"authorized\" class=\"ion-padding\">\n    <div class=\"order__box\">\n      <div class=\"order__box-title\">Способ оплаты</div>\n      <div class=\"block-wrapper\">\n\n        <form *ngIf=\"oplata\" [formGroup]=\"oplata\">\n          <div class=\"ion-padding-end\" *ngIf=\"oplatashow\">\n            <ion-radio-group (ionChange)=\"onMoneyRadio($event)\" formControlName=\"varpay\" [required]=\"true\">\n              <ion-item lines=\"none\">\n                <ion-label>Наличные</ion-label>\n                <ion-radio slot=\"start\" value=\"1\"></ion-radio>\n              </ion-item>\n\n              <ion-item lines=\"none\">\n                <ion-label>Банковская карта</ion-label>\n                <ion-radio slot=\"start\" value=\"2\"></ion-radio>\n              </ion-item>\n              <!--<ion-item *ngIf=\"cashPay\" lines=\"none\">-->\n                <!--<ion-label>{{cashPay.title}}</ion-label>-->\n                <!--<ion-radio slot=\"start\" value=\"{{cashPay.id}}\"></ion-radio>-->\n              <!--</ion-item>-->\n\n              <!--<ion-item *ngIf=\"cardPay\" lines=\"none\">-->\n                <!--<ion-label>{{cardPay.title}}</ion-label>-->\n                <!--<ion-radio slot=\"start\" value=\"{{cardPay.id}}\"></ion-radio>-->\n              <!--</ion-item>-->\n\n            </ion-radio-group>\n            <div class=\"ion-padding-horizontal errormess\" *ngFor=\"let validation of validationMessages.varpay\">\n              <div class=\"error-message\"\n                   *ngIf=\"oplata.get('varpay').hasError(validation.type) && (oplata.get('varpay').dirty || oplata.get('varpay').touched)\">\n                <p>{{ validation.message }}</p>\n              </div>\n            </div>\n          </div>\n        </form>\n\n        <form *ngIf=\"money\" [formGroup]=\"money\">\n          <ion-col size=\"12\" *ngIf=\"cashPay && sposoboplat==cashPay.id\">\n            <ion-input placeholder=\"Требуется сдача с\" formControlName=\"moneyval\" inputmode=\"text\"\n                       maxlength=\"20\" type=\"text\"></ion-input>\n            <div class=\"ion-padding-horizontal errormess\" *ngFor=\"let validation of validationMessages.moneyval\">\n              <div class=\"error-message\"\n                   *ngIf=\"money.get('moneyval').hasError(validation.type) && (money.get('moneyval').dirty || money.get('moneyval').touched)\">\n                <ion-text color=\"primary\">{{ validation.message }}</ion-text>\n              </div>\n            </div>\n          </ion-col>\n        </form>\n\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"promo && !is_iiko\" class=\"ion-padding\">\n    <div class=\"order__box\">\n      <div class=\"order__box-title\">Промокод</div>\n      <div class=\"block-wrapper\">\n        <form *ngIf=\"promo\" [formGroup]=\"promo\">\n          <div class=\"ion-padding-end\">\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"12\">\n                  <ion-input inputmode=\"text\" type=\"text\" formControlName=\"promovalform\" maxlength=\"10\" minlength=\"4\"  style=\"margin-top: 10px;\" placeholder=\"Введите промокод\"></ion-input>\n                  <div class=\"ion-padding-horizontal errormess\" *ngFor=\"let validation of validationMessages.promovalform\">\n                    <div class=\"error-message\"\n                         *ngIf=\"promo.get('promovalform').hasError(validation.type) && (promo.get('promovalform').dirty || promo.get('promovalform').touched)\">\n                      <ion-text color=\"primary\">{{ validation.message }}</ion-text>\n                    </div>\n                  </div>\n\n                </ion-col>\n                <ion-button (click)=\"getPromo()\" *ngIf=\"!isLoadingPromo\" expand=\"block\" style=\"width: 100%\">Проверить</ion-button>\n                <ion-button (click)=\"getPromo()\" *ngIf=\"isLoadingPromo\" expand=\"block\" style=\"width: 100%\">Отправка данных...</ion-button>\n                <ion-button (click)=\"clearPromo()\" *ngIf=\"!isLoadingPromo && isCancelPromo\" expand=\"block\" style=\"width: 100%\">Отменить промокод</ion-button>\n              </ion-row>\n              <!--</div>-->\n              <!--<ion-row *ngIf=\"!bonusval\">-->\n              <!--<ion-col size=\"12\">-->\n              <!--<small>Информация о бонусах обновляется</small>-->\n              <!--</ion-col>-->\n              <!--</ion-row>-->\n            </ion-grid>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  <!--<div class=\"ion-padding\">-->\n    <!--<div class=\"order__box\">-->\n      <!--<div class=\"order__box-title\">ТЕСТ</div>-->\n      <!--<div class=\"block-wrapper\">-->\n        <!--<ion-button expand=\"block\" (click)=\"checkOrder()\">CALCULATE</ion-button>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n  <div *ngIf=\"bonus\" class=\"ion-padding\">\n    <div class=\"order__box\">\n      <div class=\"order__box-title\">Бонусы</div>\n      <div class=\"block-wrapper\">\n        <form *ngIf=\"bonus\" [formGroup]=\"bonus\">\n          <div class=\"ion-padding-end\" *ngIf=\"bonusval\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label >У вас {{bonusval}} бонусов</ion-label>\n                <ion-input inputmode=\"number\" [step]=\"1\" type=\"number\" formControlName=\"bonusvalform\" min=\"0\" max=\"{{max_bonusesval}}\" style=\"margin-top: 10px;\"></ion-input>\n                <div class=\"ion-padding-horizontal errormess\" *ngFor=\"let validation of validationMessages.bonusvalform\">\n                  <div class=\"error-message\"\n                       *ngIf=\"bonus.get('bonusvalform').hasError(validation.type) && (bonus.get('bonusvalform').dirty || bonus.get('bonusvalform').touched)\">\n                    <ion-text color=\"primary\">{{ validation.message }}</ion-text>\n                  </div>\n                </div>\n\n              </ion-col>\n              <ion-label >Максимум для списания {{max_bonusesval}} бонусов</ion-label>\n            </ion-row>\n          <!--</div>-->\n          <!--<ion-row *ngIf=\"!bonusval\">-->\n            <!--<ion-col size=\"12\">-->\n            <!--<small>Информация о бонусах обновляется</small>-->\n            <!--</ion-col>-->\n          <!--</ion-row>-->\n            </ion-grid>\n          </div>\n          <div class=\"ion-padding-end\" *ngIf=\"!bonusval\">\n            <h3>У вас пока нет бонусов, сделайте заказ и используйте их</h3>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"authorized\" class=\"ion-padding\">\n    <div class=\"order__box\">\n      <div class=\"order__box-title\">Детали заказа</div>\n      <div class=\"block-wrapper\">\n        <form *ngIf=\"dopinfo\" [formGroup]=\"dopinfo\">\n          <ion-row>\n            <ion-col size=\"12\" class=\"ion-align-items-center ion-justify-content-between\" style=\"display: flex;min-height: 50px\">\n                <ion-label style=\"margin: 0;\">Приборы</ion-label>\n              <div [ngClass]=\"{'hideclass': priborshow}\">\n                <ion-input formControlName=\"pribor\" type=\"number\" min=\"0\" style=\"max-width: 90px;height: 40px;\"></ion-input>\n              </div>\n                <ion-toggle (ionChange)=\"triggerChange($event)\"></ion-toggle>\n            </ion-col>\n            <ion-col size=\"12\" [ngClass]=\"{'hideclass': !priborshow}\">\n              <div class=\"info\">Спасибо, что без лишнего пластика!<br>Одноразовые приборы берите, только если под рукой нет своих</div>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-textarea formControlName=\"comment\" rows=\"3\" cols=\"20\" maxlength=\"200\" placeholder=\"Комментарий к заказу\"></ion-textarea>\n              <div class=\"ion-padding-horizontal errormess\" *ngFor=\"let validation of validationMessages.comment\">\n                <div class=\"error-message\"\n                     *ngIf=\"dopinfo.get('comment').hasError(validation.type) && (dopinfo.get('comment').dirty || dopinfo.get('comment').touched)\">\n                  <ion-text color=\"primary\">{{ validation.message }}</ion-text>\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </form>\n    <!--<ion-button (click)=\"makeOrder()\" expand=\"block\">Оформить заказ</ion-button>-->\n      </div>\n    </div>\n  </div>\n  <!--<div *ngIf=\"authorized\" class=\"ion-padding\">-->\n    <!--<div class=\"order__box\">-->\n      <!--<div class=\"text-content\">-->\n        <!--<h2>Акции на доставку в Набережных Челнах!</h2>-->\n        <!--<p>Заказывать больше всегда выгоднее!</p>-->\n        <!--<ul>-->\n          <!--<li>При заказе на сумму от 1000 — <strong>Доставка бесплатно по Новому Городу!</strong></li>-->\n          <!--<li>При заказе на сумму от 1500 — <strong>Бесплатная доставка по Зяб,Гэс,Змелекесье!</strong></li>-->\n        <!--</ul>-->\n        <!--<p><strong>Зоны Доставок&nbsp; ПО Набережным Челнам</strong></p>-->\n        <!--<h2>Акции на доставку в Нижнекамске!</h2>-->\n        <!--<p>Заказывать больше всегда выгоднее!</p>-->\n        <!--<ul>-->\n          <!--<li>При заказе на сумму от 700 — <strong>Доставка бесплатно!</strong></li>-->\n        <!--</ul>-->\n        <!--<p><strong>Зоны бесплатной доставки от 700 рублей</strong></p>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n</ion-content>\n<app-footer [isCheckout]=\"true\" (btnClick)=\"eventCaught(true)\"></app-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_checkout_checkout_module_ts.js.map