import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamehomeComponent } from './gamehome.component';

describe('GamehomeComponent', () => {
  let component: GamehomeComponent;
  let fixture: ComponentFixture<GamehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
