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
		const card = document.createElement("div");
		const card_title = document.createElement("span")
		const card_content = document.createElement("div");
		const bookpage = document.createElement("div");
		const bookdesc = document.createElement("div");
		const card_action_container = document.createElement("div");
		const card_action1 = document.createElement("span");
		card_title.textContent = book.name + " - " + book.author;
		bookdesc.textContent = book.desc;
		bookpage.textContent = "total pages: " + book.page;
		card_title.className = "card_title";
		card.className = "card";
		if (book.isRead === true){
			card.classList.add("read");
		}
		card_content.className = "card_content";
		card_action1.className = "card_action";
		card_action_container.className = "card_action_container";


		var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');

		svg.setAttribute("aria-hidden","true");
		svg.setAttribute('viewbox', '0 0 24 24');
		svg.setAttribute('width', '24px');
		svg.setAttribute('height', '24px');


		path.setAttribute('d', 'M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z');
		path.setAttribute('fill', '#2962ff');

		svg.appendChild(path);
		card_action1.appendChild(svg);
		
	card_action1.addEventListener("click", (e) => {
		card.remove();
		let elementToDelete = library.filter((book) => book.id == card.id)
		let indexOfDeletel = library.indexOf(elementToDelete[0]) 
		library.splice(indexOfDeletel,1);
		console.log(library);
		closeDetails();
	});

		card_content.appendChild(bookdesc);
		card_content.appendChild(bookpage);
		card.setAttribute("id", book.id);
		card_action_container.appendChild(card_action1);
		card.appendChild(card_title);
		card.appendChild(card_content);
		card.appendChild(card_action_container);

		cardzone.appendChild(card);

	card.addEventListener("click", (event) => {
		if(event.target == card_action1 || event.target == svg|| event.target == path){
			return false;
		}
		let temp = library.find(book => {return book.id == card.id});
		if(id_detail.textContent != card.id){
			title_detail.textContent = temp.name;
			author_detail.textContent = temp.author;
			id_detail.textContent = card.id;
			//displayDetails();
			return true;
		}else{
			//closeDetails();
			title_detail.textContent = "";
			author_detail.textContent = "";
			id_detail.textContent = "";
		}
	});
}


function findParent(targetEl, childEl){
	let actualEl = childEl;
	while(actualEl != targetEl){
		actualEl = actualEl.parentNode;
	}
	return actualEl;
}

//function closeDetails(){
//		if(infozone.classList.contains("details")){
//			infozone.classList.remove("details");		
//		}
//}
//
//function displayDetails(){
//		if (!infozone.classList.contains("details")){
//			infozone.classList.add("details");
//		}
//}

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
