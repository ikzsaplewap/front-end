import { Component, OnInit } from '@angular/core';
import { IMAGES} from './mock-images';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  images = IMAGES;
  showFreshnessDefinition: boolean;
  constructor() { }

  ngOnInit() {
    this.showFreshnessDefinition = false;
  }

  mouseEnter(){
    this.showFreshnessDefinition = true;
  }

  mouseLeave(){
    this.showFreshnessDefinition = false;
  }

}
