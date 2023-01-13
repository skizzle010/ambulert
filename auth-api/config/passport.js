const GoogleStrategy = require('passport-google-oauth20').Strategy;
//const User = require('../models/User');

module.exports = (passport)=>{
    passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:4000/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, done){
    try{
            if (profile._json.hd === "vitstudent.ac.in") {
              console.log("hello");
              console.log(profile);
              console.log("recieved");
        let user = await User.findOne({googleID: profile.Id});
        if(user){
            return done(null,user);
        }else{
            const newUser = ({
                googleID: profile.id,
                username: profile.displayName,
                photo: profile.photos[0].value 
            });
            user = await User.create(newUser);
            return done(null,user);
        }
    }
    } catch(err){
        console.log(err);
    }
  }
));

    passport.serializeUser(function(user, done){
        done(null, user.id);
    });

    passport.deserializeUser(function(user, done){
        User.findById(id,function(err,user){
            done(null, user);
        });
    });
}
