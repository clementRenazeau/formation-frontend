let favoriteCityId = "rome";
//console.log(favoriteCityId);
favoriteCityId = "paris";
//console.log(favoriteCityId);

const citiesId=["paris", "nyc", "rome", "rio-de-janeiro"];
//console.log(citiesId);
//citiesId=[];
citiesId.push("tokyo");
//console.log(citiesId);

function getWeather(cityId){
    let city=cityId.toUpperCase();
    let temperature = 20;
    return {city, temperature};
}
const weather = getWeather(favoriteCityId);
//console.log(weather);
const {city, temperature}=weather;
//console.log(city);
//console.log(temperature);
let [parisd, nyId, ...otherscitiesId]= citiesId;
//console.log(parisd);
//console.log(nyId);
//console.log(otherscitiesId);

class Trip{
    constructor(id, name, imageUrl){
        this.id=id;
        this.name=name;
        this.imageUrl=imageUrl;
    }
    toString(){
        return (`Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this._price}]`);
    }
    get price(){
        return this._price;
    }
    set price(newPrice){
        this._price=newPrice;
    }
    static getDefaultTrip(){
        return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg");
    }
}
let parisTrip =new Trip("paris", "Paris", "img/paris.jpg");
//console.log(parisTrip);
//console.log(parisTrip.name);
parisTrip.price=100;
//console.log(parisTrip.toString());
const defaultTrip=Trip.getDefaultTrip();
//console.log(defaultTrip.toString());

class FreeTrip extends Trip{
    constructor(id, name, imageUrl){
        super(id, name, imageUrl);
        this._price=0;
    }
    toString(){
        //return "Free"+super.toString();
        return `Free${super.toString()}`;
    }
}
const freeTrip=new FreeTrip("nantes", "Nantes", "img/nantes.jpg");
console.log(freeTrip.toString());

class TripService {

    constructor() {
        this.tripSet=new Set();
        this.tripSet.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.tripSet.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        this.tripSet.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }

    findByName(tripName) {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                let trip = Array.from(this.tripSet).find(t => t.name == tripName);
           
                if(trip){
                    resolve(trip);
                } else{
                    reject(`No trip with name ${tripName}`);
                } 
            }, 2000);
            
        });
    }
}

class PriceService {

    constructor() {
        this.priceMap=new Map();
        this.priceMap.set("paris", 100);
        this.priceMap.set("rio-de-janeiro", 800);
        // no price for 'nantes'
    }

    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let price = Array.from(this.priceMap).find(prix => prix.name == tripId);
           
                if(price){
                    resolve(price);
                } else{
                    reject(`No price found for id ${tripId}`);
                } 
            }, 2000);
            
        });
    }
}

let tripService=new TripService();
let priceService=new PriceService();
