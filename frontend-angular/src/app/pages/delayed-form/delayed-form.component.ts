import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-delayed-form',
    templateUrl: './delayed-form.component.html',
    styleUrls: ['./delayed-form.component.scss']
})
export class DelayedFormPageComponent implements OnInit {
    loaded = false;

    ngOnInit() {
        setTimeout(() => {
            this.loaded = true;
        }, 3000);
    }
}
