import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../services/api.service";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
})
export class PagesPage implements OnInit {
  public id: string;
  public params;
  public itemPage: Array<object> = [];
  slides: any = [];
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
    private route: ActivatedRoute,
    private api: ApiService,
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadPage();
  }
  private loadPage() {
    console.log('ITEM ');
    this.getPageItem(this.id);

  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.params = params;
    });
  }
  getPageItem(id) {

    return new Promise((resolve) => {
      this.api.getApi('infoPages',{'id' : id }).then(result => {
        if(result.hasOwnProperty('data')){
          this.itemPage = result['data'][0];
          if(this.itemPage.hasOwnProperty('article')){
            this.loadContentPage(this.itemPage['article']);
          }
        }
        else {
          this.itemPage = [];
        }
        console.log('itemPage', this.itemPage);
      });

    });

  }
  loadContentPage(pageslug) {
    // this.storage.get('user_type').then(result => {
    //     this.userType = result;
    // });
    return new Promise((resolve) => {
      this.api.getApi('slides',{'page_article':pageslug}).then(result => {
        console.log(result);
        // resolve();
        if (result.hasOwnProperty('data')){
          this.slides = result['data'];
          console.log(this.slides);
        }
      });

    });
  }
}
