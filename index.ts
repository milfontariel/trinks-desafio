// 1. Número Feliz / Número Sortudo
isLuckyAndOrIsHappy(28);

function isLuckyAndOrIsHappy(userInput: number) {
  let response: string = "";
  isLucky(userInput)
    ? (response += "Número Sortudo")
    : (response += "Número Não-Sortudo");
  isHappy(userInput) ? (response += " e Feliz") : (response += " e Não-Feliz");

  console.log(response);

  function isHappy(userInput: number): boolean {
    let iterationsCount = 0;
    let result = check(userInput);

    while (result !== 1 && iterationsCount <= 100) {
      result = check(result);
    }

    if (result === 1) {
      return true;
    } else {
      return false;
    }

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
  }

  function isLucky(userInput: number): any {
    function populateArray(num: number): number[] {
      const array: number[] = [];
      for (let i = 1; i <= num; i++) {
        array.push(i);
      }
      return array;
    }
    function dryArray(arr: number[], param: number) {
      const array: number[] = [];

      for (let i = 0; i < arr.length; i++) {
        if ((i + 1) % param !== 0) {
          array.push(arr[i]);
        }
      }

      return array;
    }

    let elements: number[] = dryArray(populateArray(userInput), 2);
    let currentIndex: number = 1;
    let currentElement = elements[currentIndex];

    while (currentIndex <= userInput) {
      const previousElementsArray = elements;
      elements = dryArray(elements, elements[currentIndex]);
      if (previousElementsArray.length === elements.length) {
        if (elements.includes(userInput)) {
          return true;
        } else {
          return false;
        }
      }
      currentIndex++;
    }
  }
}
