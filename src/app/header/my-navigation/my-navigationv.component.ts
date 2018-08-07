import { Component, OnInit, Inject, HostListener, ElementRef } from '@angular/core';
import { DisplayService } from '../../services/display.service'


@Component({
  selector: 'my-navigation',
  templateUrl: './my-navigation.component.html',
  styleUrls: ['./my-navigation.component.css'],
})

export class MyNavigationComponent implements OnInit {

  helloTrigger: string = 'void';
  isFixed: boolean = false;
  navigationElement: any;

  constructor(
    private _displayService : DisplayService,
    private el: ElementRef
  ) { }

  ngOnInit() {
    // let a = document.getElementById('main-nav');
    // this.navigationElement = this.el.nativeElement;
  }

  // @HostListener("window:scroll",[])
  // onWindowScroll(){
  //     if (this.navigationElement){
  //       let navigationRect = this.navigationElement.getBoundingClientRect().top;
  //       if (Number(navigationRect) <= 0) this.isFixed = true;
  //       else this.isFixed = false;
  //     }
  // }



}
