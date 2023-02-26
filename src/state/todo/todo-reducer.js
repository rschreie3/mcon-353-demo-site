const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return { todos: [...state.todos, action.todo] };
    }
  }
};

const addAction = {
  type: "ADD",
  todo: { title: "whatever", isComplete: false },
};
