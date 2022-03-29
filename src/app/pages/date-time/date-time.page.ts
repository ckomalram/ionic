import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
   fecNacimiento: Date = new Date();
  constructor() {


   }

  ngOnInit() {
  }

  cambioFecha(event: any){
    console.log(event);
    console.log(new Date( event.detail.value));
  }

  confirm() {
    console.log('Confirmando');
  }
  reset() {
    console.log('Reseting');
  }


}
