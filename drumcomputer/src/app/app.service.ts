import { Injectable, ViewContainerRef, ComponentRef, ComponentFactory, ComponentFactoryResolver, Inject } from '@angular/core';
import { SequencerService } from './sequencer/sequencer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddSoundModalComponent } from './add-sound-modal/add-sound-modal.component';
import { SavePatternModalComponent } from './save-pattern-modal/save-pattern-modal.component';
import { LoadPatternModalComponent } from './load-pattern-modal/load-pattern-modal.component';
import { SequencerComponent } from './sequencer/sequencer.component';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import * as Tone from "tone";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  idCounter:number = 0;
  container: ViewContainerRef;
  componentRef: ComponentRef<any>;

  selected: any;
  selectedUrl: String;
  type:string;
  
  STORAGE_KEY = 'patterns';
  patternList: any[] = [];
  
  constructor(
    private resolver: ComponentFactoryResolver,
    private _sequencerService: SequencerService,
    private modalService: NgbModal,
    @Inject(LOCAL_STORAGE) private storage: StorageService,) { }

  openAddSequencerModal() {
    const modalRef = this.modalService.open(AddSoundModalComponent);
    modalRef.componentInstance.container = this.container;
    modalRef.componentInstance.idCounter = this.idCounter;
    //increment Counter only if the Modal was closed with 'Continue' button
    modalRef.result.then((result) => {if (result == 'continue') this.idCounter++;}, () => { });
  }

  resetContainer() {
    this._sequencerService.sounds = [];
    this._sequencerService.soundUrls = [];
    this._sequencerService.states = [];
    this._sequencerService.types = [];
    this._sequencerService.stopPlaying();
    this.idCounter = 0;
    this.selected = null;
    this.selectedUrl = null;
    this.type = null;
    this.container.clear();
  }

  openSaveModal() {
    const modalRef = this.modalService.open(SavePatternModalComponent, { centered: true });
  }

  openLoadModal() {
    const modalRef = this.modalService.open(LoadPatternModalComponent);
  }

  addSequencer() {
    this._sequencerService.states.push([
      false, false, false, false,
      false, false, false, false,
      false, false, false, false,
      false, false, false, false]);
    this._sequencerService.sounds.push(this.selected);
    this._sequencerService.soundUrls.push(this.selectedUrl);
    this._sequencerService.types.push(this.type);

    const sequencerFactory: ComponentFactory<any> = this.resolver.resolveComponentFactory(SequencerComponent);
    this.componentRef = this.container.createComponent(sequencerFactory);
    this.componentRef.instance.id = this.idCounter;
    this.componentRef.instance.type = this.type;
    this.componentRef.instance.parentContainerRef = this.container;
  }

  addSequencerLite(state: boolean[], url: String, type: String) {
    this._sequencerService.states.push(state);
    this._sequencerService.sounds.push( new Tone.Player({ "url": url, "fadeOut" : "64n"}).toMaster(),);
    this._sequencerService.soundUrls.push(url);
    this._sequencerService.types.push(type);

    const sequencerFactory: ComponentFactory<any> = this.resolver.resolveComponentFactory(SequencerComponent);
      this.componentRef = this.container.createComponent(sequencerFactory);
      this.componentRef.instance.id = this.idCounter;
      this.componentRef.instance.type = type;
      this.componentRef.instance.parentContainerRef = this.container;

    this.idCounter++;
  }

  loadFromStorage() {
    this.patternList = this.storage.get(this.STORAGE_KEY);
    //console.log(this.patternList);
  }

  loadPattern(i: number) {
    this.resetContainer();
    this.loadFromStorage();
    let pattern = this.patternList[i];
    for(let i in pattern.states) {
      if(pattern.states[i] != null) {
        this.addSequencerLite(pattern.states[i], pattern.soundUrls[i], pattern.types[i]);
      }
    }
  }

  resetLocalStorage() {
    localStorage.clear();
    this.patternList = [];
    this.selected = null;
    this.selectedUrl = null;
    this.type = null;
  }
}
