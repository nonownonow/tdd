import TodoList from "./components/TodoList/TodoList";

export default class App {
  rootElement: HTMLElement;
  input: HTMLInputElement;
  list: TodoList;
  todos: string[];
  constructor() {
    this.rootElement = this.createElement();
  }
  createElement() {
    const article = document.createElement("article");
    article.className = "todo-app";
    const h1 = document.createElement("h1");
    h1.textContent = "Todo App";
    this.input = document.createElement("input");
    this.input.placeholder = "Enter todo";
    this.list = new TodoList();
    this.list.render().className = "todo-list";
    article.appendChild(h1);
    article.appendChild(this.input);
    article.appendChild(this.list.render());
    this.bindEvents();
    return article;
  }
  private bindEvents() {
    this.input.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        const input = event.currentTarget as HTMLInputElement;
        const value = input.value.trim();
        if (value) {
          this.list.addTodo(value);
        }
        input.value = "";
      }
    });
  }
  render() {
    return this.rootElement;
  }
}
