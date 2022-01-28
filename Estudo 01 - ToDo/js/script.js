const btn_add_task = document.getElementById('btn_add_task')
const btn_check_task = document.getElementById('btn_check_task')


btn_add_task.addEventListener('click', addTask)


function addTask(){   
    const title_task = document.getElementById('title_task').value
    console.log(title_task)

    updateList()
}

function deleteTask(id) {


    updateList()
}

function updateTask(id) {


    updateList()
}


function updateList(){
    console.log('a')
}



updateList()