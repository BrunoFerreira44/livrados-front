const txtNome = document.querySelector('#dados-nome');
const txtCelular = document.querySelector('#dados-celular');
const txtEmail = document.querySelector('#dados-email');
const txtCep = document.querySelector('#dados-cep');
const txtNumero = document.querySelector('#dados-numero');

txtNome.innerHTML += localStorage.user_name;
txtCelular.innerHTML += localStorage.user_phone;
txtEmail.innerHTML += localStorage.user_email;
txtCep.innerHTML += localStorage.user_cep;
txtNumero.innerHTML += localStorage.user_addressNumber;