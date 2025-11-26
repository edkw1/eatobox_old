"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_cart_cart_module_ts"],{

/***/ 3951:
/*!*********************************************!*\
  !*** ./src/app/cart/cart-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPageRoutingModule": () => (/* binding */ CartPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.page */ 4612);




const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_0__.CartPage
    }
];
let CartPageRoutingModule = class CartPageRoutingModule {
};
CartPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CartPageRoutingModule);



/***/ }),

/***/ 2943:
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPageModule": () => (/* binding */ CartPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-routing.module */ 3951);
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.page */ 4612);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);








let CartPageModule = class CartPageModule {
};
CartPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_0__.CartPageRoutingModule
        ],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_1__.CartPage]
    })
], CartPageModule);



/***/ }),

/***/ 4612:
/*!***********************************!*\
  !*** ./src/app/cart/cart.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPage": () => (/* binding */ CartPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _cart_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.page.html?ngResource */ 3098);
/* harmony import */ var _cart_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.page.scss?ngResource */ 4919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cart.service */ 910);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/events.service */ 106);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 2879);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/config.service */ 946);











let CartPage = class CartPage {
    constructor(api, cart, config, 
    // private order: OrdersService,
    alertController, navCtrl, events, storage, datepipe) {
        this.api = api;
        this.cart = cart;
        this.config = config;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.events = events;
        this.storage = storage;
        this.datepipe = datepipe;
        this.isLoading = false;
        this.authorized = false;
        this.dishes = [];
        // public giftsCart: Array<object> = [];
        this.giftsArr = [];
        this.giftsArrDish = [];
        this.dishesSum = 0;
        this.currDay = '';
        this.currH = '';
        this.shopOn = true;
        this.shopOnInfo = '';
        this.minCart = 0;
        this.deliverySum = 0;
        this.deliveryPrice = 0;
        this.giftPrice = 0;
        this.deliveryCount = 0;
        // this.giftsCart = this.config.gifts;
        this.giftsArr = this.cart.giftsArr;
        this.giftsArrDish = this.cart.giftsArrDish;
        this.events.getChangeCnt().subscribe((data) => {
            console.log("getChangeCnt", data);
            if (data) {
                this.giftsArrDish = this.cart.giftsArrDish;
            }
            // if(data.cart == 'added'){
            //   this.check(data.itemId)
            // //
            // }
        });
        console.log('giftsArrDishCART', this.giftsArrDish);
        console.log('giftsArr', this.giftsArr);
        this.minCart = this.config.defaultSettings.hasOwnProperty('mincart') ? parseInt(this.config.defaultSettings.mincart) : 0;
        this.deliverySum = this.config.defaultSettings.hasOwnProperty('order_price_for_free_delivery') ? parseInt(this.config.defaultSettings.order_price_for_free_delivery) : 0;
        this.deliveryPrice = this.config.defaultSettings.hasOwnProperty('delivery_price') ? parseInt(this.config.defaultSettings.delivery_price) : 0;
        this.cart.workTime();
        this.storage.get('user').then((res) => {
            // console.log('userOBJ',res);
            if (res && res.hasOwnProperty('id')) {
                // console.log("this.authorized1111",this.authorized);
                this.authorized = true;
                // this.userid = res['id'];
            }
        });
        this.events.getLoginId().subscribe((data) => {
            console.log("Cart LoginId:", data);
            if (data) {
                this.authorized = true;
                // this.storage.set('userid', data);
            }
        });
    }
    ngOnInit() {
        this.currDay = this.datepipe.transform((new Date), 'EEEE');
        this.currH = this.datepipe.transform((new Date), 'HH:mm').replace(/[^0-9]/g, '');
        // str = str.replace(/[^0-9]/g, '');
        switch (this.currDay) {
            case 'Monday':
                if ((this.cart.moStart.replace(/[^0-9]/g, '') <= this.currH) && (this.cart.moEnd.replace(/[^0-9]/g, '') > this.currH)) {
                    this.shopOn = true;
                }
                else {
                    this.shopOn = false;
                    this.shopOnInfo = 'Откроемся в ' + this.cart.tuStart;
                }
                break;
            case 'Tuesday':
                if ((this.cart.tuStart.replace(/[^0-9]/g, '') <= this.currH) && (this.cart.tuEnd.replace(/[^0-9]/g, '') > this.currH)) {
                    this.shopOn = true;
                }
                else {
                    this.shopOn = false;
                    this.shopOnInfo = 'Откроемся в ' + this.cart.weStart + ':00';
                }
                break;
            case 'Wednesday':
                if ((this.cart.weStart.replace(/[^0-9]/g, '') <= this.currH) && (this.cart.weEnd.replace(/[^0-9]/g, '') > this.currH)) {
                    this.shopOn = true;
                }
                else {
                    this.shopOn = false;
                    this.shopOnInfo = 'Откроемся в ' + this.cart.thStart + ':00';
                }
                break;
            case 'Thursday':
                if ((this.cart.thStart.replace(/[^0-9]/g, '') <= this.currH) && (this.cart.thEnd.replace(/[^0-9]/g, '') > this.currH)) {
                    this.shopOn = true;
                }
                else {
                    this.shopOn = false;
                    this.shopOnInfo = 'Откроемся в ' + this.cart.frStart + ':00';
                }
                break;
            case 'Friday':
                if ((this.cart.frStart.replace(/[^0-9]/g, '') <= this.currH) && (this.cart.frEnd.replace(/[^0-9]/g, '') > this.currH)) {
                    this.shopOn = true;
                }
                else {
                    this.shopOn = false;
                    this.shopOnInfo = 'Откроемся в ' + this.cart.stStart + ':00';
                }
                break;
            case 'Saturday':
                if ((this.cart.stStart.replace(/[^0-9]/g, '') <= this.currH) && (this.cart.stEnd.replace(/[^0-9]/g, '') > this.currH)) {
                    this.shopOn = true;
                }
                else {
                    this.shopOn = false;
                    this.shopOnInfo = 'Откроемся в ' + this.cart.suStart + ':00';
                }
                break;
            case 'Sunday':
                if ((this.cart.suStart.replace(/[^0-9]/g, '') <= this.currH) && (this.cart.suEnd.replace(/[^0-9]/g, '') > this.currH)) {
                    this.shopOn = true;
                }
                else {
                    this.shopOn = false;
                    this.shopOnInfo = 'Откроемся в ' + this.cart.moStart + ':00';
                }
                break;
            default:
                this.shopOn = true;
        }
        this.loadNoImg();
        this.addedDishes = this.cart.getAddedDishes();
        this.dishesSum = this.cart.getDishesSum();
        this.cart.sum = this.dishesSum;
        // if(this.giftsCart.length){
        //   this.giftsCart.forEach(val => {
        //     console.log(val);
        //   });
        // }
        console.log('this.dishesSumCART', this.dishesSum);
        console.log("ADDEDDISHES", this.addedDishes);
        for (const dishId in this.addedDishes) {
            if (this.addedDishes.hasOwnProperty(dishId)) {
                //LOGIC for added products whith modificators
                let isSlash = dishId.indexOf('/');
                // if(isSlash>0){
                //   console.log('///////');
                //   let id = dishId.slice(0,isSlash);
                //   this.dishes.push(CartService.getDishById(id));
                //   console.log(this.dishes['id']);
                // } else {
                //   console.log('NNNNNNN///////');
                this.dishes.push(_services_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService.getDishById(dishId));
                // }
            }
        }
        console.log('this.dishes', this.dishes);
    }
    clearCartPage() {
        this.cart.clearCart();
        this.navCtrl.navigateRoot('/');
        this.isLoading = false;
        // this.events.publishSomeData({countchange : false});
    }
    loadNoImg() {
        this.storage.get('appSet').then((res) => {
            if (res) {
                this.noimgProd = res['noimgProd'];
                console.log('this.noimg', this.noimgProd);
            }
        });
    }
};
CartPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_5__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_4__.EventsService },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe }
];
CartPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-cart',
        template: _cart_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cart_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CartPage);



/***/ }),

/***/ 4919:
/*!************************************************!*\
  !*** ./src/app/cart/cart.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".ion-padding {\n  background: var(--products-bg);\n}\n\n.ion-padding h5 {\n  color: var(--title);\n}\n\n.item-title {\n  font-size: 15px;\n}\n\n.price_prod {\n  font-size: 16px;\n}\n\n.icon_gift ion-icon {\n  margin-inline-end: 0;\n}\n\nion-item.icon_gift item-inner {\n  padding-inline-end: 0;\n}\n\nion-item.icon_gift::part(native) {\n  color: var(--input-color);\n  background: var(--order-box-bg);\n}\n\n.no-items {\n  align-items: center;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.item-image img {\n  border-radius: 5px;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\nion-button ion-text {\n  text-transform: none;\n}\n\n.basket__warning {\n  margin-top: 20px;\n  font-size: 13px;\n  line-height: 1.286;\n}\n\n.basket__warning div {\n  height: 34px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding-left: 15px;\n}\n\n.basket__present-icon {\n  margin-right: 12px;\n  border-radius: 7px;\n  width: 50px;\n  height: 50px;\n  background-color: var(--present-bg);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.basket__present-icon svg {\n  width: 30px;\n  height: 30px;\n}\n\n.basket__present-icon svg polygon, .basket__present-icon svg polyline, .basket__present-icon svg rect {\n  stroke: var(--main-color) !important;\n}\n\n.cart_clear {\n  cursor: pointer;\n  color: #737779;\n  font-size: 14px;\n  text-align: center;\n}\n\n.giftimg {\n  position: relative;\n}\n\n.basket__item-img {\n  position: absolute;\n  right: -7px;\n  bottom: -7px;\n}\n\n.basket__item-img > svg {\n  width: 25px;\n  padding: 5px;\n  fill: var(--btn-text);\n  background: var(--main-color);\n  border-radius: 50%;\n}\n\n.basket__item {\n  margin-bottom: 0;\n  padding-bottom: 15px;\n  position: relative;\n}\n\n.basket__item:not(:last-child)::before {\n  content: \"\";\n  position: absolute;\n  width: calc(100% - 15px);\n  left: 0;\n  bottom: 0;\n  height: 1px;\n  background-color: var(--basket-top-border);\n}\n\n.basket-item-name {\n  color: var(--basket-item-name);\n}\n\n.basket__item-descr {\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0;\n  margin-bottom: 5px;\n  color: var(--body-text);\n}\n\n.basket__item-descr li {\n  font-size: 13px;\n}\n\n.basket__item-descr li:not(:last-child) {\n  margin-right: 5px;\n  display: flex;\n  align-items: center;\n}\n\n.basket__item-descr li:not(:last-child)::after {\n  content: \"\";\n  display: block;\n  width: 3px;\n  height: 3px;\n  border-radius: 50px;\n  background-color: var(--body-text);\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0FBSUY7O0FBRkE7RUFDRSxvQkFBQTtBQUtGOztBQUhBO0VBQ0UscUJBQUE7QUFNRjs7QUFKQTtFQUNFLHlCQUFBO0VBQ0EsK0JBQUE7QUFPRjs7QUFMQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQVFGOztBQU5BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBU0Y7O0FBTkE7RUFDRSxvQkFBQTtBQVNGOztBQVBBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFVRjs7QUFSQTtFQUNFLFlBQUE7RUFHQSxhQUFBO0VBR0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBV0Y7O0FBVEE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUdBLGFBQUE7RUFHQSxtQkFBQTtFQUdBLHVCQUFBO0FBWUY7O0FBVkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWFGOztBQVhBO0VBQ0Usb0NBQUE7QUFjRjs7QUFaQTtFQUNFLGVBQUE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBY0Y7O0FBWkE7RUFDRSxrQkFBQTtBQWVGOztBQWJBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWdCRjs7QUFkQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBaUJGOztBQWZBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBa0JGOztBQWhCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsMENBQUE7QUFtQkY7O0FBakJBO0VBQ0UsOEJBQUE7QUFvQkY7O0FBbEJBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBR0EsYUFBQTtFQUVBLGVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQXFCRjs7QUFuQkE7RUFDRSxlQUFBO0FBc0JGOztBQXBCQTtFQUNFLGlCQUFBO0VBR0EsYUFBQTtFQUdBLG1CQUFBO0FBdUJGOztBQXJCQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUF3QkYiLCJmaWxlIjoiY2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLXBhZGRpbmd7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByb2R1Y3RzLWJnKTtcbn1cbi5pb24tcGFkZGluZyBoNXtcbiAgY29sb3I6dmFyKC0tdGl0bGUpO1xufVxuLml0ZW0tdGl0bGV7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5wcmljZV9wcm9ke1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uaWNvbl9naWZ0IGlvbi1pY29ue1xuICBtYXJnaW4taW5saW5lLWVuZDogMDtcbn1cbmlvbi1pdGVtLmljb25fZ2lmdCBpdGVtLWlubmVye1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XG59XG5pb24taXRlbS5pY29uX2dpZnQ6OnBhcnQobmF0aXZlKXtcbiAgY29sb3I6IHZhcigtLWlucHV0LWNvbG9yKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tb3JkZXItYm94LWJnKTtcbn1cbi5uby1pdGVtc3tcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLml0ZW0taW1hZ2UgaW1ne1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICAvL21heC1oZWlnaHQ6IDcwcHg7XG59XG5pb24tYnV0dG9uIGlvbi10ZXh0e1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbi5iYXNrZXRfX3dhcm5pbmcge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI4Njtcbn1cbi5iYXNrZXRfX3dhcm5pbmcgZGl2IHtcbiAgaGVpZ2h0OiAzNHB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLmJhc2tldF9fcHJlc2VudC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByZXNlbnQtYmcpO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5iYXNrZXRfX3ByZXNlbnQtaWNvbiBzdmcge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLmJhc2tldF9fcHJlc2VudC1pY29uIHN2ZyBwb2x5Z29uLC5iYXNrZXRfX3ByZXNlbnQtaWNvbiBzdmcgcG9seWxpbmUsLmJhc2tldF9fcHJlc2VudC1pY29uIHN2ZyByZWN0IHtcbiAgc3Ryb2tlOiB2YXIoLS1tYWluLWNvbG9yKSAhaW1wb3J0YW50O1xufVxuLmNhcnRfY2xlYXJ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICM3Mzc3Nzk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmdpZnRpbWd7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5iYXNrZXRfX2l0ZW0taW1ne1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtN3B4O1xuICBib3R0b206IC03cHg7XG59XG4uYmFza2V0X19pdGVtLWltZyA+IHN2ZyB7XG4gIHdpZHRoOiAyNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZpbGw6IHZhcigtLWJ0bi10ZXh0KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5iYXNrZXRfX2l0ZW17XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYmFza2V0X19pdGVtOm5vdCg6bGFzdC1jaGlsZCk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1cHgpO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNrZXQtdG9wLWJvcmRlcik7XG59XG4uYmFza2V0LWl0ZW0tbmFtZXtcbiAgY29sb3I6IHZhcigtLWJhc2tldC1pdGVtLW5hbWUpO1xufVxuLmJhc2tldF9faXRlbS1kZXNjciB7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6IHZhcigtLWJvZHktdGV4dCk7XG59XG4uYmFza2V0X19pdGVtLWRlc2NyIGxpe1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uYmFza2V0X19pdGVtLWRlc2NyIGxpOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJhc2tldF9faXRlbS1kZXNjciBsaTpub3QoOmxhc3QtY2hpbGQpOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogM3B4O1xuICBoZWlnaHQ6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS10ZXh0KTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 3098:
/*!************************************************!*\
  !*** ./src/app/cart/cart.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<app-header title=\"Ваш заказ\" [isMain]=\"false\" [isCart]=\"true\"></app-header>\n\n<ion-content>\n  <div class=\"p25\" style=\"height: 100%;\">\n    <div *ngIf=\"dishes.length\" class=\"ion-padding\">\n      <ion-grid>\n        <div *ngFor=\"let item of dishes\" >\n        <ion-row class=\"basket__item\" *ngIf=\"addedDishes[item['id']]['quantity']\">\n\n          <ion-col size=\"3\" class=\"item-image\">\n            <img *ngIf=\"item['image']\" [src]=\"item['image']\" (error)=\"img.src = noimgProd\" #img>\n            <img *ngIf=\"!item['image']\" src=\"{{noimgProd}}\">\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-align-self-center\">\n            <ion-text class=\"basket-item-name font14\">{{item['title']}}</ion-text>\n          </ion-col>\n          <ion-col size=\"3\" class=\"ion-align-self-center\" style=\"text-align: end\" *ngIf=\"!addedDishes[item['id']].modifiers.length\">\n            <ion-text class=\"price_prod priceprod basket-item-name\">{{addedDishes[item['id']].price}} <sup>Р</sup></ion-text>\n          </ion-col>\n          <ion-col size=\"3\" class=\"ion-align-self-center\" style=\"text-align: end\" *ngIf=\"addedDishes[item['id']].modifiers.length\">\n            <ion-text class=\"price_prod priceprod basket-item-name\">{{addedDishes[item['id']].price}} <sup>Р</sup></ion-text>\n          </ion-col>\n          <!--<ion-col size=\"12\" class=\"\">-->\n            <!--{{ addedDishes | json}}-->\n          <!--</ion-col>-->\n          <ion-col size=\"12\" class=\"\" *ngIf=\"addedDishes[item['id']].modifiers.length\">\n            <ul class=\"basket__item-descr\" >\n              <li *ngFor=\"let mod of addedDishes[item['id']].modifiers\">{{mod.title}}</li>\n            </ul>\n          </ion-col>\n          <ion-col size=\"12\">\n            <app-counter [id]=\"item['id']\" [count]=\"item['count']\"></app-counter>\n          </ion-col>\n        </ion-row>\n        </div>\n        <div *ngIf=\"giftsArrDish.length\">\n          <ion-text *ngIf=\"giftsArrDish.length>1\">Ваши подарки:</ion-text>\n          <ion-text *ngIf=\"giftsArrDish.length==1\">Ваш подарок:</ion-text>\n          <div *ngFor=\"let onegift of giftsArrDish\">\n            <ion-row class=\"basket__item\">\n              <ion-col size=\"3\" class=\"item-image giftimg\">\n                <img *ngIf=\"onegift['image']\" [src]=\"onegift['image']\" (error)=\"img.src = noimgProd\" #img>\n                <img *ngIf=\"!onegift['image']\" src=\"{{noimgProd}}\">\n                <div class=\"basket__item-img\">\n                  <svg viewBox=\"150 70 400 400\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><defs><symbol id=\"g\" overflow=\"visible\"><path d=\"m18.766-1.125c-0.96875 0.5-1.9805 0.875-3.0312 1.125-1.043 0.25781-2.1367 0.39062-3.2812 0.39062-3.3984 0-6.0898-0.94531-8.0781-2.8438-1.9922-1.9062-2.9844-4.4844-2.9844-7.7344 0-3.2578 0.99219-5.8359 2.9844-7.7344 1.9883-1.9062 4.6797-2.8594 8.0781-2.8594 1.1445 0 2.2383 0.13281 3.2812 0.39062 1.0508 0.25 2.0625 0.625 3.0312 1.125v4.2188c-0.98047-0.65625-1.9453-1.1406-2.8906-1.4531-0.94922-0.3125-1.9492-0.46875-3-0.46875-1.875 0-3.3516 0.60547-4.4219 1.8125-1.0742 1.1992-1.6094 2.8555-1.6094 4.9688 0 2.1055 0.53516 3.7617 1.6094 4.9688 1.0703 1.1992 2.5469 1.7969 4.4219 1.7969 1.0508 0 2.0508-0.14844 3-0.45312 0.94531-0.3125 1.9102-0.80078 2.8906-1.4688z\"></path></symbol><symbol id=\"a\" overflow=\"visible\"><path d=\"m13.734-11.141c-0.4375-0.19531-0.87109-0.34375-1.2969-0.4375-0.41797-0.10156-0.83984-0.15625-1.2656-0.15625-1.2617 0-2.2305 0.40625-2.9062 1.2188-0.67969 0.80469-1.0156 1.9531-1.0156 3.4531v7.0625h-4.8906v-15.312h4.8906v2.5156c0.625-1 1.3438-1.7266 2.1562-2.1875 0.82031-0.46875 1.8008-0.70312 2.9375-0.70312 0.16406 0 0.34375 0.011719 0.53125 0.03125 0.19531 0.011719 0.47656 0.039062 0.84375 0.078125z\"></path></symbol><symbol id=\"b\" overflow=\"visible\"><path d=\"m17.641-7.7031v1.4062h-11.453c0.125 1.1484 0.53906 2.0078 1.25 2.5781 0.70703 0.57422 1.7031 0.85938 2.9844 0.85938 1.0312 0 2.082-0.14844 3.1562-0.45312 1.082-0.3125 2.1914-0.77344 3.3281-1.3906v3.7656c-1.1562 0.4375-2.3125 0.76562-3.4688 0.98438-1.1562 0.22656-2.3125 0.34375-3.4688 0.34375-2.7734 0-4.9297-0.70312-6.4688-2.1094-1.5312-1.4062-2.2969-3.3789-2.2969-5.9219 0-2.5 0.75391-4.4609 2.2656-5.8906 1.5078-1.4375 3.582-2.1562 6.2188-2.1562 2.4062 0 4.332 0.73047 5.7812 2.1875 1.4453 1.4492 2.1719 3.3828 2.1719 5.7969zm-5.0312-1.625c0-0.92578-0.27344-1.6719-0.8125-2.2344-0.54297-0.57031-1.25-0.85938-2.125-0.85938-0.94922 0-1.7188 0.26562-2.3125 0.79688s-0.96484 1.2969-1.1094 2.2969z\"></path></symbol><symbol id=\"e\" overflow=\"visible\"><path d=\"m9.2188-6.8906c-1.0234 0-1.793 0.17188-2.3125 0.51562-0.51172 0.34375-0.76562 0.85547-0.76562 1.5312 0 0.625 0.20703 1.1172 0.625 1.4688 0.41406 0.34375 0.98828 0.51562 1.7188 0.51562 0.92578 0 1.7031-0.32812 2.3281-0.98438 0.63281-0.66406 0.95312-1.4922 0.95312-2.4844v-0.5625zm7.4688-1.8438v8.7344h-4.9219v-2.2656c-0.65625 0.92969-1.3984 1.6055-2.2188 2.0312-0.82422 0.41406-1.8242 0.625-3 0.625-1.5859 0-2.8711-0.45703-3.8594-1.375-0.99219-0.92578-1.4844-2.1289-1.4844-3.6094 0-1.7891 0.61328-3.1016 1.8438-3.9375 1.2383-0.84375 3.1797-1.2656 5.8281-1.2656h2.8906v-0.39062c0-0.76953-0.30859-1.332-0.92188-1.6875-0.61719-0.36328-1.5703-0.54688-2.8594-0.54688-1.0547 0-2.0312 0.10547-2.9375 0.3125-0.89844 0.21094-1.7305 0.52344-2.5 0.9375v-3.7344c1.0391-0.25 2.0859-0.44141 3.1406-0.57812 1.0625-0.13281 2.125-0.20312 3.1875-0.20312 2.7578 0 4.75 0.54688 5.9688 1.6406 1.2266 1.0859 1.8438 2.8555 1.8438 5.3125z\"></path></symbol><symbol id=\"d\" overflow=\"visible\"><path d=\"m7.7031-19.656v4.3438h5.0469v3.5h-5.0469v6.5c0 0.71094 0.14062 1.1875 0.42188 1.4375s0.83594 0.375 1.6719 0.375h2.5156v3.5h-4.1875c-1.9375 0-3.3125-0.39844-4.125-1.2031-0.80469-0.8125-1.2031-2.1797-1.2031-4.1094v-6.5h-2.4219v-3.5h2.4219v-4.3438z\"></path></symbol><symbol id=\"k\" overflow=\"visible\"><path d=\"m12.766-13.078v-8.2031h4.9219v21.281h-4.9219v-2.2188c-0.66797 0.90625-1.4062 1.5703-2.2188 1.9844s-1.7578 0.625-2.8281 0.625c-1.8867 0-3.4336-0.75-4.6406-2.25-1.2109-1.5-1.8125-3.4258-1.8125-5.7812 0-2.3633 0.60156-4.2969 1.8125-5.7969 1.207-1.5 2.7539-2.25 4.6406-2.25 1.0625 0 2 0.21484 2.8125 0.64062 0.82031 0.42969 1.5664 1.0859 2.2344 1.9688zm-3.2188 9.9219c1.0391 0 1.8359-0.37891 2.3906-1.1406 0.55078-0.76953 0.82812-1.8828 0.82812-3.3438 0-1.457-0.27734-2.5664-0.82812-3.3281-0.55469-0.76953-1.3516-1.1562-2.3906-1.1562-1.043 0-1.8398 0.38672-2.3906 1.1562-0.55469 0.76172-0.82812 1.8711-0.82812 3.3281 0 1.4609 0.27344 2.5742 0.82812 3.3438 0.55078 0.76172 1.3477 1.1406 2.3906 1.1406z\"></path></symbol><symbol id=\"j\" overflow=\"visible\"><path d=\"m10.5-3.1562c1.0508 0 1.8516-0.37891 2.4062-1.1406 0.55078-0.76953 0.82812-1.8828 0.82812-3.3438 0-1.457-0.27734-2.5664-0.82812-3.3281-0.55469-0.76953-1.3555-1.1562-2.4062-1.1562-1.0547 0-1.8594 0.38672-2.4219 1.1562-0.55469 0.77344-0.82812 1.8828-0.82812 3.3281 0 1.4492 0.27344 2.5586 0.82812 3.3281 0.5625 0.77344 1.3672 1.1562 2.4219 1.1562zm-3.25-9.9219c0.67578-0.88281 1.4219-1.5391 2.2344-1.9688 0.82031-0.42578 1.7656-0.64062 2.8281-0.64062 1.8945 0 3.4453 0.75 4.6562 2.25 1.207 1.5 1.8125 3.4336 1.8125 5.7969 0 2.3555-0.60547 4.2812-1.8125 5.7812-1.2109 1.5-2.7617 2.25-4.6562 2.25-1.0625 0-2.0078-0.21094-2.8281-0.625-0.8125-0.42578-1.5586-1.0859-2.2344-1.9844v2.2188h-4.8906v-21.281h4.8906z\"></path></symbol><symbol id=\"i\" overflow=\"visible\"><path d=\"m0.34375-15.312h4.8906l4.125 10.391 3.5-10.391h4.8906l-6.4375 16.766c-0.64844 1.6953-1.4023 2.8828-2.2656 3.5625-0.86719 0.6875-2 1.0312-3.4062 1.0312h-2.8438v-3.2188h1.5312c0.83203 0 1.4375-0.13672 1.8125-0.40625 0.38281-0.26172 0.67969-0.73047 0.89062-1.4062l0.14062-0.42188z\"></path></symbol><symbol id=\"h\" overflow=\"visible\"><path d=\"m20.922-1.5156c-1.3125 0.63672-2.6797 1.1172-4.0938 1.4375-1.4062 0.3125-2.8672 0.46875-4.375 0.46875-3.3984 0-6.0898-0.94531-8.0781-2.8438-1.9922-1.9062-2.9844-4.4844-2.9844-7.7344 0-3.2891 1.0078-5.8789 3.0312-7.7656 2.0312-1.8828 4.8047-2.8281 8.3281-2.8281 1.3516 0 2.6484 0.13281 3.8906 0.39062 1.25 0.25 2.4258 0.625 3.5312 1.125v4.2188c-1.1484-0.64453-2.2812-1.125-3.4062-1.4375-1.125-0.32031-2.25-0.48438-3.375-0.48438-2.1055 0-3.7266 0.58984-4.8594 1.7656-1.125 1.168-1.6875 2.8398-1.6875 5.0156 0 2.1562 0.54688 3.8242 1.6406 5 1.0938 1.1797 2.6445 1.7656 4.6562 1.7656 0.53906 0 1.0469-0.03125 1.5156-0.09375 0.47656-0.070313 0.89844-0.17969 1.2656-0.32812v-3.9688h-3.2031v-3.5156h8.2031z\"></path></symbol><symbol id=\"u\" overflow=\"visible\"><path d=\"m12.766-2.5938c-0.66797 0.88672-1.4062 1.543-2.2188 1.9688-0.8125 0.41797-1.7578 0.625-2.8281 0.625-1.8672 0-3.4062-0.73438-4.625-2.2031-1.2188-1.4766-1.8281-3.3516-1.8281-5.625 0-2.2891 0.60938-4.1641 1.8281-5.625 1.2188-1.4688 2.7578-2.2031 4.625-2.2031 1.0703 0 2.0156 0.21484 2.8281 0.64062 0.8125 0.41797 1.5508 1.0742 2.2188 1.9688v-2.2656h4.9219v13.766c0 2.457-0.77734 4.3359-2.3281 5.6406-1.5547 1.3008-3.8086 1.9531-6.7656 1.9531-0.94922 0-1.8711-0.074219-2.7656-0.21875-0.89844-0.14844-1.7969-0.37109-2.7031-0.67188v-3.8125c0.86328 0.48828 1.7031 0.85156 2.5156 1.0938 0.82031 0.23828 1.6484 0.35938 2.4844 0.35938 1.6016 0 2.7734-0.35156 3.5156-1.0469 0.75-0.69922 1.125-1.7969 1.125-3.2969zm-3.2188-9.5312c-1.0117 0-1.8047 0.375-2.375 1.125-0.5625 0.74219-0.84375 1.7969-0.84375 3.1719 0 1.3984 0.26953 2.4609 0.8125 3.1875 0.55078 0.71875 1.3516 1.0781 2.4062 1.0781 1.0195 0 1.8125-0.36719 2.375-1.1094 0.5625-0.75 0.84375-1.8008 0.84375-3.1562 0-1.375-0.28125-2.4297-0.84375-3.1719-0.5625-0.75-1.3555-1.125-2.375-1.125z\"></path></symbol><symbol id=\"c\" overflow=\"visible\"><path d=\"m9.6406-12.188c-1.0859 0-1.9141 0.39062-2.4844 1.1719-0.57422 0.78125-0.85938 1.9062-0.85938 3.375s0.28516 2.5938 0.85938 3.375c0.57031 0.77344 1.3984 1.1562 2.4844 1.1562 1.0625 0 1.875-0.38281 2.4375-1.1562 0.57031-0.78125 0.85938-1.9062 0.85938-3.375s-0.28906-2.5938-0.85938-3.375c-0.5625-0.78125-1.375-1.1719-2.4375-1.1719zm0-3.5c2.6328 0 4.6914 0.71484 6.1719 2.1406 1.4766 1.418 2.2188 3.3867 2.2188 5.9062 0 2.5117-0.74219 4.4805-2.2188 5.9062-1.4805 1.418-3.5391 2.125-6.1719 2.125-2.6484 0-4.7148-0.70703-6.2031-2.125-1.4922-1.4258-2.2344-3.3945-2.2344-5.9062 0-2.5195 0.74219-4.4883 2.2344-5.9062 1.4883-1.4258 3.5547-2.1406 6.2031-2.1406z\"></path></symbol><symbol id=\"t\" overflow=\"visible\"><path d=\"m14.312-14.828v3.7188c-1.043-0.4375-2.0547-0.76562-3.0312-0.98438-0.98047-0.21875-1.9023-0.32812-2.7656-0.32812-0.92969 0-1.6211 0.11719-2.0781 0.34375-0.44922 0.23047-0.67188 0.58984-0.67188 1.0781 0 0.38672 0.17188 0.68359 0.51562 0.89062 0.34375 0.21094 0.95703 0.36719 1.8438 0.46875l0.85938 0.125c2.5078 0.32422 4.1953 0.85156 5.0625 1.5781 0.86328 0.73047 1.2969 1.8711 1.2969 3.4219 0 1.6367-0.60547 2.8672-1.8125 3.6875-1.1992 0.8125-2.9922 1.2188-5.375 1.2188-1.0234 0-2.0742-0.078125-3.1562-0.23438-1.0742-0.15625-2.1797-0.39453-3.3125-0.71875v-3.7188c0.96875 0.48047 1.9609 0.83984 2.9844 1.0781 1.0312 0.23047 2.0781 0.34375 3.1406 0.34375 0.95703 0 1.6758-0.12891 2.1562-0.39062 0.47656-0.26953 0.71875-0.66406 0.71875-1.1875 0-0.4375-0.16797-0.75781-0.5-0.96875-0.33594-0.21875-0.99609-0.38281-1.9844-0.5l-0.85938-0.10938c-2.1797-0.26953-3.7031-0.77344-4.5781-1.5156-0.875-0.73828-1.3125-1.8594-1.3125-3.3594 0-1.625 0.55078-2.8281 1.6562-3.6094 1.1133-0.78906 2.8203-1.1875 5.125-1.1875 0.89453 0 1.8359 0.074219 2.8281 0.21875 1 0.13672 2.082 0.35156 3.25 0.64062z\"></path></symbol><symbol id=\"f\" overflow=\"visible\"><path d=\"m17.75-9.3281v9.3281h-4.9219v-7.1406c0-1.3203-0.03125-2.2344-0.09375-2.7344s-0.16797-0.86719-0.3125-1.1094c-0.1875-0.3125-0.44922-0.55469-0.78125-0.73438-0.32422-0.17578-0.69531-0.26562-1.1094-0.26562-1.0234 0-1.8242 0.39844-2.4062 1.1875-0.58594 0.78125-0.875 1.8711-0.875 3.2656v7.5312h-4.8906v-15.312h4.8906v2.2344c0.73828-0.88281 1.5195-1.5391 2.3438-1.9688 0.83203-0.42578 1.75-0.64062 2.75-0.64062 1.7695 0 3.1133 0.54688 4.0312 1.6406 0.91406 1.0859 1.375 2.6562 1.375 4.7188z\"></path></symbol><symbol id=\"s\" overflow=\"visible\"><path d=\"m12.422-21.281v3.2188h-2.7031c-0.6875 0-1.1719 0.125-1.4531 0.375-0.27344 0.25-0.40625 0.6875-0.40625 1.3125v1.0625h4.1875v3.5h-4.1875v11.812h-4.8906v-11.812h-2.4375v-3.5h2.4375v-1.0625c0-1.6641 0.46094-2.8984 1.3906-3.7031 0.92578-0.80078 2.3672-1.2031 4.3281-1.2031z\"></path></symbol><symbol id=\"r\" overflow=\"visible\"><path d=\"m16.547-12.766c0.61328-0.94531 1.3477-1.6719 2.2031-2.1719 0.85156-0.5 1.7891-0.75 2.8125-0.75 1.7578 0 3.0977 0.54688 4.0156 1.6406 0.92578 1.0859 1.3906 2.6562 1.3906 4.7188v9.3281h-4.9219v-7.9844-0.35938c0.007813-0.13281 0.015625-0.32031 0.015625-0.5625 0-1.082-0.16406-1.8633-0.48438-2.3438-0.3125-0.48828-0.82422-0.73438-1.5312-0.73438-0.92969 0-1.6484 0.38672-2.1562 1.1562-0.51172 0.76172-0.77344 1.8672-0.78125 3.3125v7.5156h-4.9219v-7.9844c0-1.6953-0.14844-2.7852-0.4375-3.2656-0.29297-0.48828-0.8125-0.73438-1.5625-0.73438-0.9375 0-1.6641 0.38672-2.1719 1.1562-0.51172 0.76172-0.76562 1.8594-0.76562 3.2969v7.5312h-4.9219v-15.312h4.9219v2.2344c0.60156-0.86328 1.2891-1.5156 2.0625-1.9531 0.78125-0.4375 1.6406-0.65625 2.5781-0.65625 1.0625 0 2 0.25781 2.8125 0.76562 0.8125 0.51172 1.4258 1.2305 1.8438 2.1562z\"></path></symbol><symbol id=\"q\" overflow=\"visible\"><path d=\"m17.75-9.3281v9.3281h-4.9219v-7.1094c0-1.3438-0.03125-2.2656-0.09375-2.7656s-0.16797-0.86719-0.3125-1.1094c-0.1875-0.3125-0.44922-0.55469-0.78125-0.73438-0.32422-0.17578-0.69531-0.26562-1.1094-0.26562-1.0234 0-1.8242 0.39844-2.4062 1.1875-0.58594 0.78125-0.875 1.8711-0.875 3.2656v7.5312h-4.8906v-21.281h4.8906v8.2031c0.73828-0.88281 1.5195-1.5391 2.3438-1.9688 0.83203-0.42578 1.75-0.64062 2.75-0.64062 1.7695 0 3.1133 0.54688 4.0312 1.6406 0.91406 1.0859 1.375 2.6562 1.375 4.7188z\"></path></symbol><symbol id=\"p\" overflow=\"visible\"><path d=\"m2.5781-20.406h5.875l7.4219 14v-14h4.9844v20.406h-5.875l-7.4219-14v14h-4.9844z\"></path></symbol><symbol id=\"o\" overflow=\"visible\"><path d=\"m2.1875-5.9688v-9.3438h4.9219v1.5312c0 0.83594-0.007813 1.875-0.015625 3.125-0.011719 1.25-0.015625 2.0859-0.015625 2.5 0 1.2422 0.03125 2.1328 0.09375 2.6719 0.070313 0.54297 0.17969 0.93359 0.32812 1.1719 0.20703 0.32422 0.47266 0.57422 0.79688 0.75 0.32031 0.16797 0.69141 0.25 1.1094 0.25 1.0195 0 1.8203-0.39062 2.4062-1.1719 0.58203-0.78125 0.875-1.8672 0.875-3.2656v-7.5625h4.8906v15.312h-4.8906v-2.2188c-0.74219 0.89844-1.5234 1.5586-2.3438 1.9844-0.82422 0.41406-1.7344 0.625-2.7344 0.625-1.7617 0-3.1055-0.53906-4.0312-1.625-0.92969-1.082-1.3906-2.6602-1.3906-4.7344z\"></path></symbol><symbol id=\"n\" overflow=\"visible\"><path d=\"m2.5781-20.406h8.7344c2.5938 0 4.582 0.57812 5.9688 1.7344 1.3945 1.1484 2.0938 2.7891 2.0938 4.9219 0 2.1367-0.69922 3.7812-2.0938 4.9375-1.3867 1.1562-3.375 1.7344-5.9688 1.7344h-3.4844v7.0781h-5.25zm5.25 3.8125v5.7031h2.9219c1.0195 0 1.8047-0.25 2.3594-0.75 0.5625-0.5 0.84375-1.2031 0.84375-2.1094 0-0.91406-0.28125-1.6172-0.84375-2.1094-0.55469-0.48828-1.3398-0.73438-2.3594-0.73438z\"></path></symbol><symbol id=\"m\" overflow=\"visible\"><path d=\"m2.3594-15.312h4.8906v15.031c0 2.0508-0.49609 3.6172-1.4844 4.7031-0.98047 1.082-2.4062 1.625-4.2812 1.625h-2.4219v-3.2188h0.85938c0.92578 0 1.5625-0.21094 1.9062-0.625 0.35156-0.41797 0.53125-1.2461 0.53125-2.4844zm0-5.9688h4.8906v4h-4.8906z\"></path></symbol><symbol id=\"l\" overflow=\"visible\"><path d=\"m14.719-14.828v3.9844c-0.65625-0.45703-1.3242-0.79688-2-1.0156-0.66797-0.21875-1.3594-0.32812-2.0781-0.32812-1.3672 0-2.4336 0.40234-3.2031 1.2031-0.76172 0.79297-1.1406 1.9062-1.1406 3.3438 0 1.4297 0.37891 2.543 1.1406 3.3438 0.76953 0.79297 1.8359 1.1875 3.2031 1.1875 0.75781 0 1.4844-0.10938 2.1719-0.32812 0.6875-0.22656 1.3203-0.56641 1.9062-1.0156v4c-0.76172 0.28125-1.5391 0.48828-2.3281 0.625-0.78125 0.14453-1.5742 0.21875-2.375 0.21875-2.7617 0-4.9219-0.70703-6.4844-2.125-1.5547-1.4141-2.3281-3.3828-2.3281-5.9062 0-2.5312 0.77344-4.5039 2.3281-5.9219 1.5625-1.4141 3.7227-2.125 6.4844-2.125 0.80078 0 1.5938 0.074219 2.375 0.21875 0.78125 0.13672 1.5547 0.35156 2.3281 0.64062z\"></path></symbol></defs><g><path d=\"m182 235.2v44.801c0.007812 13.594 6.1875 26.449 16.801 34.945v88.254c0 14.852 5.8984 29.098 16.402 39.598 10.5 10.504 24.746 16.402 39.598 16.402h190.4c14.852 0 29.098-5.8984 39.598-16.402 10.504-10.5 16.402-24.746 16.402-39.598v-88.254c10.613-8.4961 16.793-21.352 16.801-34.945v-44.801c-0.011719-10.648-3.8203-20.945-10.738-29.039-6.9141-8.0977-16.488-13.469-27.004-15.145 5.6523-15.254 5.5156-32.051-0.39453-47.207-5.0391-12.922-13.934-23.98-25.477-31.676-11.539-7.6914-25.168-11.648-39.035-11.332-25.098 0.56641-48.805 11.641-65.352 30.52-16.535-18.867-40.219-29.938-65.297-30.52-13.875-0.32812-27.516 3.6211-39.066 11.316-11.555 7.6953-20.457 18.762-25.5 31.691-5.9141 15.156-6.0547 31.957-0.39453 47.207-10.516 1.6758-20.09 7.0469-27.004 15.145-6.918 8.0938-10.727 18.391-10.738 29.039zm235.2-89.598c8.0039 0 15.398 4.2695 19.398 11.199 4.0039 6.9297 4.0039 15.469 0 22.398-4 6.9297-11.395 11.199-19.398 11.199h-44.801c0-11.879 4.7227-23.273 13.125-31.676 8.3984-8.4023 19.793-13.121 31.676-13.121zm-44.801 89.598h100.8v44.801h-100.8zm0 89.602h84v78.398c0 2.9727-1.1797 5.8203-3.2773 7.9219-2.1016 2.0977-4.9492 3.2773-7.9219 3.2773h-72.801zm-44.797 89.598h-72.801c-6.1875 0-11.199-5.0117-11.199-11.199v-78.398h84zm-44.801-268.8c11.883 0 23.277 4.7188 31.676 13.121 8.4023 8.4023 13.125 19.797 13.125 31.676h-44.801c-8.0039 0-15.398-4.2695-19.398-11.199-4.0039-6.9297-4.0039-15.469 0-22.398 4-6.9297 11.395-11.199 19.398-11.199zm-56 89.598h100.8v44.801h-100.8z\"></path></g></svg>\n                </div>\n              </ion-col>\n              <ion-col size=\"6\" class=\"ion-align-self-center\">\n                <ion-text class=\"basket-item-name font14\">{{onegift['title']}}</ion-text>\n              </ion-col>\n              <ion-col size=\"3\" class=\"ion-align-self-center\" style=\"text-align: end\">\n                <ion-text class=\"price_prod priceprod basket-item-name\">1 <sup>Р</sup></ion-text>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n        <div *ngIf=\"deliveryPrice && (deliverySum - cart.sum)>0\">\n          <ion-row class=\"ion-justify-content-between\">\n            <ion-col size=\"6\">\n              <div class=\"body-text\">Доставка</div>\n            </ion-col>\n            <ion-col size=\"6\">\n              <div class=\"price\" style=\"text-align: end;\">{{deliveryPrice}} <sup>₽</sup></div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <div class=\"basket-error\">\n                Закажите еще на {{deliverySum - cart.sum}} ₽ для бесплатной доставки\n              </div>\n\n            </ion-col>\n          </ion-row>\n        </div>\n\n        <div *ngIf=\"giftsArr.length && (cart.giftsSum - cart.sum)>0\" style=\"margin-top: 20px;\">\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"8\" class=\"ion-align-items-center\">\n              <div style=\"display: flex;align-items: center;\">\n              <div class=\"basket__present-icon\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" enable-background=\"new 0 0 32 32\" version=\"1.1\" viewBox=\"0 0 32 32\" xml:space=\"preserve\">\n                    <rect fill=\"none\" height=\"16\" stroke=\"#000000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"2\" width=\"24\" x=\"4\" y=\"14\"></rect>\n                    <rect fill=\"none\" height=\"6\" stroke=\"#000000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"2\" width=\"28\" x=\"2\" y=\"8\"></rect>\n                    <rect fill=\"none\" height=\"16\" stroke=\"#000000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"2\" width=\"6\" x=\"13\" y=\"14\"></rect>\n                    <rect fill=\"none\" height=\"6\" stroke=\"#000000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"2\" width=\"6\" x=\"13\" y=\"8\"></rect>\n                    <polygon fill=\"none\" points=\"16,7 19,4 18,2 16,2 14,2 13,4\" stroke=\"#000000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"2\"></polygon>\n                    <polyline fill=\"none\" points=\"19,4 23,3 25,5 25,8\" stroke=\"#000000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"2\"></polyline>\n                    <polyline fill=\"none\" points=\"13,4 9,3 7,5 7,8\" stroke=\"#000000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"2\"></polyline>\n                  </svg>\n              </div>\n              <div class=\"body-text\">До подарка осталось</div>\n              </div>\n            </ion-col>\n            <ion-col size=\"4\">\n              <div class=\"price\" style=\"text-align: end;\">{{cart.giftsSum - cart.sum}} <sup>₽</sup></div>\n            </ion-col>\n          </ion-row>\n        </div>\n\n      </ion-grid>\n\n\n      <ion-progress-bar *ngIf=\"isLoading\" type=\"indeterminate\" color=\"mainapp\"></ion-progress-bar>\n      <br>\n      <!--<ion-button (click)=\"clearCartPage()\" color=\"dark\" expand=\"block\" fill=\"clear\">-->\n      <!--<ion-text class=\"cart_clear\">Очистить корзину</ion-text>-->\n      <!--</ion-button>-->\n    </div>\n    <div *ngIf=\"!dishes.length\" class=\"ion-text-center ion-justify-content-center no-items\">\n      <div class=\"ion-margin-bottom no-items-icon\">\n        <ion-icon icon=\"cart\" color=\"medium\" size=\"large\"></ion-icon>\n      </div>\n      <div class=\"no-items-text\">\n        <ion-text color=\"medium\">Корзина пуста</ion-text>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n<div *ngIf=\"!shopOn && cart.sum\" class=\"ion-padding\">\n  <ion-text color=\"secondary\"><h4 style=\"font-weight:bold\">Сожалеем, уже не принимаем заказы</h4></ion-text>\n  <h5 *ngIf=\"shopOnInfo\">{{shopOnInfo}}</h5>\n</div>\n\n<div *ngIf=\"shopOn\">\n  <div *ngIf=\"cart.sum >= minCart\">\n    <app-footer *ngIf=\"shopOn\" [isCart]=\"true\" [isLogin]=\"authorized\"></app-footer>\n  </div>\n  <div *ngIf=\"cart.sum < minCart\">\n    <ion-button expand=\"block\" style=\"margin: 0;\">Минимальная сумма заказа {{minCart}} <sup>Р</sup></ion-button>\n  </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_cart_cart_module_ts.js.map