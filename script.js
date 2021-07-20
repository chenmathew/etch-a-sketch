let gridSize = 256;

//Creates a grid
function createGrid() {
	for (let i = 0; i < gridSize; i++) {
		const squares = document.querySelector(".gridContainer")
		const div = document.createElement("div");
		div.classList.add('gridItem');
		squares.appendChild(div);
	}
}


const grid = document.querySelector(".gridContainer")

grid.addEventListener('mouseover', function (event) {
	if (event.target.matches('.gridItem')) {
		event.target.classList.add('active');
	}
});

function reset() {
	let elem = document.querySelector('.gridContainer');
	elem.remove();
}

createGrid();