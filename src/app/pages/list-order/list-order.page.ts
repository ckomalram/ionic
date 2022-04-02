import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.page.html',
  styleUrls: ['./list-order.page.scss'],
})
export class ListOrderPage implements OnInit {
  @ViewChild(IonReorderGroup) ionordergroup: IonReorderGroup;
  personajes: string[] = ['Naruto', 'Sasuke', 'Gaara', 'Itachi', 'Bee' , 'Rock Lee'];
  ordenar: boolean;

  constructor() { }

  ngOnInit() {
    this.ordenar= false;
  }

  doReorder(event: any){
    console.log(event);
    console.log(this.personajes);
    // event.detail.complete();

    /*Mover item en el arreglo*/
    const itemMovido = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to,0, itemMovido);

    console.log(this.personajes);
    //completar reorder.
    this.ionordergroup.complete();
  }

  toogleOrdenar(){
    this.ordenar= !this.ordenar;
  }

}
