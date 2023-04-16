function aula2(){
   
    let nome = document.getElementById('txtnome').value;
   

 
    let resultadoMedia = document.getElementById("resultadoMedia");

    let nota1 = Number(document.getElementById('txtnota1').value);
    let nota2 = Number(document.getElementById('txtnota2').value);
    let nota3 = Number(document.getElementById('txtnota3').value);
    media = (nota1 + nota2 + nota3) / 3;
    
    
    if (nome == ""){
        resultadoMedia.innerHTML = "Insira o nome";
        resultadoMedia.classList.add("erro"); 
    }
    else{
        if (media>= 7){
            resultadoMedia.innerHTML =  "A media da aluna " + nome + " " + "foi" + " " + media.toString()+ " " + "ele(a) foi aprovado(a)";
        }
        else{
            resultadoMedia.innerHTML =  "A media da aluna " + nome + " " + "foi" + " " + media.toString()+ " " + "ele(a) foi reprovado(a)";
        }
    }
    
    
}

