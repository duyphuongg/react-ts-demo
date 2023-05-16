interface HeaderProps {
  inputTodo: string,
  handleChangeInput: (event: React.FormEvent<HTMLInputElement>) => void
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
  handleAddWork: () => void
}

function Header({ inputTodo, handleChangeInput, handleKeyDown, handleAddWork }: HeaderProps) {
  return (<div className="todo-header">
    <input type="text" value={inputTodo} onInput={handleChangeInput} onKeyDown={handleKeyDown} placeholder="What needs to be done?" />
    <button onClick={handleAddWork} >Add</button>
  </div>);
}

export default Header;