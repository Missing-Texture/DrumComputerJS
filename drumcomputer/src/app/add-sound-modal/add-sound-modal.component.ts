import { Component, OnInit, ComponentFactory, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as Tone from "tone";
import { SequencerService } from '../sequencer/sequencer.service';
import { SequencerComponent } from '../sequencer/sequencer.component';

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

  types:string[] = ["Kick", "Snare", "HiHat", "Percussion"];

  selected: any;
  type:string;

  componentRef: ComponentRef<any>;
  container:any;
  idCounter:number;

  showWarning: boolean = false;
  
  constructor(
    private resolver: ComponentFactoryResolver, 
    public activeModal: NgbActiveModal,
    private _sequencerService: SequencerService,) { }

  ngOnInit(): void {
  }

  previewSound(category: number, i: number) {
    switch (category) {
      case 0:
        this.selected = this.kicks[i];
        break;
      case 1:
        this.selected = this.snares[i];
        break;
      case 2:
        this.selected = this.hihats[i];
        break;
      case 3:
        this.selected = this.percussions[i];
        break;
    }

    this.type = this.types[category];
    this.showWarning = false;

    // start Transport if not already running
    if(Tone.Transport.state == 'stopped') {
      Tone.Transport.start();
      this.selected.start();
      Tone.Transport.stop();
    } else {
      this.selected.start();
    }
  }

  continue() {
    if (this.selected == undefined) {
      this.showWarning = true;
    } else {
      const sequencerFactory: ComponentFactory<any> = this.resolver.resolveComponentFactory(SequencerComponent);
      this.componentRef = this.container.createComponent(sequencerFactory);
      this.componentRef.instance.id = this.idCounter;
      this.componentRef.instance.type = this.type;
      this.componentRef.instance.parentContainerRef = this.container;
      this._sequencerService.states.push([
        false, false, false, false,
        false, false, false, false,
        false, false, false, false,
        false, false, false, false]);
      this._sequencerService.sounds.push(this.selected);
      this.activeModal.close('continue');
    }
  }
}
