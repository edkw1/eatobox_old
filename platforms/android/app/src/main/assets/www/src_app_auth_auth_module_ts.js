"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_auth_auth_module_ts"],{

/***/ 6506:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Scheduler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scheduler": () => (/* binding */ Scheduler)
/* harmony export */ });
class Scheduler {
    constructor(SchedulerAction, now = Scheduler.now) {
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    schedule(work, delay = 0, state) {
        return new this.SchedulerAction(this, work).schedule(state, delay);
    }
}
Scheduler.now = () => Date.now();


/***/ }),

/***/ 2930:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/timer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timer": () => (/* binding */ timer)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Observable */ 1689);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduler/async */ 1661);
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isNumeric */ 9150);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ 8047);




function timer(dueTime = 0, periodOrScheduler, scheduler) {
    let period = -1;
    if ((0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(periodOrScheduler)) {
        period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
    }
    else if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(periodOrScheduler)) {
        scheduler = periodOrScheduler;
    }
    if (!(0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(scheduler)) {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_2__.async;
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_3__.Observable(subscriber => {
        const due = (0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(dueTime)
            ? dueTime
            : (+dueTime - scheduler.now());
        return scheduler.schedule(dispatch, due, {
            index: 0, period, subscriber
        });
    });
}
function dispatch(state) {
    const { index, period, subscriber } = state;
    subscriber.next(index);
    if (subscriber.closed) {
        return;
    }
    else if (period === -1) {
        return subscriber.complete();
    }
    state.index = index + 1;
    this.schedule(state, period);
}


/***/ }),

/***/ 7604:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/Action.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 5755);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
    constructor(scheduler, work) {
        super();
    }
    schedule(state, delay = 0) {
        return this;
    }
}


/***/ }),

/***/ 1614:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncAction": () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 7604);

class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    schedule(state, delay = 0) {
        if (this.closed) {
            return this;
        }
        this.state = state;
        const id = this.id;
        const scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    }
    requestAsyncId(scheduler, id, delay = 0) {
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    }
    execute(state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        const error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    }
    _execute(state, delay) {
        let errored = false;
        let errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    }
    _unsubscribe() {
        const id = this.id;
        const scheduler = this.scheduler;
        const actions = scheduler.actions;
        const index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    }
}


/***/ }),

/***/ 666:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncScheduler": () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 6506);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
    constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
        super(SchedulerAction, () => {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        });
        this.actions = [];
        this.active = false;
        this.scheduled = undefined;
    }
    schedule(work, delay = 0, state) {
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return super.schedule(work, delay, state);
        }
    }
    flush(action) {
        const { actions } = this;
        if (this.active) {
            actions.push(action);
            return;
        }
        let error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}


/***/ }),

/***/ 1661:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asyncScheduler": () => (/* binding */ asyncScheduler),
/* harmony export */   "async": () => (/* binding */ async)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 1614);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 666);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;


/***/ }),

/***/ 9150:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isNumeric.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNumeric": () => (/* binding */ isNumeric)
/* harmony export */ });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ 4895);

function isNumeric(val) {
    return !(0,_isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(val) && (val - parseFloat(val) + 1) >= 0;
}


/***/ }),

/***/ 431:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageRoutingModule": () => (/* binding */ AuthPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.page */ 3561);




const routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_0__.AuthPage
    }
];
let AuthPageRoutingModule = class AuthPageRoutingModule {
};
AuthPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AuthPageRoutingModule);



/***/ }),

/***/ 1674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageModule": () => (/* binding */ AuthPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 431);
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.page */ 3561);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);








let AuthPageModule = class AuthPageModule {
};
AuthPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthPageRoutingModule
        ],
        declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_1__.AuthPage]
    })
], AuthPageModule);



/***/ }),

/***/ 3561:
/*!***********************************!*\
  !*** ./src/app/auth/auth.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPage": () => (/* binding */ AuthPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _auth_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.page.html?ngResource */ 2708);
/* harmony import */ var _auth_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.page.scss?ngResource */ 894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 5830);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/events.service */ 106);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/config.service */ 946);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage-angular */ 2879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2930);












let AuthPage = class AuthPage {
    constructor(api, route, alertController, navCtrl, formBuilder, events, storage, config) {
        this.api = api;
        this.route = route;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.events = events;
        this.storage = storage;
        this.config = config;
        this.counter = 45;
        this.tick = 1000;
        this.authorized = false;
        this.isLoading = false;
        this.isTimer = false;
        this.isSmsBtn = false;
        this.isSms2 = false;
        this.phone = '';
        this.adminUser = false;
        this.smsnumber = '';
        this.btnSmsShow = false;
        this.btnKodSend = true;
        this.smsSend = false;
        this.btnSend = true;
        this.btnSendPreload = false;
        this.typeSend = '';
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
        };
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.params = params;
            if (this.params.hasOwnProperty('frompage')) {
                if (this.params['frompage'] == 'cart') {
                    console.log('query=', this.params['frompage']);
                }
                console.log('query', this.params);
            }
            else {
                console.log('NO');
            }
        });
        this.smsru = this.formBuilder.group({
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(16)]),
        });
        this.kodsms = this.formBuilder.group({
            smsnumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(4)]),
        });
    }
    sendSoc(param = '') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (param) {
                if (this.isLoading) {
                    return;
                }
                this.isLoading = true;
                for (let control in this.smsru.controls) {
                    if (this.smsru.controls.hasOwnProperty(control)) {
                        this.smsru.controls[control].markAsTouched();
                    }
                }
                if (this.smsru.status === 'INVALID') {
                    this.isLoading = false;
                    return;
                }
                this.phone = this.smsru.value.phone;
                let tempphone = _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService.phonenum(this.phone);
                if (param == 'VK') {
                    this.typeSend = 'vk';
                }
                if (param == 'VIBER') {
                    this.typeSend = 'viber';
                }
                if (tempphone == this.config.adminTel) {
                    this.btnSendPreload = false;
                    this.btnSmsShow = true;
                    this.adminUser = true;
                    this.isLoading = false;
                    this.btnSend = false;
                    this.getsms = 7777;
                }
                else {
                    this.adminUser = false;
                    this.api.sendKodApi(this.phone, this.typeSend).then((res) => {
                        console.log('ANSWER', res);
                        this.btnSendPreload = false;
                        if (res.hasOwnProperty('status') && res.hasOwnProperty('data')) {
                            if (res['status'] == 200 && res['data']) {
                                this.getsms = res['data'];
                                this.btnSmsShow = true;
                                this.isLoading = false;
                                this.btnSend = false;
                                this.startTimer();
                            }
                            else {
                                if (res['status'] == 403) {
                                    this.api.alertMessage('Извините,', res['data']);
                                }
                                else {
                                    this.api.alertMessage('Приносим свои извинения,', 'что-то пошло не так. Попробуйте позже.');
                                }
                                this.isLoading = false;
                                return;
                            }
                        }
                        else {
                            console.log('ddd');
                            this.startTimer();
                            this.api.alertMessage('Приносим свои извинения,', 'что-то пошло не так. Попробуйте позже.');
                            this.isLoading = false;
                            return;
                        }
                    });
                }
            }
        });
    }
    sendSmsReal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.isLoading) {
                return;
            }
            this.isLoading = true;
            for (let control in this.smsru.controls) {
                if (this.smsru.controls.hasOwnProperty(control)) {
                    this.smsru.controls[control].markAsTouched();
                }
            }
            if (this.smsru.status === 'INVALID') {
                this.isLoading = false;
                return;
            }
            this.phone = this.smsru.value.phone;
            this.isSmsBtn = false;
            this.typeSend = 'sms';
            console.log('222', this.typeSend);
            let tempphone = _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService.phonenum(this.phone);
            if (tempphone == this.config.adminTel) {
                this.btnSendPreload = false;
                this.btnSmsShow = true;
                this.adminUser = true;
                this.isLoading = false;
                this.btnSend = false;
                this.getsms = 7777;
            }
            else {
                this.adminUser = false;
                this.api.sendKodApi(this.phone, 'sms').then((res) => {
                    console.log('ANSWER', res);
                    this.btnSendPreload = false;
                    if (res.hasOwnProperty('status') && res.hasOwnProperty('data')) {
                        if (res['status'] == 200 && res['data']) {
                            this.getsms = res['data'];
                            this.btnSmsShow = true;
                            this.isLoading = false;
                            this.btnSend = false;
                        }
                        else {
                            if (res['status'] == 403) {
                                this.api.alertMessage('Извините,', res['data']);
                            }
                            else {
                                this.api.alertMessage('Приносим свои извинения,', 'что-то пошло не так. Попробуйте позже.');
                            }
                            this.isLoading = false;
                            return;
                        }
                    }
                    else {
                        this.api.alertMessage('Приносим свои извинения,', 'что-то пошло не так. Попробуйте позже.');
                        this.isLoading = false;
                        return;
                    }
                });
            }
        });
    }
    sendSms() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.isLoading) {
                return;
            }
            this.isLoading = true;
            for (let control in this.smsru.controls) {
                if (this.smsru.controls.hasOwnProperty(control)) {
                    this.smsru.controls[control].markAsTouched();
                }
            }
            if (this.smsru.status === 'INVALID') {
                this.isLoading = false;
                return;
            }
            this.phone = this.smsru.value.phone;
            this.btnSend = true;
            this.btnSendPreload = true;
            let tempphone = _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService.phonenum(this.phone);
            console.log('this.phone', tempphone);
            if (tempphone == this.config.adminTel) {
                this.btnSendPreload = false;
                this.btnSmsShow = true;
                this.adminUser = true;
                this.isLoading = false;
                this.btnSend = false;
                this.getsms = 7777;
            }
            else {
                this.adminUser = false;
                this.api.sendKodApi(this.phone, 'flashcall').then((res) => {
                    console.log('ANSWER', res);
                    this.btnSendPreload = false;
                    if (res.hasOwnProperty('status') && res.hasOwnProperty('data')) {
                        if (res['status'] == 200 && res['data']) {
                            if (res['status'] == 200 && (res['data'] == tempphone)) {
                                this.api.getApi('clients', { 'phone': tempphone, 'limit': 0 }).then((response) => {
                                    console.log(response);
                                    this.smsSend = false;
                                    if (response.hasOwnProperty('data')) {
                                        if (response['data'].length) {
                                            if (response['data'][0].is_blacklist) {
                                                this.errorSms('Ваш профиль заблокирован!', 'Обратитесь к Администратору!');
                                            }
                                            else {
                                                this.events.publishLoginEv(true);
                                                this.events.publishLoginId(response['data'][0].id);
                                                this.storage.set('user', response['data'][0]);
                                                if (this.params['frompage'] == 'cart') {
                                                    this.navCtrl.navigateRoot('/checkout');
                                                }
                                                else {
                                                    this.navCtrl.navigateRoot('/');
                                                }
                                            }
                                            console.log(response['data']);
                                        }
                                        else {
                                            console.log('РЕГАЕМ  ЮЗЕРА');
                                        }
                                    }
                                    else {
                                        this.errorSms('Что-то пошло не так');
                                    }
                                });
                            }
                            else {
                                this.getsms = res['data'];
                                this.btnSmsShow = true;
                                this.isLoading = false;
                                this.btnSend = false;
                                this.startTimer();
                            }
                        }
                        else {
                            if (res['status'] == 403) {
                                this.api.alertMessage('Извините,', res['data']);
                            }
                            else {
                                this.api.alertMessage('Приносим свои извинения,', 'что-то пошло не так. Попробуйте позже.');
                            }
                            this.isLoading = false;
                            return;
                        }
                    }
                    else {
                        this.startTimer();
                        this.api.alertMessage('Приносим свои извинения,', 'что-то пошло не так. Попробуйте позже.');
                        this.isLoading = false;
                        return;
                    }
                });
            }
        });
    }
    sendKod() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.smsSend = true;
            for (let control in this.kodsms.controls) {
                if (this.kodsms.controls.hasOwnProperty(control)) {
                    this.kodsms.controls[control].markAsTouched();
                }
            }
            if (this.kodsms.status === 'INVALID') {
                this.isLoading = false;
                return;
            }
            this.smsnumber = this.kodsms.value.smsnumber;
            if (this.getsms == parseInt(this.smsnumber, 10)) {
                this.btnKodSend = false;
                console.log('KOD');
                let number = _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService.phonenum(this.phone);
                console.log('number', number);
                this.api.getApi('clients', { 'phone': number, 'limit': 0 }).then((response) => {
                    console.log(response);
                    this.smsSend = false;
                    if (response.hasOwnProperty('data')) {
                        if (response['data'].length) {
                            if (response['data'][0].is_blacklist) {
                                this.errorSms('Ваш профиль заблокирован!', 'Обратитесь к Администратору!');
                            }
                            else {
                                this.events.publishLoginEv(true);
                                this.events.publishLoginId(response['data'][0].id);
                                this.storage.set('user', response['data'][0]);
                                if (this.params['frompage'] == 'cart') {
                                    this.navCtrl.navigateRoot('/checkout');
                                }
                                else {
                                    this.navCtrl.navigateRoot('/');
                                }
                            }
                            console.log(response['data']);
                        }
                        else {
                            console.log('РЕГАЕМ  ЮЗЕРА');
                        }
                    }
                    else {
                        this.errorSms('Что-то пошло не так');
                    }
                });
            }
            else {
                this.api.alertMessage('Не верный код', '');
                this.smsSend = false;
            }
        });
    }
    errorSms(title = 'Ошибка!', text = '') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
    startTimer() {
        this.isTimer = true;
        this.countDown = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.timer)(0, this.tick).subscribe(() => {
            if (this.counter !== 0) {
                --this.counter;
            }
            else {
                this.isSms2 = true;
                this.stopTimer();
                this.countDown = null;
            }
        });
    }
    stopTimer() {
        this.isTimer = false;
        this.countDown.unsubscribe();
        this.isSmsBtn = true;
        this.counter = 45;
    }
};
AuthPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_10__.Storage },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService }
];
AuthPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-auth',
        template: _auth_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_auth_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AuthPage);



/***/ }),

/***/ 894:
/*!************************************************!*\
  !*** ./src/app/auth/auth.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".order__box {\n  border-radius: 10px;\n  padding: 30px 20px;\n  background-color: var(--order-box-bg);\n  border: 2px solid var(--order-box-border);\n}\n\n.order__box-title {\n  font-size: 18px;\n  margin-bottom: 10px;\n  color: var(--order-box-title);\n}\n\n.errormess ion-text {\n  background: var(--order-box-bg);\n}\n\n.phone-code {\n  font-size: 14px;\n  color: var(--text-content-color);\n}\n\n.send-validation-code {\n  width: 40px;\n  height: 40px;\n  padding: 8px;\n  margin-right: 10px;\n  background: var(--body-bg);\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.login-methods {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBRUY7O0FBQUE7RUFDRSwrQkFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtFQUNBLGdDQUFBO0FBSUY7O0FBRkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBS0Y7O0FBSEE7RUFDRSxhQUFBO0FBTUYiLCJmaWxlIjoiYXV0aC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXJfX2JveHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMzBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmRlci1ib3gtYmcpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1vcmRlci1ib3gtYm9yZGVyKTtcbn1cbi5vcmRlcl9fYm94LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogdmFyKC0tb3JkZXItYm94LXRpdGxlKTtcbn1cbi5lcnJvcm1lc3MgaW9uLXRleHR7XG4gIGJhY2tncm91bmQ6IHZhcigtLW9yZGVyLWJveC1iZyk7XG59XG4ucGhvbmUtY29kZXtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb250ZW50LWNvbG9yKTtcbn1cbi5zZW5kLXZhbGlkYXRpb24tY29kZSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ib2R5LWJnKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmxvZ2luLW1ldGhvZHMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuIl19 */";

/***/ }),

/***/ 2708:
/*!************************************************!*\
  !*** ./src/app/auth/auth.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<app-header title=\"Авторизация\" [isMain]=\"false\" [isCart]=\"true\"></app-header>\n\n<ion-content>\n  <div *ngIf=\"authorized\">\n    авторизован\n  </div>\n  <div *ngIf=\"!authorized\" class=\"ion-padding\">\n    <ion-grid>\n      <div class=\"order__box\">\n        <form [formGroup]=\"smsru\">\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <!--<ion-item>-->\n              <div class=\"order__box-title\">Введите ваш номер телефона</div>\n              <!--<ion-input prefix=\"+7 \" mask=\"000 000-00-00\" formControlName=\"phone\" inputmode=\"tel\" [required]=\"true\" type=\"tel\"></ion-input>-->\n              <ion-input simpleMask=\"+7 999 999-99-99\" formControlName=\"phone\" inputmode=\"tel\" [required]=\"true\"\n                         type=\"tel\" placeholder=\"+7 999 999-99-99\"></ion-input>\n              <!--</ion-item>-->\n              <div class=\"ion-padding-horizontal errormess\" *ngFor=\"let validation of validationMessages.phone\">\n                <div class=\"error-message\"\n                     *ngIf=\"smsru.get('phone').hasError(validation.type) && (smsru.get('phone').dirty || smsru.get('phone').touched)\">\n                  <ion-text>{{ validation.message }}</ion-text>\n                </div>\n              </div>\n            </ion-col>\n              <ion-col size=\"12\" *ngIf=\"!isTimer\">\n              <ion-button *ngIf=\"btnSend\" (click)=\"sendSms()\" expand=\"block\">Получить код</ion-button>\n              <div *ngIf=\"btnSendPreload\">\n                <ion-progress-bar type=\"indeterminate\" color=\"mainapp\"></ion-progress-bar>\n                <br>\n              </div>\n            </ion-col>\n            <ion-col size=\"12\" *ngIf=\"isTimer\">\n              <ion-button expand=\"block\">{{counter | formatTime}}</ion-button>\n            </ion-col>\n            <ion-col size=\"12\" *ngIf=\"isSmsBtn && !isTimer\">\n              <ion-button expand=\"block\" (click)=\"sendSmsReal()\">Необходимо отправить SMS?</ion-button>\n            </ion-col>\n          </ion-row>\n\n        </form>\n\n        <div *ngIf=\"btnSmsShow\">\n          <form [formGroup]=\"kodsms\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-text *ngIf=\"!adminUser\" class=\"phone-code\">\n                  <b *ngIf=\"typeSend!=='vk'&&typeSend!=='viber'&&typeSend!=='sms'\">Ждите входящий звонок. Введите последние 4 цифры входящего номера</b>\n                  <b *ngIf=\"typeSend=='vk'\">Введите 4 цифры из сообщения, отправленного в ВКонтакте</b>\n                  <b *ngIf=\"typeSend=='viber'\">Введите 4 цифры из сообщения, отправленного в Viber</b>\n                  <b *ngIf=\"typeSend=='sms'\">Введите 4 цифры из SMS сообщения</b>\n                </ion-text>\n                <ion-text *ngIf=\"adminUser\" class=\"phone-code\">Введите код: <strong>7777</strong></ion-text>\n                <!--</ion-col>-->\n                <!--<ion-text *ngIf=\"tempKod\">{{tempKod}}</ion-text>-->\n                <!--<ion-col size=\"12\">-->\n                <!--<div class=\"order__box-title\" style=\"margin-top: 10px;\">Код из СМС*</div>-->\n\n                <ion-input formControlName=\"smsnumber\" inputmode=\"text\" [required]=\"true\" maxlength=\"4\"\n                           type=\"text\" placeholder=\"Введите код*\" style=\"margin-top: 10px;\"></ion-input>\n                <div class=\"ion-padding-horizontal errormess\" *ngFor=\"let validation of validationMessages.smsnumber\">\n                  <div class=\"error-message\"\n                       *ngIf=\"kodsms.get('smsnumber').hasError(validation.type) && (kodsms.get('smsnumber').dirty || kodsms.get('smsnumber').touched)\">\n                    <ion-text color=\"mainapp\">{{ validation.message }}</ion-text>\n                  </div>\n                </div>\n              </ion-col>\n            </ion-row>\n          </form>\n\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-button *ngIf=\"btnKodSend\" (click)=\"sendKod()\" expand=\"block\">Отправить</ion-button>\n            </ion-col>\n          </ion-row>\n          <div *ngIf=\"smsSend\">\n            <ion-progress-bar type=\"indeterminate\" color=\"mainapp\"></ion-progress-bar>\n            <br>\n          </div>\n        </div>\n      </div>\n    </ion-grid>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_auth_auth_module_ts.js.map