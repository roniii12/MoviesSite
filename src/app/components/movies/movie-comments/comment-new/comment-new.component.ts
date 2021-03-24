import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-comment-new',
  templateUrl: './comment-new.component.html',
  styleUrls: ['./comment-new.component.css']
})
export class CommentNewComponent implements OnInit {

  constructor() { }

  numberOfSelectedStars:number = 0;
  review = new FormControl();

  ngOnInit(): void {
  }

  onSelectedStart(number:number){
    this.numberOfSelectedStars=number;
  }

}
