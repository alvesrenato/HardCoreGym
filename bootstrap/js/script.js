
    $('.carousel').carousel({
      interval: 4000
    });
  

  
    $(document).ready(function () {

      $('#data').mask("99/99/9999");
      $('#cpf').mask("999.999.999-99");
      $('form').validate();

      $('#cep').keyup(function(){
        var cepDigitado = $('#cep').val();
        if(cepDigitado.length ==8){
          $.getJSON('https://viacep.com.br/ws/'+cepDigitado+'/json',
          function(dados){
           // console.log(dados);
            $('#logradouro').val(dados.logradouro);
            $('#bairro').val(dados.bairro);
            $('#cidade').val(dados.localidade);
            $('#uf').val(dados.uf);
          })
        }

      })

    });

   