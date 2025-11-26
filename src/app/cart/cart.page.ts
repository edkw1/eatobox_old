import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {CartService} from '../services/cart.service';
import {AlertController, NavController} from '@ionic/angular';
import {EventsService} from '../services/events.service';
import {Storage} from '@ionic/storage-angular';
import {DatePipe} from '@angular/common';
import {ConfigService} from "../services/config.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  private isLoading = false;
  private authorized = false;
  private sid;
  private noimgProd: string;
  dishes: Array<object> = [];
  // public giftsCart: Array<object> = [];
  public giftsArr: Array<object> = [];
  public giftsArrDish: Array<object> = [];
  dishesSum = 0;
  public currDay = '';
  public addedDishes:any;
  public currH = '';
  public shopOn = true;
  public shopOnInfo: string = '';
  public minCart:number = 0;
  public deliverySum:number = 0;
  public deliveryPrice:number = 0;
  public giftPrice:number = 0;
  public deliveryCount:number = 0;
  constructor(
    private api: ApiService,
    private cart: CartService,
    private config: ConfigService,
    // private order: OrdersService,
    public alertController: AlertController,
    private navCtrl: NavController,
    public events: EventsService,
    private storage: Storage,
    public datepipe: DatePipe
  ) {
    // this.giftsCart = this.config.gifts;
    this.giftsArr = this.cart.giftsArr;

    this.giftsArrDish = this.cart.giftsArrDish;
    this.events.getChangeCnt().subscribe((data) => {
      console.log("getChangeCnt", data);
      if(data){
        this.giftsArrDish = this.cart.giftsArrDish;
      }
      // if(data.cart == 'added'){
      //   this.check(data.itemId)
      // //
      // }
    });
    console.log('giftsArrDishCART',this.giftsArrDish);

    console.log('giftsArr',this.giftsArr);

    this.minCart = this.config.defaultSettings.hasOwnProperty('mincart') ? parseInt(this.config.defaultSettings.mincart) : 0;
    this.deliverySum = this.config.defaultSettings.hasOwnProperty('order_price_for_free_delivery') ? parseInt(this.config.defaultSettings.order_price_for_free_delivery) : 0;
    this.deliveryPrice = this.config.defaultSettings.hasOwnProperty('delivery_price') ? parseInt(this.config.defaultSettings.delivery_price) : 0;
    this.cart.workTime();
    this.storage.get('user').then((res)=>{
      // console.log('userOBJ',res);
      if(res && res.hasOwnProperty('id')){
        // console.log("this.authorized1111",this.authorized);
        this.authorized = true;
        // this.userid = res['id'];
      }
    });
    this.events.getLoginId().subscribe((data)=>{
      console.log("Cart LoginId:", data);
      if(data){
        this.authorized = true;
        // this.storage.set('userid', data);
      }
    });
  }

  ngOnInit() {

    this.currDay =this.datepipe.transform((new Date), 'EEEE');
    this.currH =this.datepipe.transform((new Date), 'HH:mm').replace(/[^0-9]/g, '');
    // str = str.replace(/[^0-9]/g, '');

    switch (this.currDay) {
      case 'Monday':
        if((this.cart.moStart.replace(/[^0-9]/g, '') <= this.currH) && (this.cart.moEnd.replace(/[^0-9]/g, '') > this.currH)){
          this.shopOn = true;
        } else {
          this.shopOn = false;
          this.shopOnInfo = 'Откроемся в '+ this.cart.tuStart;
        }
        break;
      case 'Tuesday':
        if((this.cart.tuStart.replace(/[^0-9]/g, '') <= this.currH) && (this.cart.tuEnd.replace(/[^0-9]/g, '') > this.currH)){
          this.shopOn = true;
        } else {
          this.shopOn = false;
          this.shopOnInfo = 'Откроемся в '+ this.cart.weStart+':00';
        }
        break;
      case 'Wednesday':
        if((this.cart.weStart.replace(/[^0-9]/g, '') <= this.currH) && (this.cart.weEnd.replace(/[^0-9]/g, '') > this.currH)){
          this.shopOn = true;
        } else {
          this.shopOn = false;
          this.shopOnInfo = 'Откроемся в '+ this.cart.thStart+':00';
        }
        break;
      case 'Thursday':
        if((this.cart.thStart.replace(/[^0-9]/g, '') <= this.currH) && (this.cart.thEnd.replace(/[^0-9]/g, '') > this.currH)){
          this.shopOn = true;
        } else {
          this.shopOn = false;
          this.shopOnInfo = 'Откроемся в '+ this.cart.frStart+':00';
        }
        break;
      case 'Friday':
        if((this.cart.frStart.replace(/[^0-9]/g, '') <= this.currH) && (this.cart.frEnd.replace(/[^0-9]/g, '') > this.currH)){
          this.shopOn = true;
        } else {
          this.shopOn = false;
          this.shopOnInfo = 'Откроемся в '+ this.cart.stStart+':00';
        }
        break;
      case 'Saturday':
        if((this.cart.stStart.replace(/[^0-9]/g, '') <= this.currH) && (this.cart.stEnd.replace(/[^0-9]/g, '') > this.currH)){
          this.shopOn = true;
        } else {
          this.shopOn = false;
          this.shopOnInfo = 'Откроемся в '+ this.cart.suStart+':00';
        }
        break;
      case 'Sunday':
        if((this.cart.suStart.replace(/[^0-9]/g, '') <= this.currH) && (this.cart.suEnd.replace(/[^0-9]/g, '') > this.currH)){
          this.shopOn = true;
        } else {
          this.shopOn = false;
          this.shopOnInfo = 'Откроемся в '+ this.cart.moStart+':00';
        }
        break;
      default:
        this.shopOn = true;
    }
    this.loadNoImg();
    this.addedDishes = this.cart.getAddedDishes();
    this.dishesSum = this.cart.getDishesSum();
    this.cart.sum = this.dishesSum;
    // if(this.giftsCart.length){
    //   this.giftsCart.forEach(val => {
    //     console.log(val);
    //   });
    // }


    console.log('this.dishesSumCART', this.dishesSum);
    console.log("ADDEDDISHES",this.addedDishes);
    for (const dishId in this.addedDishes) {
      if (this.addedDishes.hasOwnProperty(dishId)) {
        //LOGIC for added products whith modificators
        let isSlash = dishId.indexOf('/');
        // if(isSlash>0){
        //   console.log('///////');
        //   let id = dishId.slice(0,isSlash);
        //   this.dishes.push(CartService.getDishById(id));
        //   console.log(this.dishes['id']);
        // } else {
        //   console.log('NNNNNNN///////');
          this.dishes.push(CartService.getDishById(dishId));
        // }


      }
    }
    console.log('this.dishes', this.dishes);
  }

  clearCartPage() {
    this.cart.clearCart();
    this.navCtrl.navigateRoot('/');
    this.isLoading = false;
    // this.events.publishSomeData({countchange : false});
  }
  loadNoImg() {
    this.storage.get('appSet').then((res)=>{
      if(res){
        this.noimgProd = res['noimgProd'];
        console.log('this.noimg',this.noimgProd);
      }

    })
  }

}
