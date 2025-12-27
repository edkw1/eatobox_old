import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {UseradrService} from '../services/useradr.service';
import {NavController} from "@ionic/angular";
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Storage} from '@ionic/storage-angular';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-editadres',
  templateUrl: './editadres.page.html',
  styleUrls: ['./editadres.page.scss'],
})
export class EditadresPage implements OnInit {
  private params;
  public loggedIn = false;
  public tit = "Изменить";
  public userid = '';
  constructor(
    private api: ApiService,
    private navCtrl: NavController,
    private useradr: UseradrService,
    // public alertController: AlertController,
    private formBuilder: FormBuilder,
    private storage: Storage,
    private route: ActivatedRoute,
  ) {
    // this.storage.get('userphone').then(sid => {
    //   this.loggedIn = !!sid;
    //   // this.ordering.controls.phone.reset(this.usernumber);
    //   console.log( 'EDITADRsid',sid);
    //   console.log( 'EDITADRstorage',this.loggedIn);
    // });
    this.route.queryParams.subscribe(params => {
      this.params = params;
      if(this.params.tit){
        this.tit = this.params.tit;
      }
      if(this.params.userid){
        this.userid = this.params.userid;
      }

    });

  }

  public validationMessages = {
    deliveryadr: [
      {type: 'required', message: 'Введите данные'},
      {type: 'minlength', message: 'Пока мало данных'},
      {type: 'maxlength', message: 'Сильно большой текст!'},
    ],
    delstreet: [
      {type: 'required', message: 'Введите данные'},
      {type: 'minlength', message: 'Пока мало данных'},
      {type: 'maxlength', message: 'Сильно большой текст!'},
    ],
    delhouse: [
      {type: 'required', message: 'Введите данные'},
      {type: 'maxlength', message: 'Сильно большой текст!'},
    ],
    delappart: [
      {type: 'maxlength', message: 'Сильно большой текст!'},
    ],
    additionalInfo: [
      {type: 'maxlength', message: 'Сильно большой текст!'}
    ],
  };
  public changeadr: FormGroup;

  ngOnInit() {
    console.log('this.params',this.params);
    this.changeadr = this.formBuilder.group({
      deliveryadr: new FormControl('Альметьевск', [Validators.required, Validators.maxLength(60), Validators.minLength(4)]),
      delstreet: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(4)]),
      delhouse: new FormControl('', [Validators.required,Validators.maxLength(4)]),
      delappart: new FormControl('', [Validators.maxLength(4)]),
      additionalInfo: new FormControl('', [Validators.maxLength(160)]),
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
  async changeAdr() {
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
    street = this.changeadr.value.delstreet ? 'ул.'+this.changeadr.value.delstreet : '';
    hous = this.changeadr.value.delhouse ? 'д.'+this.changeadr.value.delhouse : '';
    appart = this.changeadr.value.delappart ? 'кв.'+this.changeadr.value.delappart : '';
    comment = this.changeadr.value.additionalInfo ? this.changeadr.value.additionalInfo : '';

    if(this.params.type == 'billing'){
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
    if(this.params.type == 'shipping') {
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
  }
  public  goBack(){
    this.navCtrl.back();
  }
}
