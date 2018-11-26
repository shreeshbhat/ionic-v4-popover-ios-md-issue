import { Component } from '@angular/core';
import { Mode } from '@ionic/core';
import { PopoverController } from '@ionic/angular';
import { ProfilePageComponent } from '../profile-page/profile-page.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private popoverController: PopoverController) {}

  async presentPopover(opts) {
    opts['component'] = ProfilePageComponent;
    const popoverElement = await this.popoverController.create(opts);
    return await popoverElement.present();
  }
}
