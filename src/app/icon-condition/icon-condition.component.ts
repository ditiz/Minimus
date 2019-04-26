import { Component, OnInit } from '@angular/core';
import { UiService } from '../ui.service';

@Component({
  selector: 'app-icon-condition',
  templateUrl: './icon-condition.component.html',
  styleUrls: ['./icon-condition.component.scss']
})
export class IconConditionComponent implements OnInit {

  condition: string

  constructor(
    public ui: UiService
  ) { }

  ngOnInit() {
    this.ui.weatherCondition.subscribe(condition => {
      this.condition = condition
    })
  }

}
