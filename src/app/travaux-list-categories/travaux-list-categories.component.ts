import { Component, OnInit, Input } from '@angular/core';

import { Travaux } from '../shared/model/travaux';
import { TravauxService } from '../shared/services/travaux.service';


@Component({
	selector: 'travaux-domaine',
	templateUrl: '../shared/templates/travaux-list.component.html',
	styleUrls: ['../../assets/css/devices.css'],
	providers: [TravauxService]
})

export class TravauxListCategoriesComponent implements OnInit {

	@Input() nomDomaine : number;

	travaux : Travaux[];

	constructor(
		private travauxService: TravauxService) {}

	

	getTravauxDomaine(): void {
		this.travauxService
			.getTravauxDomaine(this.nomDomaine)
			.then(travaux => this.travaux = travaux);
	}

	ngOnInit(): void{
		this.getTravauxDomaine();	
	}
}