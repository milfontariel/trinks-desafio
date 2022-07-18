// 1. Número Feliz / Número Sortudo

function isHappy(userInput: number) {
  let iterationsCount = 0;

  function split(num: number): string[] {
    const numbers: string = num.toString();
    return numbers.split("");
  }

  function calculatePow(list: string[]) {
    let sum = 0;
    for (let number of list) {
      sum += Math.pow(parseInt(number), 2);
    }
    iterationsCount++;
    return sum;
  }

  function check(input: number): any {
    return calculatePow(split(input));
  }

  let result = check(userInput);

  while (result !== 1 && iterationsCount <= 100) {
    result = check(result);
  }

  if (result === 1) {
    return "É um número feliz!";
  } else {
    return "Não é um número feliz.";
  }
}

console.log(isHappy(7));
