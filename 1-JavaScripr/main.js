class Pessoa {
    
    constructor(nome, idade, sexo, altura){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.sexo = sexo;
    }


    describePeople() {
        console.log("Nome: ", this.nome);
        console.log("Idade: ", this.idade);
        console.log("Altura: ", this.altura);
        console.log("Sexo: ", this.sexo);
    }

    getNome() {
        return this.nome
    }
}

new Pessoa("Pedro", 19, "M", 4.90).describePeople();

console.log("\n\n");
const pessoa = new Pessoa("Pedro", 19, "M", 4.90);
pessoa.describePeople();
nome = pessoa.getNome();