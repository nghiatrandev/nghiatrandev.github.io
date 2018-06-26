import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate} from '@angular/animations';


@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('flyInOut', [
      state('out', style({width: '0%', left: '-20%'})),
      state('in', style({width: '100%'})),
      transition('out => in', animate(1200))
    ]),
  ]
})
export class BannerComponent implements OnInit {

  a:string = 'out';

  helloTrigger: string = 'void';

  constructor() { }

  ngOnInit() {
    setTimeout (() => {
      this.a = 'in';
    },50);
  }


}
