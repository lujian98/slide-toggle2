import { Component, OnInit } from '@angular/core';

import { Mapping } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  newMapping: Mapping = {};
  initialMapping: Mapping = {
    Door: null,
    Handle: 'Contact Handle 1',
    Lock: null
  };


  constructor(
  ) {}

  ngOnInit() {
  }


  updateMapping(mapping: Mapping) {
    this.newMapping = mapping;
  }

}
