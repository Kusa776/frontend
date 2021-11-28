import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/services/registro.service';
import { AlertController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio-s',
  templateUrl: './inicio-s.page.html',
  styleUrls: ['./inicio-s.page.scss'],
})
export class InicioSPage implements OnInit {
  usuarios: any = [];
  constructor(private registroService: RegistroService, private router: Router, public alertController : AlertController, private sanitizer: DomSanitizer) { }
  ngOnInit() {
    this.loadViajes();
  }
  loadViajes(){
    this.registroService.getAllUsuario().subscribe( (res) => {
      console.log(res);
      this.usuarios = res;
  },
  
  (err) => {
      console.log(err)

  });
  }

  async ingresar(nombreUsuario, contrasena){
    if(nombreUsuario.value == [] || contrasena.value == []){const alert = await this.alertController.create({header: 'Formulario Vacio',
    message: 'Por favor ingrese sus datos',
    buttons: ['OK']})
    await alert.present();}else{
      for(let ai of this.usuarios){
    
      if(nombreUsuario.value == ai.nombreUsuario){
      
      if(contrasena.value == ai.contrasena){
        this.router.navigate(['/lobby', ai.id])
      }else{const alert = await this.alertController.create({header: 'Datos incorrectos',
      message: 'Los datos que ingresaste son incorrectos.',
      buttons: ['Aceptar']})
      await alert.present();}
      }else{}
    }}


    }
}