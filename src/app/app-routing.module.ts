import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './component/nav/nav.component';
import { PerfilComponent } from './component/perfil/perfil.component';


const routes: Routes = [
  {path: '', component:NavComponent},
  {path:'perfil', component:PerfilComponent}

];

@NgModule({
  declarations:[
    NavComponent,

  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

