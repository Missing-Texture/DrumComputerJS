import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SequencerComponent } from './sequencer/sequencer.component';
import { SequencerService } from './sequencer/sequencer.service';

@NgModule({
  declarations: [
    AppComponent,
    SequencerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SequencerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
