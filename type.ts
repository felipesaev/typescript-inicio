// boolean( true or false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 0xff00

// array( type[])
let items: string[]
items = ['felipe','geise']

let values: Array<number>
values = [1,2,3]

// tuple

let title: [number, string]
title = [1, 'Felipe']

// enum
enum Colors {
  white = '#fff',
  black = '#000'
}

// Any

let coisa: any
coisa = ['string']

// void (vazio)

function logger(): void {
  console.log('food');
}

// null / underfined

type Bla = string | undefined

var variable: null
// ( nao faz sentido usar assim)

// never
function error(): never {
  throw new Error("error");
}

// objeto

let cart: object
cart = {}