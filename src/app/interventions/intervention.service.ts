import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Intervention } from './intervention';

@Injectable()
	export class InterventionService {

		private headers = new Headers({'Content-Type': 'application/json'});
		private symfonyUrl = 'http://127.0.0.1:8000';

		constructor(private http: Http) {}

		getInterventions(): Promise<Intervention[]> {

			const url = `${this.symfonyUrl}/interventions`;
			return this.http.get(url)
									.toPromise()
									.then(response => response.json())
									.catch(this.handleError);
		}

		getIntervention(id: number): Promise<Intervention> {
	    const url = `${this.symfonyUrl}/interventions/${id}`;
	    return this.http.get(url)
	      .toPromise()
	      .then(response => response.json())
	      .catch(this.handleError);
  	}

		private handleError(error: any): Promise<any> {
    	return Promise.reject(error.message || error);
  	}
}