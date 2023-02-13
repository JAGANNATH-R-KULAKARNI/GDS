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

async function getFlightData() {
  const data = await supabase.from("flights").select("*");

  if (data) {
    //console.log(data.data);
    return data.data;
  } else {
    return [];
  }
}

module.exports = async (req, res) => {
  console.log("Flights API");

  const source = req.query.source;
  const destination = req.query.destination;

  const metaData = await getFlightData();
  console.log("META DATA");
  console.log(metaData);
  // console.log(source);
  // console.log(destination);
  const planes = [];

  metaData &&
    metaData.map((brand) => {
      // console.log(brand.routes);
      const tp = brand.routes;

      tp &&
        tp.map((item, index) => {
          if (
            index % 2 == 0 &&
            tp[index] == cities[source] &&
            tp[index + 1] == cities[destination]
          ) {
            planes.push({
              id: brand.id,
              flight_name: brand.flight_name,
              number_of_seats: brand.nos,
              prices: brand.prices,
              departure: brand.departure,
            });
          }
        });
    });

  res.send({
    flights: planes,
  });
};
