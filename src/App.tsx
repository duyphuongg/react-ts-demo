import { useState } from "react";
import styled from "styled-components"
import Header from "./components/Header";
import List from "./components/Lists";

const TodoStyled = styled.div`
max-width: 800px;
display: block;
margin: auto;
padding: 20px;
border: 1px solid;

.todo-header{
  display: flex;
  input{
    padding: 8px 12px;
    width: 100%;
  }
  button{
    padding: 8px 26px;
    margin-left: 8px;
  }
}
.todo-lists{
  &__header{

  }
  &__content{
    ul{
      list-style: none;
      padding: 0;
      li{
        display: flex;
        align-items: center;

        &.done p{
          text-decoration: line-through;
        }

        p{
          margin-left: 8px;
        }
        button{
          margin-left: auto;
          padding: 8px 12px;
        }
      }
    }
  }
}
`;

interface Todo {
  status: boolean
  work: string
}

function App() {
  const [inputTodo, setInputTodo] = useState<string>("")
  const [todoLists, setTodoLists] = useState<Todo[]>([])

  const handleChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
    setInputTodo(event.currentTarget.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddWork()
    }
  }
  const handleAddWork = () => {
    if (inputTodo.length === 0) return;
    setTodoLists(prev => [...prev, { status: false, work: inputTodo }])
    setInputTodo("")
  }
  const handleRemoveWork = (index: number) => {
    setTodoLists(prev => prev.filter((_, i) => i !== index))
  }

  const handleCheckDoneWork = (index: number) => {
    setTodoLists(prev => {
      const clone = JSON.parse(JSON.stringify(prev))
      clone[index].status = !clone[index].status
      return clone
    })
  }

  return (
    <TodoStyled>
      <div className="todo-wrap">
        <Header inputTodo={inputTodo} handleAddWork={handleAddWork} handleChangeInput={handleChangeInput} handleKeyDown={handleKeyDown} />
        <List todoLists={todoLists} handleCheckDoneWork={handleCheckDoneWork} handleRemoveWork={handleRemoveWork} />
      </div>
    </TodoStyled>
  );
}

export default App;
