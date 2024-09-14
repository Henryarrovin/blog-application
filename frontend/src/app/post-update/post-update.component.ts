import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent implements OnInit {
  post: any = { title: '', content: '', author: '' };

  constructor(private blogService: BlogService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.blogService.getPostById(id!).subscribe(data => {
      this.post = data;
    });
  }

  updatePost() {
    const id = this.route.snapshot.paramMap.get('id');
    this.blogService.updatePost(id!, this.post).subscribe(() => {
      this.router.navigate(['/posts']);
    });
  }
}
