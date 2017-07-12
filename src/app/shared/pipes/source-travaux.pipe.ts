import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ 
	name: 'sourceTravaux' 
})
export class sourceTravauxPipe implements PipeTransform {
  transform(value:string, separator:string):any {
    let splits = value.split("|");


    let sourceArr = new Object();
    let info = ["nom","lien"];
	 for (let i = 1; i <= splits.length; i++) {
	 	sourceArr[info[i-1]] = splits[i-1];
	 	
	 	if(i == 2){
	 		console.log(sourceArr);
	 		return sourceArr[separator];
	 	}
	 }
  }

}