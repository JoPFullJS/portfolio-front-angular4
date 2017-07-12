import { Component, OnInit } from '@angular/core';

import { Competence } from '../shared/model/competence';
import { CompetencesService } from './competences.service';


@Component({
	selector: 'competences',
	templateUrl: './competences.component.html',
	styleUrls: ['../../assets/css/devices.css'],
	providers: [CompetencesService]
})

export class CompetencesComponent implements OnInit {

	competences: Competence[];

	constructor(
		private competencesService: CompetencesService) {}

	getCompetences(): void {
			this.competencesService
				.getCompetences()
				.then(competences => this.competences = competences);
	}

	ngOnInit(): void{
		this.getCompetences();	
	}
}