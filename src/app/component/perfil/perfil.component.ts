import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl:'./perfil.component.html',
  styleUrls: ['./perfil.component.css']

})
export class PerfilComponent{
  mostrar = true;
  texto: any = {
    mensaje1: 'Fotografía anóloga',
  }
  mostrar1 = true;
  texto1: any = {
    mensaje2: 'Blanco/Negro',
  }
  mostrar2 = true;
  texto2: any = {
    mensaje3: 'Estado de México',
  }
}
