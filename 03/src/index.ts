class User {
  email: string;
  name: string;
  age: number;
  readonly city: string = '';
  constructor(email: string, name: string, age: number) {
    this.email = email;
    this.name = name;
    this.age = age;
  }
}

const kunsh = new User('k@example.com', 'Kunsh', 19);
// kunsh.city = 'New York'; // Error: Cannot assign to city
