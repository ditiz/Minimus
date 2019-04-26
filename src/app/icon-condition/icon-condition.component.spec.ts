import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconConditionComponent } from './icon-condition.component';

describe('IconConditionComponent', () => {
  let component: IconConditionComponent;
  let fixture: ComponentFixture<IconConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
