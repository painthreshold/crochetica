function createGrid() {
  const gridElement = document.getElementById('grid');
  const rows = document.getElementById('rows').value;
  const columns = document.getElementById('columns').value;


  gridElement.innerHTML = '';


  gridElement.style.gridTemplateColumns = `repeat(${columns}, 20px)`;
  gridElement.style.gridTemplateRows = `repeat(${rows}, 20px)`;


  for (let i = 0; i < rows * columns; i++) {
    const cell = document.createElement('div');
    cell.addEventListener('click', () => fillCell(cell));
    gridElement.appendChild(cell);
  }
}


function fillCell(cell) {
  if (eraseMode) {
    cell.style.backgroundColor = 'white';
  } else {
    const color = document.getElementById('colorPicker').value;
    cell.style.backgroundColor = color; 
  }
}


function toggleEraseMode() {
  eraseMode = !eraseMode;
  const button = document.querySelector('#controls button:nth-of-type(2)');
  button.textContent = eraseMode ? 'Toggle Drawing Mode' : 'Toggle Erase Mode';
}

let eraseMode = false;

function clearGrid() {
  const cells = document.querySelectorAll('#grid div');
  cells.forEach(cell => {
    cell.style.backgroundColor = 'white';
  });
}

window.onload = function() {
  createGrid();
};

/* progress bar */
document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('.task');
    const progressBar = document.getElementById('progress-bar');
    
    function updateProgress() {
        let totalPercentage = 0;
        checkboxes.forEach(function (checkbox) {
            if (checkbox.checked) {
                totalPercentage += parseInt(checkbox.getAttribute('data-percentage'));
            }
        });
        progressBar.style.width = totalPercentage + '%';
        progressBar.textContent = totalPercentage + '%';
    }

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', updateProgress);
    });
});

/* tut list */
function toggleTutorial(header) {
  const content = header.nextElementSibling;
  const isOpen = content.classList.contains("open");
  const allContents = document.querySelectorAll(".tutorial-content");
  allContents.forEach(c => c.classList.remove("open"));

  if (!isOpen) {
    content.classList.add("open");
  }
}

/* category switch */
function switchCategory(button, category) {
  const buttons = button.parentNode.querySelectorAll(".category-button");
  buttons.forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");

  const sections = button.parentNode.parentNode.querySelectorAll(".tutorial-section");
  sections.forEach(section => section.classList.remove("active"));

  const activeSection = button.parentNode.parentNode.querySelector(`#${category}`);
  if (activeSection) {
    activeSection.classList.add("active");
  }
}
