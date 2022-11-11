import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, map, combineLatest, of } from 'rxjs';
import { ClassesService } from 'src/app/features/classes/services/classes.service';
import { CoursesService } from 'src/app/features/courses/services/courses.service';
import { Alumno } from 'src/app/models/alumno';
import { Clases } from 'src/app/models/classes';
import { Curso } from 'src/app/models/curso';
import { Alumno } from '../../../../models/alumno';

@Component({
  selector: 'app-view-alumno',
  templateUrl: './view-alumno.component.html',
  styleUrls: ['./view-alumno.component.css']
})
export class ViewStudentComponent implements OnInit {

  clases$!: Observable<Clases[]>;
  clases!:Clases[];
  cursos$!: Observable<Curso[]>
  joinedCursos!:any;
  alumno!: Alumno;
  alumno$ !: Observable<Alumno[]>;
  joinedAlumno: any;
  id!:number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private claseService: ClasesService,
    private cursoService: CursoService,
  ) { 
    this.clases$ = this.claseService.obtener().pipe(
      map((item: Clases[]) => item.filter((item: Clases) => item.deleted ==false))
      );
    this.alumno = this.data.dataKey;
    this.cursos$ = this.cursoService.obtenerCursos();

  }

  ngOnInit(): void {
    this.crearClasesCursos();
    this.joinedAlumno= this.crearArregloAlumno().filter(item => item.idAlumno === this.alumno.idAlumno);
  }


  crearClasesCursos(){
    combineLatest([
      this.clases$,this.cursos$
    ]).subscribe(([arrayOne, arrayTwo]) => {
      this.joinedCursos = arrayOne.map(item => ({
        ...arrayTwo.find(t => t.id === item.idCourse),
        ...item
      }));
    });
  }

  crearArregloAlumno(){
    let clasesAlumno =[
      {
        idAlumno:0,
        idClase:0,
        nombreCurso:''
      }
    ];
    for(let i of this.joinedCursos){
      for(let x of i.idAlumno){
          clasesAlumno.push(
            {
              idAlumno: x,
              idClase: i.id,
              nombreCurso: i.nombre +' - ' + i.profesor
            }
            );
      }
    }
    return clasesAlumno;

  }

}
