import { Component, OnInit } from '@angular/core';
import { DisplayService } from 'src/app/services/display.service';
import { Router } from '@angular/router';



@Component({
  selector: 'architecture',
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.css'],
})
export class ArchitectureComponent implements OnInit {

  componentHeight : string;

  constructor(
    private _displayService: DisplayService,
    private _routes: Router,
  ){}

  ngOnInit() {
    this.componentHeight = this._displayService.setHeightComponent()+'px';
  }

  isAnimate: boolean = false

  onDetail(){
    this._routes.navigate(['/du-an']);
  }

}
