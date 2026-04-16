const apiKey = "9HWNKAVMLXFTWKZ3T2P8G7J3F";
const url =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

const getData = async (city) => {
  try {
    const response = await fetch(`${url}${city}?key=${apiKey}`);
    if (response.status === 200) {
      const res = await response.json();
      const data = convertData(res);
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

const convertData = async (res) => {
  return {
    description: res.description,
    currentConditions: res.currentConditions.conditions,
    latitude: res.latitude,
    longitude: res.longitude,
  };
};

export default getData;
