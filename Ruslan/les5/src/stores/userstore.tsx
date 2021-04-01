import {action, makeObservable, observable} from 'mobx';
import {IUsers} from '../interfaces';

class Users {
  constructor() {
      makeObservable(this)
  }

  @observable newUsers: IUsers[] = JSON.parse(localStorage.getItem('newUsers') || '[]');
  @observable loggedUserId = localStorage.getItem('loggedUserId');

  @action logout = () => {
    this.loggedUserId = null;
    localStorage.removeItem('loggedUserId');
  }
  @action loginUser = ({login, password}: IUsers) => {
    const user = this.newUsers.find(newUser => newUser.login === login && newUser.password === password)
    if(user){
      const loggedUserId = `${user.id}`;
      localStorage.setItem('loggedUserId', loggedUserId);
      this.loggedUserId = loggedUserId;
    } else {
      alert('Wrong Login or Password');
    }
  }
  @action addNewUser = (newUser: IUsers) => {
    this.newUsers = [...this.newUsers, newUser];
    this.saveUsers();
  }
  saveUsers() {
    localStorage.setItem('newUsers', JSON.stringify(this.newUsers))
  }
}

export default Users;