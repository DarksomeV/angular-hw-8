import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  date: Date = new Date();
  array: number[] = [1, 2, 3, 4, 5, 6];
  pipeForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.pipeForm = new FormGroup({
      number: new FormControl('',[Validators.required])
    });
  }

  onAdd() {
    this.array.push(Number(this.pipeForm.value.number));
    console.log(this.array);
  }
}
