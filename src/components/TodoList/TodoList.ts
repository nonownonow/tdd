import { generateUUID } from "../../util";

interface Todo {
  id: string;
  content: string;
  createdAt: number;
  completed: boolean;
}

type FilterType = "ALL" | "ACTIVE" | "COMPLETED";
export default class TodoList {
  rootElement: HTMLElement;
  todos: Todo[];
  currentFilter: FilterType;
  constructor() {
    this.rootElement = document.createElement("section");
    this.rootElement.classList.add("todo-list");
    this.todos = [];
    this.currentFilter = "ALL";
  }
  addTodo(todo: string) {
    this.todos.unshift({
      id: generateUUID(),
      createdAt: Date.now(),
      content: todo,
      completed: false,
    });
    this.render();
  }
  filterTodo(todos: Todo[]) {
    switch (this.currentFilter) {
      case "ACTIVE":
        return todos.filter((todo) => !todo.completed);
      case "COMPLETED":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }
  private createTodoItem(todo: Todo) {
    const todoItem = document.createElement("li");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    const deleteButton = document.createElement("button");

    todoItem.className = "todo-item";
    todoItem.dataset.createdAt = String(todo.createdAt);
    if (todo.completed) {
      todoItem.classList.add("completed");
      checkbox.checked = true;
    }
    checkbox.type = "checkbox";
    checkbox.id = todo.id;
    checkbox.addEventListener(
      "change",
      this.handleTodoToggle.bind(this, todo.id)
    );
    label.textContent = todo.content;
    label.htmlFor = todo.id;
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener(
      "click",
      this.handleTodoDelete.bind(this, todo.id)
    );

    todoItem.appendChild(label);
    todoItem.appendChild(checkbox);
    todoItem.appendChild(deleteButton);
    return todoItem;
  }
  private handleTodoDelete(todoId: string) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
    this.render();
  }
  private handleTodoToggle(todoId: string) {
    this.todos.forEach((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
    });
    this.render();
  }
  private createFilterRadio(
    label: string,
    value: FilterType,
    checked: boolean
  ) {
    const $input = document.createElement("input");
    const $label = document.createElement("label");
    $input.type = "radio";
    $input.name = "filter_type";
    $input.value = value;
    $input.checked = checked;
    $label.textContent = label;
    $label.appendChild($input);
    $input.addEventListener("change", () => {
      this.currentFilter = value;
      this.render();
    });
    return $label;
  }
  private createFilterRadioFieldset() {
    const fieldset = document.createElement("fieldset");
    Object.entries({
      ALL: "All",
      ACTIVE: "Active",
      COMPLETED: "Complete",
    }).forEach(([value, label]: [FilterType, string]) => {
      fieldset.appendChild(
        this.createFilterRadio(label, value, value === this.currentFilter)
      );
    });
    return fieldset;
  }
  private createItemList(todos: Todo[]) {
    const itemList = document.createElement("ul");

    todos.forEach((todo) => {
      itemList.appendChild(this.createTodoItem(todo));
    });
    return itemList;
  }
  private createCountDisplay(todoCount: number) {
    const countDisplay = document.createElement("span");
    countDisplay.textContent = `${todoCount} items left`;
    return countDisplay;
  }
  private createClearCompletedButton() {
    const clearButton = document.createElement("button");
    const completedTodos = this.todos.filter((todo) => todo.completed);
    const activeTodos = this.todos.filter((todo) => !todo.completed);
    clearButton.textContent = `Clear Completed (${completedTodos.length})`;
    clearButton.className = "clear-completed";
    clearButton.addEventListener("click", () => {
      this.todos = activeTodos;
      this.render();
    });
    return clearButton;
  }
  render() {
    const sortedTodos = [...this.todos].sort((a, b) => {
      if (a.completed === b.completed) {
        return b.createdAt - a.createdAt;
      }
      return a.completed ? 1 : -1;
    });
    const filteredTodos = this.filterTodo(sortedTodos);
    this.rootElement.innerHTML = "";
    this.rootElement.appendChild(this.createItemList(filteredTodos));
    this.rootElement.appendChild(this.createFilterRadioFieldset());
    this.rootElement.appendChild(this.createCountDisplay(filteredTodos.length));
    this.rootElement.appendChild(this.createClearCompletedButton());
    return this.rootElement;
  }
}
