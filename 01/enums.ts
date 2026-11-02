// const AISLE = 0
// const MIDDLE = 1
// const WINDOW = 2

// if (seat === AISLE) {
//   console.log('You got an aisle seat')
// }
// instead here use enums

enum SeatChoice {
  AISLE,   // by default 0 is assigned
  MIDDLE,  // by default 1 is assigned
  WINDOW   // by default 2 is assigned
}

const myseat = SeatChoice.AISLE

               enum AisleChoice {
                 first_row = 11,  // now 11 is assigned
                 second_row,      // 12 gets assigned automatically
                 third_row        // 13 gets assigned automatically
               }

const enum WindowChoice {
  // using const enum is better for performance and understanding js code
  first_row = 'first_row',    // now "first_row" is assigned
  second_row = 'second_row',  // "second_row" doesnt get assigned automatically
  third_row = 'third_row'     // "third_row" doesnt get assigned automatically
}



export {}