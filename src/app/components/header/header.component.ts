import { Component, Input, OnInit } from '@angular/core';
import {NavController, Platform} from '@ionic/angular';
import {Storage} from '@ionic/storage-angular';
import {ConfigService} from '../../services/config.service';
import {EventsService} from "../../services/events.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() additionalData: string;
  @Input() isMain = true;
  @Input() isMenu = false;
  @Input() isCabinet = false;
  @Input() isCart = false;
  @Input() backPath: string;
  @Input() backBtn: string = '';

  private text: any;
  private authorized = false;
  // private authorized1 = false;
  public username: any;
  public userid: any;
  public phonesite: string;

  constructor(
    public platform: Platform,
    private config: ConfigService,
    private storage: Storage,
    private event: EventsService,
    private navCtrl: NavController,
  ) {
    this.storage.get('user').then((res)=>{
      // console.log('userOBJ',res);
      if(res && res.hasOwnProperty('id')){
        // console.log("this.authorized1111",this.authorized);
        this.authorized = true;
        this.userid = res['id'];
      }
    });
    // this.event.publishLoginEv(true);
    // this.event.getLoginEv().subscribe((res)=> {
    //   this.authorized1 = res;
    //   console.log('res', res);
    // });
    this.event.getLoginId().subscribe((data)=>{
      this.authorized=data;
      console.log("getLoginId:", data);
      console.log("getLoginId:", typeof(data));
      // if(data){
      if(data===0){
        console.log('NULLLLLLL');
        this.authorized = false;
        this.userid = '';
        console.log("this.authorized",this.authorized);
      } else {
        console.log('nOOOOOOOOt');
        this.authorized = true;
        this.userid = data;
        console.log("this.authorized",this.authorized);
      }
      // } else {
      //   console.log("EEELSE");
      //   this.authorized = false;
      //   this.userid = '';
      //   console.log("this.authorized",this.authorized);
      // }
    });
    this.storage.get('appSet').then((res)=>{
      if(res){
        this.phonesite = res.hasOwnProperty('phonesite') ? res['phonesite'] : false;
      }
    });
      if (platform.is('ios')) {
        this.text = '';
      }


  }

  ngOnInit() {

  }

 public goToUrl(url){
    // console.log(url);
   this.navCtrl.navigateRoot(url);
 }

}
