import {Component,OnInit,ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import { viewport } from '@popperjs/core';
import {Observable,map} from 'rxjs';
import {Alumno} from 'src/app/models/alumno';
import {AlumnoService} from '../../servicios/alumno.service';
import {ViewAlumnoComponent} from '../view-alumno/ViewStudentComponent';


@Component

({
    selector:'app-list-alumno',
    templateUrl:'./list-alumno.component.html',
    styleUrls:['./list-alumno.component.css']
})
export class ListAlumnoComponent implements OnInit{

    @ViewChild(MatPaginator)
    paginator!:MatPaginator;
    alumno!:Alumno;
    alumno$!:Observable<Alumno>[];
    alumno!:Array<alumno>;
    suscripcion: Subscription;
    columnasAlumno: string[] = [
      'id',
      'dni',
      'nombreCompleto',
      'fechaNacimiento',
      'fechaAlta',
      'acciones',
    ];
    dataSourceAlumno: MatTableDataSource<Alumno>;

    constructor(
        private AlumnoService: AlumnoService,
        private router: Router,
        private dialog: MatDialog
      ) {
        this.Alumno$ = this.AlumnoService
          .obtenerAlumno()
          .pipe(
            map((cursos: Alumno[]) =>
              cursos.filter((curso: alumno) => curso.deleted == false)
            )
          );
        this.suscripcion = this.Alumno$.subscribe({
          next: (Alumno: Alumno[]) => {
            this.Alumno = Alumno;
          },
          error: (error) => {
            console.error(error);
          },
        });
        this.dataSourceAlumno = new MatTableDataSource<Alumno>(
          this.Alumno
        );
      }
    
      ngOnInit(): void {}
    
      ngOnDestroy(): void {
        this.suscripcion.unsubscribe();
      }
    
      ngAfterViewInit() {
        this.dataSourceAlumno.paginator = this.paginator;
      }
    
      eliminar(id: number) {
        if (confirm('Esta seguro de eliminar el elemento id: ' + id)) {
          this.Alumnoervice.eliminarAlumno(id);
        }
        this.dataSourceAlumno = new MatTableDataSource<alumno>(
          this.Alumno
        );
      }
      editar(id: number) {
        this.router.navigate(['features/Alumno/edit', { id: id }]);
      }
      consultar(id: number) {
        this.alumno =
          this.Alumno[
            this.Alumno.findIndex((alumno) => alumno.idAlumno == id)
          ];
        let dialog = this.dialog.open(ViewAlumnoComponent, {
          width: '40%',
          height: '40%',
          data: {
            dataKey: this.alumno,
          },
        });
      }
    }
    
