

const form = document.querySelector('.form');
const inputTask = form.querySelector('.input-task')
const buttonAdd = form.querySelector('.button-add');
const tasksList = document.querySelector('.tasks__list');
const error = document.querySelector('.error');

const toDoList = [
    { title: 'read the book' },
    { title: 'buy the book' },
    { title: 'clean the room' },
    { title: 'sleep well' },
]
//Функция для получения задач на сайт по умолчанию
function getInitialTasks() {
    toDoList.forEach(function (task) {
        const initialTask = createTask(task.title)
        renderItem(tasksList, initialTask)
    })
}

getInitialTasks();

//Функция render для добавления на сайт
function renderItem(array, item) {
    array.append(item)
}

//Функция создает задачу
function createTask(title) {
    const template = document.querySelector('#template').content;
    const newTask = template.querySelector('.task').cloneNode(true);
    const buttonDelete = newTask.querySelector('.task__button-delete');
    const buttonDone = newTask.querySelector('.task__button-done');
    const taskText = newTask.querySelector('.task__text');
    taskText.textContent = title;

    buttonDelete.addEventListener('click', () => {
        newTask.remove();
    })
    buttonDone.addEventListener('click', () => {
        buttonDone.classList.toggle('task__button-done_active');
        newTask.remove();
        tasksList.append(newTask);
    })
    return newTask;
}

//Функция для сброса формы
function resetForm() {
    inputTask.value = ''
}


//Слушатели
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = createTask(inputTask.value);
    renderItem(tasksList, task)
    resetForm();
    console.log('test')
})