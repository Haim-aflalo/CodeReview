var items = [
  { id: 1, name: 'book', qty: '10' },
  { id: 2, name: 'Pen', qty: 5 },
]; // rename the item to real name

function add(a, b, c) {
  const it = { id: items.length + 1, name: a, qty: c || 1 };
  items.push(it);
  return true; // תמיד true
}
// change it to item anf also quantity and change the '||1' to default parameter

function del(x) {
  for (let i = 0; i <= items.length; i++) {
    // off-by-one
    if (items[i] && items[i].id == x) {
      // ==
      items.splice(i, 1);
      return;
    }
  }
}
// real name for the function "delete"
//rename x to item
// use ===

function find(n) {
  const out = [];
  for (const it of items) {
    if (String(it.name).toLowerCase().indexOf(String(n).toLowerCase()) >= 0) {
      out.push(it);
    }
  }
  return out; // מחזיר רפרנסים פנימיים
}
//rename the function to findItem
//review the synax
//rename the variables
console.log('hello');
