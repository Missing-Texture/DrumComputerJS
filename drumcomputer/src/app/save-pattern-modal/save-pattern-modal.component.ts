import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SequencerService } from '../sequencer/sequencer.service';

@Component({
  selector: 'app-save-pattern-modal',
  templateUrl: './save-pattern-modal.component.html',
  styleUrls: ['./save-pattern-modal.component.scss']
})
export class SavePatternModalComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal,
    private _sequencerService: SequencerService,
  ) { }

  ngOnInit(): void {
  }

  save(name: String) {
    this._sequencerService.savePattern(name);
    this.activeModal.close('Close click');
  }

}
