import React, { Component } from "react";
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
  Right,
  Button,
  Icon,
  Toast,
  Fab
} from "native-base";
import { View, RefreshControl, Alert } from "react-native";
import * as Animatable from 'react-native-animatable';
import Swipeout from 'react-native-swipeout';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getAllBooks, putBook, deleteBook, postBook } from "../../actions/book";
import MenuButton from "../../components/MenuButton";

class BookScreen extends Component {

  componentDidMount() {
    this.onReload();
  }

  onReload() {
    this.props.getAllBooks();
  }

  componentDidUpdate(prevProps, prevState) {
    const { error, UpBook, bookDel } = this.props;
    if (error && prevProps.error !== error) {
      Toast.show({
        text: error.message,
        buttonText: 'Ok',
        type: "danger",
        duration: 5000
      })
    }
    if (UpBook && prevProps.UpBook !== UpBook) {
      this.onReload();
    } if (bookDel && prevProps.bookDel !== bookDel) {
      this.onReload();
    }
  }

  showDetail(id) {
    this.props.navigation.navigate("BookDetail", { id });
  }

  showForm() {
    this.props.navigation.navigate("BookPost");
  }

  delBook(data) {
    this.props.deleteBook(data.id)
  }

  renderListItem(data, index) {
    const swipeSettings = {
      autoClose: true,      
      right: [
          { 
              onPress: () => {            
                  Alert.alert(
                      'Warning!',
                      ' Are you sure you want to delete ' + data.judul + ' ? ',
                      [                              
                        {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                        {text: 'Delete', onPress: () => {        
                           this.delBook(data)
                        }},
                      ],
                      { cancelable: true }
                  ); 
              }, 
              text: 'Delete', type: 'delete' 
          }
      ]
    };
    return (
      <View key={"item-" + index}
      onPress={() => this.showDetail(data.id)}>
        <Swipeout {...swipeSettings} style={styles.swipeout}>
          <ListItem thumbnail>
            <Animatable.View animation="rubberBand">
              <Left>
                <Thumbnail square source={require("../../assets/books.png")} />
              </Left>
            </Animatable.View>
            <Body>
              <Text numberOfLines={1}>{data.judul}</Text>
              <Text note numberOfLines={1}>
                Penerbit : {data.penerbit}
              </Text>
            </Body>
            <Right>
              <Button  
                transparent
                key={"item-" + index}
                onPress={() => this.showDetail(data.id)}
              >
                <Animatable.View animation="fadeInLeft">
                <Icon name="angle-right" type="FontAwesome5" />
                </Animatable.View>
              </Button>
            </Right>
          </ListItem>
        </Swipeout>
      </View>  
    );
  }
  render() {
    return (
      <Container>
        <Header style={styles.headerNav}>
          <MenuButton navigation={this.props.navigation} />
          <Text style={styles.header}>Books</Text>
        </Header>
        <Content refreshControl={<RefreshControl refreshing={this.props.loading} onRefresh={() => this.onReload()}/>}>
            {this.props.books.map((data, index) => this.renderListItem(data, index))}
        </Content>
          <Fab
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.showForm()}>
            <Icon name="plus" type="FontAwesome5" />
          </Fab>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.books.loading,
    books: state.books.data,
    error: state.books.error,
    UpBook: state.putBook.data || state.postBook.data,
    bookDel: state.deleteBook.data
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getAllBooks, deleteBook, putBook, postBook }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(BookScreen);
