import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataloadService} from '../../services/dataload.service';
import * as Chart from 'chart.js/dist/chart.js';
import * as jspdf from 'jspdf';

import html2canvas from 'html2canvas';

import * as shape from 'd3-shape';

@Component({
  selector: 'app-esigenza',
  templateUrl: './esigenza.component.html'
})
export class EsigenzaComponent implements OnInit {

  @ViewChild('prova') prova: TemplateRef<any>;
  @ViewChild('prova2') prova2: TemplateRef<any>;
  @ViewChild('prova3') prova3: TemplateRef<any>;
  @ViewChild('prova4') prova4: TemplateRef<any>;
  title = '';
  codice = 3090;
  datiloaded: any;
  loaded = false;
  isto1;
  isto2;
  tortaf;
  tortam;
  tortac;
  tbc1 = [];
  tbc2 = [];
  tbc3 = [];
  mercato = true;
  gaugeF = [];
  gaugeM = [];
  gaugeC = [];
  gaugeFMin = 0;
  gaugeFMax = 0;
  gaugeMMin = 0;
  gaugeMMax = 0;
  gaugeCMin = 0;
  gaugeCMax = 0;
  tbdata = [];
  view: any[] = [500, 250];
  value: string;
  id: number;
  dati: any;
  datapdf;
  titoloperiodo;
  classeperiodo;
  colorScheme = {
    domain: ['#912d30', '#e18890', '#C7B42C']
  };
  colorScheme2 = {
    domain: ['#c7ab3c', '#e17014', '#c77b98']
  };
  istocolor = {
    domain: ['#912d30', '#e18890']
  };
  colorFMC = {
    domain: ['#d57383', '#4cb9a9', '#c8e67e']
  };
  colorF = {
    domain: ['#d57383']
  };
  colorM = {
    domain: ['#4cb9a9']
  };
  colorC = {
    domain: ['#c8e67e']
  };
  curve = shape.curveCardinal;

  constructor(protected route: ActivatedRoute, protected dataload: DataloadService) {
    this.getEsigenza(0);
    this.classeperiodo = 0;
  }

  ngOnInit() {
    this.tbc1 = [
      {
        prop: 'Header',
        name: '',
        flexGrow: 2,
        cellTemplate: this.prova3,
        cellClass: 'black font-size-12',
        headerClass: 'black font-size-12',
        sortable: false
      },
      {
        prop: 'Header',
        name: '',
        flexGrow: 4,
        cellTemplate: this.prova4,
        cellClass: 'black font-size-12',
        headerClass: 'black font-size-12',
        sortable: false
      },
      {
        prop: 'FFatt',
        name: 'Fatt',
        flexGrow: 3,
        sortable: false,
        cellClass: 'bg-primary-200 black font-size-12',
        headerClass: 'bg-primary-200 black font-size-12'
      },
      {
        prop: 'FDFatt',
        name: 'Diff',
        flexGrow: 2,
        sortable: false,
        cellClass: 'bg-primary-200 black font-size-12',
        headerClass: 'bg-primary-200 black font-size-12'
      },
      {
        prop: 'FPezzi',
        name: 'Pezzi',
        flexGrow: 3,
        sortable: false,
        cellClass: 'bg-primary-200 black font-size-12',
        headerClass: 'bg-primary-200 black font-size-12'
      },
      {
        prop: 'FDPezzi',
        name: 'Diff',
        flexGrow: 2,
        sortable: false,
        cellClass: 'bg-primary-200 black font-size-12',
        headerClass: 'bg-primary-200 black font-size-12'
      },
      {
        prop: 'FQuota',
        name: 'Quota',
        flexGrow: 2,
        sortable: false,
        cellClass: 'bg-primary-200 black font-size-12',
        headerClass: 'bg-primary-200 black font-size-12'
      },
      {
        prop: 'MFatt',
        name: 'Fatt',
        flexGrow: 3,
        sortable: false,
        cellClass: 'bg-apogreen-200 black font-size-12',
        headerClass: 'bg-apogreen-200 black font-size-12'
      },
      {
        prop: 'MDFatt',
        name: 'Diff',
        flexGrow: 2,
        sortable: false,
        cellClass: 'bg-apogreen-200 black font-size-12',
        headerClass: 'bg-apogreen-200 black font-size-12'
      },
      {
        prop: 'MPezzi',
        name: 'Pezzi',
        flexGrow: 3,
        sortable: false,
        cellClass: 'bg-apogreen-200 black font-size-12',
        headerClass: 'bg-apogreen-200 black font-size-12'
      },
      {
        prop: 'MDPezzi',
        name: 'Diff',
        flexGrow: 2,
        sortable: false,
        cellClass: 'bg-apogreen-200 black font-size-12',
        headerClass: 'bg-apogreen-200 black font-size-12'
      },
      {
        prop: 'MQuota',
        name: 'Quota',
        flexGrow: 2,
        sortable: false,
        cellClass: 'bg-apogreen-200 black font-size-12',
        headerClass: 'bg-apogreen-200 black font-size-12'
      }
    ];
    this.tbc2 = [
      {
        prop: 'Header',
        name: '',
        flexGrow: 2,
        cellTemplate: this.prova3,
        cellClass: 'black font-size-12',
        headerClass: 'black font-size-12',
        sortable: false
      },
      {
        prop: 'Header',
        name: '',
        flexGrow: 4,
        cellTemplate: this.prova4,
        cellClass: 'black font-size-12',
        headerClass: 'black font-size-12',
        sortable: false
      },
      {
        prop: 'FFatt',
        name: 'Fatt',
        flexGrow: 3,
        sortable: false,
        cellClass: 'bg-primary-200 black font-size-12',
        headerClass: 'bg-primary-200 black font-size-12'
      },
      {
        prop: 'FDFatt',
        name: 'Diff',
        flexGrow: 2,
        sortable: false,
        cellClass: 'bg-primary-200 black font-size-12',
        headerClass: 'bg-primary-200 black font-size-12'
      },
      {
        prop: 'FPezzi',
        name: 'Pezzi',
        flexGrow: 3,
        sortable: false,
        cellClass: 'bg-primary-200 black font-size-12',
        headerClass: 'bg-primary-200 black font-size-12'
      },
      {
        prop: 'FDPezzi',
        name: 'Diff',
        flexGrow: 2,
        sortable: false,
        cellClass: 'bg-primary-200 black font-size-12',
        headerClass: 'bg-primary-200 black font-size-12'
      },
      {
        prop: 'FQuota',
        name: 'Quota',
        flexGrow: 2,
        sortable: false,
        cellClass: 'bg-primary-200 black font-size-12',
        headerClass: 'bg-primary-200 black font-size-12'
      },
      {
        prop: 'CFatt',
        name: 'Fatt',
        flexGrow: 3,
        sortable: false,
        cellClass: 'bg-light-apogreen-200 black font-size-12',
        headerClass: 'bg-light-apogreen-200 black font-size-12'
      },
      {
        prop: 'CDFatt',
        name: 'Diff',
        flexGrow: 2,
        sortable: false,
        cellClass: 'bg-light-apogreen-200 black font-size-12',
        headerClass: 'bg-light-apogreen-200 black font-size-12'
      },
      {
        prop: 'CPezzi',
        name: 'Pezzi',
        flexGrow: 3,
        sortable: false,
        cellClass: 'bg-light-apogreen-200 black font-size-12',
        headerClass: 'bg-light-apogreen-200 black font-size-12'
      },
      {
        prop: 'CDPezzi',
        name: 'Diff',
        flexGrow: 2,
        sortable: false,
        cellClass: 'bg-light-apogreen-200 black font-size-12',
        headerClass: 'bg-light-apogreen-200 black font-size-12'
      },
      {
        prop: 'CQuota',
        name: 'Quota',
        flexGrow: 2,
        sortable: false,
        cellClass: 'bg-light-apogreen-200 black font-size-12',
        headerClass: 'bg-light-apogreen-200 black font-size-12'
      }/*,
      {
        prop: 'CFlagFatt',
        name: '',
        cellTemplate: this.prova,
        flexGrow: 1,
        sortable: false,
        cellClass: 'bg-light-apogreen-200 black font-size-12',
        headerClass: 'bg-light-apogreen-200 black font-size-12'
      },
      {
        prop: 'CFatt',
        name: 'Fatturato',
        flexGrow: 3,
        sortable: false,
        cellClass: 'bg-light-apogreen-200 black font-size-12',
        headerClass: 'bg-light-apogreen-200 black font-size-12'
      },
      {
        prop: 'CDFatt',
        name: 'Diff',
        flexGrow: 3,
        sortable: false,
        cellClass: 'bg-light-apogreen-200 black font-size-12',
        headerClass: 'bg-light-apogreen-200 black font-size-12'
      }*/
    ];
    this.tbc3 = [
      {
        prop: 'Header',
        name: '',
        flexGrow: 1,
        cellTemplate: this.prova3,
        cellClass: 'black font-size-12',
        headerClass: 'black font-size-12',
        sortable: false
      },
      {
        prop: 'Header',
        name: '',
        flexGrow: 3,
        cellTemplate: this.prova4,
        cellClass: 'black font-size-12',
        headerClass: 'black font-size-12',
        sortable: false
      },
      {
        prop: 'FRef',
        name: 'Ref',
        flexGrow: 2,
        sortable: false,
        cellClass: 'bg-primary-200 black font-size-12',
        headerClass: 'bg-primary-200 black font-size-12'
      },
      {
        prop: 'FRef80',
        name: 'Ref 80',
        flexGrow: 2,
        sortable: false,
        cellClass: 'bg-primary-200 black font-size-12',
        headerClass: 'bg-primary-200 black font-size-12'
      },
      {
        prop: 'FDitte',
        name: 'Ditte',
        flexGrow: 3,
        sortable: false,
        cellClass: 'bg-primary-200 black font-size-12',
        headerClass: 'bg-primary-200 black font-size-12'
      },
      {
        prop: 'MRef',
        name: 'Ref',
        flexGrow: 2,
        sortable: false,
        cellClass: 'bg-apogreen-200 black font-size-12',
        headerClass: 'bg-apogreen-200 black font-size-12'
      },
      {
        prop: 'MRef80',
        name: 'Ref 80',
        flexGrow: 2,
        sortable: false,
        cellClass: 'bg-apogreen-200 black font-size-12',
        headerClass: 'bg-apogreen-200 black font-size-12'
      },
      {
        prop: 'MDitte',
        name: 'Ditte',
        flexGrow: 3,
        sortable: false,
        cellClass: 'bg-apogreen-200 black font-size-12',
        headerClass: 'bg-apogreen-200 black font-size-12'
      },
      {
        prop: 'CRef',
        name: 'Ref',
        flexGrow: 2,
        sortable: false,
        cellClass: 'bg-light-apogreen-200 black font-size-12',
        headerClass: 'bg-light-apogreen-200 black font-size-12'
      },
      {
        prop: 'CRef80',
        name: 'Ref 80',
        flexGrow: 2,
        sortable: false,
        cellClass: 'bg-light-apogreen-200 black font-size-12',
        headerClass: 'bg-light-apogreen-200 black font-size-12'
      },
      {
        prop: 'CDitte',
        name: 'Ditte',
        flexGrow: 3,
        sortable: false,
        cellClass: 'bg-light-apogreen-200 black font-size-12',
        headerClass: 'bg-light-apogreen-200 black font-size-12'
      }
    ];
  }

  back() {
    this.dataload.back();
  }

  checkName(string) {
    if (string === 'Otcsop' || string === 'Parafarmaco') {
      return true;
    } else {
      return false;
    }
  }

  cambiamercato(value: boolean) {
    this.mercato = value;
  }

  setPeriodo(id) {
    this.getEsigenza(id);
    this.classeperiodo = id;
  }

  getEsigenza(periodo): void {
    this.route.url
      .subscribe(url => {
        this.loaded = false;
        this.id = +url[1];
        this.dati = {};
        this.dataload.getRiepilogo('001526_000', this.id).subscribe(data => {
            this.datiloaded = data;
            this.title = data['Sezione'];
            this.titoloperiodo = this.datiloaded.dati[periodo].Periodo;
            this.isto1 = data['Istogramma1'];
            this.isto2 = data['Istogramma2'];
            this.gaugeF = data['GaugeF'][0].dati;
            this.gaugeM = data['GaugeM'][0].dati;
            this.gaugeC = data['GaugeC'][0].dati;
            this.gaugeFMin = data['GaugeF'][0].opzioni.min;
            this.gaugeFMax = data['GaugeF'][0].opzioni.max;
            this.gaugeMMin = data['GaugeM'][0].opzioni.min;
            this.gaugeMMax = data['GaugeM'][0].opzioni.max;
            this.gaugeCMin = data['GaugeC'][0].opzioni.min;
            this.gaugeCMax = data['GaugeC'][0].opzioni.max;
            this.tortaf = this.datiloaded.dati[periodo].TortaF;
            this.tortam = this.datiloaded.dati[periodo].TortaM;
            this.tortac = this.datiloaded.dati[periodo].TortaC;
            this.tbdata = this.datiloaded.dati[periodo].datiTabRiass;
            this.loaded = true;
          }
        );
      });
  }

  captureScreen() {
    this.datapdf = document.getElementById('contentToConvert');
    html2canvas(this.datapdf).then(canvas => {
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf('p', 'mm', 'a4');
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.addHtml()
      pdf.save('MYPdf.pdf');
    });
  }

}
