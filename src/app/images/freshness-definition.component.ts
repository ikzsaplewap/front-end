import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-freshness-definition',
  templateUrl: './freshness-definition.component.html',
  styleUrls: ['./freshness-definition.component.css']
})
export class FreshnessDefinitionComponent implements OnInit {

  @Input() grade: string;
  constructor() { }

  ngOnInit() {
  }

}
