const container = document.querySelector('.container');
const splitButtons = document.querySelectorAll('.split');

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createPartition() {
  const partition = document.createElement('div');
  partition.classList.add('partition');
  partition.style.backgroundColor = getRandomColor();
  const removeButton = document.createElement('button');
  removeButton.classList.add('remove-button');
  removeButton.textContent = '-';
  removeButton.addEventListener('click', () => partition.remove());
  partition.appendChild(removeButton);
  return partition;
}

container.firstElementChild.style.backgroundColor = getRandomColor();

splitButtons.forEach(button => {
  button.addEventListener('click', () => {
    const newPartition1 = createPartition();
    const newPartition2 = createPartition();
    const originalPartition = container.firstElementChild;
    if (button.classList.contains('vertical')) {
      originalPartition.style.width = '50%';
      newPartition1.style.width = '50%';
    } else {
      originalPartition.style.height = '50%';
      newPartition1.style.height = '50%';
    }
    container.insertBefore(newPartition2, originalPartition);
    container.appendChild(newPartition1);
  });
});
