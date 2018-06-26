import { Component, OnInit } from '@angular/core';
import { DisplayService } from 'src/app/services/display.service';



@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {

  componentHeight : string;

  constructor(
    private _displayService: DisplayService
  ){}

  ngOnInit() {
    this.componentHeight = this._displayService.setHeightComponent()+'px';
  }

  isAnimate: boolean = false

  title: string = 'Passionate About Inspiring Others';
  introduce1: string = "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.";
  introduce2: string = "This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors.";
  introduce3: string = "At Wix we’re passionate about making templates that allow you to build fabulous websites and it’s all thanks to the support and feedback from users like you! Keep up to date with New Releases and what’s Coming Soon in Wixellaneous in Support. Feel free to tell us what you think and give us feedback in the Wix Forum. If you’d like to benefit from a professional designer’s touch, head to the Wix Arena and connect with one of our Wix Pro designers. Or if you need more help you can simply type your questions into the Support Forum and get instant answers.";


}
