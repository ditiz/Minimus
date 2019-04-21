import { Component, OnInit } from '@angular/core';
import { UiService } from '../ui.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {

  darkModeActive: boolean;

  constructor(public ui: UiService) { }

  ngOnInit() {
    this.ui.darkModeState.subscribe(value => this.darkModeActive = value)
  }

}
