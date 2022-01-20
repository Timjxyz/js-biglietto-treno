// Chiedere di inserire l'età del viaggiatore
let etaViaggiatore = parseInt (prompt("Inserire l'età del viaggiatore.\nGrazie."));

//Chiedere di inserire la distanza da percorrere
let distanza = parseInt (prompt("Inserire la distanza da percorrere in km.\nGrazie."));

//Prezzo definito a km
const prezzoPerKm = 0.21;

//Prezzo finale del biglietto senza sconti
let prezzoFinale = distanza * prezzoPerKm;

//Sconto applicato ai minori
let scontoMinori = ((prezzoFinale * 20) /100);

//Prezzo dei minori
let prezzoMinorenni = prezzoFinale - scontoMinori;

//Sconto applicato ai pensionati
let scontoPensionati = ((prezzoFinale * 40) /100);

//Prezzo dei pensionati
let prezzoPensionati = prezzoFinale - scontoMinori;

if (etaViaggiatore < 18){
    //Prezzo del biglietto se sono minori
    
    prezzoMinorenni = prezzoFinale - scontoMinori;
    document.getElementById('prezzo').innerHTML ='Il prezzo è:' + '' + prezzoMinorenni + '€';
    document.getElementById('sconto').innerHTML ='Hai diritto allo sconto Minorenni del 20%!';

} else if(etaViaggiatore >=66 ){
    //Prezzo del biglietto se sono pensionati

    prezzoPensionati = prezzoFinale - scontoPensionati;
    document.getElementById('prezzo').innerHTML ='Il prezzo è:' + '' + prezzoPensionati + '€';
    document.getElementById('sconto').innerHTML ='Hai diritto allo sconto Senior del 40%!';
}
else{
    document.getElementById('prezzo').innerHTML ='Il prezzo è:' + '' + prezzoFinale + '€';
}




