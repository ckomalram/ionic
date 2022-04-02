import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild(IonList) ionlist: IonList;
  usuarios: Observable<any>;
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.usuarios = this.dataservice.getUsuarios();
  }

  favorite(usuario: any){
    console.log(usuario);
    this.ionlist.closeSlidingItems();
  }

  share(usuario: any){
    console.log(usuario);
    this.ionlist.closeSlidingItems();
  }

  delete(usuario: any){
    console.log(usuario);
    this.ionlist.closeSlidingItems();
  }

}
