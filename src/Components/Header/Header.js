import React from "react";
import { Container, Button, BtnText, BtnImage } from "./HeaderStyled";

const Header = props => {
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
};

export default Header;
