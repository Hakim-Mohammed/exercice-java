// /*la fonction getElementByTagName renvoie une liste des éléments portant le nom de balise donné ici "span".*/
// let sp = document.getElementsByTagName("span");
// let btn_start=document.getElementById("start");
// let btn_stop=document.getElementById("stop");
// let t ="";
// let ms=0,s=0,mn=0,h=0;
  
// /*La fonction "start" démarre un appel répétitive de la fonction update_chrono par une cadence de 100 milliseconde en utilisant setInterval et désactive le bouton "start" */

// function start(){
//   t =setInterval(update_chrono,100);
//   btn_start.disabled=true;
// }

//  /*La fonction update_chrono incrémente le nombre de millisecondes par 1 <==> 1*cadence = 100 */
// function update_chrono(){
//    ms+=1;
// /*si ms=10 <==> ms*cadence = 1000ms <==> 1s alors on incrémente le nombre de secondes*/
//       if(ms==10){
//        ms=1;
//        s+=1;
//       }
// /*on teste si s=60 pour incrémenter le nombre de minute*/
//       if(s==60){
//        s=0;
//        mn+=1;
//       }
//       if(mn==60){
//        mn=0;
//        h+=1;
// }

// /*afficher les nouvelle valeurs*/
//       sp[0].innerHTML=h+" h";
//       sp[1].innerHTML=mn+" min";
//       sp[2].innerHTML=s+" s";
//       sp[3].innerHTML=ms+" ms";
// }
 
// /*on arrête le "timer" par clearInterval ,on réactive le bouton start */
// function stop(){
//    clearInterval(t);
//    btn_start.disabled=false;
// }

// /*dans cette fonction on arrête le "timer" ,on réactive le bouton "start" et on initialise les variables à zéro */
// function retourZero(){
//   clearInterval(t);
//    btn_start.disabled=false;
//    ms=0,s=0,mn=0,h=0;
//    /*on accède aux différents span par leurs indice*/
//    sp[0].innerHTML=h+" h";
//    sp[1].innerHTML=mn+" min";
//    sp[2].innerHTML=s+" s";
//    sp[3].innerHTML=ms+" ms";  
// }




// Exercice 3 : Créer un chronomètre composé d'un afficheur et 3 boutons :
// un bouton "start" pour lancer le chronomètre, un bouton "stop" pour l’arrêter et un bouton "reset" pour le remettre à zéro. [moyen]
let sp = document.getElementsByTagName("span");
let afficheur = '';
let ms=0;
let s=0;
let mn=0;
let h=0;
let btn_start = document.getElementById("start");
let btn_stop = document.getElementById("stop");


// 1. Créer une fonction "start" qui appelle d'une manière répétitive la fonction update_chrono via la fonction setInterval avec une cadence de 100 ms.
function start(){
   afficheur = setInterval(update_chrono,100);
   btn_start.disabled=true;
}

// 2. Créer une fonction "update_chrono()" qui permet d’incrémenter le nombre de millisecondes, secondes, minutes, et heures.
function update_chrono(){
    ms+=1;
       if(ms===10){
        ms=1;
        s+=1;
       }
       if(s===60){
        s=0;
        mn+=1;
       }
       if(mn===60){
        mn=0;
        h+=1;
       }
       sp[0].innerHTML=h+" h";
       sp[1].innerHTML=mn+" min";
       sp[2].innerHTML=s+" s";
       sp[3].innerHTML=ms+" ms";
}
// 3. Créer une fonction "stop" qui arrête le traitement de setInterval.
function stop(){
    clearInterval(afficheur);
    btn_start.disabled=false;
}

// 4 Créer une fonction "reset" qui remet les valeurs et l'affichage à 0.
function reset(){
   clearInterval(afficheur);
   btn_start.disabled=false;
    ms=0;
    s=0;
    mn=0;
    h=0;
    sp[0].innerHTML=h+" h";
    sp[1].innerHTML=mn+" min";
    sp[2].innerHTML=s+" s";
    sp[3].innerHTML=ms+" ms";
}