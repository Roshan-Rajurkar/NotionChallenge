// Get the items and drop zone element
const items = Array.from(document.querySelectorAll('.item'));
const dropzone = document.getElementById('dropzone');
const successMessage = document.getElementById('successMessage');
const resetButton = document.getElementById('resetButton');

// Add event listeners for drag events
items.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

// Keep track of the dragged item
let draggedItem = null;

function dragStart() {
    // Add a class to change the appearance of the dragged item
    this.classList.add('dragged');
    draggedItem = this;
}

function dragEnd() {
    // Remove the class added in dragStart
    this.classList.remove('dragged');
}

// Add event listeners for drop events
dropzone.addEventListener('dragenter', dragEnter);
dropzone.addEventListener('dragover', dragOver);
dropzone.addEventListener('dragleave', dragLeave);
dropzone.addEventListener('drop', drop);

function dragEnter(e) {
    e.preventDefault();
    // Add a class to change the appearance of the drop zone when an item is dragged over it
    this.classList.add('dragover');
}

function dragOver(e) {
    e.preventDefault();
}

function dragLeave() {
    // Remove the class added in dragEnter
    this.classList.remove('dragover');
}

function drop() {
    // Append the dragged item to the drop zone
    this.appendChild(draggedItem);
    // Display the success message
    successMessage.style.display = 'block';
    // Remove the class added in dragEnter
    dropzone.classList.remove('dragover');
}

// Add event listener for the reset button
resetButton.addEventListener('click', reset);

function reset() {
    // Move all items back to the first container
    items.forEach(item => {
        document.querySelector('.container:first-child').appendChild(item);
    });
    // Hide the success message
    successMessage.style.display = 'none';
}