import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [
      // resting state
      state('in', style({ opacity: 1 })),
      // fade in when created
      transition(':enter', [
        style({ opacity: 0 }),
        animate(1000)
      ]),
      // fade out when destroyed
      transition(':leave',
        animate(600, style({ opacity: 0 })))
    ])
  ]
})
export class WelcomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
