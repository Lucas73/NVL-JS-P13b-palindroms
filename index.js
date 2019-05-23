

function palindrom(word){
  var word = prompt('PALINDROMOS - Introduzca una palabra a comprobar')
  if(word){word = word.toLowerCase().replace(/ +?/g, '')}else{return};
  for(i=0; i<word.length/2; i++){
    if(word[i]===word[word.length-i-1]){ true }else{ alert('No es un palíndromo'); return false };
  }
  alert('Sí es un palíndromo')
}

