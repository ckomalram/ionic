import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {
  @Input() nombre: string;
  @Input() apellido: string;
  constructor(private modalctrl: ModalController) { }

  ngOnInit() {
  }

  cerrarSinArgumento(){
    this.modalctrl.dismiss();
  }

  cerrarConArgumento(){
    this.modalctrl.dismiss({
      message: 'Modal cerrado exitosamente!'
    });
  }

}
