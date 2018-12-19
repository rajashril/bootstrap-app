import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  model = {
    left: true,
    middle: false,
    right: false
  };
  constructor() { }

  ngOnInit() {
  }

}
