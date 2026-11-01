const User = {
  name: 'Kunsh',
  age: 19,
  email: 'kunsh@example.com',
  isActive: true
}

function MakeUser(user: {
  name: string; age: number; email: string; isActive: boolean
}) {} let newUser = {
  name: 'Kunsh',
  age: 19,
  email: 'kunsh@example.com',
  isActive: true,
  isPaid: false
};
MakeUser(newUser)

function createCourse(): {name: string, price: number} {
  return {
    name: 'ReactJS', price: 399
  }
}

type User = {
  name: string; age: number; email: string; isActive: boolean;
}

function createUser(user: User) {}

createUser({
  name: 'Kunsh',
  age: 19,
  email: 'kunsh@example.com',
  isActive: true
})  // now cant just leave as createUser({}) and since it checks as user not as
    // object

type user = {
  readonly _id: string,
  name: string,
  age: number,
  email: string,
  creditcard?: number  // optional property
}

let myuser: user = {
  _id: '1234',
  name: 'Kunsh',
  age: 19,
  email: 'kunsh@example.com'
}

                   myuser.name = 'Not Kunsh';  // can change
// myuser._id = '4321';  cannot change since it is readonly

type cardNumber = {
  cardnumber: string
}

type cardDate = {
  carddate: string
}

type cardDetails = cardNumber&cardDate&{
  cvv: number
}



export {}