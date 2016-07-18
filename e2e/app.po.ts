export class AngularTodoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular-todo-app h1')).getText();
  }
}
