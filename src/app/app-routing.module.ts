import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio-s',
    loadChildren: () => import('./pages/inicio-s/inicio-s.module').then( m => m.InicioSPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'contra-r',
    loadChildren: () => import('./pages/contra-r/contra-r.module').then( m => m.ContraRPageModule)
  },
  {
    path: 'lobby',
    children: [{
      path: ':id',
      loadChildren: () => import('./pages/lobby/lobby.module').then( m => m.LobbyPageModule)
    }]
    
  },
  {
    path: 'perfil',
    children: [{
      path: ':id',
      loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
    }]

  },
  {
    path: 'prograv',
    loadChildren: () => import('./pages/soli/prograv/prograv.module').then( m => m.ProgravPageModule)
  },
  {
    path: 'soli',
    children: [{
      path :'',
      loadChildren: () => import('./pages/soli/soli.module').then( m => m.SoliPageModule)
    },
    {
      path: ':id',
      loadChildren: () => import('./pages/soli/detalle-viaje/detalle-viaje.module').then( m => m.DetalleViajePageModule)
    }

    ]

  },
  {
    path: 'actualizar',
    children: [{
      path: ':id',
      loadChildren: () => import('./pages/actualizar/actualizar.module').then( m => m.ActualizarPageModule)
    }]
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
