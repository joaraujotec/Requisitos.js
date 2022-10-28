
const primeiraDiv = document.querySelector('.primeiro-passo');
const segundaDiv = document.querySelector('.segundo-passo');
const terceiraDiv = document.querySelector('.terceiro-passo');

function go(currentStep,nextStep) 
{
let dNone, dBlock;
if(currentStep == 1)
{
    dNone = primeiraDiv;
}
else if(currentStep == 2)
{
    dNone = segundaDiv;
}
else
{
    dNone = terceiraDiv;
}

dNone.style.display = 'none';

if(nextStep == 1)
{
    dBlock =             dNone = primeiraDiv;
;
}
else if(nextStep == 2)
{
    dBlock = segundaDiv;
}
else
{
    dBlock = terceiraDiv;
}

dBlock.style.display = 'block';
}

function verificar()

{

//buscando os valores nos inputs

var nome1= document.getElementById('nome1')
var nome2= document.getElementById('nome2')
var nome3= document.getElementById('nome3')

var idade1 = document.getElementById ('idade1')
var idade2 = document.getElementById('idade2')
var idade3 = document.getElementById('idade3')

var altura1 = document.getElementById('altura1')
var altura2 = document.getElementById('altura2')
var altura3 = document.getElementById('altura3')

var peso1 = document.getElementById('peso1')
var peso2 = document.getElementById('peso2')
var peso3 = document.getElementById('peso3')

// convertendo os dados recebidos para poder efetuar os calculos
const array_nomes = new Array(nome1.value, nome2.value, nome3.value);

console.log(array_nomes);

var i1 = parseInt(idade1.value)
var i2 = parseInt(idade2.value)
var i3 = parseInt(idade3.value)

var a1 = parseFloat(altura1.value)
var a2 = parseFloat(altura2.value)
var a3 = parseFloat(altura3.value)

var p1 = parseInt(peso1.value)
var p2 = parseInt(peso2.value)
var p3 = parseInt(peso3.value)


var pesoTotal = p1 + p2 + p3;
var idadeTotal = i1 + i2 + i3;
var mediaIdades = idadeTotal /3;

console.log(pesoTotal);
totalPesos.innerHTML = pesoTotal;

console.log(mediaIdades);
idadeMedia.innerHTML = mediaIdades;

// convertendo os dados inseridos em arrays
 

    const array_alturas = new Array(a1, a2, a3);
            let maior_altura = array_alturas[0];
            let nome_maior_altura = "";
            
            let nome_seg_maior_altura = "";
            let segunda_maior_altura = 0;

            for (let i = 0; i < array_alturas.length; i++) {
                
                if (array_alturas[i] > maior_altura) {
                    segunda_maior_altura = maior_altura;
                    nome_seg_maior_altura = nome_seg_maior_altura;
                    maior_altura = array_alturas[i];
                    nome_maior_altura = array_nomes[i];

                } else if (array_alturas[i] > segunda_maior_altura && array_alturas[i] < maior_altura) {
                    
                    segunda_maior_altura = array_alturas[i];
                    nome_seg_maior_altura = array_nomes[i];

                }
                
            }
            console.log('a maior altura é: ' + maior_altura +' de '+ nome_maior_altura +' e a segunda altura é : '
             + segunda_maior_altura + ' de ' + nome_seg_maior_altura);
             console.log(segunda_maior_altura);
                primeiraAltura.innerHTML = 'a maior altura é: ' + maior_altura; 
                nomePrimeiraAltura.innerHTML = ' de ' + nome_maior_altura;
                segundaAltura.innerHTML ='a segunda maior altura é: ' +  segunda_maior_altura;
                nomeSegundaAltura.innerHTML = 'de ' + nome_seg_maior_altura;
            
var array_pesos = new Array(p1, p2, p3);
let menorP = array_pesos[0];
let nome_menor_peso = "";
    for(let i = 0; i < 3; i++){
        if(array_pesos[i] <= menorP){
            menorP = array_pesos[i];
           
           nome_menor_peso = array_nomes[i];
           
        }
    }
//console.log(array_pesos);
console.log('<br> o menor peso é: '+ menorP + ' kg do tripulante: ' + nome_menor_peso);

menorPeso.innerHTML = menorP;
nomeMenorPeso.innerHTML = nome_menor_peso;


go(2,3);
}
