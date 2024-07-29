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
