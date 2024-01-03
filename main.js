//Todo o comportamento do cabeçalho e do form
$(document).ready(function(){

    $('header button').click(function() {
        $('form').fadeIn()
        // ao clicar no botão do header o formulário aparece
    })

    $('#buttonCancelar').click(function () {
        $('form').fadeOut()
        // ao clicar no botão cancelar do formulário o mesmo desaparece
    })
    
    $('form').on('submit' , function(e) {
        e.preventDefault()
        const enderecoDaNovaImagem = $('#adicionandoImagemNova').val()
        const novoItem = $('<li style="display : none"></li>')
        $(`<img src= "${enderecoDaNovaImagem}" />`).appendTo(novoItem)
        $(`
            <div class="link-imagens">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem do tamanho real">
                    ver imagem do tamanho real
            </div>
            
            `).appendTo(novoItem)

            $(novoItem).appendTo('ul')
            $(novoItem).fadeIn(1000)
            $('#adicionandoImagemNova').val('')


    })
})