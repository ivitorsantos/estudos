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

function updateList() {
    
    var chave = localStorage.length
    
    let contentTask = document.getElementById('tbody')
    contentTask.innerText = ''
    let i = 0
    while( i < chave) {
        const result = localStorage.getItem(i+1)
        const resultObj = JSON.parse(result)
        
        let tr = contentTask.insertRow()

        let td_id = tr.insertCell()
        let td_nome = tr.insertCell()
        let td_acoes = tr.insertCell()
        
        td_id.innerText = i+1
        td_nome.innerText = resultObj.titulo
        td_acoes.innerHTML = '<input type="checkbox">'

        td_id.style.display = "none"
        td_nome.classList.add('nome_task')
        td_acoes.classList.add('checkBox')
        // td_nome.innerText = reusltObj.titulo 
        

        // document.write('<div class="task">' + '<span>'+ reusltObj.titulo + '</span>' + '<br>' + '<input type="checkbox">' + '</div>')
        console.log(resultObj.titulo)

        
        i++
     }


}


function updateTask(){
    
}

window.onload = updateList()

