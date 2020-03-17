function alphabetiqueString(str){
    console.log(str.split('').sort().join(''));
}

const string = "développeur";

alphabetiqueString(string); 

// ..................................

function alphabet_order(str) {
    return str.split("").sort().join("");
}

document.write(alphabet_order('développeur'));