
// basic types
let id: number
let company: string = "Ronny's comp"
let isPublished: boolean = true
let x: any = 'hello'


let ids: number[] = [1,2,3,4,5,6]
let arr: any[] = [1, true, 'string']

// Tuple
let person: [number, string, boolean] = [1, 'Ronny', true]
// Tuple array 
let employee: [number, string][] 

employee = [
  [1, 'ronny'],
  [2, 'jhon'], 
  [3, 'brad'],
]

// Union 
let pid: string | number

pid = 33 
pid = '33'

// Enum
enum Direction1 {
  up = 1, 
  down, 
  left, 
  right,
}

enum Direction2 {
  up = 'up', 
  down = 'down', 
  left = 'left', 
  right = 'right',
}

// Objects 
type User = {
  id: number,
  name: string
}

const user: User = {
  id: 23,
  name: 'ronny'
}


// Type Assertion 
let cid: any = 1 
// let customerID = <number>cid
let customerID = cid as number


// Function 
function addNum(x: number , y: number): number {
  return x+ y 
}

function log(message: string | number): void {
  console.log(message)
}

// Interface

interface UserInterface {
  readonly id: number,
  name: string
  age?: number
}

const user1: UserInterface = {
  id: 23,
  name: 'ronny'
}

interface mathFunc {
  (x: number, y: number): number
}


const add: mathFunc = (x: number, y: number): number => x + y
const sub: mathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
  id: number
  name: string
  register(): string
}

// Classes

class Person implements PersonInterface{
  // private id: number
  // protected id: number
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`
  }
}

const ronny = new Person(1, 'Ronny')
const lia = new Person(2, 'lia')

// Subclasses
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Rosy', 'dog')


// Generics 
function getArray<Type>(items: Type[]) :Type[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['ronny', 'lia', 'rosy'])



