import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private fooSubject = new Subject<any>();
  publishSomeData(data: any) {
    this.fooSubject.next(data);
  }
  getObservable(): Subject<any> {
    return this.fooSubject;
  }

  private changeCnt = new Subject<any>();
  publishChangeCnt(change: boolean) {
    this.changeCnt.next(change);
  }
  getChangeCnt(): Subject<any> {
    return this.changeCnt;
  }

  private loginEv = new Subject<any>();
  publishLoginEv(login: boolean) {
    this.loginEv.next(login);
  }
  getLoginEv(): Subject<any> {
    return this.loginEv;
  }
  private loginId = new Subject<any>();
  publishLoginId(id: number) {
    this.loginId.next(id);
  }
  getLoginId(): Subject<any> {
    return this.loginId;
  }
  private cartClear = new Subject<any>();
  publishcartClear(cartclear: boolean) {
    this.cartClear.next(cartclear);
  }
  getcartClear(): Subject<any> {
    return this.cartClear;
  }
}
