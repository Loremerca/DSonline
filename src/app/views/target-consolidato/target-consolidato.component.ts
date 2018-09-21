import { Component, OnInit } from '@angular/core';
import {DataloadService} from "../../services/dataload.service";

@Component({
  selector: 'app-target-consolidato',
  templateUrl: './target-consolidato.component.html'
})
export class TargetConsolidatoComponent implements OnInit {

  title = 'Target';
  dati;
  datarif;
  datifilter;
  sottotitolo1;
  sottotitolo2;
  constructor(private dataload: DataloadService) { }

  getDati(){
    this.dataload.getTarget('001526_000').subscribe(res => {
      this.dati = res;
      this.datarif = this.dati["DataRif"];
      if(this.dati['BooleanTarget'] === 1){
          this.datifilter = this.dati['DatiTarget'];
          this.title = this.datifilter['Titolo'];
          this.sottotitolo1 = this.datifilter['SottoTitolo1'];
          this.sottotitolo2 = this.datifilter['SottoTitolo2'];
      }else{
          this.datifilter = this.dati['DatiNTarget'];
          this.title = this.datifilter['Titolo'];
          this.sottotitolo1 = this.datifilter['SottoTitolo1'];
          this.sottotitolo2 = this.datifilter['SottoTitolo2'];
      }
    });
  }

  ngOnInit() {
    this.getDati();
  }

}
