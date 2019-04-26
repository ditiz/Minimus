import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { UiService } from '../ui.service';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

	city: string;
	currentTemp: number;
	minTemp: number;
	maxTemp: number;
	condition: string;
	pctHumidity: number;
	wind: number;

	darkModeActive: boolean;

	constructor(
		public weather: WeatherService,
		public activeRouter: ActivatedRoute,
		public location: Location,
		public ui: UiService
	) {}

	ngOnInit() {
		this.darkModeActive = true;

		this.ui.darkModeState.subscribe(darkMode => {
			this.darkModeActive = darkMode
		})

		this.activeRouter.paramMap.subscribe((route: any) => {
			this.city = route.params.city

			this.weather.getCurrentWeather(this.city).subscribe((weather: any) => {
				console.log(weather)
				//set temperature value
				this.currentTemp = Math.round(Number(weather.main.temp))
				this.minTemp = Math.round(Number(weather.main.temp_min))
				this.maxTemp = Math.round(Number(weather.main.temp_max))
				//set weather condition 
				this.condition = weather.weather[0].main
				this.ui.weatherCondition.next(this.condition)
				//set humidity
				this.pctHumidity = weather.main.humidity
				//set wind speed
				this.wind = weather.wind.speed
				
			})
		})
	}

	ngOnDestroy() {

	}

	goBack() {
		this.location.back()
	}
}