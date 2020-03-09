import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { SequencerService } from './sequencer/sequencer.service';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  title = 'drumcomputer';
  @ViewChild("sequencerContainer", {read: ViewContainerRef}) container;
  
  constructor(    
    private _sequencerService: SequencerService,
    private _appService: AppService,
    ) { }
  
  ngAfterViewInit() {
    this._appService.container = this.container;
  }

  addSequencer() {
    this._appService.openAddSequencerModal();
  }

  reset() {
    this._appService.resetContainer();
  }

  switchPlaying() {
    this._sequencerService.switchPlaying();
  }

  changeBpm(i: number) {
    this._sequencerService.changeBpm(i);
  }

  changeVolume(i: number) {
    this._sequencerService.changeVolume(i);
  }

  savePattern() {
    this._appService.openSaveModal();
  }

  loadPattern() {
    this._appService.openLoadModal();
  }
}
