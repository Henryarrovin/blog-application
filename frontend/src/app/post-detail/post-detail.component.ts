import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: any;

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.blogService.getPostById(id!).subscribe(data => {
      this.post = data;
    });
  }
}
