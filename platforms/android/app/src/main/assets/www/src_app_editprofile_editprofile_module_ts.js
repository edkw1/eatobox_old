"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_editprofile_editprofile_module_ts"],{

/***/ 494:
/*!***********************************************************!*\
  !*** ./src/app/editprofile/editprofile-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditprofilePageRoutingModule": () => (/* binding */ EditprofilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _editprofile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editprofile.page */ 263);




const routes = [
    {
        path: '',
        component: _editprofile_page__WEBPACK_IMPORTED_MODULE_0__.EditprofilePage
    }
];
let EditprofilePageRoutingModule = class EditprofilePageRoutingModule {
};
EditprofilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditprofilePageRoutingModule);



/***/ }),

/***/ 9285:
/*!***************************************************!*\
  !*** ./src/app/editprofile/editprofile.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditprofilePageModule": () => (/* binding */ EditprofilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editprofile-routing.module */ 494);
/* harmony import */ var _editprofile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editprofile.page */ 263);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);








let EditprofilePageModule = class EditprofilePageModule {
};
EditprofilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditprofilePageRoutingModule
        ],
        declarations: [_editprofile_page__WEBPACK_IMPORTED_MODULE_1__.EditprofilePage]
    })
], EditprofilePageModule);



/***/ }),

/***/ 263:
/*!*************************************************!*\
  !*** ./src/app/editprofile/editprofile.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditprofilePage": () => (/* binding */ EditprofilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _editprofile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editprofile.page.html?ngResource */ 2498);
/* harmony import */ var _editprofile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editprofile.page.scss?ngResource */ 6138);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ 2879);









let EditprofilePage = class EditprofilePage {
    constructor(api, 
    // private useradr: UseradrService,
    navCtrl, storage, formBuilder, route) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.route = route;
        this.loadData = false;
        this.gendershow = false;
        this.birthdayshow = false;
        this.username = '';
        this.first_name = '';
        this.last_name = '';
        this.date_birth = '0';
        this.userid = '';
        this.usergendervalue = '0';
        this.personEmail = '';
        this.validationMessages = {
            name: [
                { type: 'required', message: 'Имя обязательно' },
                { type: 'maxlength', message: 'Слишком длинное' }
            ],
            lastname: [
                { type: 'maxlength', message: 'Слишком длинное' }
            ],
            email: [
                { type: 'required', message: 'E-mail обязателен для отправки данных заказа' },
                { type: 'pattern', message: 'Некорректный email' }
            ],
            // gender: [
            //   {type: 'required', message: 'Пол обязательно указать'},
            // ],
        };
        // this.storage.get('username').then(username => {
        //   if(username!==''){
        //     this.username = username;
        //   } else {
        //     this.username ='';
        //   }
        //   this.changeuser.controls.name.reset(this.username);
        //   console.log( 'CHECKOUTusername',this.username);
        // });
    }
    ngOnInit() {
        this.changeuser = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(50)]),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(50)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.personEmail, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
        });
        this.route.queryParams.subscribe(params => {
            this.params = params;
            console.log('this.params', this.params);
            if (this.params.mail) {
                this.changeuser.controls.email.reset(this.params.mail);
            }
            // if(this.params.tit){
            //   this.tit = this.params.tit;
            // }
        });
        this.storage.get('user').then(user => {
            console.log('USER', user);
            if (user !== '') {
                this.userid = user.id;
                this.first_name = user.first_name;
                this.last_name = user.last_name;
                this.personEmail = user.email;
                // this.personBirthday = user.date_birth;
                // this.personPhone = user.phone;
                // this.personPhoneShow = ApiService.createPhoneNumber(user.phone);
                this.usergendervalue = user.gender.value ? user.gender.value : '0';
                this.date_birth = user.date_birth ? user.date_birth : '0';
                // this.getCustomerInfo(this.userid);
                // this.getAdress(this.userid);
                // this.technologies = this.orders.oldOrders;
                this.changeuser.controls.name.reset(this.first_name);
                this.changeuser.controls.lastname.reset(this.last_name);
                this.changeuser.controls.email.reset(this.personEmail);
                console.log('usergendervalue', this.usergendervalue);
                console.log('date_birth', this.date_birth);
                if (this.usergendervalue == '0') {
                    console.log('gendershow', this.gendershow);
                    this.changeuser.setControl('gender', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([])));
                    this.gendershow = true;
                    console.log('gendershow2', this.gendershow);
                }
                else {
                    this.gendershow = false;
                    this.changeuser.removeControl('gender');
                }
                if (this.date_birth == '0') {
                    console.log('birthdayshow', this.birthdayshow);
                    this.changeuser.setControl('birthday', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([])));
                    this.birthdayshow = true;
                    console.log('birthdayshow2', this.birthdayshow);
                }
                else {
                    this.birthdayshow = false;
                    this.changeuser.removeControl('birthday');
                }
            }
            else {
                this.userid = '';
            }
        });
    }
    changeDataUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log('SUBMIT');
            // if (!this.loggedIn) {
            //   return;
            // }
            for (let control in this.changeuser.controls) {
                if (this.changeuser.controls.hasOwnProperty(control)) {
                    this.changeuser.controls[control].markAsTouched();
                }
            }
            if (this.changeuser.status === 'INVALID') {
                return;
            }
            console.log('SUBMIT2');
            let namedata = '';
            let emaildata = '';
            let datauser = {};
            namedata = this.changeuser.value.name ? datauser.first_name = this.changeuser.value.name : '';
            emaildata = this.changeuser.value.email ? datauser.email = this.changeuser.value.email : '';
            datauser = {
                id: this.userid,
                email: this.changeuser.value.email,
                first_name: this.changeuser.value.name,
                last_name: this.changeuser.value.lastname
            };
            if (this.changeuser.value.gender) {
                datauser['gender'] = this.changeuser.value.gender;
            }
            if (this.changeuser.value.birthday) {
                datauser['date_birth'] = this.changeuser.value.birthday;
            }
            console.log('datauser', datauser);
            this.loadData = true;
            this.api.updateApi('clients', datauser).then((response) => {
                console.log(response);
                if (response.hasOwnProperty('data') && response['data']) {
                    this.api.alertMessage('Данные отправлены.', '');
                    this.storage.set('username', namedata);
                    this.loadData = false;
                    this.navCtrl.navigateRoot('/profile?userid=' + this.userid);
                }
                else {
                    this.api.alertMessage('Искренне сожалеем,', 'произошла ошибка. Попробуйте чуть позже.');
                    this.loadData = false;
                    this.navCtrl.navigateRoot('/');
                }
            });
        });
    }
    goBack() {
        this.navCtrl.back();
    }
};
EditprofilePage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__.Storage },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute }
];
EditprofilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-editprofile',
        template: _editprofile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_editprofile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditprofilePage);



/***/ }),

/***/ 6138:
/*!**************************************************************!*\
  !*** ./src/app/editprofile/editprofile.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".order__box {\n  border-radius: 10px;\n  padding: 30px 20px;\n  background-color: var(--order-box-bg);\n  border: 2px solid var(--order-box-border);\n}\n\n.order__box-title {\n  font-size: 18px;\n  margin-bottom: 10px;\n  color: var(--order-box-title);\n}\n\n.errormess ion-text {\n  background: var(--order-box-bg);\n}\n\n.phone-code {\n  font-size: 14px;\n  color: var(--text-content-color);\n}\n\nion-radio-group ion-item::part(native) {\n  color: var(--input-color);\n  background: var(--order-box-bg);\n}\n\nion-radio.radio-checked::part(container) {\n  border-color: var(--category-active-bg);\n}\n\nion-radio::part(mark) {\n  background: var(--category-active-bg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUVGOztBQUFBO0VBQ0UsK0JBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtBQUlGOztBQUZBO0VBQ0UseUJBQUE7RUFDQSwrQkFBQTtBQUtGOztBQUhBO0VBQ0UsdUNBQUE7QUFNRjs7QUFKQTtFQUNFLHFDQUFBO0FBT0YiLCJmaWxlIjoiZWRpdHByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVyX19ib3h7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JkZXItYm94LWJnKTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tb3JkZXItYm94LWJvcmRlcik7XG59XG4ub3JkZXJfX2JveC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6IHZhcigtLW9yZGVyLWJveC10aXRsZSk7XG59XG4uZXJyb3JtZXNzIGlvbi10ZXh0e1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1vcmRlci1ib3gtYmcpO1xufVxuLnBob25lLWNvZGV7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29udGVudC1jb2xvcik7XG59XG5pb24tcmFkaW8tZ3JvdXAgaW9uLWl0ZW06OnBhcnQobmF0aXZlKXtcbiAgY29sb3I6IHZhcigtLWlucHV0LWNvbG9yKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tb3JkZXItYm94LWJnKTtcbn1cbmlvbi1yYWRpby5yYWRpby1jaGVja2VkOjpwYXJ0KGNvbnRhaW5lcikge1xuICBib3JkZXItY29sb3I6IHZhcigtLWNhdGVnb3J5LWFjdGl2ZS1iZyk7XG59XG5pb24tcmFkaW86OnBhcnQobWFyayl7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNhdGVnb3J5LWFjdGl2ZS1iZyk7XG59XG4iXX0= */";

/***/ }),

/***/ 2498:
/*!**************************************************************!*\
  !*** ./src/app/editprofile/editprofile.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<app-header title=\"Изменить данные\" [isMain]=\"false\" [isCart]=\"true\"></app-header>\n\n<ion-content>\n  <div *ngIf=\"!authorized\" class=\"ion-padding\">\n  <ion-grid>\n    <div class=\"order__box\">\n  <form *ngIf=\"changeuser\" [formGroup]=\"changeuser\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <div class=\"order__box-title\">Имя</div>\n        <ion-input formControlName=\"name\" inputmode=\"text\" maxlength=\"50\" type=\"text\"></ion-input>\n        <div class=\"ion-padding-horizontal errormess\" *ngFor=\"let validation of validationMessages.name\">\n          <div class=\"error-message\"\n               *ngIf=\"changeuser.get('name').hasError(validation.type) && (changeuser.get('name').dirty || changeuser.get('name').touched)\">\n            <ion-text color=\"primary\">{{ validation.message }}</ion-text>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"order__box-title\">Фамилия</div>\n        <ion-input formControlName=\"lastname\" inputmode=\"text\" maxlength=\"50\" type=\"text\" [required]=\"false\"></ion-input>\n        <div class=\"ion-padding-horizontal errormess\" *ngFor=\"let validation of validationMessages.lastname\">\n          <div class=\"error-message\"\n               *ngIf=\"changeuser.get('lastname').hasError(validation.type) && (changeuser.get('lastname').dirty || changeuser.get('lastname').touched)\">\n            <ion-text color=\"primary\">{{ validation.message }}</ion-text>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"order__box-title\">Email</div>\n        <ion-input formControlName=\"email\" inputmode=\"email\" maxlength=\"50\" type=\"email\" [required]=\"false\"></ion-input>\n        <div class=\"ion-padding-horizontal errormess\" *ngFor=\"let validation of validationMessages.email\">\n          <div class=\"error-message\"\n               *ngIf=\"changeuser.get('email').hasError(validation.type) && (changeuser.get('email').dirty || changeuser.get('email').touched)\">\n            <ion-text color=\"primary\">{{ validation.message }}</ion-text>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col size=\"12\" *ngIf=\"gendershow\">\n        <div class=\"order__box-title\">Пол</div>\n        <ion-radio-group formControlName=\"gender\">\n          <ion-item lines=\"none\">\n            <ion-label>Мужчина</ion-label>\n            <ion-radio slot=\"start\" value=\"M\"></ion-radio>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-label>Женщина</ion-label>\n            <ion-radio slot=\"start\" value=\"W\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n        <!--<div class=\"ion-padding-horizontal errormess\" *ngFor=\"let validation of validationMessages.gender\">-->\n          <!--<div class=\"error-message\"-->\n               <!--*ngIf=\"changeuser.get('gender').hasError(validation.type) && (changeuser.get('gender').dirty || changeuser.get('gender').touched)\">-->\n            <!--<ion-text color=\"primary\">{{ validation.message }}</ion-text>-->\n          <!--</div>-->\n        <!--</div>-->\n      </ion-col>\n      <ion-col size=\"12\" *ngIf=\"birthdayshow\">\n        <div class=\"order__box-title\">Дата рождения</div>\n        <ion-input formControlName=\"birthday\" inputmode=\"date\" type=\"date\"></ion-input>\n        <!--<div class=\"ion-padding-horizontal errormess\" *ngFor=\"let validation of validationMessages.birthday\">-->\n          <!--<div class=\"error-message\"-->\n               <!--*ngIf=\"changeuser.get('birthday').hasError(validation.type) && (changeuser.get('birthday').dirty || changeuser.get('birthday').touched)\">-->\n            <!--<ion-text color=\"primary\">{{ validation.message }}</ion-text>-->\n          <!--</div>-->\n        <!--</div>-->\n      </ion-col>\n      <ion-col size=\"12\" *ngIf=\"birthdayshow || gendershow\">\n        <p class=\"terms\">\n          Указать дату рождения и пол можно только один раз.\n        </p>\n      </ion-col>\n    </ion-row>\n\n  </form>\n    </div>\n  </ion-grid>\n  <br>\n  <ion-grid>\n    <ion-row *ngIf=\"!loadData\">\n      <ion-col size=\"12\">\n        <ion-button (click)=\"changeDataUser()\" expand=\"block\">Изменить данные</ion-button>\n      </ion-col>\n      <!--<ion-col size=\"6\">  <ion-button (click)=\"goBack()\" size=\"medium\" color=\"secondary\" expand=\"block\"><ion-text color=\"dark\" class=\"text_upper\"><b>Отмена</b></ion-text></ion-button>-->\n      <!--</ion-col>-->\n    </ion-row>\n    <ion-row *ngIf=\"loadData\">\n      <ion-progress-bar type=\"indeterminate\" color=\"mainapp\"></ion-progress-bar>\n      <br>\n    </ion-row>\n  </ion-grid>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_editprofile_editprofile_module_ts.js.map