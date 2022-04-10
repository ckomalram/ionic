import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalctrl: ModalController) { }

  ngOnInit() {
  }

  async mostrarModalInfo(){
    const modal = await this.modalctrl.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Carlyle',
        apellido: 'Komalram'
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    // const resp = await modal.onDidDismiss();
    console.log(data);
    console.log(JSON.stringify(data));

  }

}
