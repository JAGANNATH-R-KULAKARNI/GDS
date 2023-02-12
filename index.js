const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(bodyParser.json());
app.use(cors());

const supabase = require("./supabase.js");

const getFlightsFor = require("./services/getSouDes.js");

async function getFlightData() {
  try {
    const response = await supabase.from("flights").select("*");

    if (response && response.data) {
      return response.data;
    }

    if (response && response.error) {
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

app.get("/jagannath", async (req, res) => {
  return res.send("Connected bro");
});

app.get("/getFlights", getFlightsFor);

// app.get("/flights", async (req, res) => {
//   const flights = await getFlightData();
//   console.log("Flights");
//   console.log(flights);

//   if (flights && flights.length > 0) {
//     return res.send({
//       flights: flights,
//     });
//   } else {
//     return res.send({
//       flights: [],
//     });
//   }
// });

app.listen(4001, () => {
  console.log("Listening on 4001");
});
