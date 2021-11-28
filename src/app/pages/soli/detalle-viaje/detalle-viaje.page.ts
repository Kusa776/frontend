import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DetalleService } from 'src/app/services/detalle.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-detalle-viaje',
  templateUrl: './detalle-viaje.page.html',
  styleUrls: ['./detalle-viaje.page.scss'],
})
export class DetalleViajePage implements OnInit {
  detalles: any = [];
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private detalleService: DetalleService, public alertController: AlertController){}

  loadViaje() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      this.detalleService.getThis(paramMap.get('id'))
      .subscribe(res => {
        console.log(res);
        this.detalles = res;

      },
      (err) => {
        console.log(err)
      });
  });

}

ngOnInit() {
  this.loadViaje();
}

async notificacion() {
  const alert = await this.alertController.create({
    header: 'Viaje',
    message: 'Su viaje ha sido confirmado, se le enviara un correo ¡Buen Viaje!',
      buttons: [({
        text: "Ok",
        handler: () => {
          this.router.navigate(['/home'])
        }
      })]
  });

  await alert.present();

  const { role } = await alert.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}


}