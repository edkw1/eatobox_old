import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import {CounterComponent} from '../components/counter/counter.component';
import {SimpleMaskModule} from 'ngx-ion-simple-mask';
// import {AddcartComponent} from '../modals/addcart/addcart.component';
import {CabmenuComponent} from '../components/cabmenu/cabmenu.component';
import {AccordionComponent} from "../components/accordion/accordion.component";
import {RemoveCommaPipe} from "../pipes/removecomma.pipe";
import {CountmodifComponent} from "../components/countmodif/countmodif.component";
import {FormatTimePipe} from "../pipes/formattime.pipe";
// import {EventsService} from '../services/events-service.service';


@NgModule({
    declarations: [
        HeaderComponent,
        CabmenuComponent,
        FooterComponent,
        CounterComponent,
        CountmodifComponent,
        // AddcartComponent,
        AccordionComponent,
        RemoveCommaPipe,
      FormatTimePipe
        // EventsService
    ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
    ],
    exports: [
        CounterComponent,
        CountmodifComponent,
        HeaderComponent,
        CabmenuComponent,
        FooterComponent,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        SimpleMaskModule,
        RemoveCommaPipe,
        FormatTimePipe,
        AccordionComponent,
        // EventsService
    ]
})
export class SharedModule { }
