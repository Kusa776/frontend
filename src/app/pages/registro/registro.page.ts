import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/services/registro.service';
import { AlertController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  constructor(private registroService: RegistroService, private router: Router, private alertController : AlertController, private sanitizer: DomSanitizer) { }
  usuarios: any = [];
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
  async agregarUsuario(nombreUsuario, nombre, apellido, contrasena, rol){
    if(nombreUsuario.value == [] || contrasena.value == [] || apellido.value == [] || contrasena == [] || rol.value == []){
      const alert = await this.alertController.create({header: 'Formulario Vacio',
    message: 'Por favor ingrese sus datos',
    buttons: ['OK']})
    await alert.present();
    }else{for(let ai of this.usuarios){
      if(nombreUsuario.value == ai.nombreUsuario){
        const alert = await this.alertController.create({header: 'Nombre de usuario no disponible',
        message: 'El nombre de usuario ya esta ocupado, elija otro.',
        buttons: ['OK']})
        await alert.present();
      }else{const alert = await this.alertController.create({
        header:'Registro exitoso',
        buttons:[({
          text: "Ok",
          handler: () =>{
            console.log(nombreUsuario.value,contrasena.value,rol.value),
            this.registroService.crearUsuario(nombreUsuario.value, nombre.value, apellido.value, contrasena.value,rol.value)
            .subscribe(
              (res) => this.router.navigate(['/inicio-s']),
              (err) => console.log(err)
            );
          }
        })]
      }); await alert.present()}
    }}
    }
  

}




