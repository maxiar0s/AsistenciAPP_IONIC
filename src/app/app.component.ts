import { Component } from '@angular/core';
interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  componentes : Componente[] = [
    {
      
      icon: 'arrow-forward-outline',
      name: 'Inicio',
      redirecTo: '/inicio'
    },
    {

      icon: 'qr-code-outline',
      name: 'Codigo QR',
      redirecTo: '/qrpage'
    },
    {
      icon: 'people-outline',
      name: 'Asistencia',
      redirecTo: '/asist'
    },
    {
      icon: 'eye-outline',
      name: 'Noticias',
      redirecTo:'/noticias',
    },
    {
      icon: 'exit-outline',
      name: 'Cerrar sesión',
      redirecTo: ''
    },

    
  ];
}
