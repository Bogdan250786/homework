import {action, makeObservable, observable} from 'mobx';
import {IItems} from '../interfaces';


export default class Items {
  constructor(){
    makeObservable(this)
  }

  @observable items: IItems[] = JSON.parse(localStorage.getItem('toDoItems')||'[]');

  @action clearItems = (userId:string) => {
    this.items= this.items.filter(item => item.userId !== userId);
    this.saveItems();
  }
    
  @action finishedItems = (id:number) => {
    this.items.map(el => {
      if (el.id === id) el.isDone = !el.isDone;
        return el;
      });
    this.saveItems();
  }

  @action addNewItem = (newItems: IItems[]) => {
    this.items = newItems
    this.saveItems()
  }

  @action removeItem = (id: number) => {
    this.items = this.items.filter(el => el.id !== id);
    this.saveItems();
  }
  saveItems() {
    localStorage.setItem('toDoItems', JSON.stringify(this.items));
  }
}