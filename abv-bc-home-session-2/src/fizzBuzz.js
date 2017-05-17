//function to find a number divisible by 3 or 5 or both. 
function fizzBuzz(number){
  if(number % 3 === 0 && number % 5 ===0)
  {
    return "FizzBuzz";
  }
  else if(number % 3 === 0 )
  {
    return "Fizz";
  }
  else if(number % 5 ===0)
  {
    return "Buzz";
  }
  else 
  {
    return number;
  }
}