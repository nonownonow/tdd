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
  offsetX: number = 0;
  private draggedItemIndex: number | null = null;
  private mirror: HTMLElement | null = null;
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
    deleteButton.textContent = "삭제";
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
  private findTodoIdFromElement(element: HTMLElement): string {
    const checkbox = element.querySelector('input[type="checkbox"]');
    return checkbox ? checkbox.id : "";
  }
  private handleMousedown = (event: MouseEvent) => {
    console.log("mouseDown");
    const target = event.target as HTMLElement;
    const todoElement = target.closest(".todo-item") as HTMLElement;
    if (!todoElement) return;

    const todoId = this.findTodoIdFromElement(todoElement);
    this.draggedItemIndex = this.todos.findIndex((todo) => todo.id === todoId);
    if (this.draggedItemIndex === -1) return;

    this.mirror = todoElement.cloneNode(true) as HTMLElement;
    this.mirror.style.position = "absolute";
    this.mirror.style.opacity = "0.5";
    this.mirror.style.pointerEvents = "none";
    this.mirror.style.width = "100%";
    const rect = todoElement.getBoundingClientRect();

    this.offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    this.mirror.style.position = "fixed";
    this.mirror.style.top = `${event.clientY - offsetY}px`;
    this.mirror.style.left = `${event.clientX - this.offsetX}px`;
    this.mirror.style.width = `${rect.width}px`;
    this.rootElement.appendChild(this.mirror);
  };

  private handleMousemove = (event: MouseEvent) => {
    if (this.draggedItemIndex === null || !this.mirror) return;

    const rect = this.mirror.getBoundingClientRect();
    this.mirror.style.top = `${event.clientY - rect.height / 2}px`;
    this.mirror.style.left = `${event.clientX - this.offsetX}px`;
  };

  private handleMouseup = () => {
    if (this.draggedItemIndex === null || !this.mirror) return;

    this.mirror.remove();
    this.mirror = null;

    this.draggedItemIndex = null;

    this.render();
  };

  private handleKeyup = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      if (this.draggedItemIndex !== null && this.mirror) {
        this.mirror.remove();
        this.mirror = null;
        this.draggedItemIndex = null;
      }
    }
  };
  private getFilteredTodos = () => {
    const sortedTodos = [...this.todos].sort((a, b) => {
      if (a.completed === b.completed) {
        return b.createdAt - a.createdAt;
      }
      return a.completed ? 1 : -1;
    });
    return this.filterTodo(sortedTodos);
  };
  render() {
    const filteredTodos = this.getFilteredTodos();
    this.rootElement.innerHTML = "";
    this.rootElement.appendChild(this.createItemList(filteredTodos));
    this.rootElement.appendChild(this.createCountDisplay(filteredTodos.length));
    this.rootElement.appendChild(this.createFilterRadioFieldset());
    this.rootElement.appendChild(this.createClearCompletedButton());
    this.rootElement.addEventListener("mousedown", this.handleMousedown);
    // document.addEventListener("mousemove", this.handleMousemove);
    // document.addEventListener("mouseup", this.handleMouseup);
    // document.addEventListener("keyup", this.handleKeyup);
    return this.rootElement;
  }
}
