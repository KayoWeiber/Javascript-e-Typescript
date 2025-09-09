let nome:string = "João"
let idade:number = 27
let adulto:boolean = true
let simbolo: symbol = Symbol("qualquer")

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3]
let arrayDeStrings: string[] = ["a", "b", "c"]
let arrayDeBooleanos: Array<boolean> = [true, false, true]

// Objetos
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
    nome: "João",
    idade: 27,
    adulto: true
}

// Funções
function soma(x: number, y: number): number {
    return x + y
}
const soma2: (x: number, y: number) => number = (x , y)  => x + y
