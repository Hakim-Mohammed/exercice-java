function reverseString(str){
    console.log(str.split('').reverse().join(''));
}

const string = "2016";

reverseString(string); 


// .............................

function reverse_a_number(number) {
    number = number + "";
    return number.split("").reverse().join("");
;}

document.write(reverse_a_number(2016));