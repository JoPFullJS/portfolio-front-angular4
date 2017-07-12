import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';


import { Domaine } from '../shared/model/domaine';
import { TravauxService } from '../shared/services/travaux.service';

import { TravauxListCategoriesComponent } from '../travaux-list-categories/travaux-list-categories.component';


@Component({
	selector: 'travaux-categorie',
	templateUrl: './travaux-categories.component.html',
	styleUrls: ['../../assets/css/devices.css'],
	providers: [TravauxService]
})

export class TravauxCategoriesComponent implements OnInit {

	categories: Domaine;


	constructor(
		private travauxService: TravauxService,
		private route: ActivatedRoute,
		private router: Router) {}

	

	updateOption(event: Event){

		if((Number(event) ? true : false)){

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

	   	
	}
}