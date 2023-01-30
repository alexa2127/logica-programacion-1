let numeros = [];

for(let i = 0;i<=2;i++){
numeros.push(prompt('digita un numero'));
}

if ((numeros[0] === numeros[1]) && (numeros[1] === numeros[2])){
    alert(`son iguales`);    
}
else if ((numeros[0] > numeros[1]) && (numeros[0] > numeros[2])) {
    
    alert(`el numero mayor ${numeros[0]}`); 

}else if ((numeros[1] > numeros[0]) && (numeros[1] > numeros[2])) {
   
    alert(`el numero mayor ${numeros[1]}`); 
}
else if ((numeros[2] > numeros[0]) && (numeros[2] > numeros[1])) {
    
    alert(`el numero mayor ${numeros[2]}`); 
}

if ((numeros[0] < numeros[1]) && (numeros[0] < numeros[2])) {
    
    alert(`el numero menor ${numeros[0]}`); 

}else if ((numeros[1] < numeros[0]) && (numeros[1] < numeros[2])) {
   
    alert(`el numero menor ${numeros[1]}`); 
}
else if ((numeros[2] < numeros[0]) && (numeros[2] < numeros[1])) {
    
    alert(`el numero menor ${numeros[2]}`); 
}

numeros.sort(function(a, b) {
    return a - b;
});
  alert(`el arreglo ascendente: ${numeros}`); 

  numeros.sort(function(a, b) {
    
    return b - a;
  });

  alert(`el arreglo descendente:  ${numeros}`); 

numeros [1]=(alert(`el numero del centro es ${numeros[1]}`));










