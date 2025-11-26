import {Component, ElementRef, ViewChild} from '@angular/core';
import {ApiService} from "../services/api.service";
import {AlertController, IonContent, LoadingController, NavController} from '@ionic/angular';
import {Storage} from '@ionic/storage-angular';
import {Platform} from '@ionic/angular';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
import {CartService} from '../services/cart.service';
import {EventsService} from "../services/events.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonContent, { static: false }) content: IonContent;
  slides: any = [];
  allProd: any = [];
  noimg = '';
  public arrEl: Array<any> = [];
  public activeMenu: string = '15';
  public iosVers: string = '2.0';
  public androidVers: string = '2.0';
  public android_applink: string = '';
  public ios_applink: string = '';
  public selectedIndex;
  public inputValue = '';
  public searchArr = [];
  public searchText: string;
  public categories: Array<object> = [];
  public catListParent: Array<object> = [];
  public catListParentTemp: Array<object> = [];
  private skeletonArr = Array(4).fill(1);
  private slideOptions: object = {
    slidesPerView: 1.2,
    spaceBetween: 10,
    autoHeight: true,
    preloadImages: true,
    loop: true,
    autoplay: {
      delay: 2000,
    }
  };
  constructor(
    private api: ApiService,
    private storage: Storage,
    private appVersion: AppVersion,
    public platform: Platform,
    public alertController: AlertController,
    private cart: CartService,
    private events: EventsService,
  ) {

    this.loadContentPage();
    this.getCategory();
    this.events.getObservable().subscribe((data) => {
      // console.log("Data received:", data);
      // if(data.cart == 'added'){
      //   this.check(data.itemId)
      // //
      // }
    });
  }
  ngOnInit() {
    console.log('!!!!!!!! ngOnInit');
  }
//   ionViewWillEnter(){
//     console.log('!!!!!!!! WillEnter');
// }
  ionViewDidEnter (){
    this.checkVersion();
  }
  // ionViewWillLeave  (){
  //   console.log('!!!!!!!! WillLeave');
  // }
  // ionViewDidLeave   (){
  //   console.log('!!!!!!!! DidLeave');
  // }
  // ngOnDestroy    (){
  //   console.log('!!!!!!!! ngOnDestroy ');
  // }
  check(id){
    if(this.allProd.includes(id)){
      return true;
    }
  }
  eventCaught(event : string, sec : boolean = false) {
    this.selectedIndex = event;
    if(sec){
      let alldish = this.cart.getAddedDishes();
      let  tempAllProd = Object.keys(alldish);
      tempAllProd.forEach(item => {
        let isSlash = item.indexOf('/');
        if(isSlash>0){
          let id = item.slice(0,isSlash);
          this.allProd.push(id);
        } else {
          this.allProd.push(item);
        }
      });
      console.log('CHECK', this.allProd);
    }

  }
  getSearchProduct() {
    if (this.inputValue.length < 3) {
      this.api.alertMessage('Введите не менее трех символов', '');
    } else {
      let arr1 = CartService.dishes;
      let valinp = this.inputValue.toLowerCase();
      let res = arr1.filter(item => item.title.toLowerCase().indexOf(valinp)!==-1);
      if(res.length){
        this.searchArr = res;
      } else {
        this.api.alertMessage('Ничего не найдено', 'Измените параметры поиска');
      }
    }
  }
  clearSearch() {
    this.searchArr = [];
    this.searchText = '';
  }
  goProduct(id) {
    console.log('SCROLL');
    let titleELem = document.getElementById('prod_'+id);
    this.content.scrollToPoint(0, titleELem.offsetTop, 1000);
  }
  getCategory(){
    let dataorder =
      {
        "limit": 0
      };
    this.api.getApi("productCategories", dataorder, ).then((res) => {
      console.log('res', res);
      if(res.hasOwnProperty('data')){
        this.catListParentTemp = res['data'];
        this.catListParentTemp = this.catListParentTemp.sort((a, b) => {
          let nameA = a['order_position']; // ignore upper and lowercase
          let nameB = b['order_position']; // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        CartService.dishes = [];
        let test = [];
        this.catListParentTemp.forEach(valuecat => {
          if(valuecat['products_count']) {
            return this.api.getApi('products', {'category_id': valuecat['id'], 'limit': 0}).then((result) => {
              if (result.hasOwnProperty('data')) {
                valuecat['products'] = result['data'];
                // console.log('TYPE',typeof(valuecat['products']));
                // console.log('TYPEresult',typeof(result['data']));
                // console.log('valuecat',valuecat['products'].length);
                if (result['data'].length) {
                  this.arrEl.push(valuecat['id']);
                  result['data'].forEach((val) => {
                    CartService.dishes.push(val);
                    // dishestemp.push(val);
                    if(val.modifierCategories.length){
                      test.push(val.id)
                    }
                  });
                }
              }

            });
          }
        });



        console.log('ЕУЫЕ',test);
      } else {
        this.api.alertMessage('Искренне сожалеем,', 'произошла ошибка. Попробуйте чуть позже.');
      }
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(this.catListParentTemp), 1000);
      });
    }).then((resp)=>{
      console.log('resp', resp);
      this.catListParentTemp.map(item => {
        if(item['products_count']){
          this.catListParent.push(item);
        }
      });
      CartService.dishes = CartService.dishes.sort((a, b) => {
        let nameA = a['order_position']; // ignore upper and lowercase
        let nameB = b['order_position']; // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      console.log('this.catListParent',this.catListParent);
      console.log('CARTSERV', CartService.dishes);
    });
  }
  functionToTriggerOnScroll() {
    console.log('functionToTriggerOnScroll');
    if(this.arrEl.length) {
      this.arrEl.forEach((value) => {
        if (this.isElementInViewport(document.getElementById(value))) {
          this.activeMenu = value;
        }
      });
      // if (this.isElementInViewport(document.getElementById('ae138589-a6d5-431c-8b94-562fbb6c3921'))) {
      //     console.log('4454454');
      //   }
      //   if (this.isElementInViewport(document.getElementById('6f6d1e08-1abe-4cd7-91a9-8ce42795f97a'))) {
      //     console.log('4454454');
      //   }
    }
  }
  isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    // console.log(el);
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight-100 || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  checkVersion() {
    console.log('ZAPROS LOADIMG');
    this.storage.get('appSet').then((res)=>{
      if(res){
        this.androidVers = res['optVersion'];
        this.android_applink = res['android_app'];
        this.ios_applink = res['ios_app'];
        this.iosVers = res['optVersionios'];
        this.noimg = res['noimgProd'];
      }
    }).then(()=>{
      // if (this.iosVers) {
      if (this.platform.is('ios')) {
        this.appVersion.getVersionNumber().then(value => {
          if (value !== this.iosVers) {
            this.wrongVersion(this.ios_applink);
          }
        }).catch(err => {
        });
      } else {
        this.appVersion.getVersionNumber().then(value => {
          if (value !== this.androidVers) {
            this.wrongVersion(this.android_applink);
          }
        }).catch(err => {
          console.log(err);
        });
      }
      console.log(' this.noimg', this.noimg);
      // }
    });
  }
  loadContentPage() {
    return new Promise((resolve) => {
      this.api.getApi('slides',{}).then(result => {
        console.log(result);
        // resolve();
        if (result.hasOwnProperty('data')){
          this.slides = result['data'];
          console.log(this.slides);
          let newarr = this.slides.map(function(elem) {
            console.log(elem['href']);

            if(elem.hasOwnProperty('href')&&elem['href']){
              console.log(typeof(elem['href']));
              let str = elem['href'];
              if(str.indexOf('promotion')){
                elem['href'] = str.replace("/promotion/", "");
              }
            }
            return elem;
          });
          console.log(newarr);
        }
      });

    });
  }
  public scrollToLabel(label) {
    if(label){
      let titleELe = document.getElementById(label);
      this.content.scrollToPoint(0, titleELe.offsetTop, 1000);
    }

  }
  async wrongVersion(link) {
    if(link){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'ОБНОВИТЕ ПРИЛОЖЕНИЕ',
        message: 'У Вас не актуальная версия<br><strong>Приложение будет работать не корректно!</strong><br>Обновите версию приложения на своем устройстве',
        buttons: [
          {
            text: 'Обновить',
            cssClass: 'link_reg',
            handler: () => {
              window.location.href = link;
            }
          }
        ]
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'ОБНОВИТЕ ПРИЛОЖЕНИЕ',
        message: 'У Вас не актуальная версия<br><strong>Приложение будет работать не корректно!</strong><br>Обновите версию приложения на своем устройстве',
        buttons: ['OK']
      });
      await alert.present();

    }

  }
}
