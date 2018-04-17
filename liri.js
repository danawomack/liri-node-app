require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var request = require("request");


var request = process.argv[2];
var songName = process.argv[3];




//my-tweets function should grab my last 20 tweets

 function mytweets() {
    
    var client = new Twitter(keys.twitter);

    var params = {screen_name: 'danawo_mack',
                  count: 20  
                    };
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
  else {
      console.log(response);
  }
});
}
	
//spotify-this-song function

var spotifyThisSong = function(songName) {

    
    
    if (songName === undefined) {
      songName = 'The Sign';
    };
  
    spotify.search({ type: 'track', query: songName }, function(err, data) {
      if (err) {
        console.log('Error occurred: ' + err);
        return;
      }
  
      var songs = data.tracks.items;
      var data = []; //empty array to hold data
  
      for (var i = 0; i < songs.length; i++) {
        data.push({
          'artist(s)': songs[i].artists.map(getArtistNames),
          'song name: ': songs[i].name,
          'preview song: ': songs[i].preview_url,
          'album: ': songs[i].album.name,
        });
      }
      console.log(data);
     
    });
  };




/// calling functions///////////////////////
if(request === "my-tweets") {
    myTweets();
    
    }

if(request === 'spotify-this-song')    {
spotifyThisSong();
}