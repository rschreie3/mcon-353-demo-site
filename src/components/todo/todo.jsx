import React, { useState, useContext } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
import "../home/home.css";
import { Typography } from "@mui/material";
import Input from "@mui/material/Input";
import AddIcon from "@mui/icons-material/Add";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { TodoContext } from "../../state/todo/todo-context";

export const Todo = () => {
  const [input, setInput] = useState("");

  const { todoState, todoDispatch } = useContext(TodoContext);

  const onInput = (event) => {
    setInput(event.target.value);
  };

  const addTodo = () => {
    todoDispatch({
      type: "ADD",
      todo: { title: input, isComplete: false },
    });
    setInput("");
  };

  const toggleChecked = (todo) => {
    todoDispatch({
      type: "TOGGLE",
      todo: todo,
    });
  };

  const deleteTodo = (todo) => {
    todoDispatch({
      type: "DELETE",
      todo: todo,
    });
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
        <Input
          placeholder="type here..."
          onInput={onInput}
          value={input}
          sx={{
            minWidth: 350,
          }}
        />
        <IconButton variant="outlined" onClick={addTodo} size="small">
          <AddIcon />
        </IconButton>
      </div>

      <Box
        component="form"
        sx={{
          margin: 2,
          width: "100%",
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
      >
        <Stack
          spacing={2}
          sx={{
            maxWidth: 500,
            margin: "auto",
          }}
        >
          {todoState.todos.map((todo, index) => (
            <Item key={index}>
              <Checkbox
                checked={todo.isComplete}
                onChange={() => toggleChecked(todo)}
                icon={<CheckCircleOutlineIcon />}
                checkedIcon={<CheckCircleIcon />}
                size="small"
              />

              {todo.title}

              <IconButton
                variant="outlined"
                onClick={() => deleteTodo(todo)}
                size="small"
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </Item>
          ))}
        </Stack>
      </Box>
    </>
  );
};
