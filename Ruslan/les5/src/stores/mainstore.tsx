import Users from './userstore';
import Items from './itemstore';

class MainStore {
  userStore: any;
  itemStore: any;
  constructor() {
    this.itemStore = new Items();
    this.userStore = new Users();
  }
}
const mainStore = new MainStore();

export default mainStore;
