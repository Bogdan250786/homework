export interface IItems {
  label: string,
  isDone: boolean,
  id: number,
  userId: string
}

export interface IUsers {
  login: string,
  password: string,
  email: string,
  id: number
}

export interface IProps {
  item: {
    label: string,
    isDone: boolean,
    id: number
  },
  onChange: Function,
  onRemoveToDo: Function
}
