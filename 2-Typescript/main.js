"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogQrCode = exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    //2 parte 
    function Pessoa(nome, idade, respirar) {
        if (respirar === void 0) { respirar = true; }
        this.respirar = respirar;
        this.nome = nome;
        this.idade = idade;
    }
    // 1 parte
    Pessoa.prototype.falar = function (palavra) {
        console.log("Falando: ", palavra);
    };
    Pessoa.prototype.andar = function (direcao, velocidade) {
        console.log("Andando na dire\u00E7\u00E3o: ".concat(direcao, " a ").concat(velocidade, "KMh"));
    };
    //
    // 2 parte 
    Pessoa.prototype.respirando = function () {
        this.respirar = this.respirar ? false : true;
    };
    Pessoa.prototype.apresentacao = function () {
        console.log("Nome: ".concat(this.nome, "\nIdade: ").concat(this.idade, "\nVivo: ").concat(this.respirar));
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
var LogQrCode = /** @class */ (function () {
    function LogQrCode(log) {
        this.log = log;
    }
    LogQrCode.prototype.showLogs = function () {
        for (var i = 0; i < this.log.length; i++) {
            console.log("HISTORICO >>> ".concat(i));
            console.log("url: ".concat(this.log[i].url, "\n"));
            console.log("Imagem: ".concat(this.log[i].nome_imagem, "\n"));
            console.log("Data: ".concat(this.log[i].data_hora, "\n\n"));
        }
        var response = {
            message: "Historico listado com sucesso",
            status: 200
        };
        return response;
    };
    LogQrCode.prototype.createLog = function (log) {
        this.log.push(log);
        var response = {
            message: "Historico salvo com sucesso",
            status: 200
        };
        return response;
    };
    return LogQrCode;
}());
exports.LogQrCode = LogQrCode;
