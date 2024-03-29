import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from 'src/app/interface/interfaces';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componente[]>;
  constructor(private menu: MenuController, private ds: DataService) {
  }

  ngOnInit() {
    this.componentes= this.ds.getMenuPoints();
  }

  // mostrarMenu(){
  //   this.menu.open('first');
  //   // this.menu.open();
  // }

}
