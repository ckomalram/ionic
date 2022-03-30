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
      ,
      {
        icon: 'checkmark-circle-outline',
        name: 'Checks',
        redirectTo: '/check'
      }
      ,
      {
        icon: 'calendar-outline',
        name: 'Date Time',
        redirectTo: '/date-time'
      }
      ,
      {
        icon: 'car-outline',
        name: 'Fabs',
        redirectTo: '/fab'
      }
      ,
      {
        icon: 'grid-outline',
        name: 'Grid',
        redirectTo: '/grid'
      }
      ,
      {
        icon: 'infinite-outline',
        name: 'Infinite Scroll',
        redirectTo: '/scroll'
      }
      ,
      {
        icon: 'hammer-outline',
        name: 'Input',
        redirectTo: '/input'
      }
    ];
  }

  ngOnInit() {
  }

}
