class Sejour{
    constructor(private _nom:string, private _prix:number){

    }
    get nom(){
        return this._nom;
    }
    set nom(newNom){
        this._nom=newNom;
    }
    get prix(){
        return this._prix;
    }
    set prix(newPrix){
        this._prix=newPrix;
    }
}

class SejourService{
    private _sejour:Array<any>=[];
    constructor(){
        this._sejour.push(new Sejour("Paris", 57));
        this._sejour.push(new Sejour("Strasbourg", 62));
        this._sejour.push(new Sejour("Orléans", 49));
    }
    get sejour(){
        return this._sejour;
    }
    getSejourByName(nom:string):Sejour{
        return this._sejour.find(element => element.nom==nom);
    }
}
let serv = new SejourService();
let sej = serv.getSejourByName("Paris");
console.log(sej.nom);

