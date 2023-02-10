import { Component, OnInit } from '@angular/core';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-depilation',
  templateUrl: './depilation.component.html',
  styleUrls: ['./depilation.component.css']
})
export class DepilationComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];
  constructor() { }

  ngOnInit(): void {
      // this.galleryOptions = [
    //   {
    //     width: '100%',
    //     height: '465px',
    //     thumbnailsColumns: 4,
    //     imageAnimation: NgxGalleryAnimation.Slide,
    //     preview: true,
    //   },
    // ];
    this.galleryOptions = [
      {
        // max-width +800
        width: '50%',
        height: '700px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        //imageAutoPlay: true,
        imageAutoPlayInterval: 4000,
        imageAutoPlayPauseOnHover: true,
        preview: true,
        thumbnailsPercent: 20,
        thumbnailMargin: 10,
        thumbnailClasses: ['ngx-gallery-custom'],
      },
      // max-width 800
      {
        breakpoint: 200,
        width: '50%',
        height: '300px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
      },
      // max-width 400
      {
        width: '50%',
        height: '150px',
        breakpoint: 100,
        preview: true,
      },
    ];

    this.galleryImages = [
      {
        small: 'assets/img/IMG-7538.JPG',
        medium: 'assets/img/IMG-7538.JPG',
        big: 'assets/img/IMG-7538.JPG',
      },
      {
        small: 'assets/img/IMG-7550.JPG', // napraviti slike u assets
        medium: 'assets/img/IMG-7550.JPG',
        big: 'assets/img/IMG-7550.JPG',
      },
      {
        small: 'assets/img/IMG-7548.JPG',
        medium: 'assets/img/IMG-7548.JPG',
        big: 'assets/img/IMG-7548.JPG',
      },
      {
        small: 'assets/img/IMG-7541 (1).JPG',
        medium: 'assets/img/IMG-7541 (1).JPG',
        big: 'assets/img/IMG-7541 (1).JPG',
      },
      {
        small: 'assets/img/IMG-7527 (1).JPG',
        medium: 'assets/img/IMG-7527 (1).JPG',
        big: 'assets/img/IMG-7527 (1).JPG',
      },
    ];
  }

}
