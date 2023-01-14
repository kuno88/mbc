import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import nomenclatorJson from '../../../../../assets/nomenclator-json/COA-Nomenclador.json';
import { NgxPaginationModule } from 'ngx-pagination';

interface Nomenclator{
  codigo: String;
  linea:String;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  formLineas: FormGroup;
  nomenclator : Nomenclator[]= nomenclatorJson;
  pages: number = 1;
  constructor(private fb: FormBuilder) {
    this.formLineas = fb.group({
      tipo:[]
    })
   }

  ngOnInit(): void {  }
  
  onTableDataChange(event: any) {
    this.pages = event;
  }
  

}
