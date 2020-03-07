import { Injectable, ViewContainerRef } from '@angular/core';
import { SequencerService } from './sequencer/sequencer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddSoundModalComponent } from './add-sound-modal/add-sound-modal.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  idCounter:number = 0;
  container: ViewContainerRef;
  
  constructor(
    private _sequencerService: SequencerService,
    private modalService: NgbModal,) { }

  addSequencer(container: ViewContainerRef) {
    // Quickfix to get Container ref
    this.container = container;

    const modalRef = this.modalService.open(AddSoundModalComponent);
    modalRef.componentInstance.container = this.container;
    modalRef.componentInstance.idCounter = this.idCounter;
    //increment Counter only if the Modal was closed with 'Continue' button
    modalRef.result.then((result) => {if (result == 'continue') this.idCounter++;}, () => { });
  }

  resetContainer() {
    this._sequencerService.sounds = [];
    this._sequencerService.states = [];
    this._sequencerService.stopPlaying();
    this.idCounter = 0;
    this.container.clear();
  }
}
