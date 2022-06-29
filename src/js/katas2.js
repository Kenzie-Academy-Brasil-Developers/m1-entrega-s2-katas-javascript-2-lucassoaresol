menu()

// comece a criar a sua função add na linha abaixo
function add(x,y){
    let resultado = x += y
    return resultado
}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');

// comece a criar a sua função multiply na linha abaixo
function multiply(x,y){
    let resultado = 0
    for(let i=0;i<x;i++){
        resultado += add(0,y)
    }
    if(x==0 || y==0){
        resultado = 0
    }
    else if(x==1 || y==1){
        if(x==1){
            resultado = y
        }
        else{
            resultado = x
        }
    }
    return resultado
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');

// comece a criar a sua função power na linha abaixo
function power(x,y){
    let resultado
    if(y==0){
        resultado=1
    }
    for(let i=0;i<y;i++){
        if(i<=1){
            if(i==0){
                resultado=1
            }
            else{
                resultado=x
            }
        }
        resultado = multiply(resultado,x)
    }
    return resultado
}

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');

// comece a criar a sua função factorial na linha abaixo
function factorial(x){
    let resultado = x
    for(let i=1;i<x;i++){
        resultado = multiply(resultado,i)
    }
    return resultado
}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');

/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(x){
    let variavelA = 0
    let variavelB = 1
    let operacao
    let resultado
    for(let i=0;i<x;i++){
        operacao = add(variavelA,variavelB)
        variavelA = variavelB
        variavelB = operacao
        resultado = variavelA
    }
    return resultado
}

// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');

// menu aplicação
function menu(){
let opcao = Number(prompt("Digite 01 para add, Digite 02 para multiply, Digite 03 para power, Digite 04 para factorial ou Digite 05 para fibonacci"))
if(opcao == 01 || opcao == 1){
    let valor1 = Number(prompt("Digite o primeiro número a ser somado pela função add"))
    let valor2 = Number(prompt("Digite o segundo número a ser somado pela função add"))
    alert(add(valor1,valor2))
}
else if(opcao == 02 || opcao == 2){
    let valor1 = Number(prompt("Digite o primeiro número a ser multiplicado pela função multiply"))
    let valor2 = Number(prompt("Digite o segundo número a ser multiplicado pela função multiply"))
    alert(multiply(valor1,valor2))
}
else if(opcao == 03 || opcao == 3){
    let valor1 = Number(prompt("Digite o número a ser utilizado na função power"))
    let valor2 = Number(prompt("Digite a potência a ser utilizada na função power"))
    alert(power(valor1,valor2))
}
else if(opcao == 04 || opcao == 4){
    let valor = Number(prompt("Digite o número a ser utilizado pela função factorial"))
    alert(factorial(valor))
}
else if(opcao == 05 || opcao == 5){
    let valor = Number(prompt("Digite o número a ser utilizado pela função fibonacci"))
    alert(fibonacci(valor))
}
else{
    alert("Opção Inválida, tente novamente!")
}
}
