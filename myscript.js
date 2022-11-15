const error = "no chyba nie"

function handleCalculatorForm(form){

    let inputBox1 = form.inputbox1.value;
    let inputBox2 = form.inputbox2.value;
    let operator = form.operator.value;

    document.getElementById("calcResult").innerHTML = calculate(inputBox1, inputBox2, operator);

}

function handlePalindromeForm(form){

    let formValue = form.inputbox2.value;
    document.getElementById("palindromeResult").innerHTML = palindrome(formValue);
}

function calculate(input1, input2, operator){

    function validate(n) { 
        return (n === null || n == "") 
    }

    if (validate(input1) || validate(input2) || validate(operator)) { return error }

    switch (operator) {

        case "add":
            return parseInt(input1) + parseInt(input2) // tylko tutaj trzeba parsować bo js
            
        case "subtract":
            return input1 - input2

        case "multiply":
            return input1 * input2

        case "divide":
            return input2 == 0? error : input1 / input2

    }

    return error
}

function palindrome(input){
    
    function floor(n) { // ta abominacja obcina .5 z końca liczby (nie byłem pewny czy możemy używać Math)
        return (n+"")[(n+"").length-1] == "5" || (n+"")[(n+"").length-2] == "."? n-0.5:n 
    }

    for (let i = 0; i < floor(input.length/2); i++) {
        
        if (input[i] != input[input.length-1-i]) { return error; }

    }

    return "jest palindromem, wszystko śmiga"

}

function handleAnagramForm(form){

    let word1 = form.inputbox3.value;
    let word2 = form.inputbox4.value;
    document.getElementById("anagramResult").innerHTML = anagram(word1, word2);
}

function bubbleSort(arr){
    
    for(var i = 0; i < arr.length; i++){
       
        for(var j = 0; j < ( arr.length - i -1 ); j++){
         
            if(arr[j] > arr[j+1]){           
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

function BackwardsBubbleSort(arr){
    
    for(var i = 0; i < arr.length; i++){
       
        for(var j = 0; j < ( arr.length - i -1 ); j++){
         
            if(arr[j] < arr[j+1]){           
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

function BackwardsBubbleSortStrings(arr){
    
    for(var i = 0; i < arr.length; i++){
       
        for(var j = 0; j < ( arr.length - i -1 ); j++){
         
            if(arr[j].length > arr[j+1].length){           
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

function anagram(var1, var2) {
    let word1 = [];
    let word2 = [];
    let flag = true;

    word1ASCII = [];
    word2ASCII = [];

    word1 = var1.split('');
    word2 = var2.split('');

    if(word1.length == word2.length){
        for(let i = 0; i < word1.length; i++){
            word1ASCII[i] = word1[i].charCodeAt(0);
        }

        for(let i = 0; i < word2.length; i++){
            word2ASCII[i] = word2[i].charCodeAt(0);
        }

        word1ASCII = bubbleSort(word1ASCII);
        word2ASCII = bubbleSort(word2ASCII);

        console.log(word1ASCII);
        console.log(word2ASCII);


        for(let i = 0; i < word1ASCII.length; i++){
            if (word1ASCII[i] != word2ASCII[i]){
                flag = false;
                break;
            }
        }
    }
    else {
        return false;
    }
    return flag;
}

function tower(n, sourcePole, destinationPole, auxiliaryPole) {
    if(0 == n)
    return;

    tower(n - 1, sourcePole, auxiliaryPole, destinationPole);

    console.log("Move the disk " + n + " from " +
    sourcePole + " to " + destinationPole);

    tower(n - 1, auxiliaryPole, destinationPole,sourcePole);
}

tower(4, 'A', 'C', 'B');

function fibonacci (n){
    if (n < 2){
        return n;
    }
    else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

function noRepeats(arr) { // działa tylko na posortowanych tablicach

    let temp = [arr[0]]
    for (let i = 1; i < arr.length; i++) {

        if (arr[i] != arr[i-1]) {
            temp.push(arr[i])
        }
        
    }
    return temp;

}

// wszystkie te funkcje dają errora nie mam pojęcia czym są dlatego je skomentowałem

//console.log(recurse(1,5));
//console.log(0.2 + 0.1);
//console.log(fibonacci(5));
//console.log(anagram("siema", "siemb"));
//console.log("a".charCodeAt(0));
//console.log("b".charCodeAt(0));

function zadanie3(arr) {

    // tak, wiem, że powinienem wybrać krótsze nazwy
    return typeof(arr[0]) == "string"? noRepeats(BackwardsBubbleSortStrings(arr))[1] : noRepeats(BackwardsBubbleSort(arr))[1] 

}

console.log(" -- zadnie 3 --")
console.log(zadanie3([1, 5 ,10 ,15]))
console.log(zadanie3([1, 1, 3, 3, 4 ,4]))
console.log(zadanie3(["ala", "robert", "stanislaw"]))

function zadanie4(n1,n2) {

    console.log(n1)
    if (n1 < n2) {
        zadanie4(n1+1,n2)
    }

}

console.log(" -- zadnie 4 --")
zadanie4(8, 11)
console.log("--")
zadanie4(1, 5)

