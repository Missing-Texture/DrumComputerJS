import { Component, OnInit } from '@angular/core';
import { SequencerService } from '../sequencer/sequencer.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from '../app.service';

@Component({
  selector: 'app-load-pattern-modal',
  templateUrl: './load-pattern-modal.component.html',
  styleUrls: ['./load-pattern-modal.component.scss']
})
export class LoadPatternModalComponent implements OnInit {

  patternList: Object[] = [];

  constructor(
    public activeModal: NgbActiveModal,
    private _appService: AppService,
  ) {
    this._appService.loadFromStorage();
    this.updateList();
  }

  ngOnInit(): void {
  }

  updateList() {
    this.patternList = this._appService.patternList;
  }

  load(index: number) {
    this._appService.loadPattern(index);
    this.activeModal.close('Close click');
  }

  delete() {
    this._appService.resetLocalStorage();
    this.updateList();
  }
}
