import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Dati1Service {

  datiUrl = 'assets/000001/3720_Riepilogo.json';
  datiUrl1 = 'assets/001526_000/Dettaglio.json';

  constructor(private http: HttpClient) { }

  gatData(){
    return this.http.get(this.datiUrl);
  }
  gatData1(){
    return this.http.get(this.datiUrl1);
  }


}
