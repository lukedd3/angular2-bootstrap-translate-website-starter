import { Component, OnInit } from '@angular/core';

import { FirstComponentService } from './service/first-component.service';

@Component({
	moduleId: module.id,
	selector: 'first-component',
	templateUrl: 'first.component.html'
})

export class FirstComponent implements OnInit{

	constructor(private firstComponentService: FirstComponentService) { }

	ngOnInit(): void {
		
	}

}