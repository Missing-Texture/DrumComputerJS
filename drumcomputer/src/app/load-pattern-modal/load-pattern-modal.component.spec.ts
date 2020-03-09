import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadPatternModalComponent } from './load-pattern-modal.component';

describe('LoadPatternModalComponent', () => {
  let component: LoadPatternModalComponent;
  let fixture: ComponentFixture<LoadPatternModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadPatternModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadPatternModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
