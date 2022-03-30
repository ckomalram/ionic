import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.page.html',
  styleUrls: ['./scroll.page.scss'],
})
export class ScrollPage implements OnInit {
  @ViewChild( IonInfiniteScroll ) inifiniteScroll: IonInfiniteScroll;
  data: any[]= Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event: any){
    console.log(event);
    setTimeout(() => {
      if (this.data.length > 50) {
        this.inifiniteScroll.complete();
        this.inifiniteScroll.disabled= true;
        return;
      }
      const nuevoArr = Array(10);
      this.data.push(...nuevoArr);
      // event.target.complete();
      this.inifiniteScroll.complete();
    }, 1500);
  }

}
