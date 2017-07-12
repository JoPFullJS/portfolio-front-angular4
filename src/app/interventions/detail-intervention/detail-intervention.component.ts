import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Intervention } from '../intervention';
import { InterventionService } from '../intervention.service';

@Component({
	selector: 'detail-intervention',
	templateUrl: './detail-intervention.component.html',
	styleUrls: ['../../../assets/css/devices.css'],
	providers: [InterventionService]
})

export class DetailInterventionComponent implements OnInit {

	intervention: Intervention;

	constructor(
		private interventionService: InterventionService,
		private route: ActivatedRoute) {}


	ngOnInit(): void {
	    this.route.params
	      .switchMap((params: Params) => this.interventionService.getIntervention(+params['id']))
	      .subscribe(intervention => this.intervention = intervention);
  	}

}