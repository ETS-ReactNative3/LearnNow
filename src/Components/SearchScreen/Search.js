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
import { UdemySearch, MoreUdemyRes } from "../../Util/CallUdemy";
import ListItem from "../List/Item/Item";
const Search = props => {
  const [searchTerm, setSearchTerm] = useState("");
  const [youtubeRes, setYoutubeRes] = useState([]);
  const [udemyRes, setUdemyRes] = useState([]);

  const [source, setSource] = useState("udemy");
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchInputHandler = val => {
    setSearchTerm(val);
  };

  const getResult = () => {
    switch (source) {
      case "udemy":
        setUdemyRes([]);
        if (searchTerm) {
          UdemySearch(searchTerm, price).then(res => setUdemyRes(res));
        } else {
          Alert.alert("Search Term", "Please enter a search term!", [
            { text: "Ok" }
          ]);
        }
        break;
      case "youtube":
        break;
      default:
        break;
    }
  };

  const getMoreResult = () => {
    if (loading === false) {
      setLoading(true);
      switch (source) {
        case "udemy":
          MoreUdemyRes(searchTerm, price, udemyRes.length / 15 + 1)
            .then(res => {
              setUdemyRes(prevState => {
                return [...prevState, ...res];
              });
            })
            .then(() => {
              setLoading(false);
            });
          break;
        case "youtube":
          break;
        default:
          break;
      }
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
          onPress={getResult}
        >
          <ButtonText>Search</ButtonText>
        </SearchButton>
      </SearchView>
      <OptionView width={Dimensions.get("window").width}>
        <Picker
          style={{ height: 50, flex: 1 }}
          selectedValue={source}
          onValueChange={(val, index) => setSource(val)}
        >
          <Picker.Item label="Udemy" value="udemy" />
          <Picker.Item label="YouTube" value="youtube" />
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
              <ListItem
                item={item}
                navigate={props.navigation.navigate}
                source={source}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            onEndReachedThreshold={0.025}
            onEndReached={getMoreResult}
          />
        ) : null}
      </View>
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#0494c4"
          style={{ marginTop: 10, marginBottom: 10 }}
        />
      ) : null}
    </Container>
  );
};

export default Search;
