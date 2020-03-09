import { TestBed } from '@angular/core/testing';

import { AddSoundModalService } from './add-sound-modal.service';

describe('AddSoundModalService', () => {
  let service: AddSoundModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddSoundModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
