import { Component, OnInit } from '@angular/core';
import { animate, style, group, useAnimation, keyframes, animation, query, stagger } from "@angular/animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  grow = animation(
    [
      style({height: '0px', paddingTop: '0px', paddingBottom: '0px', marginTop: '0px', marginBottom: '0px'}),
      animate('200ms', style({ height: '*', paddingTop: '*', paddingBottom: '*', marginTop: '*', marginBottom: '*' })),
    ],
  );

  animate = [
    query('*', [
      style({transformOrigin: '50% 0px', transform: 'perspective(500px) rotate3d(1, 0, 0, 90deg)' }),
      stagger(100, [
        group([
          useAnimation(this.grow),
          animate('1000ms',
          keyframes([
            style({transform: 'perspective(500px) rotate3d(1, 0, 0, -70deg)' }),
            style({transform: 'perspective(500px) rotate3d(1, 0, 0, 40deg)' }),
            style({transform: 'perspective(500px) rotate3d(1, 0, 0, -15deg)' }),
            style({transform: 'perspective(500px) rotate3d(1, 0, 0, 0deg)' }),
          ]),
        ),
      ]),
      ])
    ])
  ];
  animate2 =  [
    query('div', [ 
      stagger(500, [
        animate('2000ms', style({ transform: 'scale(2)'}))
      ])
    ])
  ];
  constructor() { }

  ngOnInit(): void {
    
  }

}
