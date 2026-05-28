// Document Selector
const $form = document.querySelector("#formLoadMore");
const $grid = document.querySelector("#book-gallery");
const $quantity = document.querySelector("#books-amount");

let amount = 0;
let total = 0;

// API Information
const APIUrl = "http://10.69.4.8:3000/v1/books";
const APIKey = "?apiKey=123&page=";
let Page = 1;

// Code
$form.addEventListener("submit", async (e) => {
	e.preventDefault();

	const response = await fetch(APIUrl + APIKey + Page);
	const DATA = await response.json();

	for (let i = 0; i < DATA.length; i++) {
		const div1 = document.createElement("div");
		const div2 = document.createElement("div");
		// const div3 = document.createElement("div");
		// const div4 = document.createElement("div");
		const span = document.createElement("span");
		const p1 = document.createElement("p");
		const p2 = document.createElement("p");
		const h3 = document.createElement("h3");
		const img1 = document.createElement("img");

		h3.textContent = DATA[i].name;
		p1.textContent = DATA[i].author;
		p2.textContent = "Progress: " + DATA[i].progress * 100 + "%";
		span.textContent = DATA[i].genre;
		img1.src = DATA[i].cover;

		div1.classList.add("book-card");
		div2.classList.add("book-card-content");
		span.classList.add("book-card-chip");

		div2.appendChild(h3);
		div2.appendChild(p1);
		div2.appendChild(span);
		div2.appendChild(p2);

		div1.appendChild(img1);
		div1.appendChild(div2);

		$grid.appendChild(div1);

		total++;
	}

	Page++;
	$quantity.textContent = total + " books";
});

// Objets manquant: étoiles des favoris
// Objets manquant: barre de progression des livres
