let i = 1
document.addEventListener("DOMContentLoaded",() => {

    getmonsters()
    submitmonster()
    navigation()
})

function getmonsters(i){
let div = document.querySelector("#monster-container")
    div.innerHTML = " "
    fetch(`http://localhost:3000/monsters/?_limit=1&_page=${i}`)
    .then(response =>response.json())
    .then(monsters => monsters.forEach(monster => rendermonsters(monster))
    )
 }

function rendermonsters(monster){
    let monsterdiv = document.querySelector("#monster-container")
    
    let header = document.createElement("h1")
    header.innerText = `${monster.name}` 

    let age = document.createElement("h2")
    age.innerText = `age:${monster.age}`

    let description = document.createElement("p")
    description.innerText = `Description:${monster.description}`

    monsterdiv.append(header, age, description)   
}

function submitmonster(){
    let form = document.querySelector("#form")
    form.addEventListener('submit',createmonster)
}

function createmonster(){
    event.preventDefault
    let name = document.querySelector("#name").value
    let age = document.querySelector("#age").value
    let description = document.querySelector("#description").value
    fetch("http://localhost:3000/monsters", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
          name: name,
          age: age,
          description: description  
        })
    })
    .then(response => response.json)
    .then(monster => rendermonsters(monster))

}
function navigation(){
    let backbtn = document.querySelector("#back")
    backbtn.addEventListener('click',back)
    let forwardbtn = document.querySelector("#forward")
    forwardbtn.addEventListener('click',forward)

}
function back(){
   
    i-- 
    getmonsters(i)
    
}

function forward(){
    i++
    getmonsters(i)
}



