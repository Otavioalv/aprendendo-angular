"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("./main");
var main_2 = require("./main");
var pessoa = new main_1.Pessoa("otavio", 19, true);
pessoa.apresentacao();
// parte final
var log = {
    data_hora: "09/10/2020",
    nome_imagem: "Nome imagem",
    url: "https://test.url.com.br"
};
// console.log(log);
var logs = [
    {
        data_hora: "09/10/2020",
        nome_imagem: "Nome imagem",
        url: "https://test.url.com.br"
    },
    {
        data_hora: "09/10/2020",
        nome_imagem: "Nome imagem",
        url: "https://test.url.com.br"
    },
    {
        data_hora: "09/10/2020",
        nome_imagem: "Nome imagem",
        url: "https://test.url.com.br"
    },
    {
        data_hora: "09/10/2020",
        nome_imagem: "Nome imagem",
        url: "https://test.url.com.br"
    },
    {
        data_hora: "09/10/2020",
        nome_imagem: "Nome imagem",
        url: "https://test.url.com.br"
    },
    {
        data_hora: "09/10/2020",
        nome_imagem: "Nome imagem",
        url: "https://test.url.com.br"
    }
];
// console.log(logs);
var logQrCode = new main_2.LogQrCode(logs);
var resultLog = logQrCode.showLogs();
console.log(resultLog);
var resultCreate = logQrCode.createLog(log);
console.log(resultCreate);
