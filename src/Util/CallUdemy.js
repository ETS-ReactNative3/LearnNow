import axios from "axios";
import { CLIENT_ID, CLIENT_SECRET } from "react-native-dotenv";
import { Alert } from "react-native";

const authHeader = {
  Accept: "application/json, text/plain, */*",
  Authorization: `Basic ${Base64.encode(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
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
