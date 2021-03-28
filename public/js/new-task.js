document.getElementById('task').addEventListener('keyup', function(event) {
   
    if(event.key === 'Enter') {

        const task = document.getElementById('task').value
        if(task) {
            addNewTask(task)
            document.getElementById('task').value = ''
        }

    }
} )

function addNewTask(task) {
    
    if(localStorage.hasOwnProperty('to_do_tasks')) {

        const tasks = JSON.parse(localStorage.getItem('to_do_tasks'))
        tasks.push({name: task, status: 'to do'})
        localStorage.setItem('to_do_tasks', JSON.stringify(tasks))

    } else {

        const tasks = [
            {name: task, status: 'to do'}
        ]
        localStorage.setItem('to_do_tasks', JSON.stringify(tasks))
    }

}
