function identity<type>(val: type): type{return val}

identity(1)  // if number then returns number if string then returns string


    interface Bottle {
  brand: string, type: number
}

function getBottle<T>({brand, type}: Bottle): Bottle {
  return {
    brand, type
  }
}


function getSearch<T>(products: T[]): T|undefined {
  return products[3]
}

// to turn into => function(pls use const i keep forgetting)
const getProducts=<T,>(products:T[]):T|undefined=>{
    return products[3]
}

// function AnotherFunction<T,U extends number>(val1:T,val2:U):object{
//     return {
//         val1,val2
//     }
// }

// AnotherFunction("4",3.14)


// how to use <T,U extends number>


interface Database{
  connection: string
  columns: number
  rows: number
  IsData: boolean
}

function CheckDatabase<T, U extends Database>(cal1: T, cal2: U): object {
  return {
    cal1, cal2
  }
}

CheckDatabase(3, {connection: 'Github', columns: 3, rows: 5, IsData: true})
