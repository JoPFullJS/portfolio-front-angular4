import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ 
	name: 'envTravaux' 
})
export class envTravauxPipe implements PipeTransform {
  transform(value:string, separator:string):any {
    let splits = value.split(separator);
    if(splits.length > 1) {
      return splits;
    } else {
      return value;
    }
  }
}