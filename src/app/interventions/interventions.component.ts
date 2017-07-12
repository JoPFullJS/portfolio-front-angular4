import { Component, OnInit } from '@angular/core';

import { Intervention } from './intervention';
import { InterventionService } from './intervention.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
	selector: 'interventions',
	templateUrl: './interventions.component.html',
	styleUrls: ['../../assets/css/devices.css']
})

export class InterventionsComponent implements OnInit {

	interventions: Intervention[];

	constructor(
		private interventionService: InterventionService) {}

	getInterventions(): void {
		this.interventionService
			.getInterventions()
			.then(interventions => this.interventions = interventions);
	}

	ngOnInit(): void{
		this.getInterventions();	
	}
}