//let j = 1;
// entête de mon tableau
document.write("<table border='1'>");
document.write("<tr><td>X</td>");
for (let i = 1; i <= 10; i++) {
    document.write("<td>", i, "</td>");
}
document.write("</tr>");

for (let j = 1; j <= 10; j++) {
    // la création d'une ligne de ma table de multiplication
    document.write("<tr><td>", j, "</td>");
    for (i = 1; i <= 10; i++) {
        document.write("<td>", i * j, "</td>");
    }
    document.write("</tr>");
}

// for (let j = 1; j <= 10; j++) {
//     document.write("<tr><td>",j,"</td>")
//     for(let u = 1; u<=10; u++){
//      document.write("<td>",u*j,"</td>")
//     }
// }



document.write("</table>");