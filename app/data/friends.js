// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// ===============================================================================

var friendsArray = [
    {
        name: "Matt",
        email: "matt@email.com"
    }
];
// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;