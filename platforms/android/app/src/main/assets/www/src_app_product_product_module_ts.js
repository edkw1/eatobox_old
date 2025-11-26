"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_product_product_module_ts"],{

/***/ 6329:
/*!***************************************************!*\
  !*** ./src/app/product/product-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPageRoutingModule": () => (/* binding */ ProductPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.page */ 1891);




const routes = [
    {
        path: '',
        component: _product_page__WEBPACK_IMPORTED_MODULE_0__.ProductPage
    }
];
let ProductPageRoutingModule = class ProductPageRoutingModule {
};
ProductPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductPageRoutingModule);



/***/ }),

/***/ 1589:
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPageModule": () => (/* binding */ ProductPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-routing.module */ 6329);
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.page */ 1891);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);








let ProductPageModule = class ProductPageModule {
};
ProductPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductPageRoutingModule
        ],
        declarations: [_product_page__WEBPACK_IMPORTED_MODULE_1__.ProductPage]
    })
], ProductPageModule);



/***/ }),

/***/ 1891:
/*!*****************************************!*\
  !*** ./src/app/product/product.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPage": () => (/* binding */ ProductPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _product_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.page.html?ngResource */ 2699);
/* harmony import */ var _product_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.page.scss?ngResource */ 5808);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cart.service */ 910);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 2879);










let ProductPage = class ProductPage {
    constructor(route, api, cart, formBuilder, animationCtrl, storage) {
        this.route = route;
        this.api = api;
        this.cart = cart;
        this.formBuilder = formBuilder;
        this.animationCtrl = animationCtrl;
        this.storage = storage;
        this.countcur = 0;
        this.modifierform = [];
        this.productsitem = {};
        this.numChecked = 0;
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
            ]
        };
        this.id = this.route.snapshot.paramMap.get('id');
        // this.title = this.route.snapshot.paramMap.get('title');
        this.countcur = this.cart.getItemQuantity(this.id) || 1;
        this.loadProdItem(this.id);
    }
    loadProdItem(idprod) {
        console.log('ITEM ');
        this.storage.get('appSet').then((res) => {
            if (res) {
                console.log('appSet', res);
                console.log(typeof (res));
                this.noimgProd = res['noimgProd'];
            }
        });
        this.api.getApi('products', { 'id': idprod }).then(res => {
            console.log('PROD', res);
            if (res.hasOwnProperty('data') && res['data'].length) {
                this.itemProd = res['data'][0];
                this.priceProd = parseInt(this.itemProd['price']);
                this.image = this.itemProd['image'];
                this.title = this.itemProd['title'];
                if (this.itemProd.hasOwnProperty('modifierCategories') && this.itemProd['modifierCategories'].length) {
                    console.log('this.modifierCategories', this.itemProd['modifierCategories']);
                    // this.setSettings(this.itemProd['modifierCategories']);
                    let formselem = this.itemProd['modifierCategories'];
                    formselem.forEach(item => {
                    });
                    let form = {};
                    for (let i = 0; i < formselem.length; i++) {
                        let name = 'test' + formselem[i].id;
                        form[name] = this.formBuilder.array([]);
                    }
                    console.log('form', form);
                    this.modific = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup(form);
                    //   this.modific = this.formBuilder.group({
                    //   test270: this.formBuilder.array([]),
                    // });
                    // console.log(typeof (this.formBuilder.group));
                    // this.modific = this.formBuilder.group({
                    //   test271: this.formBuilder.array([]),
                    // })
                }
            }
        });
        // this.itemProd = CartService.getDishById(idprod);
        console.log('itemProd', this.itemProd);
    }
    eventCaught(event) {
        console.log('COUNT_END', event);
        this.countcur = event;
    }
    animationAdd(elem1, elem2) {
        elem1.classList.remove('loadelem');
        elem2.classList.add('loadelem');
    }
    onCheckboxChange(e, idmod, is_required, max_amount, min_amount) {
        let maxVal = parseInt(max_amount);
        let minVal = parseInt(min_amount);
        let checkArray = this.modific.get(idmod);
        console.log('maxVal', maxVal);
        console.log('checkArray', checkArray);
        console.log(' checkArray.controls', checkArray.controls);
        let prod = JSON.parse(e.target.value);
        if (checkArray.controls.length >= maxVal) {
            if (e.target.checked == false) {
                let i = 0;
                checkArray.controls.forEach((item) => {
                    if (item.value == e.target.value) {
                        this.priceProd -= prod.price;
                        checkArray.removeAt(i);
                        return;
                    }
                    i++;
                });
            }
            e.target.checked = false;
            console.log('e.target.checked', e.target.checked);
            console.log('STOP');
            // return false;
        }
        else {
            if (e.target.checked) {
                checkArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(e.target.value));
                console.log('checkArray', checkArray.controls.length);
                console.log('e.target.value', JSON.parse(e.target.value));
                this.priceProd += prod.price;
            }
            else {
                let i = 0;
                checkArray.controls.forEach((item) => {
                    if (item.value == e.target.value) {
                        this.priceProd -= prod.price;
                        checkArray.removeAt(i);
                        return;
                    }
                    i++;
                });
            }
        }
        // console.log('checkArray',checkArray.value.length);
    }
    // public setSettings(formData){
    //   console.log('formData',formData);
    //   let form={};
    //   for (let i=0; i<formData.length; i++){
    //     if(formData[i].is_active=='Y'){
    //       form['test'+formData[i].id] = new FormControl('');
    //     }
    //
    //   }
    //   console.log('form',form);
    //   this.modific = new FormGroup(form);
    // }
    // public onChangeAnswer(checked: boolean, formid, numcheck: number) {
    //   checked ? this.numChecked++ : this.numChecked--;
    //
    //   const answerFormArray = this.modific.get('test'+formid) as FormArray;
    //   console.log('answerFormArray.controls',answerFormArray.controls);
    //   if (this.numChecked >= numcheck) {
    //     answerFormArray.controls.forEach((item) => {
    //       if (!item.value) item.disable()
    //     })
    //   } else {
    //     answerFormArray.controls.forEach((item) => {
    //       if (!item.value) item.enable()
    //     })
    //   }
    // }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.params = params;
        });
    }
    submitfunc() {
        let formselemSubmit = this.itemProd['modifierCategories'];
        let nextStep = true;
        formselemSubmit.forEach(item => {
            let lengItem = this.modific.value['test' + item['id']].length;
            let minAmount = parseInt(item['min_amount']);
            let maxAmount = parseInt(item['max_amount']);
            if (item['is_required'] == 'Y') {
                if (lengItem) {
                    if (lengItem < minAmount) {
                        this.api.alertMessage(item['title'], 'Минимум нужно выбрать ' + minAmount);
                        nextStep = false;
                        return false;
                    }
                }
                else {
                    this.api.alertMessage('Вы не выбрали ' + item['title'], '');
                    nextStep = false;
                    return false;
                }
            }
            if (lengItem > maxAmount) {
                this.api.alertMessage(item['title'], 'Максимум можно выбрать ' + maxAmount);
                nextStep = false;
                return false;
            }
            // console.log('ITEM',item);
        });
        if (nextStep) {
            console.log('this.modific.status', this.modific.status);
            console.log('this.modific.value', this.modific.value);
            this.modifierform = [];
            this.productsitem = {};
            let modifierformTemp = this.modific.value;
            if (!this.countcur) {
                this.api.alertMessage('Выберите количество! ', '');
                return false;
            }
            else {
                if (this.modific.status == 'VALID') {
                    for (let key in modifierformTemp) {
                        if (modifierformTemp[key].length) {
                            modifierformTemp[key].forEach(item => {
                                let temp = JSON.parse(item);
                                console.log('temp', temp);
                                this.modifierform.push(temp);
                                console.log('modifierform', this.modifierform);
                            });
                        }
                    }
                    this.cart.addItemModif(this.id + '/' + this.modifierform.reduce(function (sum, current) {
                        return sum + (current.id).toString();
                    }, ''), true, this.countcur, this.modifierform, this.priceProd);
                    _services_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService.dishes.push({
                        id: this.id + '/' + this.modifierform.reduce(function (sum, current) {
                            return sum + (current.id).toString();
                        }, ''),
                        quantity: this.countcur,
                        modifiers: this.modifierform,
                        price: this.priceProd,
                        image: this.image,
                        title: this.title
                    });
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
                    // this.cart.addedItems[this.id] = {
                    //   quantity : this.countcur,
                    //   modifiers : this.modifierform,
                    //   price : (this.priceProd).toString()
                    // };
                    this.productsitem[this.id] = {
                        quantity: this.countcur,
                        modifiers: this.modifierform,
                        price: this.priceProd
                    };
                    console.log('this.productsitem', this.productsitem);
                }
            }
            // modifierformTemp.forEach(item=>{
            //   let temp = JSON.parse(item);
            //   console.log('TEMP', temp);
            //   temp.forEach(item=>{
            //
            //   });
            //
            // });
            // console.log('this.countcur', this.countcur);
        }
    }
};
ProductPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AnimationController },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage }
];
ProductPage.propDecorators = {
    PreiceText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['PreiceText', { read: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef },] }],
    loadingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['loadingIcon', { read: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef },] }]
};
ProductPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-product',
        template: _product_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_product_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductPage);



/***/ }),

/***/ 5808:
/*!******************************************************!*\
  !*** ./src/app/product/product.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-item-group {\n  padding-top: 20px;\n}\n\n.item_prod_img img {\n  border-radius: 10px;\n}\n\n.item-fullw {\n  width: 100%;\n}\n\nion-item-group ion-item::part(native) {\n  background: var(--body-bg);\n  color: var(--body-text);\n  font-size: 18px;\n}\n\n.item-title {\n  margin-bottom: 15px;\n}\n\n.item-title b {\n  color: var(--product-name-price);\n  font-weight: 600;\n}\n\n.item-title span {\n  font-size: 16px;\n  font-weight: 400;\n  color: var(--body-text);\n  margin-left: 5px;\n}\n\n.modal-product__descr {\n  font-size: 14px;\n  margin-bottom: 30px;\n  line-height: 1.352;\n  color: var(--body-text);\n}\n\n.product-bju {\n  margin-bottom: 40px;\n  list-style: none;\n  padding: 15px 0;\n  border: 2px solid var(--header-address-border);\n  border-radius: 7px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.product-bju li {\n  width: 25%;\n  font-size: 14px;\n  text-align: center;\n  position: relative;\n}\n\n.product-bju li:not(:last-child)::before {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  height: 33px;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 0;\n  background-color: var(--header-address-border);\n}\n\n.product-bju li span {\n  color: var(--product-name-price);\n  font-size: 18px;\n  display: block;\n}\n\n.priceprod {\n  background-color: var(--basket-bottom-price-bg);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 37px;\n  min-width: 75px;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 0 15px;\n  color: var(--basket-bottom-price-text);\n  border-radius: 7px;\n}\n\n.footer_btn ion-button {\n  height: 50px;\n}\n\n.cart_btn {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.product__composition-title {\n  font-size: 16px;\n  margin-bottom: 10px;\n  padding-left: 0;\n}\n\n.checkbox-container {\n  width: 100%;\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 17px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  color: var(--product-name-price);\n  line-height: 1.538;\n  font-size: 14px;\n}\n\n.checkbox-container input {\n  cursor: pointer;\n  position: absolute;\n  opacity: 0;\n  height: 0;\n  width: 0;\n}\n\n.checkbox-container input ~ p {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\n.checkmark {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n  width: 22px;\n  height: 22px;\n  border: 1px solid var(--border-checkbox);\n  background-color: var(--bg-checkbox);\n  border-radius: 3px;\n}\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.checkbox-container .checkmark:after {\n  width: 22px;\n  height: 22px;\n  background-size: 35% 35%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url('icon-checkbox.svg');\n}\n\n.checkbox-container input:checked ~ p .checkmark:after {\n  display: block;\n}\n\n.checkbox-container input:checked ~ p .checkmark {\n  background-color: var(--bg-checked-checkbox);\n  border-color: var(--bg-checked-checkbox);\n}\n\n.loadspin {\n  display: block;\n  text-align: center;\n  width: 100%;\n}\n\n.loadelem {\n  display: none;\n}\n\n.p-preloader__icon {\n  width: 30px;\n  height: 30px;\n  border-top: 3px solid transparent;\n  border-right: 3px solid var(--products-bg);\n  border-bottom: 3px solid var(--products-bg);\n  border-left: 3px solid var(--products-bg);\n  border-radius: 25px;\n  animation-name: rotatePreloader;\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n@keyframes rotatePreloader {\n  0% {\n    transform: rotateZ(0);\n  }\n  100% {\n    transform: rotateZ(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0FBR0Y7O0FBREE7RUFDRSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUlGOztBQUZBO0VBQ0UsbUJBQUE7QUFLRjs7QUFIQTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7QUFNRjs7QUFKQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFPRjs7QUFMQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFRRjs7QUFOQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUdBLGFBQUE7RUFHQSw4QkFBQTtBQVNGOztBQVBBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBVUY7O0FBUkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFHQSwyQkFBQTtFQUNBLFFBQUE7RUFDQSw4Q0FBQTtBQVdGOztBQVRBO0VBQ0UsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVlGOztBQVZBO0VBQ0UsK0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0FBYUY7O0FBWEE7RUFDRSxZQUFBO0FBY0Y7O0FBWkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFlRjs7QUFiQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFnQkY7O0FBZEE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUdBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFpQkY7O0FBZkE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFrQkY7O0FBaEJBO0VBR0UsYUFBQTtFQUdBLDhCQUFBO0VBR0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFtQkY7O0FBakJBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBR0EsMkJBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUFvQkY7O0FBbEJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQXFCRjs7QUFuQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDBDQUFBO0FBc0JGOztBQXBCQTtFQUNFLGNBQUE7QUF1QkY7O0FBckJBO0VBQ0UsNENBQUE7RUFDQSx3Q0FBQTtBQXdCRjs7QUF0QkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBeUJGOztBQXZCQTtFQUNFLGFBQUE7QUEwQkY7O0FBeEJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsMkNBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBRUEsK0JBQUE7RUFFQSxzQkFBQTtFQUVBLG1DQUFBO0VBRUEsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBMkJGOztBQWpCQTtFQUNFO0lBRUUscUJBQUE7RUE4QkY7RUE3QkE7SUFFRSwwQkFBQTtFQStCRjtBQUNGIiwiZmlsZSI6InByb2R1Y3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0tZ3JvdXB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLml0ZW1fcHJvZF9pbWcgaW1ne1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLml0ZW0tZnVsbHd7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWl0ZW0tZ3JvdXAgaW9uLWl0ZW06OnBhcnQobmF0aXZlKSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJvZHktYmcpO1xuICBjb2xvcjogdmFyKC0tYm9keS10ZXh0KTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLml0ZW0tdGl0bGV7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uaXRlbS10aXRsZSBie1xuICBjb2xvcjogdmFyKC0tcHJvZHVjdC1uYW1lLXByaWNlKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5pdGVtLXRpdGxlIHNwYW57XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLWJvZHktdGV4dCk7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4ubW9kYWwtcHJvZHVjdF9fZGVzY3Ige1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM1MjtcbiAgY29sb3I6IHZhcigtLWJvZHktdGV4dCk7XG59XG4ucHJvZHVjdC1ianUge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWhlYWRlci1hZGRyZXNzLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucHJvZHVjdC1ianUgbGkge1xuICB3aWR0aDogMjUlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2R1Y3QtYmp1IGxpOm5vdCg6bGFzdC1jaGlsZCk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAzM3B4O1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1hZGRyZXNzLWJvcmRlcik7XG59XG4ucHJvZHVjdC1ianUgbGkgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1wcm9kdWN0LW5hbWUtcHJpY2UpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnByaWNlcHJvZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2tldC1ib3R0b20tcHJpY2UtYmcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzN3B4O1xuICBtaW4td2lkdGg6IDc1cHg7XG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgY29sb3I6IHZhcigtLWJhc2tldC1ib3R0b20tcHJpY2UtdGV4dCk7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cbi5mb290ZXJfYnRuIGlvbi1idXR0b257XG4gIGhlaWdodDogNTBweDtcbn1cbi5jYXJ0X2J0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvZHVjdF9fY29tcG9zaXRpb24tdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi5jaGVja2JveC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxN3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1wcm9kdWN0LW5hbWUtcHJpY2UpO1xuICBsaW5lLWhlaWdodDogMS41Mzg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jaGVja2JveC1jb250YWluZXIgaW5wdXQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbn1cbi5jaGVja2JveC1jb250YWluZXIgaW5wdXQgfiBwIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4uY2hlY2ttYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNoZWNrYm94KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY2hlY2tib3gpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4uY2hlY2ttYXJrOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNoZWNrYm94LWNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgYmFja2dyb3VuZC1zaXplOiAzNSUgMzUlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nL2ljb24tY2hlY2tib3guc3ZnKTtcbn1cbi5jaGVja2JveC1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IHAgLmNoZWNrbWFyazphZnRlcntcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY2hlY2tib3gtY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiBwIC5jaGVja21hcmt7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNoZWNrZWQtY2hlY2tib3gpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWJnLWNoZWNrZWQtY2hlY2tib3gpO1xufVxuLmxvYWRzcGlue1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5sb2FkZWxlbSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucC1wcmVsb2FkZXJfX2ljb24ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItdG9wOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHZhcigtLXByb2R1Y3RzLWJnKTtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLXByb2R1Y3RzLWJnKTtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1wcm9kdWN0cy1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZVByZWxvYWRlcjtcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZVByZWxvYWRlcjtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVQcmVsb2FkZXIge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDApOyB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDM2MGRlZyk7IH0gfVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZVByZWxvYWRlciB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMCk7IH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKTsgfSB9XG4iXX0= */";

/***/ }),

/***/ 2699:
/*!******************************************************!*\
  !*** ./src/app/product/product.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<app-header title=\"{{params['title'] || ''}}\" [isMain]=\"false\"></app-header>\n<ion-content>\n  <ion-item-group *ngIf=\"itemProd\">\n    <ion-item lines=\"none\">\n      <div class=\"item_prod_img\">\n        <img class=\"photo\" *ngIf=\"itemProd['image']\" [src]=\"itemProd['image']\" (error)=\"img.src = noimgProd\" #img>\n        <img *ngIf=\"!itemProd['image']\" src=\"{{noimgProd}}\" class=\"photo\">\n      </div>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <div class=\"ion-padding-vertical item-wrap item-fullw\">\n        <div class=\"item-info\">\n          <div class=\"item-title\">\n            <b>{{itemProd['title']}}</b><span class=\"weightprod\"\n                                              *ngIf=\"itemProd['weight'] && itemProd['weight']!=='0'\"> {{itemProd['weight']}}\n            г</span>\n          </div>\n          <div class=\"modal-product__descr\" *ngIf=\"itemProd['description']\">\n            {{itemProd['description']}}\n          </div>\n          <ul class=\"product-bju\"\n              *ngIf=\"(itemProd['energy_amount']&&itemProd['energy_amount']!=='0')||(itemProd['proteins_amount']&&itemProd['proteins_amount']!=='0')||(itemProd['fat_amount']&&itemProd['fat_amount']!=='0')||(itemProd['carbohydrates_amount']&&itemProd['carbohydrates_amount']!=='0')\">\n            <li *ngIf=\"itemProd['energy_amount']\">\n              <span>{{itemProd['energy_amount']| number:'1.0-0' | removeComma}}</span>ккал\n            </li>\n            <li *ngIf=\"itemProd['proteins_amount']\">\n              <span>{{itemProd['proteins_amount']| number:'1.0-0' | removeComma}}</span>белки\n            </li>\n            <li *ngIf=\"itemProd['fat_amount']\"><span>{{itemProd['fat_amount']| number:'1.0-0' | removeComma}}</span>жиры\n            </li>\n            <li *ngIf=\"itemProd['carbohydrates_amount']\">\n              <span>{{itemProd['carbohydrates_amount']| number:'1.0-0' | removeComma}}</span>углеводы\n            </li>\n          </ul>\n          <ion-row class=\"item-counter ion-justify-content-between ion-align-items-center\">\n            <ion-col *ngIf=\"itemProd['price']!='0'\" size=\"6\" class=\"ion-justify-content-between ion-align-items-center\">\n              <ion-text class=\"price_prod\"><b>{{itemProd['price']}} ₽</b></ion-text>\n            </ion-col>\n            <ion-col size=\"6\" class=\"ion-justify-content-end ion-align-items-center\">\n              <app-counter *ngIf=\"itemProd['count']!==0 && !itemProd['modifierCategories'].length\" [id]=\"itemProd['id']\"\n                           [count]=\"itemProd['count']\"></app-counter>\n            </ion-col>\n          </ion-row>\n          <div *ngIf=\"itemProd['modifierCategories'].length\">\n            <form *ngIf=\"modific\" [formGroup]=\"modific\">\n\n              <div *ngFor=\"let modCat of itemProd['modifierCategories'];\">\n                <div *ngIf=\"modCat['is_active']=='Y'\">\n                  <ion-row>\n                    <ion-col size=\"12\" class=\"product__composition-title\">\n                      {{modCat['title']}} <sup *ngIf=\"modCat['is_required']=='Y'\">*</sup>\n                    </ion-col>\n                  </ion-row>\n                  <div *ngIf=\"modCat['modifiers'].length\">\n                    <ion-row *ngFor=\"let modifitem of modCat['modifiers'];\">\n                      <label class=\"checkbox-container\" *ngIf=\"modifitem['is_active']=='Y'\">\n                        <!--<input type=\"checkbox\"  value='\"id\": {{modifitem.id}},\"title\": {{modifitem.title}},\"price\": {{modifitem.price}},\"count\": 1' (change)=\"onCheckboxChange($event, 'test'+modCat['id'], modCat['is_required'], modCat['max_amount'], modCat['min_amount'])\">-->\n                        <input type=\"checkbox\"  value='{ \"id\": {{modifitem.id}}, \"title\": \"{{modifitem.title}}\",\"price\":{{modifitem.price}},\"count\": 1 }' (change)=\"onCheckboxChange($event, 'test'+modCat['id'], modCat['is_required'], modCat['max_amount'], modCat['min_amount'])\">\n                        <p>\n                          {{modifitem['title']}}\n                          <span *ngIf=\"modifitem['price'] && modifitem['price']!=='0'\"> + {{modifitem['price']}}\n                            <sup>р</sup></span>\n                          <span class=\"checkmark\"></span>\n                        </p>\n                      </label>\n                      <!--<ion-col *ngIf=\"modifitem['is_active']=='Y'\" size=\"6\">-->\n\n                      <!--</ion-col>-->\n                      <!--<ion-col *ngIf=\"modifitem['is_active']=='Y'\" size=\"6\">-->\n                      <!--{{modifitem['title']}}-->\n                      <!--</ion-col>-->\n                    </ion-row>\n                  </div>\n                </div>\n              </div>\n\n              <ion-row *ngIf=\"itemProd['modifierCategories'].length\" class=\"ion-align-items-center\">\n                <ion-col size=\"4\">\n                  <app-countmodif *ngIf=\"itemProd['modifierCategories'].length\" [id]=\"itemProd['id']\"\n                               [count]=\"itemProd['count']\" (modifSave)=\"eventCaught($event)\"></app-countmodif>\n                </ion-col>\n                <ion-col size=\"8\">\n                  <section class=\"footer_btn\">\n                    <ion-button expand=\"block\" (click)=\"submitfunc()\">\n                      <div class=\"cart_btn\">\n                        <div #PreiceText><ion-text style=\"text-transform: none;font-size: 16px\">Добавить</ion-text></div><div class=\"loadelem loadspin\" #loadingIcon><div class=\"p-preloader__icon\"></div></div>\n                        <ion-text class=\"priceprod\" style=\"font-size: 16px;min-width: 100px;text-align: end;\">{{countcur*priceProd}}  <sup>Р</sup>\n                        </ion-text>\n                      </div>\n                    </ion-button>\n                  </section>\n                </ion-col>\n              </ion-row>\n            </form>\n            <!--<div>{{modific.value | json}}</div>-->\n          </div>\n        </div>\n        <!--<ion-row *ngIf=\"itemProd['count']==0\" class=\"item-counter ion-justify-content-center ion-align-items-center\">-->\n        <!--<a class=\"phone_call\" href=\"tel:{{telcount}}\">{{telcountTxt}}</a>-->\n        <!--</ion-row>-->\n      </div>\n    </ion-item>\n  </ion-item-group>\n</ion-content>\n<app-footer></app-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_product_product_module_ts.js.map