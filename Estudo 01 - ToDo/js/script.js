const btn_add_task = document.getElementById('btn_add_task')
const btn_check_task = document.getElementById('btn_check_task')


btn_add_task.addEventListener('click', addTask)


function addTask(){   
    const title_task = document.getElementById('title_task').value
    const taskJason = {'titulo' : title_task, 'feito' : 0}
   
    if (title_task.length > 0){
        const chave = localStorage.length
        console.log(chave)

        if (chave == 0){
            console.log('entrou if')
            localStorage.setItem(1, JSON.stringify(taskJason));
        }
        else {
            console.log('entrou else')
            const id = chave+1
    
            localStorage.setItem(id, JSON.stringify(taskJason));
        }
    }

    updateList()
}

function deleteTask(id) {


    updateList()
}

function updateTask(id) {
    

    updateList()
}


function updateList(){



window.onload = updateList()



