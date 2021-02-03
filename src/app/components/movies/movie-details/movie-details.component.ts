import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild('leftArrow') leftArrow: ElementRef;
  @ViewChild('wrapCastList') wrapCastList: ElementRef;
  @ViewChild('castList') castList: ElementRef;
  @ViewChild('rightArrow') rightArrow: ElementRef;
  isLeftArrowAppear:boolean = false;
  isRightArrowAppear:boolean = true;
  translateCard:number= 0;
  appearList:number;
  ngOnInit(): void {

  }

  ngAfterViewInit(){
    this.appearArrow();
  }
  onLeftArrowClick(){
    this.translateCard-=this.appearList;
    this.appearArrow();
  }
  onRightArrowClick(){
    this.translateCard+=this.appearList;
    this.appearArrow();
  }
  appearArrow(){

    this.appearList = +this.wrapCastList.nativeElement.offsetWidth;
    const widthList:number = +this.castList.nativeElement.offsetWidth;
    if(this.translateCard === 0){
      this.isLeftArrowAppear = false;
      this.isRightArrowAppear = true;
    }
    else{
      this.isLeftArrowAppear = true;
    }
    if(widthList - this.appearList - this.translateCard < 0){
      this.isRightArrowAppear = false;
    }
  }
}
