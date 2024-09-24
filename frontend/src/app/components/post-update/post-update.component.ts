import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-update',
  standalone: true,
  imports: [],
  templateUrl: './post-update.component.html',
  styleUrl: './post-update.component.css'
})
export class PostUpdateComponent implements OnInit {
  post: any;

  constructor(private blogService: BlogService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.blogService.getPostById(id!).subscribe(data => {
      this.post = data;
    });
  }

  updatePost(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.blogService.updatePost(id!, this.post).subscribe(() => {
      this.router.navigate(['/post', id]);
    });
  }
}
