import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit, OnChanges {

  @Input('channel') channel;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.channel = this.channel || {};
    console.log(this.channel);
  }

}
