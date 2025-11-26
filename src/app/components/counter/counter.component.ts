import { Component, Input, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import {CartService} from '../../services/cart.service';
import {EventsService} from '../../services/events.service';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  @ViewChild('PreiceText', { read: ElementRef }) PreiceText: ElementRef;
  @ViewChild('loadingIcon', { read: ElementRef }) loadingIcon: ElementRef;
  @Input() id:any;
  @Input() count:number;
  @Input() btn:boolean = false;
  @Input() link:boolean = false;
  @Input() modifier:boolean = false;
  @Input() price:string = '';
  @Output() btnClick = new EventEmitter();
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
    this.events.getcartClear().subscribe((data) => {
      console.log("EVENTCART", data);
      this.quantity == 0;
    });
    // console.log("START");
    this.events.getObservable().subscribe((data) => {
      // console.log("Data received:", data);
      if(data.cart == 'added'){
        this.isQuantity = true;
        // console.log('2222',  this.id);

        if (data.itemId === this.id) {
          this.quantity = data.quantity;
        }

      }
    });
    // document.querySelector('.btncounter').addEventListener('click', () => {
    //   animation.play();
    // });
  }

  ngOnInit() {

    this.quantity = this.cart.getItemQuantity(this.id) || 0;
    // this.isClearCart = Object.keys(this.cart.addedItems).length ? true : false;
    // console.log('this.idCOUNTER', this.id);
    // console.log('this.cart.getItemQuantity(this.id)', this.cart.getItemQuantity(this.id));
    // this.storage.get('store_type').then(result => {
    //   this.storeType = result;
    //   console.log('storeType', this.storeType);
    // });
    this.totalproduct = this.cart.getAddedDishes();
  }
  btnAction() {
    this.btnClick.emit();
  }

  animationAdd(elem1, elem2){
    elem1.classList.remove('loadelem');
    elem2.classList.add('loadelem');
  }
  setQuantity(event, isAdd, btn:boolean = false) {
    if(this.modifier){
      this.cart.setQuantity(this.id, isAdd, this.count);
      console.log('this.count', this.count);
      console.log('isAdd', isAdd);
      console.log('MODIFIER');
      // this.cart.setQuantity(this.id, isAdd, this.count);
    } else {
    if(btn){
      this.PreiceText.nativeElement.classList.add('loadelem');
      this.loadingIcon.nativeElement.classList.remove('loadelem');
      // const PriceAnimation = this.animationCtrl.create('price-animation')
      //   .addElement(this.PreiceText.nativeElement)
      //   .duration(500)
      //   .keyframes([
      //     { offset: 0, transform: 'scale(1)', opacity: 1 },
      //     { offset: 0.5, transform: 'scale(0)', opacity: 0 },
      //     { offset: 1, transform: 'scale(1)', opacity: 1 }
      //   ]);
      const LoadingAnimation = this.animationCtrl.create('loading-animation')
        .addElement(this.loadingIcon.nativeElement)
        .duration(500)
        .keyframes([
          { offset: 0, opacity: 0 },
          { offset: 0.7, opacity: 1 },
          { offset: 1, opacity: 1 },
          // { offset: 1, transform: 'scale(0)', opacity: 0 }
        ]);
      // PriceAnimation.play();
      LoadingAnimation.play();
      setTimeout(() =>this.animationAdd(this.PreiceText.nativeElement, this.loadingIcon.nativeElement), 500);
      // async () => {
      //   await PriceAnimation.play();
      //   await LoadingAnimation.play();
      // };
    }
    // console.log('totalproduct base', Object.keys(this.totalproduct).length);
    // console.log('this.scan', this.scan);
    // if (Object.keys(this.totalproduct).length == 0) {
    // this.storage.remove('store_type');
    // this.cart.setQuantity(this.id, isAdd, this.count);
    // this.storage.set('store_type', this.scan);
    // console.log('this.scan22', this.scan);
    // } else {
    console.log('this.count', this.count);
    console.log('isAdd', isAdd);
    this.cart.setQuantity(this.id, isAdd, this.count);
    }
    // }
    // console.log('totalproduct end', Object.keys(this.totalproduct).length);
  }


}
