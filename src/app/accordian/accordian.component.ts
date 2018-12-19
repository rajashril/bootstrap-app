import { Component, OnInit } from '@angular/core';
import {NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {

  constructor(config: NgbAccordionConfig) { 
    config.type = "info";
    config.closeOthers = true;
  }

  ngOnInit() {
  }

  public beforeChange($event: NgbPanelChangeEvent) {

    if ($event.panelId === 'ngb-panel-0') {
      $event.preventDefault();
    }

    if ($event.panelId === 'ngb-panel-1' && $event.nextState === false) {
      $event.preventDefault();
    }
  }

}
