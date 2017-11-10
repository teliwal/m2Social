import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserRootComponent } from './user-root/user-root.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{
  path: 'users', component: UserRootComponent,
  children : [
    { path: ':id', component: UserComponent},
    { path: '', component: UserListComponent}
  ]
}];

@NgModule({
  imports: [
    CommonModule,HttpClientModule,RouterModule.forChild(routes)
  ],
  exports:[UserRootComponent],
  declarations: [UserListComponent, UserRootComponent, UserHeaderComponent, UserComponent],
  providers:[UserService]
})
export class UserModule { }
