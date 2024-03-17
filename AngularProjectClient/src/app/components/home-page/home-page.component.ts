import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import {  NgbCarouselConfig, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgbCarouselModule,CommonModule],
  providers: [NgbCarouselConfig],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  images = [1, 2, 3,4].map((n) => `/assets/home-page/${n}.jpg`);
  constructor() {}
}
