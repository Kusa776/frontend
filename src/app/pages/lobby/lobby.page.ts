import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/services/registro.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.page.html',
  styleUrls: ['./lobby.page.scss'],
})
export class LobbyPage implements OnInit {
  usuarios: any = [];
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private registroService: RegistroService, public alertController: AlertController) { }
  loadUsuario() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      this.registroService.getThisUsuario(paramMap.get('id'))
      .subscribe(res => {
        console.log(res);
        this.usuarios = res;

      },
      (err) => {
        console.log(err)
      });
  });

}
  ngOnInit() {
    this.loadUsuario();
  }

  async verificarRol(){
  if(this.usuarios.rol==false){this.router.navigate(['/prograv'])}else{const alert = await this.alertController.create({header: 'Falta de permisos',
  message: 'Usted como es pasajero, no puede crear viajes',
  buttons: ['Aceptar']})
  await alert.present()
  }
}

}
