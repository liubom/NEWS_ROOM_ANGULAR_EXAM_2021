import {IArticleComment} from "./article-comment";
import {IUser} from "./user";

export interface IArticle {
  id: number;
  img: string;
  title: string;
  preview: string;
  content: string;
  date: string;
  author: string;
  comments: IArticleComment[];
  likes: []
}
