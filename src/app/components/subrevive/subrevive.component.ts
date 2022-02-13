import { Component, OnInit } from '@angular/core';
import commentsRev from 'src/assets/comments.json';

import { CommentRev } from './subrevive.interface';

@Component({
  selector: 'app-subrevive',
  templateUrl: './subrevive.component.html',
  styleUrls: ['./subrevive.component.css']
})
export class SubreviveComponent implements OnInit {

  constructor() { }

  comment:CommentRev[] = commentsRev.comment;

  ngOnInit(): void {
  }
title = 'Star Rating';
  starList: boolean[] = [true, true, true, true, true];
  rating!: Number;


  public stars: boolean[] = Array(5).fill(false);


  public rate(rating: number) {
    console.log('rating', rating);
    this.stars = this.stars.map((_, i) => rating > i);
    console.log('stars', this.stars);
  }

}
