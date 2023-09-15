export default class App {
  private rootElement: HTMLElement;
  constructor() {
    this.rootElement = this.createElement();
  }
  createElement() {
    const article = document.createElement("article");
    article.className = "todo-app";
    const input = document.createElement("input");
    input.placeholder = "Enter todo";
    const list = document.createElement("ul");
    list.className = "todo-list";
    article.appendChild(input);
    article.appendChild(list);
    return article;
  }
  render() {
    return this.rootElement;
  }
}
