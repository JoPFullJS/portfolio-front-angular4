import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Contact } from './contact';
//import { ContactService } from './contact.service';


@Component({
	selector: 'contact',
	templateUrl: './contact.component.html',
	styleUrls: ['../../assets/css/devices.css'],
	//providers: [ContactService]
})

export class ContactComponent {

	contact: Contact;

	constructor() {}

	envoyerMail(contactForm: NgForm) {
		console.log(contactForm.value);
	}

	
}