//Daniel Kenny 19/08/19
//An example of how to solve the Fizzbuzz question in JS

function fizzBuzz(){
  for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log("FizzBuzz");
    }else if(i % 3 === 0){
      console.log("Fizz");
    }else if(i % 5 === 0){
      console.log("Buzz");
    }else{
      console.log(i);
    }
  }
}

console.log(fizzBuzz());
