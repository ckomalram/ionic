import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { Componente } from './interface/interfaces';
import { IonMenu } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(IonMenu) ionmenu: IonMenu;
  componentes: Observable<Componente[]>;
  constructor(private ds: DataService, private router: Router) {}

  ngOnInit() {
    this.componentes= this.ds.getMenuPoints();
  }

  navigateTo(ruta: string){
    this.ionmenu.toggle(true);
    this.router.navigate([ruta]);
  }
}
