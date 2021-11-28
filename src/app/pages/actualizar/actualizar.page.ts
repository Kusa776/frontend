import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DetalleService } from 'src/app/services/detalle.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage implements OnInit {
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

modificarViaje(){
  this.detalleService.modificarViaje(this.detalles.id, {
    nombreViaje: this.detalles.nombreViaje,
    precioViaje: this.detalles.precioViaje,
    descripcionViaje: this.detalles.descripcionViaje,
    cantidadPasajeros: this.detalles.cantidadPasajeros,
    horaSalida: this.detalles.horaSalida
  }).subscribe(res => history.back())
}
}
