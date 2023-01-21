/*
Instructions
- Create a function called calculator that has 3 arguments: value1, operator and value2
- By using a switch statement, ask for each case to find out what's the operator being passed to the function, then set the result of that operation by using value1 and value2
*/

function calculator(value1, operator, value2)
{
let result = 0;
//Add you code here
  switch (operator){
    case '+':
    return (value1 + value2);
    break;
    case '-':
    return (value1 - value2);
    break;
    case '*':
    return (value1 * value2);
    break;
    case 'x':
    return (value1 * value2);
    break;
    case 'X':
    return (value1 * value2);
    break;
    case '/':
      if (value2 === 0)
      {
        return (value1/value2);
        break;
      }
      else
      {
        return (value1/value2);
        break;
      }
    default:
      return ' ';
  }
} 
//uncomment next lines one by one, then check the console for results
console.log(calculator(1, '+', 1))
console.log(calculator(3, '-', 2))
console.log(calculator(3, '*', 2))
console.log(calculator(30, '/', 2))
console.log(calculator(5, '/', 0))

//don't change this line
if (typeof module !== "undefined") {
  module.exports = {
    calculator,
  };
}
