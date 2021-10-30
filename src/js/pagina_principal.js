const btnSair = document.querySelector('#btnSair');

btnSair.addEventListener('click', () => {

   localStorage.clear();
   window.location.replace('https://livrados.vercel.app/');

});