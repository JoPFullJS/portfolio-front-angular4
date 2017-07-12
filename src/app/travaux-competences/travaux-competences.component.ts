import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }               from '@angular/common';

import { Competence } from '../shared/model/competence';
import { Domaine } from '../shared/model/domaine';
import { TravauxService } from '../shared/services/travaux.service';

import { TravauxListCompetencesComponent } from '../travaux-list-competences/travaux-list-competences.component';


@Component({
	selector: 'travaux-competences',
	templateUrl: './travaux-competences.component.html',
	styleUrls: ['../../assets/css/devices.css'],
	providers: [TravauxService]
})

export class TravauxCompetencesComponent implements OnInit {

	competences: Competence;
	categories: Domaine;

	constructor(
		private travauxService: TravauxService,
		private route: ActivatedRoute,
		private router: Router,
    	private location: Location) {}

	updateOption(event: Event){

		if((Number(event) ? "number" : "string") == "number"){

			this.router.navigate(['/travaux/'+ this.categories.id, event]);
		}
		else{

			console.log("C'est un domaine !");
		}

	}
	
	ngOnInit(): void{

		this.route.params
	      .switchMap((params: Params) => this.travauxService.getDomaine(+params['categorie']))
	      .subscribe(categories => this.categories = categories);

		this.route.params
			      .switchMap((params: Params) => this.travauxService.getCompetence(+params['competence']))
			      .subscribe(competences => this.competences = competences);
	}
}