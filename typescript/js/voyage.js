"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (newNom) {
            this._nom = newNom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        set: function (newPrix) {
            this._prix = newPrix;
        },
        enumerable: true,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejour = [];
        this._sejour.push(new Sejour("Paris", 57));
        this._sejour.push(new Sejour("Strasbourg", 62));
        this._sejour.push(new Sejour("Orléans", 49));
    }
    Object.defineProperty(SejourService.prototype, "sejour", {
        get: function () {
            return this._sejour;
        },
        enumerable: true,
        configurable: true
    });
    SejourService.prototype.getSejourByName = function (nom) {
        return this._sejour.find(function (element) { return element.nom == nom; });
    };
    return SejourService;
}());
var serv = new SejourService();
var sej = serv.getSejourByName("Paris");
console.log(sej.nom);
