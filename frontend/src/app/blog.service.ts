import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private baseUrl = 'http://localhost:8086/api';

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllPosts`);
  }

  getPostById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getPostById/${id}`);
  }

  createPost(post: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/createPost`, post);
  }

  updatePost(id: string, post: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updatePost/${id}`, post);
  }

  deletePost(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deletePost/${id}`);
  }
}
