import { Component } from '@angular/core';
import {TodosComponent} from "./todos";

@Component({
  moduleId: module.id,
  selector: 'angular-todo-app',
  templateUrl: 'angular-todo.component.html',
  outputs: ['deleteTodo'],
  styleUrls: ['angular-todo.component.css'],
  directives: [TodosComponent]
})
export class AngularTodoAppComponent {
  title = 'angular-todo works!';
}
