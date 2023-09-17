import { generateUUID } from "../../util";

interface Todo {
  id: string;
  content: string;
  completed: boolean;
  order: number;
}

type FilterType = "ALL" | "ACTIVE" | "COMPLETED";
export default class TodoList {
  private rootElement: HTMLElement;
  private todos: Todo[];
  private filteredTodos: Todo[];
  private currentFilter: FilterType;
  private offsetX: number = 0;
  private clickItemIndex: number;
  private mirror: HTMLElement;
  private initialMousePosition = { x: 0, y: 0 };
  private isDragging = false;
  constructor() {
    this.rootElement = document.createElement("section");
    this.rootElement.classList.add("todo-list");
    this.todos = [];
    this.currentFilter = "ALL";
  }
  addTodo(todo: string) {
    const maxOrder =
      this.todos.length === 0
        ? 0
        : Math.max(...this.todos.map((todo) => todo.order));
    this.todos.unshift({
      id: generateUUID(),
      content: todo,
      completed: false,
      order: maxOrder + 1,
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
  private createItemList() {
    const itemList = document.createElement("ul");

    this.filteredTodos.forEach((todo) => {
      itemList.appendChild(this.createTodoItem(todo));
    });
    return itemList;
  }
  private createCountDisplay() {
    const countDisplay = document.createElement("span");
    countDisplay.textContent = `${this.filteredTodos.length} items left`;
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
    const target = event.target as HTMLElement;
    const todoElement = target.closest(".todo-item") as HTMLElement;
    if (!todoElement) return;
    const todoId = this.findTodoIdFromElement(todoElement);
    this.clickItemIndex = this.filteredTodos.findIndex(
      (todo) => todo.id === todoId
    );
    if (this.clickItemIndex > -1) {
      const target = event.target as HTMLElement;
      const todoElement = target.closest(".todo-item") as HTMLElement;
      this.createDragMirror(event, todoElement);
    }
    this.initialMousePosition = { x: event.x, y: event.y };
  };

  private createDragMirror = (event: MouseEvent, todoElement: HTMLElement) => {
    if (this.clickItemIndex === -1) return;

    if (this.filteredTodos[this.clickItemIndex].completed) return;
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
    if (this.clickItemIndex === null || !this.mirror) return;
    this.moveMirror(event);
  };
  private moveMirror(event: MouseEvent) {
    const rect = this.mirror.getBoundingClientRect();
    this.mirror.style.top = `${event.clientY - rect.height / 2}px`;
    this.mirror.style.left = `${event.clientX - this.offsetX}px`;
  }
  private cancelDrag() {
    if (this.mirror) {
      this.mirror.remove();
      this.mirror = null;
    }
  }
  private handleMouseup = (event: MouseEvent) => {
    if (this.clickItemIndex === null || !this.mirror) return;

    const rootRect = this.rootElement.getBoundingClientRect();
    if (
      event.clientX < rootRect.left ||
      event.clientX > rootRect.right ||
      event.clientY < rootRect.top ||
      event.clientY > rootRect.bottom
    ) {
      this.cancelDrag();
      return;
    }

    const dropTarget = document.elementFromPoint(
      event.clientX,
      event.clientY
    ) as HTMLElement;
    const dropTodoElement = dropTarget.closest(".todo-item") as HTMLElement;
    if (!dropTodoElement) {
      this.cancelDrag();
      return;
    }

    const dropTodoId = this.findTodoIdFromElement(dropTodoElement);
    const dropItemIndex = this.filteredTodos.findIndex(
      (todo) => todo.id === dropTodoId
    );

    if (dropItemIndex !== -1 && dropItemIndex !== this.clickItemIndex) {
      const draggedItem = this.filteredTodos[dropItemIndex];
      const clickItem = this.filteredTodos[this.clickItemIndex];
      this.filteredTodos[dropItemIndex] = clickItem;
      this.filteredTodos[this.clickItemIndex] = draggedItem;
      for (let i = 0; i < this.filteredTodos.length; i++) {
        this.filteredTodos[i].order = this.filteredTodos.length - 1 - i;
      }
      // this.syncWithMainTodos();
      this.render();
    }
    this.cancelDrag();
    this.clickItemIndex = null;
  };
  private syncWithMainTodos() {
    this.todos.sort((a, b) => {
      const indexA = this.filteredTodos.findIndex((todo) => todo.id === a.id);
      const indexB = this.filteredTodos.findIndex((todo) => todo.id === b.id);
      return indexA - indexB;
    });
  }

  private handleKeyup = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      if (this.clickItemIndex !== null && this.mirror) {
        this.cancelDrag();
      }
    }
  };
  private getFilteredTodos = () => {
    const sortedTodos = [...this.todos].sort((a, b) => {
      if (a.completed === b.completed) {
        return b.order - a.order;
      }
      return a.completed ? 1 : -1;
    });
    return this.filterTodo(sortedTodos);
  };
  render() {
    this.filteredTodos = this.getFilteredTodos();
    this.rootElement.innerHTML = "";
    this.rootElement.appendChild(this.createItemList());
    this.rootElement.appendChild(this.createCountDisplay());
    this.rootElement.appendChild(this.createFilterRadioFieldset());
    this.rootElement.appendChild(this.createClearCompletedButton());
    this.rootElement.addEventListener("mousedown", this.handleMousedown);
    document.addEventListener("mousemove", this.handleMousemove);
    document.addEventListener("keyup", this.handleKeyup);
    document.addEventListener("mouseup", this.handleMouseup);
    /*
    ;
    */
    return this.rootElement;
  }
}
