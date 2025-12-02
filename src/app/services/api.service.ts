import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Storage} from '@ionic/storage-angular';
import {AlertController, NavController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiuser: string = 'ck_d6513f01a79bdc7208fbfe5842a38cfc91225ad1';
  private apisecret: string = 'cs_3652f29603f0c6dc2677dc1f8114a3f4c0476f74';
  // public urlApi = 'https://demo.eatobox-api.ru';
  public urlApi = 'https://norimi.eatobox-api.ru';
  public urlSmsru = 'https://sms.ru/sms/send?api_id=';
  public spinner = false;
  constructor(
    public http: HttpClient,
    private storage: Storage,
    public alertController: AlertController
  ) {
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
  public static phonenum(num) {
    return num.replace(/[^\d]/g, '');;
  }
  public static formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    var match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
      return '+' + match[1] + ' ' + match[2] + ' ' + match[3] + '-' + match[4] + '-' + match[5]
    }
    return null
  }
  public static createPhoneNumber(numbers){
    return numbers.replace(/(.)(...)(...)(..)(..)/, '+$1 ($2) $3-$4-$5');
  }
  public static formatDateString(datestring) {
    // let df='2011-04-11T10:20:30';
    // let df1='YYYY-MM-DDTHH:MM:SS';
    // let df2='DD.MM.YYYY, HH:MM';

    var cleaned = ('' + datestring).replace(/\D/g, '');
    // console.log('cleaned',cleaned);
    var match = cleaned.match(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/);
    if (match) {
      return match[3] + '.' + match[2] + '.' + match[1] + ', ' + match[4] + ':' + match[5]
    }
    return null
  }
  public static kitcut( text, limit) {
    text = text.trim();
    if( text.length <= limit) return text;
    text = text.slice( 0, limit); // тупо отрезать по лимиту
    let lastSpace = text.lastIndexOf(" ");
    if( lastSpace > 0) { // нашлась граница слов, ещё укорачиваем
      text = text.substr(0, lastSpace);
    }
    return text + "...";
  }

  public async alertMessage(header: string, message: string) {
    const alert = await this.alertController.create({
      cssClass: 'alert-class',
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
  public sendKodApi(phonenumber, type:string = 'flashcall'){
    const headers = { 'content-type': 'application/json'}
    let params =
      {
        "application": 'clients',
        "command": "send-validation-code",
        "data": {'phone': phonenumber, 'type' : type},
      };
    let param =JSON.stringify(params, null, ' ');
    return new Promise((resolve) => {
      // let data = {data:"OK"};
      // setTimeout(() => resolve(data), 1000);
      this.http.put(this.urlApi, param, {'headers':headers})
        .subscribe(
          (resp) => {
            resolve(resp);
            if(resp.hasOwnProperty('status')){
              if(resp['status']!==200){
                this.alertMessage('Искренне сожалеем,', 'произошла ошибка. Попробуйте чуть позже.');
              }
            } else {
              this.alertMessage('Искренне сожалеем,', 'произошла ошибка. Попробуйте чуть позже.');
            }
          },
          (error) => {
            resolve(error);
          },
        );
    })


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
  public getApi(application,data,limit:number = 0) {
    const headers = { 'content-type': 'application/json'}
    let params =
      {
        "application": application,
        "command": "get",
        "data": data,
      };
    let param =JSON.stringify(params, null, ' ');
    return new Promise((resolve) => {
      // let data = {data:"OK"};
      // setTimeout(() => resolve(data), 1000);
      this.http.put(this.urlApi, param, {'headers':headers})
        .subscribe(
          (resp) => {
            resolve(resp);
            if(resp.hasOwnProperty('status')){
              if(resp['status']!==200){
                this.alertMessage('Искренне сожалеем,', 'произошла ошибка. Попробуйте чуть позже.');
              }
            } else {
              this.alertMessage('Искренне сожалеем,', 'произошла ошибка. Попробуйте чуть позже.');
            }
          },
          (error) => {
            resolve(error);
          },
        );
    })
  }
  public addApi(application,data,limit:number = 0) {
    const headers = { 'content-type': 'application/json'}
    let params =
      {
        "application": application,
        "command": "add",
        "data": data,
      };
    let param =JSON.stringify(params, null, ' ');
    return new Promise((resolve) => {
      this.http.put(this.urlApi, param, {'headers':headers})
        .subscribe(
          (resp) => {
            resolve(resp);
            if(resp.hasOwnProperty('status')){
              if(resp['status']!==200){
                this.alertMessage('Искренне сожалеем,', 'произошла ошибка. Попробуйте чуть позже.');
              }
            } else {
              this.alertMessage('Искренне сожалеем,', 'произошла ошибка. Попробуйте чуть позже.');
            }
          },
          (error) => {
            resolve(error);
          },
        );
    })
  }
  public calculateApi(application,data,limit:number = 0) {
    const headers = { 'content-type': 'application/json'}
    let params =
      {
        "application": application,
        "command": "calculate",
        "data": data,
      };
    let param =JSON.stringify(params, null, ' ');
    return new Promise((resolve) => {
      this.http.put(this.urlApi, param, {'headers':headers})
        .subscribe(
          (resp) => {
            resolve(resp);
            if(resp.hasOwnProperty('status')){
              if(resp['status']!==200){
                this.alertMessage('Искренне сожалеем,', 'произошла ошибка. Попробуйте чуть позже.');
              }
            } else {
              this.alertMessage('Искренне сожалеем,', 'произошла ошибка. Попробуйте чуть позже.');
            }
          },
          (error) => {
            resolve(error);
          },
        );
    })
  }
  public getBonus(application,data,limit:number = 0) {
    const headers = { 'content-type': 'application/json'}
    let params =
      {
        "application": application,
        "command": "bonuses-get",
        "data": data,
      };
    let param =JSON.stringify(params, null, ' ');
    return new Promise((resolve) => {
      // let data = {data:"OK"};
      // setTimeout(() => resolve(data), 1000);
      this.http.put(this.urlApi, param, {'headers':headers})
        .subscribe(
          (resp) => {
            resolve(resp);
            if(resp.hasOwnProperty('status')){
              if(resp['status']!==200){
                this.alertMessage('Искренне сожалеем,', 'произошла ошибка. Попробуйте чуть позже.');
              }
            } else {
              this.alertMessage('Искренне сожалеем,', 'произошла ошибка. Попробуйте чуть позже.');
            }
          },
          (error) => {
            resolve(error);
          },
        );
    })
  }

  public updateApi(application,data) {
    const headers = { 'content-type': 'application/json'}
    let params =
      {
        "application": application,
        "command": "update",
        "data": data,
      };
    let param =JSON.stringify(params, null, ' ');
    return new Promise((resolve) => {
      this.http.put(this.urlApi, param, {'headers':headers})
        .subscribe(
          (resp) => {
            resolve(resp);
            if(resp.hasOwnProperty('status')){
              if(resp['status']!==200){
                this.alertMessage('Искренне сожалеем,', 'произошла ошибка. Попробуйте чуть позже.');
              }
            } else {
              this.alertMessage('Искренне сожалеем,', 'произошла ошибка. Попробуйте чуть позже.');
            }
          },
          (error) => {
            resolve(error);
          },
        );
    })
  }
  public removeUserApi(application, data) {
    const headers = { 'content-type': 'application/json'}
    let params =
      {
        "application":  application,
        "command": "remove",
        "data": data,
      };
    let param =JSON.stringify(params, null, ' ');
    return new Promise((resolve) => {
      this.http.put(this.urlApi, param, {'headers':headers})
        .subscribe(
          (resp) => {
            resolve(resp);
            if(resp.hasOwnProperty('status')){
              if(resp['status']!==200){
                this.alertMessage('Искренне сожалеем,', 'профиль не удалился. Попробуйте чуть позже.');
              }
            } else {
              this.alertMessage('Искренне сожалеем,', 'профиль не удалился. Попробуйте чуть позже.');
            }
          },
          (error) => {
            resolve(error);
          },
        );
    })
  }

  logout() {
    return this.storage.remove('userphone').then(() => {
      // this.sid = null;
    });
  }
}
