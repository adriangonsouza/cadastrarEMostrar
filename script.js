var nameClient = document.getElementById("name");
var emailClient = document.getElementById("email");
var birthdayClient = document.getElementById("birthday");
var phoneClient = document.getElementById("phone");
var passwordClient = document.getElementById("password");
var confirmPasswordClient = document.getElementById("confirmPassword");
let registerClient = document.getElementById("register");
let showClient = document.getElementById("show-client");
let allClients = [];

registerClient.addEventListener('click', function () {

    showClient.innerHTML = "";

    if (passwordClient.value !== confirmPasswordClient.value) {
        alert("As senhas divergem!")
    } else {
        var client = {
            name: nameClient.value,
            email: emailClient.value,
            birthday: birthdayClient.value,
            phone: phoneClient.value,
            password: passwordClient.value
        }

        allClients.push(client);

        addClient();

        console.log(allClients);
    }

    nameClient.value = "";
    emailClient.value = "";
    birthdayClient.value = "";
    phoneClient.value = "";
    passwordClient.value = "";
    confirmPasswordClient.value = "";
});

function addClient() {
    allClients.forEach(function (item, index) {
        var confirmData = document.createElement("div");
        confirmData.className = "confirmDataClient";
        confirmData.innerHTML = `<span>Nome: ${item.name} <br>
        E-mail: ${item.email} <br>
        Data de Nascimento: ${item.birthday} <br>
        Telefone: ${item.phone}</span> 
        <button class="delete" data-index="${index}"><i class="oi oi-trash"></i></button>`;
        showClient.appendChild(confirmData);
    });

    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach(function (deleteButton) {
        deleteButton.addEventListener("click", function () {
            const index = parseInt(deleteButton.getAttribute("data-index"));
            allClients.splice(index, 1);
            showClient.innerHTML = "";
            addClient();
        });
    });
}