interface Todo {
  status: boolean
  work: string
}

interface ListProps {
  todoLists: Todo[],
  handleCheckDoneWork: (index: number) => void
  handleRemoveWork: (index: number) => void
}

const List = ({ todoLists, handleCheckDoneWork, handleRemoveWork }: ListProps) => {
  return (<div className="todo-lists">
    <div className="todo-lists__header">
      <h4>Todo List</h4>
    </div>
    <div className="todo-lists__content">
      <ul>
        {todoLists.map((todo, index) => (
          <li className={todo.status ? "done" : ""}>
            <input type="checkbox" name="" checked={todo.status} onChange={() => handleCheckDoneWork(index)} />
            <p>{todo.work}</p>
            <button onClick={() => handleRemoveWork(index)}>X</button>
          </li>)
        )}
      </ul>
    </div>
  </div>);
}

export default List;