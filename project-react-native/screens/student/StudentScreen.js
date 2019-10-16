import React from "react";
import { styles } from "../../style";

import { Container, Header, Text } from "native-base";

import MenuButton from "../../components/MenuButton";

export default class StudentScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <MenuButton navigation={this.props.navigation} />
          <Text style={styles.header}>Students</Text>
        </Header>
      </Container>
    );
  }
}
