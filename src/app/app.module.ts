import { UserRootComponent } from './user/user-root/user-root.component';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { PostRootComponent} from './post/post-root/post-root.component';

import { AppComponent } from './app.component';

const routes:Routes = [
  {path:'posts', component:PostRootComponent},
  {path:'users',component:UserRootComponent}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,PostModule,UserModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
