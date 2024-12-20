// posts.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  template: `
    <table>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Body</th>
      </tr>
      <tr *ngFor="let post of posts">
        <td>{{ post.id }}</td>
        <td>{{ post.title }}</td>
        <td>{{ post.body }}</td>
      </tr>
    </table>
  `,
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => this.posts = data);
  }
}
