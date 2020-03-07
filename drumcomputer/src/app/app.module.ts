import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SequencerComponent } from './sequencer/sequencer.component';
import { SequencerService } from './sequencer/sequencer.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddSoundModalComponent } from './add-sound-modal/add-sound-modal.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    SequencerComponent,
    AddSoundModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [SequencerService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
