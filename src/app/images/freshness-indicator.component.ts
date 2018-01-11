import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-freshness-indicator',
  templateUrl: './freshness-indicator.component.html',
  styleUrls: ['./freshness-indicator.component.css']
})
export class FreshnessIndicatorComponent implements OnInit {

  @Input() grade: string;
  constructor() { }

  ngOnInit() {
  }

}
