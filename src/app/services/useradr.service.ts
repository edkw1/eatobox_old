import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Storage} from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class UseradrService {
  public userid:string ='';
  public arrAdres:Array<any> = [];
  constructor(
    private api: ApiService,
    private storage: Storage
  ) {
    this.storage.get('user').then(user => {
      if(user!==''){
        this.userid = user.id;
        // this.getCustomersAll().then((ret)=>{});
        this.getCustomerAddreses(this.userid).then(res=>{
          if(res && res.length){
            this.arrAdres = res;
          }
        });

      } else {
        this.userid ='';
      }
    });
  }

  // async getCustomersAll(){
  //
  //   await this.api.getApi('addresses',{'limit': 0}).then((res) => {
  //     console.log('---resClients---', res);
  //   });
  // }
  getCustomerAddreses(id){
    return this.api.getApi('addresses',{'client_id':id}).then((res) => {
      console.log('---res---', res);
      if(res.hasOwnProperty('data')&& res['data'].length){
        return res['data'];
        console.log('---this.allAdres---', res['data']);
      } else {
        return [];
      }
    });

  }
}
