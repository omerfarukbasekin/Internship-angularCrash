import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from './api.service';

@Component({
  selector: 'app-subrevive',
  templateUrl: './subrevive.component.html',
  styleUrls: ['./subrevive.component.css']
})
export class SubreviveComponent implements OnInit {
  formValue !: FormGroup;
  commentData !: any;
  
  constructor(private formbuilder: FormBuilder,
    private apiService: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName : [''],
      revive : [''],
      img:['']
    })
    this.getAllCommment();
  }

  getAllCommment(){
    this.apiService.getComment()
    .subscribe(res=>{
      this.commentData = res;
    })
  }
}
