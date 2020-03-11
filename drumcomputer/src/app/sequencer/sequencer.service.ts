import { Inject, Injectable } from '@angular/core';
import * as Tone from "tone";
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SequencerService {

  sequence: any;
  sequenceRunning: boolean = false; // Flag for Play button
  volume: number = -6;
  bpm: number = 120;

  sounds: any[] = []; // Array of sounds the Sequencer plays
  soundUrls: String[] = []; // Array of URLs to the sounds (needed for saving patterns)
  types: String[] = []; // Array of Categorys corresponding to the sounds (needed for displaying the correct name in the GUI)
  volumes: number[] = [];

  states: boolean[][] = []; // Array of the State of the ButtonGrid of the sounds

  //highlighted: Subject<number> = new Subject<number>();

  STORAGE_KEY = 'patterns';

  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
  ) { 
    Tone.Master.volume.value = this.volume; // init master Volume
    if(this.storage.get(this.STORAGE_KEY) == undefined) { // init LocalStorage with emty Array
      this.storage.set(this.STORAGE_KEY, []);
    }
  }

  switchPlaying() {
    if(!this.sequenceRunning) {
      this.updateSequencer();
      this.startPlaying();
    } else {
      this.stopPlaying();
    }   
  }

  startPlaying() {
    this.sequence.start();
    Tone.Transport.start();
    this.sequenceRunning = true;
  }

  stopPlaying() {
    if (this.sequence != undefined) {
      this.sequence.stop();
      Tone.Transport.stop();
      this.sequenceRunning = false;
    }
  }

  activateCell(id: number, i: number) {
    this.states[id][i] = !this.states[id][i];
  }

  updateSequencer() {
    let snd = this.sounds; // safe reference to sound for anon function 
    let state = this.states;
    //let higl = this.highlighted;

    this.sequence = new Tone.Sequence(function(time, col){

      // iterate over every available sound, play it if needed
      for (let i in snd) {
        if(state[i] != null && state[i][col]) {
          snd[i].start(time, 0, "16n");
        }
      }

      /* Mechanism for a moving cursor
       *
      Tone.Draw.schedule(function(){
        higl.next(col);
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

  changeVolumeIndividual(id: number, value: number) {
    this.sounds[id].volume.value = value;
    this.volumes[id] = value;
  }

  changeMuteIndividual(id: number) {
    this.sounds[id].mute = !this.sounds[id].mute;
  }

  log() {
    console.log(this.states);
  }

  savePattern(name: String) {
    let pattern = {
      name: name,
      types: this.types,
      soundUrls: this.soundUrls,
      states: this.states,
      volumes: this.volumes,
      //TODO: add more Prameters
    };

    let patternList = this.storage.get(this.STORAGE_KEY);
    patternList.push(pattern);
    this.storage.set(this.STORAGE_KEY, patternList);
    //console.log(localStorage);
  }
}
