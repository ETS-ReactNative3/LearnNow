import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Video } from "expo-av";
import { IndicatorViewPager, PagerDotIndicator } from "rn-viewpager";
import { Container, NextButton, ButtonText } from "./TutorialStyled";
import Welcome from "./Welcome/Welcome";
import { Search } from "./Instruction/Instruction";

const Tutorial = props => {
  const [page, setPage] = useState(0);
  return (
    <Container>
      <Video
        source={require("../../../assets/Welcome.mp4")}
        rate={1.0}
        isMuted={true}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={styles.backgroundVideo}
      />
      <IndicatorViewPager
        style={{ flex: 1 }}
        indicator={_renderDotIndicator()}
        onPageSelected={pos => setPage(pos.position)}
      >
        <View>
          <Welcome />
        </View>
        <View>
          <Search />
        </View>
      </IndicatorViewPager>
      <View style={styles.indicatorLift} />
      <NextButton
        activeOpacity={0.7}
        pagePos={page}
        onPress={() => props.navigation.navigate("SearchScreen")}
      >
        <ButtonText pagePos={page}>Got it!</ButtonText>
      </NextButton>
    </Container>
  );
};

const _renderDotIndicator = () => {
  return <PagerDotIndicator pageCount={2} />;
};

const styles = StyleSheet.create({
  backgroundVideo: {
    height: Dimensions.get("window").height + 50,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "stretch"
  },
  indicatorLift: {
    height: 20,
    width: Dimensions.get("window").width
  }
});

export default Tutorial;
