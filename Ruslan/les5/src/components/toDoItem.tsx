interface IProps {
  item: {
    label: string,
    isDone: boolean,
    id: number
  },
  onChange: Function,
  onRemoveToDo: Function
}

const ToDoItem: React.FC<IProps> = ({item, onChange, onRemoveToDo}) => (
  <li className="todoItemContainer">
    <input type="checkbox" checked={item.isDone} onChange={() => onChange(item.id)}/>
    {item.label}
    <span className="removebtn" onClick={() => onRemoveToDo(item.id)}>X</span>
  </li>
);

export default ToDoItem;
