import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePatternModalComponent } from './save-pattern-modal.component';

describe('SavePatternModalComponent', () => {
  let component: SavePatternModalComponent;
  let fixture: ComponentFixture<SavePatternModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavePatternModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavePatternModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
