import React, { useState } from "react";
import { Keyboard } from "react-native";
import IOSPicker from "react-native-ios-picker";
import {
  Dimensions,
  FlatList,
  ActivityIndicator,
  View,
  Picker,
  Alert,
  Platform
} from "react-native";
import {
  Container,
  OptionView,
  SearchView,
  SearchBox,
  SearchButton,
  ButtonText,
  IOSPickerView,
  IOSPickerImg
} from "./SearchStyled";
import { UdemySearch, MoreUdemyRes } from "../../Util/CallUdemy";
import { YoutubeSearch, MoreYoutubeRes } from "../../Util/CallYoutube";
import UdemyItem from "../List/UdemyItem/Item";
import YoutubeItem from "../List/YoutubeItem/Item";

const platform = Platform.OS;

const Search = props => {
  const [searchTerm, setSearchTerm] = useState("");
  const [youtubeRes, setYoutubeRes] = useState([]);
  const [youtubeToken, setYoutubeToken] = useState("");
  const [udemyRes, setUdemyRes] = useState([]);
  const [source, setSource] = useState("udemy");
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchInputHandler = val => {
    setSearchTerm(val);
  };

  const iosPickerPrice = val => {
    switch (val) {
      case "All":
        setPrice(null);
        break;
      case "Paid":
        setPrice("price-paid");
        break;
      case "Free":
        setPrice("price-free");
        break;
      default:
        break;
    }
  };

  const getResult = () => {
    Keyboard.dismiss();
    if (searchTerm) {
      switch (source) {
        case "udemy":
          setUdemyRes([]);
          UdemySearch(searchTerm, price).then(res => setUdemyRes(res));
          break;
        case "youtube":
          setYoutubeRes([]);
          setYoutubeToken("");
          YoutubeSearch(searchTerm).then(res => {
            console.log(res);
            setYoutubeRes(res.result);
            setYoutubeToken(res.nextPageToken);
          });
          break;
        default:
          break;
      }
    } else {
      Alert.alert("Search Term", "Please enter a search term!", [
        { text: "Ok" }
      ]);
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
          MoreYoutubeRes(searchTerm, youtubeToken)
            .then(res => {
              console.log(res);
              setYoutubeRes(prevState => {
                return [...prevState, ...res.result];
              });
              setYoutubeToken(res.nextPageToken);
            })
            .then(() => {
              setLoading(false);
            });
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
        {platform === "ios" ? (
          <React.Fragment>
            <IOSPickerView width={Dimensions.get("window").width} right={true}>
              <IOSPicker
                mode="modal"
                data={["Udemy", "YouTube"]}
                selectedValue={"Udemy"}
                onValueChange={(val, i) => {
                  if (val === "YouTube") {
                    setPrice("price-free");
                  }
                  setSource(val.toLowerCase());
                }}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  width: Dimensions.get("window").width / 2
                }}
              />
              <IOSPickerImg
                source={require("../../../assets/down-arrow.png")}
              />
            </IOSPickerView>

            <IOSPickerView width={Dimensions.get("window").width}>
              {source === "youtube" ? null : (
                <React.Fragment>
                  <IOSPicker
                    mode="modal"
                    selectedValue={"All"}
                    data={["All", "Free", "Paid"]}
                    onValueChange={(val, i) => {
                      iosPickerPrice(val);
                    }}
                    style={{
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      width: Dimensions.get("window").width / 2
                    }}
                  />
                  <IOSPickerImg
                    source={require("../../../assets/down-arrow.png")}
                  />
                </React.Fragment>
              )}
            </IOSPickerView>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Picker
              style={{ height: 50, flex: 1 }}
              selectedValue={source}
              onValueChange={(val, index) => {
                setSource(val);
                if (val === "udemy") {
                  setPrice(null);
                } else if (val === "youtube") {
                  setPrice("price-free");
                }
              }}
            >
              <Picker.Item label="Udemy" value="udemy" />
              <Picker.Item label="YouTube" value="youtube" />
            </Picker>
            <Picker
              style={{ height: 50, flex: 1 }}
              selectedValue={price}
              onValueChange={(val, index) => setPrice(val)}
              enabled={source === "udemy" ? true : false}
            >
              <Picker.Item label="Paid" value="price-paid" />
              <Picker.Item label="Free" value="price-free" />
              <Picker.Item label="All" value={null} />
            </Picker>
          </React.Fragment>
        )}
      </OptionView>
      <View style={{ flex: 1 }}>
        {udemyRes.length !== 0 || udemyRes !== [] ? (
          <FlatList
            data={source === "udemy" ? udemyRes : youtubeRes}
            renderItem={({ item }) =>
              source === "udemy" ? (
                <UdemyItem item={item} navigate={props.navigation.navigate} />
              ) : (
                <YoutubeItem item={item} />
              )
            }
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
