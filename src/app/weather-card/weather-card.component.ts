import { Component, OnInit } from '@angular/core';
import { UiService } from '../ui.service';
import { WeatherService } from '../weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  darkModeActive: boolean;
  city: string;
  temp: number;
  minTemp: number;
  maxTemp: number;
  condition: string;

  constructor(
    public ui: UiService,
    public weather: WeatherService,
    public router: Router
  ) {}

  ngOnInit() {
    this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
    })

    this.weather.getCurrentWeather('Grenoble')
      .subscribe((weather: any) => {
        console.log(weather)
        this.city = weather.name;
        this.temp = Math.round(Number(weather.main.temp));
        this.minTemp = Math.round(Number(weather.main.temp_min));
        this.maxTemp = Math.round(Number(weather.main.temp_max));
        this.condition = weather.weather[0].main;
      });
  }

  openDetails() {
    this.router.navigateByUrl(`details/${this.city}`);
  }

}
