import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cabmenu',
  templateUrl: './cabmenu.component.html',
  styleUrls: ['./cabmenu.component.scss'],
})
export class CabmenuComponent implements OnInit {
  @Input() title1: string;
  @Input() title2: string;
  @Input() title3: string;
  public name:string = 'Данные';
  constructor(
    // private api: ApiService,
    private cart: CartService,
  ) { }

  ngOnInit() {}
  public doLogout() {
    this.cart.doLogout();
  }
  public changeTab(name){
    this.name = name;
    this.cart.nameTabPerson = name;
  }
}
