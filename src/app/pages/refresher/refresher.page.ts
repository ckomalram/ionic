import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRefresher } from '@ionic/angular';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {
  @ViewChild(IonRefresher) ionrefresher: IonRefresher;
  items: any[];

  constructor() { }

  ngOnInit() {
  }

  doRefresh(ev: any){
    console.log(ev);
    setTimeout(() => {
      // ev.detail.complete();
      this.ionrefresher.complete();
      this.items = Array(10);
    }, 1500);
  }

}
