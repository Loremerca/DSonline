import { Component, OnInit } from '@angular/core';
import {DataloadService} from '../../services/dataload.service';

@Component({
  selector: 'app-analisi-ingressi',
  templateUrl: './analisi-ingressi.component.html'
})
export class AnalisiIngressiComponent implements OnInit {

  title = 'Analisi ingressi per fascia oraria';
  dati: any;
  titolo = '';
  sottotitolo = '';
  tab1data;
  aperture;
  dtOp: DataTables.Settings = {};
  loaded = false;
  view;
  graf1;
  perc = 22;

  cyano = {
    domain: ['#006064', '#00838F', '#0097A7', "#00ACC1", "#00BCD4", "#26C6DA", "#4DD0E1"]
  };
  constructor(protected dataservice: DataloadService) { }

  ngOnInit() {
    this.dtOp = {
      pagingType: 'full_numbers',
      responsive: true,
      pageLength: 20
    };

    this.dataservice.getIngressi('001526_000').subscribe((res) => {
      this.dati = res;
      this.titolo = this.dati.Titolo;
      this.sottotitolo = this.dati.Sottotitolo;
      this.tab1data = this.dati.dati;
      this.aperture = this.dati.NAperture;
      this.graf1 = this.dati.Bar08;
        this.view = [200, 100];
      this.loaded = true;
    });
  }

}
