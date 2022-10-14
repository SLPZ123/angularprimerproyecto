import { Component, OnInit } from '@angular/core';
import{MatTableDataSource} from '@angular/material/table';
import {Curso} from 'src/app/models/curso';


@Component({
  selector: 'app-demo-table',
  templateUrl: './demo-table.component.html',
  styleUrls: ['./demo-table.component.css']
})
export class DemoTableComponent implements OnInit {
curso: Curso[]=[
        {
        nombre:'Angular',
        comision:'2540',
        profesor:'Raul',
        fechaInicio:new Date(2022,4,1),
        fechaFin:new Date(2022,6,4),
        inscripcionAbierta:true,
        imagen:'https://1.bp.blogspot.com/-eVbKY-14NcU/WSyPXeC4abI/AAAAAAAAAlM/zVASB-GG5809WuxtHs0vyy8SN2ZBOJ6aQCLcB/s1600/logo_v2.png'
        },
        {
        nombre:'Desarrollo Web',
        comision:'2541',
        profesor:'Lorenzo',
        fechaInicio:new Date(2022,1,1),
        fechaFin:new Date(2022,3,4),
        inscripcionAbierta:false,
        imagen:'https://www.mediaroomsolutions.es/wp-content/uploads/2018/12/desarrollo-y-dise%C3%B1o-web_00-1024x675.jpg'
        },
        {
        nombre:'Javascript',
        comision:'2542',
        profesor:'Eduardo',
        fechaInicio:new Date(2022,6,1),
        fechaFin:new Date(2022,8,4),
        inscripcionAbierta:false,
        imagen:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
},
];
columnas:string[]=[
  'nombre','comision','profesor','fechaInicio','fechaFin','inscripcionAbierta','accion'
]
dataSource:MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.curso);

  constructor() { }

  ngOnInit(): void {
  }
  filtrarCurso(){

  }
filtrarComision(){

}
}
