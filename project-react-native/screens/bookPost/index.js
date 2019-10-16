import React, { Component } from "react";
import { RefreshControl, View, Alert } from "react-native";
import * as Animatable from 'react-native-animatable';
import { styles } from "../../style";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
  Item,
  Button,
  Label,
  Form,
  Input,
  DatePicker,
  Right,
  Toast
} from "native-base";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { postBook } from "../../actions/book";

class BookPost extends Component {

  componentDidUpdate(prevProps, prevState) {
    const { error } = this.props;
    if (error && prevProps.error !== error) {
      Toast.show({
        text: error.message,
        buttonText: 'Ok',
        type: "danger",
        duration: 5000
      })
    }
  }

  save() {
    const { id, judul, penerbit, denda, stok } = this.state;
    this.props.postBook({
      id: id,
      judul: judul,
      penerbit: penerbit,
      denda: denda,
      stok: stok
    })

    this.props.navigation.goBack();
     // const data = {
    //   id: this.state.id,
    //   judul: this.state.judul,
    //   penerbit: this.state.penerbit,
    //   denda: this.state.denda,
    //   stok: this.state.stok,
    // }
    //   this.props.postBook(data);
    //   console.log(data);
    //   this.props.navigation.goBack();
  }

  render() {
    return (
      <Container style={styles.bodyDetailBook}>
          <Button
            transparent
            style={styles.iconBack}
            onPress={() => this.props.navigation.goBack()}
          >
            <Icon name="angle-left" type="FontAwesome5" />
          </Button>
        <Content>
          <View style={styles.inputUpdate}>
            <Text style={styles.headerDetailBook}> Add Book </Text>
              <Form>
                <Item floatingLabel>
                  <Label style={styles.labelUpdate}>ID</Label>
                  <Input onChangeText={(id) => this.setState({id})} />
                </Item>
                <Item floatingLabel>
                  <Label style={styles.labelUpdate}>Judul</Label>
                  <Input onChangeText={(judul) => this.setState({judul})} />
                </Item>
                <Item floatingLabel>
                  <Label style={styles.labelUpdate}>Penerbit</Label>
                  <Input onChangeText={(penerbit) => this.setState({penerbit})} />
                </Item>
                <Item floatingLabel>
                  <Label style={styles.labelUpdate}>Denda</Label>
                  <Input onChangeText={(denda) => this.setState({denda})} />
                </Item>
                <Item floatingLabel>
                  <Label style={styles.labelUpdate}>Stok</Label>
                  <Input onChangeText={(stok) => this.setState({stok})} />
                </Item>
                  <Animatable.View animation="pulse">
                    <Button bordered primary style={styles.buttonSave} onPress={ () => this.save() }>
                      <Text>Save</Text>
                    </Button>
                  </Animatable.View>
              </Form>
          </View>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.postBook.loading,
    postBook: state.postBook.data,
    error: state.postBook.error,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ postBook }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(BookPost);
