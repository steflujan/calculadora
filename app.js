var calculadora = parseInt(prompt("Escoja un número:\n"+
	"1. suma\n" +
	"2. resta\n" + 
	"3. multiplicacion\n" + 
	"4. division\n" +  
	"5. mayorQue\n" +  
	"6. menorQue\n" + 
	"7. modulo\n" ));
var numero1 = parseInt(prompt("Ingresa el primer número"));
var numero2 = parseInt(prompt("Ingresa el segundo número"));

	switch (calculadora){
		case 1:
			var suma = numero1 + numero2;
			window.alert("La suma es: "+ suma);
			break;
		case 2:
			var resta = numero1 - numero2;
			window.alert("La resta es: "+ resta);
			break;
		case 3:
			var multiplicacion = numero1 * numero2;
			window.alert("La multiplicación es: "+ multiplicacion);
			break;
		case 4:
			var division = numero1 / numero2;
			window.alert("La división es: "+ division);
			break;
		case 5:
			var mayorQue = Math.max(numero1,numero2);
			window.alert("El número mayor es: "+ mayorQue);
			break;

			/*if(numero1 > numero2){
				window.alert("El numero mayor es : " + numero1);
			} else{
				window.alert("El numero mayor es : " + numero2);
			}
			break;*/
			
		case 6:
			var menorQue = Math.min(numero1,numero2);
			window.alert("El número menor es: "+ menorQue);
			break;
		case 7:
          	var  modulo = (numero1 / 100) * numero2; 
       		window.alert("el total del resto-modulo es:" + modulo);
    	break;

		default:
			window.alert("error");
			break;
	}