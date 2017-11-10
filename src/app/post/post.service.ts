import { Post } from './post';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/retry';


@Injectable()
export class PostService {

  constructor(private http:HttpClient) { }
 
  getAll():Observable<Post[]>{
    return this.http.get<Post[]>("api/posts").retry(3);
  }

  getPost(id:number):Observable<Post>{
    return this.http.get<Post>(`api/posts/${id}`).retry(3);
  }
}
