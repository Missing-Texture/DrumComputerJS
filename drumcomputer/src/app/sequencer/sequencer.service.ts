import { Injectable } from '@angular/core';
import * as Tone from "tone";

@Injectable({
  providedIn: 'root'
})
export class SequencerService {

  sequence: any;
  sequenceRunning: boolean = false; // Flag for Play button
  volume: number = -6;
  bpm: number = 120;

  sounds: any[] = [];

  states: boolean[][] = [];

  constructor() { 
    Tone.Master.volume.value = this.volume; // init master Volume
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

  activateCell(id: number, i: number) {
    // stop sequence if initialized
    if (this.sequence!=undefined) {
      this.sequence.stop();
      Tone.Transport.stop();
      this.sequenceRunning = false;
    }
    // flip State
    this.states[id][i] = !this.states[id][i];
  }

  updateSequencer() {
    let snd = this.sounds; // safe reference to sound for anon function 
    let state = this.states;

    this.sequence = new Tone.Sequence(function(time, col){

      // iterate over every available sound, play it if needed
      for (let i in snd) {
        if(state[i][col]) {
          snd[i].start(time, 0, "16n");
        }
      }

      /*
      Tone.Draw.schedule(function(){

      }, time);
      */
    }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "16n");
  }

  changeBpm(value: number) {
    this.bpm = value;
    Tone.Transport.bpm.value = this.bpm;
  }

  changeVolume(value: number) {
    this.volume = value;
    Tone.Master.volume.value = this.volume;
  }

  log() {
    console.log(this.states);
  }
}
