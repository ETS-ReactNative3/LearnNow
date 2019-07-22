import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Tutorial from "./src/Components/Tutorial/Tutorial";
import Home from "./src/Components/HomeScreen/Home";
import Search from "./src/Components/SearchScreen/Search";
import Tips from "./src/Components/Tips/Tips";
import HeaderRight from "./src/Components/Header/Header";

const App = createStackNavigator({
  Tutorial: {
    screen: Tutorial,
    navigationOptions: {
      header: null
    }
  },
  HomeScreen: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: "LearnNow",
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

const NavigateToScreen = (navigation, screen) => {
  navigation.navigate(screen, {
    number: 1
  });
};

export default createAppContainer(App);
