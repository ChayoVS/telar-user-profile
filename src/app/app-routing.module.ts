import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilComponent } from './component/perfil/perfil.component';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [
  {path: '', component: PerfilComponent},
  {path: 'perfil-usuario', component: PerfilComponent},
  {path: 'home', component: HomeComponent }

];

@NgModule({
  declarations:[
    PerfilComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

