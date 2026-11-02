let score = 33;
let kunsh = {
    name: 'Kunsh',
    id: 1
};
kunsh = {
    username: 'Kunsh',
    id: 1
};
function getDbId(id) {
    console.log(`DB id is: ${id}`);
}
getDbId(3);
getDbId('3');
// function getDbID(id: number|string) {
//     id.toLowerCase(); // Error: Object is possibly 'number'.
// }
function getDbID(id) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
}
// Array
const data = [1, 2, 3];
const data2 = ['1', '2', '3'];
const data3 = [1, '2', 3];
export {};
