const btn_add_task = document.getElementById('btn_add_task')
const btn_check_task = document.getElementById('btn_check_task')


btn_add_task.addEventListener('click', addTask)

function addTask(){   
    let title_task = document.getElementById('title_task').value
    let taskJason = {'titulo' : title_task, 'feito' : 0}
   
    if (title_task.length > 0){
        let chave = localStorage.length
        console.log(chave)

        if (chave == 0){
            console.log('entrou if')
            localStorage.setItem(1, JSON.stringify(taskJason));
        }
        else {
            console.log('entrou else')
            let id = chave+1
    
            localStorage.setItem(id, JSON.stringify(taskJason));
        }
    }

    updateList()
}   

function deleteTask(id) {


    updateList()
}

function updateList() {
    
    let chave = localStorage.length
    
    let contentTask = document.getElementById('tbody')
    contentTask.innerText = ''

    let i = 0
    while( i < chave) {
        let result = localStorage.getItem(i+1)
        let resultObj = JSON.parse(result)
        
        let tr = contentTask.insertRow()

        if (resultObj.feito == 0){
            let td_nome = tr.insertCell()
            let td_acoes = tr.insertCell()
            
            td_nome.innerText = resultObj.titulo
            td_acoes.innerHTML = '<input type="checkbox" onclick="updateTaskCheck('+ (i+1) + ')">'    
            td_nome.classList.add('nome_task')
            td_acoes.classList.add('checkBox')
        } else{

            let td_nome = tr.insertCell()
            let td_acoes = tr.insertCell()
            
            td_nome.innerText = resultObj.titulo
            td_acoes.innerHTML = '<input type="checkbox" checked onclick="updateTaskCheck('+ (i+1) + ')">'
    
            td_nome.style.textDecoration = "line-through"
            td_nome.classList.add('nome_task')
            td_acoes.classList.add('checkBox')
        }

        i++
     }


}


function updateTaskCheck(id){
    let result = localStorage.getItem(id)
    let resultObj = JSON.parse(result)

    if(resultObj.feito == 0 ){
        resultObj.feito = 1
        console.log(resultObj.feito)
    } else {
        resultObj.feito = 0
    }

    localStorage.setItem(id, JSON.stringify(resultObj));

    updateList()
}


function clearTasks() {
    localStorage.clear()
    
    updateList()
}

window.onload = updateList()

