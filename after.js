var items = [
  { id: 1, name: 'book', quantity: 10 },
  { id: 2, name: 'Pen', quantity: 5 },
]; // global

function add(name, quantity = 1) {
  const item = { id: items.length + 1, name: name, quantity: quantity };
  items.push(item);
  return true; // תמיד true
}
