import { Component, OnInit, DoCheck, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-multi-thumb-range',
  templateUrl: './multi-thumb-range.component.html',
  styleUrls: ['./multi-thumb-range.component.css']
})
export class MultiThumbRangeComponent implements OnInit,OnChanges {
  constructor() { }

  @Input() rangeLeftValue=25;
  @Input() rangeLeftMin=0;
  @Input() rangeLeftMax=100;
  @Input() rangeRightValue=75;
  @Input() rangeRightMin=0;
  @Input() rangeRightMax=100;
  @Output() changeLeft = new EventEmitter<number>();
  @Output() changeRight = new EventEmitter<number>();
  percentLeft:string;
  percentRight:string;
  range:number;
  rangeLeftValueElement:FormControl = new FormControl();
  rangeRightValueElement:FormControl = new FormControl();

  ngOnInit(): void {
    this.rangeLeftValueElement.setValue(this.rangeLeftValue);
    this.rangeRightValueElement.setValue(this.rangeRightValue);
    this.setLeftValue();
    this.setRightValue();
  }
  ngOnChanges(){
    this.rangeLeftValueElement.setValue(this.rangeLeftValue);
    this.rangeRightValueElement.setValue(this.rangeRightValue);
    this.setLeftValue();
    this.setRightValue();
  }
  setLeftValue(){
    this.rangeLeftValue = this.rangeLeftValueElement.value;
    this.rangeLeftValue = Math.min(this.rangeLeftValue,this.rangeRightValue - 1);
    this.rangeLeftValueElement.setValue(this.rangeLeftValue);
    let percentNumber = ((this.rangeLeftValue-this.rangeLeftMin)/(this.rangeLeftMax-this.rangeLeftMin))*100;
    this.percentLeft = percentNumber.toString()+'%'
    this.changeLeft.emit(this.rangeLeftValue);
  }

  setRightValue(){
    this.rangeRightValue = this.rangeRightValueElement.value;
    this.rangeRightValue = Math.max(this.rangeRightValue,this.rangeLeftValue + 1);
    this.rangeRightValueElement.setValue(this.rangeRightValue);
    let percentNumber = ((this.rangeRightValue-this.rangeRightMin)/(this.rangeRightMax-this.rangeRightMin))*100;
    this.percentRight = (100-percentNumber).toString()+'%';
    this.changeRight.emit(this.rangeRightValue);
  }
}
