const sliderNum = document.querySelector(".sliderNum")
let gridSize = sliderNum.textContent * sliderNum.textContent;

//Creates a grid
function createGrid() {
	for (let i = 0; i < gridSize; i++) {
		const gridContainer = document.querySelector(".gridContainer")
		const gridItem = document.createElement("div");
		gridItem.classList.add('gridItem');
		gridContainer.appendChild(gridItem);
	}
}


const grid = document.querySelector(".gridContainer")

grid.addEventListener('mouseover', function (event) {
	if (event.target.matches('.gridItem')) {
		event.target.classList.add('mouseover');
	}
});

function reset() {
	for (let i = 0; i < gridSize; i++) {
		let elem = document.querySelector('.gridItem');
		elem.remove();
	}
	createGrid();
}

function displayNum() {
	const slider = document.querySelector(".slider");
	sliderNum.textContent = slider.value;
	reset();
}

createGrid();