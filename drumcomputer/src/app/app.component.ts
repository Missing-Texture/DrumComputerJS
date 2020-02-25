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
  componentRef: ComponentRef;

  constructor(private resolver: ComponentFactoryResolver, private _sequencerService: SequencerService) {}

  addSequencer() {
    const factory: ComponentFactory = this.resolver.resolveComponentFactory(SequencerComponent);
    this.componentRef = this.container.createComponent(factory);
  }
}
