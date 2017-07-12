import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';


import { Travaux } from '../shared/model/travaux';
import { TravauxService } from '../shared/services/travaux.service';

import {envTravauxPipe} from '../shared/pipes/env-travaux.pipe';
import {sourceTravauxPipe} from '../shared/pipes/source-travaux.pipe';
import {sourceBouclePipe} from '../shared/pipes/source-boucle.pipe';



@Component({
	selector: 'travaux-article',
	templateUrl: './travaux-article.component.html',
	styleUrls: ['../../assets/css/devices.css'],
	providers: [TravauxService]
})

export class TravauxArticleComponent implements OnInit {

	travaux: Travaux;


	constructor(
		private travauxService: TravauxService,
		private route: ActivatedRoute) {}

	ngOnInit(): void{

		this.route.params
	      .switchMap((params: Params) => this.travauxService.getTravaux(+params['travaux']))
	      .subscribe(travaux => this.travaux = travaux);


	}
}