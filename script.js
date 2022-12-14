const cellElement = document.querySelectorAll('[data-cell')

cellElement.forEach(cell => {
  cell.addEventListener("click", handleClick, {once: true})
};


