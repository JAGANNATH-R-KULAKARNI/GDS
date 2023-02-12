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

const flights = {
  1: [2],
  2: [1, 3, 4, 5, 6],
  3: [2, 4, 5, 6, 7],
  4: [2, 3, 5, 6],
  5: [2, 3, 4, 6],
  6: [2, 3, 4, 5, 7],
  7: [6, 3],
};

module.exports = async (req, res) => {
  console.log("Sources and their Destinations API");

  res.send({
    sources: cities,
    destinations: flights,
  });
};
