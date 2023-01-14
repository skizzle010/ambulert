const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const GOOGLE_CLIENT_ID =
  "31409138780-pjjplruvae0rog9g17f9jel88qq17vf8.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/google/callback",
      passReqToCallback: true,
    },
    async (request, accessToken, refreshToken, profile, done) => {
      try {
        // Use Prisma to check if the user already exists in the database
        console.log(profile);
        const user = await prisma.user.findUnique({
          where: { email:  profile.emails[0].value },
        });

        if (user) {
          return done(null, user);
        } else {
          // Use Prisma to create a new user if they do not already exist
          const newUser = await prisma.user.create({
            data: {
              email: profile.emails[0].value,
              name: profile.displayName,
              emergency: "critical",
              regno: "1234567890"
            },
          });
          return done(null, newUser);
        }
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
