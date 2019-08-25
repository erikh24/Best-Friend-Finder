// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// ===============================================================================

var friendsArray = [
    {
        name: "Matt",
        photo: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201902/mathew-647x363.jpeg?y4xx38FI1hlGQyVediKzI8RuEzlsEHEc",
        score: [3, 4, 4, 2, 3, 2, 1, 2, 5, 1]
    },
    {
        name: "Tom",
        photo: "https://imgix.bustle.com/uploads/getty/2018/3/1/01ad0a4d-b6be-4c1f-a43a-ee87b19c5321-getty-802956430.jpg",
        score: [5, 4, 1, 2, 3, 5, 4, 2, 3, 2]
    },
    {
        name: "Scarlett",
        photo: "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzkxOTI1MjYy/scarlett-johansson-13671719-1-402.jpg",
        score: [2, 2, 3, 1, 4, 2, 3, 1, 5, 1]
    },
    {
        name: "Emma",
        photo: "https://www.stylist.co.uk/images/app/uploads/2019/08/16081538/emma-watson-instagram-1680x1120.jpg?w=1200&h=1&fit=max&auto=format%2Ccompress",
        score: [1, 2, 3, 4, 2, 4, 1, 5, 3, 3]
    },
    {
        name: "Will",
        photo: "https://metro.co.uk/wp-content/uploads/2018/02/sei_746576-e1519762449961.jpg?quality=90&strip=all",
        score: [2, 2, 3, 1, 2, 4, 4, 3, 1, 1]
    }
];
// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;