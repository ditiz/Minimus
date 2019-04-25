import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

	city: string;

	constructor(
		public weather: WeatherService,
		public activeRouter: ActivatedRoute,
		public location: Location
	) {}

	ngOnInit() {
		this.activeRouter.paramMap.subscribe((route: any) => {
			this.city = route.params.city
		})
	}

	ngOnDestroy() {
		
	}

	goBack() {
		this.location.back()
	}
}