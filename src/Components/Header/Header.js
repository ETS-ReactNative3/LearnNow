import React from "react";
import { Container, Button, BtnText, BtnImage } from "./HeaderStyled";

const Header = props => {
  if (props.Home) {
    return (
      <Container>
        <Button onPress={() => props.navigate("SearchScreen")}>
          <BtnImage source={require("../../../assets/search.png")} />
        </Button>
        <Button onPress={() => props.navigate("TipsScreen")}>
          <BtnText>Tips</BtnText>
        </Button>
      </Container>
    );
  } else if (props.Filter) {
    return (
      <Container>
        <Button>
          <BtnImage source={require("../../../assets/filter.png")} />
        </Button>
      </Container>
    );
  } else if (props.Search) {
  }
};

export default Header;
