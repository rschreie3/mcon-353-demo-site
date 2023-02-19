import { CheckBox } from "@mui/icons-material";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
import "../home/home.css";
import { Typography } from "@mui/material";

export const Todo = () => {
  const [input, setInput] = useState("");

  const [todos, setTodos] = useState([
    {
      title: "finish homework",
      isComplete: false,
    },
    {
      title: "sleep",
      isComplete: false,
    },
  ]);

  const onInput = (event) => {
    setInput(event.target.value);
  };

  const addTodo = () => {
    setTodos([...todos, { title: input, isComplete: false }]);
    setInput("");
  };

  const toggleChecked = (todo) => {
    const newTodos = [...todos];
    const updatedTodo = newTodos.find((x) => x.title === todo.title);
    updatedTodo.isComplete = !todo.isComplete;
    setTodos(newTodos);
  };

  const deleteTodo = (todo) => {
    const newTodos = todos.filter((x) => !(x.title === todo.title));
    setTodos(newTodos);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Typography
        variant="h3"
        align="center"
        sx={{
          margin: 2,
          fontFamily: "sans-serif",
          fontWeight: 700,
          letterSpacing: ".3rem",
        }}
      >
        To-do List
      </Typography>

      <div align="center">
        <input onInput={onInput} value={input} />
        <button onClick={addTodo}>Add</button>
      </div>

      <Box
        sx={{
          margin: 2,
          width: "100%",
        }}
      >
        <Stack spacing={2}>
          {todos.map((todo, index) => (
            <Item key={index}>
                <input
                  type="checkbox"
                  checked={todo.isComplete}
                  onChange={() => toggleChecked(todo)}
                />
                {todo.title}

                <IconButton 
                variant="outlined" 
                onClick={() => deleteTodo(todo)}
                size="small"
                >
                 <DeleteIcon fontSize="inherit"/>
                </IconButton>
            </Item>
          ))}
        </Stack>
      </Box>
    </>
  );
};
