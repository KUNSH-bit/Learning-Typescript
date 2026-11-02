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
  protected _courseCount = 1;  // can only be used by calsses using extends

  constructor(public email: string, public name: string, public age: number) {}

  get getApple(): string {
    return `apple${this.name}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error('Course count should be more than 1');
    }
    this._courseCount = courseNum;
  }
}


class SubUser extends
    User {  // attains all propeties in that class except private
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}


const kunsh = new User('k@example.com', 'Kunsh', 19);
// kunsh.city = 'New York'; // Error: Cannot assign to city
