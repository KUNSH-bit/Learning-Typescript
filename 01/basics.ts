function addTwo(a: number, b: number): number {
  return a + b;
  // return "Hello"; :number prevents this
}

function getUpper(str: string) {
  return str.toUpperCase();
}

function signUser(name: string, age: number, password: boolean) {}

let login = (name: string, age: number, password: boolean = true) => {}

addTwo(3, 5);       // returns 8
getUpper('hello');  // returns 'HELLO'
signUser('Kunsh', 19, true)
login('Kunsh', 19)

// function getVal(myVal: number): boolean{
//     if(myVal > 5){
//         return true;
//     }
//     return "OK";
// }

const getHello = (s: string):
    string => {
      return ''
    }

const heros = ['thor', 'spiderman', 'ironman']
// const heros = [1, 2, 3]

heros.map(heros => {return `hero is ${heros}`})

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}



export {}