import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostUpdateComponent } from './post-update/post-update.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { MyInterceptor } from './interceptors/my-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDetailComponent,
    PostCreateComponent,
    PostUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
