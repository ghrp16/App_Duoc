import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {

  constructor(private alertController: AlertController) { }

  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Cuidado!',
      subHeader: '',
      message: 'Se enviará un link a su correo para poder recuperar el nombre de usuario',
      buttons: ['ENTENDIDO'],
    });
    await alert.present();
  }

  ngOnInit() {
  }

}
