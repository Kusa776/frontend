import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder

} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contra-r',
  templateUrl: './contra-r.page.html',
  styleUrls: ['./contra-r.page.scss'],
})
export class ContraRPage implements OnInit {

  formularioRec : FormGroup;

  constructor(public fb: FormBuilder,
    public alertControler: AlertController) {

      this.formularioRec = this.fb.group({

        'uss': new FormControl("",Validators.required),
        'password': new FormControl("",Validators.required)
      })
    }

  ngOnInit() {
  }


  async ingresar(){
    var f = this.formularioRec.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre == f.uss && usuario.password == f.password){
      console.log('Ingresado');

    }else{
      const alert = await this.alertControler.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos.',
        buttons: ['Aceptar']
      });
  
      await alert.present();
    }
  }
}
