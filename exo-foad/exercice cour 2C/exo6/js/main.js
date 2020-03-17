// function longestWord(string) {
//     let str = string.split(" ");
//     let longest = 0;
//     let word = null;
//     str.forEach(function(str) {
//         if (longest < str.length) {
//             longest = str.length;
//             word = str;
//         }
//     });
//     return word;
// }
// console.log(longestWord("Tutorial Développement Web"));

// **************************************************

function findLongestWord(str){
    let array1 = str.match(/\w[a-z\u00E0-\u00FC]{0,}/gi);
    // document.write(array1);
    let result = array1[0];
    document.write(result);

    for ( let x=1 ; x < array1.length ; x++){
        if(result.length < array1[x].length){
            result = array[x]
        }
    }
    return result;
}
// console.log(findLongestWord('Tutorial Développement Web'));
document.write(findLongestWord('Tutorial Développement Web'));