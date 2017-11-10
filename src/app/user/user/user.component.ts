import { Post } from './../../post/post';
import { UserService } from './../user.service';
import { User } from './../user';
import { Component, OnInit,Input } from '@angular/core';
import {ParamMap,ActivatedRoute} from '@angular/router'
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user:User;
  @Input() posts:Post[];

  constructor(private route:ActivatedRoute,private service:UserService) {
    let id:number;
    this.route.paramMap
    .switchMap((params:ParamMap) => { 
          id = +params.get('id'); return this.service.getUser(id);
    }).subscribe(user => this.user = user);
    this.service.getMyPosts(id).subscribe(posts => this.posts = posts);
   }

  ngOnInit() {
  }

}
