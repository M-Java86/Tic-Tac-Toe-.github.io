/* add a new delete button to the dom
 *
 */
function addDeleteButton() {
  let deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';

  deleteButton.addEventListener('click', (evnt) => {
    //get the event target's grand-parent node
    //and remove the event target's parent
    //
    //<ul><li><button></button></li></ul>
    //
    //<li> is the parent of <button>
    //<ul> is the parent of <li>
    //<ul> is the grandparent of <li>
    evnt.target.parentNode.parentNode.removeChild(evnt.target.parentNode)
  });

  return deleteButton;
}

/* 
 * add a new list item to the list
 *
 */
function addListItem(itemText) {
  let newElement = document.createElement('li')
  let newSpan = document.createElement('span')
  
  newSpan.innerText = itemText

  //add the new <span> and <button> tags to the 
  //new <li>
  //
  //end result is: <li><span></span><button></button></li>
  newElement.appendChild(newSpan)
  newElement.appendChild(addDeleteButton())

  return newElement;
}

/* add an event listener to the <form> tag so that 
 * when the submit button is pressed a new <li> is
 * added to the <ul> (our list of todo items)
 *
 *
 */
document.querySelector('#newItem').addEventListener('submit', (evnt) => {
  //Prevent default keeps the web page from refreshing which
  //is the default behavior of the <form> tag
  event.preventDefault();

  document.querySelector('#todoList').appendChild(
    addListItem(document.querySelector('#newItemText').value)
  )
});
