import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyPageComponent implements OnInit {
  show = false;

  ngOnInit() {
    setTimeout(() => {
      this.show = true;
    }, 3000);
  }
}
