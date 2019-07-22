import React from "react";
import { Container, Image, Title, Text } from "./InstructionStyled";

export const Search = () => {
  return (
    <Container>
      <Title>Built-in API</Title>
      <Image
        source={require("../../../../assets/placeholder.png")}
        resizeMode="contain"
      />
      <Text>
        With the Udemy API and YouTube API built-in, you can search for the
        topic of your choice!
      </Text>
    </Container>
  );
};

export const Filter = () => {
  return (
    <Container>
      <Title>Filtering</Title>
      <Image
        source={require("../../../../assets/placeholder.png")}
        resizeMode="contain"
      />
      <Text>
        Filter Udemy results or YouTube results.
        {"\n"}
        Sort Udemy results according to ratings.
      </Text>
    </Container>
  );
};
