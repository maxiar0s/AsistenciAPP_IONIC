import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-qrpage',
  templateUrl: './qrpage.page.html',
  styleUrls: ['./qrpage.page.scss'],
})
export class QrpagePage implements OnInit {
  qrCodeString= 'Hola Mundo'; 
  scannedResult:any;

  constructor(private alertController: AlertController, 
    private menuController: MenuController) { }

  usuario={
    nombre:'',
  }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open();
  }

  generaScan(){
    this.qrCodeString= this.usuario.nombre;
  }

  verScan(){
    this.scannedResult=this.qrCodeString;
  }

}
  

