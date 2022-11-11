import {NgModule} from '@angular/core';
import{RouterModule, Routes} from '@angular/router';


const rutas:Routes = [
    { path:'',children:[
{path:'coursesModule',loadChildren:()=> import('./courses/courses.module').then(m=>m.CoursesModule)},
{path:'Alumnos',loadChildren:()=> import('./alumnos/alumno.module').then(m=>m.alumnoModule)},
{path:'classes',loadChildren:()=> import('./classes/classes.module').then(m=>m.ClassesModule)}

    ]}
];
@NgModule(
{
    imports:[RouterModule.forChild(rutas)],
    exports:[RouterModule]
 })
export  class FeaturesRoutingModule { }
