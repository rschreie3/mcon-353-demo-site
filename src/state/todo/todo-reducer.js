import { cloneDeep } from "lodash";

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return { todos: [...state.todos, action.todo] };
    }
    case "DELETE": {
      return { todos: [] };
    }
    case "TOGGLE": {
      let newTodos = cloneDeep(state.todos);
      const updatedTodo = newTodos.find((x) => x.title === action.todo.title);
      updatedTodo.isComplete = !updatedTodo.isComplete;
      return {
        todos: newTodos,
      };
    }
  }
};

const addAction = {
  type: "ADD",
  todo: { title: "whatever", isComplete: false },
};

const toggleAction = {
  type: "TOGGLE",
  todo: {},
};
