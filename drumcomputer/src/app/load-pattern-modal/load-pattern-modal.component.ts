import { Component, OnInit } from '@angular/core';
import { SequencerService } from '../sequencer/sequencer.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
    private modalService: NgbModal,
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

  deleteAll(warning) {
    this.modalService.open(warning, { centered: true }).result.then((result) => {
      if(result=='delete') {
        this._appService.resetLocalStorage();
        this.updateList();
      }
    }, (reason) => {});
  }

  deleteSingle(warning, index: number) {
    this.modalService.open(warning, { centered: true }).result.then((result) => {
      if(result=='delete') {
        this._appService.delete(index);
        this.updateList();
      }
    }, (reason) => {});
  }
}
