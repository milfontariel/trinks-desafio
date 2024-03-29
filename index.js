export function isLuckyAndOrIsHappy(userInput) {
    var response = [];
    response.push(isLucky(userInput));
    response.push(isHappy(userInput));
    return response;
    function isHappy(userInput) {
        var iterationsCount = 0;
        var result = check(userInput);
        while (result !== 1 && iterationsCount <= 100) {
            result = check(result);
        }
        if (result === 1) {
            return true;
        }
        else {
            return false;
        }
        function split(num) {
            var numbers = num.toString();
            return numbers.split("");
        }
        function calculatePow(list) {
            var sum = 0;
            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                var number = list_1[_i];
                sum += Math.pow(parseInt(number), 2);
            }
            return sum;
        }
        function check(input) {
            iterationsCount++;
            return calculatePow(split(input));
        }
    }
    function isLucky(userInput) {
        function populateArray(num) {
            var array = [];
            for (var i = 1; i <= num; i++) {
                array.push(i);
            }
            return array;
        }
        function dryArray(arr, param) {
            var array = [];
            for (var i = 0; i < arr.length; i++) {
                if ((i + 1) % param !== 0) {
                    array.push(arr[i]);
                }
            }
            return array;
        }
        var elements = dryArray(populateArray(userInput), 2);
        var currentIndex = 1;
        while (currentIndex <= userInput) {
            var previousElementsArray = elements;
            elements = dryArray(elements, elements[currentIndex]);
            if (previousElementsArray.length === elements.length) {
                if (elements.includes(parseInt(userInput))) {
                    return true;
                }
                else {
                    return false;
                }
            }
            currentIndex++;
        }
    }
}
