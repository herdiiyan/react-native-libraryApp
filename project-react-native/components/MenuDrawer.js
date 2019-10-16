import React from "react";
import { View, TouchableOpacity, ImageBackground } from "react-native";
import { Drawer, Button, Text, Left, Body, ListItem, Icon } from "native-base";
import { styles } from "../style";

export default class MenuDrawer extends React.Component {
  navLink(nav, text) {
    return (
      <TouchableOpacity
        style={{ height: 50 }}
        onPress={() => this.props.navigation.navigate(nav)}
      >
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Drawer ref={ref => (this._drawer = ref)}>
        <ImageBackground
          style={styles.stretch}
          source={require("../assets/DrawerBg.jpg")}
        >
          <View style={styles.profile}>
            <View style={styles.profileText}>
              <Text style={styles.name}>EnigmaCamp</Text>
            </View>
          </View>
        </ImageBackground>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "#7f8c8d" }}>
              <Icon active name="home" />
            </Button>
          </Left>
          <Body>{this.navLink("Home", "Home")}</Body>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "#30336b" }}>
              <Icon active type="FontAwesome" name="book" />
            </Button>
          </Left>
          <Body>{this.navLink("Book", "Book")}</Body>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "#30336b" }}>
              <Icon active type="FontAwesome" name="user" />
            </Button>
          </Left>
          <Body>{this.navLink("Student", "Student")}</Body>
        </ListItem>
      </Drawer>
    );
  }
}
