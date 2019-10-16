import React, { Component } from "react";

import { styles } from "../../style";
import { Container, Header, Text, Icon, Body } from "native-base";
import { View } from "react-native";
import MenuButton from "../../components/MenuButton";

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.headerNav}>
          <MenuButton navigation={this.props.navigation} />
          <View style={styles.headerHome}>
            <Icon name="home">
              <Text> HOME </Text>
            </Icon>
          </View>
        </Header>
        <Body>
          <View style={styles.bodyHome}>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              Wellcome to My Application
            </Text>
          </View>
        </Body>
      </Container>
    );
  }
}
