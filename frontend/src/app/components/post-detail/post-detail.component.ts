import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent implements OnInit {
  post: any;

  constructor(private blogService: BlogService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.blogService.getPostById(id!).subscribe(data => {
      this.post = data;
    });
  }

}
