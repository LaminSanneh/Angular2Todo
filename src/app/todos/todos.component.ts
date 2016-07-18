import { Component, OnInit } from '@angular/core';
import {TodoComponent} from  "../todo";

@Component({
  moduleId: module.id,
  selector: 'todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css'],
  directives: [TodoComponent]
})
export class TodosComponent implements OnInit {
  public todos = [];
  todoTitle: "";
  constructor() {
    [1,2,3].forEach( (i) => { this.todos.push({title: "Todo "+ i }); });
  }

  ngOnInit() {
  }

  deleteTodo(todo) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1)
  }

  onSubmitNewTodo () {
    this.todos.push({title: this.todoTitle});
    this.todoTitle = "";
  }

}
