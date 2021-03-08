import {useState} from 'react';
import Button from './components/button';
import TextField from './components/textField';
import ToDoItem from './components/toDoItem';
import './App.css';

interface IItems {
  label: string,
  isDone: boolean,
  id: number
}

let counter = 0; // This counter defines the 'id' of list's items.
function App() {
  const [value, setValue] = useState('');
  const [toDo, setToDo] = useState<IItems []>([]);
  const fromValueToDo = () => {
    setToDo([...toDo, {label: value, isDone: false, id: counter++}]);
    setValue('');
  };
  const clearList = () => {
    setToDo([]);
    setValue('');
  }
  const onChange = (id: number) =>
    setToDo([...toDo].map(el => {
      if (el.id === id) el.isDone = !el.isDone;
      return el;
    }))
  const onRemoveToDo = (id: number) =>
    setToDo([...toDo].filter(el => el.id !== id));

  return (
    <div className="container">
      <h1>TODOLIST</h1>
      <div className="todoheader">
        <TextField 
          placeholder="Enter text here"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} 
          value={value} />
        <Button disabled={!Boolean(value)} label="Add item" onClick={fromValueToDo} />
      </div>
      <ol>
        {toDo.map((el, key) => <ToDoItem onChange={onChange} onRemoveToDo={onRemoveToDo} item={el} key={key} /> )}
      </ol>
      <Button disabled={!Boolean(toDo.length)} label="Clear list" onClick={clearList} />
    </div>
  );
} 

export default App;
