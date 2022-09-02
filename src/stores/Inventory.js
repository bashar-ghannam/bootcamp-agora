import { observable, makeObservable, action, computed } from 'mobx';
import { Item } from './Item';

export class Inventory {
  constructor() {
    this.items = [];
    makeObservable(this, {
      items: observable,
      addItem: action,
      numItems: computed,
      changePrice: action,
      buyItem: action,
    });
  }

  get numItems() {
    let counter = 0;
    this.items.forEach((item) => (counter += item.quantity));
    return counter;
  }

  addItem = (name, price, quantity) => {
    let item = this.items.find((item) => item.name === name);
    if (item) {
      item.quantity = item.quantity + 1;
    } else {
      item = new Item(name, price || 0, quantity || 1);
      this.items.push(item);
    }
  };

  changePrice = (name, price) => {
    let item = this.items.find((item) => item.name === name);
    item.price = price;
  };

  buyItem = (name) => {
    this.items.forEach((item) => {
      if (item.name === name) {
        item.quantity--;
      }
    });
    this.items = this.items.filter((item) => item.quantity !== 0);
  };
}
