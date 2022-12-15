import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-asist',
  templateUrl: './asist.page.html',
  styleUrls: ['./asist.page.scss'],
})
export class AsistPage implements OnInit {

  constructor(private alertController: AlertController,
    private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  async Guardar() {
    const alert = await this.alertController.create({
      header: 'Asistencia',
      message: 'La asistencia se ha guardado',
      buttons: ['OK'],
    });
    await alert.present();
  }

}
