import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from '../../components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popcontroller: PopoverController) { }

  ngOnInit() {
  }

  async presentPopover(ev: any) {
    const popover = await this.popcontroller.create({
      component: PopoverInfoComponent,
      event: ev,
      translucent: true
    });
    await popover.present();
    // const { role } = await popover.onDidDismiss();
    const { data } = await popover.onDidDismiss();
    // const resp = await popover.onDidDismiss();
    // console.log('onDidDismiss resolved with role', resp);
    console.log('onDidDismiss resolved with role', data);
  }

}
