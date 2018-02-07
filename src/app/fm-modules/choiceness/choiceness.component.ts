import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choiceness',
  templateUrl: './choiceness.component.html',
  styleUrls: ['./choiceness.component.scss']
})
export class ChoicenessComponent implements OnInit {
  array = [ 1 ];
  constructor() { }
  ngOnInit() {
    setTimeout(_ => {
      this.array = [ 1, 2, 3, 4 ];
    }, 500);
  }

}
