function onReady(){
  const TODOS = [];
  const ADDTODOFORM = document.getElementById('addToDoForm');

  function createNewToDo() {
    const NEWTODOTEXT = document.getElementById('newToDoText');
    if (!NEWTODOTEXT.value) {return; }
    TODOS.push({
      title: NEWTODOTEXT.value,
      complete: false
    });
    NEWTODOTEXT.value = '';

    renderTheUI();
  }

function renderTheUI(){
  const TODOLIST = document.getElementById('toDoList');
  TODOLIST.textContent = '';

  TODOS.forEach(function(toDo) {
    const NEWLI = document.createElement('li');
    const CHECKBOX = document.createElement('input');
    CHECKBOX.type = "checkbox";

    NEWLI.textContent = toDo.title;

    TODOLIST.appendChild(NEWLI);
    NEWLI.appendChild(CHECKBOX);

  });
}

ADDTODOFORM.addEventListener('submit', event => {
  event.preventDefault();
  createNewToDo();
});

renderTheUI();

}

window.onload = function () {
  onReady();
};
