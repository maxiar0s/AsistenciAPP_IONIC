import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../service/registroservice.service';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  usuarios : Usuario[] = [];

  constructor(private alertController: AlertController, 
              private navController: NavController,
              private registroService: RegistroserviceService, 
              private fb: FormBuilder) { 
                this.formularioLogin = this.fb.group({ 
                  'nombre' : new FormControl("", Validators.required),
                  'correo' : new FormControl("", Validators.required),
                  'password' : new FormControl ("", Validators.required)             
                })
              }

  ngOnInit() {
  }
  usuario = {
    nombre:'',
    email: '',
    password:''
  }
  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }
  async Ingresar(){
    var f = this.formularioLogin.value;
    var a = 0;
    this.registroService.getUsuarios().then(datos=>{
      this.usuarios=datos;
      if (datos.length==0)
      {
          return null;
      }

      for (let obj of this.usuarios){
        if (obj.correoUsuario == f.correo && obj.passUsuario==f.password){
            a=1;
            console.log('ingresado');
            localStorage.setItem('ingresado', 'true');
            this.navController.navigateRoot('inicio');
        }
      }
    console.log(a);
    if (a==0){
      this.alertMsg();
    }
  });   
 }

  async alertMsg(){
    const alert = await this.alertController.create({
      header: 'Error...',
      message: 'Los datos ingresados son incorrectos',
      buttons: ['Aceptar']
    })
    await alert.present();
    return;
  }

}
