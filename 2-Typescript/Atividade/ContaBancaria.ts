// * Implemente uma classe chamada “ContaBancária” que possua atributos para armazenar 
// o número da conta, nome do titular e saldo. Adicione métodos para realizar depósitos e saques.


export interface contaBancariaProps {
    numeroConta: number;
    nomeTitular: string;
    saldo: number;
}

export interface responseProps {
    message: string;
    status: number;
}


export class ContaBancária {
    private conta: contaBancariaProps;

    constructor(conta: contaBancariaProps) {
        this.conta = conta;
    }

    deposito(val: number): responseProps {
        this.conta.saldo += val;
        
        const response: responseProps = {
            message: "Dinheiro adicionado a sua conta",
            status: 201
        }

        return response;
    }

    saque(val: number) {
        this.conta.saldo -= val;

        const response: responseProps = {
            message: "Saque realizado com sucesso",
            status: 200
        }

        return response;
    }

    
}

