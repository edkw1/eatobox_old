import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../services/api.service';
import {CartService} from '../services/cart.service';
import {AlertController, IonSelect, NavController} from '@ionic/angular';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {EventsService} from '../services/events.service';
import {Storage} from '@ionic/storage-angular';
import {ConfigService} from "../services/config.service";
import {IonicSelectableComponent} from "ionic-selectable";
import {Subscription} from "rxjs";
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  @ViewChild('paymentType', {static: false}) paymentType: IonSelect;
  @ViewChild('deliveryType', {static: false}) deliveryType: IonSelect;
  private authorized = false;
  private isLoading = false;
  private isLoadingPromo = false;
  private isCancelPromo = false;
  private priborshow = true;
  public oplatashow:boolean = false;
  portsSubscription: Subscription;
  cartSum = 0;
  private deliv: FormGroup;
  private sklad: FormGroup;
  private oplata: FormGroup;
  private money: FormGroup;
  private bonus: FormGroup;
  private promo: FormGroup;
  private dopinfo: FormGroup;
  public sposobi:Array<any> = [];
  public cashPay:Array<any> = [];
  public cardPay:Array<any> = [];
  public cities:Array<any> = [];
  public points:Array<any> = [];
  public streets:Array<any> = [];
  public addedDishes :Array<any> = [];
  private userphone: string = '';
  private userid: string = '';
  private sposoboplat: string = '';
  private promouse: string = '';
  // private sumCart: number = 0;
  private adminUser = false;
  private is_iiko = false;
  private is_bonus = false;
  private smsnumber: string = '';
  public btnSmsShow = false;
  public btnKodSend = true;
  public smsSend = false;
  public btnSend = true;
  public btnSendPreload = false;
  private userdelivery = '2';
  public bonusval:number;
  public max_bonuses = '';
  public max_bonusesval:number;

  constructor(
    private api: ApiService,
    private cart: CartService,
    public alertController: AlertController,
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    public events: EventsService,
    private storage: Storage,
    private config: ConfigService,
  ) {

    this.storage.get('user').then((res)=>{
      console.log('userOBJ',res);
      if(res && res.hasOwnProperty('id')){
        this.authorized = true;
        this.userid = res['id'];
        this.userphone = res['phone'];
        console.log("this.authorized1111",this.userphone);
        this.getBonuses();
      }
    });
  }
  searchPorts(event: {
    component: IonicSelectableComponent,
    text: string
  }) {
    let text = event.text.trim().toLowerCase();
    event.component.startSearch();
    if (!text) {
      event.component.items = [];
      event.component.endSearch();
      return;
    }
      event.component.items = this.filterPorts(this.streets, text);
      event.component.endSearch();
  }
  filterPorts(ports , text: string) {
    return ports.filter(port => {
      return port.title.toLowerCase().indexOf(text) !== -1;
    });
  }
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
    delstreet: [
      {type: 'required', message: 'Введите улицу'},
      {type: 'minlength', message: 'Недостаточно букв'},
      {type: 'maxlength', message: 'Слишком длинное'},
    ],
    deliveryadr: [
      {type: 'required', message: 'Выберите город'}
    ],
    skladname: [
      {type: 'required', message: 'Выберите город'}
    ],
    delivery: [
      {type: 'required', message: 'Выберите способ доставки'}
    ],
    varpay: [
      {type: 'required', message: 'Выберите способ оплаты'}
    ],
    pointname: [
      {type: 'required', message: 'Выберите заведение'}
    ],
    iikostreet: [
      {type: 'required', message: 'Выберите улицу'}
    ],
    dopname: [
      {type: 'maxlength', message: 'Слишком длинное'},
    ],
    delhouse: [
      {type: 'required', message: 'Выберите дом'},
      {type: 'maxlength', message: 'Слишком длинное'},
    ],
    delappart: [
      {type: 'maxlength', message: 'Слишком длинное'},
    ],
    entrance: [
      {type: 'maxlength', message: 'Слишком длинное'},
    ],
    floor: [
      {type: 'maxlength', message: 'Слишком длинное'},
    ],
    comment: [
      {type: 'maxlength', message: 'Слишком длинное'},
    ],
    pribor: [
      {type: 'max', message: 'Слишком много'},
    ],
    bonusvalform: [
      {type: 'max', message: 'Вы привысили максимум списания бонусов'},
      {type: 'min', message: 'Минимальное количество 0'},
    ],
   promovalform: [
     {type: 'required', message: 'Введите промокод'},
      {type: 'maxlength', message: 'Слишком длинный'},
      {type: 'minlength', message: 'Слишком мало символов'},
    ],
  };

  ngOnInit() {
    console.log('CHECK', this.config.defaultSettings);
    this.is_iiko = this.config.defaultSettings['is_iiko'];
    this.is_bonus = this.config.defaultSettings['is_bonus'];
    if(this.config.defaultSettings.hasOwnProperty('max_bonuses')){
      this.max_bonuses = this.config.defaultSettings['max_bonuses'];
    }
console.log('this.max_bonuses',this.max_bonuses);
    this.addedDishes = this.cart.getAddedDishes();
    this.cartSum = this.cart.getDishesSum();

    this.getBonuses();

    this.promo = this.formBuilder.group({
      promovalform: new FormControl('',[Validators.required, Validators.maxLength(10),Validators.minLength(4)])
    });

    this.api.getApi('iiko_payments',{}).then(result => {
      if(result.hasOwnProperty('data')){
        this.sposobi = result['data'];
        this.sposobi.forEach( value =>{
          if(value.article=='CASH'){
            this.cashPay = value;
            this.money = this.formBuilder.group({
              moneyval: new FormControl(''),
            });
          }
          if(value.article=='CARD'){
            this.cardPay = value;
          }
         console.log(value);
        });
      }
    });

    this.api.getApi('deliveryTypes',{}).then(result => {
      console.log('deliveryTypes',result);

    });


    console.log('is_iiko', this.is_iiko);
    this.getCities();
    this.deliv = this.formBuilder.group({
      delivery: new FormControl('2', Validators.required),
    });
    this.sklad = this.formBuilder.group({});
    if(this.sposobi){
      this.oplata = this.formBuilder.group({
        varpay: new FormControl('', Validators.required),
      });
      // this.oplata.controls.sposoboplat.reset();
      if(this.cashPay){
        // this.oplata.controls.varpay.reset('1');
        // this.money.setControl('moneyval', new FormControl('', Validators.compose([])));
      }
    }



    this.dopinfo = this.formBuilder.group({
      // dopname: new FormControl('', [Validators.maxLength(25)]),
      pribor: new FormControl('0', [Validators.max(25)]),
      comment: new FormControl('', [Validators.maxLength(200)]),
    });

    console.log('NNNN111',this.max_bonuses);
    console.log('NNNN222',parseInt(this.max_bonuses)*this.cartSum /100);
    console.log('NNNN333',this.bonusval);



    console.log('addedDishes', this.addedDishes );
    console.log('cartSum', this.cartSum);
    // this.sklad.removeControl('skladname');
    this.oplatashow = true;
    // this.oplata.controls.sposoboplat.reset();
    this.sklad.setControl('deliveryadr', new FormControl('', Validators.compose([Validators.required])));
    if(this.is_iiko){
      this.sklad.setControl('iikostreet', new FormControl('', Validators.compose([Validators.required])));
    } else {
      this.sklad.setControl('delstreet', new FormControl('', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(60)])));
    }
    this.sklad.setControl('delhouse', new FormControl('', Validators.compose([Validators.required,Validators.maxLength(60)])));
    this.sklad.setControl('delappart', new FormControl('', Validators.compose([Validators.maxLength(60)])));
    this.sklad.setControl('entrance', new FormControl('', Validators.compose([Validators.maxLength(20)])));
    this.sklad.setControl('floor', new FormControl('', Validators.compose([Validators.maxLength(20)])));

  }
getBonuses(){
  if(this.is_bonus){
    console.log('this.userphone000', this.userphone);
    // console.log('this.userphone000', Profile.personPhone);
    this.api.getBonus('clients',{phone:this.userphone}).then(result => {
      console.log('result',result);
      console.log('this.userphone@@@', this.userphone);
      if(result.hasOwnProperty('data')){
        console.log('this.userphone', this.userphone);
        if(result['data']){

          this.bonusval = result['data'];
        } else {
          console.log('000000');
          this.bonusval = 0;
        }
      } else {
        console.log('ELSE000000');
        this.bonusval = 0;
      }
      if(this.max_bonuses){
        this.max_bonusesval = parseInt(this.max_bonuses)*this.cartSum /100 <= this.bonusval ? parseInt(this.max_bonuses)*this.cartSum /100 : this.bonusval;
        console.log('NNNN',this.max_bonusesval);
        this.bonus = this.formBuilder.group({
          bonusvalform: new FormControl('',[Validators.max(this.max_bonusesval),Validators.min(0)])
        });
      } else {
        this.max_bonusesval = this.bonusval;
        this.bonus = this.formBuilder.group({
          bonusvalform: new FormControl('',[Validators.max(this.bonusval),Validators.min(0)])
        });
      }
    });
  }
}
  onItemRadio(event) {
    if (event != undefined) {
      this.userdelivery = event.detail.value;
      console.log('this.userdelivery', this.userdelivery);
      if (this.userdelivery == '2') {
        this.sklad.removeControl('skladname');
        this.sklad.removeControl('pointname');
        this.oplatashow = true;
        // this.oplata.controls.sposoboplat.reset();
        if(this.is_iiko){
          this.sklad.setControl('iikostreet', new FormControl('', Validators.compose([Validators.required])));
        } else {
          this.sklad.setControl('delstreet', new FormControl('', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(60)])));
        }
        this.sklad.setControl('deliveryadr', new FormControl('', Validators.compose([Validators.required])));

        this.sklad.setControl('delhouse', new FormControl('', Validators.compose([Validators.required, Validators.maxLength(60)])));
        this.sklad.setControl('delappart', new FormControl('', Validators.compose([Validators.maxLength(60)])));
        this.sklad.setControl('entrance', new FormControl('', Validators.compose([Validators.maxLength(20)])));
        this.sklad.setControl('floor', new FormControl('', Validators.compose([Validators.maxLength(20)])));

      }
      if (this.userdelivery == '1') {
        this.sklad.setControl('skladname', new FormControl('', Validators.compose([Validators.required, ])));
        this.sklad.setControl('pointname', new FormControl('', Validators.compose([Validators.required, ])));
        // this.oplata.setControl('sposoboplat', new FormControl('', Validators.compose([Validators.required, ])));
        // this.sklad.controls.skladname.reset(this.Acfregion[0]);
        this.oplatashow = true;
        // this.oplata.controls.sposoboplat.reset('В заведении');
        this.sklad.removeControl('deliveryadr');
        console.log('this.is_iiko',this.is_iiko);
        if(this.is_iiko){
          this.sklad.removeControl('iikostreet');
        } else {
          this.sklad.removeControl('delstreet');
        }
        this.sklad.removeControl('delhouse');
        this.sklad.removeControl('delappart');
        this.sklad.removeControl('entrance');
        this.sklad.removeControl('floor');
      }

    } else {
    }
  }
  onItemPoints(event) {
    console.log('events', event);
    if (event != undefined) {

      this.sklad.controls.pointname.reset();
      // this.sklad.removeControl('points');
      this.api.getApi('stores',{'city_id' : event.detail.value}).then(result => {
        console.log('points', result);
        if(result.hasOwnProperty('data') && result['data']){
          this.points = result['data'];
          console.log(' this.points',  this.points);
          // this.sklad.setControl('points', new FormControl('', Validators.compose([Validators.required, ])));
          // this.sklad.controls.pointname.reset();
          // console.log('points', this.cities[0]['id']);
          // this.sklad.controls.deliveryadr.reset(this.cities[0]['id'])
          // this.sklad.controls['deliveryadr'].setValue(this.cities[0]['id'], {onlySelf: true});
          // this.sklad.patchValue({
          //   'deliveryadr': this.cities[0]['id']
          // });
        }
        else {
          this.points = [];
        }
      });
      // this.userdelivery = event.detail.value;
      console.log('onItemPoints', event.detail.value);
      // if (this.userdelivery == 'Самовывоз') {
      //   this.sklad.setControl('skladname', new FormControl('', Validators.compose([Validators.required, ])));
      //   // this.oplata.setControl('sposoboplat', new FormControl('', Validators.compose([Validators.required, ])));
      //   // this.sklad.controls.skladname.reset(this.Acfregion[0]);
      //   this.oplatashow = true;
      //   this.oplata.controls.sposoboplat.reset('В заведении');
      //   this.sklad.removeControl('deliveryadr');
      //   this.sklad.removeControl('delstreet');
      //   this.sklad.removeControl('delhouse');
      //   this.sklad.removeControl('delappart');
      // }
      // if (this.userdelivery == 'Доставка') {
      //   this.sklad.removeControl('skladname');
      //   this.oplatashow = true;
      //   this.oplata.controls.sposoboplat.reset();
      //   this.sklad.setControl('deliveryadr', new FormControl('', Validators.compose([Validators.required])));
      //   this.sklad.setControl('delstreet', new FormControl('', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(60)])));
      //   this.sklad.setControl('delhouse', new FormControl('', Validators.compose([Validators.maxLength(60)])));
      //   this.sklad.setControl('delappart', new FormControl('', Validators.compose([Validators.maxLength(60)])));
      //
      // }
    } else {

    }
  }
  triggerChange($event) {
    if($event.detail.checked){
      this.dopinfo.controls.pribor.reset(1);
      this.priborshow = false;
    } else {
      this.dopinfo.controls.pribor.reset(0);
      this.priborshow = true;
    }
  }
  getCities() {
    this.cities = this.cart.cities;
    console.log('DDDATA',this.cities);
  }
  onItemCity(event) {
    console.log('SRTART STREET');
    if(this.is_iiko){
      this.streets = [];
      this.sklad.controls.iikostreet.reset();
      console.log('SRTART STREET111');
      // console.log('events', event.detail.value);
      if (event != undefined) {
        let tempElem = this.cities.filter(item => item['id'] == event.detail.value);
        if (tempElem.length){
          this.streets = tempElem[0]['street'];
        } else {
          this.streets = [];
        }
        console.log('this.streets', this.streets);
      }
    }

  }
  // chooseStreet(id){
  //   this.sklad.controls.iikostreet.reset(id);
  // }
  // startSearch(event){
  //   const query = event.target.value.toLowerCase();
  //   console.log('query',query);
  //   requestAnimationFrame(() => {
  //     const items = Array.from(document.querySelector('ul.cities_list').children);
  //     items.forEach((item) => {
  //       const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
  //       item.className = shouldShow ? 'block' : 'none';
  //     });
  //   });
  // };
  onMoneyRadio(event) {
    if (event != undefined) {
      this.sposoboplat = event.detail.value;
      console.log('this.money',this.money);
      if (this.cashPay && this.sposoboplat == this.cashPay['id']) {
        this.money.setControl('moneyval', new FormControl('', Validators.compose([])));
      }
      if (this.cardPay && this.sposoboplat == this.cardPay['id']) {
        this.money.removeControl('moneyval');

      }
    }
  }

  eventCaught(event : boolean) {
    if(event){
      this.makeOrder();
    }
  }

  getPromo() {
    if (this.isLoadingPromo) {
      return;
    }
    this.isLoadingPromo = true;
    for (let control in this.promo.controls) {
      if (this.promo.controls.hasOwnProperty(control)) {
        this.promo.controls[control].markAsTouched();
      }
    }
    if (this.promo.status === 'INVALID') {
      this.isLoadingPromo = false;
      return;
    }
    let promoval  = this.promo.value.promovalform;
    console.log('PROMO=', promoval);
    // let promoOrder['client_phone'] =;
    return new Promise((resolve) => {
      this.api.getApi('promocodes',{code:promoval, client_phone:this.userphone,is_alive:true, limit:1}).then(result => {
        console.log('promocodes', result);
        if(result['status']=='200'){
          this.isLoadingPromo = false;

          if(result['data'].length){
            this.isCancelPromo = true;
            this.promouse = promoval;
          if(result['data'][0]['discount_type']['value']=='percent'){
            let sum = parseInt(result['data'][0]['discount_sum']);
            this.cart.sum = Math.ceil(this.cart.sum - this.cart.sum * sum /100);
          }
          if(result['data'][0]['discount_type']['value']=='fixed'){
            let sum = parseInt(result['data'][0]['discount_sum']);
            this.cart.sum = Math.ceil(this.cart.sum - sum);
          }
          } else{
            this.api.alertMessage('Проверьте промокод,',
              'Нет информации по данному промокоду');
          }
        } else {
          this.isLoadingPromo=false;
          this.api.alertMessage('Искренне сожалеем,',
            'произошла ошибка при проверке промокода. Попробуйте чуть позже.');
        }
      });

    });
  }
  clearPromo(){
    this.promo.controls.promovalform.reset('');
    this.isCancelPromo = false;
    this.cart.sum = this.cartSum;
  }
    makeOrder(){
    console.log('makeOrder');
    console.log('this.isLoading', this.isLoading);
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;
    for (let control in this.sklad.controls) {
      if (this.sklad.controls.hasOwnProperty(control)) {
        this.sklad.controls[control].markAsTouched();
      }
    }
    for (let control in this.deliv.controls) {
      if (this.deliv.controls.hasOwnProperty(control)) {
        this.deliv.controls[control].markAsTouched();
      }
    }
    for (let control in this.oplata.controls) {
      if (this.oplata.controls.hasOwnProperty(control)) {
        this.oplata.controls[control].markAsTouched();
      }
    }
    for (let control in this.money.controls) {
      if (this.money.controls.hasOwnProperty(control)) {
        this.money.controls[control].markAsTouched();
      }
    }
    // for (let control in this.bonus.controls) {
    //   if (this.bonus.controls.hasOwnProperty(control)) {
    //     this.bonus.controls[control].markAsTouched();
    //   }
    // }
    // console.log('this.sklad.status', this.sklad.status);
    // console.log('this.sklad.contains', this.sklad.value);
    // console.log('this.deliv.status', this.deliv.status);
    // console.log('this.oplata.status', this.oplata.status);
    // console.log('this.money.status', this.money.status);
    if (this.sklad.status === 'INVALID') {
      this.isLoading = false;
      return;
    }
    if (this.deliv.status === 'INVALID') {
      this.isLoading = false;
      return;
    }
    if (this.oplata.status === 'INVALID') {
      this.isLoading = false;
      return;
    }
    if (this.money.status === 'INVALID') {
      this.isLoading = false;
      return;
    }
    // if (this.bonus.status === 'INVALID') {
    //   this.isLoading = false;
    //   return;
    // }

    let dataOrder = {};
    dataOrder['source'] ='mobile-app';
    if(this.promouse){
      dataOrder['promocode'] =this.promouse;
    }
    dataOrder['client_phone'] =this.userphone;
    dataOrder['client_id'] =this.userid;
    dataOrder['deliveryType_id'] = this.deliv.value.delivery ? this.deliv.value.delivery : 1;
    dataOrder['count_devices'] = this.dopinfo.value.pribor;
    dataOrder['comment'] = this.dopinfo.value.comment ? this.dopinfo.value.comment : '';
    if(this.deliv.value.delivery=='2'){
      dataOrder['iiko_city_id'] = this.sklad.value.deliveryadr;
      if(this.is_iiko){
        console.log('this.sklad.value.iikostreet', this.sklad.value.iikostreet.id);
        dataOrder['iiko_street_id'] = this.sklad.value.iikostreet.id;
      } else {
        dataOrder['iiko_street_id'] = this.sklad.value.delstreet;
      }
      dataOrder['delivery_house'] = this.sklad.value.delhouse ? this.sklad.value.delhouse : '';
      dataOrder['delivery_apartment'] = this.sklad.value.delappart ? this.sklad.value.delappart : '';
      dataOrder['delivery_entrance'] = this.sklad.value.entrance ? this.sklad.value.entrance : '';
      dataOrder['delivery_floor'] = this.sklad.value.floor ? this.sklad.value.floor : '';
    }
    if(this.deliv.value.delivery=='1'){
      dataOrder['iiko_city_id'] = this.sklad.value.skladname;;
      dataOrder['iiko_cashbox_id'] = this.sklad.value.pointname;

    }
    dataOrder['iiko_payment_id'] = this.oplata.value.varpay;

    if(this.oplata.value.varpay=='1'){
      dataOrder['comment'] = this.money.value.moneyval ? dataOrder['comment'] + '; Сдача с' + this.money.value.moneyval : dataOrder['comment'];
    }
    // let tmpDishes = this.cart.getAddedDishes();
    let tmpDishes = this.addedDishes;
    let products = [];
    for (var key in tmpDishes) {
      let isSlash = key.indexOf('/');
      let id = '';
      if(isSlash>0){
        id = key.slice(0,isSlash);
      } else {
        id = key
      }
      products.push({
        id: id,
        count: tmpDishes[key]['quantity'],
        modifiers: tmpDishes[key]['modifiers']
      });
    }
    if(this.bonus.value.bonusvalform){
      dataOrder['bonus_count']=this.bonus.value.bonusvalform;
    }
    dataOrder['products']=products;
    // console.log("PRODUCTS", products);
    this.api.addApi('orders',dataOrder).then(result => {
      console.log('ORDER',result);
      if(result.hasOwnProperty('data')&& result['data']){
        this.api.alertMessage('Спасибо!', '' +
          'Номер заказа '+result['data']);
      } else {
        this.api.alertMessage('Искренне сожалеем,', '' +
          'произошла ошибка при оформлении заказа. Попробуйте чуть позже.');
      }
      this.cart.clearCart();
      this.navCtrl.navigateRoot('/');
    });
    // console.log('dataOrder',dataOrder);
    // let dishesList = [];
  }
  checkOrder(){
    console.log('checkOrder');
    // console.log('this.isLoading', this.isLoading);
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;
    for (let control in this.sklad.controls) {
      if (this.sklad.controls.hasOwnProperty(control)) {
        this.sklad.controls[control].markAsTouched();
      }
    }
    for (let control in this.deliv.controls) {
      if (this.deliv.controls.hasOwnProperty(control)) {
        this.deliv.controls[control].markAsTouched();
      }
    }
    for (let control in this.oplata.controls) {
      if (this.oplata.controls.hasOwnProperty(control)) {
        this.oplata.controls[control].markAsTouched();
      }
    }
    for (let control in this.money.controls) {
      if (this.money.controls.hasOwnProperty(control)) {
        this.money.controls[control].markAsTouched();
      }
    }
    // for (let control in this.bonus.controls) {
    //   if (this.bonus.controls.hasOwnProperty(control)) {
    //     this.bonus.controls[control].markAsTouched();
    //   }
    // }
    // console.log('this.sklad.status', this.sklad.status);
    // console.log('this.sklad.contains', this.sklad.value);
    // console.log('this.deliv.status', this.deliv.status);
    // console.log('this.oplata.status', this.oplata.status);
    // console.log('this.money.status', this.money.status);
    if (this.sklad.status === 'INVALID') {
      this.isLoading = false;
      return;
    }
    if (this.deliv.status === 'INVALID') {
      this.isLoading = false;
      return;
    }
    if (this.oplata.status === 'INVALID') {
      this.isLoading = false;
      return;
    }
    if (this.money.status === 'INVALID') {
      this.isLoading = false;
      return;
    }
    // if (this.bonus.status === 'INVALID') {
    //   this.isLoading = false;
    //   return;
    // }

    let dataOrder = {};
    dataOrder['source'] ='mobile-app';
    if(this.promouse){
      dataOrder['promocode'] =this.promouse;
    }
    dataOrder['client_phone'] =this.userphone;
    dataOrder['client_id'] =this.userid;
    dataOrder['deliveryType_id'] = this.deliv.value.delivery ? this.deliv.value.delivery : 1;
    // dataOrder['count_devices'] = this.dopinfo.value.pribor;
    // dataOrder['comment'] = this.dopinfo.value.comment ? this.dopinfo.value.comment : '';
    if(this.deliv.value.delivery=='2'){
      dataOrder['iiko_city_id'] = this.sklad.value.deliveryadr;
      if(this.is_iiko){
        console.log('this.sklad.value.iikostreet', this.sklad.value.iikostreet.id);
        dataOrder['iiko_street_id'] = this.sklad.value.iikostreet.id;
      } else {
        dataOrder['iiko_street_id'] = this.sklad.value.delstreet;
      }
      // dataOrder['delivery_house'] = this.sklad.value.delhouse ? this.sklad.value.delhouse : '';
      // dataOrder['delivery_apartment'] = this.sklad.value.delappart ? this.sklad.value.delappart : '';
      // dataOrder['delivery_entrance'] = this.sklad.value.entrance ? this.sklad.value.entrance : '';
      // dataOrder['delivery_floor'] = this.sklad.value.floor ? this.sklad.value.floor : '';
    }
    if(this.deliv.value.delivery=='1'){
      dataOrder['iiko_city_id'] = this.sklad.value.skladname;;
      dataOrder['iiko_cashbox_id'] = this.sklad.value.pointname;

    }
    dataOrder['iiko_payment_id'] = this.oplata.value.varpay;

    // if(this.oplata.value.varpay=='1'){
    //   dataOrder['comment'] = this.money.value.moneyval ? dataOrder['comment'] + '; Сдача с' + this.money.value.moneyval : dataOrder['comment'];
    // }
    // let tmpDishes = this.cart.getAddedDishes();
    let tmpDishes = this.addedDishes;
    let products = [];
    for (var key in tmpDishes) {
      let isSlash = key.indexOf('/');
      let id = '';
      if(isSlash>0){
        id = key.slice(0,isSlash);
      } else {
        id = key
      }
      products.push({
        id: id,
        count: tmpDishes[key]['quantity'],
        modifiers: tmpDishes[key]['modifiers']
      });
    }
    if(this.bonus.value.bonusvalform){
      dataOrder['bonus_count']=this.bonus.value.bonusvalform;
    }
    dataOrder['products']=products;
    // console.log("PRODUCTS", products);
    this.api.calculateApi('orders',dataOrder).then(result => {
      console.log('CALC',result);
      // if(result.hasOwnProperty('data')&& result['data']){
      //   this.api.alertMessage('Спасибо!', '' +
      //     'Номер заказа '+result['data']);
      // } else {
      //   this.api.alertMessage('Искренне сожалеем,', '' +
      //     'произошла ошибка при оформлении заказа. Попробуйте чуть позже.');
      // }
      // this.cart.clearCart();
      // this.navCtrl.navigateRoot('/');
    });
    // console.log('dataOrder',dataOrder);
    // let dishesList = [];
  }
  async sendKod() {
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

  async noUser() {
    const alert = await this.alertController.create({
      header: 'Пройдите регистрацию',
      // message: this.config.regatxt,
      buttons: [
        {
          text: 'Регистрация',
          cssClass: 'link_reg',
          handler: () => {
            // window.location.href = this.config.urlRegasite;
            // this.navCtrl.navigateRoot('/');
          }
        }
      ]
    });
    await alert.present();
  }

}
