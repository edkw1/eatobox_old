import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../services/api.service";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CartService} from "../services/cart.service";
import {AnimationController} from "@ionic/angular";
import {Storage} from '@ionic/storage-angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  @ViewChild('PreiceText', { read: ElementRef }) PreiceText: ElementRef;
  @ViewChild('loadingIcon', { read: ElementRef }) loadingIcon: ElementRef;
  public priceProd: number;
  public id: string;
  public title: string;
  public image: string;
  public noimgProd: string;
  public countcur:number = 0;
  public modifierform = [];
  public productsitem = {};
  private params;
  private itemProd;
  private modific: FormGroup;

  numChecked: number = 0;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private cart: CartService,
    private formBuilder: FormBuilder,
    private animationCtrl: AnimationController,
    private storage: Storage,
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    // this.title = this.route.snapshot.paramMap.get('title');
    this.countcur = this.cart.getItemQuantity(this.id) || 1;
    this.loadProdItem(this.id);
  }
  private validationMessages = {
    phone: [
      {type: 'required', message: 'Телефон обязателен'},
      {type: 'minlength', message: 'Недостаточно цифр'},
      {type: 'pattern', message: 'Некорректный телефон'},
    ],
    smsnumber: [
      {type: 'required', message: 'Введите код'},
      {type: 'minlength', message: 'Необходимо 4 цифры'},
      {type: 'maxlength', message: 'Необходимо 4 цифры'},
      {type: 'pattern', message: 'Только цифры!'},
    ]
  };
  private loadProdItem(idprod) {
    console.log('ITEM ');
    this.storage.get('appSet').then((res)=>{
      if(res){
        console.log('appSet', res);
        console.log(typeof(res));
        this.noimgProd = res['noimgProd'];
      }

    });
    this.api.getApi('products',{'id':idprod}).then(res=>{
      console.log('PROD',res);
      if(res.hasOwnProperty('data') && res['data'].length){
        this.itemProd = res['data'][0];
        this.priceProd = parseInt(this.itemProd['price']);
        this.image = this.itemProd['image'];
        this.title = this.itemProd['title'];
        if(this.itemProd.hasOwnProperty('modifierCategories') && this.itemProd['modifierCategories'].length){
          console.log('this.modifierCategories', this.itemProd['modifierCategories']);
          // this.setSettings(this.itemProd['modifierCategories']);
          let formselem = this.itemProd['modifierCategories'];
          formselem.forEach(item=>{
            
          });
          let form={};
          for (let i=0; i<formselem.length; i++){
            let name='test'+formselem[i].id;
            form[name] = this.formBuilder.array([]);
          }
          console.log('form',form);
          this.modific = new FormGroup(form);
          //   this.modific = this.formBuilder.group({
          //   test270: this.formBuilder.array([]),
          // });
          // console.log(typeof (this.formBuilder.group));
          // this.modific = this.formBuilder.group({
          //   test271: this.formBuilder.array([]),
          // })
        }
      }



    });
    // this.itemProd = CartService.getDishById(idprod);
    console.log('itemProd', this.itemProd);

  }
  eventCaught(event : number) {
    console.log('COUNT_END', event);
    this.countcur = event;
  }
  animationAdd(elem1, elem2){
    elem1.classList.remove('loadelem');
    elem2.classList.add('loadelem');
  }

  public onCheckboxChange(e, idmod, is_required, max_amount, min_amount) {
    let maxVal = parseInt(max_amount);
    let minVal = parseInt(min_amount);
    console.log('this.modific',this.modific);
    let checkArray: FormArray = this.modific.get(idmod) as FormArray;

    console.log('idmod',idmod);
    console.log('maxVal',maxVal);
    console.log('checkArray',checkArray);
    console.log(' checkArray.controls', checkArray.controls);
    let prod = JSON.parse(e.target.value);
    if(checkArray.controls.length>=maxVal){
if(e.target.checked == false){
  let i: number = 0;
  checkArray.controls.forEach((item: FormControl) => {
    if (item.value == e.target.value) {
      this.priceProd-=prod.price;
      checkArray.removeAt(i);
      return;
    }
    i++;
  });
}


      e.target.checked = false;
      console.log('e.target.checked', e.target.checked);
      console.log('STOP');
      // return false;
    } else {
      if (e.target.checked) {
        checkArray.push(new FormControl(e.target.value));
        console.log('checkArray',checkArray.controls.length);
        console.log('e.target.value',JSON.parse(e.target.value));
        this.priceProd+=prod.price;
      } else {
        let i: number = 0;
        checkArray.controls.forEach((item: FormControl) => {
          if (item.value == e.target.value) {
            this.priceProd-=prod.price;
            checkArray.removeAt(i);
            return;
          }
          i++;
        });
      }
    }



    // console.log('checkArray',checkArray.value.length);
  }
  // public setSettings(formData){
  //   console.log('formData',formData);
  //   let form={};
  //   for (let i=0; i<formData.length; i++){
  //     if(formData[i].is_active=='Y'){
  //       form['test'+formData[i].id] = new FormControl('');
  //     }
  //
  //   }
  //   console.log('form',form);
  //   this.modific = new FormGroup(form);
  // }
  // public onChangeAnswer(checked: boolean, formid, numcheck: number) {
  //   checked ? this.numChecked++ : this.numChecked--;
  //
  //   const answerFormArray = this.modific.get('test'+formid) as FormArray;
  //   console.log('answerFormArray.controls',answerFormArray.controls);
  //   if (this.numChecked >= numcheck) {
  //     answerFormArray.controls.forEach((item) => {
  //       if (!item.value) item.disable()
  //     })
  //   } else {
  //     answerFormArray.controls.forEach((item) => {
  //       if (!item.value) item.enable()
  //     })
  //   }
  // }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.params = params;
    });

  }
  public submitfunc(){
    let formselemSubmit = this.itemProd['modifierCategories'];
    let nextStep = true;
    formselemSubmit.forEach( item=>{
      let lengItem = this.modific.value['test'+item['id']].length;
      let minAmount = parseInt(item['min_amount']);
      let maxAmount = parseInt(item['max_amount']);
      if(item['is_required']=='Y'){
        if(lengItem){
          if(lengItem < minAmount){
            this.api.alertMessage(item['title'] ,'Минимум нужно выбрать ' + minAmount );
            nextStep = false;
            return false;
          }
        } else {
          this.api.alertMessage('Вы не выбрали '+ item['title'] ,'');
          nextStep = false;
          return false;
        }
      }
      if(lengItem > maxAmount){
        this.api.alertMessage(item['title'] ,'Максимум можно выбрать '+maxAmount);
        nextStep = false;
        return false;
      }

      // console.log('ITEM',item);
    });
if(nextStep){
  console.log('this.modific.status', this.modific.status);
  console.log('this.modific.value', this.modific.value);
  this.modifierform=[];
  this.productsitem={};

  let modifierformTemp = this.modific.value;
  if(!this.countcur){
    this.api.alertMessage( 'Выберите количество! ','');
    return false;
  } else {
    if(this.modific.status=='VALID'){
      for (let key in modifierformTemp) {
        if(modifierformTemp[key].length){
          modifierformTemp[key].forEach( item =>{
            let temp = JSON.parse(item);
            console.log('temp', temp);
            this.modifierform.push(temp);
            console.log('modifierform', this.modifierform);
          });
        }
      }
      this.cart.addItemModif(this.id+'/'+this.modifierform.reduce(function(sum, current) {
        return sum + (current.id).toString();
      },''), true, this.countcur, this.modifierform, this.priceProd);
      CartService.dishes.push({
        id: this.id+'/'+this.modifierform.reduce(function(sum, current) {
          return sum + (current.id).toString();},''),
        quantity : this.countcur,
        modifiers : this.modifierform,
        price : this.priceProd,
        image : this.image,
        title : this.title
      });
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
      // this.cart.addedItems[this.id] = {
      //   quantity : this.countcur,
      //   modifiers : this.modifierform,
      //   price : (this.priceProd).toString()
      // };
      this.productsitem[this.id] = {
        quantity : this.countcur,
        modifiers : this.modifierform,
        price : this.priceProd
      };
      console.log('this.productsitem', this.productsitem);
    }
  }


  // modifierformTemp.forEach(item=>{
  //   let temp = JSON.parse(item);
  //   console.log('TEMP', temp);
  //   temp.forEach(item=>{
  //
  //   });
  //
  // });
  // console.log('this.countcur', this.countcur);

}

  }
}
