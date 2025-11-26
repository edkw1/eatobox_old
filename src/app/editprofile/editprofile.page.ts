import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NavController} from "@ionic/angular";
import {ActivatedRoute} from "@angular/router";
import {Storage} from '@ionic/storage-angular';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
  private params;
  private loadData = false;
  public gendershow = false;
  public birthdayshow = false;
  public username = '';
  public first_name = '';
  public last_name = '';
  public date_birth = '0';
  public userid = '';
  public usergendervalue = '0';
  public personEmail = '';
  private changeuser: FormGroup;
  private validationMessages = {
    name: [
      {type: 'required', message: 'Имя обязательно'},
      {type: 'maxlength', message: 'Слишком длинное'}
    ],
    lastname: [
      {type: 'maxlength', message: 'Слишком длинное'}
    ],
    email: [
      {type: 'required', message: 'E-mail обязателен для отправки данных заказа'},
      {type: 'pattern', message: 'Некорректный email'}
    ],
    // gender: [
    //   {type: 'required', message: 'Пол обязательно указать'},
    // ],
  };
  constructor(
    private api: ApiService,
    // private useradr: UseradrService,
    private navCtrl: NavController,
    private storage: Storage,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {

    // this.storage.get('username').then(username => {
    //   if(username!==''){
    //     this.username = username;
    //   } else {
    //     this.username ='';
    //   }
    //   this.changeuser.controls.name.reset(this.username);
    //   console.log( 'CHECKOUTusername',this.username);
    // });
  }

  ngOnInit() {
    this.changeuser = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      lastname: new FormControl('', [Validators.maxLength(50)]),
      email: new FormControl(this.personEmail, Validators.compose([
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
    });
    this.route.queryParams.subscribe(params => {
      this.params = params;
      console.log('this.params', this.params);
      if(this.params.mail){
        this.changeuser.controls.email.reset(this.params.mail);
      }
      // if(this.params.tit){
      //   this.tit = this.params.tit;
      // }
    });
    this.storage.get('user').then(user => {
      console.log('USER', user);
      if(user!==''){
        this.userid = user.id;
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.personEmail = user.email;
        // this.personBirthday = user.date_birth;
        // this.personPhone = user.phone;
        // this.personPhoneShow = ApiService.createPhoneNumber(user.phone);
        this.usergendervalue = user.gender.value ? user.gender.value : '0';
        this.date_birth = user.date_birth ? user.date_birth : '0';
        // this.getCustomerInfo(this.userid);
        // this.getAdress(this.userid);
        // this.technologies = this.orders.oldOrders;
        this.changeuser.controls.name.reset(this.first_name);
        this.changeuser.controls.lastname.reset(this.last_name);
        this.changeuser.controls.email.reset(this.personEmail);
        console.log('usergendervalue',this.usergendervalue);
        console.log('date_birth',this.date_birth);
        if(this.usergendervalue=='0'){
          console.log('gendershow',this.gendershow);
          this.changeuser.setControl('gender', new FormControl('', Validators.compose([])));
          this.gendershow = true;
          console.log('gendershow2',this.gendershow);

        } else {
          this.gendershow = false;
          this.changeuser.removeControl('gender');
        }
        if(this.date_birth=='0'){
          console.log('birthdayshow',this.birthdayshow);
          this.changeuser.setControl('birthday', new FormControl('', Validators.compose([])));
          this.birthdayshow = true;
          console.log('birthdayshow2',this.birthdayshow);
        } else {
          this.birthdayshow = false;
          this.changeuser.removeControl('birthday');
        }
      } else {
        this.userid ='';
      }
    });
  }
  async changeDataUser() {
    console.log('SUBMIT');
    // if (!this.loggedIn) {
    //   return;
    // }
    for (let control in this.changeuser.controls) {
      if (this.changeuser.controls.hasOwnProperty(control)) {
        this.changeuser.controls[control].markAsTouched();
      }
    }
    if (this.changeuser.status === 'INVALID') {
      return;
    }
    console.log('SUBMIT2');
    let namedata = '';
    let emaildata = '';
    let datauser:any = {};
    namedata = this.changeuser.value.name ? datauser.first_name = this.changeuser.value.name : '';
    emaildata = this.changeuser.value.email ? datauser.email = this.changeuser.value.email : '';

    datauser = {
      id:this.userid,
        email: this.changeuser.value.email,
        first_name: this.changeuser.value.name,
      last_name: this.changeuser.value.lastname
      };
    if(this.changeuser.value.gender){
      datauser['gender']=this.changeuser.value.gender
    }
    if(this.changeuser.value.birthday){
      datauser['date_birth']=this.changeuser.value.birthday
    }
    console.log('datauser', datauser);

    this.loadData = true;
    this.api.updateApi('clients', datauser).then((response)=> {
      console.log(response);
      if(response.hasOwnProperty('data') && response['data']){
        this.api.alertMessage('Данные отправлены.', '');
            this.storage.set('username', namedata);
            this.loadData=false;
            this.navCtrl.navigateRoot('/profile?userid='+this.userid);
      } else {

            this.api.alertMessage('Искренне сожалеем,', 'произошла ошибка. Попробуйте чуть позже.');
            this.loadData=false;
            this.navCtrl.navigateRoot('/');
          }
    });

  }
  public  goBack(){
    this.navCtrl.back();
  }
}
