import React, { Component } from "react";

import { styles } from "../../style";
import { Container, Header, Icon, Body, Card, CardItem } from "native-base";
import { View, ImageBackground, Text } from "react-native";
import MenuButton from "../../components/MenuButton";

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.headerNav}>
          <MenuButton navigation={this.props.navigation} />
          <View style={styles.headerHome}>
            <Icon style={styles.headerText} name="home">
              <Text style={styles.headerText}> HOME </Text>
            </Icon>
          </View>
        </Header>
        <View style={{ marginLeft: 60, top: -250 }}>
          <ImageBackground resizeMode={'center'} source={require('../../assets/story.png')} style={{width: "90%", height: "100%"}}/>
        </View>
      </Container>
    );
  }
}
