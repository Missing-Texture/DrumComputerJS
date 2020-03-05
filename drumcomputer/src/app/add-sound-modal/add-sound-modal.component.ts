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

  selected: any;

  componentRef: ComponentRef<any>;
  container:any;
  idCounter:number;

  constructor(
    private resolver: ComponentFactoryResolver, 
    public activeModal: NgbActiveModal,
    private _sequencerService: SequencerService,) { }

  ngOnInit(): void {
  }

  previewSound(i: number) {
    Tone.Transport.start();
    this.kicks[i].start();
    Tone.Transport.stop();
    this.selected = this.kicks[i];
  }

  continue() {
    const sequencerFactory: ComponentFactory<any> = this.resolver.resolveComponentFactory(SequencerComponent);
    this.componentRef = this.container.createComponent(sequencerFactory);
    this.componentRef.instance.id = this.idCounter;
    this._sequencerService.states.push([false, false, false, false,
      false, false, false, false,
      false, false, false, false,
      false, false, false, false]);
    this._sequencerService.sounds.push(this.selected);
    this.activeModal.close('Close click');
  }
}
