const SpotifyWebApi = require("spotify-web-api-node");

//credentials
const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECERET
})