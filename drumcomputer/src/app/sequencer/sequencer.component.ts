import { Component, OnInit } from '@angular/core';
import { SequencerService } from './sequencer.service';

@Component({
  selector: 'app-sequencer',
  templateUrl: './sequencer.component.html',
  styleUrls: ['./sequencer.component.scss']
})
export class SequencerComponent implements OnInit {

  constructor(private _sequencerService: SequencerService) { }

  ngOnInit(): void {
  }
}
