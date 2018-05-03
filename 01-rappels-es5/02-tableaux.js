var tab1=["nantes", "paris", "sait-nazaire", "angers", "le mans"];
/*tab1.forEach(function(value){
    console.log(value);
});*/
function lettreADansToutesLesVilles(ville){
    
    if(ville.search('a')!=-1){
        return true;
    }
    return false;
}
function auMoinsUneVilleAvecUnTiret(ville){
    
    if(ville.search('-')!=-1){
        return true;
    }
    return false;
}

var a1 = ville => ville.search('s')==ville.length-1;

var a2 = function(ville) {
    return ville.search('s')==ville.length-1;
}

function villeClean(ville){
    return (ville.search('-')!=-1)?false:(ville.search(' ')!=-1)?false:ville.value;
}
//console.log(tab1.every(lettreADansToutesLesVilles));
//console.log(tab1.some(auMoinsUneVilleAvecUnTiret));
var villesSansTiretSansEspace = tab1.filter(ville => ville.search('-')==-1).filter(ville => ville.search(' ')==-1);
console.log("villesSansTiretSansEspace ==", villesSansTiretSansEspace);
var villesMajusculeSeTerminantParS = tab1.filter(ville => ville.search('s')==ville.length-1).every(ville.toUpperCase());
console.log("villesMajusculeSeTerminantParS ==", villesMajusculeSeTerminantParS);
