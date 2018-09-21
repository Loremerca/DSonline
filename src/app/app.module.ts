import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {SidebarComponent} from './layout/sidebar.component';
import {TopbarComponent} from './layout/topbar.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {DataTablesModule} from 'angular-datatables';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {NgxGaugeModule} from 'ngx-gauge';
import {AnalisiScontriniComponent} from './views/analisi-scontrini/analisi-scontrini.component';
import {AnalisiIngressiComponent} from './views/analisi-ingressi/analisi-ingressi.component';
import {TargetConsolidatoComponent} from './views/target-consolidato/target-consolidato.component';
import {ComplementarietaComponent} from './views/complementarieta/complementarieta.component';
import {TabsModule} from 'ngx-bootstrap';
import {EsigenzaComponent} from './views/esigenza/esigenza.component';
import {OrderByPipe} from './pipes/order-by.pipe';
import {ReferenzeComponent} from './views/esigenza/referenze.component';
import {ProvachartComponent} from './views/provachart/provachart.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MerceologicaComponent} from './views/merceologica/merceologica.component';
import { MerceologicarefComponent } from './views/merceologica/merceologicaref.component';
import { RiepilogoComponent } from './views/esigenza/riepilogo.component';
import { AnalisiReferenzeComponent } from './views/analisi-referenze/analisi-referenze.component';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { PianoLavoroComponent } from './views/piano-lavoro/piano-lavoro.component';
import { FooterComponent } from './layout/footer.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    TopbarComponent,
    AnalisiScontriniComponent,
    AnalisiIngressiComponent,
    TargetConsolidatoComponent,
    ComplementarietaComponent,
    EsigenzaComponent,
    OrderByPipe,
    ReferenzeComponent,
    ProvachartComponent,
    MerceologicaComponent,
    MerceologicarefComponent,
    RiepilogoComponent,
    AnalisiReferenzeComponent,
    SanitizeHtmlPipe,
    PianoLavoroComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    NgxGaugeModule,
    TabsModule.forRoot(),
    BrowserAnimationsModule,
    NgxChartsModule,
    NgxDatatableModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
