import { Component, OnInit } from '@angular/core';
import { UiService } from '../ui.service';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  darkModeActive: boolean;
  temp: number;

  constructor(
    public ui: UiService,
    public weather: WeatherService
  ) {}

  ngOnInit() {
    this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
    })

    this.weather.getCurrentTemp('Paris')
      .subscribe((temp: number) => {
        this.temp = temp;
      });
  }

}
