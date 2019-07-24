import React, { useState } from "react";
import axios from "axios";
import { Base64 } from "js-base64";
import { Dimensions, FlatList } from "react-native";
import {
  Container,
  SearchView,
  SearchBox,
  SearchButton,
  ButtonText
} from "./SearchStyled";
import ListItem from "../List/Item/Item";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [youtubeRes, setYoutubeRes] = useState([]);
  const [udemyRes, setUdemyRes] = useState([]);
  const searchInputHandler = val => {
    setSearchTerm(val);
  };
  const searchButtonHandler = () => {
    getUdemyResult();
  };
  const getUdemyResult = () => {
    const clientId = "do6tRQVYNrytixmIvTJT8dx2t7gszt3G7j2IT3v0";
    const clientSecret =
      "2D6cFPcS4DSgifQoNq492m3FYD5qYWHW1qnbIlJACTQ5jSgYMiXpo61ErBN2jhcShXcKJJhFoTjAaMJqpa2JLty14rcuCgKOqQRKMn0bNsmzR0HeWSZNByFjDPcexPzD";
    const authHeader = {
      Accept: "application/json, text/plain, */*",
      Authorization: `Basic ${Base64.encode(`${clientId}:${clientSecret}`)}`,
      "Content-Type": "application/json;charset=utf-8"
    };
    axios
      .get(`https://www.udemy.com/api-2.0/courses/?search=${searchTerm}`, {
        headers: authHeader
      })
      .then(res => {
        setUdemyRes([]);
        res.data.results.map(course => {
          if (course._class === "course") {
            setUdemyRes(prevState => {
              return [...prevState, course];
            });
          }
        });
      });
  };
  return (
    <Container>
      <SearchView width={Dimensions.get("window").width}>
        <SearchBox
          placeholder="Enter keyword..."
          onChangeText={val => searchInputHandler(val)}
        />
        <SearchButton
          width={Dimensions.get("window").width}
          activeOpacity={0.75}
          onPress={searchButtonHandler}
        >
          <ButtonText>Search</ButtonText>
        </SearchButton>
      </SearchView>
      <FlatList
        data={udemyRes}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </Container>
  );
};

export default Search;
