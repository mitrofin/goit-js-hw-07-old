const listRef = document.getElementById('categories');

console.log(`В списке ${listRef.children.length} категории.`);

const liItems = listRef.querySelectorAll('li.item');
liItems.forEach(({ children }) =>
  console.log(`Категория: ${children[0].textContent}\n
  Количество элементов: ${children[1].children.length}`),
);
