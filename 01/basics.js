function addTwo(a, b) {
    return a + b;
    // return "Hello"; :number prevents this
}
function getUpper(str) {
    return str.toUpperCase();
}
function signUser(name, age, password) { }
let login = (name, age, password = true) => { };
addTwo(3, 5); // returns 8
getUpper('hello'); // returns 'HELLO'
signUser('Kunsh', 19, true);
login('Kunsh', 19);
// function getVal(myVal: number): boolean{
//     if(myVal > 5){
//         return true;
//     }
//     return "OK";
// }
const getHello = (s) => {
    return '';
};
const heros = ['thor', 'spiderman', 'ironman'];
// const heros = [1, 2, 3]
heros.map(heros => { return `hero is ${heros}`; });
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
export {};
