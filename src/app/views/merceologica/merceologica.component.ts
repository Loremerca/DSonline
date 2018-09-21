import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {DataloadService} from '../../services/dataload.service';
import {Menuitem} from '../../class/menuitem';
import {forEach} from '@angular/router/src/utils/collection';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-merceologica',
  templateUrl: './merceologica.component.html'
})
export class MerceologicaComponent implements OnInit {

  @ViewChild('prova') prova: TemplateRef<any>;
  @ViewChild('prova2') prova2: TemplateRef<any>;
  @ViewChild('prova3') prova3: TemplateRef<any>;
  @ViewChild('prova4') prova4: TemplateRef<any>;
  title;
  /*menu: Menuitem[];
  menuino = [];
  mm: Menuitem[] = [];*/
  loaded = false;
  id: number;
  dati: Observable<any[]>;
  datiloaded: any;
  periodo: number;
  mercato = true;
  isto1;
  isto1b;
  isto2;
  tortaf;
  tortam;
  tortac;
  tbc1 = [];
  tbc2 = [];
  tbc3 = [];
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
        prop: 'FFatt_',
        name: 'Fatturato',
        flexGrow: 3,
        sortable: false,
        cellClass: 'bg-primary-200 black font-size-12',
        headerClass: 'bg-primary-200 black font-size-12'
      },
      {
        prop: 'FFatt_D',
        name: 'Diff',
        flexGrow: 2,
        sortable: false,
        cellClass: 'bg-primary-200 black font-size-12',
        headerClass: 'bg-primary-200 black font-size-12'
      },
      {
        prop: 'FPezzi_',
        name: 'Pezzi',
        flexGrow: 3,
        sortable: false,
        cellClass: 'bg-primary-200 black font-size-12',
        headerClass: 'bg-primary-200 black font-size-12'
      },
      {
        prop: 'FPezzi_D',
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
        prop: 'MFatt_',
        name: 'Fatturato',
        flexGrow: 3,
        sortable: false,
        cellClass: 'bg-apogreen-200 black font-size-12',
        headerClass: 'bg-apogreen-200 black font-size-12'
      },
      {
        prop: 'MFatt_D',
        name: 'Diff',
        flexGrow: 2,
        sortable: false,
        cellClass: 'bg-apogreen-200 black font-size-12',
        headerClass: 'bg-apogreen-200 black font-size-12'
      },
      {
        prop: 'MPezzi_',
        name: 'Pezzi',
        flexGrow: 3,
        sortable: false,
        cellClass: 'bg-apogreen-200 black font-size-12',
        headerClass: 'bg-apogreen-200 black font-size-12'
      },
      {
        prop: 'MPezzi_D',
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
        prop: 'FFatt_',
        name: 'Fatturato',
        flexGrow: 3,
        sortable: false,
        cellClass: 'bg-primary-200 black font-size-12',
        headerClass: 'bg-primary-200 black font-size-12'
      },
      {
        prop: 'FFatt_D',
        name: 'Diff',
        flexGrow: 2,
        sortable: false,
        cellClass: 'bg-primary-200 black font-size-12',
        headerClass: 'bg-primary-200 black font-size-12'
      },
      {
        prop: 'FPezzi_',
        name: 'Pezzi',
        flexGrow: 3,
        sortable: false,
        cellClass: 'bg-primary-200 black font-size-12',
        headerClass: 'bg-primary-200 black font-size-12'
      },
      {
        prop: 'FPezzi_D',
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
        prop: 'CFatt_',
        name: 'Fatturato',
        flexGrow: 3,
        sortable: false,
        cellClass: 'bg-light-apogreen-200 black font-size-12',
        headerClass: 'bg-light-apogreen-200 black font-size-12'
      },
      {
        prop: 'CFatt_D',
        name: 'Diff',
        flexGrow: 2,
        sortable: false,
        cellClass: 'bg-light-apogreen-200 black font-size-12',
        headerClass: 'bg-light-apogreen-200 black font-size-12'
      },
      {
        prop: 'CPezzi_',
        name: 'Pezzi',
        flexGrow: 3,
        sortable: false,
        cellClass: 'bg-light-apogreen-200 black font-size-12',
        headerClass: 'bg-light-apogreen-200 black font-size-12'
      },
      {
        prop: 'CPezzi_D',
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
      }
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

  cambiamercato(value: boolean){
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
        this.title = url[2].toString().replace('%20', ' ').replace('%28', '(').replace('%29', ')');
        /*this.menuino = [];
        this.dataload.getEsigenze().subscribe((ris: Menuitem[]) => {
          // let gg = 'Menu' + this.idmenu;
          // console.log(gg);
          this.menu = ris['Merceologica'];
          this.menu.forEach(item => {
            // this.title = item.nome;
            if (item.subs) {
              if (item.subs.filter(it => it.codice === this.id).length > 0) {
                this.menuino.push(item.subs.filter(it => it.codice === this.id)[0]);
              }
            }
          });
        });*/
        this.dataload.getMerc('001526_000', this.id).subscribe((data: Observable<any[]>) => {
          this.datiloaded = data;
          this.isto1 = data['Istogramma1'];
          this.isto2 = data['Istogramma2'];
         /* this.gaugeF = data['GaugeF'][0].dati;
          this.gaugeM = data['GaugeM'][0].dati;
          this.gaugeC = data['GaugeC'][0].dati;
          this.gaugeFMin = data['GaugeF'][0].opzioni.min;
          this.gaugeFMax = data['GaugeF'][0].opzioni.max;
          this.gaugeMMin = data['GaugeM'][0].opzioni.min;
          this.gaugeMMax = data['GaugeM'][0].opzioni.max;
          this.gaugeCMin = data['GaugeC'][0].opzioni.min;
          this.gaugeCMax = data['GaugeC'][0].opzioni.max;*/
          this.tortaf = this.datiloaded.datiPeriodo[periodo].TortaF;
          this.tortam = this.datiloaded.datiPeriodo[periodo].TortaM;
          this.tortac = this.datiloaded.datiPeriodo[periodo].TortaC;
          this.tbdata = this.datiloaded.datiPeriodo[periodo].datiRiep;
          this.titoloperiodo = this.datiloaded.datiPeriodo[periodo].Periodo;
          }
        );


        this.loaded = true;
      });
  }
 /* getEsigenzaa(): void {
    this.route.url
      .subscribe(url => {
        this.loaded = false;
        this.id = +url[1];
        this.title = url[2].toString().replace('%20', ' ').replace('%28', '(').replace('%29', ')');
        this.periodo = 0;
        this.menuino = [];
        this.dataload.getEsigenze().subscribe((ris: Menuitem[]) => {
          // let gg = 'Menu' + this.idmenu;
          // console.log(gg);
          this.menu = ris['Merceologica'];
          this.menu.forEach(item => {
            // this.title = item.nome;
            if (item.subs) {
              if (item.subs.filter(it => it.codice === this.id).length > 0) {
                this.menuino.push(item.subs.filter(it => it.codice === this.id)[0]);
              }
            }
          });
        });
        this.dataload.getMerc('001526_000', this.id).subscribe((data: Observable<any[]>) => {
            this.dati = data;
          }
        );

        this.loaded = true;
      });
  }*/

  /*checkmenu() {
    if (this.menuino.length > 0) {
      if (this.menuino[0].subs && this.menuino[0].subs.length > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }*/

}
