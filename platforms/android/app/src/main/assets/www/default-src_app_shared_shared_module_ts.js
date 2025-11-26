"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_shared_shared_module_ts"],{

/***/ 448:
/*!***************************************************************************************!*\
  !*** ./node_modules/ngx-ion-simple-mask/__ivy_ngcc__/fesm2015/ngx-ion-simple-mask.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimpleMaskDirective": () => (/* binding */ SimpleMaskDirective),
/* harmony export */   "SimpleMaskPipe": () => (/* binding */ SimpleMaskPipe),
/* harmony export */   "SimpleMaskModule": () => (/* binding */ SimpleMaskModule),
/* harmony export */   "ɵa": () => (/* binding */ SimpleMask)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1777);
/**
 * @license ngx-ion-simple-mask
 * MIT license
 */




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


class SimpleMask {
    constructor() {
        this.patterns = {
            '9': new RegExp('[0-9]'),
            'a': new RegExp('[a-z]'),
            'A': new RegExp('[A-Z]'),
            'x': new RegExp('[a-zA-Z]'),
            '*': new RegExp('[a-zA-Z0-9]'),
            '~': new RegExp('[-\+]')
        };
    }
    /**
     * set new patterns
     * @param {?} patterns new patterns
     * @param {?=} clear true if to clear old patterns
     * @return {?}
     */
    setPatterns(patterns, clear = false) {
        if (!patterns) {
            return;
        }
        try {
            JSON.parse(JSON.stringify(patterns));
        }
        catch (_a) {
            throw new Error('Invalid patterns object');
        }
        if (clear) {
            this.patterns = {};
        }
        for (const key in patterns) {
            if (patterns.hasOwnProperty(key)) {
                this.patterns[key] = new RegExp(patterns[key]);
            }
        }
    }
    /**
     * checks if the char is a pattern, that is, if is a pattern
     * @param {?} char value to check
     * @return {?} true is a pattern, false if is not
     */
    isPattern(char) {
        for (const key in this.patterns) {
            if (this.patterns.hasOwnProperty(key) && key === char) {
                return true;
            }
        }
        return false;
    }
    /**
     * Fits the value with the mask and return a formatted value
     * @param {?} value value to fit
     * @return {?} formatted value
     */
    fitToMask(value) {
        /** @type {?} */
        let newValue = '';
        // value size adjust to mask size
        /** @type {?} */
        const size = this.mask.replace(/\\(?!\\)/g, '').length;
        value = value.substring(0, size);
        if (this.fillWithExpected) {
            /** @type {?} */
            let i = 0;
            /** @type {?} */
            let prefix = true;
            for (let j = 0; j < this.mask.length; j++) {
                // ignore next special char
                if (this.mask[j] === '\\') {
                    newValue += this.mask[j + 1];
                    j++;
                    continue;
                }
                // test special char
                if (this.isPattern(this.mask[j])) {
                    if (this.patterns[this.mask[j]].test(value[i])) {
                        newValue += value[i];
                        i++;
                    }
                    else {
                        return newValue;
                    }
                }
                else {
                    if (prefix && !value[i]) {
                        return newValue;
                    }
                    newValue += this.mask[j];
                    if (this.mask[j] === value[i] && prefix) {
                        i++;
                    }
                    else {
                        prefix = false;
                    }
                }
            }
        }
        else {
            for (let i = 0, j = 0; j < this.mask.length && i < value.length; i++, j++) {
                // ignore next special char
                if (this.mask[j] === '\\') {
                    newValue += this.mask[j + 1];
                    j++;
                    continue;
                }
                // test special char
                if (this.isPattern(this.mask[j])) {
                    if (this.patterns[this.mask[j]].test(value[i])) {
                        newValue += value[i];
                    }
                    else {
                        return newValue;
                    }
                }
                else {
                    newValue += this.mask[j];
                    if (this.mask[j] !== value[i]) {
                        i--;
                    }
                }
            }
        }
        return newValue;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SimpleMaskDirective extends SimpleMask {
    /**
     * @param {?} renderer
     * @param {?=} ngControl
     */
    constructor(renderer, ngControl) {
        super();
        this.renderer = renderer;
        this.ngControl = ngControl;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onInput(event) {
        /** @type {?} */
        const el = (/** @type {?} */ (event.target));
        /** @type {?} */
        const value = this.fitToMask(el.value);
        this.writeValue(value, event.target);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onBlur(event) {
        /** @type {?} */
        const el = (/** @type {?} */ (event.target));
        if (el.value && !this.matchMask(el.value) && this.clearIfNotMatch) {
            this.writeValue(null, event.target);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    inputOnblur(event) {
        this.onBlur(event);
    }
    /**
     * @param {?} values
     * @return {?}
     */
    set addPatterns(values) {
        this.setPatterns(values);
    }
    /**
     * @param {?} values
     * @return {?}
     */
    set newPatterns(values) {
        this.setPatterns(values, true);
    }
    /**
     * write the new value on input element and form control
     * @param {?} value value to write
     * @param {?} target input element
     * @return {?}
     */
    writeValue(value, target) {
        target.value = value;
        this.renderer.setProperty(target, 'value', value);
        if (this.ngControl && this.ngControl.control) {
            this.ngControl.control.setValue(value);
            this.ngControl.control.markAsDirty();
            this.ngControl.control.updateValueAndValidity();
        }
    }
    /**
     * Checks if the value matches with the mask and is completed
     * @param {?} value value to check
     * @return {?} true if match, false if not match
     */
    matchMask(value) {
        // value size adjust to mask size
        /** @type {?} */
        const size = this.mask.replace(/\\(?!\\)/g, '').length;
        value = value.substring(0, size);
        return value.length === size ? true : false;
    }
}
SimpleMaskDirective.ɵfac = function SimpleMaskDirective_Factory(t) { return new (t || SimpleMaskDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl, 2)); };
SimpleMaskDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SimpleMaskDirective, selectors: [["", "simpleMask", ""]], hostBindings: function SimpleMaskDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SimpleMaskDirective_input_HostBindingHandler($event) { return ctx.onInput($event); })("blur", function SimpleMaskDirective_blur_HostBindingHandler($event) { return ctx.onBlur($event); })("ionBlur", function SimpleMaskDirective_ionBlur_HostBindingHandler($event) { return ctx.inputOnblur($event); });
    } }, inputs: { addPatterns: "addPatterns", newPatterns: "newPatterns", mask: ["simpleMask", "mask"], clearIfNotMatch: "clearIfNotMatch", fillWithExpected: "fillWithExpected" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
SimpleMaskDirective.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SimpleMaskDirective, factory: SimpleMaskDirective.ɵfac });
/** @nocollapse */
SimpleMaskDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self }] }
];
SimpleMaskDirective.propDecorators = {
    mask: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['simpleMask',] }],
    clearIfNotMatch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    fillWithExpected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    onInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['input', ['$event'],] }],
    onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['blur', ['$event'],] }],
    inputOnblur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['ionBlur', ['$event'],] }],
    addPatterns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['addPatterns',] }],
    newPatterns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['newPatterns',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimpleMaskDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[simpleMask]'
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }] }]; }, { 
    /**
     * @param {?} event
     * @return {?}
     */
    onInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['input', ['$event']]
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['blur', ['$event']]
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    inputOnblur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['ionBlur', ['$event']]
        }], addPatterns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['addPatterns']
        }], newPatterns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['newPatterns']
        }], mask: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['simpleMask']
        }], clearIfNotMatch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], fillWithExpected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SimpleMaskPipe extends SimpleMask {
    constructor() {
        super();
    }
    /**
     * @param {?} value
     * @param {?} mask
     * @param {?=} patterns
     * @param {?=} clear
     * @return {?}
     */
    transform(value, mask, patterns, clear = false) {
        if (mask) {
            this.mask = mask;
        }
        else {
            throw new Error('A mask is required on simpleMask pipe');
        }
        if (patterns) {
            this.setPatterns(patterns, clear);
        }
        return this.fitToMask(value);
    }
}
SimpleMaskPipe.ɵfac = function SimpleMaskPipe_Factory(t) { return new (t || SimpleMaskPipe)(); };
SimpleMaskPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "simpleMask", type: SimpleMaskPipe, pure: true });
/** @nocollapse */
SimpleMaskPipe.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimpleMaskPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{
                name: 'simpleMask'
            }]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SimpleMaskModule {
}
SimpleMaskModule.ɵfac = function SimpleMaskModule_Factory(t) { return new (t || SimpleMaskModule)(); };
SimpleMaskModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SimpleMaskModule });
SimpleMaskModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimpleMaskModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [
                    SimpleMaskDirective,
                    SimpleMaskPipe
                ],
                exports: [
                    SimpleMaskDirective,
                    SimpleMaskPipe
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SimpleMaskModule, { declarations: [SimpleMaskDirective, SimpleMaskPipe], exports: [SimpleMaskDirective, SimpleMaskPipe] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */





/***/ }),

/***/ 6253:
/*!*************************************************************!*\
  !*** ./src/app/components/accordion/accordion.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionComponent": () => (/* binding */ AccordionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _accordion_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion.component.html?ngResource */ 6708);
/* harmony import */ var _accordion_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion.component.scss?ngResource */ 5213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 2879);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ 5830);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cart.service */ 910);
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/orders.service */ 2331);









let AccordionComponent = class AccordionComponent {
    constructor(storage, api, order, cart, alertController, navCtrl) {
        this.storage = storage;
        this.api = api;
        this.order = order;
        this.cart = cart;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.prodarr = [];
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.userid = '';
        this.isMenuOpen = false;
        this.storage.get('user').then(user => {
            if (user) {
                this.userid = user.id;
            }
            else {
                this.userid = '';
            }
        });
    }
    ngOnInit() {
        console.log('prodarr', typeof (this.prodarr));
    }
    /**
     * Allows the accordion state to be toggled (I.e. opened/closed)
     */
    toggleAccordion() {
        this.isMenuOpen = !this.isMenuOpen;
    }
    broadcastName(orderid, userid = this.userid) {
        if (orderid !== '') {
            this.confirmOrder(orderid, userid);
        }
        //   console.log('name',number);
        //   console.log('orderid',orderid);
        //   console.log('userid',userid);
        //   console.log('addedItemsACCORD=', this.cart.addedItems);
        //   // this.change.emit(name);
        // }
        //
        // async confirmOrder(number, orderid, userid ) {
        //   const alert = await this.alertController.create({
        //     header: 'Повторить заказ №' + number+'?',
        //     message: 'Корзина предварительно будет очищена!',
        //     buttons: [
        //       {
        //         text: 'Отмена',
        //         role: 'cancel',
        //         cssClass: 'secondary',
        //         handler: (blah) => {
        //           // console.log('Confirm Cancel: blah');
        //         }
        //       }, {
        //         text: 'Ок',
        //         handler: () => {
        //           this.cart.clearCart();
        //           this.order.addToCart(number, orderid, userid).then((resp)=>
        //             {
        //               console.log('333333');
        //               if(resp.tovaris=='ok'){
        //                 console.log('RESP', resp);
        //                 return {addtocart: 'ok'};
        //                 // this.navCtrl.navigateRoot('/cart');
        //               } else {
        //                 this.api.alertMessage("Что-то пошло не так!", 'Попробуйте позже')
        //               }
        //
        //             }
        //           ).then((respon)=>{
        //             if(respon.addtocart=='ok'){
        //               this.api.spinner = true;
        //               setTimeout(() => {
        //                 this.navCtrl.navigateRoot('/cart');
        //                 this.api.spinner = false;
        //               }, 2000);
        //               //
        //               if(this.cart.addedItems){
        //                 // this.navCtrl.navigateRoot('/cart');
        //               }
        //               console.log('this.addedItems', this.cart.addedItems)
        //               console.log('this.cart.sum', this.cart.sum)
        //             }
        //             console.log('respon', respon)
        //           });
        //           // console.log('CartService.dishes', CartService.dishes)
        //           // this.navCtrl.navigateRoot('/cart');
        //         }
        //       }
        //     ]
        //   });
        //
        //   await alert.present();
    }
    confirmOrder(orderid, userid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Повторить заказ №' + orderid + '?',
                message: 'Корзина предварительно будет очищена!',
                buttons: [
                    {
                        text: 'Отмена',
                        role: 'cancel',
                        // cssClass: 'secondary',
                        handler: (blah) => {
                            // console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Ок',
                        handler: () => {
                            this.cart.clearCart();
                            this.order.addToCart(orderid, userid).then((resp) => {
                                console.log('333333', resp);
                                //     if(resp.tovaris=='ok'){
                                //       console.log('RESP', resp);
                                //       return {addtocart: 'ok'};
                                //       // this.navCtrl.navigateRoot('/cart');
                                //     } else {
                                //       this.api.alertMessage("Что-то пошло не так!", 'Попробуйте позже')
                                //     }
                                //
                                //   }
                                // ).then((respon)=>{
                                //   if(respon.addtocart=='ok'){
                                //     this.api.spinner = true;
                                //     setTimeout(() => {
                                //       this.navCtrl.navigateRoot('/cart');
                                //       this.api.spinner = false;
                                //     }, 2000);
                                //     //
                                //     if(this.cart.addedItems){
                                //       // this.navCtrl.navigateRoot('/cart');
                                //     }
                                //     console.log('this.addedItems', this.cart.addedItems)
                                //     console.log('this.cart.sum', this.cart.sum)
                                //   }
                                //   console.log('respon', respon)
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
AccordionComponent.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_orders_service__WEBPACK_IMPORTED_MODULE_4__.OrdersService },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController }
];
AccordionComponent.propDecorators = {
    datezak: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    total: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    prodarr: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    orderid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }]
};
AccordionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-accordion',
        template: _accordion_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_accordion_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccordionComponent);



/***/ }),

/***/ 6387:
/*!*********************************************************!*\
  !*** ./src/app/components/cabmenu/cabmenu.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CabmenuComponent": () => (/* binding */ CabmenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _cabmenu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cabmenu.component.html?ngResource */ 3998);
/* harmony import */ var _cabmenu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cabmenu.component.scss?ngResource */ 2410);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ 910);





let CabmenuComponent = class CabmenuComponent {
    constructor(
    // private api: ApiService,
    cart) {
        this.cart = cart;
        this.name = 'Данные';
    }
    ngOnInit() { }
    doLogout() {
        this.cart.doLogout();
    }
    changeTab(name) {
        this.name = name;
        this.cart.nameTabPerson = name;
    }
};
CabmenuComponent.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService }
];
CabmenuComponent.propDecorators = {
    title1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    title2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    title3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
CabmenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-cabmenu',
        template: _cabmenu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cabmenu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CabmenuComponent);



/***/ }),

/***/ 7741:
/*!*********************************************************!*\
  !*** ./src/app/components/counter/counter.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CounterComponent": () => (/* binding */ CounterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _counter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter.component.html?ngResource */ 1145);
/* harmony import */ var _counter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter.component.scss?ngResource */ 7466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ 910);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/events.service */ 106);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);







let CounterComponent = class CounterComponent {
    constructor(cart, events, animationCtrl) {
        this.cart = cart;
        this.events = events;
        this.animationCtrl = animationCtrl;
        this.btn = false;
        this.link = false;
        this.modifier = false;
        this.price = '';
        this.btnClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.isClearCart = false;
        this.isQuantity = false;
        this.quantity = 0;
        this.storeType = '';
        this.totalproduct = {};
        this.events.getcartClear().subscribe((data) => {
            console.log("EVENTCART", data);
            this.quantity == 0;
        });
        // console.log("START");
        this.events.getObservable().subscribe((data) => {
            // console.log("Data received:", data);
            if (data.cart == 'added') {
                this.isQuantity = true;
                // console.log('2222',  this.id);
                if (data.itemId === this.id) {
                    this.quantity = data.quantity;
                }
            }
        });
        // document.querySelector('.btncounter').addEventListener('click', () => {
        //   animation.play();
        // });
    }
    ngOnInit() {
        this.quantity = this.cart.getItemQuantity(this.id) || 0;
        // this.isClearCart = Object.keys(this.cart.addedItems).length ? true : false;
        // console.log('this.idCOUNTER', this.id);
        // console.log('this.cart.getItemQuantity(this.id)', this.cart.getItemQuantity(this.id));
        // this.storage.get('store_type').then(result => {
        //   this.storeType = result;
        //   console.log('storeType', this.storeType);
        // });
        this.totalproduct = this.cart.getAddedDishes();
    }
    btnAction() {
        this.btnClick.emit();
    }
    animationAdd(elem1, elem2) {
        elem1.classList.remove('loadelem');
        elem2.classList.add('loadelem');
    }
    setQuantity(event, isAdd, btn = false) {
        if (this.modifier) {
            this.cart.setQuantity(this.id, isAdd, this.count);
            console.log('this.count', this.count);
            console.log('isAdd', isAdd);
            console.log('MODIFIER');
            // this.cart.setQuantity(this.id, isAdd, this.count);
        }
        else {
            if (btn) {
                this.PreiceText.nativeElement.classList.add('loadelem');
                this.loadingIcon.nativeElement.classList.remove('loadelem');
                // const PriceAnimation = this.animationCtrl.create('price-animation')
                //   .addElement(this.PreiceText.nativeElement)
                //   .duration(500)
                //   .keyframes([
                //     { offset: 0, transform: 'scale(1)', opacity: 1 },
                //     { offset: 0.5, transform: 'scale(0)', opacity: 0 },
                //     { offset: 1, transform: 'scale(1)', opacity: 1 }
                //   ]);
                const LoadingAnimation = this.animationCtrl.create('loading-animation')
                    .addElement(this.loadingIcon.nativeElement)
                    .duration(500)
                    .keyframes([
                    { offset: 0, opacity: 0 },
                    { offset: 0.7, opacity: 1 },
                    { offset: 1, opacity: 1 },
                    // { offset: 1, transform: 'scale(0)', opacity: 0 }
                ]);
                // PriceAnimation.play();
                LoadingAnimation.play();
                setTimeout(() => this.animationAdd(this.PreiceText.nativeElement, this.loadingIcon.nativeElement), 500);
                // async () => {
                //   await PriceAnimation.play();
                //   await LoadingAnimation.play();
                // };
            }
            // console.log('totalproduct base', Object.keys(this.totalproduct).length);
            // console.log('this.scan', this.scan);
            // if (Object.keys(this.totalproduct).length == 0) {
            // this.storage.remove('store_type');
            // this.cart.setQuantity(this.id, isAdd, this.count);
            // this.storage.set('store_type', this.scan);
            // console.log('this.scan22', this.scan);
            // } else {
            console.log('this.count', this.count);
            console.log('isAdd', isAdd);
            this.cart.setQuantity(this.id, isAdd, this.count);
        }
        // }
        // console.log('totalproduct end', Object.keys(this.totalproduct).length);
    }
};
CounterComponent.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AnimationController }
];
CounterComponent.propDecorators = {
    PreiceText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['PreiceText', { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef },] }],
    loadingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['loadingIcon', { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef },] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    btn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    link: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    modifier: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    price: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    btnClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
CounterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-counter',
        template: _counter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_counter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CounterComponent);



/***/ }),

/***/ 7389:
/*!***************************************************************!*\
  !*** ./src/app/components/countmodif/countmodif.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountmodifComponent": () => (/* binding */ CountmodifComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _countmodif_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countmodif.component.html?ngResource */ 2935);
/* harmony import */ var _countmodif_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countmodif.component.scss?ngResource */ 4005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ 910);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/events.service */ 106);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);







let CountmodifComponent = class CountmodifComponent {
    constructor(cart, events, animationCtrl) {
        this.cart = cart;
        this.events = events;
        this.animationCtrl = animationCtrl;
        this.price = '';
        this.modifSave = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.isClearCart = false;
        this.isQuantity = false;
        this.quantity = 0;
        this.storeType = '';
        this.totalproduct = {};
        // this.events.getcartClear().subscribe((data) => {
        //   console.log("EVENTCART", data);
        //   this.quantity == 0;
        // });
        // // console.log("START");
        // this.events.getObservable().subscribe((data) => {
        //   // console.log("Data received:", data);
        //   if(data.cart == 'added'){
        //     this.isQuantity = true;
        //     // console.log('2222',  this.id);
        //
        //     if (data.itemId === this.id) {
        //       this.quantity = data.quantity;
        //     }
        //
        //   }
        // });
    }
    ngOnInit() {
        this.quantity = this.cart.getItemQuantity(this.id) || 1;
        // this.isClearCart = Object.keys(this.cart.addedItems).length ? true : false;
        // console.log('this.idCOUNTER', this.id);
        // console.log('this.cart.getItemQuantity(this.id)', this.cart.getItemQuantity(this.id));
        // this.storage.get('store_type').then(result => {
        //   this.storeType = result;
        //   console.log('storeType', this.storeType);
        // });
        this.totalproduct = this.cart.getAddedDishes();
    }
    modifAction(count) {
        this.modifSave.emit(count);
    }
    // public setQuantity(event, isAdd, btn:boolean = false) {
    //     console.log('this.count', this.count);
    //     console.log('isAdd', isAdd);
    // }
    setQuantity(itemId, isAdd, count = 1) {
        // console.log('CARTSERV',this.addedItems);
        if (isAdd) {
            this.quantity += count;
            console.log('COUNTNEW ПРОВЕРИТЬ');
            // this.addedItems[itemId] = {
            //   quantity: 1,
            //   price: CartService.getDishById(itemId)['price'],
            //   cat: CartService.getDishById(itemId)['cat'],
            // };
        }
        else {
            if (this.quantity) {
                this.quantity -= count;
            }
            // delete this.addedItems[itemId];
        }
    }
};
CountmodifComponent.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AnimationController }
];
CountmodifComponent.propDecorators = {
    PreiceText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['PreiceText', { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef },] }],
    loadingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['loadingIcon', { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef },] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    price: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    modifSave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
CountmodifComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-countmodif',
        template: _countmodif_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_countmodif_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CountmodifComponent);



/***/ }),

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.html?ngResource */ 1757);
/* harmony import */ var _footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss?ngResource */ 4682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ 910);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 5472);






let FooterComponent = class FooterComponent {
    constructor(cart, navCtrl) {
        this.cart = cart;
        this.navCtrl = navCtrl;
        this.isCart = false;
        this.isLogin = false;
        this.isCheckout = false;
        this.btnClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.isClearCart = false;
    }
    ngOnInit() {
        this.isClearCart = Object.keys(this.cart.addedItems).length ? true : false;
    }
    addOrder() {
        this.btnClick.emit();
    }
    clearCartPage() {
        this.cart.clearCart();
        this.navCtrl.navigateRoot('/');
    }
};
FooterComponent.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
FooterComponent.propDecorators = {
    hideCart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    isCart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    isLogin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    isCheckout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    btnClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-footer',
        template: _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FooterComponent);



/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.html?ngResource */ 2011);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss?ngResource */ 2476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 2879);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/config.service */ 946);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/events.service */ 106);








let HeaderComponent = class HeaderComponent {
    constructor(platform, config, storage, event, navCtrl) {
        this.platform = platform;
        this.config = config;
        this.storage = storage;
        this.event = event;
        this.navCtrl = navCtrl;
        this.isMain = true;
        this.isMenu = false;
        this.isCabinet = false;
        this.isCart = false;
        this.backBtn = '';
        this.authorized = false;
        this.storage.get('user').then((res) => {
            // console.log('userOBJ',res);
            if (res && res.hasOwnProperty('id')) {
                // console.log("this.authorized1111",this.authorized);
                this.authorized = true;
                this.userid = res['id'];
            }
        });
        // this.event.publishLoginEv(true);
        // this.event.getLoginEv().subscribe((res)=> {
        //   this.authorized1 = res;
        //   console.log('res', res);
        // });
        this.event.getLoginId().subscribe((data) => {
            this.authorized = data;
            console.log("getLoginId:", data);
            console.log("getLoginId:", typeof (data));
            // if(data){
            if (data === 0) {
                console.log('NULLLLLLL');
                this.authorized = false;
                this.userid = '';
                console.log("this.authorized", this.authorized);
            }
            else {
                console.log('nOOOOOOOOt');
                this.authorized = true;
                this.userid = data;
                console.log("this.authorized", this.authorized);
            }
            // } else {
            //   console.log("EEELSE");
            //   this.authorized = false;
            //   this.userid = '';
            //   console.log("this.authorized",this.authorized);
            // }
        });
        this.storage.get('appSet').then((res) => {
            if (res) {
                this.phonesite = res.hasOwnProperty('phonesite') ? res['phonesite'] : false;
            }
        });
        if (platform.is('ios')) {
            this.text = '';
        }
    }
    ngOnInit() {
    }
    goToUrl(url) {
        // console.log(url);
        this.navCtrl.navigateRoot(url);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
HeaderComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    additionalData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    isMain: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    isMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    isCabinet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    isCart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    backPath: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    backBtn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-header',
        template: _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderComponent);



/***/ }),

/***/ 6077:
/*!******************************************!*\
  !*** ./src/app/pipes/formattime.pipe.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatTimePipe": () => (/* binding */ FormatTimePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1109);


let FormatTimePipe = class FormatTimePipe {
    transform(value) {
        const hours = Math.floor(value / 3600);
        const minutes = Math.floor((value % 3600) / 60);
        return (('00' + minutes).slice(-2) +
            ':' +
            ('00' + Math.floor(value - minutes * 60)).slice(-2));
    }
};
FormatTimePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'formatTime'
    })
], FormatTimePipe);



/***/ }),

/***/ 8600:
/*!*******************************************!*\
  !*** ./src/app/pipes/removecomma.pipe.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoveCommaPipe": () => (/* binding */ RemoveCommaPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1109);


let RemoveCommaPipe = class RemoveCommaPipe {
    transform(value) {
        if (value !== undefined && value !== null) {
            return value.replace(/,/g, " ");
        }
        else {
            return "";
        }
    }
};
RemoveCommaPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'removeComma'
    })
], RemoveCommaPipe);



/***/ }),

/***/ 2331:
/*!********************************************!*\
  !*** ./src/app/services/orders.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersService": () => (/* binding */ OrdersService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage-angular */ 2879);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 5830);
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.service */ 910);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 5472);






let OrdersService = class OrdersService {
    constructor(api, cart, storage, navCtrl) {
        this.api = api;
        this.cart = cart;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.userid = '';
        this.client_phone = '';
        this.oldOrders = [];
        this.repeatOrder = {};
        this.storage.get('user').then(user => {
            if (user) {
                this.userid = user.id;
                console.log(' this.useridORDERS', this.userid);
                this.client_phone = user.client_phone;
                this.getAllOrders(this.userid);
            }
            else {
                this.userid = '';
                this.client_phone = '';
            }
        });
    }
    getAllOrders(userid) {
        console.log('clientPhone', this.userid);
        this.api.getApi('orders', { 'client_id': userid }).then((res) => {
            if (res.hasOwnProperty('data') && res['data']) {
                this.oldOrders = [];
                this.oldOrders = res['data'];
            }
            console.log('this.oldOrders', this.oldOrders);
        });
    }
    getAllOrdersReturn(userid) {
        // let TempoldOrders:Array<any>=[];
        console.log('clientPhone', this.userid);
        console.log('typeof clientPhone', typeof (this.userid));
        this.api.getApi('orders', { 'client_id': userid }).then((res) => {
            console.log('res', res);
            if (res.hasOwnProperty('data') && res['data']) {
                return res['data'];
            }
            else {
                return [];
            }
        });
        // console.log('TempoldOrders', TempoldOrders);
        // return TempoldOrders;
    }
    addToCart(orderid, userid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let response;
            console.log('orderid=', orderid);
            console.log('userid=', userid);
            return this.api.getApi('orders', { 'id': orderid }).then((res) => {
                console.log('repeat!!!!!', res);
                if (res.hasOwnProperty('data') && res['data'].length) {
                    this.repeatOrder = {};
                    let cntalert = true;
                    res['data'][0]['products'].forEach((val) => {
                        this.api.getApi('products', { 'id': val.id }).then((respprod) => {
                            console.log('respprod00000', respprod);
                            if (cntalert) {
                                if (respprod.hasOwnProperty('data')) {
                                    if (respprod['data'][0]['is_view_in_site']) {
                                        // let categ: any = respprod;
                                        if (!val.is_gift && val.modifiers.length == 1) {
                                            this.cart.setQuantity(val.id, true, val.count);
                                        }
                                        if (!val.is_gift && val.modifiers.length > 1) {
                                            let tempModif = val.modifiers.filter((item) => !item.order_id);
                                            // console.log(tempModif);
                                            console.log('tempModif', tempModif);
                                            this.cart.addItemModif(val.id + '/' + tempModif.reduce(function (sum, current) {
                                                return sum + (current.id).toString();
                                            }, ''), true, parseInt(val.count), tempModif, val.price);
                                            console.log('IMAGE', val.image);
                                            console.log('tempModif2', tempModif);
                                            _cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService.dishes.push({
                                                id: val.id + '/' + tempModif.reduce(function (sum, current) {
                                                    return sum + (current.id).toString();
                                                }, ''),
                                                quantity: val.count,
                                                modifiers: tempModif,
                                                price: val.price,
                                                image: val.image ? this.api.urlApi + val.image : '',
                                                title: val.title
                                            });
                                            this.api.spinner = true;
                                            setTimeout(() => {
                                                this.navCtrl.navigateRoot('/cart');
                                                this.api.spinner = false;
                                            }, 2000);
                                        }
                                        //формирование корзины
                                        // проверить модификаторы массив и закинуть в корзину нужные модификаторы + закинуть id товара/id vjlbabrfnjhjd d CARTSERVISE dishes
                                        // this.repeatOrder[val.product_id] = {
                                        //   "quantity": val.quantity,
                                        //   "cat": categ.categories[0]['id'],
                                        //   "price": val.price
                                        // };
                                        console.log('respprod', respprod);
                                    }
                                    else {
                                        cntalert = false;
                                        this.api.alertMessage("Извините, это невозможно!", 'Некоторых товары отсутсвуют');
                                        this.repeatOrder = {};
                                        return false;
                                    }
                                }
                                else {
                                    cntalert = false;
                                    console.log('cntalert222', cntalert);
                                    console.log('нет ID');
                                    this.api.alertMessage("Извините, это невозможно!", 'Некоторых товары отсутсвуют');
                                    this.repeatOrder = {};
                                    return false;
                                }
                            }
                        }).catch(err => {
                            console.log('EEE', err);
                        });
                    });
                    if (cntalert) {
                        // перекинуть в корзину
                        //
                        //     // this.cart.clearCart();
                        //     this.cart.addedItems = {};
                        //     this.cart.addedItems = this.repeatOrder;
                        //     this.cart.getDishesSumCart(this.repeatOrder).then((resp)=>{
                        //         console.log('resp', resp);
                        //         console.log('this.cart.sum', this.cart.sum);
                        //       }
                        //     );
                        //     // this.cart.getDishesSum();
                        //     console.log('this.repeatOrder', this.repeatOrder);
                        //     console.log('this.cart.sum', this.cart.sum);
                        //     console.log('this.cart.addedItems', this.cart.addedItems);
                        //     // console.log('this.cart.getDishesSum()', this.cart.getDishesSum());
                        //     // console.log('this.cart.getDishesSumCart(this.repeatOrder)', this.cart.getDishesSumCart(this.repeatOrder));
                        //     return {tovaris: 'ok'};
                        //   } else {
                        //     return {tovaris: 'no'};
                    }
                }
                else {
                    this.api.alertMessage("Извините, это невозможно!", 'На данный момент некоторых товары отсутсвуют');
                }
            });
            // // this.repeatOrder.push
            console.log('addedItems=', this.cart.addedItems);
        });
    }
    ;
};
OrdersService.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService },
    { type: _cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
OrdersService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], OrdersService);



/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/footer/footer.component */ 4662);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header/header.component */ 3646);
/* harmony import */ var _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/counter/counter.component */ 7741);
/* harmony import */ var ngx_ion_simple_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-ion-simple-mask */ 448);
/* harmony import */ var _components_cabmenu_cabmenu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cabmenu/cabmenu.component */ 6387);
/* harmony import */ var _components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/accordion/accordion.component */ 6253);
/* harmony import */ var _pipes_removecomma_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/removecomma.pipe */ 8600);
/* harmony import */ var _components_countmodif_countmodif_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/countmodif/countmodif.component */ 7389);
/* harmony import */ var _pipes_formattime_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/formattime.pipe */ 6077);










// import {AddcartComponent} from '../modals/addcart/addcart.component';





// import {EventsService} from '../services/events-service.service';
let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,
            _components_cabmenu_cabmenu_component__WEBPACK_IMPORTED_MODULE_3__.CabmenuComponent,
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent,
            _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_2__.CounterComponent,
            _components_countmodif_countmodif_component__WEBPACK_IMPORTED_MODULE_6__.CountmodifComponent,
            // AddcartComponent,
            _components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_4__.AccordionComponent,
            _pipes_removecomma_pipe__WEBPACK_IMPORTED_MODULE_5__.RemoveCommaPipe,
            _pipes_formattime_pipe__WEBPACK_IMPORTED_MODULE_7__.FormatTimePipe
            // EventsService
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule,
        ],
        exports: [
            _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_2__.CounterComponent,
            _components_countmodif_countmodif_component__WEBPACK_IMPORTED_MODULE_6__.CountmodifComponent,
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,
            _components_cabmenu_cabmenu_component__WEBPACK_IMPORTED_MODULE_3__.CabmenuComponent,
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent,
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            ngx_ion_simple_mask__WEBPACK_IMPORTED_MODULE_14__.SimpleMaskModule,
            _pipes_removecomma_pipe__WEBPACK_IMPORTED_MODULE_5__.RemoveCommaPipe,
            _pipes_formattime_pipe__WEBPACK_IMPORTED_MODULE_7__.FormatTimePipe,
            _components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_4__.AccordionComponent,
            // EventsService
        ]
    })
], SharedModule);



/***/ }),

/***/ 5213:
/*!**************************************************************************!*\
  !*** ./src/app/components/accordion/accordion.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".active {\n  display: block;\n}\n\n.inactive {\n  display: none;\n}\n\n.accordion__item {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  margin-bottom: 15px;\n}\n\n.accordion__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  transition: all 0.3s;\n  position: relative;\n  font-size: 12px;\n  min-height: 50px;\n  padding: 0 10px;\n  border-radius: 2px;\n  background-color: var(--block-wrapper-bg);\n  border: 1px solid var(--block-head-border);\n  color: var(--title);\n}\n\n.accordion__head.active {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.accordion__content {\n  list-style: none;\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n\n.order__list {\n  padding-left: 0;\n  border-bottom: 1px solid var(--block-head-border);\n  border-top: none;\n  list-style: none;\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n  flex-direction: column;\n  margin: 0;\n  width: 100%;\n}\n\n.order__list li {\n  font-size: 12px;\n  border: 1px solid var(--block-head-border);\n}\n\n.order__list li > div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.txtwhite {\n  color: var(--text-content-color);\n}\n\n.dish__name {\n  color: var(--main-color);\n  padding: 10px;\n  line-height: 1.2;\n  width: calc(100% - 140px);\n}\n\n.dish__count {\n  flex-shrink: 0;\n}\n\n.dish__price.price, .dish__count {\n  border-left: 1px solid var(--block-head-border);\n  width: 70px;\n  padding: 20px 0;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29yZGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFDQTtFQUdFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFBO0VBR0UsYUFBQTtFQUdBLG1CQUFBO0VBR0EsOEJBQUE7RUFHQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBSUEseUNBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0FBQUY7O0FBRUE7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBQ0E7RUFHRSxnQkFBQTtFQUdBLGFBQUE7RUFHQSw4QkFBQTtFQUdBLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUdBLGFBQUE7RUFHQSw4QkFBQTtFQUdBLG9CQUFBO0VBSUEsc0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUVBLDBDQUFBO0FBREY7O0FBR0E7RUFHRSxhQUFBO0VBR0EsbUJBQUE7RUFHQSw4QkFBQTtBQUFGOztBQUVBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFDQTtFQUNFLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7QUFHRjs7QUFFQTtFQUNFLCtDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6ImFjY29yZGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmluYWN0aXZlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5hY2NvcmRpb25fX2l0ZW17XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5hY2NvcmRpb25fX2hlYWQge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIC8vYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgLy9ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gIC8vYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxvY2std3JhcHBlci1iZyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsb2NrLWhlYWQtYm9yZGVyKTtcbiAgY29sb3I6IHZhcigtLXRpdGxlKTtcbn1cbi5hY2NvcmRpb25fX2hlYWQuYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG4uYWNjb3JkaW9uX19jb250ZW50e1xuICAvL2JvcmRlcjogMXB4IHNvbGlkICNkOGRhZGQ7XG4gIC8vYm9yZGVyLXRvcDogbm9uZTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC13ZWJraXQtYm94LWFsaWduOiBzdHJldGNoO1xuICAtbXMtZmxleC1hbGlnbjogc3RyZXRjaDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbn1cblxuLm9yZGVyX19saXN0IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYmxvY2staGVhZC1ib3JkZXIpO1xuICBib3JkZXItdG9wOiBub25lO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IHN0cmV0Y2g7XG4gIC1tcy1mbGV4LWFsaWduOiBzdHJldGNoO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ub3JkZXJfX2xpc3QgbGkge1xuICBmb250LXNpemU6IDEycHg7XG5cbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxvY2staGVhZC1ib3JkZXIpO1xufVxuLm9yZGVyX19saXN0IGxpPmRpdiB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnR4dHdoaXRle1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb250ZW50LWNvbG9yKTtcbn1cbi5kaXNoX19uYW1lIHtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTQwcHgpO1xufVxuLmRpc2hfX2NvdW50IHtcbiAgZmxleC1zaHJpbms6IDA7XG5cbiAgLy90ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8vbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4uZGlzaF9fcHJpY2UucHJpY2UsIC5kaXNoX19jb3VudCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tYmxvY2staGVhZC1ib3JkZXIpO1xuICB3aWR0aDogNzBweDtcbiAgcGFkZGluZzogMjBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */";

/***/ }),

/***/ 2410:
/*!**********************************************************************!*\
  !*** ./src/app/components/cabmenu/cabmenu.component.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".tabs li {\n  padding-bottom: 15px;\n  position: relative;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--tab-deault);\n}\n\n.tabs li:not(:last-child) {\n  margin-right: 25px;\n  cursor: pointer;\n}\n\n.tabs li.current {\n  color: var(--tab-active);\n}\n\n.personal-area__head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 30px 15px 2px 15px;\n  margin-bottom: 25px;\n  background-color: var(--block-wrapper-bg);\n  border-bottom: 1px solid var(--block-head-border);\n}\n\n.tabs {\n  display: flex;\n  justify-content: space-between;\n  list-style: none;\n  position: relative;\n  z-index: 1;\n  margin: 0;\n  padding: 0;\n}\n\n.logout {\n  color: var(--main-color);\n  padding-bottom: 15px;\n}\n\n.tabs li.current::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: -2px;\n  width: 100%;\n  height: 3px;\n  background-color: var(--main-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhYm1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUFBRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0Usd0JBQUE7QUFFRjs7QUFBQTtFQUdFLGFBQUE7RUFHQSw4QkFBQTtFQUdBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsaURBQUE7QUFHRjs7QUFEQTtFQUdFLGFBQUE7RUFHQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFJRjs7QUFGQTtFQUNFLHdCQUFBO0VBQ0Esb0JBQUE7QUFLRjs7QUFIQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtBQU1GIiwiZmlsZSI6ImNhYm1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50YWJzIGxpe1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS10YWItZGVhdWx0KTtcbn1cbi50YWJzIGxpOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50YWJzIGxpLmN1cnJlbnQge1xuICBjb2xvcjogdmFyKC0tdGFiLWFjdGl2ZSk7XG59XG4ucGVyc29uYWwtYXJlYV9faGVhZCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDE1cHggMnB4IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6dmFyKC0tYmxvY2std3JhcHBlci1iZyk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ibG9jay1oZWFkLWJvcmRlcik7XG59XG4udGFicyB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5sb2dvdXQge1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuLnRhYnMgbGkuY3VycmVudDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IC0ycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG59XG4iXX0= */";

/***/ }),

/***/ 7466:
/*!**********************************************************************!*\
  !*** ./src/app/components/counter/counter.component.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".counter {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border-radius: 3px;\n}\n\n.counter-quantity {\n  width: 30px;\n  height: 30px;\n  color: var(--quantity-control-text);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: normal;\n  font-size: 16px;\n}\n\n.remove_btn {\n  padding: 0;\n}\n\n.add_btn {\n  padding: 0;\n}\n\nbutton {\n  background-color: transparent;\n  display: flex;\n  align-items: center;\n}\n\nbutton ion-icon {\n  width: 30px;\n  height: 30px;\n  border-radius: 5px;\n  background-color: var(--quantity-control-bg);\n}\n\nion-icon svg {\n  width: 14px;\n}\n\n.priceprod {\n  padding: 10px;\n  text-align: center;\n  border-radius: 6px;\n  width: 100%;\n  color: var(--category-text);\n  background-color: var(--category-bg);\n  margin: 0;\n}\n\n.loadspin {\n  display: flex;\n  justify-content: center;\n}\n\n.loadelem {\n  display: none;\n  text-align: center;\n  height: 21px;\n}\n\n.p-preloader__icon {\n  width: 21px;\n  height: 21px;\n  border-top: 2px solid transparent;\n  border-right: 2px solid var(--main-color);\n  border-bottom: 2px solid var(--main-color);\n  border-left: 2px solid var(--main-color);\n  border-radius: 25px;\n  animation-name: rotatePreloader;\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n}\n\n@keyframes rotatePreloader {\n  0% {\n    transform: rotateZ(0);\n  }\n  100% {\n    transform: rotateZ(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0FBQUY7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7QUFFRjs7QUFBQTtFQUNFLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUFJRjs7QUFGQTtFQUNFLFdBQUE7QUFLRjs7QUFIQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7RUFDQSxTQUFBO0FBTUY7O0FBSkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFPRjs7QUFMQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFRRjs7QUFOQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSx5Q0FBQTtFQUNBLDBDQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtFQUVBLCtCQUFBO0VBRUEsc0JBQUE7RUFFQSxtQ0FBQTtFQUVBLGlDQUFBO0FBU0Y7O0FBQ0E7RUFDRTtJQUVFLHFCQUFBO0VBWUY7RUFYQTtJQUVFLDBCQUFBO0VBYUY7QUFDRiIsImZpbGUiOiJjb3VudGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvL2JhY2tncm91bmQtY29sb3I6ICNkZWUwZWU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5jb3VudGVyLXF1YW50aXR5IHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBjb2xvcjogdmFyKC0tcXVhbnRpdHktY29udHJvbC10ZXh0KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5yZW1vdmVfYnRue1xuICBwYWRkaW5nOiAwO1xufVxuLmFkZF9idG57XG4gIHBhZGRpbmc6IDA7XG59XG5idXR0b257XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuYnV0dG9uIGlvbi1pY29ue1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXF1YW50aXR5LWNvbnRyb2wtYmcpO1xufVxuaW9uLWljb24gc3Zne1xuICB3aWR0aDogMTRweDtcbn1cbi5wcmljZXByb2R7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHZhcigtLWNhdGVnb3J5LXRleHQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXRlZ29yeS1iZyk7XG4gIG1hcmdpbjogMDtcbn1cbi5sb2Fkc3BpbntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubG9hZGVsZW0ge1xuICBkaXNwbGF5OiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMjFweDtcbn1cbi5wLXByZWxvYWRlcl9faWNvbiB7XG4gIHdpZHRoOiAyMXB4O1xuICBoZWlnaHQ6IDIxcHg7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tbWFpbi1jb2xvcik7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1tYWluLWNvbG9yKTtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1tYWluLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm90YXRlUHJlbG9hZGVyO1xuICBhbmltYXRpb24tbmFtZTogcm90YXRlUHJlbG9hZGVyO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZVByZWxvYWRlciB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMCk7IH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKTsgfSB9XG5cbkBrZXlmcmFtZXMgcm90YXRlUHJlbG9hZGVyIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigwKTsgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpOyB9IH1cbiJdfQ== */";

/***/ }),

/***/ 4005:
/*!****************************************************************************!*\
  !*** ./src/app/components/countmodif/countmodif.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".counter {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border-radius: 3px;\n}\n\n.counter-quantity {\n  width: 30px;\n  height: 30px;\n  color: var(--quantity-control-text);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: normal;\n  font-size: 16px;\n}\n\n.remove_btn {\n  padding: 0;\n}\n\n.add_btn {\n  padding: 0;\n}\n\nbutton {\n  background-color: transparent;\n  display: flex;\n  align-items: center;\n}\n\nbutton ion-icon {\n  width: 30px;\n  height: 30px;\n  border-radius: 5px;\n  background-color: var(--quantity-control-bg);\n}\n\nion-icon svg {\n  width: 14px;\n}\n\n.priceprod {\n  padding: 10px;\n  text-align: center;\n  border-radius: 6px;\n  width: 100%;\n  color: var(--category-text);\n  background-color: var(--category-bg);\n  margin: 0;\n}\n\n.loadspin {\n  display: flex;\n  justify-content: center;\n}\n\n.loadelem {\n  display: none;\n  text-align: center;\n}\n\n.p-preloader__icon {\n  width: 20px;\n  height: 20px;\n  border-top: 2px solid transparent;\n  border-right: 2px solid var(--main-color);\n  border-bottom: 2px solid var(--main-color);\n  border-left: 2px solid var(--main-color);\n  border-radius: 25px;\n  animation-name: rotatePreloader;\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n}\n\n@keyframes rotatePreloader {\n  0% {\n    transform: rotateZ(0);\n  }\n  100% {\n    transform: rotateZ(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50bW9kaWYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0FBQUY7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7QUFFRjs7QUFBQTtFQUNFLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUFJRjs7QUFGQTtFQUNFLFdBQUE7QUFLRjs7QUFIQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7RUFDQSxTQUFBO0FBTUY7O0FBSkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFPRjs7QUFMQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQVFGOztBQU5BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsMENBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBRUEsK0JBQUE7RUFFQSxzQkFBQTtFQUVBLG1DQUFBO0VBRUEsaUNBQUE7QUFTRjs7QUFDQTtFQUNFO0lBRUUscUJBQUE7RUFZRjtFQVhBO0lBRUUsMEJBQUE7RUFhRjtBQUNGIiwiZmlsZSI6ImNvdW50bW9kaWYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY291bnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8vYmFja2dyb3VuZC1jb2xvcjogI2RlZTBlZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLmNvdW50ZXItcXVhbnRpdHkge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICAvL2JhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGNvbG9yOiB2YXIoLS1xdWFudGl0eS1jb250cm9sLXRleHQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnJlbW92ZV9idG57XG4gIHBhZGRpbmc6IDA7XG59XG4uYWRkX2J0bntcbiAgcGFkZGluZzogMDtcbn1cbmJ1dHRvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5idXR0b24gaW9uLWljb257XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcXVhbnRpdHktY29udHJvbC1iZyk7XG59XG5pb24taWNvbiBzdmd7XG4gIHdpZHRoOiAxNHB4O1xufVxuLnByaWNlcHJvZHtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogdmFyKC0tY2F0ZWdvcnktdGV4dCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhdGVnb3J5LWJnKTtcbiAgbWFyZ2luOiAwO1xufVxuLmxvYWRzcGlue1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5sb2FkZWxlbSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wLXByZWxvYWRlcl9faWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tbWFpbi1jb2xvcik7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1tYWluLWNvbG9yKTtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1tYWluLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm90YXRlUHJlbG9hZGVyO1xuICBhbmltYXRpb24tbmFtZTogcm90YXRlUHJlbG9hZGVyO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZVByZWxvYWRlciB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMCk7IH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKTsgfSB9XG5cbkBrZXlmcmFtZXMgcm90YXRlUHJlbG9hZGVyIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigwKTsgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpOyB9IH1cbiJdfQ== */";

/***/ }),

/***/ 4682:
/*!********************************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "ion-footer {\n  padding: 7px 15px;\n  background: var(--header-bg);\n  margin-top: -1px;\n}\n\nion-button {\n  height: 50px;\n  background-color: var(--main-color);\n  border-radius: 10px;\n  margin: 0;\n  color: var(--btn-text);\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.scroll-content {\n  margin-bottom: 0 !important;\n}\n\nion-text {\n  color: var(--btn-text);\n}\n\n.footer-md::before {\n  display: none;\n}\n\n.footer-ios::before {\n  display: none;\n}\n\n.footer-ios::after {\n  display: none;\n}\n\nion-button::part(native) {\n  background: var(--main-color);\n  box-shadow: none;\n}\n\n.cart_btn {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.priceprod {\n  background-color: var(--basket-bottom-price-bg);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 37px;\n  min-width: 75px;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 0 15px;\n  color: var(--basket-bottom-price-text);\n  border-radius: 7px;\n}\n\n.clear-basket {\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 14px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n  color: var(--body-text);\n}\n\n.checkout_btn {\n  margin-right: 10px;\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFFRjs7QUFBQTtFQUNFLDJCQUFBO0FBR0Y7O0FBREE7RUFDRSxzQkFBQTtBQUlGOztBQUZBO0VBQ0UsYUFBQTtBQUtGOztBQUhBO0VBQ0UsYUFBQTtBQU1GOztBQUpBO0VBQ0UsYUFBQTtBQU9GOztBQUxBO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtBQVFGOztBQU5BO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBU0Y7O0FBUEE7RUFDRSwrQ0FBQTtFQUdBLGFBQUE7RUFHQSxtQkFBQTtFQUdBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7QUFVRjs7QUFSQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFXRjs7QUFUQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFZRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZm9vdGVye1xuICBwYWRkaW5nOiA3cHggMTVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taGVhZGVyLWJnKTtcbiAgbWFyZ2luLXRvcDogLTFweDtcbn1cbmlvbi1idXR0b257XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLWJ0bi10ZXh0KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnNjcm9sbC1jb250ZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogMCFpbXBvcnRhbnQ7XG59XG5pb24tdGV4dHtcbiAgY29sb3I6IHZhcigtLWJ0bi10ZXh0KTtcbn1cbi5mb290ZXItbWQ6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZm9vdGVyLWlvczo6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5mb290ZXItaW9zOjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5pb24tYnV0dG9uOjpwYXJ0KG5hdGl2ZSkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5jYXJ0X2J0bntcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcmljZXByb2R7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2tldC1ib3R0b20tcHJpY2UtYmcpO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzN3B4O1xuICBtaW4td2lkdGg6IDc1cHg7XG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgY29sb3I6IHZhcigtLWJhc2tldC1ib3R0b20tcHJpY2UtdGV4dCk7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cbi5jbGVhci1iYXNrZXQge1xuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1ib2R5LXRleHQpO1xufVxuLmNoZWNrb3V0X2J0bntcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbiJdfQ== */";

/***/ }),

/***/ 2476:
/*!********************************************************************!*\
  !*** ./src/app/components/header/header.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "ion-icon.header_svg {\n  font-size: 22px;\n  color: var(--header-account-text-svg);\n  border-radius: 10px;\n  background-color: var(--main-color);\n  padding: 7px;\n}\n\nion-buttons {\n  --color:var(--header-text);\n}\n\nion-menu-button {\n  width: 36px;\n  height: 36px;\n  margin-left: 4px;\n}\n\n.block_btns {\n  display: flex;\n  align-items: center;\n}\n\n.block_btns ion-button::part(native) {\n  padding-inline-start: 0;\n  padding-inline-end: 0;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\nion-menu-button::part(native) {\n  padding-inline-start: 0;\n  padding-inline-end: 0;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  border-bottom-right-radius: 2px;\n  border-bottom-left-radius: 2px;\n}\n\nion-icon.header_menu {\n  font-size: 22px;\n  min-width: 20px;\n  color: var(--header-btn-svg);\n  border-radius: 4px;\n  background-color: var(--main-color);\n  padding: 7px;\n}\n\nion-toolbar {\n  --background:var(--header-bg);\n  margin-bottom: -1px;\n}\n\nion-title {\n  padding-inline-start: 0 !important;\n}\n\nion-button {\n  width: 36px;\n  height: 36px;\n}\n\nion-toolbar {\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtFQUFjLG1CQUFBO0FBSWhCOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsWUFBQTtBQUdGOztBQURBO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtBQUlGOztBQUZBO0VBQ0Usa0NBQUE7QUFLRjs7QUFIQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBTUY7O0FBSkE7RUFDRSxtQkFBQTtBQU9GIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uLmhlYWRlcl9zdmcge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItYWNjb3VudC10ZXh0LXN2Zyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBwYWRkaW5nOiA3cHg7XG59XG5cbmlvbi1idXR0b25ze1xuICAtLWNvbG9yOnZhcigtLWhlYWRlci10ZXh0KTtcbn1cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG4uYmxvY2tfYnRuc3tcbiAgZGlzcGxheTogZmxleDthbGlnbi1pdGVtczogY2VudGVyXG59XG4vLy5idXR0b24tbmF0aXZle1xuLy8gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHghaW1wb3J0YW50O1xuLy8gIHBhZGRpbmctaW5saW5lLWVuZDogNXB4IWltcG9ydGFudDtcbi8vfVxuLmJsb2NrX2J0bnMgaW9uLWJ1dHRvbjo6cGFydChuYXRpdmUpIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG59XG5pb24tbWVudS1idXR0b246OnBhcnQobmF0aXZlKSB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnB4O1xufVxuaW9uLWljb24uaGVhZGVyX21lbnUge1xuICBmb250LXNpemU6IDIycHg7XG4gIG1pbi13aWR0aDogMjBweDtcbiAgY29sb3I6IHZhcigtLWhlYWRlci1idG4tc3ZnKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgcGFkZGluZzogN3B4O1xufVxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6dmFyKC0taGVhZGVyLWJnKTtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbn1cbmlvbi10aXRsZXtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDAhaW1wb3J0YW50O1xufVxuaW9uLWJ1dHRvbntcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbn1cbmlvbi10b29sYmFye1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuIl19 */";

/***/ }),

/***/ 6708:
/*!**************************************************************************!*\
  !*** ./src/app/components/accordion/accordion.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"accordion__item\">\n  <div class=\"accordion__head\" (click)=\"toggleAccordion()\" [ngClass]=\"this.isMenuOpen ? 'active' : 'inactive'\">\n    <div class=\"order__date\">{{ datezak | date: 'dd.MM.yyyy, HH:mm' }}</div>\n    <div class=\"order__number\" *ngIf=\"name\">№ {{ name }}</div>\n    <div class=\"order__price\" *ngIf=\"total\">{{ total }} <sup>Р</sup></div>\n  </div>\n  <div [ngClass]=\"this.isMenuOpen ? 'active' : 'inactive'\">\n    <!--<div class=\"accordion__content\" [innerHTML]=\"prodarr\">-->\n    <div class=\"accordion__content\" *ngIf=\"prodarr.length\">\n      <ul class=\"order__list\">\n        <li *ngFor=\"let prod of prodarr;\">\n          <div *ngIf=\"!prod['is_gift']\">\n            <div class=\"dish__name\">{{prod['title']}} <span *ngIf=\"prod['modifiers'].length && prod['modifiers'].length>1\" class=\"txtwhite\"><br>(<span *ngFor=\"let item of prod['modifiers'];\"><span *ngIf=\"item.title\" >{{item.title}}<span *ngIf=\"item.count>1\">x{{item.count}}</span>, </span></span>)</span></div>\n            <div class=\"dish__count\" *ngIf=\"prod['count']\">x {{prod['count']}}</div>\n            <div class=\"dish__count\" *ngIf=\"!prod['count']\">x 1</div>\n            <div class=\"dish__price price\">{{prod['price']}}<sup>р</sup></div>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <ion-button *ngIf=\"prodarr.length\" type=\"button\" expand=\"block\" (click)=\"broadcastName(orderid)\">Повторить заказ</ion-button>\n  </div>\n</div>\n";

/***/ }),

/***/ 3998:
/*!**********************************************************************!*\
  !*** ./src/app/components/cabmenu/cabmenu.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n<div class=\"personal-area__head\">\n  <ul class=\"tabs\">\n    <!--<li [ngClass]=\"{'tab-link current' : title == 'Мои данные'}\" routerLink=\"/profile\">Мои данные</li>-->\n    <!--<li [ngClass]=\"{'tab-link current' : title == 'Мои адреса'}\" routerLink=\"/myadres\">Мои адреса</li>-->\n    <!--<li [ngClass]=\"{'tab-link current' : title == 'Мои заказы'}\" routerLink=\"/myorders\">Мои заказы</li>-->\n    <li [ngClass]=\"{'tab-link current' : name == 'Данные'}\" (click)=\"changeTab(title1);\">{{title1}}</li>\n    <li [ngClass]=\"{'tab-link current' : name == 'Заказы'}\" (click)=\"changeTab(title2)\">{{title2}}</li>\n    <li *ngIf=\"title3\" [ngClass]=\"{'tab-link current' : name == 'Бонусы'}\" (click)=\"changeTab(title3)\">{{title3}}</li>\n  </ul>\n  <a (click)=\"doLogout();\" class=\"logout\">Выйти</a>\n</div>\n";

/***/ }),

/***/ 1145:
/*!**********************************************************************!*\
  !*** ./src/app/components/counter/counter.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"counter ion-align-items-center ion-justify-content-end\" *ngIf=\"!btn\">\n  <!--<ion-button class=\"qtu_btn\" color=\"dark\" (click)=\"$event.stopPropagation(); $event.preventDefault(); setQuantity($event, false)\"  fill=\"clear\" size=\"default\">-->\n  <!--<ion-icon size=\"large\" color=\"dark\" slot=\"icon-only\" name=\"remove\"></ion-icon>-->\n  <!--</ion-button>-->\n  <!--<div class=\"counter-quantity\"><ion-text>{{quantity}}</ion-text></div>-->\n  <!--<ion-button class=\"qtu_btn\" color=\"dark\" (click)=\"$event.stopPropagation(); $event.preventDefault(); setQuantity($event, true)\" fill=\"clear\" size=\"default\">-->\n  <!--<ion-icon size=\"large\" color=\"dark\" slot=\"icon-only\" name=\"add\"></ion-icon>-->\n  <!--</ion-button>-->\n  <button class=\"qtu_btn remove_btn\" (click)=\"$event.stopPropagation(); $event.preventDefault(); setQuantity($event, false)\">\n    <ion-icon color=\"quantity\" slot=\"icon-only\" name=\"remove\"></ion-icon>\n  </button>\n  <div class=\"counter-quantity\"><ion-text>{{quantity}}</ion-text></div>\n  <button class=\"qtu_btn add_btn\" (click)=\"$event.stopPropagation(); $event.preventDefault(); setQuantity($event, true)\">\n    <ion-icon color=\"quantity\" slot=\"icon-only\" name=\"add\"></ion-icon>\n  </button>\n</div>\n<div class=\"counter ion-align-items-center btncounter\" *ngIf=\"btn && !link\" (click)=\"$event.stopPropagation(); $event.preventDefault(); setQuantity($event, true, true); btnAction()\">\n    <div class=\"priceprod\" ><div #PreiceText>{{price}} <sup>Р</sup></div><div class=\"loadelem loadspin\" #loadingIcon><div class=\"p-preloader__icon\"></div></div></div>\n</div>\n<div class=\"counter ion-align-items-center btncounter\" *ngIf=\"btn && link\">\n  <div class=\"priceprod\" ><div #PreiceText>{{price}} <sup>Р</sup></div><div class=\"loadelem loadspin\" #loadingIcon><div class=\"p-preloader__icon\"></div></div></div>\n</div>\n\n";

/***/ }),

/***/ 2935:
/*!****************************************************************************!*\
  !*** ./src/app/components/countmodif/countmodif.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"counter ion-align-items-center\">\n  <button class=\"qtu_btn remove_btn\" (click)=\"$event.stopPropagation(); $event.preventDefault(); setQuantity($event, false); modifAction(quantity)\">\n    <ion-icon color=\"quantity\" slot=\"icon-only\" name=\"remove\"></ion-icon>\n  </button>\n  <div class=\"counter-quantity\"><ion-text>{{quantity}}</ion-text></div>\n  <button class=\"qtu_btn add_btn\" (click)=\"$event.stopPropagation(); $event.preventDefault(); setQuantity($event, true);modifAction(quantity)\">\n    <ion-icon color=\"quantity\" slot=\"icon-only\" name=\"add\"></ion-icon>\n  </button>\n</div>\n";

/***/ }),

/***/ 1757:
/*!********************************************************************!*\
  !*** ./src/app/components/footer/footer.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-footer collapse=\"fade\" class=\"ion-no-border transparent\">\n  <section *ngIf=\"!isCart\" class=\"footer_btn\">\n    <div *ngIf=\"!isCheckout\">\n      <ion-button expand=\"block\" routerLink=\"/cart\">\n        <div class=\"cart_btn\">\n          <ion-text style=\"text-transform: none;font-size: 16px\">Корзина</ion-text>\n          <ion-text *ngIf=\"cart.giftsArrDish.length\" class=\"priceprod\" style=\"font-size: 16px;min-width: 100px;text-align: end;\">{{cart.sum+cart.giftsArrDish.length}}  <sup>Р</sup></ion-text>\n          <ion-text *ngIf=\"!cart.giftsArrDish.length\" class=\"priceprod\" style=\"font-size: 16px;min-width: 100px;text-align: end;\">{{cart.sum}}  <sup>Р</sup></ion-text>\n        </div>\n      </ion-button>\n    </div>\n    <div *ngIf=\"isCheckout\">\n      <ion-grid style=\"padding: 0;\">\n        <ion-row style=\"padding: 0;\">\n          <ion-col size=\"6\">\n            <ion-button expand=\"block\" routerLink=\"/cart\">\n              <div class=\"cart_btn\">\n                <ion-text style=\"text-transform: none;font-size: 14px\">Корзина</ion-text>\n                <ion-text *ngIf=\"cart.giftsArrDish.length\" class=\"priceprod\" style=\"font-size: 16px;min-width: auto;text-align: end;\">{{cart.sum+cart.giftsArrDish.length}}  <sup>Р</sup></ion-text>\n                <ion-text *ngIf=\"!cart.giftsArrDish.length\" class=\"priceprod\" style=\"font-size: 16px;min-width: auto;text-align: end;\">{{cart.sum}}  <sup>Р</sup></ion-text>\n              </div>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button expand=\"block\" (click)=\"$event.stopPropagation(); $event.preventDefault(); addOrder()\">\n              <div class=\"cart_btn\" style=\"justify-content: center\">\n                <ion-text style=\"text-transform: none;font-size: 14px\">Оформить заказ</ion-text>\n              </div>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </div>\n  </section>\n  <section *ngIf=\"isCart\" class=\"footer_btn\">\n\n    <ion-button *ngIf=\"isLogin\" expand=\"block\" routerLink=\"/checkout\">\n      <div class=\"cart_btn\">\n        <ion-text style=\"text-transform: none;font-size: 16px\">Оформить заказ</ion-text>\n        <ion-text *ngIf=\"cart.giftsArrDish.length\" class=\"priceprod\" style=\"font-size: 16px;min-width: 100px;text-align: end;\">{{cart.sum + cart.giftsArrDish.length}}  <sup>Р</sup></ion-text>\n        <ion-text *ngIf=\"!cart.giftsArrDish.length\" class=\"priceprod\" style=\"font-size: 16px;min-width: 100px;text-align: end;\">{{cart.sum}}  <sup>Р</sup></ion-text>\n      </div>\n    </ion-button>\n    <ion-button *ngIf=\"!isLogin\" expand=\"block\" routerLink=\"/auth\" [queryParams]=\"{frompage: 'cart'}\">\n      <div class=\"cart_btn\">\n        <ion-text style=\"text-transform: none;font-size: 16px\">Оформить заказ</ion-text>\n        <ion-text *ngIf=\"cart.giftsArrDish.length\" class=\"priceprod\" style=\"font-size: 16px;min-width: 100px;text-align: end;\">{{cart.sum + cart.giftsArrDish.length}}  <sup>Р</sup></ion-text>\n        <ion-text *ngIf=\"!cart.giftsArrDish.length\" class=\"priceprod\" style=\"font-size: 16px;min-width: 100px;text-align: end;\">{{cart.sum}}  <sup>Р</sup></ion-text>\n      </div>\n    </ion-button>\n  </section>\n  <section *ngIf=\"isCart&&isClearCart\" (click)=\"clearCartPage()\" class=\"clear-basket\">\n      Очистить корзину\n  </section>\n</ion-footer>\n";

/***/ }),

/***/ 2011:
/*!********************************************************************!*\
  !*** ./src/app/components/header/header.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-bg\">\n\n    <ion-buttons slot=\"start\" *ngIf=\"!isMain\">\n      <!--<ion-back-button *ngIf=\"!isCabinet\" [text]=\"text\" [defaultHref]=\"[backPath ? backPath : '/']\"></ion-back-button>-->\n      <!--<ion-back-button *ngIf=\"isCabinet\" [text]=\"text\" routerLink=\"/\" [defaultHref]=\"[backPath ? '/' : '/']\"></ion-back-button>-->\n      <ion-icon *ngIf=\"backBtn\" color=\"secondary\" name=\"arrow-back-outline\" (click)=\"goToUrl(backBtn)\" style=\"font-size: 26px;\n    margin-left: 10px;\"></ion-icon>\n      <!--<ion-button *ngIf=\"backBtn\"  color=\"secondary\" (click)=\"goToUrl(backBtn)\"></ion-button>-->\n      <ion-back-button *ngIf=\"!backBtn\" color=\"secondary\" [text]=\"text\" [defaultHref]=\"[backPath ? backPath : '/']\"></ion-back-button>\n    </ion-buttons>\n    <div *ngIf=\"isMain\" slot=\"start\" style=\"display: flex;justify-content: center;align-content: center;padding: 0 0 0 15px\">\n      <img class=\"logo\" alt=\"Logo\" src=\"./assets/img/logo.svg\" height=\"40\" style=\"height: 40px\">\n    </div>\n    <ion-title color=\"secondary\" *ngIf=\"!isMain\" >\n      {{title}}\n      <div class=\"subtitle\" *ngIf=\"additionalData\">{{additionalData}}</div>\n    </ion-title>\n    <div class=\"block_btns\" slot=\"end\" *ngIf=\"!isCart\">\n      <div *ngIf=\"phonesite\">\n        <ion-button slot=\"end\" fill=\"clear\" href=\"tel:{{phonesite}}\">\n          <ion-icon class=\"header_svg\" src=\"./assets/img/telicon.svg\"></ion-icon>\n        </ion-button>\n      </div>\n      <div *ngIf=\"authorized\" style=\"margin-left: 4px;\">\n        <ion-button fill=\"clear\" *ngIf=\"!isCabinet\" routerLink=\"/profile\" [queryParams]=\"{userid: userid}\">\n          <ion-icon *ngIf=\"!username\" class=\"header_svg\" src=\"./assets/img/profile.svg\"></ion-icon>\n        </ion-button>\n      </div>\n\n      <div *ngIf=\"!authorized\" style=\"margin-left: 4px;\">\n\n        <ion-button fill=\"clear\" *ngIf=\"!isCabinet\" routerLink=\"/auth\">\n          <ion-icon class=\"header_svg\" src=\"./assets/img/profile.svg\"></ion-icon>\n        </ion-button>\n      </div>\n      <div *ngIf=\"!isMenu\" style=\"width: 5px\">\n      </div>\n      <!--<ion-buttons >-->\n        <ion-menu-button [autoHide]=\"false\" fill=\"clear\" *ngIf=\"isMenu\"><ion-icon class=\"header_menu\" src=\"./assets/img/burger.svg\"></ion-icon></ion-menu-button>\n      <!--</ion-buttons>-->\n    </div>\n  </ion-toolbar>\n</ion-header>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_shared_module_ts.js.map