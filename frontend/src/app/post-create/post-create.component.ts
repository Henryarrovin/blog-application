import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [FormsModule],
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
