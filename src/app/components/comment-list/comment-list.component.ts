import { Component, OnInit } from '@angular/core';
import {Comment} from "../../models/comment.model";
import {COMMENTS} from "./comments.mockup";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  public comments: Comment[] = [];

    ngOnInit(): void {
      this.comments = COMMENTS;
    }

    public addComment(comment: Comment): void {
      this.comments.push(comment);
    }

    public filter(e: KeyboardEvent) {
      const value = (e.target as HTMLInputElement).value.toLocaleLowerCase();
      if (value) {
        this.comments = this.comments.filter(comment => comment.name.toLocaleLowerCase().includes(value));
      } else {
        this.comments = COMMENTS;
      }
}
}
