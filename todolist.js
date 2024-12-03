const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
        

 
        renderTodoList();
        
        function renderTodoList() {
          let todoListHTML = '';
        
          for (let i = 0; i < todoList.length; i++) {
            const todoObject = todoList[i];
            //const name = todoObject.name;
            //const dueDate = todoObject.dueDate;
            const { name, dueDate, isDone, color} = todoObject;
            let status = isDone ? 'Done' : 'Not done';
            const html = 
            
            `
            
            <div class="divBack">

            <span class="name">To-do name:</span>

            <span class="div123" style="color: ${color || 'red'};">${status}</span>
             <input class="div1111" readonly value="${name}" placeholder="To-do name" maxlength="35">
              <span style="margin-left: 135px;">${dueDate}</span>
             <button class="edit" onclick="
             toggleReadonly(${i});
             ">Edit</button>
              
              <button onclick="
            j(${i});
              " class="delete-todo-button1"><i class="fa-solid fa-check"></i></button>
              
              
              <button class="delete-todo-button" onclick="
              deleteTodo(${i});
              " style="margin-bottom: 15px;"><i class="fa-solid fa-trash"></i></button>
              </div>
              
              
            `;
        
            todoListHTML += html;
            
            
          }
        
          document.querySelector('.js-todo-list1').innerHTML = todoListHTML;
        
            
        
           
        }

        
        

        function addTodo() {
          
        
          const inputElement = document.querySelector('.js-name-input');
          
          const name = inputElement.value;
          
        //progress
        
          if (name === '') {
            alert('Please fill in all required information(Title)')
            return false;
            
          }
           
          //localStorage.setItem('name', JSON.stringify(name))
            //JSON.parse(localStorage.getItem('name'));
          
        
        
          const dateInputElement = document.querySelector('.js-due-date-input');
          const dueDate = dateInputElement.value;
        
          
        
         
            
          todoList.push({    
            //name: name,
            //dueDate: dueDate,
            name,
            dueDate,
            isDone: false
          });
        
          localStorage.setItem('todoList', JSON.stringify(todoList));
        
          inputElement.value = '';
          dateInputElement.value = '';
        
          
        
          
          renderTodoList();
          const progressSecondValue = todoList.length;
          const progressFirstValue = todoList.filter(todo => todo.isDone).length;
    
    document.querySelector('.progress').innerHTML = `${progressFirstValue} / ${progressSecondValue}`;
    
    localStorage.setItem('firstValue', JSON.stringify(progressFirstValue));
    localStorage.getItem('firstValue');
    JSON.parse(progressFirstValue);
    

    localStorage.setItem('secondValue', JSON.stringify(progressSecondValue));
    localStorage.getItem('secondValue');
    JSON.parse(progressSecondValue);

    

    renderTodoList();
        }
        document.addEventListener('DOMContentLoaded', () => {
          const inputElement2 = document.querySelector('.js-name-input');
          if (inputElement2) {
              inputElement2.addEventListener("keydown", (event) => {
                  if (event.key === "Enter") {
                    addTodo();
                    window.location.href = "todoList.html";
                      
                  }
              });
          }
      });
      
        localStorage.setItem('todoList', JSON.stringify(todoList));

        let progressSecondValue = todoList.length;
          let progressFirstValue = todoList.filter(todo => todo.isDone).length;
    
    document.querySelector('.progress').innerHTML = `${progressFirstValue} / ${progressSecondValue}`;
    
    localStorage.setItem('firstValue', JSON.stringify(progressFirstValue));
    localStorage.getItem('firstValue');
    JSON.parse(progressFirstValue);
    

    localStorage.setItem('secondValue', JSON.stringify(progressSecondValue));
    localStorage.getItem('secondValue');
    JSON.parse(progressSecondValue);

    renderTodoList();
        

        


        function j(i) {
  
  todoList[i].isDone = !todoList[i].isDone;
  
 

  
  const statusDivs = document.querySelectorAll('.div123');
  const isDone = statusDivs[i]; 
  
  todoList[i].color = todoList[i].isDone ? 'green' : 'red';

  if (todoList[i].isDone === 'green') {
    const progressFirstValue = document.querySelector('.div123');
    progressFirstValue.classList.add('firstvalue')
  }

  localStorage.setItem('todoList', JSON.stringify(todoList));
  renderTodoList();
  const progressSecondValue = todoList.length;
          const progressFirstValue = todoList.filter(todo => todo.isDone).length;
    
    document.querySelector('.progress').innerHTML = `${progressFirstValue} / ${progressSecondValue}`;
    
    localStorage.setItem('firstValue', JSON.stringify(progressFirstValue));
    localStorage.getItem('firstValue');
    JSON.parse(progressFirstValue);
    

    localStorage.setItem('secondValue', JSON.stringify(progressSecondValue));
    localStorage.getItem('secondValue');
    JSON.parse(progressSecondValue);

    renderTodoList();
}










              function deleteTodo(i) {
                let c = confirm("Are you sure?");
                
                if (c === true) {
                  todoList.splice(i, 1);
            localStorage.setItem('todoList', JSON.stringify(todoList));
            renderTodoList();

                  
                  
                } else {
                  alert("Action canceled")
                }
                
                const progressSecondValue = todoList.length;
          const progressFirstValue = todoList.filter(todo => todo.isDone).length;
    
    document.querySelector('.progress').innerHTML = `${progressFirstValue} / ${progressSecondValue}`;
    
    localStorage.setItem('firstValue', JSON.stringify(progressFirstValue));
    localStorage.getItem('firstValue');
    JSON.parse(progressFirstValue);
    

    localStorage.setItem('secondValue', JSON.stringify(progressSecondValue));
    localStorage.getItem('secondValue');
    JSON.parse(progressSecondValue);

    renderTodoList();
                
         
        }

        /*document.addEventListener('DOMContentLoaded', () => {
          const inputElement3 = document.querySelectorAll('.div1111')
          const addToDoButton1 = document.querySelectorAll('.edit')

          inputElement3.forEach((inputElement3, i) => {
            inputElement3.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        toggleReadonly(i);
          }
        
        
        
    
})
        })
      
        addToDoButton1.forEach((addToDoButton1, i) => {
          addToDoButton1.addEventListener("click", () => toggleReadonly(i))
        }
      
      
      
      )
      
      }
      
        
      
      
      ) */

      


       function toggleReadonly(i) {
            const input = document.querySelectorAll('.div1111');
            input[i].readOnly = !input[i].readOnly; // Toggle the readonly property
            
            const buttonElement = document.querySelectorAll('.edit');
           
        if (buttonElement[i].innerText === 'Edit') {
          buttonElement[i].innerHTML = 'Save';
         
        } else {
            
            buttonElement[i].innerHTML = 'Edit';
            
        }

        todoList[i].name = input[i].value;
    localStorage.setItem('todoList', JSON.stringify(todoList));
        
      }

      

      

      function deleteAll() {
        
        
        let c = confirm("Are you sure?");
        let a = '';    
                
                
                if (c === true) {
                  a = confirm("Are you absolutely sure??")
                  
                  if (a === true) {
                    localStorage.removeItem('todoList')
  todoList.length = 0;
  progressSecondValue = 0;
           progressFirstValue = 0;
    
    document.querySelector('.progress').innerHTML = `${progressFirstValue} / ${progressSecondValue}`;
    
    localStorage.setItem('firstValue', JSON.stringify(progressFirstValue));
    localStorage.getItem('firstValue');
    JSON.parse(progressFirstValue);
    

    localStorage.setItem('secondValue', JSON.stringify(progressSecondValue));
    localStorage.getItem('secondValue');
    JSON.parse(progressSecondValue);

   
  renderTodoList(); 

                    
                  }

                  

                  
                  
                } 

                if (a === false) {
                  alert("Canceled")
                }
                
                if (c === false) {
                  alert("Canceled")
                }

                

                

  
}




//SUIIII