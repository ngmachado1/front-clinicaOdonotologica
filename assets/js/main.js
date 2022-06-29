

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

const inHTML =(odontologos) =>{
    const container = document.querySelector('.cards');
 
    container.innerHTML = "";
    let html;
    console.log(odontologos.length );
    if (odontologos.length > 0){
        odontologos.forEach(odontologo => {
            html = html + component(odontologo);
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
  .then(json => inHTML(json))
  .catch(error => console.log("error odontologos", error))




fetch(userApi)
.then(response => response.json())
.then(user => odontologos.forEach(element => {
    element
}))
.catch(error => console.log("error", error))
