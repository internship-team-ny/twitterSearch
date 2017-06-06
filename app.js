var Twitter = require('twitter');
require('dotenv').config();

var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});


var searchParams = {
    q: "#manutd",
    result_type: "popular",
    count: "100",
    lang: "en"
};
client.get('search/tweets', searchParams, function(error, tweets) {
    if (!error) {
        for(var i=0; i < tweets.statuses.length; i++){
            console.log(tweets.statuses[i].text + " -- @" + tweets.statuses[i].user.screen_name +
                " -- " + tweets.statuses[i].retweet_count + "RTs");
        }
    }

});

// const param = {
//     status: "Cavs in 4"
// };
// client.post('statuses/update', param, function(error, tweet, response){
//     if(error) throw error;
//     console.log(tweet);  // Tweet body.
//     console.log(response);  // Raw response object.
//     });
//