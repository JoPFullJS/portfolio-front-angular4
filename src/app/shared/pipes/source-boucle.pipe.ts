import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ 
	name: 'sourceBoucle' 
})
export class sourceBouclePipe implements PipeTransform {
  transform(value:string, separator:string):any {
    let splits = value.split(separator);
    if(splits.length == 0) {
      return value;
    } else {
      return splits;
    }
  }
}