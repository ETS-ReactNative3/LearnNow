import React from "react";
import { Container, Button, BtnText } from "./HeaderStyled";

const Header = props => {
  return (
    <Container>
      <Button onPress={() => props.navigate("TipsScreen")}>
        <BtnText>Tips</BtnText>
      </Button>
    </Container>
  );
};

export default Header;
