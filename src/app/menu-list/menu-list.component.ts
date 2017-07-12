import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'menu-list',
	templateUrl: './menu-list.component.html',
	styleUrls: ['../../assets/css/devices.css']
})
export class MenuListComponent implements OnInit {

	selectedPresentation: boolean;
	selectedTravaux: boolean;
	selectedSocial: boolean;


	togglePresentation(): void {

		this.selectedTravaux = false;
		this.selectedSocial = false;

		if(this.selectedPresentation)
		{
			this.selectedPresentation = false;
		}
		else{
			this.selectedPresentation = true;
		}
		
	}

	toggleTravaux(): void {

		this.selectedPresentation = false;
		this.selectedSocial = false;

		if(this.selectedTravaux)
		{
			this.selectedTravaux = false;
		}
		else{
			this.selectedTravaux = true;
		}
		
	}

	toggleSocial(): void {

		this.selectedTravaux = false;
		this.selectedPresentation = false;

		if(this.selectedSocial)
		{
			this.selectedSocial = false;
		}
		else{
			this.selectedSocial = true;
		}
	}

	ngOnInit():void {
		this.selectedPresentation = false;
		this.selectedTravaux = false;
		this.selectedSocial = false;
	}

}