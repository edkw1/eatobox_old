import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {AlertController, NavController} from '@ionic/angular';
import {EventsService} from '../services/events.service';
import {ConfigService} from "../services/config.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Storage} from '@ionic/storage-angular';
import {ActivatedRoute} from "@angular/router";
import { timer, Subscription } from 'rxjs';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  countDown: Subscription;
  counter = 45;
  tick = 1000;
  private params;
  private authorized = false;
  private isLoading = false;
  private isTimer = false;
  private isSmsBtn = false;
  private isSms2 = false;
  private smsru: FormGroup;
  private kodsms: FormGroup;
  private phone: string = '';
  private adminUser = false;
  private smsnumber: string = '';
  public btnSmsShow = false;
  public btnKodSend = true;
  public smsSend = false;
  public btnSend = true;
  public btnSendPreload = false;
  public getsms: number;
  public typeSend = '';
  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    public alertController: AlertController,
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    public events: EventsService,
    private storage: Storage,
    private config: ConfigService,
  ) { }
  private validationMessages = {
    phone: [
      {type: 'required', message: 'Телефон обязателен'},
      {type: 'minlength', message: 'Недостаточно цифр'},
      {type: 'pattern', message: 'Некорректный телефон'},
    ],
    smsnumber: [
      {type: 'required', message: 'Введите код'},
      {type: 'minlength', message: 'Необходимо 4 цифры'},
      {type: 'maxlength', message: 'Необходимо 4 цифры'},
      {type: 'pattern', message: 'Только цифры!'},
    ],
  };
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.params = params;
      if(this.params.hasOwnProperty('frompage')){
        if(this.params['frompage']=='cart'){
          console.log('query=',this.params['frompage']);
        }
        console.log('query',this.params);
      } else {
        console.log('NO');
      }

    });

    this.smsru = this.formBuilder.group({
      phone: new FormControl('', [Validators.required, Validators.minLength(16)]),
    });
    this.kodsms = this.formBuilder.group({
      smsnumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(4), Validators.maxLength(4)]),
    });
  }
  async sendSoc(param:string=''){
      if(param){
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
        let tempphone = ApiService.phonenum(this.phone);
        if(param=='VK'){
          this.typeSend = 'vk';
        }
        if(param=='VIBER'){
          this.typeSend = 'viber';
        }
        if (tempphone == this.config.adminTel) {
          this.btnSendPreload = false;
          this.btnSmsShow = true;
          this.adminUser = true;
          this.isLoading = false;
          this.btnSend = false;
          this.getsms = 7777;
        } else {
          this.adminUser = false;
          this.api.sendKodApi(this.phone, this.typeSend).then((res) => {
            console.log('ANSWER',res);
            this.btnSendPreload = false;
            if (res.hasOwnProperty('status') && res.hasOwnProperty('data')) {
              if (res['status'] == 200 && res['data']) {
                this.getsms = res['data'];
                this.btnSmsShow = true;
                this.isLoading = false;
                this.btnSend = false;
                this.startTimer();
              } else {
                if(res['status'] == 403){
                  this.api.alertMessage('Извините,', res['data']);
                } else {
                  this.api.alertMessage('Приносим свои извинения,', 'что-то пошло не так. Попробуйте позже.');
                }

                this.isLoading = false;
                return;
              }

            } else {
              console.log('ddd');
              this.startTimer();
              this.api.alertMessage('Приносим свои извинения,', 'что-то пошло не так. Попробуйте позже.');
              this.isLoading = false;
              return;
            }
          });
        }
      }
  }
  async sendSmsReal() {
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
    console.log('222',this.typeSend);
    let tempphone = ApiService.phonenum(this.phone);
    if (tempphone == this.config.adminTel) {
      this.btnSendPreload = false;
      this.btnSmsShow = true;
      this.adminUser = true;
      this.isLoading = false;
      this.btnSend = false;
      this.getsms = 7777;
    } else {
      this.adminUser = false;
      this.api.sendKodApi(this.phone, 'sms').then((res) => {
        console.log('ANSWER',res);
        this.btnSendPreload = false;
        if (res.hasOwnProperty('status') && res.hasOwnProperty('data')) {
          if (res['status'] == 200 && res['data']) {
            this.getsms = res['data'];
            this.btnSmsShow = true;
            this.isLoading = false;
            this.btnSend = false;
          } else {
            if(res['status'] == 403){
              this.api.alertMessage('Извините,', res['data']);
            } else {
              this.api.alertMessage('Приносим свои извинения,', 'что-то пошло не так. Попробуйте позже.');
            }
            this.isLoading = false;
            return;
          }
        } else {
          this.api.alertMessage('Приносим свои извинения,', 'что-то пошло не так. Попробуйте позже.');
          this.isLoading = false;
          return;
        }
      });
    }
  }
  async sendSms() {
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
    let tempphone = ApiService.phonenum(this.phone);
    console.log('this.phone', tempphone);
    if (tempphone == this.config.adminTel) {
      this.btnSendPreload = false;
      this.btnSmsShow = true;
      this.adminUser = true;
      this.isLoading = false;
      this.btnSend = false;
      this.getsms = 7777;
    } else {
      this.adminUser = false;
      this.api.sendKodApi(this.phone, 'flashcall').then((res) => {
        console.log('ANSWER',res);
        this.btnSendPreload = false;
        if (res.hasOwnProperty('status') && res.hasOwnProperty('data')) {
          if (res['status'] == 200 && res['data']) {
            if(res['status'] == 200 && (res['data']==tempphone)){
              this.api.getApi('clients', {'phone' : tempphone, 'limit': 0 }).then((response)=>{
                console.log(response);
                this.smsSend = false;
                if(response.hasOwnProperty('data')){
                  if(response['data'].length){
                    if(response['data'][0].is_blacklist){
                      this.errorSms('Ваш профиль заблокирован!','Обратитесь к Администратору!');
                    } else {
                      this.events.publishLoginEv(true);
                      this.events.publishLoginId( response['data'][0].id);
                      this.storage.set('user', response['data'][0]);
                      if(this.params['frompage']=='cart'){
                        this.navCtrl.navigateRoot('/checkout');
                      } else {
                        this.navCtrl.navigateRoot('/');
                      }
                    }
                    console.log(response['data']);
                  } else {
                    console.log('РЕГАЕМ  ЮЗЕРА');
                  }

                } else {
                  this.errorSms('Что-то пошло не так');
                }
              });
            } else {
              this.getsms = res['data'];
              this.btnSmsShow = true;
              this.isLoading = false;
              this.btnSend = false;
              this.startTimer();
            }
          } else {
            if(res['status'] == 403){
              this.api.alertMessage('Извините,', res['data']);
            } else {
              this.api.alertMessage('Приносим свои извинения,', 'что-то пошло не так. Попробуйте позже.');
            }
            this.isLoading = false;
            return;
          }
        } else {
          this.startTimer();
          this.api.alertMessage('Приносим свои извинения,', 'что-то пошло не так. Попробуйте позже.');
          this.isLoading = false;
          return;
        }
      });
    }
  }

  async sendKod() {
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
      let number = ApiService.phonenum(this.phone);
      console.log('number', number);
      this.api.getApi('clients', {'phone' : number, 'limit': 0 }).then((response)=>{
        console.log(response);
        this.smsSend = false;
        if(response.hasOwnProperty('data')){
          if(response['data'].length){
            if(response['data'][0].is_blacklist){
              this.errorSms('Ваш профиль заблокирован!','Обратитесь к Администратору!');

            } else {
              this.events.publishLoginEv(true);
              this.events.publishLoginId( response['data'][0].id);
              this.storage.set('user', response['data'][0]);
              if(this.params['frompage']=='cart'){
                this.navCtrl.navigateRoot('/checkout');
              } else {
                this.navCtrl.navigateRoot('/');
              }
            }
            console.log(response['data']);
          } else {
            console.log('РЕГАЕМ  ЮЗЕРА');
          }
        } else {
          this.errorSms('Что-то пошло не так');
        }
      });
    } else {
      this.api.alertMessage('Не верный код', '');
      this.smsSend = false;
    }
  }
  async errorSms(title:string = 'Ошибка!', text:string = '') {
    const alert = await this.alertController.create({
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
    await alert.present();
  }
  public startTimer(){
    this.isTimer = true;
    this.countDown = timer(0, this.tick).subscribe(() => {
      if (this.counter !== 0) {
        --this.counter;
      } else {
        this.isSms2 = true;
        this.stopTimer();
        this.countDown = null;
      }
    });
  }
  stopTimer(){
    this.isTimer = false;
    this.countDown.unsubscribe();
    this.isSmsBtn = true;
    this.counter = 45;
  }
}


