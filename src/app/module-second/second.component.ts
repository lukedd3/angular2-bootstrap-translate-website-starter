import { Component, OnInit } from '@angular/core';

import { SecondComponentService } from './service/second-component.service';


@Component({
	moduleId: module.id,
	selector: 'second-component',
	templateUrl: 'second.component.html'
})

export class SecondComponent {

	constructor(private secondComponentService: SecondComponentService) { }

	ngOnInit(): void {

	}

}