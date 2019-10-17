import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");
import MenuButton from "../../components/MenuButton";
import argonTheme from "../../constants/Theme";
import Images from "../../constants/Images";

export default class HomeScreen extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <Block flex center>
        <ImageBackground
            source={Images.Onboarding}
            style={{ height, width, zIndex: 1 }}
          />
        </Block>
        <MenuButton navigation={this.props.navigation} />
        <Block center>
          <Image source={Images.LogoOnboarding} style={styles.logo} />
        </Block>
        <Block flex space="between" style={styles.padded}>
            <Block flex space="around" style={{ zIndex: 2 }}>
              <Block style={styles.title}>
                <Block>
                  <Text color="white" size={60}>
                    Welcome
                  </Text>
                </Block>
                <Block>
                  <Text color="white" size={60}>
                    MyApp
                  </Text>
                </Block>
                <Block style={styles.subTitle}>
                  <Text color="white" size={16}>
                    Library App React Native components.
                  </Text>
                </Block>
              </Block>
              <Block center>
                <Button
                  style={styles.button}
                  color={argonTheme.COLORS.SECONDARY}
                  onPress={() => this.props.navigation.navigate("Book")}
                  textStyle={{ color: argonTheme.COLORS.BLACK }}
                >
                  Get Started Choose Book
                </Button>
              </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    borderRadius: 200
  },
  logo: {
    width: 255,
    height: 85,
    zIndex: 2,
    position: 'relative',
    marginTop: '-50%'
  },
  title: {
    marginTop:'-5%'
  },
  subTitle: {
    marginTop: 20
  }
});
