import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreanimateComponent } from './scoreanimate.component';

describe('ScoreanimateComponent', () => {
  let component: ScoreanimateComponent;
  let fixture: ComponentFixture<ScoreanimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreanimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreanimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
