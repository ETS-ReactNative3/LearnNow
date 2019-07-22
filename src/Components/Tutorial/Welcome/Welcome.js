import React from "react";
import { Container, Title, Image, Text } from "./WelcomeStyled";

const Welcome = () => {
  return (
    <Container>
      <Title>Welcome!</Title>
      <Image
        source={require("../../../../assets/placeholder.png")}
        resizeMode="contain"
      />
      <Text>
        <Text style={{ fontWeight: "900" }}>Learn Now</Text> is designed as an
        all-in-one resource to find online courses and materials.
      </Text>
    </Container>
  );
};

export default Welcome;
