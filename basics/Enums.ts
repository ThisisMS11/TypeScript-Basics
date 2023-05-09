// useful in case you want to have multiple restricted values 

// only 4 choices are there for a SeatType defined below

/*
enum SeatChoice {
    AISLE = "Mohit",
    MIDDLE = 10,
    WINDOW ,  --> 11
    FOURTH    --> 12 
}
*/
/*
enum SeatChoice {
    AISLE = "Mohit",
    MIDDLE = 10,
    WINDOW = "aman",
    FOURTH = "abcd"
}
*/

enum SeatChoice {
    AISLE = "Mohit",
    MIDDLE = 10,
    WINDOW = "aman",
    FOURTH = "abcd"
}

const hcSeat = SeatChoice.WINDOW;
console.log(hcSeat) // will print 0 (default value)



