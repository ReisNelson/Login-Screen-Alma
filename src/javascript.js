const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Adiciona a classe para ativar o modo de registro
signUpButton.addEventListener('click', () => {
    container.classList.add("modo-registro-ativo");
});

// Remove a classe para voltar ao modo de login
signInButton.addEventListener('click', () => {
    container.classList.remove("modo-registro-ativo");
});
