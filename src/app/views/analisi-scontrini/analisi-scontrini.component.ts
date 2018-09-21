import {Component, OnInit, ViewChild} from '@angular/core';
import {DataloadService} from "../../services/dataload.service";

@Component({
    selector: 'app-analisi-scontrini',
    templateUrl: './analisi-scontrini.component.html'
})
export class AnalisiScontriniComponent implements OnInit {

    title = 'Analisi transazione scontrini';
    dati: any;
    titolo = '';
    sottotitolo = '';
    tab1data;
    loaded = false;
    p = 'MAT';
    p1;
    p2;

    @ViewChild('myTable') table: any;

    funder = [];
    calculated = [];
    pending = [];
    groups = [];

    editing = {};
    rows = [];
    tab2data: any;
    constructor(protected dataservice: DataloadService) {
    }

    ngOnInit() {
        this.dataservice.getScontrini('001526_000').subscribe((res) => {
            this.dati = res;
            this.titolo = this.dati.Titolo;
            this.sottotitolo = this.dati.PeriodoMAT;
            this.tab1data = this.dati.dati;
            this.tab2data = this.dati.Tabella1;
            this.p1 = this.dati.PeriodoMAT;
            this.p2 = this.dati.PeriodoUM;
            this.loaded = true;
        });
    }
    toggleExpandGroup(group) {
        console.log('Toggled Expand Group!', group);
        this.table.groupHeader.toggleExpandGroup(group);
    }
    setMat(){
        this.p = 'MAT';
        this.sottotitolo = this.dati.PeriodoMAT;
    }
    setUM(){
        this.p = 'UM';
        this.sottotitolo = this.dati.PeriodoUM;
    }
    onDetailToggle(event) {
        console.log('Detail Toggled', event);
    }

}
