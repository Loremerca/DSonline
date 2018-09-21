import {Component, OnInit, ViewChild} from '@angular/core';
import {DataloadService} from "../../services/dataload.service";
import {getDate} from "ngx-bootstrap/chronos/utils/date-getters";

@Component({
    selector: 'app-riepilogo',
    templateUrl: './riepilogo.component.html'
})
export class RiepilogoComponent implements OnInit {

    @ViewChild('tb1') table: any;

    datiG;
    datiN;
    loaded = false;
    periodo = 0;
    periodo2 = 0;
    daticard;
    datitab;
    tortabig;
    tortasmall;
    datigauges;
    mercato = true;
    classeperiodo = 0;
    colorSchemeF = {
        domain: ['#e18890', '#d57383', '#b94547', "#a5383b", "#912d30", "#7C2529", "#681c1f", "#521518"]
    };
    colorSchemeM = {
        domain: ['#6ae0cc', '#4cb9a9', '#53b4a5', "#41a095", "#38887d", "#387469", "#306055", "#144b46"]
    };
    colorSchemeC = {
        domain: ['#dfff45', '#c8e67e', '#c6e13e', "#b2cb34", "#9fb730", "#8AA330", "#768f30", "#667c29"]
    };

    cs = this.colorSchemeF;

    constructor(private dataload: DataloadService) {
    }

    setPeriodo(id) {
        this.periodo = id;
        this.smista(id, 'F');
        this.cs = this.colorSchemeF;
        this.classeperiodo = id;
    }
    setPeriodo2(id){
        this.periodo2 = id;
        this.smista2(id);
    }

    cambiamercato(mercato){

        this.smista(this.periodo, mercato);
        this.cs = this['colorScheme'+mercato];
    }

    cambiamercatotab(value: boolean){
        this.mercato = value;
    }

    toggleExpandGroup(group) {
        console.log('Toggled Expand Group!', group);
        this.table.groupHeader.toggleExpandGroup(group);
    }

    onDetailToggle(event) {
        console.log('Detail Toggled', event);
    }
    ngOnInit() {
        this.getData();

    }

    getData(){
        this.dataload.getRiepilogoNew('001526_000').subscribe(res => {
            this.datiN = res;
            this.dataload.getRiepilogoGauge('001526_000').subscribe(res => {
                this.datiG = res;
                this.smista(0,'F');
                this.smista2(0);
                this.loaded = true;
            });
        });
    }
    smista(periodo, mercato){
        this.daticard = this.datiN['Dati'][periodo]['Torta'+ mercato];
        this.tortabig = this.datiN['Dati'][periodo]['Torta'+ mercato];
        this.tortasmall= this.datiN['Dati'][periodo]['Torta'+ mercato + '_Small'];
        this.datitab = this.datiN['Dati'][periodo]['dati'];
    }
    smista2(periodo){
        this.datigauges = this.datiG['dati'][periodo]['Referenze'];
    }

    BGColor({ row, column, value }): any {
        return ' ' + row.BGColor;
    }
}
