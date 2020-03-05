import { Component, OnInit, Input } from '@angular/core';
import { SequencerService } from './sequencer.service';

@Component({
  selector: 'app-sequencer',
  templateUrl: './sequencer.component.html',
  styleUrls: ['./sequencer.component.scss']
})
export class SequencerComponent implements OnInit {

  constructor(private _sequencerService: SequencerService) { }

  @Input() id: number;
  @Input() type: string;

  ngOnInit(): void {
  }
}
