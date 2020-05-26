import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilComponent } from './component/perfil/perfil.component';

const routes: Routes = [
  {path: '', component: PerfilComponent},
  {path:'perfil-usuario', component:PerfilComponent}

];

@NgModule({
  declarations:[
    PerfilComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

