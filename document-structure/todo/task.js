const todo_form = document.getElementById('tasks__form')
const input_data = document.getElementById('task__input')
const task_list = document.getElementById('tasks__list')



const add_event = function (e) {
    e.preventDefault()
    if (input_data.value.length > 0) {
        let new_el = document.createElement("div")
        new_el.innerHTML =
            `
                    <div class="task__title">
                    ${input_data.value}
                    </div>
                    <a href="#" class="task__remove">&times;</a>
            `
        new_el.classList = 'task'
        const remover = new_el.querySelector('.task__remove')
        remover.addEventListener('click', (e) => {e.target.parentElement.remove()})
        task_list.appendChild(new_el)
        input_data.value = ''
    }
}
todo_form.addEventListener('submit', add_event)
