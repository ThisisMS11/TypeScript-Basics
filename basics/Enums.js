// useful in case you want to have multiple restricted values 
// only 4 choices are there for a SeatType defined below
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "Mohit";
    SeatChoice[SeatChoice["MIDDLE"] = 10] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 11] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 12] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.WINDOW;
console.log(hcSeat); // will print 0 (default value)
