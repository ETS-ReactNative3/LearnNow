import React from "react";
import {
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet,
  Linking
} from "react-native";
import {
  Container,
  ItemImage,
  YoutubeLogo,
  DescBottom,
  TopSection,
  BottomSection,
  Title,
  NameDate
} from "./ItemStyled";

const Item = ({ item }) => {
  const width = Dimensions.get("window").width;
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Linking.openURL(`https://www.youtube.com/watch?v=${item.videoId}`);
      }}
    >
      <Container width={width} style={styles.shadow}>
        {item.image ? (
          <ItemImage
            width={width}
            source={{ uri: `${item.image.url}` }}
            resizeMode="cover"
          />
        ) : null}
        <YoutubeLogo
          source={require("../../../../assets/youtubeLogo.png")}
          resizeMode="contain"
        />
        <DescBottom width={width}>
          <TopSection>
            <Title>{item.title}</Title>
            <NameDate>Uploaded By: {item.channelTitle}</NameDate>
            <NameDate>Uploaded On: {item.date}</NameDate>
          </TopSection>
          <BottomSection />
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
