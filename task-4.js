const сounterValue = document.getElementById('value');
const onBtnDec = document.querySelector('[data-action="decrement"]');
const onBtnInc = document.querySelector('[data-action="increment"]');

onBtnDec.addEventListener(
  'click',
  event => (сounterValue.textContent = Number(сounterValue.textContent) - 1),
);
onBtnInc.addEventListener(
  'click',
  event => (сounterValue.textContent = Number(сounterValue.textContent) + 1),
);
