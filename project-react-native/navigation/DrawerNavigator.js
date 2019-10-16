import React from "react";
import { Dimensions } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/home/HomeScreen";
import BookScreen from "../screens/book/BookScreen";
import StudentScreen from "../screens/student/StudentScreen";
import BookDetail from "../screens/bookDetail/index";
import BookPost from "../screens/bookPost/index"
import MenuDrawer from "../components/MenuDrawer";

const WIDTH = Dimensions.get("window").width;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.83,
  contentComponent: ({ navigation }) => {
    return <MenuDrawer navigation={navigation} />;
  }
};

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Book: {
      screen: BookScreen
    },
    Student: {
      screen: StudentScreen
    }
  },
  DrawerConfig
);

const Navigator = createStackNavigator(
  {
    DrawerNavigator,
    Book: {
      screen: BookScreen
    },
    BookDetail: {
      screen: BookDetail
    },
    BookPost: {
      screen: BookPost
    }
  },
  {
    initialRouteName: "DrawerNavigator",
    headerMode: "none"
  }
);
export default createAppContainer(Navigator);
