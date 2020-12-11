function Inserir7(){
        document.getElementById("visor").value += 7;
}
function Inserir8(){
    document.getElementById("visor").value += 8;
}


function Inserir6(){
    document.getElementById("visor").value += 6;
}
function Inserir5(){
    document.getElementById("visor").value += 5;
}
function Inserir4(){
    document.getElementById("visor").value += 4;
}
function Inserir3(){
    document.getElementById("visor").value += 3;
}
function Inserir2(){
    document.getElementById("visor").value += 2;
}
function Inserir1(){
    document.getElementById("visor").value += 1;
}
function Inserir9(){
    document.getElementById("visor").value += 9;
}
function Inserir0(){
    document.getElementById("visor").value += 0;
}



function InserirMais(){
    document.getElementById("visor").value += "+";
}
function InserirDividir(){
    document.getElementById("visor").value += "/";
}
function InserirVezes(){
    document.getElementById("visor").value += "*";
}
function InserirMenos(){
    document.getElementById("visor").value += "-";
}
function InserirPonto(){
    document.getElementById("visor").value += ",";
}
function LimparVisor(){
    document.getElementById("visor").value = "";
}
function RaizQuadrada(){
    let numero = document.getElementById("visor").value;
    document.getElementById("visor").value = Math.sqrt(numero);
}
function Calcular(){
    //pegar o texto do visor, converter em expressão numerica.

    let Expressao = document.getElementById("visor").value;
    
    // Calcular.
    
    
    let resultado = eval(Expressao);
    // mostrar no visor o resultador do calculo.

    document.getElementById("visor").value = resultado;
}

function Apagar(){
    let conteudo = document.getElementById("visor").value;
    document.getElementById("visor").value = conteudo.substring(0, conteudo.length - 1);
}