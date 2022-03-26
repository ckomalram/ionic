import { Component, OnInit } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [];
  constructor() {
    this.componentes = [
      {
        icon: 'logo-apple-ar',
        name: 'Action Sheet',
        redirectTo: '/action-sheet'
      },
      {
        icon: 'logo-apple-appstore',
        name: 'Alert',
        redirectTo: '/alert'
      }
      ,
      {
        icon: 'beaker-outline',
        name: 'Avatar',
        redirectTo: '/avatar'
      }
      ,
      {
        icon: 'radio-button-off-outline',
        name: 'Botones',
        redirectTo: '/botones'
      }
      ,
      {
        icon: 'card-outline',
        name: 'Cards',
        redirectTo: '/card'
      }
    ];
  }

  ngOnInit() {
  }

}
