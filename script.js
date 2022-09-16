const url = "http://localhost:8080/users";



function getOrganizations() {
  fetch(url)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.log("error"));
}

function addOrganization(name, address, INN) {

  const data = {
    name,
    address,
    INN,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
}

function register(login, password) {
  const data = {
    login, 
    password
  }

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
}

const name = document.querySelector('#name'),
      address = document.querySelector('#address'),
      inn = document.querySelector('#inn')

const userName = document.querySelector('#user_name'),
      userPassword = document.querySelector('#user_password'),
      regBtn = document.querySelector('#registration_btn');


document.querySelector('button').addEventListener('click', () => {
  addOrganization(name.value, address.value, +inn.value)
})

regBtn.addEventListener('click', () => {
  register(userName.value, userPassword.value)
})
