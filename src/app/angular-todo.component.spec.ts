import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngularTodoAppComponent } from '../app/angular-todo.component';

beforeEachProviders(() => [AngularTodoAppComponent]);

describe('App: AngularTodo', () => {
  it('should create the app',
      inject([AngularTodoAppComponent], (app: AngularTodoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular-todo works!\'',
      inject([AngularTodoAppComponent], (app: AngularTodoAppComponent) => {
    expect(app.title).toEqual('angular-todo works!');
  }));
});
