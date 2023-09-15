import App from "./App";
import { getByPlaceholderText, getByRole } from "@testing-library/dom";

describe("랜더링", () => {
  let container: HTMLDivElement;
  let app: App;
  beforeEach(() => {
    container = document.createElement("div");
    app = new App();
    container.appendChild(app.render());
    document.body.appendChild(container);
  });
  afterEach(() => {
    container.innerHTML = "";
  });
  test("스냅샷", () => {
    expect(container).toMatchInlineSnapshot(`
      <div>
        <article
          class="todo-app"
        >
          <input
            placeholder="Enter todo"
          />
          <ul
            class="todo-list"
          />
        </article>
      </div>
    `);
  });
  test("should render TodoInput", () => {
    const input = getByPlaceholderText(container, "Enter todo");
    expect(input).toBeInTheDocument();
  });
  test("should render ToDoList", () => {
    const list = container.querySelector(".todo-list");
    expect(list).toBeInTheDocument();
  });
});
