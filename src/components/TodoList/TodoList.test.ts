import TodoList from "./TodoList";

describe("랜더링", () => {
  let container: HTMLDivElement;
  let todoList: TodoList;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    todoList = new TodoList();
    container.appendChild(todoList.render());
  });
  afterEach(() => {
    container.innerHTML = "";
  });
  test("스냅샷", () => {
    expect(container).toMatchInlineSnapshot(`
      <div>
        <ul
          class="todo-list"
        />
      </div>
    `);
  });

  test("등록된 Todo 아이템은 Todo 목록 상단에 추가됩니다.", () => {
    todoList.addTodo("Task 1");
    todoList.addTodo("Task 2");
    const list = container.querySelector(".todo-list");
    const firstTodo = list?.firstChild;
    expect(firstTodo).toHaveTextContent("Task 2");
  });
});
