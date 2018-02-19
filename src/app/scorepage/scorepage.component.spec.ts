import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorepageComponent } from './scorepage.component';

describe('ScorepageComponent', () => {
  let component: ScorepageComponent;
  let fixture: ComponentFixture<ScorepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScorepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
