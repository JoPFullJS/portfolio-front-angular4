import { Component, OnInit, Input } from '@angular/core';

import { Travaux } from '../shared/model/travaux';
import { TravauxService } from '../shared/services/travaux.service';


@Component({
	selector: 'travaux-list-competence',
	templateUrl: '../shared/templates/travaux-list.component.html',
	styleUrls: ['../../assets/css/devices.css'],
	providers: [TravauxService]
})

export class TravauxListCompetencesComponent implements OnInit {

	@Input() idCompetence : number;

	travaux : Travaux[];

	constructor(
		private travauxService: TravauxService) {}

	

	getTravauxCompetence(): void {
		this.travauxService
			.getTravauxCompetence(this.idCompetence)
			.then(travaux => this.travaux = travaux);
	}

	ngOnInit(): void{
		this.getTravauxCompetence();	
	}
}