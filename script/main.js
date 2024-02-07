document.addEventListener('DOMContentLoaded', ()=>{

    var elementosPlay1 = document.querySelectorAll('.play-1 img');
   
    var playerOpt = '';
    var inimigoOpt = '';


    function validarvitoria(){
        let vencedor = document.querySelector('.vencedor');
        
        if(playerOpt == 'Papel'){

            if(inimigoOpt == 'Tesoura'){
                vencedor.innerHTML = 'Você Perdeu!';
                

            }else if(inimigoOpt == 'Papel'){
                vencedor.innerHTML = 'Empate!';
                

            }else if(inimigoOpt == 'Pedra'){
                vencedor.innerHTML = 'Você Ganhou!';
                
            }
        }
        if(playerOpt == 'Pedra'){

            if(inimigoOpt == 'Tesoura'){
                vencedor.innerHTML = 'Você Guanhou!';

            }else if(inimigoOpt == 'Papel'){
                vencedor.innerHTML = 'Você Perdeu!';
                

            }else if(inimigoOpt == 'Pedra'){
                vencedor.innerHTML = 'Empate!';
            }
        }

        if(playerOpt == 'Tesoura'){

            if(inimigoOpt == 'Tesoura'){
                vencedor.innerHTML = 'Empate!';

            }else if(inimigoOpt == 'Papel'){
                vencedor.innerHTML = 'Você Ganhou!';

            }else if(inimigoOpt == 'Pedra'){
                vencedor.innerHTML = 'Você Perdeu!';
                                
            }
        }
    }
    function resetInimigo(){
        const enemyOption = document.querySelectorAll('.play-2 img');
        for(let i=0; i<enemyOption.length; i++){
            enemyOption[i].style.opacity = 0.3;
            
      };
    };

    function inimigoJogou(){
        
        let rand =Math.floor(Math.random()*3);
        //alert(rand)
        const enemyOption = document.querySelectorAll('.play-2 img');
        resetInimigo();

        for(let i=0; i<enemyOption.length; i++){

                if(i == rand){
                    enemyOption[i].style.opacity = 1;
                    inimigoOpt= enemyOption[i].getAttribute('opt');
                }
            
        }
        validarvitoria();
    }

    function resetopacityplayer(){
        for(var i=0; i<elementosPlay1.length; i++){
            elementosPlay1[i].style.opacity = 0.3;
        };
    };

    for(var i=0; i<elementosPlay1.length; i++){
        elementosPlay1[i].addEventListener('click', (click)=>{
            resetopacityplayer();
            click.target.style.opacity = 1;
            

            playerOpt = click.target.getAttribute('opt');
            //alert(playerOpt);
            inimigoJogou();
        });
    };

});