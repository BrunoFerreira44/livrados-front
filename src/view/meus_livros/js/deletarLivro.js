const btnDetalhes = document.querySelector('#btnDetalhes');

btnDetalhes.addEventListener('click', async() => {

    const btnExcluir = document.querySelector('#btnExcluir');
    const userId = localStorage.user_id;
    const title = document.querySelector('#titlePopup').value.substring(8);

    console.log('User ID === ' + userId);
    console.log('Titulo === ' + title);

    btnExcluir.addEventListener('click', async() => {

        const requestParams = {
            method: "POST",
            body: JSON.stringify({
                userIdParam: userId,
                titleParam: title
            }),
            headers: { 'Content-Type': 'application/json' },
        }
    
        try {
    
            const fetchDelete = await fetch('https://livrados-backend.herokuapp.com/deleteBook', requestParams);
            const fetchResult = await fetchDelete.json();
    
            if(!fetchResult.success){
                return Swal.fire({
                    icon: "error",
                    /* title: "Opa..", */
                    text: "Não foi possível deletar o livro. Tente novamente!",
                    showConfirmButton: false,
                    timer: 2000,
                });
            }
    
            return Swal.fire({
                icon: "success",
                /* title: "Opa..", */
                text: "Livro excluído com sucesso!",
                showConfirmButton: false,
                timer: 2000,
            });
            
        } catch (err) {
            console.error("Erro ao acessar endpoint de deleção de livro : " + err);
        }
    })
})