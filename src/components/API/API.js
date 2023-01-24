import axios from "axios";

export const weatherRequest = (location, setData) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1e42312d042b4f31c20395c13a3ca786`;

  axios.get(url).then((response) => {
    setData(response.data);
  });
};
