import { Component, OnInit } from '@angular/core';
import { DisplayService } from 'src/app/services/display.service';
import { Router } from '@angular/router';



@Component({
  selector: 'furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css'],
})
export class FurnitureComponent implements OnInit {

  componentHeight : string;

  constructor(
    private _displayService: DisplayService,
    private _router: Router,
  ){}

  ngOnInit() {
    this.componentHeight = this._displayService.setHeightComponent()+'px';
  }

  isAnimate: boolean = false


  onDetail(){
    this._router.navigate(['/du-an']);
    // this._router.navigate(['/trang-chu']);
  }

}
