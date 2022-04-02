import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  loading: HTMLIonLoadingElement;

  constructor(private loadingcontroller: LoadingController) { }

  ngOnInit() {
  }

  onClick(){
    this.presentLoading('Cargando espere por favor...');
    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingcontroller.create({
      message
    });
    await this.loading.present();
  }

}
