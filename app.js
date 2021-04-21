const addForm = document.querySelector('.add');
const list = document.querySelector('.todos')

//    2                                Getting what users submit 


const generateTemplate = todo => {

    const html = `

    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
  `;

    list.innerHTML += html;  
};
    
//   1                                   Getting what users submit 


addForm.addEventListener('submit', e => {

    e.preventDefault();

    const todo = addForm.add.value.trim();

    if(todo.length){
    generateTemplate(todo);
    //                                 to empty the form after inputting 
    addForm.reset();

    }

});


  //                                         to delete the todos

  

  list.addEventListener('click', e => {

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();

    }


  });
       