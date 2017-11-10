import { PostService } from './../post.service';
import { Post } from './../post';
import { Component, OnInit,Input } from '@angular/core';
import {ParamMap,ActivatedRoute} from '@angular/router'
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post:Post; 

  constructor(private route:ActivatedRoute,private service:PostService) { 
    this.route.paramMap
    .switchMap((params:ParamMap) => { 
          return this.service.getPost(+params.get('id'));
    }).subscribe(post =>this.post = post);
  }

  ngOnInit() {
  }

}
