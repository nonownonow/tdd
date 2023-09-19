import TodoList from "./components/TodoList/TodoList";
import "./App.css";

export default class App {
  rootElement: HTMLElement;
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
    this.list = new TodoList();
    this.list.render().className = "todo-list";
    article.appendChild(h1);
    article.appendChild(this.list.render());
    return article;
  }
  render() {
    return this.rootElement;
  }
}
