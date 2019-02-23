function onReady() {
  let id = 0;
  let toDos = [];
  const ADDTODOFORM = document.getElementById('addToDoForm');

  function createNewToDo() {
    const NEWTODOTEXT = document.getElementById('newToDoText');
    if (!NEWTODOTEXT.value) {
      return;
    }
    toDos.push({
      title: NEWTODOTEXT.value,
      complete: false,
      id: id
    });

    id++;

    NEWTODOTEXT.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    const TODOLIST = document.getElementById('toDoList');
    TODOLIST.textContent = '';

    toDos.forEach(function(toDo) {
      const NEWLI = document.createElement('li');
      const CHECKBOX = document.createElement('input');
      const DELETEBUTTON = document.createElement('button');

      CHECKBOX.type = "checkbox";

      DELETEBUTTON.textContent = "Delete";

      DELETEBUTTON.addEventListener('click', event => {
        toDos = toDos.filter(function(item){
          return item.id !== toDo.id;
        })
        renderTheUI();
      });

      NEWLI.textContent = toDo.title;

      TODOLIST.appendChild(NEWLI);
      NEWLI.appendChild(CHECKBOX);
      NEWLI.appendChild(DELETEBUTTON);

    });
  }

  ADDTODOFORM.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();

}

window.onload = function() {
  onReady();
};
