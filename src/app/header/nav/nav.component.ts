import { Component, OnInit, Inject, HostListener, ElementRef } from '@angular/core';
import { DisplayService } from '../../services/display.service'


@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})

export class NavComponent implements OnInit {

  helloTrigger: string = 'void';
  isFixed: boolean = false;
  navigationElement: any;

  constructor(
    private _displayService : DisplayService,
    private el: ElementRef
  ) { }

  ngOnInit() {
    let a = document.getElementById('main-nav');
    this.navigationElement = this.el.nativeElement;
  }

  @HostListener("window:scroll",[])
  onWindowScroll(){
      if (this.navigationElement){
        let navigationRect = this.navigationElement.getBoundingClientRect().top;
        if (Number(navigationRect) <= 0) this.isFixed = true;
        else this.isFixed = false;
      }
  }

  moveTo(componentId: string) {
      this._displayService.scrollTo(componentId)
  }



}
