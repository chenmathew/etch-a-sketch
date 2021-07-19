for (let i = 1; i < 17; i++) {
	const squares = document.querySelector(".gridContainer")
	const div = document.createElement("div");
	div.classList.add('gridItem');
	div.textContent = i;
	squares.appendChild(div);
}