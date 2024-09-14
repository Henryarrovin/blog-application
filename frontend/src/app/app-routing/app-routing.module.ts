import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from '../post-list/post-list.component';
import { PostDetailComponent } from '../post-detail/post-detail.component';
import { PostCreateComponent } from '../post-create/post-create.component';
import { PostUpdateComponent } from '../post-update/post-update.component';

export const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostListComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: 'create', component: PostCreateComponent },
  { path: 'update/:id', component: PostUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
