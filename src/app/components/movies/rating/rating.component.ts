import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.css"]
})
export class RatingComponent implements OnInit {
  constructor() {}

  @Input() lengthOfStars: number = 5;
  arrayOfNumber = new Array(this.lengthOfStars);
  @Input() starColor: number = 3.7;
  fullStar: number = Math.floor(this.starColor);
  halfStar = (this.starColor - this.fullStar) * 100;
  @Input() canSelectStars: boolean = false;
  @Input() colorOfStars: string = "#E53935";
  @Input() ratingTitle:string = "Critic's Rating";
  @Input() sizeStar:number = 1.5;
  @Input() widthTitle:string = "6.3rem";
  @Output() selectedStars = new EventEmitter<number>();
  colorInStartComp:string= this.colorOfStars;

  ngOnInit(): void {
    // for (let i = 1; i <= this.lengthOfStars; i++) {
    //   this.arrayOfNumber.push(i);
    // }
    // for (let i of this.arrayOfNumber) console.log(i);
    this.fullStar= Math.floor(this.starColor);
    this.halfStar = (this.starColor - this.fullStar) * 100;
    this.colorInStartComp = this.colorOfStars
  }
  hoverOnStar(index: number, which: string) {
    if (this.canSelectStars) {
      if (which === "first") {
        this.fullStar = index;
        this.halfStar = 50;
      } else {
        this.fullStar = index + 1;
        this.halfStar = 0;
      }
      this.colorOfStars = "gold";
    }
  }
  outFromStars(){
    this.fullStar= Math.floor(this.starColor);
    this.halfStar = (this.starColor - this.fullStar) * 100;
    this.colorOfStars = this.colorInStartComp;
  }
  clickOnStar(){
    if(this.canSelectStars){
      this.starColor = this.fullStar + this.halfStar/100;
      this.selectedStars.emit(this.starColor);
    }
  }
}
