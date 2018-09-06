import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  newTodo: Todo = {
    userId: 0,
    title: '',
    completed: false
  };
  constructor(
    public todoService: TodoService,
    public router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
  }

  onAdd() {
    this.spinner.show();

   this.todoService.addTodo(this.newTodo).subscribe((data: Todo) => {

     this.toastr.success(`Todo #${data.id} successfully added.`, 'Success!');
     this.router.navigate(['/']);

     this.spinner.hide();
   }, error => {
     this.toastr.error(`${error.message}`, 'Error!');

     this.spinner.hide();
   });
  }

}
