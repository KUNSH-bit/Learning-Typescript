function identity(val) { return val; }
identity(1); // if number then returns number if string then returns string
function getBottle({ brand, type }) {
    return {
        brand, type
    };
}
function getSearch(products) {
    return products[3];
}
// to turn into => function(pls use const i keep forgetting)
const getProducts = (products) => {
    return products[3];
};
function CheckDatabase(cal1, cal2) {
    return {
        cal1, cal2
    };
}
CheckDatabase(3, { connection: 'Github', columns: 3, rows: 5, IsData: true });
export {};
//# sourceMappingURL=Generics.js.map