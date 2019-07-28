import React from "react";
import { Container, Title, Image, Text } from "./WelcomeStyled";

const Welcome = () => {
  return (
    <Container>
      <Title>Welcome!</Title>
      <Image
        source={require("../../../../assets/tutorial_1.png")}
        resizeMode="contain"
        borderRadius={10}
      />
      <Text>
        <Text style={{ fontWeight: "900" }}>Learn Now</Text> is designed as an
        resource to find online courses and materials.
      </Text>
    </Container>
  );
};

export default Welcome;
