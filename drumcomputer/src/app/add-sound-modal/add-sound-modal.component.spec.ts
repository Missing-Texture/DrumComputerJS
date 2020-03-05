import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSoundModalComponent } from './add-sound-modal.component';

describe('AddSoundModalComponent', () => {
  let component: AddSoundModalComponent;
  let fixture: ComponentFixture<AddSoundModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSoundModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSoundModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
