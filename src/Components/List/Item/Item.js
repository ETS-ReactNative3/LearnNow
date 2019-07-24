import React from "react";
import { Dimensions } from "react-native";
import {
  Container,
  ItemImage,
  RightSection,
  TopSection,
  BottomSection,
  Title,
  Instructor,
  PaidFree
} from "./ItemStyled";

const Item = ({ item }) => {
  return (
    <Container width={Dimensions.get("window").width}>
      {item.image_125_H ? (
        <ItemImage source={{ uri: `${item.image_125_H}` }} resizeMode="cover" />
      ) : null}
      <RightSection>
        <TopSection>
          <Title numberOfLines={1}>{item.title}</Title>
          <Instructor>{item.visible_instructors[0].display_name}</Instructor>
        </TopSection>
        <BottomSection>
          <PaidFree>{item.is_paid ? "Paid" : "Free"}</PaidFree>
        </BottomSection>
      </RightSection>
    </Container>
  );
};

export default Item;
