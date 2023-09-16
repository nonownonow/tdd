import TodoList from "./TodoList";
import { fireEvent } from "@testing-library/dom";

describe("TodoList", () => {
  let container: HTMLDivElement;
  let todoList: TodoList;
  let item: HTMLLIElement;
  let itemCheckbox: HTMLInputElement;
  let itemLabel: HTMLLabelElement;
  let deleteButton: HTMLButtonElement;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    todoList = new TodoList();
    container.appendChild(todoList.render());
    todoList.addTodo("Task 1");
    item = container.querySelector(".todo-item");
    itemCheckbox = item.querySelector("input[type=checkbox]");
    itemLabel = item.querySelector("label");
    deleteButton = item.querySelector(".delete-btn");
  });
  afterEach(() => {
    container.innerHTML = "";
  });
  describe("구조", () => {
    test("스냅샷", () => {
      expect(container).toMatchInlineSnapshot(`
        <div>
          <ul
            class="todo-list"
          >
            <li
              class="todo-item"
            >
              <label
                for="todo-complete"
              >
                Task 1
              </label>
              <input
                id="todo-complete"
                type="checkbox"
              />
              <button
                class="delete-btn"
              />
            </li>
          </ul>
        </div>
      `);
    });
    describe("Todo 아이템 구성", () => {
      beforeEach(() => {});
      describe("완료 여부를 나타내는 checkbox", () => {
        test("preview 에는 checkbox 가 없지만 의미적으로 존재하도록 구현합니다", () => {
          expect(itemCheckbox).toBeInTheDocument();
        });
      });
      test("내용을 나타내는 textNode", () => {
        expect(itemLabel).toHaveTextContent("Task 1");
      });
      test("삭제 버튼", () => {
        expect(deleteButton).toBeInTheDocument();
      });
    });
  });

  describe("기능", () => {
    test("등록된 Todo 아이템은 Todo 목록 상단에 추가됩니다.", () => {
      todoList.addTodo("Task 1");
      todoList.addTodo("Task 2");
      const list = container.querySelector(".todo-list");
      const firstTodo = list?.firstChild;
      expect(firstTodo).toHaveTextContent("Task 2");
    });
    describe("Todo 아이템은 토글 방식으로 상태를 변경할 수 있습니다.", () => {
      test("checkbox 를 클릭 또는 textNode 를 클릭하여 완료 처리할 수 있습니다.", () => {
        fireEvent.click(itemLabel);
        expect(itemCheckbox).toBeChecked();
        fireEvent.click(itemLabel);
        expect(itemCheckbox).not.toBeChecked();
      });
      test("`완료 상태`와 `완료 전` 상태를 구분할 수 있도록 시각적으로 자유롭게 표현합니다.", () => {
        fireEvent.click(itemCheckbox);
        expect(item.classList.contains("completed")).toBe(true);
        fireEvent.click(itemCheckbox);
        expect(item.classList.contains("completed")).toBe(false);
      });
    });
    test("삭제 버튼 클릭시 해당되는 Todo 아이템을 삭제 합니다.", () => {
      fireEvent.click(deleteButton);
      expect(item).not.toBeInTheDocument();
    });
  });
});
