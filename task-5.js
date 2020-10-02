const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    this.items.push(itemName);
    return `Adding ${itemName} to inventory`;
  },
  remove(itemName) {
    this.items = this.items.filter(item => item !== itemName);
    return `Removing ${itemName} from inventory`;
  },
};

const invokeInventoryAction = function (itemName, action) {
  const act = action(itemName);
  const msg = `Invoking action on ${itemName}`;
  return { act, msg };
};

const invokeAdd = invokeInventoryAction(
  'Medkit',
  inventory.add.bind(inventory), // добавляет элемент к  копии обьекта инвентори
);
const arrayAdd = [...inventory.items];

console.log(invokeAdd);
//{ act: 'Adding Medkit to inventory', msg: 'Invoking action on Medkit' }

console.log(arrayAdd);
// ['Knife', 'Gas mask', 'Medkit']

const invokeRemove = invokeInventoryAction(
  'Gas mask',
  inventory.remove.bind(inventory), // удаляет элемент у  копии обьекта инвентори
);

const arrayRemove = [...inventory.items];

console.log(invokeRemove);
//{ act: 'Removing Gas mask from inventory', msg: 'Invoking action on Gas mask' }

console.log(arrayRemove);
// ['Knife', 'Medkit']
