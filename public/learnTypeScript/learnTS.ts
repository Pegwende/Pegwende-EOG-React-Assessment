import { useHarmonicIntervalFn } from "react-use"

let id: number = 5
let company: string = 'traversy Media'
let isPublised: boolean = true
let x: any = 'Hello'
let age: number


let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1,true, 'hello']

//Tuple
let person: [number, string, boolean] = [1,'Peter', true]
//Tuple array
let employer: [number, string][]

employer = [
    [1, 'Brad'],
    [4, 'Peter']
]

// Union 
let pid: string | number 
pid = 22
pid = '22'

//Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right,
}

console.log(Direction1.Up)
console.log(Direction1.Down)
console.log(Direction1.Left)
console.log(Direction1.Right)


enum Direction2 {
    Up = 'Up',
    Down = "Down",
    Left = "Left",
    Right =  'Right',
}

console.log(Direction2.Up)
console.log(Direction2.Down)
console.log(Direction2.Left)
console.log(Direction2.Right)


//Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'Peter'
}

// Type Assertion
let cid: any = 1
// let customerId = <number> cid
let customerId = cid as number


// Functions
function addNumb(x: number, y:number): number {
    return x+y
}

// Void
function log(message: string | number): void {
    console.log(message)
}

//Interfaces
interface UserInterface {
   readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'Peter'
}

// user1.id = 5
// type Point = number | string 
// const p1: Point = 1

interface MathFunc {
    (x: number, y: number): number
}
const add: MathFunc = (x: number, y: number): number => x+y
const sub: MathFunc = (x: number, y: number): number => x-y

// Classes

interface PersonInterface {
    id: number
    name: string
    register(): string
}

class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this. name = name
    }

    register(){
        return `${this.name} is now register`
    }
}

const brad = new Person(1, 'Brad Traversy')
const mike = new Person(2, 'Mike Jordan')

console.log(brad.register(), mike)


//Subclasses
class Employee extends Person {
    position: string


    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp1 = new Employee(5, 'Peter', 'Software Engineer')
console.log(emp1.position)

//Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numbArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['brad', 'john', 'Jill'])

numbArray.push(2)
