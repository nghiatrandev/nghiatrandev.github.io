import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate} from '@angular/animations';
import { UtilsService } from 'src/app/services/utils.service';
import { SwiperModule } from 'angular2-useful-swiper';


@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('flyInOut', [
      state('void', style({
        transform: 'translateX(100%)'
      })),
      state('out', style({
        transform: 'translateX(-100%)'
      })),
      state('in', style({        
        transform: 'translateX(0%)'
      })),
      transition('void => in', animate('1500ms linear')),
      transition('out => in', animate('1500ms linear')),
      transition('in => out', animate('1500ms linear'))
    ]),
  ]
})
export class BannerComponent implements OnInit {

  // ordinal: number = 1;

  // stt1: string = 'void';
  // stt2: string = 'void';
  // stt3: string = 'void';

  // config: any;
  // swiper = new SwiperModule

  constructor(
    // private _utilsService: UtilsService,
  ) { }

  ngOnInit() {
    // setTimeout(() => {
    //   this.setOrdinal();
    // },3000);
    
    //   this.stt1='in';

  // Animations init
  // new WOW().init();
  }
  

  // setOrdinal(){
  //     if (this.ordinal < 3) {
  //         this.ordinal += 1;

  //     }
  //     else {
  //       this.ordinal = 1;

  //     }
  //     setTimeout(() => {
  //       this.setOrdinal();
  //     },3000);
  // }



}
