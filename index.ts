// 1. Variável que aceita string ou número
let conteudo: string | number;
conteudo = "Iniciando com uma string";
console.log(`Conteúdo inicial: ${conteudo}`);

conteudo = 100;
console.log(`Conteúdo atualizado para número: ${conteudo}`);

// 2. Função que calcula a soma de dois números.
function calcularSoma(x: number, y: number): number {
  return x + y;
}
console.log(`Resultado da soma entre 15 e 25: ${calcularSoma(15, 25)}`);

// 3. Interface para representar um usuário com propriedades diferentes.
interface Usuario {
  primeiroNome: string;
  idade: number;
}

const usuario: Usuario = { primeiroNome: "Carlos", idade: 28 };
console.log(`Usuário: ${usuario.primeiroNome}, com idade de: ${usuario.idade} anos.`);

// 4. Classes para representar Animais e o som que emitem.
class AnimalBase {
  emitirSom(): void {
    console.log("Algum animal está emitindo som.");
  }
}

class Gato extends AnimalBase {
  emitirSom(): void {
    console.log("Miau Miau");
  }
}

const meuGato = new Gato();
meuGato.emitirSom(); // Exemplo de uso

// 5. Função que retorna o menor valor de um array para mudar a lógica.
function menorValor(numeros: number[]): number {
  return Math.min(...numeros);
}
console.log(`Menor valor do array [10, 20, 30, 5]: ${menorValor([10, 20, 30, 5])}`);

// 6. Enum para definir tipos de fruta, alterando o contexto.
enum Fruta {
  Manga = "Manga",
  Uva = "Uva",
  Laranja = "Laranja",
}

let minhaFrutaFavorita: Fruta = Fruta.Laranja;
console.log(`Minha fruta favorita é: ${minhaFrutaFavorita}`);

// 7. Função que processa strings e números de forma diferenciada.
function avaliar(valor: string | number): string {
  if (typeof valor === "string") {
    return `O texto fornecido tem ${valor.length} caracteres.`;
  } else {
    return `O dobro do número fornecido é ${valor * 2}.`;
  }
}

console.log(avaliar("Teste de string")); // Tamanho da string
console.log(avaliar(35)); // Dobro do valor numérico
