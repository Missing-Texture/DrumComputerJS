import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { SequencerService } from './sequencer/sequencer.service';
import { AddSoundModalComponent } from './add-sound-modal/add-sound-modal.component'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'drumcomputer';
  @ViewChild("sequencerContainer", {read: ViewContainerRef}) container;
  idCounter:number = 0;
  
  constructor(    
    private _sequencerService: SequencerService,
    private modalService: NgbModal) {}

  addSequencer() {
    const modalRef = this.modalService.open(AddSoundModalComponent);
    modalRef.componentInstance.container = this.container;
    modalRef.componentInstance.idCounter = this.idCounter;
    this.idCounter++;
  }
}
