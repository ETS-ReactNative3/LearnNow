import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import Tutorial from "./src/Components/Tutorial/Tutorial";
import Home from "./src/Components/HomeScreen/Home";
import Search from "./src/Components/SearchScreen/Search";
import Tips from "./src/Components/Tips/Tips";
import HeaderRight from "./src/Components/Header/Header";

const App = () => {
  return <AppContainer />;
};

const LearnNowApp = createStackNavigator({
  HomeScreen: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      headerTitle: (
        <View style={styles.HeaderView}>
          <Image
            styles={styles.HeaderImage}
            source={require("./assets/rocket.png")}
          />
          <Text style={styles.HeaderTitle}>LearnNow</Text>
        </View>
      ),
      headerLeft: null,
      headerRight: (
        <HeaderRight
          Home={true}
          navigate={screen => NavigateToScreen(navigation, screen)}
        />
      )
    })
  },
  SearchScreen: {
    screen: Search,
    navigationOptions: ({ navigation }) => ({
      title: "Search",
      headerRight: (
        <HeaderRight
          Filter={true}
          navigate={screen => NavigateToScreen(navigation, screen)}
        />
      )
    })
  },
  TipsScreen: {
    screen: Tips,
    navigationOptions: {
      title: "Tips"
    }
  }
});

const AppNavigator = createSwitchNavigator({
  Tutorial: Tutorial,
  LearnNowApp: LearnNowApp
});

const NavigateToScreen = (navigation, screen) => {
  navigation.navigate(screen);
};

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  HeaderView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15
  },
  HeaderImage: {
    width: 100,
    height: 100
  },
  HeaderTitle: {
    fontSize: 19,
    fontWeight: "700",
    marginLeft: 10
  }
});

export default App;
