import TodoList from "./TodoList";
import { fireEvent, queryByText } from "@testing-library/dom";

jest.mock("../../util", () => {
  let i = 0;
  return {
    generateUUID: () => `mocked-uuid-${i++}`,
  };
});
let mockingDate = 0;
Date.now = jest.fn(() => mockingDate++);
describe("TodoList", () => {
  let container: HTMLDivElement;
  let todoList: TodoList;
  let item1: HTMLLIElement;
  let item1Checkbox: HTMLInputElement;
  let item1Label: HTMLLabelElement;
  let item1DeleteButton: HTMLButtonElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    todoList = new TodoList();
    container.appendChild(todoList.render());
    todoList.addTodo("Task 1");
    item1 = container.querySelector(".todo-item");
    item1Checkbox = item1.querySelector("input[type=checkbox]");
    item1Label = item1.querySelector("label");
    item1DeleteButton = item1.querySelector(".delete-btn");
  });
  afterEach(() => {
    container.innerHTML = "";
    mockingDate = 0;
  });
  describe("구조", () => {
    test("스냅샷", () => {
      expect(container).toMatchInlineSnapshot(`
        <div>
          <section
            class="todo-list"
          >
            <input
              class="todo-item-input"
              placeholder="What needs to be done?"
              type="text"
            />
            <ul
              class="todo-item-list"
            >
              <li
                class="todo-item"
              >
                <label
                  for="idmocked-uuid-0"
                >
                  Task 1
                </label>
                <input
                  id="idmocked-uuid-0"
                  type="checkbox"
                />
                <button
                  class="delete-btn"
                >
                  삭제
                </button>
              </li>
            </ul>
            <div
              class="todo-info"
            >
              <span>
                1 items left
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
            </div>
          </section>
        </div>
      `);
    });
    describe("Todo 아이템 구성", () => {
      beforeEach(() => {});
      describe("완료 여부를 나타내는 checkbox", () => {
        test("preview 에는 checkbox 가 없지만 의미적으로 존재하도록 구현합니다", () => {
          expect(item1Checkbox).toBeInTheDocument();
        });
      });
      test("내용을 나타내는 textNode", () => {
        expect(item1Label).toHaveTextContent("Task 1");
      });
      test("삭제 버튼", () => {
        expect(item1DeleteButton).toBeInTheDocument();
      });
    });
  });

  describe("기능", () => {
    test("등록된 Todo 아이템은 Todo 목록 상단에 추가됩니다.", () => {
      todoList.addTodo("Task 1");
      todoList.addTodo("Task 2");
      const list = container.querySelector(".todo-item-list");
      const firstTodo = list?.firstElementChild;
      const label = firstTodo.querySelector("label");
      expect(label).toHaveTextContent("Task 2");
    });
    describe("Todo 아이템은 토글 방식으로 상태를 변경할 수 있습니다.", () => {
      test("checkbox 를 클릭 또는 textNode 를 클릭하여 완료 처리할 수 있습니다.", () => {
        fireEvent.click(item1Label);
        expect(item1Checkbox).toBeChecked();
        fireEvent.click(item1Label);
        expect(item1Checkbox).not.toBeChecked();
      });
      test("`완료 상태`와 `완료 전` 상태를 구분할 수 있도록 시각적으로 자유롭게 표현합니다.", () => {
        let item1Checkbox = document.querySelector("input[type=checkbox]");
        fireEvent.click(item1Checkbox);
        let item1 = document.querySelector(".todo-item");
        expect(item1.classList.contains("completed")).toBe(true);
        item1Checkbox = document.querySelector("input[type=checkbox]");
        fireEvent.click(item1Checkbox);
        item1 = document.querySelector(".todo-item");
        expect(item1.classList.contains("completed")).toBe(false);
      });
    });
    test("삭제 버튼 클릭시 해당되는 Todo 아이템을 삭제 합니다.", () => {
      let item1 = document.querySelector(".todo-item");
      const deleteBtn = item1.querySelector(".delete-btn");
      fireEvent.click(deleteBtn);
      item1 = document.querySelector(".todo-item");
      expect(item1).not.toBeInTheDocument();
    });
    test("완료된 Todo 아이템은 Todo 목록의 하단으로 이동시킵니다. ", () => {
      todoList.addTodo("Work 1");
      todoList.addTodo("Work 2");
      todoList.addTodo("Work 3");
      const item2 = queryByText(container, "Work 2");
      fireEvent.click(item2);
      const lastTodo = todoList.render().querySelector("li:last-child");
      expect(lastTodo).toHaveTextContent("Work 2");
    });
  });
});
describe("기능", () => {
  let container: HTMLDivElement;
  let todoList: TodoList;
  let mockingDate = 0;

  beforeEach(() => {
    Date.now = jest.fn(() => mockingDate++);
    container = document.createElement("div");
    document.body.appendChild(container);
    todoList = new TodoList();
    container.appendChild(todoList.render());
  });
  afterEach(() => {
    container.innerHTML = "";
    mockingDate = 0;
  });
  describe("`전체`, `완료 전`, `완료` Todo 아이템을 필터 할 수 있는 기능을 제공합니다.", () => {
    test("전체", () => {
      todoList.addTodo("task 1");
      todoList.addTodo("task 2");
      fireEvent.click(queryByText(container, "task 1"));
      fireEvent.click(queryByText(container, "All"));
      expect(container.querySelectorAll(".todo-item").length).toBe(2);
    });
    test("완료 전", () => {
      todoList.addTodo("task 1");
      todoList.addTodo("task 2");
      fireEvent.click(queryByText(container, "task 1"));
      fireEvent.click(queryByText(container, "Active"));
      expect(container.querySelectorAll(".todo-item").length).toBe(1);
    });
    test("완료", () => {
      todoList.addTodo("task 1");
      todoList.addTodo("task 2");
      todoList.addTodo("task 3");
      fireEvent.click(queryByText(container, "task 1"));
      fireEvent.click(queryByText(container, "task 2"));
      fireEvent.click(queryByText(container, "Complete"));
      expect(container.querySelectorAll(".todo-item").length).toBe(2);
    });
    test("필터 조건에 맞는 Todo 아이템의 개수를 출력합니다.", () => {
      todoList.addTodo("task 1");
      todoList.addTodo("task 2");
      todoList.addTodo("task 3");
      fireEvent.click(queryByText(container, "task 1"));
      fireEvent.click(queryByText(container, "task 2"));
      fireEvent.click(queryByText(container, "Complete"));
    });
  });
  test("완료 된 Todo 항목을 제거하는 삭제 기능을 제공합니다.", () => {
    todoList.addTodo("task 1");
    todoList.addTodo("task 2");
    todoList.addTodo("task 3");
    fireEvent.click(queryByText(container, "task 1"));
    fireEvent.click(queryByText(container, "task 2"));
    const clearBtn = container.querySelector(".clear-completed");
    fireEvent.click(clearBtn);
    const remainTodos = container.querySelectorAll(".todo-item");
    expect(remainTodos.length).toBe(1);
  });
});
