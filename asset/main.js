console.log("library in js");

const mainzone = document.querySelector("#main");

function Book(name, author, desc){
	this.name = name;
	this.author= author;
	this.desc = desc;
	this.id = index;
	index++;
}

const library = []

let index = 0;

function addToLibrary(book){
	library.push(book);
	reloadDisplay();
}

function createCard(book){
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
		card.setAttribute("id", book.id);
		card_action1.className = "card_action";
		card_action_container.appendChild(card_action1);
		
	card_action1.addEventListener("click", (e) => {

		const removedid = e.target.parentNode.parentNode.id;
		e.target.parentNode.parentNode.remove();
		let elementToDelete = library.filter((book) => book.id == removedid)
		let indexOfDeletel = library.indexOf(elementToDelete[0]) 
		library.splice(indexOfDeletel,1);
		console.log(library);
	});
		card.appendChild(card_title);
		card.appendChild(card_content);
		card.appendChild(card_action_container);

		mainzone.appendChild(card);
}

function reloadDisplay(){
	while (mainzone.firstChild){
		mainzone.removeChild(mainzone.firstChild);	
	}
	// we iterate over library and create a card for each
	library.forEach(book => createCard(book)
	);
}

function openModal(){
	const modal = document.querySelector("dialog");
	modal.showModal();

}

const book1 = new Book("LOTR", "Tolkien", "Men discussing about a ring");
addToLibrary(book1);
