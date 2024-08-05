console.log("library in js");

const cardzone = document.querySelector("#cardzone");
const infozone = document.querySelector("#infozone");
const addbtn = document.querySelector("#validate");
const title_detail = document.querySelector(".title_detail");
const author_detail = document.querySelector(".author_detail");
const id_detail = document.querySelector(".id");
const searchbar = document.querySelector(".searchbar");

addbtn.addEventListener("click", (event) => form_validation(event)); 
searchbar.addEventListener("input", (event) => searchBook(event));

function Book(name, author, desc, pagenum, read){
	this.name = name;
	this.author= author;
	this.desc = desc;
	this.page = pagenum;
	this.isRead = read;
	this.id = index;
	index++;
}

const library = []

let index = 0;

function addToLibrary(book){
	library.push(book);
	reloadDisplay(library);
}

function createCard(book){
	// CARD ELEMENT CREATION
		const card = document.createElement("div");
		const card_title = document.createElement("span")
		const card_content = document.createElement("div");
		const bookpage = document.createElement("div");
		const bookdesc = document.createElement("div");
		const card_action_container = document.createElement("div");
		const card_action1 = document.createElement("span");
		const card_action2 = document.createElement("span");

	// ADDING CONTENT 
		card_title.textContent = book.name + " - " + book.author;
		bookdesc.textContent = book.desc;
		bookpage.textContent = "total pages: " + book.page;

	// CLASS ATTriBUTION
		card_title.className = "card_title";
		card.className = "card";
		if (book.isRead === true){
			card.classList.add("read");
		}
		card_content.className = "card_content";
		card_action1.className = "card_action";
		card_action2.className = "card_action";
		card_action_container.className = "card_action_container";


	// SVG ICON CREATION
		var svg_a1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		var path_a1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');

		svg_a1.setAttribute("aria-hidden","true");
		svg_a1.setAttribute('viewbox', '0 0 24 24');
		svg_a1.setAttribute('width', '24px');
		svg_a1.setAttribute('height', '24px');


		path_a1.setAttribute('d', 'M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z');
		path_a1.setAttribute('fill', '#2962ff');
	
		var svg_a2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		var path_a2 = document.createElementNS("http://www.w3.org/2000/svg", 'path');

		svg_a2.setAttribute("aria-hidden","true");
		svg_a2.setAttribute('viewbox', '0 0 24 24');
		svg_a2.setAttribute('width', '24px');
		svg_a2.setAttribute('height', '24px');


		path_a2.setAttribute('d', 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z');
		if (book.isRead === true){
			path_a2.setAttribute('fill', '#00ff24');
		}
		else{
			path_a2.setAttribute('fill', '#ff2400');
	}




	// ADDIng EVENT TO ELEMENT 
	card_action1.addEventListener("click", (e) => {
		card.remove();
		let elementToDelete = library.filter((book) => book.id == card.id)
		let indexOfDeletel = library.indexOf(elementToDelete[0]) 
		library.splice(indexOfDeletel,1);
		console.log(library);
	});
	card_action2.addEventListener("click", (e) => {
		if (book.isRead !== true){
			book.isRead = true;
		}
		else{
			book.isRead = false;
		}
		reloadDisplay(library);

	});

	// ADDING ELEMENT TO DOM 
		svg_a1.appendChild(path_a1);
		card_action1.appendChild(svg_a1);
		
		svg_a2.appendChild(path_a2);
		card_action2.appendChild(svg_a2);
		card_content.appendChild(bookdesc);
		card_content.appendChild(bookpage);
		card.setAttribute("id", book.id);
		card_action_container.appendChild(card_action1);
		card_action_container.appendChild(card_action2);
		card.appendChild(card_title);
		card.appendChild(card_content);
		card.appendChild(card_action_container);

		cardzone.appendChild(card);
}



function reloadDisplay(lib){
	while (cardzone.firstChild){
		cardzone.removeChild(cardzone.firstChild);	
	}
	// we iterate over library and create a card for each
	lib.forEach(book => createCard(book)
	);
}

function openModal(){
	const modal = document.querySelector("dialog");
	modal.showModal();

}

function form_validation(e){
	const title_in = e.target.form[0].value;	
	const desc_in = e.target.form[2].value;	
	const author_in = e.target.form[1].value;
	const page_in = e.target.form[3].value;
	const read_in = e.target.form[4].checked;
	const form = document.querySelector("form");
	const modal = document.querySelector("dialog");
	if ( title_in == "" && author_in == "" && desc_in == "" && page_in ==""){
		console.log("fill the form firsrt")
		return true;
	}
	addToLibrary(new Book(title_in, author_in, desc_in, page_in, read_in));
	modal.close();
	form.reset();
	e.preventDefault();
}

function searchBook(event){
	console.log(event.target.value);
	if (searchbar.value !== ""){
		const filteredbook =  library.filter(book => bookfilter(book, searchbar.value)  );
		console.table(filteredbook);
		reloadDisplay(filteredbook);
		return true;
	}
	reloadDisplay(library);
}

function bookfilter(book, input){
	if (book.name.toLowerCase().includes(input.toLowerCase()) || book.author.toLowerCase().includes(input.toLowerCase())){
		return book;
	}
}

const book1 = new Book("LOTR", "Tolkien", "Men discussing about a ring", 898, true);
const book2 = new Book("GOT", "Tolkien", "Men discussing about a ring", 1000, false);
const book3 = new Book("eragon", "magnoe", "Men discussing about a ring", 1000, false);
const book4 = new Book("48 laws of power", "Silter", "Men discussing about a ring", 1000, false);
const book5 = new Book("A song of ice and fire", "Terk", "Men discussing about a ring", 1000, false);
addToLibrary(book1);
addToLibrary(book2);
addToLibrary(book3);
addToLibrary(book4);
addToLibrary(book5);
