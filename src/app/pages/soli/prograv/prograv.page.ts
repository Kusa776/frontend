import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetalleService } from 'src/app/services/detalle.service';
import { AlertController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-prograv',
  templateUrl: './prograv.page.html',
  styleUrls: ['./prograv.page.scss'],
})
export class ProgravPage implements OnInit{
  constructor(private detalleService: DetalleService, private router: Router, private alertController : AlertController, private sanitizer: DomSanitizer) { }
  
  ngOnInit() {
  }

  async agregarViaje(nombreViaje,precioViaje,descripcionViaje,horaSalida,cantidadPasajeros,imagen){
    const alert = await this.alertController.create({
      
      header:'Viaje Creado',
      buttons: [({
        text: "Ok",
        handler: () => {
          console.log(nombreViaje.value, precioViaje.value, descripcionViaje.value),
          this.detalleService.crearViaje(nombreViaje.value, precioViaje.value, descripcionViaje.value, horaSalida.value,cantidadPasajeros.values, imagen.append)
          .subscribe(
          (res) =>  this.router.navigate(['/soli']),
          (err) => console.log(err)

        );
        }
      })]
    
    });
    
    await alert.present()
    }

    public archivos: any =[];
    public previsualizacion: string;  

    capturarFile(event) {
      const archivoCapturado = event.target.files[0]
      this.blobFile(archivoCapturado).then((imagen: any) => {
        this.previsualizacion = imagen.base;
        console.log(imagen)
      })

      this.archivos.push(archivoCapturado);
    }
    blobFile = async ($event: any) => new Promise((resolve, reject) => {
      try {
        const unsafeImg = window.URL.createObjectURL($event);
        const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve({
            base: reader.result
          });
        };
        reader.onerror = error => {
          resolve({
            blob: $event,
            image,
            base: null
          });
        };
  
      } catch (e) {
        return null;
      }
    })

  }






