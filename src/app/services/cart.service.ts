import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Storage} from '@ionic/storage-angular';
import {EventsService} from './events.service';
import {AlertController, LoadingController, NavController} from '@ionic/angular';
import {ConfigService} from "./config.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  minCart:number = 0;
  static dishes = [];
  public sum = 0;
  public is_iiko : boolean = false;
  public cities:Array<any> = [];
  public addedItems;
  public giftsArr: Array<object> = [];
  public giftsArrDish: Array<object> = [];
  public giftsSum: number = 0;
  public tmpSumGift: number = 0;
  public cartbtnTxt:string= '~60 мин';
  public moStart:string = '';
  public moEnd:string = '';
  public tuStart:string = '';
  public tuEnd:string = '';
  public weStart:string = '';
  public weEnd:string = '';
  public thStart:string = '';
  public thEnd:string = '';
  public frStart:string = '';
  public frEnd:string = '';
  public stStart:string = '';
  public stEnd:string = '';
  public suStart:string = '';
  public suEnd:string = '';
  public nameTabPerson:string = 'Данные';
  constructor(
    private events: EventsService,
    private api: ApiService,
    private config: ConfigService,
    private storage: Storage,
    public loadingController: LoadingController,
    private navCtrl: NavController,
    public alertController: AlertController
  ) {
    this.addedItems = {};
    this.is_iiko = this.config.is_iiko;
    this.getGifts();
    this.getStreets();
  }
  static getDishById(dishId) {
    // for (var i = 0; i < CartService.dishes.length; i++) {
    //   console.log(CartService.dishes[i].id);
    // }
    const dish = CartService.dishes.filter(dishItem => dishItem.id == dishId);
    console.log('dish',dish);
    console.log('dishes',this.dishes);
    if (dish.length) {
      return dish[0];
    } else {
      return undefined;
    }
  }

  static getDishesByParent(parentId) {
    return CartService.dishes.filter(dish => dish.parent == parentId);
  }
  async doLogout() {

    const alert = await this.alertController.create({
      subHeader: 'Вы действительно хотите выйти из аккаунта?',
      buttons: ['Нет', {
        text: 'Да',
        handler: async () => {
          const loading = await this.loadingController.create({
            message: 'Выход из аккаунта...',
            spinner: 'crescent'
          });
          await loading.present();

          this.api.logout().then(async () => {
            // this.events.publishSomeData({login : false});
            // this.authorized = false;
            this.events.publishLoginId(0 );
            // this.events.publishLoginEv(false);
            this.clearCart();
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
  public getGifts(){
    this.api.getApi('gifts',{}).then((res) => {
      if(res.hasOwnProperty('data')&& res['data'].length){
        this.giftsArr = res['data'].sort((a, b) => {
          let nameA = parseInt(a['basket_price']); // ignore upper and lowercase
          let nameB = parseInt(b['basket_price']); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });

      }
    });

  }

  getStreets() {
    return new Promise((resolve) => {
      this.api.getApi('cities',{'is_not_empty' : true}).then(result => {
        // console.log('cities', result);
        if(result.hasOwnProperty('data')){
          this.cities = result['data'];
          // console.log('citiesaaa', this.cities[0]['id']);
          // console.log('SRTART STREET3',this.config.defaultSettings['is_iiko']);
         if(this.config.defaultSettings['is_iiko']){
           this.cities.forEach((item) => {
             this.api.getApi('iiko_streets',{'city_id' : item['id'],'limit': 0}).then(result => {
               // console.log('streets', result);
               if(result.hasOwnProperty('data')){
                 item['street'] = result['data'];
               }
               else {
                 item['street'] = [];
               }
             });
           });
           console.log('pointsNEW',  this.cities);
         }
        }
        else {
          this.cities = [];
        }
      });

    });
  }

  clearCart() {
    this.addedItems = {};

    this.events.publishSomeData({countchange : false});
    this.events.publishcartClear(true);
    // CartService.dishes = [];
    // this.dishes = [];
    this.sum = 0;
    // this.storage.remove('store_type');
  }
  public workTime(){
    console.log("11111",this.config.defaultSettings);
    if(this.config.defaultSettings&&this.config.defaultSettings.hasOwnProperty('monday_from')){
      this.moStart = this.config.defaultSettings['monday_from'];
    }
    if(this.config.defaultSettings&&this.config.defaultSettings.hasOwnProperty('monday_to')){
      this.moEnd = this.config.defaultSettings['monday_to'];
    }
    if(this.config.defaultSettings&&this.config.defaultSettings.hasOwnProperty('tuesday_from')){
      console.log('SERVICE TU');
      this.tuStart = this.config.defaultSettings['tuesday_from'];
    }
    if(this.config.defaultSettings&&this.config.defaultSettings.hasOwnProperty('tuesday_to')){
      this.tuEnd = this.config.defaultSettings['tuesday_to'];
    }
    if(this.config.defaultSettings&&this.config.defaultSettings.hasOwnProperty('wednesday_from')){
      this.weStart = this.config.defaultSettings['wednesday_from'];
    }
    if(this.config.defaultSettings&&this.config.defaultSettings.hasOwnProperty('wednesday_to')){
      this.weEnd = this.config.defaultSettings['wednesday_to'];
    }
    if(this.config.defaultSettings&&this.config.defaultSettings.hasOwnProperty('thursday_from')){
      this.thStart = this.config.defaultSettings['thursday_from'];
    }
    if(this.config.defaultSettings&&this.config.defaultSettings.hasOwnProperty('thursday_to')){
      this.thEnd = this.config.defaultSettings['thursday_to'];
    }
    if(this.config.defaultSettings&&this.config.defaultSettings.hasOwnProperty('friday_from')){
      this.frStart = this.config.defaultSettings['friday_from'];
    }
    if(this.config.defaultSettings&&this.config.defaultSettings.hasOwnProperty('friday_to')){
      this.frEnd = this.config.defaultSettings['friday_to'];
    }
    if(this.config.defaultSettings&&this.config.defaultSettings.hasOwnProperty('saturday_from')){
      this.stStart = this.config.defaultSettings['saturday_from'];
    }
    if(this.config.defaultSettings&&this.config.defaultSettings.hasOwnProperty('saturday_to')){
      this.stEnd = this.config.defaultSettings['saturday_to'];
    }
    if(this.config.defaultSettings&&this.config.defaultSettings.hasOwnProperty('sunday_from')){
      this.suStart = this.config.defaultSettings['sunday_from'];
    }
    if(this.config.defaultSettings&&this.config.defaultSettings.hasOwnProperty('sunday_to')){
      this.suEnd = this.config.defaultSettings['sunday_to'];
    }
          // this.minCart=result['acf']['opt_min_cart'];
          // this.cartbtnTxt = result['acf']['opt_cartbtn_txt'];
  }
  public getItemQuantity(dishId) {
    const item = this.addedItems[dishId];
    if (item) {
      return item.quantity;
    } else {
      return;
    }
  }

  public getAddedDishes() {
    return this.addedItems;
  }
  public sortDishes(obj, field:string = 'order_position') {
    return obj.sort((a, b) => {
      let nameA = a[field]; // ignore upper and lowercase
      let nameB = b[field]; // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }


  public getDishesSum() {
    let tmpSum = 0;
    for (const dishId in this.addedItems) {
      if (this.addedItems.hasOwnProperty(dishId)) {
        console.log('dishId', dishId);
        // tmpSum += CartService.getDishById(dishId)['price'] * this.addedItems[dishId]['quantity'];
        tmpSum += this.addedItems[dishId]['price'] * this.addedItems[dishId]['quantity'];
      }
    }
    if (tmpSum == 0) {
      this.storage.remove('store_type');
    }
    if(this.giftsArr.length){

      this.giftsSum = parseInt(this.giftsArr[0]['basket_price']);
      if(tmpSum < parseInt(this.giftsArr[0]['basket_price'])){
        console.log('LITLE');
        this.giftsArrDish = [];
        this.giftsArrDish.length=0;
        this.events.publishChangeCnt(true);
        // return;
      }
      this.giftsArr.forEach((item, index) => {

        console.log('basket_price', parseInt(item['basket_price']));
        if(tmpSum >= parseInt(item['basket_price'])){
          if(index+1 <= this.giftsArr.length-1){
            // console.log('555', this.giftsArr[index+1]['basket_price']);
            this.giftsSum = parseInt(this.giftsArr[index+1]['basket_price']);
          }
          // console.log('item22', item);
          this.giftsArrDish = item['gifts_id'];
          // this.giftsArrDish.forEach( item => {
            // this.addedItems[item['value']+'_gift'] = {
            //   quantity: 1, price: '1', modifiers: Array(0)
            // }
          // });
          this.events.publishChangeCnt(true);
          console.log('GIFT is', this.giftsArrDish);
          console.log('GIFT giftsSum', this.giftsSum);
          this.tmpSumGift=this.giftsArrDish.length;
        }

      });

      // this.giftsArrDish =
    }
    console.log('tmpSum', tmpSum);
    // if(this.tmpSumGift){
    //   return tmpSum+this.tmpSumGift;
    // } else {
      return tmpSum;
    // }

  }
  async getDishesSumCart(obg:any) {
    let tmpSum = 0;
    for (const dishId in obg) {
      if (obg.hasOwnProperty(dishId)) {
        console.log('dishId', dishId);
        // tmpSum += CartService.getDishById(dishId)['price'] * this.addedItems[dishId]['quantity'];
        tmpSum += obg[dishId]['price'] * obg[dishId]['quantity'];
      }
    }
    // if (tmpSum == 0) {
    //   this.storage.remove('store_type');
    // }
    this.sum = tmpSum;
    console.log('tmpSum', tmpSum);
    return tmpSum;
  }
  public addItemModif(itemId, isAdd, quantity=1, modifiers, price){
    if (this.addedItems.hasOwnProperty(itemId)) {
      if(this.addedItems[itemId]['price']==price){
      if (isAdd) {
        this.addedItems[itemId].quantity+=quantity;
      } else {
        if(this.addedItems[itemId].quantity == 0){
          return false;
        }
        this.addedItems[itemId].quantity-=1;
        // console.log('DELETE1', this.sum );
        if(this.sum == 0){
          this.addedItems=[];
        }
        // delete this.addedItems[itemId];
      }
      } else {
        console.log('diff');
      }
    } else {
      if (isAdd) {
        console.log('LOGIC ПРОВЕРИТЬ' );
          this.addedItems[itemId] = {
            quantity: quantity,
            price: price,
            modifiers: modifiers,
          };
      } else {
        delete this.addedItems[itemId];
      }
    }
    this.sum = this.getDishesSum();
    if (this.addedItems[itemId]) {
      if(this.addedItems[itemId]['price']==price) {
        quantity = this.addedItems[itemId].quantity;
        this.events.publishSomeData({
          cart: 'added',
          itemId: itemId,
          quantity: quantity
        });
        this.events.publishSomeData({countchange: true});
      }
    }
    if(this.sum == 0){
      this.addedItems=[];
    }
  }


  public setQuantity(itemId, isAdd, count = 1, pack = 1) {
console.log('CARTSERV',this.addedItems);
    if (this.addedItems.hasOwnProperty(itemId)) {
      console.log('pack start=', pack);
      console.log('count=', count);
      console.log('this.addedItems[itemId].quantity=', this.addedItems[itemId].quantity);
      // if (isAdd) {
      //   if (this.addedItems[itemId].quantity+pack > count ) {
      //     this.api.alertMessage('Превышено количество на остатке', '');
      //   } else {
      //     this.addedItems[itemId].quantity+=pack;
      //   }
      // } else {
      //   if (this.addedItems[itemId].quantity > pack) {
      //     this.addedItems[itemId].quantity-=pack;
      //   } else {
      //     delete this.addedItems[itemId];
      //   }
      // }
      if (isAdd) {
        this.addedItems[itemId].quantity+=pack;
      } else {
        console.log('3333333',this.addedItems[itemId].quantity);
        if(this.addedItems[itemId].quantity == 0){
          return false;
        }
        this.addedItems[itemId].quantity-=pack;
        if(this.addedItems[itemId].quantity == 0){
          console.log('DDDDDDDDDD' );
        }
        console.log('DELETE1', this.sum );
        if(this.sum == 0){
          this.addedItems=[];
        }
        // delete this.addedItems[itemId];
      }
    } else {
      console.log('pack else=', pack);
      if (isAdd) {
        console.log('LOGIC ПРОВЕРИТЬ' );
        if (pack > count ) {
          this.api.alertMessage('Превышено количество на остатке', '');
        } else {
          this.addedItems[itemId] = {
            quantity: (pack) ? pack : 1,
            price: CartService.getDishById(itemId)['price'],
            modifiers: [],
          };
        }
      } else {
        delete this.addedItems[itemId];
      }
    }
    this.sum = this.getDishesSum();
    let quantity = 0;
    if (this.addedItems[itemId]) {

      quantity = this.addedItems[itemId].quantity;
      this.events.publishSomeData({
        cart: 'added',
        itemId: itemId,
        quantity: quantity
      });
      this.events.publishSomeData({countchange : true});
    }
    if(this.sum == 0){
      this.addedItems=[];
    }
    // this.events.publish('cart:added', itemId, quantity);

  }
}
