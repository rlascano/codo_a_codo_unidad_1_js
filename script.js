
let ejercicio1 = () => alert("Hello World");

let ejercicio2 = () => document.write("Hello World")

let ejercicio3 = () => document.write(`${3 +5}`)

let ejercicio4 = () => {
    let nombre = prompt("Ingrese su nombre")
    document.write(`Hola ${nombre}`)
}

let ejercicio5 = () => {
    let num1 = parseInt(prompt("Ingrese un numero"))
    let num2 = parseInt(prompt("Ingrese otro numero"))
    document.write(`La suma de los numeros ingresados es ${num1 + num2}`)
}

let ejercicio6 = () => {
    let mayor = 0
    let num1 = parseInt(prompt("Ingrese un numero"))
    let num2 = parseInt(prompt("Ingrese otro numero"))
    mayor = num1 > num2 ? num1 : num2
    document.write(`La suma de los numeros ingresados es ${mayor}`)
}

let ejercicio7 = () => {
    let mayor = 0
    let num1 = parseInt(prompt("Ingrese un numero"))
    let num2 = parseInt(prompt("Ingrese otro numero"))
    let num3 = parseInt(prompt("Ingrese otro numero"))
    if(num1 > num2 && num1 > num3) {
        mayor = num1
    } else if (num2 > num1 && num2 > num3) {
        mayor = num2
    } else {
        mayor = num3
    }
    document.write(`La suma de los numeros ingresados es ${mayor}`)
}

let ejercicio8_complicado = () => {    
    let num = parseInt(prompt("Ingrese un numero"))
    while(num >= 2) {
        num -= 2
        console.log(num)
    }

    if(num == 0) {
        document.write("El numero es divisible por 2")
    } else {
        document.write("El numero no es divisible por 2")
    }

}

let ejercicio8_simple = () => {
    let num = parseInt(prompt("Ingrese un numero"))
    if(num % 2 == 0) {
        document.write("El numero es divisible por 2")
    } else {
        document.write("El numero no es divisible por 2")
    }
}

let ejercicio9 = () => {
    let frase = prompt("Ingrse su frase favorita")    
    let letrasA = 0

    frase = frase.toLowerCase()

    for(letra of frase) {
        if(letra === 'a') {
            letrasA += 1
        }
    }

    document.write(`Su frase tiene ${letrasA} letras a`)
}

let ejercicio10 = () => {
    let frase = prompt("Ingrse su frase favorita")    
    let vocales = []

    frase = frase.toLowerCase()

    for(letra of frase) {
        if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
            vocales.push(letra)
        }
    }

    document.write(`Su frase tiene las siguientes vocales ${vocales}`)
}

let ejercicio11 = () => {
    let frase = prompt("Ingrse su frase favorita")    
    let vocales = 0

    frase = frase.toLowerCase()

    for(letra of frase) {
        if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
            vocales += 1
        }
    }

    document.write(`Su frase tiene ${vocales} vocales`)
}

let ejercicio12ConIfElse = () => {
    let frase = prompt("Ingrese su frase favorita")
    frase = frase.toLocaleLowerCase()
    let cantidadA = 0, cantidadE = 0, cantidadI = 0, cantidadO = 0, cantidadU = 0

    for(letra of frase) {
        if(letra === 'a') {
            cantidadA += 1
        } else if(letra === 'e') {
            cantidadE += 1
        } else if(letra === 'i') {
            cantidadI += 1
        } else if(letra === 'o') {
            cantidadO += 1
        } else if(letra === 'u') {
            cantidadU += 1
        }    
    }

    document.write("La frase tiene: <br>")
    document.write(cantidadA + " letras a <br>")
    document.write(cantidadE + " letras e <br>")
    document.write(cantidadI + " letras i <br>")
    document.write(cantidadO + " letras o <br>")
    document.write(cantidadU + " letras u <br>")
}

let ejercicio12ConSwitch = () => {
    let frase = prompt("Ingrese su frase favorita")
    frase = frase.toLocaleLowerCase()
    let cantidadA = 0, cantidadE = 0, cantidadI = 0, cantidadO = 0, cantidadU = 0

    for(letra of frase) {
        switch(letra) {
            case 'a': 
                cantidadA += 1
                break;
            case 'e': 
                cantidadE += 1
                break;
            case 'i':
                cantidadI += 1
                break;
            case 'o': 
                cantidadO += 1
                break;
            case 'u':
                cantidadU += 1
                break;
        }    
    }

    document.write("La frase tiene: <br>")
    document.write(cantidadA + " letras a <br>")
    document.write(cantidadE + " letras e <br>")
    document.write(cantidadI + " letras i <br>")
    document.write(cantidadO + " letras o <br>")
    document.write(cantidadU + " letras u <br>")
}

let ejercicio12ConObjeto = () => {
    let frase = prompt("Ingrese su frase favorita")    
    let vocales = {}

    frase = frase.toLowerCase()

    for(letra of frase) {
        if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
            if(vocales[letra] == undefined) {
                vocales[letra] = 0
            } 
            vocales[letra] += 1
        }
    }
    console.log({vocales})
    for(let letra in vocales) {
        document.write(`Letra ${letra}: ${vocales[letra]} veces`)
        document.write('<br>')
    }
}

let ejercicio13 = () => {
    //Esto entendí yo de lo que pide el ejercicio

    let mensaje = ""
    let num = parseInt(prompt("Ingrese un numero: "))
    
    if(num % 2 === 0) {
        mensaje = "El numero ingresado es divisible por 2"
    } else if(num % 3 === 0) {
        mensaje = "El numero ingresado es divisible por 3"
    } else if(num % 5 === 0) {
        mensaje = "El numero ingresado es divisible por 5"
    } else if(num % 7 === 0) {
        mensaje = "El numero ingresado es divisible por 7"
    } else {
        mensaje = "El numero ingresado no es divisible por 2, 3, 5 o 7"
    }

    document.write(mensaje)
}

let ejercicio14 = () => {  
    //Este también se podría resolver de forma parecida al anterior
    //pero sin los else.  
    let num = parseInt(prompt("Ingrese un numero: "))
    let divisores = [2, 3, 5, 7]
    let resultado = [] 
    
    for(let divisor of divisores) {
        if(num % divisor === 0) {
            resultado.push(divisor)
        } 
    }

    if(resultado.length === 0) {
        document.write("El numero no es divisible por 2, 3, 5 ni 7")
        return
    }    

    document.write("El numero ingresado es divisble por: ")
    for(numero of resultado) {
        document.write(numero + ' ')
    }    
}

let ejercicio15 = () => {      
    let num = parseInt(prompt("Ingrese un numero: "))    
    let resultado = [] 
    
    for(let divisor = 1; divisor <= num / 2; divisor++) {
        if(num % divisor === 0) {
            resultado.push(divisor)
        } 
    }

    if(resultado.length === 1) {
        document.write("El numero ingresado es primo")
        return
    }    

    document.write("El numero ingresado es divisble por: ")
    for(numero of resultado) {
        document.write(numero + ' ')
    }    
}

let ejercicio16 = () => {  
    let num1 = parseInt(prompt("Ingrese un numero: "))
    let num2 = parseInt(prompt("Ingrese un numero: "))    
    let menor = num1 < num2 ? num1 : num2
    let resultado = [] 
    
    for(let divisor = 1; divisor <= menor; divisor++) {
        if(num1 % divisor === 0 && num2 % divisor === 0) {
            resultado.push(divisor)
        } 
    }

    if(resultado.length === 1) {
        document.write("Los numeros ingresados son coprimos")
        return
    }    

    document.write(`Divisores comunes de ${num1} y ${num2}: `)
    for(numero of resultado) {
        document.write(numero + ' ')
    }    
}

let ejercicio17 = () => {
    let num = parseInt(prompt("Ingrese un numero: "))
    //Se asume que el número es primo
    let esPrimo = true

    for(let i = 2; i <= num / 2; i++) {
        if(num % i === 0) {
            //Si entra acá el número no es primo
            //se rompe el bucle con el break
            esPrimo = false
            break
        }
    }

    if(esPrimo) {
        document.write("El numero es primo")
    } else {
        document.write("El numero ingresado no es primo")
    }
}

let ejercicio18 = () => {
    let edad = parseInt(prompt("Ingrese su edad"))
    if(edad > 18) {
        document.write("Ya podes manejar")
    } else {
        document.write("Tenes que seguir esperando")
    }
}

let ejercicio19 = () => {
    let nota = parseInt(prompt("Ingrese la nota"))
    switch(nota) {
        case 0:
        case 1:
        case 2: 
        case 3:
           document.write("Muy deficiente") 
           break;
        case 4: 
        case 5:
            document.write("Insuficiente")
            break;
        case 6:
            document.write("Suficiente")
            break;
        case 7: 
            document.write("Bien")
            break;
        case 8: 
        case 9: 
            document.write("Notable")
            break;
        case 10: 
            document.write("Sobresaliente")
            break;
        default:
            document.write("Nota no valida")            

    }
}

let ejercicio20 = () => {
    let texto = ""
    let resultado = ""
    while(texto !== "cancelar") {
        texto = prompt("Ingrese una palabra")
        //Este if es para que no imprima la palabra cancelar, si se omite funciona igual el script
        if(texto === "cancelar") {
            break;
        }
        resultado += texto + "-"        
    }
    document.write(resultado)
}

let ejercicio21 = () => {
    //Acá creo que me complique mucho seguro hay una forma mas sencilla de leer
    let num = 0
    let resultado = 0
    while(true) {
        num = prompt("Ingrese un numero")
        if(num === "cancelar") {
            break;
        }
        num = parseInt(num)
        if(isNaN(num)) {
            alert("Debe Ingresar numeros")
            continue
        }        
        resultado += num        
    }
    document.write(resultado)
}

let ejercicio22 = () => {
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
    let dni = prompt("Ingrese su dni")
    dni = parseInt(dni)
    if(isNaN(dni)) {
        alert("Debe ingresar solo numeros")
        return
    }
    if(dni < 0 || dni > 99999999) {
        alert("Numero de DNI no válido")
        return
    }
    let moduloDNI = dni % 23
    console.log(moduloDNI)
    document.write(`DNI con letra: ${dni}-${letras[moduloDNI]}`)
}

let ejercicio23 = () => {
    let limite = 30
    for(let i = 1; i <= limite; i++) {
        for(let j = 1; j <= i; j++) {
            document.write(i)
        }
        document.write('<br>')
    }
}

let ejercicio24 = () => {
    let limite = parseInt(prompt("Ingrese un numero"))
    for(let i = limite; i >= 1; i--) {
        for(let j = i; j >= 1; j--) {
            if(i < 10) {
                document.write('0' + i)
            } else {
                document.write(i)
            }            
        }
        document.write('<br>')
    }
}

let ejercicio25 = () => {
    const MAX = 500

    for(let i = 1; i <= MAX; i++) {
        document.write(i)
        //Se prueba si es multiplo de 4
        if(i % 4 === 0) {
            document.write(' (Múltplo de 4)')
        }
        //Se prueba si es multiplo de 9
        if(i % 9 === 0) {
            document.write(' (Múltplo de 9)')
        }        
        document.write('<br>')
        //Se prueba si es multiplo de 5 para imprimir la línea
        if(i % 5 === 0) {
            document.write('<hr>')
        }
    }
}

//cambiar por el numero de ejercicio que se desee ejecutar
ejercicio25()