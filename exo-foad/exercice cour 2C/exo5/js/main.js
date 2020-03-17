function titleCase(str) {
    let words =str.split(' ');
    let array = [];

    words.forEach(word => {
        let firstLetter = word.charAt(0).toUpperCase();

        let replacement = word.replace(word.charAt(0), firstLetter);

        array.push(replacement);
        
    });

    console.log(array.join(' '));
}

titleCase("le corbeau et le renard");

// ...........

function upperCase(str) {

    let array1 = str.split(' ');
    // let arraynew = [];
    let array2= new Array;

    for(let i=0; i<array1.length; i++){
        // array2[i]= array1[i].charAt(0).toUpperCase()+ array1[i].substr(1);
        
        array2.push(array1[i].charAt(0).toUpperCase() + array1[i].slice(1));    
    }

    return array2.join(' ');
}

document.write(upperCase("le corbeau et le renard"));

// let myString=prompt("Entrée une chaine de caractère: ");
//let array=myString.split(" "),final="";
//for(i=0;i<array.length;i++){
//   final+=array[i].charAt(0).toUpperCase() +array[i].substring(1,array[i].length)+" ";[]
//}
//document.write(final);