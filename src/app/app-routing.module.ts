import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';


//const routes: Routes = [];

const app_routes: Routes = [
  {path: 'home', component: PortafolioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'item/:id', component: ItemComponent},
  {path: 'search/:termino', component: SearchComponent},
  //Redirecciona al PortafolioComponent en caso de no ser ninguna de las anteriores
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [                         // sirve para ponerle un # a las paginas
    RouterModule.forRoot(app_routes, { useHash: true})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }


