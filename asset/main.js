console.log("library in js");

const cardzone = document.querySelector("#cardzone");
const infozone = document.querySelector("#infozone");
const addbtn = document.querySelector("#validate");
const title_detail = document.querySelector(".title_detail");
const author_detail = document.querySelector(".author_detail");
const id_detail = document.querySelector(".id");


addbtn.addEventListener("click", (event) => form_validation(event)); 

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
		const card_title = document.createElement("span")
		const card_content = document.createElement("div");
		const card_action_container = document.createElement("div");
		const card_action1 = document.createElement("span");
		card_title.textContent = book.name;
		card_action1.textContent = "Delete";
		card_title.className = "card_title";
		card.className = "card";
		card_content.className = "card_content";
		card_action1.className = "card_action";
		card_action_container.className = "card_action_container";
		
	card_action1.addEventListener("click", (e) => {

		const removedid = e.target.parentNode.parentNode.id;
		e.target.parentNode.parentNode.remove();
		let elementToDelete = library.filter((book) => book.id == removedid)
		let indexOfDeletel = library.indexOf(elementToDelete[0]) 
		library.splice(indexOfDeletel,1);
		displayDetails();
	});
		card.setAttribute("id", book.id);
		card_action_container.appendChild(card_action1);
		card.appendChild(card_title);
		card.appendChild(card_content);
		card.appendChild(card_action_container);

		cardzone.appendChild(card);

	card.addEventListener("click", (event) => {
		if(event.target == card_action1){
			return false;
		}
		let temp = library.find(book => {return book.id == card.id});
		if(id_detail.textContent != card.id){
			title_detail.textContent = temp.name;
			author_detail.textContent = temp.author;
			id_detail.textContent = card.id;
			displayDetails();
			return true;
		}else{
			closeDetails();
			title_detail.textContent = "";
			author_detail.textContent = "";
			id_detail.textContent = "";
		}
	});
}

function closeDetails(){
		if(infozone.classList.contains("details")){
			infozone.classList.remove("details");		
		}
}

function displayDetails(){
		if (!infozone.classList.contains("details")){
			infozone.classList.add("details");
		}
}

function reloadDisplay(){
	while (cardzone.firstChild){
		cardzone.removeChild(cardzone.firstChild);	
	}
	// we iterate over library and create a card for each
	library.forEach(book => createCard(book)
	);
}

function openModal(){
	const modal = document.querySelector("dialog");
	modal.showModal();

}

function form_validation(e){
	const title_in = e.target.form[0].value;	
	const desc_in = e.target.form[1].value;	
	const author_in = e.target.form[2].value;
	if ( title_in == "" && author_in == "" && desc_in == ""){
		console.log("fill the form firsrt")
		return true;
	}
	addToLibrary(new Book(title_in, author_in, desc_in));
	const modal = document.querySelector("dialog");
	modal.close();
	const form = document.querySelector("form");
	form.reset();
	e.preventDefault();
}

const book1 = new Book("LOTR", "Tolkien", "Men discussing about a ring");
addToLibrary(book1);
