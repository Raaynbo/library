# 2024-07-27 - 9.25pm

Made a grid and reuse card template from the dashboard project

I was creating a grid to structure the page. This card is a temporary one, the other will be created with js dynamically

grid template area idea

srchbar srchbar srchbar srchbar srchbar
main    main    main    main    main
main    main    main    main    main
main    main    main    main    main
main    main    main    main    main
side    side    side    side    side 


# 2024-07-28 - 2.35pm

I decided to go with the layout 

side main main main main
side main main main main 
side main main main main
side main main main main 

made a function creating a placeholder book card
I want to make a modal form for book creation or I need to find a way to incorporate the add book form

# 2024-07-29 - 3.20pm

I thought about it yesterday before going to bed, I need to add an id to each book while creating them in order to facilitate the removing action.

My way to do it is: get back the id by checking parentNode id.
use the found id to identify position of the book inside the library array
then we splice the library array using the info and remove the card from the DOM

(it works, I just don't like this line to remove the DOM element 		`e.target.parentNode.parentNode.remove();`) 


Next step is to made the modal to add a new book, I already made a button inside the side bar, on click it opens the modal. Last step is to make a form inside then grab the whole inputed data when user click on ADD button. 

What could be done? when "ADD" is pressed we first perform a form validation input, if data are correct, close the form and add the book, otherwise, highlight field uncompleted or incorrect


# 2024-08-01 - 12.49am

I finished the book form, it isn't stylized but working. I decided to remove the sidebar because I don't know how to use the space in it.

Instead I made a simple action button in the bottom right of the screen. It opens the form.

Next: 
- I want to make css for form, change book definition to store pages number and read status. and add a close button inside it. 

- I want to change card tile, todisplay a resume of the data for a book. need a tag zone  
- I want to add a click action opening a detail modal for selected book.

# 2024-08-01 - 1.40am

I made a detail zone to dissplay book details in it. it toggles on click and has a simple animation. It also disappear if the book card is deleted

# 2024-08-03 - 11.55pm

modified card creation and delete event, Had to make a function to find a specific Parent node (here it was the card) 
modified book definition to handle tot_page and reading status
whenever a book is read the associated card will have a green border on the left side 
UPDATE : while writing this, I found out I do not need to find the parent Node, since the card creation and EventListener are done in the same scope for now

# 2024-08-04 - 10.00pm

I created a search bar to easily navigate and find any book. Made a js function to operate on change. when the search bar is empty it will use the unfiltered lib otherwise it will search for any bookname or author including user's input

# 2024-08-05 - 5.43pm

Just worked on: hover anim for the add book button and modified event type for search as the user type in the searchbar
I don't really like the details area and I decided to disable it. I'll use this specific zone to edit card, since I don't feel like another modal would look nice.
