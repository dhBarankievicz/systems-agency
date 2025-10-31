//menu responsivo
$(function(){
    $('.menuMobile').on('click', function(){
        $('.menuMobile nav').slideToggle();
        return false
    })
})

//scroll dinamico
$(function(){
    $('nav a').on('click',function(){   //TODA VEZ QUE CLICADO EM UM LINK DO NAV
        var href=$(this).attr('href'); //PEGA O HREF DO A CLICADO
        var offsetTop=$(href).offset().top; //DIRECIONA A PAGINA PARA O ELEMENTO COM ID COM NOME IGUAL O ID DO HREF
        $('html, body').animate({'scrollTop':offsetTop});//SCROLLTOP É A ANIMACAO QUE FAZ DESCER A PAGINA ATÉ O ELEMENTO COM ID IGUAL DO A CLICADO
        return false
    })
}) 

//slider MUDAR, NAO FAZER ASSIM
/*

$(function(){

    function initSlider(){
        var quantidadeDevs = $('.wraperDevs').length;
        var delay=2000;
        var posicaoInicial=0;
        var container=100*quantidadeDevs;
        var tamanhoSliderSingle=100/quantidadeDevs;
        $('.wraperDevs').css('width',tamanhoSliderSingle+'%');
        $('.scrollWraper').css('width',container+'%');

        //colocando as bullets
        $('.sliderBullets').empty();
        for(var i=0; i< quantidadeDevs; i++){
            
            if(i==0){
                $('.sliderBullets').append('<span style="background-color:black"></span>')
    
            }else{
                $('.sliderBullets').append('<span></span>')
            }
        }
        function autoplay(){
            setInterval(function(){
                posicaoInicial++;
                if(posicaoInicial===quantidadeDevs){
                    posicaoInicial=0;
                    goToSlider(posicaoInicial);
                }
            },delay)
        }
        autoplay();         //até aqui ok
   
    }
    initSlider();
    function goToSlider(posicaoInicial){
        $('.sliderBullets span').css('background=color','rgb(200, 200, 200);');
        $('.sliderBullets span').eq(posicaoInicial).css('background=color','black');

        var offsetX=$('.wraperDevs').eq(posicaoInicial).position().left - $('.wraperDevs').length
        $('.scrollEquipe').animate({'scrollLeft':offsetX})
    }    

    
    
})
    */
   $(function(){
    $('.scrollWraper').slick({
        centerMode:false,
        autoplay:true,
        arrows:false,
        dots:true
    })
   })