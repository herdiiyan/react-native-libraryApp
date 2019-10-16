import React from "react";
import { StyleSheet, View, Platform, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import { AppLoading } from "expo";
import GeneralStatusBarColor from "./components/GeneralStatusBarColor";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import DrawerNavigator from "./navigation/DrawerNavigator";
import { styles } from "./style";
import { Root } from "native-base";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Provider store={store}>
        <Root>
          <View style={styles.container}>
            <GeneralStatusBarColor
              backgroundColor="#2c3e50"
              barStyle="light-content"
            />
            <DrawerNavigator />
          </View>
        </Root>
      </Provider>
    );
  }
}
