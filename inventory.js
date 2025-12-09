var items = [
  { id: 1, name: 'book', quantity: 10 },
  { id: 2, name: 'Pen', quantity: 5 },
]; // global

function add(name, quantity = 1) {
  const item = { id: items.length + 1, name: name, quantity: quantity };
  items.push(item);
  return true; // תמיד true
}
function remove(itemId) {
  for (let i = 0; i <= items.length; i++) {
    // off-by-one
    if (items[i].id === itemId) {
      // ==
      items.splice(i, 1);
      return;
    }
  }
}
// real name for the function "delete"
//rename x to item
// use ===

function findItem(itemName) {
  const found = [];
  for (const item of items) {
    if (item.name.toLowerCase() === itemName.toLowerCase()) {
      found.push(item);
    }
  }
  return found; // מחזיר רפרנסים פנימיים
}
//rename the function to findItem
//review the synax
//rename the variables

console.log('hello');
