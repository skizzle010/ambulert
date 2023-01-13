const { initializeApp, applicationDefault } = require("firebase-admin/app");

const firebase = initializeApp({
  credential: applicationDefault(),
});
