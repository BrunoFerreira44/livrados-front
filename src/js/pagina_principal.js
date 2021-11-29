const txtPesquisar = document.querySelector('#txtPesquisar');
const btnPesquisar = document.querySelector('#btnPesquisar');

btnPesquisar.addEventListener('click', () => {
   
   if (!txtPesquisar.value)
      return;

   const setterUrlParameter = txtPesquisar.value.replace(' ', '_');
   window.location.replace(`https://livrados.vercel.app/view/explorar/index.html?title=${setterUrlParameter}`);
})