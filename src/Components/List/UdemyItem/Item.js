import React from "react";
import { Dimensions, TouchableWithoutFeedback, StyleSheet } from "react-native";
import {
  Container,
  ItemImage,
  UdemyLogo,
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
    <TouchableWithoutFeedback
      onPress={() => navigate("UdemyDetailScreen", item)}
    >
      <Container width={width} style={styles.shadow}>
        {item.image_480x270 ? (
          <ItemImage
            width={width}
            source={{ uri: `${item.image_480x270}` }}
            resizeMode="cover"
          />
        ) : null}
        <UdemyLogo source={require("../../../../assets/udemyLogo.png")} />
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

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 1,
    shadowRadius: 8,

    elevation: 8
  }
});

export default Item;
