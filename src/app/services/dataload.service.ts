import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import {MerceologicaComponent} from '../views/merceologica/merceologica.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataloadService {

  dashboard = 'Dashboard.json';
  riepilogoEsGauge = 'RiepilogoEsGauge.json';
  riepilogoEsNew = 'RiepilogoEsNew.json';
  ingressi = 'ingressi.json';

  constructor(private http: HttpClient, private _location: Location) { }

  getEsigenze(): Observable<Object> {
    return this.http.get('assets/codici_esigenze.json');
  }

  getDettaglio(folder, esigenza, tipo) {
    return this.http.get('assets/' + folder + '/Esigenze/' + tipo + '/' + esigenza  + '_Dettaglio.json');
  }
  getRiepilogo(folder, esigenza) {
    return this.http.get('assets/' + folder + '/Esigenze/Riepilogo/' + esigenza + '_Riepilogo.json');
  }
  getDashboard(folder) {
    return this.http.get('assets/' + folder + '/' + this.dashboard);
  }
  getRiepilogoGauge(folder) {
    return this.http.get('assets/' + folder + '/' + this.riepilogoEsGauge);
  }
  getRiepilogoNew(folder) {
    return this.http.get('assets/' + folder + '/' + this.riepilogoEsNew);
  }
  getIngressi(folder) {
    return this.http.get('assets/' + folder + '/' + this.ingressi);
  }


  getMerc(folder, merc) {
    return this.http.get('assets/' + folder + '/Merceologie/Riepilogo/' + merc  + '_Riepilogo.json');
  }

  getMercDett(folder, merc, tempo) {
    return this.http.get('assets/' + folder + '/Merceologie/' + tempo + '/' + merc + '_Dettaglio.json' );
  }

  getMercDC(folder, merc, tempo) {
    return this.http.get('assets/' + folder + '/Merceologie/' + tempo + '/DITTE/CLUSTER/' + merc + '_Dettaglio.json' );
  }
  getMercDM(folder, merc, tempo) {
    return this.http.get('assets/' + folder + '/Merceologie/' + tempo + '/DITTE/MKT/' + merc + '_Dettaglio.json' );
  }
  getMercPC(folder, merc, tempo) {
    return this.http.get('assets/' + folder + '/Merceologie/' + tempo + '/PRODOTTI/CLUSTER/' + merc + '_Dettaglio.json' );
  }
  getMercPM(folder, merc, tempo) {
    return this.http.get('assets/' + folder + '/Merceologie/' + tempo + '/PRODOTTI/MKT/' + merc + '_Dettaglio.json' );
  }


  getEsiDett(folder, merc, tempo, cat) {
    return this.http.get('assets/' + folder + '/Esigenze/' + cat + '/' + tempo + '/' + merc + '_Dettaglio.json' );
  }

  getEsiDC(folder, merc, tempo, cat) {
    return this.http.get('assets/' + folder + '/Esigenze/' + cat + '/' + tempo + '/DITTE/CLUSTER/' + merc + '_Dettaglio.json' );
  }
  getEsiDM(folder, merc, tempo, cat) {
    return this.http.get('assets/' + folder + '/Esigenze/' + cat + '/' + tempo + '/DITTE/MKT/' + merc + '_Dettaglio.json' );
  }
  getEsiPC(folder, merc, tempo, cat) {
    return this.http.get('assets/' + folder + '/Esigenze/' + cat + '/' + tempo + '/PRODOTTI/CLUSTER/' + merc + '_Dettaglio.json' );
  }
  getEsiPM(folder, merc, tempo, cat) {
    return this.http.get('assets/' + folder + '/Esigenze/' + cat + '/' + tempo + '/PRODOTTI/MKT/' + merc + '_Dettaglio.json' );
  }


  back(){
    this._location.back();
  }

  tableOption1() {
    return {
      paging: true,
      searching: true,
      info: true,
      responsive: true,
      ordering: true,
      processing: true,
      pagingType: 'full_numbers',
      dom: '<\'row\'<\'col-sm-12 col-md-12\'f>>' +
        '<\'row\'<\'col-sm-12\'tr>>' +
        '<\'row\'<\'col-sm-12 col-md-3\'l><\'col-sm-12 col-md-3\'i><\'col-sm-12 col-md-6\'p>>',
      language: {
        lengthMenu: '_MENU_  risultati per pagina',
        zeroRecords: 'Nessun risultato',
        info: 'Pagina _PAGE_ di _PAGES_',
        infoEmpty: 'Nessun risultato',
        infoFiltered: '(filtered from _MAX_ total records)',
        search: 'Cerca:',
        paginate: {
          first: 'Prima',
          last: 'Ultima',
          next: 'Successiva',
          previous: 'Precedente'
        }
      }
    };
  }
  tableOption2() {
    return {
      paging: false,
      searching: false,
      info: false,
      responsive: true,
      ordering: false,
      dom: '<\'row\'<\'col-sm-12 col-md-12\'f>>' +
        '<\'row\'<\'col-sm-12\'tr>>' +
        '<\'row\'<\'col-sm-12 col-md-3\'l><\'col-sm-12 col-md-3\'i><\'col-sm-12 col-md-6\'p>>',
    };
  }
}
