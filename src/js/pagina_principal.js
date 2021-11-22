const btnSair = document.querySelector('#btnSair');

btnSair.addEventListener('click', () => {

   localStorage.clear();
   window.location.replace('https://livrados.vercel.app/');

});


//################################################

const txtPesquisar = document.querySelector('#txtPesquisar');
const btnPesquisar = document.querySelector('#btnPesquisar');

btnPesquisar.addEventListener('click', () => {

   if(!txtPesquisar.value)
      return window.location.replace(`https://livrados.vercel.app/view/explorar/`);

   const busca = txtPesquisar.value.replace(' ', '_');

   return window.location.replace(`https://livrados.vercel.app/view/explorar/index.html?titulo=${busca}`);
})