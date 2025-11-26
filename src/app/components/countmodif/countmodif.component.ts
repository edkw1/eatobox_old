import { Component, Input, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import {CartService} from '../../services/cart.service';
import {EventsService} from '../../services/events.service';
import {AnimationController} from "@ionic/angular";

@Component({
  selector: 'app-countmodif',
  templateUrl: './countmodif.component.html',
  styleUrls: ['./countmodif.component.scss'],
})
export class CountmodifComponent implements OnInit {

  @ViewChild('PreiceText', { read: ElementRef }) PreiceText: ElementRef;
  @ViewChild('loadingIcon', { read: ElementRef }) loadingIcon: ElementRef;
  @Input() id:any;
  @Input() count:number;
  @Input() price:string = '';
  @Output() modifSave = new EventEmitter();
  public isClearCart:boolean = false;
  public isQuantity = false;
  public quantity = 0;
  public storeType = '';
  public totalproduct = {};
  constructor(
    private cart: CartService,
    private events: EventsService,
    private animationCtrl: AnimationController
  ) {
    // this.events.getcartClear().subscribe((data) => {
    //   console.log("EVENTCART", data);
    //   this.quantity == 0;
    // });
    // // console.log("START");
    // this.events.getObservable().subscribe((data) => {
    //   // console.log("Data received:", data);
    //   if(data.cart == 'added'){
    //     this.isQuantity = true;
    //     // console.log('2222',  this.id);
    //
    //     if (data.itemId === this.id) {
    //       this.quantity = data.quantity;
    //     }
    //
    //   }
    // });
  }

  ngOnInit() {

    this.quantity = this.cart.getItemQuantity(this.id) || 1;
    // this.isClearCart = Object.keys(this.cart.addedItems).length ? true : false;
    // console.log('this.idCOUNTER', this.id);
    // console.log('this.cart.getItemQuantity(this.id)', this.cart.getItemQuantity(this.id));
    // this.storage.get('store_type').then(result => {
    //   this.storeType = result;
    //   console.log('storeType', this.storeType);
    // });
    this.totalproduct = this.cart.getAddedDishes();
  }
  modifAction(count:number) {
    this.modifSave.emit(count);
  }
  // public setQuantity(event, isAdd, btn:boolean = false) {
  //     console.log('this.count', this.count);
  //     console.log('isAdd', isAdd);
  // }

  public setQuantity(itemId, isAdd, count = 1) {
    // console.log('CARTSERV',this.addedItems);
    if (isAdd) {
      this.quantity+=count;
      console.log('COUNTNEW ПРОВЕРИТЬ' );
      // this.addedItems[itemId] = {
      //   quantity: 1,
      //   price: CartService.getDishById(itemId)['price'],
      //   cat: CartService.getDishById(itemId)['cat'],
      // };
    } else {
      if(this.quantity){
        this.quantity-=count;
      }

      // delete this.addedItems[itemId];
    }
  }


}
