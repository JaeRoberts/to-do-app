function onReady(){
  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  const NEW_TODO_TEXT = document.getElementById('newToDoText');
  const TODO_LIST = document.getElementById('toDoList');

  ADD_TODO_FORM.addEventListener('submit', event => {
    event.preventDefault();

    //get the text
    let title = NEW_TODO_TEXT.value;

    //create a new li
    let newLi = document.createElement('li');

    //create a new input
    let checkbox = document.createElement('input');

    let deleteButton = document.createElement('button');

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    //set button type to button
    deleteButton.type = "button";

    deleteButton.addEventListener('click', function(event){

      //this.parentElement represents the button's <li> parent
      TODO_LIST.removeChild(this.parentElement);
    })

    //set the title
    newLi.textContent = title;

    //attach the checkbox to the Li
    newLi.appendChild(checkbox);

    //attach the button to the Li and add text to the button
    newLi.appendChild(deleteButton).textContent = "Delete";

    //attach the li to the ul
    TODO_LIST.appendChild(newLi);

    //empty the input
    NEW_TODO_TEXT.value = '';

  });


}

window.onload = function () {
  onReady();
};
