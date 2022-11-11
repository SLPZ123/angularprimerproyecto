import { Alumno } from './alumno';

export interface classes{
    id:number
    idCourse:number;
    idStudent : number[];
    Inicio : Date;
    fin:Date;
    deleted:boolean;
    available:boolean;
}