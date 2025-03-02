import { Component } from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselPageComponent {
    images = [
        { src: 'assets/ice.png', alt: 'Ice' },
        { src: 'assets/lightning.png', alt: 'Lightning' },
        { src: 'assets/raindrops.png', alt: 'Raindrops' },
        { src: 'assets/sunset.png', alt: 'Sunset' }
    ];
}
