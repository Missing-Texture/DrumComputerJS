import { Component, OnInit, Input } from '@angular/core';
import { SequencerService } from './sequencer.service';

@Component({
  selector: 'app-sequencer',
  templateUrl: './sequencer.component.html',
  styleUrls: ['./sequencer.component.scss']
})
export class SequencerComponent implements OnInit {

  curState: boolean[] = [
    false, false, false, false,
    false, false, false, false,
    false, false, false, false,
    false, false, false, false];

  curMute:boolean = false;

  constructor(
    private _sequencerService: SequencerService,) { }

  @Input() id: number;
  @Input() type: string;
  @Input() parentContainerRef: any;

  ngOnInit(): void {
  }

  activateCell(id: number, i: number) {
    this._sequencerService.activateCell(id,i);
    // flip State in component for html 
    this.curState[i] = !this.curState[i];
  }

  removeSpecificComponent() {
    this.parentContainerRef.remove(this.id);
    //set corresponding sound and state to null and use new ids for new SequencerComponents
    this._sequencerService.sounds[this.id] = null;
    this._sequencerService.states[this.id] = null;
  }

  changeVolume(vol:number) {
    this._sequencerService.changeVolumeIndividual(this.id, vol);
  }

  mute() {
    this.curMute = !this.curMute;
    this._sequencerService.changeMuteIndividual(this.id);
  }
}
