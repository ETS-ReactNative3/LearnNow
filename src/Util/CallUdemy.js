import axios from "axios";
import { Alert } from "react-native";

const clientId = "do6tRQVYNrytixmIvTJT8dx2t7gszt3G7j2IT3v0";
const clientSecret =
  "2D6cFPcS4DSgifQoNq492m3FYD5qYWHW1qnbIlJACTQ5jSgYMiXpo61ErBN2jhcShXcKJJhFoTjAaMJqpa2JLty14rcuCgKOqQRKMn0bNsmzR0HeWSZNByFjDPcexPzD";
const authHeader = {
  Accept: "application/json, text/plain, */*",
  Authorization: `Basic ${Base64.encode(`${clientId}:${clientSecret}`)}`,
  "Content-Type": "application/json;charset=utf-8"
};

export const UdemySearch = (term, price) => {
  return axios
    .get(
      `https://www.udemy.com/api-2.0/courses/?search=${term}&page_size=15&price=${price}`,
      {
        headers: authHeader
      }
    )
    .then(res => {
      return PrepareData(res.data);
    })
    .catch(err => {
      Alert.alert("Network Problem", "Oh no! Something is wrong!", [
        { text: "Try Again" }
      ]);
    });
};

export const MoreUdemyRes = (term, price, page) => {
  return axios
    .get(
      `https://www.udemy.com/api-2.0/courses/?search=${term}&page_size=15&page=${page}&price=${price}`,
      {
        headers: authHeader
      }
    )
    .then(res => {
      return PrepareData(res.data);
    })
    .catch(err => {
      Alert.alert("Network Problem", "Oh no! Something is wrong!", [
        { text: "Try Again" }
      ]);
    });
};

const PrepareData = data => {
  let result = [];
  data.results.map(course => {
    if (course._class === "course") {
      result.push(course);
    }
  });
  return result;
};
