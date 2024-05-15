

function sumMultiple(n , m) {
  let sum = 0;

  for(let i = 0 ; i <=n ; i++) { // contamos desde 0 hasta 20
    if(i % m == 0) { // si el indice (i) que itero es divisible entre 3  entonces sumalo a la variable
      sum += i;
      console.log(i);
    }
  }

  console.log(sum);
  return sum;

}



sumMultiple(20,3);