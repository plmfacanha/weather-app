const apiKey = "9HWNKAVMLXFTWKZ3T2P8G7J3F";
const url =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

const getData = async (city) => {
  try {
    const response = await fetch(`${url}${city}?key=${apiKey}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data from the server!");
    }

    const data = await response.json();
    return convertData(data);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const convertData = async (res) => {
  return {
    city: res.resolvedAddress,
    temp: res.currentConditions.temp,
    description: res.description,
    currentConditions: res.currentConditions.conditions,
    latitude: res.latitude,
    longitude: res.longitude,
  };
};

export default getData;
