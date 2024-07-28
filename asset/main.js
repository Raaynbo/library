console.log("library in js");

const mainzone = document.querySelector("#main");

function Book(name, author, desc){
	this.name = name;
	this.author= author;
	this.desc = desc ;
}

const library = []


function addToLibrary(book){
	library.push(book);
	reloadDisplay();
}

function reloadDisplay(){
	console.log("reload page should happen now");
	// we iterate over library and create a card for each
	library.forEach(book => {
		const card = document.createElement("div");
		card.className = "card";
		const card_title = document.createElement("span")
		card_title.className = "card_title";
		card_title.textContent = book.name;
		const card_content = document.createElement("div");
		card_content.className = "card_content";
		const card_action_container = document.createElement("div");
		card_action_container.className = "card_action_container";
		const card_action1 = document.createElement("span");
		card_action1.textContent = "Delete";
		card_action1.className = "card_action";
		card_action_container.appendChild(card_action1);

		card.appendChild(card_title);
		card.appendChild(card_content);
		card.appendChild(card_action_container);

		mainzone.appendChild(card);
	});
}

const book1 = new Book("LOTR", "Tolkien", "Men discussing about a ring");
addToLibrary(book1);
console.log(book1);
