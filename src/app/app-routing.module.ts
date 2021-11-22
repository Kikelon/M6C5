import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosDiscoComponent } from './pages/datos-disco/datos-disco.component';
import { FormularioDiscoComponent } from './pages/formulario-disco/formulario-disco.component';
import { VistaDiscoComponent } from './pages/vista-disco/vista-disco.component';

const routes: Routes = [
  {path : "", redirectTo: "/vista", pathMatch:"full"},
  {path: "formulario", component: FormularioDiscoComponent},
  {path: "vista", component: VistaDiscoComponent},
  {path: "data", component: DatosDiscoComponent},
  {path: '**', redirectTo: "/vista", pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
