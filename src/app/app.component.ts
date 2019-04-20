import { Component, OnInit } from '@angular/core';
import { UiService } from './ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Minimus';

  showMenu = false;
  darkModeActive: boolean;
  
  constructor(public ui: UiService) { }

  ngOnInit() {
    this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
    })
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
