import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanATexto'
})
export class BooleanATextoPipe implements PipeTransform {

  transform(value: boolean, ...args: string[]): string {
    if(value){
      return args[0];
    }else{
    return args[1];}


  }

}
