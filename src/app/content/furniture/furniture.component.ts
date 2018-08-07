import { Component, OnInit } from '@angular/core';
import { DisplayService } from 'src/app/services/display.service';



@Component({
  selector: 'furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css'],
})
export class FurnitureComponent implements OnInit {

  componentHeight : string;

  constructor(
    private _displayService: DisplayService
  ){}

  ngOnInit() {
    this.componentHeight = this._displayService.setHeightComponent()+'px';
  }

  isAnimate: boolean = false

  title: string = 'Về chúng tôi';
  introduce1: string = "Kiến trúc A Decor là công ty hoạt động trong lĩnh vực tư vấn thiết kế, thi công các công trình kiến trúc, nội thất..";
  introduce2: string = "A Decor với đội ngũ KTS trẻ tài năng làm việc với tất cả lòng đam mê, sự nhiệt huyết với nghề. Chúng tôi luôn không ngừng nâng cao, học hỏi mang đến cho khách hàng những sản phẩm tốt nhất, giá trị nhất và hoàn hảo nhất..";
  // introduce3: string = "At Wix we’re passionate about making templates that allow you to build fabulous websites and it’s all thanks to the support and feedback from users like you! Keep up to date with New Releases and what’s Coming Soon in Wixellaneous in Support. Feel free to tell us what you think and give us feedback in the Wix Forum. If you’d like to benefit from a professional designer’s touch, head to the Wix Arena and connect with one of our Wix Pro designers. Or if you need more help you can simply type your questions into the Support Forum and get instant answers.";


}
