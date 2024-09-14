import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  post = { title: '', content: '', author: '' };

  constructor(private blogService: BlogService, private router: Router) { }

  createPost() {
    this.blogService.createPost(this.post).subscribe(() => {
      this.router.navigate(['/posts']);
    });
  }
}
