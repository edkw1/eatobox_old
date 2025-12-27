import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
import {CartService} from "../services/cart.service";
import {AlertController, LoadingController, NavController} from '@ionic/angular';
import {Storage} from '@ionic/storage-angular';
import {EventsService} from '../services/events.service';
import {ActivatedRoute} from '@angular/router';
import {ConfigService} from "../services/config.service";
import {FormControl, Validators} from "@angular/forms";
import {OrdersService} from "../services/orders.service";
import {UseradrService} from "../services/useradr.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  private params;
  public userid = '';
  public first_name = '';
  public last_name = '';
  public personEmail = '';
  public personGender = '';
  public personBirthday = '';
  public personPhone = '';
  public personPhoneShow = '';
  public gender = '';
  public date_birth = '';
  public spinner = false;
  public title3 = '';
  public technologies:any = [];
  public arrAddr:Array<any> = [];
  public nameTabPerson :string='Данные';
  public bonusval:string='';
  is_iiko = false;
  showAdr = false;
  private is_bonus = false;
  constructor(
    public api: ApiService,
    private cart: CartService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private navCtrl: NavController,
    public events: EventsService,
    private storage: Storage,
    private config: ConfigService,
    private route: ActivatedRoute,
    private orders: OrdersService,
    private useradr: UseradrService,
  ) { }

  ngOnInit() {
    this.is_iiko = this.config.defaultSettings['is_iiko'];
    this.is_iiko = true;
    this.is_bonus = this.config.defaultSettings['is_bonus'];
    if(this.is_bonus){
      this.title3='Бонусы';
    }
    this.clickMe();
    // this.technologies = this.orders.oldOrders;
    this.route.queryParams.subscribe(params => {
      this.params = params;

      this.orders.getAllOrders(this.params.userid);
      setTimeout(()=>{                           //<<<---using ()=> syntax
        this.technologies = this.orders.oldOrders;
        console.log('GGG',this.technologies);
      }, 1000);


      console.log('this.params', this.params);
      if(this.params.userid && this.params.userid!==''){
        this.api.getApi('clients', {'id' : this.params.userid}).then((response)=> {
          console.log(response);
          if(response.hasOwnProperty('data')){
            if(response['data'].length){
              if(response['data'][0].is_blacklist){
                this.errorSms('Ваш профиль заблокирован!','Обратитесь к Администратору!');
              } else {
                this.storage.set('user', response['data'][0]);
                let user = response['data'][0];
                this.userid = user.id;
                this.first_name = user.first_name;
                this.last_name = user.last_name;
                this.personEmail = user.email;
                this.personBirthday = user.date_birth;
                this.personPhone = user.phone;
                this.personPhoneShow = ApiService.createPhoneNumber(user.phone);
                this.personGender = user.gender.hasOwnProperty('title') ? user.gender.title : '';
                this.date_birth = user.date_birth;
                this.orders.getAllOrders(this.userid);
               this.useradr.getCustomerAddreses(user.id).then(resp =>{
                 this.showAdr=true;
                 if(resp && resp.length){
                   this.arrAddr = resp;
                 }
               });
                // console.log('this.arrAddr', this.arrAddr);
              }
            }
            // else {
            //   this.storage.get('user').then(user => {
            //     console.log('this.USER', user);
            //     if(user!==''){
            //       this.userid = user.id;
            //       this.first_name = user.first_name;
            //       this.last_name = user.last_name;
            //       this.personEmail = user.email;
            //       this.personBirthday = user.date_birth;
            //       this.personPhone = user.phone;
            //       this.personPhoneShow = ApiService.createPhoneNumber(user.phone);
            //       this.personGender = user.gender.hasOwnProperty('title') ? user.gender.title : '';
            //       this.date_birth = user.date_birth;
            //       // this.getCustomerInfo(this.userid);
            //       // this.getAdress(this.userid);
            //       // this.technologies = this.orders.oldOrders;
            //     } else {
            //       this.userid ='';
            //     }
            //   });
            // }
          }
        });
      }
      if(this.params.edit=='1'){
        // this.getAdress(this.userid);
      }
      if(this.params.update=='prof'){
        // this.getCustomerInfo(this.userid);
      }
    });
    // console.log('contactPerson',this.contactPerson);

  }
  public clickMe(){
    this.api.spinner = false;
    this.nameTabPerson = this.cart.nameTabPerson;
    console.log('this.nameTabPerson',this.nameTabPerson);
    if(this.nameTabPerson == 'Бонусы'){
      if(this.is_bonus){

        this.api.getBonus('clients',{phone:this.personPhone}).then(result => {
          console.log('result',result);
          console.log('this.personPhone',this.personPhone);
          if(result.hasOwnProperty('data')){
            if(result['data']){
              this.bonusval = result['data'];
            } else {
              this.bonusval = '0';
            }

          } else {
            this.bonusval = '0';
          }
        });
      }
    }
    if(this.nameTabPerson == 'Заказы'){
      console.log('this.personPhone', this.personPhone);
      console.log('this.userid', this.userid);
      this.orders.getAllOrders(this.userid);
      this.technologies = this.orders.oldOrders;
      console.log('this.technologies', this.technologies);
    }

  }
  async goToChangProfile() {
    const alert = await this.alertController.create({
      subHeader: 'Вы действительно хотите изменить данные аккаунта?',
      buttons: ['Нет', {
        text: 'Да',
        handler: async () => {
          const loading = await this.loadingController.create({
            message: 'Перенаправление...',
            spinner: 'crescent'
          });
          await loading.present();
          await loading.dismiss();
          this.navCtrl.navigateRoot('/editprofile?userid='+this.userid);
          // this.api.logout().then(async () => {
          //   this.events.publishSomeData({login : false});
          //   this.cart.clearCart();
          //   this.storage.remove('username');
          //   this.storage.remove('userid');
          //   await loading.dismiss();
          //   this.navCtrl.navigateRoot('/editprofile');
          // });
        }
      }]
    });
    await alert.present();
  }
  async goToDelProfile() {
    const alert = await this.alertController.create({
      subHeader: 'Вы хотите УДАЛИТЬ данные аккаунта?',
      buttons: ['Нет', {
        text: 'Да',
        handler: async () => {
          const loading = await this.loadingController.create({
            message: 'Перенаправление...',
            spinner: 'crescent'
          });
          await loading.present();
          //await loading.dismiss();
          //this.navCtrl.navigateRoot('/');
          this.api.removeUserApi('clients', {'id' : this.params.userid}).then((response)=> {
            console.log(response);
            if(response.hasOwnProperty('data')){
              if(response['data'].length){

              }
            }
          });
          this.api.logout().then(async () => {
            // this.events.publishSomeData({login : false});
            // this.authorized = false;
            this.events.publishLoginId(0 );
            // this.events.publishLoginEv(false);
            this.cart.clearCart();
            this.storage.remove('user');
            this.storage.remove('username');
            this.storage.remove('userid');
            await loading.dismiss();
            this.navCtrl.navigateRoot('/')
            // setTimeout(() => this.navCtrl.navigateRoot('/'), 100);

          });

        }
      }]
    });
    await alert.present();
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
  async goToAddAdress() {
    const alert = await this.alertController.create({
      subHeader: 'Вы хотите добавить адрес?',
      buttons: ['Нет', {
        text: 'Да',
        handler: async () => {
          const loading = await this.loadingController.create({
            message: 'Перенаправление...',
            spinner: 'crescent'
          });
          await loading.present();
          await loading.dismiss();
          this.navCtrl.navigateRoot('/editadres?userid='+this.userid+'&tit=Добавить',);
          // if(this.adr2){
          //   console.log('ADR22222', this.adr2);
          // } else if(this.adr1){
          //   console.log('ADR11111', this.adr1);
          //   this.navCtrl.navigateRoot('/editadres?userid='+this.userid+'&type=shipping&tit=Добавить');
          // } else if(!this.adr1){
          //   this.navCtrl.navigateRoot('/editadres?userid='+this.userid+'&type=billing&tit=Добавить');
          //   console.log('НЕТ АДРЕСОВ');
          // }
          // this.navCtrl.navigateRoot('/editprofile');
          // this.api.logout().then(async () => {
          //   this.events.publishSomeData({login : false});
          //   this.cart.clearCart();
          //   this.storage.remove('username');
          //   this.storage.remove('userid');
          //   await loading.dismiss();
          //
          // });
        }
      }]
    });
    await alert.present();
  }

  captureName(event: any) {}
}
