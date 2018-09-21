import {Component, OnInit} from '@angular/core';
import {Dati1Service} from '../../services/dati1.service';
import * as Chart from 'chart.js/dist/chart.js';
import {DataloadService} from '../../services/dataload.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  title = 'Dashboard';
  subtitle = '';
  loaded = false;
  dati: any;
  datoni = [];
  pippo = [];
  substitle = [];
  tbdata = [];
  isto = [];
  view = [400, 200];
  colorFMC = {
    domain: ['#d57383', '#4cb9a9', '#c8e67e']
  };


  constructor(protected datiload: DataloadService) {
  }

  getData(periodo) {
    this.datiload.getDashboard('001526_000').subscribe((res) => {
      this.dati = res;
      this.datoni = res['datiPeriodo'];
      this.subtitle = res['datiPeriodo'][periodo].Periodo;
      this.datoni.forEach(item => {
        this.pippo.push(item.Periodo);
      });
      this.datoni[periodo].datiTipol.forEach(item => {
        this.substitle.push(item.Tipol);
        this.isto.push(item.isto);
        this.tbdata.push(item.dati);
      });
      this.loaded = true;
    });
  }


  setPeriodo(p) {
    this.pippo = [];
    this.substitle = [];
    this.isto = [];
    this.tbdata = [];
    this.getData(p);
  }

  ngOnInit(): void {
    this.getData(0);
  }


}
