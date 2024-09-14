import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: any[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getAllPosts().subscribe(data => {
      this.posts = data;
    });
  }
}
