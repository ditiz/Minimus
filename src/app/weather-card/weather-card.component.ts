import { Component, OnInit } from '@angular/core';
import { UiService } from '../ui.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  darkModeActive: boolean;

  constructor(public ui: UiService) { }

  ngOnInit() {
    this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
    })
  }

}
