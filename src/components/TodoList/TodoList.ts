export default class TodoList {
  todoList: HTMLUListElement;
  todos: string[];
  constructor() {
    this.createElement();
  }
  private createElement() {
    this.todoList = document.createElement("ul");
    this.todoList.classList.add("todo-list");
  }
  addTodo(todo: string) {
    const inputId = "todo-complete";

    const todoItem = document.createElement("li");
    todoItem.className = "todo-item";

    const checkbox = this.createCheckbox({ id: inputId });
    checkbox.addEventListener("change", () => {
      todoItem.classList.toggle("completed");
    });

    const label = document.createElement("label");
    label.textContent = todo;
    label.htmlFor = inputId;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.addEventListener("click", () => {
      this.todoList.removeChild(todoItem);
    });
    todoItem.appendChild(label);
    todoItem.appendChild(checkbox);
    todoItem.appendChild(deleteButton);
    this.todoList.insertBefore(todoItem, this.todoList.firstChild);
  }
  createCheckbox({ id }: { id: string }) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = id;
    return checkbox;
  }
  render() {
    return this.todoList;
  }
}
