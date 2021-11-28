import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { DetalleViajePage } from './detalle-viaje/detalle-viaje.page';
import { DetalleService } from 'src/app/services/detalle.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-soli',
  templateUrl: './soli.page.html',
  styleUrls: ['./soli.page.scss'],
})
export class SoliPage implements OnInit{
  detalles: any = [];
  constructor(private DetalleService: DetalleService, private alertController : AlertController) { }


  loadViajes(){
    this.DetalleService.getAll().subscribe( (res) => {
      console.log(res);
      this.detalles = res;
  },
  
  (err) => {
      console.log(err)

  });

  }

  ngOnInit() {
    this.loadViajes();
  }

  ionViewWillEnter(){
    this.loadViajes();
  }
  
  async eliminarViaje(id){
    const alert = await this.alertController.create({

      header:'Eliminar',
      message:'¿Estas seguro de eliminar este viaje?',
      buttons: [({
        text: "Si",
        handler: () => {
          console.log(id)
          this.DetalleService.eliminarViaje(id).subscribe(res => this.loadViajes(), err => console.log(err));
        }
      }), 'No']

    });
    
    await alert.present()
  }
}
