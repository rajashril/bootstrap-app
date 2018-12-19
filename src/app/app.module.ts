import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AccordianComponent } from './accordian/accordian.component';
import { AlertComponent } from './alert/alert.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CollapseComponent } from './collapse/collapse.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ModalComponent } from './modal/modal.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordianComponent,
    AlertComponent,
    ButtonsComponent,
    CarouselComponent,
    CollapseComponent,
    DropdownComponent,
    ModalComponent,
    PaginationComponent,
    DatepickerComponent,
    PopoverComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
