import axios from "axios";
import NodeGeocoder from "node-geocoder";
export const findJioLocation = async (req, res) => {
  const { lat, long } = req.query;
  const geoCode = NodeGeocoder({
    provider: "openstreetmap",
  });

  const latitude = parseFloat(lat);
  const longitude = parseFloat(long);

  console.log(latitude, longitude);
  try {
    console.log("jiiii");
    const response = await geoCode.reverse({ lat: latitude, lon: longitude });
    if (response.length > 0) {
      const location = response[0].city;
      console.log(location);

      res.status(200).json(location);
    }
  } catch (error) {
    console.log(error);
  }
};
