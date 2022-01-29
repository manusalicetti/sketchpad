let userRows = prompt('How many rows do you want?');
let userColumns = prompt('How manu columns do you want?');
const container = document.querySelector('.container');
const blackButton = document.querySelector('.black');
const rainbowButton = document.querySelector('.colored');
const refreshButton = document.querySelector('.refresh');

const randomNumber = (min, max) => {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
};

const randomColor = () => {
  return 'rgb(' + randomNumber(0, 255) + ', ' + randomNumber(0, 255) + ', ' + randomNumber(0, 255) + ')';
};

function makeGrid(rows, colums) {
  let size = rows * 20;
  console.log(size);
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-colums', colums);
  container.style.setProperty('height', `${size}px`);
  container.style.setProperty('width', `${size}px`);
  for (i = 0; i < rows * colums; i++) {
    let cell = document.createElement('div');
    container.appendChild(cell).className = 'grid-item';
  }
}

/* makeGrid(15, 15); */
makeGrid(userRows, userColumns);

container.addEventListener('mouseover', (e) => {
  e.path[0].classList.add('item-color');
});

blackButton.addEventListener('click', (e) => {
  container.addEventListener('mouseover', (e) => {
    e.path[0].classList.add('item-color');
    e.path[0].style.setProperty('--color', '#000');
  });
});

rainbowButton.addEventListener('click', (e) => {
  container.addEventListener('mouseover', (e) => {
    e.path[0].classList.add('item-color');
    e.path[0].style.setProperty('--color', randomColor());
  });
});

refreshButton.addEventListener('click', (e) => {
  window.location.reload();
});
