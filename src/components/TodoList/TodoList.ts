export default class TodoList {
  ulElement: HTMLUListElement;
  todos: string[];

  constructor() {
    this.createElement();
  }
  private createElement() {
    this.ulElement = document.createElement("ul");
    this.ulElement.classList.add("todo-list");
  }
  addTodo(todo: string) {
    const todoItem = document.createElement("li");
    todoItem.textContent = todo;
    this.ulElement.insertBefore(todoItem, this.ulElement.firstChild);
  }
  render() {
    return this.ulElement;
  }
}
