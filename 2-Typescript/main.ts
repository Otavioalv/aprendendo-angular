
export class Pessoa {
  private respirar: boolean;
  private nome:string;
  private idade: number;


  //2 parte 
  constructor(nome:string, idade:number, respirar: boolean = true) {
    this.respirar = respirar;
    this.nome = nome;
    this.idade = idade;
  }

  

  // 1 parte
  falar(palavra: string) {
    console.log("Falando: ", palavra);
  }

  andar(direcao: "esquerda" | "direita" | "frente" | "tras", velocidade: number){
    console.log(`Andando na direção: ${direcao} a ${velocidade}KMh`);
  }
  //


  // 2 parte 
  respirando(){
    this.respirar = this.respirar ? false : true; 
  }

  apresentacao() {
    console.log(`Nome: ${this.nome}\nIdade: ${this.idade}\nVivo: ${this.respirar}`);
  }
  //
}




// Testar interface
export interface logQrCodeProps {
  id?: number,
  url: string;
  nome_imagem: string;
  data_hora: string;
}

export interface responseInterface {
  message: string;
  status: number;
}


export class LogQrCode {
  private log: logQrCodeProps[];

  constructor(log: logQrCodeProps[]) {
    this.log = log;
  }

  showLogs(): responseInterface{
    for(var i = 0; i < this.log.length; i++) {
      console.log(`HISTORICO >>> ${i}`);
      console.log(`url: ${this.log[i].url}\n`);
      console.log(`Imagem: ${this.log[i].nome_imagem}\n`);
      console.log(`Data: ${this.log[i].data_hora}\n\n`);
    }

    const response: responseInterface = {
      message: "Historico listado com sucesso",
      status: 200
    }
    return response;
  }
  

  createLog(log: logQrCodeProps): responseInterface {
    this.log.push(log);

    const response: responseInterface = {
      message: "Historico salvo com sucesso",
      status: 200
    }

    return response;
  }
}