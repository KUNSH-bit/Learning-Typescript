// const AISLE = 0
// const MIDDLE = 1
// const WINDOW = 2
// if (seat === AISLE) {
//   console.log('You got an aisle seat')
// }
// instead here use enums
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW"; // by default 2 is assigned
})(SeatChoice || (SeatChoice = {}));
const myseat = SeatChoice.AISLE;
var AisleChoice;
(function (AisleChoice) {
    AisleChoice[AisleChoice["first_row"] = 11] = "first_row";
    AisleChoice[AisleChoice["second_row"] = 12] = "second_row";
    AisleChoice[AisleChoice["third_row"] = 13] = "third_row"; // 13 gets assigned automatically
})(AisleChoice || (AisleChoice = {}));
export {};
