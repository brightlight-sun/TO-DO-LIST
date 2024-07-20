let inputList = document.getElementById('input-list');
let inputBar = document.getElementById('input-bar');

function addTask() {
    if (inputBar.value == '') {
        alert('Type a task to add it to list')
    } else {
        // adds a new task to list
        let newTask = document.createElement('li')
        newTask.textContent = inputBar.value
        inputList.appendChild(newTask)

        // creating delete icon using span tag
        let span = document.createElement('span');
        // span.textContent = ' ';
        newTask.appendChild(span)
    }
    inputBar.value = '';
    saveData()
};


inputList.addEventListener('click', (el) => {
    // to mark task completed
    if (el.target.tagName == 'LI') {
        el.target.classList.toggle('checked')
        saveData()
    }
    // to delete a task
     else if (el.target.tagName == 'SPAN') {
        el.target.parentElement.remove()
        saveData()
    } 
})

// local storage to recover data after refreshing the page

function saveData(){
    localStorage.setItem("saved-task", inputList.innerHTML)
}

function showData(){
    inputList.innerHTML = localStorage.getItem('saved-task')
}

showData()



//dark mode 
const darkModeBtn = document.querySelector('#night-mode');

darkModeBtn.addEventListener('change', function() {
    if (darkModeBtn.checked){
        document.body.classList.add('darkMode')
    }else{
        document.body.classList.remove('darkMode')

    }
})


// end of the code