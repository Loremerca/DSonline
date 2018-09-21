import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {DataloadService} from '../../services/dataload.service';
import {DatatableComponent} from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-merceologicaref',
  templateUrl: './merceologicaref.component.html'
})
export class MerceologicarefComponent implements OnInit {

  @ViewChild(DatatableComponent) tb1: DatatableComponent;


  title;
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

  constructor(protected route: ActivatedRoute, protected dataload: DataloadService) {
  }

  ngOnInit() {
    this.getEsigenza();
  }

  back() {
    this.dataload.back();
  }

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
        this.periodo = 0;
        this.datiload();
        this.loaded = true;
      });
  }

  datiload() {
    this.loaded = false;
    this.dataload.getMercDett('001526_000', this.id, this.tempo).subscribe((data: Observable<any[]>) => {
        this.dati = data['datiTabRiass'];
        this.titolotempo = data['Tempo'];
      }
    );
    this.dataload.getMercDC('001526_000', this.id, this.tempo).subscribe(data => {
      this.datiDC = data['datiDettDitta'];
      this.bo4 = data['datiDettDitta'];
    });
    this.dataload.getMercDM('001526_000', this.id, this.tempo).subscribe(data => {
      this.datiDM = data['datiDettDitta'];
      this.bo3 = data['datiDettDitta'];
    });
    this.dataload.getMercPC('001526_000', this.id, this.tempo).subscribe(data => {
      this.datiPC = data['datiDettRef'];
      this.bo2 = data['datiDettRef'];
    });
    this.dataload.getMercPM('001526_000', this.id, this.tempo).subscribe(data => {
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

}
