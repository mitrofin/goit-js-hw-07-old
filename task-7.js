const inputRefChange = document.querySelector('#font-size-control');
const textRefChange = document.getElementById('text');

const onScaleTextChange = event => {
  textRefChange.style.fontSize = inputRefChange.value + 'px';
};

inputRefChange.addEventListener('input', onScaleTextChange);
