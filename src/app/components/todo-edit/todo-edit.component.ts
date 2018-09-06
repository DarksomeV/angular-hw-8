import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../../models/Todo';
import {TodoService} from '../../services/todo.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  todoId: number;
  todo: Todo;
  isReadOnly = true;
  constructor(
    public todoServise: TodoService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public spinner: NgxSpinnerService,
    public toastr: ToastrService
  ) { }

  ngOnInit() {
    this.spinner.show();

    this.todoId = this.activatedRoute.snapshot.params['id'];

    this.todoServise.getTodo(this.todoId).subscribe((response: Todo ) => {
      this.todo = response;
      this.spinner.hide();
    }, err => {
      this.toastr.error(`${err.message}`, 'Error!');

      this.spinner.hide();
    });
  }

  onEdit() {
    this.spinner.show();
    this.isReadOnly = false;
    const updTodo = Object.assign({}, this.todo);
    this.todoServise.updateTodo(updTodo).subscribe((response: Todo) => {
      this.toastr.success(`Todo #${response.id} successfully edited.`, 'Success!');
      this.spinner.hide();
      this.router.navigate(['/']);
    }, err => {
      console.log(err);
      this.toastr.error(`${err.message}`, 'Error!');
      this.spinner.hide();
    });
  }

}
