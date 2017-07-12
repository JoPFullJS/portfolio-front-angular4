import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Competence } from '../model/competence';
import { Domaine } from '../model/domaine';
import { Travaux } from '../model/travaux';

@Injectable()
export class TravauxService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private symfonyUrl = 'http://127.0.0.1:8000';

	constructor(private http: Http) {}


	getTravauxCompetence(id: number): Promise<Travaux[]> {

		const url = `${this.symfonyUrl}/competences/list/${id}`;
		return this.http.get(url)
				.toPromise()
				.then(response => response.json())
				.catch(this.handleError);
	}

	getTravauxDomaine(id: number): Promise<Travaux[]> {

		const url = `${this.symfonyUrl}/domaines/list/${id}`;
		return this.http.get(url)
				.toPromise()
				.then(response => response.json())
				.catch(this.handleError);
	}

	getTravaux(id: number): Promise<Travaux> {

		const url = `${this.symfonyUrl}/travaux/${id}`;
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
	
	getDomaine(id: number): Promise<Domaine> {

		const url = `${this.symfonyUrl}/domaine/${id}`;
		return this.http.get(url)
				.toPromise()
				.then(response => response.json())
				.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
	return Promise.reject(error.message || error);
	}
}