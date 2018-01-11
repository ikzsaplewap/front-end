import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { FreshnessIndicatorComponent } from './images/freshness-indicator.component';
import { FreshnessDefinitionComponent } from './images/freshness-definition.component';
import { DropdownModule } from 'angular-custom-dropdown';
import { ContainersComponent } from './containers/containers.component';
import { SearchImagesComponent } from './images/search-images.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    FreshnessIndicatorComponent,
    FreshnessDefinitionComponent,
    ContainersComponent,
    SearchImagesComponent
  ],
  imports: [
    BrowserModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
