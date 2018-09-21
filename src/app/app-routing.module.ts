import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {AnalisiScontriniComponent} from './views/analisi-scontrini/analisi-scontrini.component';
import {AnalisiIngressiComponent} from './views/analisi-ingressi/analisi-ingressi.component';
import {TargetConsolidatoComponent} from './views/target-consolidato/target-consolidato.component';
import {ComplementarietaComponent} from './views/complementarieta/complementarieta.component';
import {EsigenzaComponent} from './views/esigenza/esigenza.component';
import {ReferenzeComponent} from './views/esigenza/referenze.component';
import {ProvachartComponent} from './views/provachart/provachart.component';
import {MerceologicaComponent} from './views/merceologica/merceologica.component';
import {MerceologicarefComponent} from './views/merceologica/merceologicaref.component';
import {RiepilogoComponent} from "./views/esigenza/riepilogo.component";
import {AnalisiReferenzeComponent} from "./views/analisi-referenze/analisi-referenze.component";
import {PianoLavoroComponent} from "./views/piano-lavoro/piano-lavoro.component";
import {HomeComponent} from "./views/home/home.component";


const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'analisi_scontrini', component: AnalisiScontriniComponent},
  {path: 'analisi_ingressi', component: AnalisiIngressiComponent},
  {path: 'analisi_referenze', component: AnalisiReferenzeComponent},
  {path: 'piano_lavoro', component: PianoLavoroComponent},
  {path: 'target_consolidato', component: TargetConsolidatoComponent },
  {path: 'complementarieta', component: ComplementarietaComponent },
  {path: 'esigenza/:id', component: EsigenzaComponent },
  {path: 'riepilogoesigenze', component: RiepilogoComponent },
  {path: 'referenze/:id/:ref/:tipo', component: ReferenzeComponent },
  {path: 'merceologica/:id/:nome', component: MerceologicaComponent },
  {path: 'merceologicaref/:id/:nome', component: MerceologicarefComponent },
  /*{ path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },*/
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        scrollPositionRestoration: 'enabled'
        // enableTracing: true, // <-- debugging purposes only

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule {
}
