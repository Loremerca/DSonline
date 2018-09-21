import { Component, OnInit } from '@angular/core';
import {DataloadService} from '../../services/dataload.service';

@Component({
  selector: 'app-provachart',
  templateUrl: './provachart.component.html',
  styleUrls: ['./provachart.component.css']
})
export class ProvachartComponent implements OnInit {

  dati;
  referenze;
  datiperiodo;
  referenzefiltrate;
  loading = true;
  title = 'Prova';
  columns = [
    { prop: 'Header', name: 'Pos', sortable: true },
    { prop: 'DscProd', name: 'Prodotto', sortable: true },
    { prop: 'DscDitta', name: 'Ditta', sortable: false, cellClass: 'bg-apogreen-200', headerClass: 'bg-apogreen-200' }
  ];
  constructor(protected dataload: DataloadService) { }

  ngOnInit() {
    this.dataload.getEsigenze().subscribe(res => {
      this.dati = res;
    });
    this.dataload.getDettaglio('001526_000', '2730', 'COMMERCIALE').subscribe(
      data => {
        this.referenze = data;
        this.referenzefiltrate = data['datiPeriodo'];
      },
      err => {
      },
      () => {
        this.loading = false;
      }
    );
  }

}
