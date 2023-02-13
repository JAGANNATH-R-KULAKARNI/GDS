const express = require("express");
const supabase = require("../supabase");

module.exports = async (req, res) => {
  console.log("Bid User API");

  const flight = req.query.flight;
  const source = req.query.source;
  const destination = req.query.destination;

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
