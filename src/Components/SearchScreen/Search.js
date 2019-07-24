import React, { useState } from "react";
import axios from "axios";
import { Base64 } from "js-base64";
import { Dimensions, FlatList, ActivityIndicator, View } from "react-native";
import {
  Container,
  SearchView,
  SearchBox,
  SearchButton,
  ButtonText
} from "./SearchStyled";
import ListItem from "../List/Item/Item";

const Search = () => {
  const clientId = "do6tRQVYNrytixmIvTJT8dx2t7gszt3G7j2IT3v0";
  const clientSecret =
    "2D6cFPcS4DSgifQoNq492m3FYD5qYWHW1qnbIlJACTQ5jSgYMiXpo61ErBN2jhcShXcKJJhFoTjAaMJqpa2JLty14rcuCgKOqQRKMn0bNsmzR0HeWSZNByFjDPcexPzD";
  const authHeader = {
    Accept: "application/json, text/plain, */*",
    Authorization: `Basic ${Base64.encode(`${clientId}:${clientSecret}`)}`,
    "Content-Type": "application/json;charset=utf-8"
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [youtubeRes, setYoutubeRes] = useState([]);
  const [udemyRes, setUdemyRes] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchInputHandler = val => {
    setSearchTerm(val);
  };
  const searchButtonHandler = () => {
    getUdemyResult();
  };
  const getUdemyResult = () => {
    axios
      .get(
        `https://www.udemy.com/api-2.0/courses/?search=${searchTerm}&page_size=15`,
        {
          headers: authHeader
        }
      )
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

  const getMoreUdemyResult = () => {
    if (loading === false) {
      setLoading(true);
      axios
        .get(
          `https://www.udemy.com/api-2.0/courses/?search=${searchTerm}&page_size=15&page=${udemyRes.length /
            15}`,
          {
            headers: authHeader
          }
        )
        .then(res => {
          res.data.results.map(course => {
            if (course._class === "course") {
              setUdemyRes(prevState => {
                return [...prevState, course];
              });
            }
          });
        })
        .then(() => {
          setLoading(false);
        });
    }
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
      <View style={{ flex: 1 }}>
        {udemyRes.length !== 0 || udemyRes !== [] ? (
          <FlatList
            data={udemyRes}
            renderItem={({ item }) => <ListItem item={item} />}
            keyExtractor={(item, index) => index.toString()}
            onEndReachedThreshold={0.025}
            onEndReached={getMoreUdemyResult}
          />
        ) : null}
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#0494c4"
            style={{ marginTop: 10, marginBottom: 10 }}
          />
        ) : null}
      </View>
    </Container>
  );
};

export default Search;
