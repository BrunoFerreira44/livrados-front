const urlParams = new URLSearchParams(window.location.search);

if (urlParams){

    const searchFor = urlParams.get("titulo").replace('_', ' ');
    console.log("SearchFor == " + searchFor);

    const txtBuscar = document.querySelector('#txtBuscar');
    const btnBuscar = document.querySelector('#btnBuscar');

    txtBuscar.value = searchFor;
    btnBuscar.click();
    urlParams.set('');
}
