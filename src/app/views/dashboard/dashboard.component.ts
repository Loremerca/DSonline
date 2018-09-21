import {Component, Input, OnInit} from '@angular/core';
import {Dati1Service} from '../../services/dati1.service';
import * as Chart from 'chart.js/dist/chart.js';
import {DataloadService} from '../../services/dataload.service';
import * as shape from "d3-shape";
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
registerLocaleData(localeIt);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  title = 'Cruscotto';
  subtitle = '';
  loaded = false;
  dati: any;
  datoni = [];
  graph1 = [];
  graph2 = [];
  graph3 = [];
  pippo = [];
  substitle = [];
  daticard;
  tbdata = [];
  isto = [];
  istoP = [];
  view = [400, 200];
  colorFMC = {
    domain: ['#7C2529', '#388E3C', '#FFA000']
  };
    colorSchemeF = {
        domain: ['#e18890', '#d57383', '#b94547', "#a5383b", "#912d30", "#7C2529", "#681c1f", "#521518"]
    };
    colorSchemeFg = {
        domain: ["#521518", '#e18890', '#d57383', '#b94547', "#a5383b", "#912d30", "#7C2529", "#681c1f", ]
    };
    colorSchemeM = {
        domain: ['#6ae0cc', '#4cb9a9', '#53b4a5', "#41a095", "#38887d", "#387469", "#306055", "#144b46"]
    };
    colorSchemeC = {
        domain: ['#dfff45', '#c8e67e', '#c6e13e', "#b2cb34", "#9fb730", "#8AA330", "#768f30", "#667c29"]
    };
    curve = shape.curveCardinal;
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
        this.istoP.push(item.istoPezzi);
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
