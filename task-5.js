const inputRefChange = document.getElementById('name-input');
let outputRefChange = document.getElementById('name-output');

const onChangeInputName = event => {
  outputRefChange.textContent = event.target.value;
  if (event.target.value === '') {
    outputRefChange.textContent = 'незнакомец';
  }
};

inputRefChange.addEventListener('input', onChangeInputName);
