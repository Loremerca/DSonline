import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {DataloadService} from "../../services/dataload.service";

@Component({
  selector: 'app-complementarieta',
  templateUrl: './complementarieta.component.html'
})
export class ComplementarietaComponent implements OnInit, OnDestroy {

  title = 'Complementarietà';
  dati;
  loaded = false;
  constructor(private dataload: DataloadService, private renderer: Renderer2) {
      this.renderer.addClass(document.body, 'page-aside-fixed');
      this.renderer.addClass(document.body, 'page-aside-right');
  }

  ngOnInit() {
    this.getDati();
  }
    ngOnDestroy() {
        this.renderer.removeClass(document.body, 'page-aside-fixed');
        this.renderer.removeClass(document.body, 'page-aside-right');
    }
  getDati(){
    this.dataload.getComp('001526_000').subscribe( res => {
      this.dati = res;
      this.loaded = true;
    })
  }
  BGColor({ row, column, value }): any {
      return ' ' + row.BGColor;
  }
}
