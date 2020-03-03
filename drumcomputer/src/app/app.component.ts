import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef } from '@angular/core';
import { SequencerComponent } from './sequencer/sequencer.component';
import { SequencerService } from './sequencer/sequencer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drumcomputer';
  @ViewChild("sequencerContainer", {read: ViewContainerRef}) container;
  componentRef: ComponentRef<any>;
  idCounter:number = 0;

  constructor(private resolver: ComponentFactoryResolver, private _sequencerService: SequencerService) {}

  addSequencer() {
    const sequencerFactory: ComponentFactory<any> = this.resolver.resolveComponentFactory(SequencerComponent);
    this.componentRef = this.container.createComponent(sequencerFactory);
    this.componentRef.instance.id = this.idCounter;
    this.idCounter++;
    this._sequencerService.states.push([false, false, false, false,
      false, false, false, false,
      false, false, false, false,
      false, false, false, false]);
  }
}
