import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from './api.service';
import { CommentModel } from './revive-func.model';

@Component({
  selector: 'app-revive-func',
  templateUrl: './revive-func.component.html',
  styleUrls: ['./revive-func.component.css']
})

export class ReviveFuncComponent implements OnInit {

  formValue !: FormGroup;
  commentModelObj : CommentModel = new CommentModel();
  commentData !: any;

  constructor(private formbuilder: FormBuilder,
    private apiService: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName : [''],
      email : [''],
      revive : [''],
      checkBox: [],
      stars: {
        starOne:[],
        starTwo: [],
        starTree: [],
        starFour: [],
        starFive: []
      }
    })

    this.getAllCommment();
  }

  postCommentDetails(){

    this.commentModelObj.firstName = this.formValue.value.firstName;
    this.commentModelObj.email = this.formValue.value.email;
    this.commentModelObj.revive = this.formValue.value.revive;
    this.commentModelObj.checkBox=this.formValue.value.checkBox;
    this.commentModelObj.stars=this.formValue.value.stars;
  

    this.apiService.postComment(this.commentModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Comment Added Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllCommment();
    },
    err=>{
      alert("Something went wrong")
      }) 
    }

    getAllCommment(){
      this.apiService.getComment()
      .subscribe(res=>{
        this.commentData = res;
      })
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
