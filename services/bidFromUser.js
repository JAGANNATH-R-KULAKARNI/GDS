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

module.exports = async (req, res) => {
  console.log("Bid User API");

  const email = req.query.email;
  const bid = req.query.bid;
  const flight = req.query.flight;
  const source = req.query.source;
  const destination = req.query.destination;
  console.log({
    email: email,
    bid: bid,
    flight: flight,
    source: source,
    destination: destination,
  });
  const resu = await supabase.from("users").insert([
    {
      email: email,
      bid: bid,
      flight: flight,
      source: source,
      destination: destination,
    },
  ]);

  if (resu) {
    console.log("RES");
    console.log(resu);
  }
  const userBids = await supabase
    .from("users")
    .select("*")
    .eq("flight", flight)
    .eq("source", source)
    .eq("destination", destination);

  if (userBids) {
    res.send({
      passangers: userBids.data,
    });
  } else {
    res.send({
      passangers: [],
      message: "Some error occured",
    });
  }
};
