import React from "react";
import { Dimensions, TouchableWithoutFeedback } from "react-native";
import {
  Container,
  ItemImage,
  DescBottom,
  TopSection,
  BottomSection,
  Title,
  Instructor,
  PaidFree
} from "./ItemStyled";

const Item = ({ item, navigate }) => {
  const width = Dimensions.get("window").width;
  return (
    <TouchableWithoutFeedback onPress={() => navigate("DetailScreen", item)}>
      <Container width={width}>
        {item.image_480x270 ? (
          <ItemImage
            width={width}
            source={{ uri: `${item.image_480x270}` }}
            resizeMode="cover"
          />
        ) : null}
        <DescBottom width={width}>
          <TopSection>
            <Title>{item.title}</Title>
            <Instructor>{`By: ${
              item.visible_instructors[0].display_name
            }`}</Instructor>
          </TopSection>
          <BottomSection>
            <PaidFree>
              {item.is_paid ? `Paid - ${item.price}` : "Free"}
            </PaidFree>
          </BottomSection>
        </DescBottom>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Item;
