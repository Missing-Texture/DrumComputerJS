import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as Tone from "tone";
import { AppService } from '../app.service';

@Component({
  selector: 'app-add-sound-modal',
  templateUrl: './add-sound-modal.component.html',
  styleUrls: ['./add-sound-modal.component.scss']
})
export class AddSoundModalComponent implements OnInit {

  kicks: any[] = [
    new Tone.Player({ "url": "assets/samples/drums/kicks/808-Kicks01.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/kicks/808-Kicks06.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/kicks/808-Kicks08.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/kicks/808-Kicks09.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/kicks/808-Kicks14.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/kicks/808-Kicks15.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/kicks/808-Kicks21.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/kicks/808-Kicks34.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/kicks/808-Kicks36.mp3", "fadeOut" : "64n"}).toMaster(),
  ];

  kicksUrl: any[] = [
    "assets/samples/drums/kicks/808-Kicks01.mp3",
    "assets/samples/drums/kicks/808-Kicks06.mp3",
    "assets/samples/drums/kicks/808-Kicks08.mp3",
    "assets/samples/drums/kicks/808-Kicks09.mp3",
    "assets/samples/drums/kicks/808-Kicks14.mp3",
    "assets/samples/drums/kicks/808-Kicks15.mp3",
    "assets/samples/drums/kicks/808-Kicks21.mp3",
    "assets/samples/drums/kicks/808-Kicks34.mp3",
    "assets/samples/drums/kicks/808-Kicks36.mp3",
  ];

  snares: any[] = [
    new Tone.Player({ "url": "assets/samples/drums/snares/808-Clap02.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/snares/808-Clap07.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/snares/808-Clap18.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/snares/808-Rim1.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/snares/808-Snare01.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/snares/808-Snare02.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/snares/808-Snare09.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/snares/808-Snare22.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/snares/808-Snare32.mp3", "fadeOut" : "64n"}).toMaster(),
  ];

  snaresUrl: any[] = [
    "assets/samples/drums/snares/808-Clap02.mp3",
    "assets/samples/drums/snares/808-Clap07.mp3",
    "assets/samples/drums/snares/808-Clap18.mp3",
    "assets/samples/drums/snares/808-Rim1.mp3",
    "assets/samples/drums/snares/808-Snare01.mp3",
    "assets/samples/drums/snares/808-Snare02.mp3",
    "assets/samples/drums/snares/808-Snare09.mp3",
    "assets/samples/drums/snares/808-Snare22.mp3",
    "assets/samples/drums/snares/808-Snare32.mp3",
  ];

  hihats: any[] = [
    new Tone.Player({ "url": "assets/samples/drums/hihats/808-HiHats01.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/hihats/808-HiHats04.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/hihats/808-HiHats05.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/hihats/808-HiHats17.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/hihats/808-HiHats19.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/hihats/808-HiHats20.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/hihats/808-OpenHiHats02.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/hihats/808-OpenHiHats05.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/hihats/808-OpenHiHats18.mp3", "fadeOut" : "64n"}).toMaster(),
  ];

  hihatsUrl: any[] = [
    "assets/samples/drums/hihats/808-HiHats01.mp3",
    "assets/samples/drums/hihats/808-HiHats04.mp3",
    "assets/samples/drums/hihats/808-HiHats05.mp3",
    "assets/samples/drums/hihats/808-HiHats17.mp3",
    "assets/samples/drums/hihats/808-HiHats19.mp3",
    "assets/samples/drums/hihats/808-HiHats20.mp3",
    "assets/samples/drums/hihats/808-OpenHiHats02.mp3",
    "assets/samples/drums/hihats/808-OpenHiHats05.mp3",
    "assets/samples/drums/hihats/808-OpenHiHats18.mp3",
  ];

  percussions: any[] = [
    new Tone.Player({ "url": "assets/samples/drums/percussions/808-Clave3.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/percussions/808-Conga1.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/percussions/808-Conga3.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/percussions/808-Conga5.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/percussions/808-Cowbell2.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/percussions/808-Cowbell4.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/percussions/808-Cowbell5.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/percussions/808-Maracas3.mp3", "fadeOut" : "64n"}).toMaster(),
    new Tone.Player({ "url": "assets/samples/drums/percussions/808-Stick1.mp3", "fadeOut" : "64n"}).toMaster(),
  ];

  percussionsUrl: any[] = [
    "assets/samples/drums/percussions/808-Clave3.mp3",
    "assets/samples/drums/percussions/808-Conga1.mp3",
    "assets/samples/drums/percussions/808-Conga3.mp3",
    "assets/samples/drums/percussions/808-Conga5.mp3",
    "assets/samples/drums/percussions/808-Cowbell2.mp3",
    "assets/samples/drums/percussions/808-Cowbell4.mp3",
    "assets/samples/drums/percussions/808-Cowbell5.mp3",
    "assets/samples/drums/percussions/808-Maracas3.mp3",
    "assets/samples/drums/percussions/808-Stick1.mp3",
  ];

  types:string[] = ["Kick", "Snare", "HiHat", "Percussion"];

  showWarning: boolean = false;
  
  constructor(
    public activeModal: NgbActiveModal,
    private _appService: AppService,
    ) {
    }

  ngOnInit(): void {
  }

  previewSound(category: number, i: number) {
    switch (category) {
      case 0:
        this._appService.selected = this.kicks[i];
        this._appService.selectedUrl = this.kicksUrl[i];
        break;
      case 1:
        this._appService.selected = this.snares[i];
        this._appService.selectedUrl = this.snaresUrl[i];
        break;
      case 2:
        this._appService.selected = this.hihats[i];
        this._appService.selectedUrl = this.hihatsUrl[i];
        break;
      case 3:
        this._appService.selected = this.percussions[i];
        this._appService.selectedUrl = this.percussionsUrl[i];
        break;
    }

    this._appService.type = this.types[category];
    this.showWarning = false;

    // start Transport if not already running
    if(Tone.Transport.state == 'stopped') {
      Tone.Transport.start();
      this._appService.selected.start();
      Tone.Transport.stop();
    } else {
      this._appService.selected.start();
    }
  }

  continue() {
    if (this._appService.selected == undefined) {
      this.showWarning = true;
    } else {
      this._appService.addSequencer();
      this.activeModal.close('continue');
    }
  }
}
