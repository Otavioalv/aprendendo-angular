import { Pessoa } from "./main";
import { LogQrCode } from "./main";
import { logQrCodeProps } from "./main";
import { responseInterface } from "./main";

const pessoa = new Pessoa("otavio", 19, true);
pessoa.apresentacao();



// parte final
const log: logQrCodeProps = {
    data_hora: "09/10/2020",
    nome_imagem: "Nome imagem",
    url: "https://test.url.com.br"
}

// console.log(log);

const logs: logQrCodeProps[] = [
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
]

// console.log(logs);



const logQrCode: LogQrCode = new LogQrCode(logs);

const resultLog = logQrCode.showLogs();
console.log(resultLog);

const resultCreate = logQrCode.createLog(log);
console.log(resultCreate);


