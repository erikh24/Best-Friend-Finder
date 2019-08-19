// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// ===============================================================================

var friendsArray = [
    {
        name: "Matt",
        email: "matt@email.com",
        score: [3, 4, 4, 2, 3, 2, 1, 2, 5, 1]
    },
    {
        name: "Christian",
        email: "christian@email.com",
        score: [5, 4, 1, 2, 3, 5, 4, 2, 3, 2]
    }
];
// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;