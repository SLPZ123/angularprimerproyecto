import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import {ConvertirBooleanoPipe}from './pipes/convertir-booleano.pipe';



@NgModule({
  declarations: [
    ConvertirBooleanoPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [ 
    MaterialModule,
    ReactiveFormsModule,
    ConvertirBooleanoPipe
  ]
})
export class SharedModule { }
