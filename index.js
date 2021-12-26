const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('passwordtwo')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs () {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordtwoValue = passwordtwo.value.trim();

    if (usernameValue == '') {
        // mostrar o erro
        // adiciona a classe error
        errorValidation(username, "Preencha esse campo");
    } else {
        //adicionar a classe sucesso
        successValidation(username)
    }

    if (emailValue == '') {
        errorValidation(email, "Preencha esse campo");
    } else {
        successValidation(email);
    }

    if (passwordValue == '') {
        errorValidation(password, "Insira a senha");
    }else if (passwordValue.length < 8) {
        errorValidation(password, "A senha deve ter + de 8 caracteres");
    }else {
        successValidation(password);
    }

    if(passwordtwoValue == '') {
        errorValidation(passwordtwo, "Insira a senha");
    }else if (passwordValue !== passwordtwoValue){
        errorValidation(passwordtwo, "As senhas inseridas não são iguais");
    }else {
        successValidation(passwordtwo);
    }
}

function errorValidation(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function successValidation(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}