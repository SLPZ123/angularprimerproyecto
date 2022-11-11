import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { classes } from 'src/app/models/classes';
import { Curso } from 'src/app/models/curso';
import { AlumnoService } from '../../../alumnos/servicios/alumno.service';
import { ClassesService } from '../../services/classes.service';
import { Alumno } from '../../../../models/alumno';
import { combineLatest, map, Observable, of } from 'rxjs';
import { CoursesService } from 'src/app/features/courses/services/courses.service';

@Component({
  selector: 'app-add-student-class',
  templateUrl: './add-student-class.component.html',
  styleUrls: ['./add-student-class.component.css']
})
export class AddStudentClassComponent implements OnInit {

  clases$!: Observable<classes[]>;
  suscripcion: any;
  alumnos$ !: Observable<Alumno[]>;
  id:number;
  nombreCurso:string;

  constructor(
    private claseService: ClassesService,
    private alumnoService: AlumnoService,
    private router: Router,
    private _Activatedroute:ActivatedRoute,
  ) { 
    this.id= Number(this._Activatedroute.snapshot.paramMap.get("id"));
    this.nombreCurso= String(this._Activatedroute.snapshot.paramMap.get("curso"));

    this.alumnos$ = alumnoService.obtenerAlumno().pipe(
      map((item: Alumno[]) => item.filter((item: Alumno) => item.deleted ==false))
      );


  }

  ngOnInit(): void {
  }

agregar(id:number){
  this.claseService.agregarAlumno(id, this.id);
  this.router.navigate(['features/clases'])

}


}
