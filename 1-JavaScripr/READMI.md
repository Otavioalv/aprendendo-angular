* Instalar NODE;
* Iniciar um arquivo


# **Oque e javascript**

* JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.

* No desenvolvimento web, é uma linguagem de programação de comportamento que permite a criação de conteúdos dinâmicos, controle de mídias e animações para deixar seu site mais interativo e interessante.

# **Programando em javaScript**
* A programação sera desenvolvida em arquivos simples

### **Declarando variaveis**
* Em javaScript, as variaves são declaradoas pelo tipo seguido do nome. Exp
```
    var nomeVariavel;
```

* Existem 3 metodos de declarar variaveis em JS. var, const e let.
    * var: Declara uma variavel de escopo global
    * let: Declara uma variavel de escolo de bloco
    * const: Declara uma constante de escopo de bloco

```
    var nome = "Pedro";
    cont idade = 19;
    let sexo = "M";
```

> [!NOTE]  
> O conceito de escopo sera entendido mais pra frente

### Arrays e Objetos
* Em JS uma array aceita qualquer valor.
```
const arr = ["banana", 1, true, null];
console.log(arr);
```
* Objeto 
```
const pessoaObj = {
    nome: "Pedro",
    idade: 29,
    sexo: "M",
}

console.log(pessoaObj);
```

* Converter objeto em array com Object.entries(objeto):
```
// Com objetos
const pessoaObj = {
    nome: "Pedro",
    idade: 29,
    sexo: "M"
}

// A função Object.entries transforma o objeto em array
const pessoaArr = Object.entries(pessoaObj);

console.log("OBJETO:> ", pessoaObj);
console.log("ARRAY:> ", pessoaArr);

```


### **if/else**
```
var num = 1;
if(num == 1) {
    num = 2;
}

if (num == 2) {
    console.log("e 2");
} else if (num == 1) {
    console.log("e 1");
} else { 
    console.log("Não e nenhum");
}
```

### **switch/case**
```
const fruta = "batata";

switch(fruta) {
    case "Tomate":
        console.log("E tomate");
        break;
    case "Alface":
        console.log("E Alface");
        break;
    case "batata":
    case "cerveja":
        console.log("E batata ou cerveja");
        break;
    case 2887:
        console.log("????");
        break;
    default: 
        console.log("Não e nenhuma das comparações");
    
}
```


### **Declarando funções**

### Função generica
* Declarando uma função padrão/generica
```
    function nomeFunção() {
        console.log("essa e minha função");
    }
```

* Usar a função
```
    nomeFunção();
```

### Função generica com parametros
* Declarando uma função padrão/generica
```
    function exibirPessoa(nome, idade, sexo) {
        console.log(`${nome} tem ${idade} anos, e é do sexo {sexo}`);
    }


    const nome = "Pedro";
    const year = 19;
    s = "M" 

    // Passar parametros
    exibirPessoa(nome, year, s);
```

### Função generica com parametros
* Declarando uma arrow function "() => {}"
```
    // pode ser uma variavel
    const nomeConstante = (nome, idade, sexo) => {
        console.log(`${nome} tem ${idade} anos, e é do sexo {sexo}`);
    }


    const nome = "Pedro";
    const year = 19;
    s = "M" 

    // Passar parametros
    nomeConstante(nome, year, s);
```


### **Laço de repetição**
### for
```
const num = 10;

for(var passo = 0; passo < num; passo++) {
    console.log(`Passo: ${passo}`);
}
```

### while
```
var num = 10;

while(num <= 10) {
    console.log(num)
    num ++;
}
```

### do while 
```
var num = 10;
do {
    console.log(num);
} while(num <= 10>)
```

### forEach 
* Percorre uma array 
```
// Com array
const arr = [1, 2, 3, 4, 5];

// Recebe uma função de callback
arr.forEach((val, index) => {
    console.log("posição: ", index, " valor: ", val);
});
```
> [!NOTE]  
> Callback e uma função que e passada como argumento para outra função


* val: valor percorrido;
* index: numero da posição atual percorrido

* ambos podem ter qualquer nome, porem a função callback recebe somente esses 2 parametros

* a função de callback pode ser passada diretamente quanto por uma variavel. 
```
const arr = [1, 2, 3, 4, 5];
const funcCallBack = function (val, index) { // ou uma arrow function () => {} 
    console.log("posição: ", index, " valor: ", val);
}
// Recebe uma função de callback
arr.forEach(funcCallBack);
```

### map 
* Percorre uma array e atribui um novo valor, igual o forEach, a diferença e que retorna uma nova array

```
const arr = [1, 2, 3, 4, 5];
const novaArr = arr.map(val => val + 1);
```

### Percorrer objetos
* Em JS, não existe uma função que percorra um objeto, porem, e possivel transformar o objeto em arary com a função Object.entries(objeto);

```
// Com objetos
const pessoaObj = {
    nome: "Pedro",
    idade: 29,
    sexo: "M"
}

const pessoaArr = Object.entries(pessoaObj);

pessoaArr.forEach(([key, val], index) => {
    console.log(`Pessoa ${index} >>  ${key}: ${val}`);
});
```


 
### Clases 
* Declarar uma classe

```
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
```

* Para usar uma classe, pode atribuir a uma variavel ou usar direto
```
// direto
new Pessoa("Pedro", 19, "M", 4.90).describePeople();

// variavel
const pessoa = new Pessoa("Pedro", 19, "M", 4.90);

pessoa.describePeople();
nome = pessoa.getNome();
```

* Usar funções da classe 
```
console.log("\n\n");
pessoa.describePeople();
nome = pessoa.getNome();
```