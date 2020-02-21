import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sequencer',
  templateUrl: './sequencer.component.html',
  styleUrls: ['./sequencer.component.scss']
})
export class SequencerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  states: boolean[][] = [[false, false, false, false],
                      [false, false, false, false],
                      [false, false, false, false],
                      [false, false, false, false]];

  activateCell(i: number, j: number) {
    this.states[i][j] = !this.states[i][j];
  }
}
