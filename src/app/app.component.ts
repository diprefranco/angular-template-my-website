import { Component } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from "./layout/footer/footer.component";
import { HeroComponent } from "./sections/hero/hero.component";
import { SampleImagesComponent } from "./sections/sample-images/sample-images.component";
import { TimelineComponent } from './sections/timeline/timeline.component';
import { CardsComponent } from './sections/cards/cards.component';
import { MoreInformationComponent } from "./sections/more-information/more-information.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    SampleImagesComponent,
    TimelineComponent,
    CardsComponent,
    MoreInformationComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
