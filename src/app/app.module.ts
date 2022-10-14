import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FormularioComponent } from './component/demo-formulario/demo-form.component';
import { DemoTableComponent } from './component/demo-table/demo-table.component';
import { DemoCardComponent } from './component/demo-card/demo-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { BooleanATextoPipe } from './pipes/boolean-a-texto.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

    FormularioComponent,
    DemoTableComponent,
    DemoCardComponent,
    BooleanATextoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
