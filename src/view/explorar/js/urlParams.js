console.log("MEU DEUSSSSSSSSSSSSSSSSSSSSSSSSSSS")
console.log("Tentativa de colocar o windows search === " + window.location.search)
const urlParams = new URLSearchParams(window.location.search);

if (urlParams){
    console.log("Entrei aqui");

    const searchFor = urlParams.get("titulo").replace('_', ' ');
    console.log("SearchFor == " + searchFor);

    const txtBuscar = document.querySelector('#txtBuscar');
    const btnBuscar = document.querySelector('#btnBuscar');

    txtBuscar.value = searchFor;
    btnBuscar.click();
}
