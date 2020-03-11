    //Déclarer un tableau
	let tab=new Array();
	function add_nom(){
		tab.push(prompt("Saisir un nom"));
	}
    function tirage(){
    	if(tab.length>0){
    /*Math.random()*tab.length renvoie un nombre réel entre 0 et la taille du tableau tab.length et on arrondit à l'entier inférieur par la fonction Math.floor()*/
        let rand = Math.floor(Math.random()*tab.length);
        alert("Le nom gagnant est : "+tab[rand]);
    	}
    	else alert("Veuillez ajouter des noms");
    }

