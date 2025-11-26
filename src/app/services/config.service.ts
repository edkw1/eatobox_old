import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage-angular';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public defaultSettings:{ [k: string]: any } = {};
  public noimgProd:string;
  public is_iiko:false;
  public gifts: Array<object> = [];
  public optVersionAndroid:string = '1.2';
  public optVersionIos:string = '1.2';
  public adminTel: '79399997777';
  constructor(
    private api: ApiService,
    public http: HttpClient,
    private storage: Storage,
  ) {
    this.defaultSettingsGet();
  }
  defaultSettingsGet() {
    return new Promise((resolve) => {
      this.api.getApi('settings',{}).then(result => {
        console.log('this.result', result);
        if(result.hasOwnProperty('data')){
          this.defaultSettings = {
            'phonesite' : result['data']['company_phone'],
            'noimgProd' : result['data']['noimg'] ? result['data']['noimg'] : 'https://oxbox.ru/noimg.jpg',
            'optVersion' : result['data']['andoroid_version'],
            'optVersionios' : result['data']['ios_version'],
            'company_address': result['data']['company_address'],
            'social_vk': result['data']['social_vk'],
            'social_inst': result['data']['social_inst'],
            'company_inn': result['data']['company_inn'],
            'company_ogrn': result['data']['company_inn'],
            'company_phone': result['data']['company_phone'],
            'company_title': result['data']['company_title'],
            'support_email': result['data']['support_email'],
            'is_iiko': result['data']['is_iiko'],
            'is_bonus': result['data']['is_iiko'],
            'copyright': result['data']['copyright'],
            'delivery_price': result['data']['delivery_price'],
            'order_price_for_free_delivery': result['data']['order_price_for_free_delivery'],
            'max_bonuses': result['data']['max_bonuses'],
            'direct_api_key': result['data']['direct_api_key'],
            'friday_from': result['data']['friday_from'].slice(0, -3),
            'friday_to': result['data']['friday_to'].slice(0, -3),
            'monday_from': result['data']['monday_from'].slice(0, -3),
            'monday_to': result['data']['monday_to'].slice(0, -3),
            'saturday_from': result['data']['saturday_from'].slice(0, -3),
            'saturday_to': result['data']['saturday_to'].slice(0, -3),
            'sunday_from': result['data']['sunday_from'].slice(0, -3),
            'sunday_to': result['data']['sunday_to'].slice(0, -3),
            'thursday_from': result['data']['thursday_from'].slice(0, -3),
            'thursday_to': result['data']['thursday_to'].slice(0, -3),
            'tuesday_from': result['data']['tuesday_from'].slice(0, -3),
            'tuesday_to': result['data']['tuesday_to'].slice(0, -3),
            'wednesday_from': result['data']['wednesday_from'].slice(0, -3),
            'wednesday_to': result['data']['wednesday_to'].slice(0, -3),
            'mincart': 0
          };
          this.is_iiko = this.defaultSettings['is_iiko'];
          // if(!this.is_iiko){
          //   this.api.getApi('gifts',{}).then(resp =>{
          //     if(resp.hasOwnProperty('data')&& resp['data'].length){
          //       this.gifts = resp['data'];
          //       this.gifts = this.gifts.sort((a, b) => {
          //         let nameA = parseInt(a['basket_price']); // ignore upper and lowercase
          //         let nameB = parseInt(b['basket_price']); // ignore upper and lowercase
          //         if (nameA < nameB) {
          //           return -1;
          //         }
          //         if (nameA > nameB) {
          //           return 1;
          //         }
          //         return 0;
          //       });
          //     }
              // console.log('GIFTS CONFIG',this.gifts);
            // });
          // }
          console.log('this.defaultSettings',this.defaultSettings);
          this.storage.set('appSet', this.defaultSettings).then((res)=>{
            // console.log(res);
          });
        }



      });

    });
  }


}
