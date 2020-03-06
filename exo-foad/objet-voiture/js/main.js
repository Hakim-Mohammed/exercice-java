let myCar;

myCar = new Object();       

myCar ={
    brand      : 'Peugeot',
    buyDate    : new Date('2015-04-27'),
    passengers : [ 'Hakim', 'Isabelle' ],
    year       : 1995
};

document.write('Informations sur la voiture :');
document.write('<ul>');

document.write('<li>Marque : ' + myCar.brand + '</li>');
document.write('<li>Année de fabrication : ' + myCar.year + '</li>');

document.write("<li>Date de l'achat : " + myCar.buyDate.toDateString() + '</li>');

document.write('<li>Passager 1 : ' + myCar.passengers[0] + '</li>');
document.write('<li>Passager 2 : ' + myCar.passengers[1] + '</li>');

document.write('</ul>');