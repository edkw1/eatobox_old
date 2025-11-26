import { Component } from '@angular/core';
import {
  Platform,
  ToastController,
  MenuController,
  NavController,
  AlertController,
  LoadingController,
} from '@ionic/angular';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import {StatusBar} from "@awesome-cordova-plugins/status-bar/ngx";
import {ApiService} from './services/api.service';
import {CartService} from './services/cart.service';
import {ConfigService} from './services/config.service';
import { Storage } from '@ionic/storage-angular';
import {EventsService} from "./services/events.service";
import OneSignal from "onesignal-cordova-plugin";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private authorized = false;
  private pagesArr:Array<any> = [];
  public menuPhone ='';
  public userid ='';
  public social_vk ='';
  public social_inst ='';
  constructor(
    private platform: Platform,
    private alertController: AlertController,
    private navCtrl: NavController,
    private menu: MenuController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public loadingController: LoadingController,
    private api: ApiService,
    private cart: CartService,
    public config: ConfigService,
    private event: EventsService,
    private storage: Storage
  ) {
    this.menu.swipeGesture(false);
    this.storage.get('user').then((res)=>{
      if(res && res.hasOwnProperty('id')){
        this.authorized = true;
        this.userid = res['id'];
      }
    });
    this.event.getLoginId().subscribe((data)=>{
      this.authorized=data;
      if(data===0){
        this.authorized = false;
      } else {
        this.authorized = true;
      }
    });
  }
  async ngOnInit() {
    this.initializeApp();

    this.getPages();
    this.storage.get('appSet').then(resp => {
      // console.log('nameGET', resp);
      if(resp.hasOwnProperty('phonesite')) {
        this.menuPhone = resp['phonesite'];
      }
      if(resp.hasOwnProperty('social_vk')) {
        this.social_vk = resp['social_vk'];
      }
      if(resp.hasOwnProperty('social_inst')){
        this.social_inst = resp['social_inst'];
        // this.menuPhoneDisplay = ApiService.createPhoneNumber(this.menuPhone)
      }
    });
  }
  initializeApp() {
    this.platform.ready().then(async () => {
      this.splashScreen.hide();
      this.statusBar.styleLightContent();
      this.OneSignalInit();
    });
  }
  getPages() {
    return new Promise((resolve) => {
      this.api.getApi('infoPages',{}).then(result => {
        if(result.hasOwnProperty('data')){
          console.log(result['data']);
          let ids = ["main", "checkout"];
          let idsMap = ids.reduce(function(map, article) {
            map[article] = true;
            return map;
          }, {});
          this.pagesArr = result['data'].filter(function(el) {
            return !idsMap[el.article];
          });
        }
        else {
          this.pagesArr = [];
        }
      });

    });
  }
  OneSignalInit(stor = this.storage, api = this.api): void {
    // Uncomment to set OneSignal device logging to VERBOSE
    // OneSignal.setLogLevel(6, 0);
    // NOTE: Update the setAppId value below with your OneSignal AppId.
    OneSignal.setAppId("7bccee8e-2fc5-4ea3-9ec5-32575f7fb300");
    OneSignal.setNotificationOpenedHandler(function(jsonData) {
      let msg = jsonData.notification.body ? '<p>'+jsonData.notification.body+'</p>' : '';
      let title = jsonData.notification.title;
      // let additionalData = jsonData.payload.additionalData;
      console.log('title=',title);
      console.log('msg=',msg);
      let img = jsonData.notification.rawPayload['bicon'] ? '<div class="img_alert"><img src="'+jsonData.notification.rawPayload['bicon']+'"></div>': '';
      api.alertMessage(title, msg+img);
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    });
    // iOS - Prompts the user for notification permissions.
    //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 6) to better communicate to your users what notifications they will get.
    OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
      console.log("User accepted notifications: " + accepted);
    });
  }
  private doLogout() {
    this.cart.doLogout();
  }
}
