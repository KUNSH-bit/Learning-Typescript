let user = {
  name: 'Kunsh',
  age: 19,
}

           console.log(user);


// variables

let greetings: string = 'Hello World';
console.log(greetings);

let userID = 10;  // not nessary to define the type of variable

let isLoggedIn: boolean = true;  // good practice sometimes tho

// any (why not use)

let hero: string;  // use :string in this case

function getHero() {
  return 'thor';
}
hero = getHero();


export {}