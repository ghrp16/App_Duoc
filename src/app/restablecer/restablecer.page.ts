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
      header: 'Estimado Alumno',
      subHeader: '',
      message: 'Se le enviará un link a su correo institucional para poder recuperar su contraseña',
      buttons: ['ENTENDIDO'],
    });
    await alert.present();
  }

  ngOnInit() {
  }

}
