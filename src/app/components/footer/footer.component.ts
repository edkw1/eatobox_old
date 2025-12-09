import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() hideCart: any;
  @Input() isCart: boolean = false;
  @Input() isLogin: boolean = false;
  @Input() isCheckout: boolean = false;
  @Output() btnClick = new EventEmitter();
  public isClearCart = false;
  constructor(
    public cart: CartService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
      this.isClearCart = Object.keys(this.cart.addedItems).length ? true : false;
  }
  addOrder() {
    this.btnClick.emit();
  }
  clearCartPage() {
    this.cart.clearCart();
    this.navCtrl.navigateRoot('/');
  }
}
