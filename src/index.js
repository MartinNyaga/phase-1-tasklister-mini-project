document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
  
    toDoList(e.target.stuff.value)
  })
});

function toDoList(todo){
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', deleteFunc);
  btn.textContent = 'x';
  p.textContent = todo;
  //console.log(p)
  p.appendChild(btn);
  document.querySelector('#tasks').appendChild(p);
}

function deleteFunc(e){
  e.target.parentNode.remove();
}