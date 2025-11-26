import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage-angular';
import {ApiService} from './api.service';
import {CartService} from "./cart.service";
import {NavController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public userid:string ='';
  public client_phone:string ='';
  public oldOrders:Array<any> = [];
  public repeatOrder:any = {};
  constructor(
    private api: ApiService,
    private cart: CartService,
    private storage: Storage,
    private navCtrl: NavController,
  ) {
    this.storage.get('user').then(user => {
      if(user){
        this.userid = user.id;
        console.log(' this.useridORDERS', this.userid);
        this.client_phone = user.client_phone;
        this.getAllOrders(this.userid);
      } else {
        this.userid ='';
        this.client_phone = '';
      }
    });
  }

  public getAllOrders(userid){

    console.log('clientPhone', this.userid);
    this.api.getApi('orders',{'client_id':userid}).then((res) => {
      if(res.hasOwnProperty('data') && res['data'] ){
        this.oldOrders = [];
        this.oldOrders = res['data'];
      }
      console.log('this.oldOrders', this.oldOrders);
    });
  }
  public getAllOrdersReturn(userid){
    // let TempoldOrders:Array<any>=[];
    console.log('clientPhone', this.userid);
    console.log('typeof clientPhone', typeof(this.userid));
     this.api.getApi('orders',{'client_id':userid}).then((res) => {
      console.log('res', res);
      if(res.hasOwnProperty('data') && res['data'] ){
        return res['data'];
      } else {
        return [];
      }
    });
    // console.log('TempoldOrders', TempoldOrders);
    // return TempoldOrders;
  }
  async addToCart(orderid, userid){
    let response:string;
    console.log('orderid=', orderid);
    console.log('userid=', userid);
    return this.api.getApi('orders',{'id':orderid}).then((res)=>{
console.log('repeat!!!!!', res);
      if (res.hasOwnProperty('data')&&res['data'].length) {

        this.repeatOrder = {};

        let cntalert=true;
        res['data'][0]['products'].forEach((val) => {
          this.api.getApi('products',{'id':val.id}).then((respprod)=>{
            console.log('respprod00000',respprod);
            if(cntalert){
              if(respprod.hasOwnProperty('data')){
                if(respprod['data'][0]['is_view_in_site']){
                  // let categ: any = respprod;
                  if(!val.is_gift && val.modifiers.length==1){
                    this.cart.setQuantity(val.id, true, val.count);
                  }
                  if(!val.is_gift && val.modifiers.length>1){
                    let tempModif = val.modifiers.filter((item) => !item.order_id);
                    // console.log(tempModif);
console.log('tempModif',tempModif);
                    this.cart.addItemModif(val.id+'/'+tempModif.reduce(function(sum, current) {
                      return sum + (current.id).toString();
                    },''), true, parseInt(val.count), tempModif, val.price);
                    console.log('IMAGE',val.image);
                    console.log('tempModif2',tempModif);
                    CartService.dishes.push({
                      id: val.id+'/'+tempModif.reduce(function(sum, current) {
                        return sum + (current.id).toString();},''),
                      quantity : val.count,
                      modifiers : tempModif,
                      price : val.price,
                      image : val.image ? this.api.urlApi+val.image : '',
                      title : val.title
                    });
                    this.api.spinner = true;
                    setTimeout(() => {
                      this.navCtrl.navigateRoot('/cart');
                      this.api.spinner = false;
                    }, 2000);

                  }
                  //формирование корзины
                  // проверить модификаторы массив и закинуть в корзину нужные модификаторы + закинуть id товара/id vjlbabrfnjhjd d CARTSERVISE dishes
                  // this.repeatOrder[val.product_id] = {
                  //   "quantity": val.quantity,
                  //   "cat": categ.categories[0]['id'],
                  //   "price": val.price
                  // };
                  console.log('respprod', respprod);
                } else {
                  cntalert=false;
                  this.api.alertMessage("Извините, это невозможно!", 'Некоторых товары отсутсвуют');
                  this.repeatOrder = {};
                  return false;
                }
              } else {
                cntalert=false;
                console.log('cntalert222', cntalert);
                console.log('нет ID');
                this.api.alertMessage("Извините, это невозможно!", 'Некоторых товары отсутсвуют');
                this.repeatOrder = {};
                return false;
              }
            }
          }).catch(err => {
            console.log('EEE',err);
          });
        });
        if(cntalert){
          // перекинуть в корзину
          //
          //     // this.cart.clearCart();
          //     this.cart.addedItems = {};
          //     this.cart.addedItems = this.repeatOrder;
          //     this.cart.getDishesSumCart(this.repeatOrder).then((resp)=>{
          //         console.log('resp', resp);
          //         console.log('this.cart.sum', this.cart.sum);
          //       }
          //     );
          //     // this.cart.getDishesSum();
          //     console.log('this.repeatOrder', this.repeatOrder);
          //     console.log('this.cart.sum', this.cart.sum);
          //     console.log('this.cart.addedItems', this.cart.addedItems);
          //     // console.log('this.cart.getDishesSum()', this.cart.getDishesSum());
          //     // console.log('this.cart.getDishesSumCart(this.repeatOrder)', this.cart.getDishesSumCart(this.repeatOrder));
          //     return {tovaris: 'ok'};
          //   } else {
          //     return {tovaris: 'no'};
        }

      } else {
        this.api.alertMessage("Извините, это невозможно!", 'На данный момент некоторых товары отсутсвуют');
      }
    });
    // // this.repeatOrder.push
    console.log('addedItems=', this.cart.addedItems);

  };
}
