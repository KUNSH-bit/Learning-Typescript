// class User {
//   public email: string;
//   name: string;
//   age: number;
//   private readonly city: string = '';  // u can use # instead as well
//   constructor(email: string, name: string, age: number) {
//     this.email = email;
//     this.name = name;
//     this.age = age;
//   }
// }
class User {
    constructor(email, name, age) {
        this.email = email;
        this.name = name;
        this.age = age;
        this._courseCount = 1; // can only be used by calsses using extends
    }
    get getApple() {
        return `apple${this.name}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('Course count should be more than 1');
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const kunsh = new User('k@example.com', 'Kunsh', 19);
export {};
// kunsh.city = 'New York'; // Error: Cannot assign to city
//# sourceMappingURL=index.js.map