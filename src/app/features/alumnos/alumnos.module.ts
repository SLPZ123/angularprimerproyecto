import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnoInicioComponent } from './components/alumno-inicio/alumno-inicio.component';
import { alumnoComponent } from '../../features/alumnos';
import { FormularioAltaAlumnoComponent } from './components/formulario-alta-alumno/formulario-alta-alumno.component';
import {SharedModule}from 'src/app/shared/shared.module';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';



@NgModule({
  declarations: [
    AlumnoInicioComponent,
    alumnoComponent,
    FormularioAltaAlumnoComponent,
    EditarAlumnoComponent,

  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    SharedModule,
  ]
})
export class AlumnosModule { }