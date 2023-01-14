const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
const firebase = require("./firebase");
const { getMessaging } = require("firebase-admin/messaging");

const prisma = new PrismaClient();

// Configure cors to allow all origins
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/test", async (req, res) => {
  const token = req.body.token;
  const tokenExists = await prisma.token.findUnique({
    where: {
      token: token,
    },
  });
  if (tokenExists) {
    console.log(tokenExists);
    res.json(tokenExists);
  } else {
    const newToken = await prisma.token.create({
      data: {
        token: token,
      },
    });
    console.log(tokenExists);
    res.json(newToken);
  }
});

app.post("/send", async (req, res) => {
  const tokens = await prisma.token.findMany();
  const name = req.body.name;
  const medicalEmergencyType = req.body.medicalEmergencyType;
  const location = req.body.location;
  const tokensArray = tokens.map((token) => token.token);

  const payload = {
    notification: {
      title: "Ambulance Requested",
      body: `${name} has requested an ambulance for ${medicalEmergencyType} at ${location}`,
    },
    tokens: tokensArray,
  };

  const response = await getMessaging().sendMulticast(payload);
  console.log(response.successCount + " messages were sent successfully");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
