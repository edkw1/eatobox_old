"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_editadres_editadres_module_ts"],{

/***/ 9021:
/*!*******************************************************!*\
  !*** ./src/app/editadres/editadres-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditadresPageRoutingModule": () => (/* binding */ EditadresPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _editadres_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editadres.page */ 2346);




const routes = [
    {
        path: '',
        component: _editadres_page__WEBPACK_IMPORTED_MODULE_0__.EditadresPage
    }
];
let EditadresPageRoutingModule = class EditadresPageRoutingModule {
};
EditadresPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditadresPageRoutingModule);



/***/ }),

/***/ 5816:
/*!***********************************************!*\
  !*** ./src/app/editadres/editadres.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditadresPageModule": () => (/* binding */ EditadresPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _editadres_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editadres-routing.module */ 9021);
/* harmony import */ var _editadres_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editadres.page */ 2346);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);








let EditadresPageModule = class EditadresPageModule {
};
EditadresPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _editadres_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditadresPageRoutingModule
        ],
        declarations: [_editadres_page__WEBPACK_IMPORTED_MODULE_1__.EditadresPage]
    })
], EditadresPageModule);



/***/ }),

/***/ 2346:
/*!*********************************************!*\
  !*** ./src/app/editadres/editadres.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditadresPage": () => (/* binding */ EditadresPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _editadres_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editadres.page.html?ngResource */ 5901);
/* harmony import */ var _editadres_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editadres.page.scss?ngResource */ 2597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _services_useradr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/useradr.service */ 2626);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 2879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5485);










let EditadresPage = class EditadresPage {
    constructor(api, navCtrl, useradr, 
    // public alertController: AlertController,
    formBuilder, storage, route) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.useradr = useradr;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.route = route;
        this.loggedIn = false;
        this.tit = "Изменить";
        this.userid = '';
        this.validationMessages = {
            deliveryadr: [
                { type: 'required', message: 'Введите данные' },
                { type: 'minlength', message: 'Пока мало данных' },
                { type: 'maxlength', message: 'Сильно большой текст!' },
            ],
            delstreet: [
                { type: 'required', message: 'Введите данные' },
                { type: 'minlength', message: 'Пока мало данных' },
                { type: 'maxlength', message: 'Сильно большой текст!' },
            ],
            delhouse: [
                { type: 'required', message: 'Введите данные' },
                { type: 'maxlength', message: 'Сильно большой текст!' },
            ],
            delappart: [
                { type: 'maxlength', message: 'Сильно большой текст!' },
            ],
            additionalInfo: [
                { type: 'maxlength', message: 'Сильно большой текст!' }
            ],
        };
        // this.storage.get('userphone').then(sid => {
        //   this.loggedIn = !!sid;
        //   // this.ordering.controls.phone.reset(this.usernumber);
        //   console.log( 'EDITADRsid',sid);
        //   console.log( 'EDITADRstorage',this.loggedIn);
        // });
        this.route.queryParams.subscribe(params => {
            this.params = params;
            if (this.params.tit) {
                this.tit = this.params.tit;
            }
            if (this.params.userid) {
                this.userid = this.params.userid;
            }
        });
    }
    ngOnInit() {
        console.log('this.params', this.params);
        this.changeadr = this.formBuilder.group({
            deliveryadr: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('Альметьевск', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(60), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(4)]),
            delstreet: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(4)]),
            delhouse: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(4)]),
            delappart: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(4)]),
            additionalInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(160)]),
        });
        // if(this.params.street){
        //   this.changeadr.controls.delstreet.reset(this.params.street);
        // }
        // if(this.params.house){
        //   this.changeadr.controls.delhouse.reset(this.params.house);
        // }
        // if(this.params.flat){
        //   this.changeadr.controls.delappart.reset(this.params.flat);
        // }
    }
    changeAdr() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.loggedIn) {
                return;
            }
            for (let control in this.changeadr.controls) {
                if (this.changeadr.controls.hasOwnProperty(control)) {
                    this.changeadr.controls[control].markAsTouched();
                }
            }
            if (this.changeadr.status === 'INVALID') {
                return;
            }
            let city = '';
            let street = '';
            let hous = '';
            let appart = '';
            let comment = '';
            let dataorder = {};
            city = this.changeadr.value.deliveryadr ? this.changeadr.value.deliveryadr : '';
            street = this.changeadr.value.delstreet ? 'ул.' + this.changeadr.value.delstreet : '';
            hous = this.changeadr.value.delhouse ? 'д.' + this.changeadr.value.delhouse : '';
            appart = this.changeadr.value.delappart ? 'кв.' + this.changeadr.value.delappart : '';
            comment = this.changeadr.value.additionalInfo ? this.changeadr.value.additionalInfo : '';
            if (this.params.type == 'billing') {
                dataorder = {
                    meta_data: [
                        {
                            key: 'billing_entrance',
                            value: this.changeadr.value.deliveryadr
                        },
                        {
                            key: 'billing_intercom',
                            value: this.changeadr.value.delstreet
                        },
                        {
                            key: 'billing_floor',
                            value: this.changeadr.value.delhouse
                        },
                        {
                            key: 'billing_apartment',
                            value: this.changeadr.value.delappart
                        },
                        {
                            key: 'billing_description',
                            value: this.changeadr.value.additionalInfo
                        }
                    ],
                };
            }
            if (this.params.type == 'shipping') {
                dataorder = {
                    meta_data: [
                        {
                            key: 'shipping_entrance',
                            value: this.changeadr.value.deliveryadr
                        },
                        {
                            key: 'shipping_intercom',
                            value: this.changeadr.value.delstreet
                        },
                        {
                            key: 'shipping_floor',
                            value: this.changeadr.value.delhouse
                        },
                        {
                            key: 'shipping_apartment',
                            value: this.changeadr.value.delappart
                        },
                        {
                            key: 'shipping_description',
                            value: this.changeadr.value.additionalInfo
                        }
                    ],
                };
            }
            // this.api.changeAdrCustomer(this.params.userid, dataorder).then((res) => {
            //   console.log('dataorder', dataorder);
            //   if(res.hasOwnProperty('id')){
            //     this.api.alertMessage('Адрес изменен.', '');
            //     // this.navCtrl.back();
            //     this.navCtrl.navigateRoot('/profile?edit=1');
            //   } else {
            //     this.api.alertMessage('Искренне сожалеем,', 'произошла ошибка. Попробуйте чуть позже.');
            //   }
            //   console.log('UPDATE adr', res);
            // });
        });
    }
    goBack() {
        this.navCtrl.back();
    }
};
EditadresPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _services_useradr_service__WEBPACK_IMPORTED_MODULE_3__.UseradrService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute }
];
EditadresPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-editadres',
        template: _editadres_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_editadres_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditadresPage);



/***/ }),

/***/ 2597:
/*!**********************************************************!*\
  !*** ./src/app/editadres/editadres.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0YWRyZXMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 5901:
/*!**********************************************************!*\
  !*** ./src/app/editadres/editadres.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<app-header title=\"{{tit}} адрес\" [isMain]=\"false\" [isCart]=\"true\" [backBtn]=\"'/profile?userid='+userid\"></app-header>\n\n<ion-content>\n  <form *ngIf=\"changeadr\" [formGroup]=\"changeadr\">\n    <ion-item lines=\"inset\">\n      <ion-label position=\"stacked\">Город*</ion-label>\n      <ion-input formControlName=\"deliveryadr\" inputmode=\"text\" minlength=\"4\" maxlength=\"20\" [required]=\"true\" type=\"text\" readonly></ion-input>\n    </ion-item>\n    <div class=\"ion-padding-horizontal\" *ngFor=\"let validation of validationMessages.deliveryadr\">\n      <div class=\"error-message\"\n           *ngIf=\"changeadr.get('deliveryadr').hasError(validation.type) && (changeadr.get('deliveryadr').dirty || changeadr.get('deliveryadr').touched)\">\n        <ion-text color=\"primary\">{{ validation.message }}</ion-text>\n      </div>\n    </div>\n    <ion-item lines=\"inset\">\n      <ion-label position=\"stacked\">Улица*</ion-label>\n      <ion-input formControlName=\"delstreet\" inputmode=\"text\" minlength=\"4\" maxlength=\"15\" [required]=\"true\" type=\"text\"></ion-input>\n    </ion-item>\n    <div class=\"ion-padding-horizontal\" *ngFor=\"let validation of validationMessages.delstreet\">\n      <div class=\"error-message\"\n           *ngIf=\"changeadr.get('delstreet').hasError(validation.type) && (changeadr.get('delstreet').dirty || changeadr.get('delstreet').touched)\">\n        <ion-text color=\"primary\">{{ validation.message }}</ion-text>\n      </div>\n    </div>\n\n    <ion-item lines=\"inset\">\n      <ion-label position=\"stacked\">Дом*</ion-label>\n      <ion-input formControlName=\"delhouse\" inputmode=\"text\" maxlength=\"4\" type=\"text\" [required]=\"true\"></ion-input>\n    </ion-item>\n    <div class=\"ion-padding-horizontal\" *ngFor=\"let validation of validationMessages.delhouse\">\n      <div class=\"error-message\"\n           *ngIf=\"changeadr.get('delhouse').hasError(validation.type) && (changeadr.get('delhouse').dirty || changeadr.get('delhouse').touched)\">\n        <ion-text color=\"primary\">{{ validation.message }}</ion-text>\n      </div>\n    </div>\n    <ion-item lines=\"inset\">\n      <ion-label position=\"stacked\">Квартира</ion-label>\n      <ion-input formControlName=\"delappart\" inputmode=\"text\" maxlength=\"4\" type=\"text\"></ion-input>\n    </ion-item>\n    <div class=\"ion-padding-horizontal\" *ngFor=\"let validation of validationMessages.delappart\">\n      <div class=\"error-message\"\n           *ngIf=\"changeadr.get('delappart').hasError(validation.type) && (changeadr.get('delappart').dirty || changeadr.get('delappart').touched)\">\n        <ion-text color=\"primary\">{{ validation.message }}</ion-text>\n      </div>\n    </div>\n    <ion-item lines=\"inset\">\n      <ion-label position=\"stacked\">Комментарий для адреса (необязательно)</ion-label>\n      <ion-textarea formControlName=\"additionalInfo\" rows=\"3\" cols=\"20\"></ion-textarea>\n      <!--<ion-input formControlName=\"additionalInfo\" inputmode=\"text\" maxlength=\"160\" [required]=\"false\" type=\"text\"></ion-input>-->\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-text><small style=\"color:#737373\">Для сохранения параметров, пожалуйста заполните все поля отмеченные звёздочкой</small></ion-text>\n    </ion-item>\n    <div class=\"ion-padding-horizontal\" *ngFor=\"let validation of validationMessages.additionalInfo\">\n      <div class=\"error-message\"\n           *ngIf=\"changeadr.get('additionalInfo').hasError(validation.type) && (changeadr.get('additionalInfo').dirty || changeadr.get('additionalInfo').touched)\">\n        <ion-text color=\"primary\">{{ validation.message }}</ion-text>\n      </div>\n    </div>\n  </form>\n  <br>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">  <ion-button (click)=\"changeAdr()\" color=\"primary\" expand=\"block\"><ion-text color=\"secondary\" class=\"text_upper\"><b>Сохранить изменения</b></ion-text></ion-button>\n      </ion-col>\n      <!--<ion-col size=\"12\">  <ion-button (click)=\"goBack()\" size=\"medium\" color=\"secondary\" expand=\"block\"><ion-text color=\"dark\" class=\"text_upper\"><b>Отмена</b></ion-text></ion-button>-->\n      <!--</ion-col>-->\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_editadres_editadres_module_ts.js.map