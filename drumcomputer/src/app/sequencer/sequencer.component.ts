import { Component, OnInit } from '@angular/core';
import * as Tone from "tone";

@Component({
  selector: 'app-sequencer',
  templateUrl: './sequencer.component.html',
  styleUrls: ['./sequencer.component.scss']
})
export class SequencerComponent implements OnInit {

  sound: any = new Tone.Player("assets/samples/drums/kicks/Kick011TheSpoon.mp3").toMaster();
  

  states: boolean[] = [false, false, false, false,
    false, false, false, false,
    false, false, false, false,
    false, false, false, false];

  constructor() { }

  ngOnInit(): void {
    // sets the Volume
    this.sound.volume.value = -12;
  }

  activateCell(i: number) {
    this.states[i] = !this.states[i];
  }

  test() {
    this.updateSequencer();
    Tone.Transport.start();
  }

  updateSequencer() {
    let sequence: any = new Tone.Sequence(function(time, col){
      if(col) {
        this.sound.start(time, 0, "16n");
      }
    }, this.states, "16n").start();
  }
}
