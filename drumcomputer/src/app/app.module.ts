import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SequencerComponent } from './sequencer/sequencer.component';
import { SequencerService } from './sequencer/sequencer.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddSoundModalComponent } from './add-sound-modal/add-sound-modal.component';
import { AppService } from './app.service';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { SavePatternModalComponent } from './save-pattern-modal/save-pattern-modal.component';
import { LoadPatternModalComponent } from './load-pattern-modal/load-pattern-modal.component';
import { AddSoundModalService } from './add-sound-modal/add-sound-modal.service';


@NgModule({
  declarations: [
    AppComponent,
    SequencerComponent,
    AddSoundModalComponent,
    SavePatternModalComponent,
    LoadPatternModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    StorageServiceModule,
  ],
  providers: [SequencerService, AppService, AddSoundModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
