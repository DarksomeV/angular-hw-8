import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  todoAddForm: FormGroup;

  constructor(
    public todoService: TodoService,
    public router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.todoAddForm = new FormGroup({
      userId: new FormControl('',[Validators.required]),
      title: new FormControl('',[Validators.required]),
      completed: new FormControl('')
    });
  }

  onAdd() {
    console.log(this.todoAddForm);
    if (this.todoAddForm.invalid) {return; }
    this.spinner.show();

    const newTodo: Todo = {
      userId: this.todoAddForm.value.userId,
      title: this.todoAddForm.value.title,
      completed: this.todoAddForm.value.completed
    };

   this.todoService.addTodo(newTodo).subscribe((data: Todo) => {

     this.toastr.success(`Todo #${data.id} successfully added.`, 'Success!');
     this.router.navigate(['/']);

     this.spinner.hide();
   }, error => {
     this.toastr.error(`${error.message}`, 'Error!');

     this.spinner.hide();
   });
  }

}
