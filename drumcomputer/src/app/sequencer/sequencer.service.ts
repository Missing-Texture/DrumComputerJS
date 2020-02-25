import { Injectable } from '@angular/core';
import * as Tone from "tone";

@Injectable({
  providedIn: 'root'
})
export class SequencerService {

  sound: any = new Tone.Player("assets/samples/drums/kicks/Kick011TheSpoon.mp3").toMaster();
  sequence: any;
  sequenceRunning: boolean = false; // Flag for Play button
  volume: number = -12;
  bpm: number = 120;

  states: boolean[] = [false, false, false, false,
    false, false, false, false,
    false, false, false, false,
    false, false, false, false];

  constructor() { 
    this.sound.volume.value = this.volume;
    this.sound.fadeOut = "64n"; 
  }

  test() {
    if(!this.sequenceRunning) {
      this.updateSequencer();
      this.sequence.start();
      Tone.Transport.start();
      this.sequenceRunning = true;
    } else {
      this.sequence.stop();
      Tone.Transport.stop();
      this.sequenceRunning = false;
    }    
  }

  activateCell(i: number) {
    // stop sequence if initialized
    if (this.sequence!=undefined) {
      this.sequence.stop();
      Tone.Transport.stop();
      this.sequenceRunning = false;
    }
    // flip State
    this.states[i] = !this.states[i];
  }

  updateSequencer() {
    let snd = this.sound; // safe reference to sound for anon function 

    this.sequence = new Tone.Sequence(function(time, col){
      if(col) {
        snd.start(time, 0, "16n");
      }

      Tone.Draw.schedule(function(){

      }, time);

    }, this.states, "16n");
  }

  changeBpm(value: number) {
    this.bpm = value;
    Tone.Transport.bpm.value = this.bpm;
  }

  changeVolume(value: number) {
    this.volume = value;
    this.sound.volume.value = this.volume;
  }
}
