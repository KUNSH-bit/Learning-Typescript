let score: number|string = 33;
// score = 44;
// score = '55';

type User = {
  name: string; id: number;
}

type Admin = {
  username: string; id: number;
}


let kunsh: User|Admin = {
  name: 'Kunsh',
  id: 1
};

kunsh = {
  username: 'Kunsh',
  id: 1
};

function getDbId(id: number|string) {
  console.log(`DB id is: ${id}`);
}

getDbId(3);
getDbId('3');

// function getDbID(id: number|string) {
//     id.toLowerCase(); // Error: Object is possibly 'number'.
// }

function getDbID(id: number|string) {
  if (typeof id === 'string') {
    id.toLowerCase();
  }
}

// Array

const data: number[] = [1, 2, 3];
const data2: string[] = ['1', '2', '3'];
const data3: (string|number)[] = [1, '2', 3];


export {}