import { Component, OnInit } from '@angular/core';
import { CONTAINERS } from './mock-containers';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.css']
})
export class ContainersComponent implements OnInit {

  containers = CONTAINERS;
  constructor() { }

  ngOnInit() {
  }

}
