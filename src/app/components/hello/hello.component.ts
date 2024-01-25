import { Component, Input,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.less'
})
export class HelloComponent implements OnInit {
  imageMarginRight: string = '30px';
  @Input() mainImage = '';
  private _imageNum: number = 0;

  @Input()
  set imageNum(value: number) {
    this._imageNum = value;
    this.updatePadding(); 
  }

  get imageNum(): number {
    return this._imageNum;
  }

  updatePadding() {
    if (this.imageNum === 1) {
      this.imageMarginRight = '67px';
    } else if (this.imageNum === 2) {
      this.imageMarginRight = '55px';
    } else {
      this.imageMarginRight = '28px';
    }
  }
  
  ngOnInit() {
    this.updatePadding();
  }
}
