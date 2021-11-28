import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/services/registro.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
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

}
