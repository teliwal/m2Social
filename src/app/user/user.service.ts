import { User } from './user';
import {Post} from './../post/post'
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/retry';

@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }

  getAll():Observable<User[]>{
    return this.http.get<User[]>("api/users").retry(3);
  }

  getUser(id:number):Observable<User>{
    return this.http.get<User>(`api/users/${id}`).retry();
  }

  getMyPosts(id:number):Observable<Post[]>{
    return this.http.get<Post[]>(`api/users/${id}/posts`).retry(3);
  }
}
