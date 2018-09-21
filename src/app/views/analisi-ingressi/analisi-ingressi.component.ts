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
  dtOp: DataTables.Settings = {};
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
    });
  }

}
