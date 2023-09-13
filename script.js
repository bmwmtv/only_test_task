const block = document.querySelector('.block');

const collapseAll = () => {
  document
    .querySelectorAll('.collapsed')
    .forEach((el) => el.classList.remove('hidden'));
  document
    .querySelectorAll('.expanded')
    .forEach((el) => el.classList.add('hidden'));
};

const toggle = (element) => {
  element.querySelector('.collapsed').classList.toggle('hidden');
  element.querySelector('.expanded').classList.toggle('hidden');
};

block.addEventListener('click', (event) => {
  const target = event.target.closest('.btn');

  if (target) {
    toggle(target);
  } else {
    collapseAll();
  }
});
