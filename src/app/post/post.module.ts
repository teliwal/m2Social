import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostRootComponent } from './post-root/post-root.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostService} from './post.service';
import {HttpClientModule} from '@angular/common/http';
import { PostHeaderComponent } from './post-header/post-header.component'

const routes: Routes = [{
  path: 'posts', component: PostRootComponent,
  children : [
    { path: ':id', component: PostComponent},
    { path: '', component: PostListComponent}
  ]
}];

@NgModule({
  imports: [
    CommonModule,HttpClientModule,RouterModule.forChild(routes)
  ],
  exports:[PostRootComponent],
  declarations: [PostComponent, PostRootComponent, PostListComponent, PostHeaderComponent],
  providers: [PostService]

})
export class PostModule { }
