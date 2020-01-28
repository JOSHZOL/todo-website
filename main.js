let buttonAddTask = document.querySelector('#add-task');

let taskList = document.querySelector('ul');

let templateListItem = document.querySelector('template');
let taskListItem = templateListItem.content.querySelector('li');

let inputItem = document.querySelector('#input-item');
let inputTextbox = inputItem.querySelector('input');

let dateDiv = document.querySelector('#date');
const currentDate = new Intl.DateTimeFormat('en-NZ', { 
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
}).format(new Date(Date.now()));

dateDiv.textContent = currentDate;

buttonAddTask.addEventListener('click', () => {
    if (isValid()) {
        AddTask();
    }
});

inputTextbox.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && isValid()) {
        AddTask();
    }
});

function AddTask() {
    let node = document.importNode(taskListItem, true);
    let nodeLabel = node.querySelector('label');
    nodeLabel.textContent = inputTextbox.value;
    taskList.appendChild(node);
    
    inputTextbox.value = '';
}

function isValid() {
    if (inputTextbox.value !== '')
        return true;
}