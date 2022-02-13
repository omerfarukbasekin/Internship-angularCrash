import { Component, OnInit } from '@angular/core';
import prodData from 'src/assets/data.json';
import commentsRev from 'src/assets/comments.json';

import { IProduct } from './content.interface';
import { showRunner } from './content.interface';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {

  constructor() {
    this.selected = 2;

   }

  products: IProduct[] = prodData.products;
  mainProducts: showRunner[] = prodData.mainProducts;
  ngOnInit(): void {

  }

  //STARS SELECTION
  selected!: Number;
  

 //BUTTON SELECTION

selectButton(selectNum: number){
  this.selected = selectNum;
}

}
