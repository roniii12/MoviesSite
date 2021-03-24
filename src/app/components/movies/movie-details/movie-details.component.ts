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
  @ViewChild('castItem') castItem: ElementRef;
  isLeftArrowAppear:boolean = false;
  isRightArrowAppear:boolean = true;
  translateCard:number= 0;
  appearList:number;
  castItemWidth:number;
  ngOnInit(): void {

  }

  ngAfterViewInit(){
    this.appearArrow();
  }
  handleArrowClick(status:string){
    this.castItemWidth = +this.castItem.nativeElement.offsetWidth;
    this.handleTranslateArrow(status);
    this.appearArrow();
  }
  private handleTranslateArrow(status:string){
    const translatewithHalfItem = (this.appearList-(Math.floor(this.appearList/(this.castItemWidth+10))*10))%this.castItemWidth;
    if(status==='next' && this.castItemWidth-translatewithHalfItem>0){
      this.translateCard += this.appearList - translatewithHalfItem;
    }
    else if(status==='next')
      this.translateCard += this.appearList;
    else if(status==='prev'&&this.translateCard-this.appearList<0){
      this.translateCard = 0;
    }
    else if(status==='prev' && this.castItemWidth-translatewithHalfItem>0){
      this.translateCard -= this.appearList - translatewithHalfItem;
    }
    else if(status==='prev')
      this.translateCard -= this.appearList;
  }
  private appearArrow(){
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
