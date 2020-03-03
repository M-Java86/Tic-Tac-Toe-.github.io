# Pixart

For this assignment you'll be creating a Javascript painting app. When you're done, [it should display this functionality](http://ga-wdi-exercises.github.io/pixart_js/).

Use the starter code and commit each step of the exercise.
## Set up
1. Download this directory.
2. Work in small steps and commit frequently.
3. When you're finished, push your code back to GA Github and submit your repo

### Commit 1

* When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field.
* You can use `document.querySelector` (or another document method) to select the element, then add an event listener.

> **HINT:** You will notice that the page refreshes whenever you click the button. You need to prevent this from happening using a method you have not used before. Google "javascript event prevent default". 


### Commit 2

* Create 20 divs of the "square" class and append them to the body
  * **Hint**: use `.appendChild()`

### Commit 3

* Add functionality so that when I click on each "square", it changes the color of that individual square to "green"
  * **Hint**: either add the event listener while creating the squares, or listen for events on the `body` element

### Commit 4

* Modify your code so that when I click on each "square", it changes to the color I set using my input instead of "green" every time.

### Commit 5

* Modify the CSS so that the "square" class has a height and width of 10px and a margin of 0.
* Modify your code so that you are creating 8000 divs instead of 20.
* Change the event that changes your box colors from 'click' to 'mouseover'
* Paint a picture!

### Bonus

* Add a color swatch. You should have 3 boxes with the most recent 3 colors used. When you click on each of those boxes, it should set the current brush color back to that color.
