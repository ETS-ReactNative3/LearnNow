import React from "react";
import { Dimensions } from "react-native";
import {
  Container,
  SearchView,
  SearchBox,
  SearchButton,
  ButtonText
} from "./SearchStyled";

const Search = () => {
  return (
    <Container>
      <SearchView width={Dimensions.get("window").width}>
        <SearchBox placeholder="Enter keyword..." />
        <SearchButton
          width={Dimensions.get("window").width}
          activeOpacity={0.75}
        >
          <ButtonText>Search</ButtonText>
        </SearchButton>
      </SearchView>
    </Container>
  );
};

export default Search;
