import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Storage} from '@ionic/storage-angular';
import {ApiService} from '../../services/api.service';
import {AlertController, NavController} from '@ionic/angular';
import {CartService} from '../../services/cart.service';
import {OrdersService} from '../../services/orders.service';
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @Input() datezak: string;
  @Input() name: string;
  @Input() total: string;
  @Input() prodarr: Array<object> = [];
  @Input() orderid: string;
  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();
  public userid = '';
  public isMenuOpen = false;
  constructor(
    private storage: Storage,
    private api: ApiService,
    private order: OrdersService,
    private cart: CartService,
    public alertController: AlertController,
    private navCtrl: NavController,
  ) {
    this.storage.get('user').then(user => {
      if(user){
        this.userid = user.id;
      } else {
        this.userid ='';
      }
    });
  }

  ngOnInit() {
    console.log('prodarr',typeof(this.prodarr));
  }
  /**
   * Allows the accordion state to be toggled (I.e. opened/closed)
   */
  public toggleAccordion(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  public broadcastName(orderid: string, userid: string = this.userid): void {
    if(orderid!==''){
      this.confirmOrder(orderid, userid);
    }
  //   console.log('name',number);
  //   console.log('orderid',orderid);
  //   console.log('userid',userid);
  //   console.log('addedItemsACCORD=', this.cart.addedItems);
  //   // this.change.emit(name);
  // }
  //
  // async confirmOrder(number, orderid, userid ) {
  //   const alert = await this.alertController.create({
  //     header: 'Повторить заказ №' + number+'?',
  //     message: 'Корзина предварительно будет очищена!',
  //     buttons: [
  //       {
  //         text: 'Отмена',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: (blah) => {
  //           // console.log('Confirm Cancel: blah');
  //         }
  //       }, {
  //         text: 'Ок',
  //         handler: () => {
  //           this.cart.clearCart();
  //           this.order.addToCart(number, orderid, userid).then((resp)=>
  //             {
  //               console.log('333333');
  //               if(resp.tovaris=='ok'){
  //                 console.log('RESP', resp);
  //                 return {addtocart: 'ok'};
  //                 // this.navCtrl.navigateRoot('/cart');
  //               } else {
  //                 this.api.alertMessage("Что-то пошло не так!", 'Попробуйте позже')
  //               }
  //
  //             }
  //           ).then((respon)=>{
  //             if(respon.addtocart=='ok'){
  //               this.api.spinner = true;
  //               setTimeout(() => {
  //                 this.navCtrl.navigateRoot('/cart');
  //                 this.api.spinner = false;
  //               }, 2000);
  //               //
  //               if(this.cart.addedItems){
  //                 // this.navCtrl.navigateRoot('/cart');
  //               }
  //               console.log('this.addedItems', this.cart.addedItems)
  //               console.log('this.cart.sum', this.cart.sum)
  //             }
  //             console.log('respon', respon)
  //           });
  //           // console.log('CartService.dishes', CartService.dishes)
  //           // this.navCtrl.navigateRoot('/cart');
  //         }
  //       }
  //     ]
  //   });
  //
  //   await alert.present();
  }
  async confirmOrder(orderid, userid ) {
    const alert = await this.alertController.create({
      header: 'Повторить заказ №' + orderid+'?',
      message: 'Корзина предварительно будет очищена!',
      buttons: [
        {
          text: 'Отмена',
          role: 'cancel',
          // cssClass: 'secondary',
          handler: (blah) => {
            // console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ок',
          handler: () => {
            this.cart.clearCart();
            this.order.addToCart(orderid, userid).then((resp)=>
              {
                console.log('333333', resp);
            //     if(resp.tovaris=='ok'){
            //       console.log('RESP', resp);
            //       return {addtocart: 'ok'};
            //       // this.navCtrl.navigateRoot('/cart');
            //     } else {
            //       this.api.alertMessage("Что-то пошло не так!", 'Попробуйте позже')
            //     }
            //
            //   }
            // ).then((respon)=>{
            //   if(respon.addtocart=='ok'){
            //     this.api.spinner = true;
            //     setTimeout(() => {
            //       this.navCtrl.navigateRoot('/cart');
            //       this.api.spinner = false;
            //     }, 2000);
            //     //
            //     if(this.cart.addedItems){
            //       // this.navCtrl.navigateRoot('/cart');
            //     }
            //     console.log('this.addedItems', this.cart.addedItems)
            //     console.log('this.cart.sum', this.cart.sum)
            //   }
            //   console.log('respon', respon)
            });
          }
        }
      ]
    });

    await alert.present();
  }
}
