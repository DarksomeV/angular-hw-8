import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { TodoService } from '../../services/todo.service';
import {User} from '../../models/User';
import { Todo } from '../../models/Todo';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
users: User[] = [];
todos: Todo[];
testPipe = ['One', 'Two'];
  constructor(
    public  usersService: UsersService,
    public  todosService: TodoService,
    public spinner: NgxSpinnerService,
    public toastr: ToastrService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.usersService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    }, err => {
      this.toastr.error(`${err.message}`, 'Error!');
      this.spinner.hide();
    });

    this.todosService.getTodos().subscribe((data: Todo[]) => {
      this.todos = data;
    }, err => {
      this.toastr.error(`${err.message}`, 'Error!');
      this.spinner.hide();
    });

    this.spinner.hide();
  }

  onDeleteTodo(id: number) {
    this.spinner.show();

    this.todosService.deleteTodo(id).subscribe((data: Object) => {
      this.todos = this.todos.filter(todo => todo.id != id);
      this.toastr.success(`Todo #${id} successfully deleted.`, 'Success!');

    }, err => {
      this.toastr.error(`${err.message}`, 'Error!');
      this.spinner.hide();
    });

    this.spinner.hide();
  }

}
