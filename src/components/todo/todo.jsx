import { CheckBox } from "@mui/icons-material";
import React, {useState} from "react";

export const Todo = () => {
    const [input, setInput] = useState('');

    const [todos, setTodos] = useState (
     ['finish homework', 
     'eat dinner', 
     'sleep'
    ]);

    const onInput = (event) => {
        setInput(event.target.value)
    }

    const addTodo = () => {
        setTodos([...todos, input])
    }


    return (
        <div>
            <h1>Todos</h1>
            <input onInput={onInput}/>
            <button onClick={addTodo}>Add</button>
            {
                todos.map((todo) => (
                    <p>
                        <input type="checkbox"/>
                        {todo}
                    </p>
                ))        
            }

        </div>
    )
}

