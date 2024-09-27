import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css'
})
export class PostCreateComponent {
  post: any = { title: '', content: '', author: '' };

  constructor(private blogService: BlogService, private router: Router) {}

  createPost(): void {
    this.blogService.createPost(this.post).subscribe(() => {
      this.router.navigate(['/posts']);
    });
  }

}
