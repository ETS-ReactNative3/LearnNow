import React, { useState } from "react";
import axios from "axios";
import { Base64 } from "js-base64";
import {
  Dimensions,
  FlatList,
  ActivityIndicator,
  View,
  Picker,
  Alert
} from "react-native";
import {
  Container,
  OptionView,
  SearchView,
  SearchBox,
  SearchButton,
  ButtonText
} from "./SearchStyled";
import ListItem from "../List/Item/Item";

const Search = props => {
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

  const [source, setSource] = useState("all");
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchInputHandler = val => {
    setSearchTerm(val);
  };
  const searchButtonHandler = () => {
    switch (source) {
      case "udemy":
        getUdemyResult();
        break;
      case "youtube":
        break;
      case "all":
        getUdemyResult();
        break;
    }
  };
  const getUdemyResult = () => {
    setUdemyRes([]);
    axios
      .get(
        `https://www.udemy.com/api-2.0/courses/?search=${searchTerm}&page_size=15&price=${price}`,
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
      .catch(err => {
        Alert.alert("Network Problem", "Oh no! Something is wrong!", [
          { text: "Try Again" }
        ]);
      });
  };

  const getMoreUdemyResult = () => {
    if (loading === false) {
      setLoading(true);
      axios
        .get(
          `https://www.udemy.com/api-2.0/courses/?search=${searchTerm}&page_size=15&page=${udemyRes.length /
            15}&price=${price}`,
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

  const sourcePicker = val => {
    setSource(val);
    switch (source) {
      case "udemy":
        break;
      case "youtube":
        break;
      case "all":
        break;
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
      <OptionView width={Dimensions.get("window").width}>
        <Picker
          style={{ height: 50, flex: 1 }}
          selectedValue={source}
          onValueChange={(val, index) => sourcePicker(source)}
        >
          <Picker.Item label="Udemy" value="udemy" />
          <Picker.Item label="YouTube" value="youtube" />
          <Picker.Item label="All" value="all" />
        </Picker>
        <Picker
          style={{ height: 50, flex: 1 }}
          selectedValue={price}
          onValueChange={(val, index) => setPrice(val)}
        >
          <Picker.Item label="Paid" value="price-paid" />
          <Picker.Item label="Free" value="price-free" />
          <Picker.Item label="All" value={null} />
        </Picker>
      </OptionView>
      <View style={{ flex: 1 }}>
        {udemyRes.length !== 0 || udemyRes !== [] ? (
          <FlatList
            data={udemyRes}
            renderItem={({ item }) => (
              <ListItem item={item} navigate={props.navigation.navigate} />
            )}
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
