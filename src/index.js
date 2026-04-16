import "./styles.css";
const apiKey = "9HWNKAVMLXFTWKZ3T2P8G7J3F";
const url =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

const getData = async (city) => {
  const location = url + city;
  const response = await fetch(location);

  try {
    if (response.status === 200) {
      const result = response.json();
      console.log(result);
    }
  } catch (err) {
    console.log(err);
  }
};

getData("Vancouver");
