import { Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataloadService} from '../../services/dataload.service';
import {DatatableComponent} from '@swimlane/ngx-datatable';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-referenze',
  templateUrl: './referenze.component.html'
})
export class ReferenzeComponent implements OnInit {
  @ViewChild(DatatableComponent) tb1: DatatableComponent;
/*  @ViewChild(DatatableComponent) table1: DatatableComponent;
  @ViewChild(DatatableComponent) table2: DatatableComponent;
  @ViewChild(DatatableComponent) table3: DatatableComponent;
  @ViewChild(DatatableComponent) table4: DatatableComponent;
  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild('prova') prova: TemplateRef<any>;
  @ViewChild('prova2') prova2: TemplateRef<any>;*/
  /*title = '';
  id: number;
  ref;
  loaded: boolean;
  temp = [];

  datiDC = [];
  datiDM = [];
  datiPC = [];
  datiPM = [];
  bo = [];
  bo1 = [];
  bo2 = [];
  bo3 = [];
  bo4 = [];
  pippolo = 20;
  referenzefiltrate;
  reorderable = true;
  datiperiodo = {};
  chartdata: any;
  /!*columns1 = [];
  columns2 = [];
  columns3 = [];
  columns4 = [];
  columnsr = [];*!/


  pippo = '';
  paperino = '';
  setDati = 1;
  periodo: number;
  tempo = 'MAT';
  mercato = true;
  referenze = true;*/

  title;
  tipo;
  loaded: boolean;
  id: number;
  dati: Observable<any[]>;
  titolotempo;
  datiDC = [];
  datiDM = [];
  datiPC = [];
  datiPM = [];
  rispag = 10;
  bo = [];
  bo1 = [];
  bo2 = [];
  bo3 = [];
  bo4 = [];
  pippo = '';
  paperino = '';
  setDati = 1;
  periodo: number;
  tempo = 'MAT';
  mercato = true;
  referenze = true;

  datigrafico: any[];

  view: any[];
  // options
  gradient = false;
  showLegend = true;

  colorScheme = {
    domain: ['#d57383', '#4cb9a9', '#c8e67e', '#AAAAAA']
  };

  constructor(protected route: ActivatedRoute, protected dataload: DataloadService) {
    /*this.getReferenze();*/

  }

  ngOnInit() {
    this.loaded = false;
    this.getEsigenza();

  }
  back() {
    this.dataload.back();
  }
 /* setPeriodo(id) {
    this.periodo = id;
    this.clearSearch();
    this.getReferenze();
  }

  clearSearch() {
    this.pippo = null;
  }*/
  setPeriodo(cod) {
    this.tempo = cod;
    this.datiload();
  }

  setDettaglio(value) {
    switch (value) {
      case 1:
        this.pippo = null;
        this.paperino = null;
        this.setDati = 1;
        this.mercato = true;
        this.referenze = true;
        this.bo = this.bo1; // Ref Merc
        break;
      case 2:
        this.pippo = null;
        this.paperino = null;
        this.setDati = 2;
        this.mercato = false;
        this.referenze = true;
        this.bo = this.bo2; // Ref Clus
        break;
      case 3:
        this.pippo = null;
        this.paperino = null;
        this.setDati = 3;
        this.mercato = true;
        this.referenze = false;
        this.bo = this.bo3; // Dit Merc
        break;
      case 4:
        this.pippo = null;
        this.paperino = null;
        this.setDati = 4;
        this.mercato = false;
        this.referenze = false;
        this.bo = this.bo4; // Dit Clus
        break;
    }
  }
  setPages(num) {
    this.rispag = num;
  }

  getEsigenza(): void {
    this.route.url
      .subscribe(url => {
        this.loaded = false;
        this.id = +url[1];
        this.title = url[2].toString().replace('%20', ' ').replace('%28', '(').replace('%29', ')');
        this.tipo = url[3].toString().replace('%20', ' ').replace('%28', '(').replace('%29', ')');
        this.periodo = 0;
        this.datiload();
        this.loaded = true;
      });
  }

  datiload() {
    this.loaded = false;
    this.dataload.getEsiDett('001526_000', this.id, this.tempo, this.title).subscribe(data => {
        this.dati = data['datiTabRiass'];
        this.datigrafico = data['HorizontBar'];
        this.titolotempo = data['Tempo'];
      }
    );
    this.dataload.getEsiDC('001526_000', this.id, this.tempo, this.title).subscribe(data => {
      this.datiDC = data['datiDettDitta'];
      this.bo4 = data['datiDettDitta'];
    });
    this.dataload.getEsiDM('001526_000', this.id, this.tempo, this.title).subscribe(data => {
      this.datiDM = data['datiDettDitta'];
      this.bo3 = data['datiDettDitta'];
    });
    this.dataload.getEsiPC('001526_000', this.id, this.tempo, this.title).subscribe(data => {
      this.datiPC = data['datiDettRef'];
      this.bo2 = data['datiDettRef'];
    });
    this.dataload.getEsiPM('001526_000', this.id, this.tempo, this.title).subscribe(data => {
      this.datiPM = data['datiDettRef'];
      this.bo1 = data['datiDettRef'];
      this.bo = data['datiDettRef'];
    });
    this.loaded = true;
  }


  profil1(event) {
    const val = event.target.value.toLowerCase();
    switch (this.setDati) {
      case 1:
        this.bo = this.datiPM.filter(
          (data) => {
            if (data['DscProd'] !== null) {
              return data['DscProd'].toLowerCase().indexOf(val) !== -1 || !val;
            }
          });
        break;
      case 2:
        this.bo = this.datiPC.filter(
          (data) => {
            if (data['DscProd'] !== null) {
              return data['DscProd'].toLowerCase().indexOf(val) !== -1 || !val;
            }
          });
        break;
      case 3:
        this.bo = this.datiDM.filter(
          (data) => {
            if (data['DscProd'] !== null) {
              return data['DscProd'].toLowerCase().indexOf(val) !== -1 || !val;
            }
          });
        break;
      case 4:
        this.bo = this.datiDC.filter(
          (data) => {
            if (data['DscProd'] !== null) {
              return data['DscProd'].toLowerCase().indexOf(val) !== -1 || !val;
            }
          });
        break;
    }
    this.tb1.offset = 0;
  }

  profil12(event) {
    const val = event.target.value.toLowerCase();
    switch (this.setDati) {
      case 1:
        this.bo = this.datiPM.filter(
          (data) => {
            if (data['DscDitta'] !== null) {
              return data['DscDitta'].toLowerCase().indexOf(val) !== -1 || !val;
            }
          });
        break;
      case 2:
        this.bo = this.datiPC.filter(
          (data) => {
            if (data['DscDitta'] !== null) {
              return data['DscDitta'].toLowerCase().indexOf(val) !== -1 || !val;
            }
          });
        break;
      case 3:
        this.bo = this.datiDM.filter(
          (data) => {
            if (data['DscDitta'] !== null) {
              return data['DscDitta'].toLowerCase().indexOf(val) !== -1 || !val;
            }
          });
        break;
      case 4:
        this.bo = this.datiDC.filter(
          (data) => {
            if (data['DscDitta'] !== null) {
              return data['DscDitta'].toLowerCase().indexOf(val) !== -1 || !val;
            }
          });
        break;
    }
    this.tb1.offset = 0;
  }


  /*getReferenze() {
    this.route.url
      .subscribe(url => {
        this.id = +url[1];
        this.ref = url[2];
        this.dataload.getDettaglio('001526_000', this.id, this.ref).subscribe(
          data => {
            this.referenze = data;
            this.referenzefiltrate = data['datiPeriodo'];
            this.datiperiodo = data['datiPeriodo'][this.periodo];
            this.datigrafico = data['datiPeriodo'][this.periodo]['HorizontBar'];
          },
          err => {
          },
          () => {
            this.bo2 = this.datiperiodo['datiTabRiass'];
            this.bo = this.datiperiodo['datiDettRef'];
            this.datigrafico = this.datiperiodo['HorizontBar'];
            this.temp = this.datiperiodo['datiDettRef'];
            this.title = this.referenze.Esigenza + ' - ' + this.referenze.Tipologia;
            this.loading = false;
          }
        );
      });
  }*/

  /*updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    this.bo = this.temp.filter(
      (data) => {
        if (data.DscProd !== null) {
          return data.DscProd.toLowerCase().indexOf(val) !== -1 || !val;
        }
      });

    this.table1.offset = 0;
    this.table2.offset = 0;
    this.table3.offset = 0;
    this.table4.offset = 0;
  }

  updateFilter2(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    this.bo = this.temp.filter(
      (data) => {
        if (data.DscDitta !== null) {
          return data.DscDitta.toLowerCase().indexOf(val) !== -1 || !val;
        }
      });
    // Whenever the filter changes, always go back to the first page
    this.table1.offset = 0;
    this.table2.offset = 0;
    this.table3.offset = 0;
    this.table4.offset = 0;
  }

  ngAfterViewInit() {
    this.getReferenze();
  }*/
}
