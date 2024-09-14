import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
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
