import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Competence } from '../shared/model/competence';

@Injectable()
	export class CompetencesService {

		private headers = new Headers({'Content-Type': 'application/json'});
		private symfonyUrl = 'http://127.0.0.1:8000';

		constructor(private http: Http) {}

		getCompetences(): Promise<Competence[]> {

			const url = `${this.symfonyUrl}/competences`;
			return this.http.get(url)
						.toPromise()
						.then(response => response.json())
						.catch(this.handleError);
		}

		getCompetence(id: number): Promise<Competence> {

			const url = `${this.symfonyUrl}/competences/${id}`;
			return this.http.get(url)
						.toPromise()
						.then(response => response.json())
						.catch(this.handleError);
		}


		private handleError(error: any): Promise<any> {
    	return Promise.reject(error.message || error);
  	}
}