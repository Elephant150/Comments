import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Comment} from "../../../models/comment.model";

@Component({
  selector: 'app-add-comment-form',
  templateUrl: './add-comment-form.component.html',
  styleUrls: ['./add-comment-form.component.scss']
})
export class AddCommentFormComponent implements OnInit {

  @Output() public addComment: EventEmitter<Comment> = new EventEmitter<Comment>();

  public isShowForm: boolean = false;
  public addCommentForm: FormGroup;

  public showForm(): void {
    this.isShowForm = true;
  }

  ngOnInit(): void {
    this.addCommentForm = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required]}),
      text: new FormControl(null, {validators: [Validators.required]}),
    })
  }

  public onSubmit(): void {
    let name = this.addCommentForm.value.name;
    let text = this.addCommentForm.value.text;
    let comment = new Comment(name, text);
    this.addComment.emit(comment);
    this.addCommentForm.reset();
    this.isShowForm = false;
  }

}
