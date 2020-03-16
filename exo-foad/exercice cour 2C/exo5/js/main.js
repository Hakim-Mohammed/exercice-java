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
