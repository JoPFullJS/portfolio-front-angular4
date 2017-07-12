import { Component, OnInit } from '@angular/core';

import { Experiences } from './experiences';
import { ExperiencesService } from './experiences.service';


@Component({
	selector: 'experiences',
	templateUrl: './experiences.component.html',
	styleUrls: ['../../assets/css/devices.css'],
	providers: [ExperiencesService]
})

export class ExperiencesComponent implements OnInit {

	experiences: Experiences[];

	constructor(
		private experiencesService: ExperiencesService) {}

	getExperiences(): void {
			this.experiencesService
				.getExperiences()
				.then(experiences => this.experiences = experiences);
	}

	ngOnInit(): void{
		this.getExperiences();	
	}
}