

const userApi ="https://randomuser.me/api/?results=10"





// console.log(user.results[0].picture.medium)
 const component = (odontologo, item) =>{
    return `
    <div class="card">
        <img src="https://randomuser.me/api/portraits/med/men/88.jpg" alt="">
        <h4>${odontologo.nombre} ${odontologo.apellido}</h4>
        <small>${odontologo.matricula}</small>
        <button>Connect</button>
    </div>
    `
 }

const inHTML =(json, cont) =>{
    const container = document.querySelector(cont);
 
    container.innerHTML = "";
    let html;
    console.log(json.length );
    if (json.length > 0){
        json.forEach(jsonItem => {
            html = html + component(jsonItem);
        });
    }

    container.innerHTML = html
}


let odontologos = [];
let user;
const url = "http://localhost:8080/odontologos"
fetch(url, {
    headers:{
        "method": "GET",
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
  .then(odontologosJson => inHTML(odontologosJson, '.cards'))
  .catch(error => console.log("error odontologos", error))




fetch(userApi)
.then(response => response.json())
.then(user => odontologos.forEach(element => {
    element
}))
.catch(error => console.log("error", error))
