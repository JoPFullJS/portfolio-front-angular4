import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Experiences } from './experiences';

@Injectable()
	export class ExperiencesService {

		private headers = new Headers({'Content-Type': 'application/json'});
		private symfonyUrl = 'http://127.0.0.1:8000';

		constructor(private http: Http) {}

		getExperiences(): Promise<Experiences[]> {

			const url = `${this.symfonyUrl}/experiences`;
			return this.http.get(url)
						.toPromise()
						.then(response => response.json())
						.catch(this.handleError);
		}


		private handleError(error: any): Promise<any> {
    	return Promise.reject(error.message || error);
  	}
}