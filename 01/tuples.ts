// const user:(string|number)[] = ['Kunsh', 3'];
let tuser: [string, number, boolean];  // better way to do above code
tuser = ['Kunsh', 3, true];

let rgb: [number, number, number] = [255, 255, 255];

type User = [string, number];

const NewUser: User = ['Kunsh', 3];  // tupple is basically an array
NewUser[1] = 4;                      // allowed

NewUser.push(5);  // allowed weirdly



export {}