// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

//============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
//============================================================================

var friends = require("../data/friends")


module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // -------------------------------------------------------------------------

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        // friends.push(req.body);
        var bestMatch = 
        {
            name: "",
            photo: "",
            friendDifference: 100
        };

        var userData = req.body;
        var userScore = userData.score;
        var totalDifference = 0;

        for (i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
            totalDifference = 0;
            for (j = 0; j < currentFriend.score; j++) {
                var currentFriendScore = currentFriend.score[j];
                currentUserScore = userScore[j];
                totalDifference = totalDifference + Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            
            if (totalDifference <= bestMatch.friendDifference) {
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDifference = totalDifference;
                // bestMatch.friendDifference = currentFriend.friendDifference; ** this is what Michell helped me do
            }
        }
    }
        friends.push(userData);
        res.json(bestMatch);
    });
};