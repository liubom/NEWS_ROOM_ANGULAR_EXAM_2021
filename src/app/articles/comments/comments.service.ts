import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IArticleComment} from "../../interfaces/article-comment";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getComments(id: number):  Observable<Array<IArticleComment>>{
    return this.http.get<Array<IArticleComment>>(`http://localhost:5001/articles/${id}/comments`);
  }

  addComment(postId: number, username: string | null, comment: string) {
    return this.http.post<IArticleComment>(`http://localhost:5001/articles/${postId}/comments`, {
      postId: postId,
      username: username,
      comment: comment
    });
  }
}
