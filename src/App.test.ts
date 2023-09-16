import App from "./App";
import { fireEvent, getByPlaceholderText } from "@testing-library/dom";

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
          <h1>
            Todo App
          </h1>
          <input
            placeholder="What needs to be done?"
            type="text"
          />
          <section
            class="todo-list"
          >
            <ul />
            <span>
              0 items left
            </span>
            <fieldset>
              <label>
                All
                <input
                  name="filter_type"
                  type="radio"
                  value="ALL"
                />
              </label>
              <label>
                Active
                <input
                  name="filter_type"
                  type="radio"
                  value="ACTIVE"
                />
              </label>
              <label>
                Complete
                <input
                  name="filter_type"
                  type="radio"
                  value="COMPLETED"
                />
              </label>
            </fieldset>
            <button
              class="clear-completed"
            >
              Clear Completed (0)
            </button>
          </section>
        </article>
      </div>
    `);
  });
  describe("입력부", () => {
    let input: HTMLInputElement;
    beforeEach(() => {
      input = getByPlaceholderText(container, "What needs to be done?");
    });
    test("Todo를 입력받을 수 있는 input이 존재합니다.", () => {
      expect(input).toBeInTheDocument();
    });
    test("input을 통해 Todo를 입력할 수 있으며, enter키로 Todo를 등록할 수 있습니다.등록과 동시에 input의 내용은 초기화되어야 합니다.", () => {
      fireEvent.input(input, { target: { value: "New Todo" } });
      fireEvent.keyUp(input, { key: "Enter", code: "Enter" });
      const todoList = container.querySelector(".todo-list");
      expect(todoList).toHaveTextContent("New Todo");
      expect(input.value).toBe("");
    });
  });
});
