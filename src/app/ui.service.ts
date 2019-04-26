import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UiService {

  darkModeState: BehaviorSubject<boolean>
  weatherCondition: BehaviorSubject<string>

  constructor() {
    this.darkModeState = new BehaviorSubject<boolean>(true)
    this.weatherCondition = new BehaviorSubject<string>('')
  }
}