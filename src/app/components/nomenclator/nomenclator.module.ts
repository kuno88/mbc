import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
//import { AppModule } from "../app.module";
import { NomenclatorRoutingModule } from './nomenclator-routing.module';
import { ListComponent } from './pages/list/list.component';
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    NomenclatorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class NomenclatorModule { }
