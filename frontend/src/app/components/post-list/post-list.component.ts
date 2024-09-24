import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog-service.service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  posts: any[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getAllPosts().subscribe(data => {
      this.posts = data;
    });
  }

}
