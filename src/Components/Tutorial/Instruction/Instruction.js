import React from "react";
import { Container, Image, Title, Text } from "./InstructionStyled";

export const Search = () => {
  return (
    <Container>
      <Title>Built-in API</Title>
      <Image
        source={require("../../../../assets/tutorial_2.png")}
        resizeMode="contain"
        borderRadius={10}
      />
      <Text>
        With the Udemy API and YouTube API built-in, you can search for the
        topic of your choice!
      </Text>
    </Container>
  );
};
