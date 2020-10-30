Write code under this line
class Storage{
  constructor (items){
    this.items = items
  }
  
    getItems() {
        return this.items
    }

    addItem(item) {
        this.items.push(item)
    }
    removeItem(item) {
        this.items.includes(item) ? this.items.splice(this.items.indexOf(item), 1) : this.addItem(item)
        console.log(this.items.includes(item));
        console.log(item);
     }
  
}

 console.log(typeof Storage);
// 'function'

const goods = [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
];

const storage = new Storage(goods);

 console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор'
// ] 

storage.addItem('Дроид');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

storage.removeItem('Пролонгер');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */