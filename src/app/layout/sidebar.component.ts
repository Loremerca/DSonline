import { Component, OnInit } from '@angular/core';
import {DataloadService} from '../services/dataload.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  esigenze: any;
  merceologica: any;
  order = 'Nome';
  ascending = true;
  loaded = false;
  constructor(protected dataload: DataloadService) { }

  ngOnInit() {
    this.dataload.getEsigenze().subscribe((res) => {
      this.esigenze = res['Esigenze'];
      this.merceologica = res['Merceologica'];
      this.loaded = true;
    });
  }

}
