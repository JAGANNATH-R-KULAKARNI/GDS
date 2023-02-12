const express = require("express");
const supabase = require("../supabase");

const cities = {
  Mysore: 1,
  Bangalore: 2,
  Kolkata: 3,
  Mumbai: 4,
  Chennai: 5,
  Delhi: 6,
  Noida: 7,
};

// const flights = {
//   1: [2],
//   2: [1, 3, 4, 5, 6],
//   3: [2, 4, 5, 6, 7],
//   4: [2, 3, 5, 6],
//   5: [2, 3, 4, 6],
//   6: [2, 3, 4, 5, 7],
//   7: [6, 3],
// };

const flights = {
  Indigo: {
    routes: [
      [1, 2],
      [2, 3],
      [2, 4],
      [3, 3],
      [3, 5],
    ],
    sPlane: 0,
  },
  "Air India": {
    routes: [
      [1, 2],
      [2, 3],
      [2, 4],
      [3, 3],
      [3, 5],
    ],
    sPlane: 1,
  },
  Vistara: {
    routes: [
      [1, 2],
      [2, 3],
      [2, 4],
      [3, 3],
      [3, 5],
    ],
    sPlane: 0,
  },
  "Air Asia": {
    routes: [
      [1, 2],
      [2, 3],
      [2, 4],
      [3, 3],
      [3, 5],
    ],
    sPlane: 0,
  },
};

module.exports = async (req, res) => {
  console.log("Flights API");
  console.log(req);
  const source = req.query.source;
  const destination = req.query.destination;

  console.log(source);
  console.log(destination);
  const planes = [];

  Object.keys(flights).map((brand) => {
    flights &&
      flights[brand].routes.map((item) => {
        if (item[0] == cities[source] && item[1] == cities[destination]) {
          planes.push({
            name: brand,
            sPlane: flights[brand].sPlane,
            specialPlane: flights[brand].sPlane ? "Yes" : "No",
          });
        }
      });
  });
  res.send({
    flights: planes,
  });
};
