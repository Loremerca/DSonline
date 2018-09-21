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


const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'analisi_scontrini', component: AnalisiScontriniComponent},
  {path: 'analisi_ingressi', component: AnalisiIngressiComponent},
  {path: 'target_consolidato', component: TargetConsolidatoComponent },
  {path: 'complementarieta', component: ComplementarietaComponent },
  {path: 'esigenza/:id', component: EsigenzaComponent },
  {path: 'referenze/:id/:ref/:tipo', component: ReferenzeComponent },
  {path: 'merceologica/:id/:nome', component: MerceologicaComponent },
  {path: 'merceologicaref/:id/:nome', component: MerceologicarefComponent },
  {path: 'prova', component: ProvachartComponent },
  /*{ path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },*/
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
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
