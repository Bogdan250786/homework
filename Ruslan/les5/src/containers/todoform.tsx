import { useState, useEffect } from 'react';
import Button from '../components/button';
import TextField from '../components/textField';
import ToDoItem from '../components/toDoItem';
import { IItems } from '../interfaces';
import '../App.scss';
import mainStore from '../stores/mainstore';
import { observer } from 'mobx-react';
import {v4 as uuid} from 'uuid';
import { useHistory } from 'react-router';

const ToDoForm = observer(() => {
  const history = useHistory();
  const { loggedUserId, logout } = mainStore.userStore;
  const {items: toDoItems, clearItems, addNewItem, removeItem, finishedItems } = mainStore.itemStore;
  const [value, setValue] = useState('');
  const fromValueToDo = () => {
    addNewItem([...toDoItems, { label: value, isDone: false, id: uuid(), userId: loggedUserId }]);
    setValue('');
  };
  const clearList = () => {
    clearItems(loggedUserId)
    setValue('');
  };
  const onChange = (id: number) => {
    finishedItems(id);
    setValue('');
  };
  const onRemoveToDo = (id: number) => {
    removeItem(id);
    setValue('');
  };
const onLogout = () => {
  logout();
  history.push("/");
}

  return (
    <div className="container">
      <Button
      disabled={false}
      label="Log Out"
      onClick={onLogout} />
      <h1>TODOLIST</h1>
      <div className="todoheader">
        <TextField
          type="text"
          placeholder="Enter text here"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
          value={value} />
        <Button disabled={!Boolean(value)} label="Add item" onClick={fromValueToDo} />
      </div>
      <ol>
        {toDoItems.filter((el: IItems) => el.userId == loggedUserId).map((el: IItems, key: number) => <ToDoItem onChange={onChange} onRemoveToDo={onRemoveToDo} item={el} key={key} />)}
      </ol>
      <Button disabled={!Boolean(toDoItems.length)} label="Clear list" onClick={clearList} />
    </div>
  );
}
)

export default ToDoForm;
