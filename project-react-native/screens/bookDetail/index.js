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
import moment from "moment";
import { LinearGradient } from 'expo-linear-gradient';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getBook, putBook } from "../../actions/book";

class BookDetail extends Component {
  constructor(props) {
    super(props);

    const { navigation } = this.props;
    this.state = {
      id: navigation.getParam("id"),
      judul: null,
      penerbit: null,
      denda: null,
      stok: null
    };
  }

  componentDidMount() {
    this.onReload();
  }

  componentDidUpdate(prevProps, prevState) {
    const { book, error } = this.props;
    if (book && prevProps.book !== book) {
      // var birthDate = moment(book.birthDate, 'YYYY-MM-DD').toDate();
      // this.refs.birthDate.state.chosenDate = birthDate;
      this.setState({
        judul: book.judul,
        penerbit: book.penerbit,
        denda: book.denda,
        stok: book.stok
      });
    }else if (error && prevProps.error !== error) {
      Toast.show({
        text: error.message,
        buttonText: 'Ok',
        type: "danger",
        duration: 5000
      })
    }
  }

  saveUpdate() {
    const { id, judul, penerbit, denda, stok } = this.state;
    this.props.putBook(id, {
      judul: judul,
      penerbit: penerbit,
      denda: denda,
      stok: stok
    })

    const { book, navigation } = this.props;
    var data = book || {}; 
    if (data != this.state) {
      navigation.goBack();
    }
  }

  onReload() {
    this.props.getBook(this.state.id);
  }

  render() {
    console.log(this.props.book);

    const { book, navigation } = this.props;
    var data = book || {};

    return (
      <Container style={styles.bodyDetailBook}>
          <Button
            transparent
            style={styles.iconBack}
            onPress={() => navigation.goBack()}
          >
            <Icon name="angle-left" type="FontAwesome5" />
          </Button>
        <Content
          refreshControl={
            <RefreshControl
              refreshing={this.props.loading}
              onRefresh={() => this.onReload()}
            />
          }
        >
          <View style={styles.inputUpdate}>
          <Text style={styles.headerDetailBook}> BOOKS DETAIL </Text>
            <Form>
              <Item floatingLabel>
                <Label style={styles.labelUpdate}>Id</Label>
                <Input disabled placeholder='Disabled Textbox' value={this.state.id ? this.state.id.toString() : ""} />
                <Icon name='information-circle' />
              </Item>
              <Item floatingLabel>
                <Label style={styles.labelUpdate}>Judul</Label>
                <Input onChangeText={(judul) => this.setState({judul})} value={this.state.judul} />
              </Item>
              <Item floatingLabel>
                <Label style={styles.labelUpdate}>Penerbit</Label>
                <Input onChangeText={(penerbit) => this.setState({penerbit})} value={this.state.penerbit} />
              </Item>
              <Item floatingLabel>
                <Label style={styles.labelUpdate}>Denda</Label>
                <Input onChangeText={(denda) => this.setState({denda})} value={this.state.denda ? this.state.denda.toString() : ""} />
              </Item>
              <Item floatingLabel>
                <Label style={styles.labelUpdate}>Stok</Label>
                <Input onChangeText={(stok) => this.setState({stok})} value={this.state.stok ? this.state.stok.toString() : ""} />
              </Item>
              {/* <Label style={styles.textDate}>BirthDate</Label>
              <DatePicker
                defaultDate={this.state.birthDate}
                minimumDate={new Date(2000, 1, 1)}
                maximumDate={new Date(2040, 12, 31)}
                locale={"tr"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText={moment(this.state.birthDate || new Date()).format('DD/MM/YYYY')}
                onDateChange={birthDate => this.setState({birthDate})}
                disabled={false}
                ref="birthDate"     
              /> */}
                <Animatable.View animation="pulse">
                  <Button transparent style={styles.buttonSave} onPress={ () => {       
                    Alert.alert(
                        'Warning!',
                        ' Are you sure you want to Update ? ',
                        [                              
                          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                          {text: 'Update', onPress: () => {        
                            this.saveUpdate();
                            // flatListData.splice(this.props.index, 1); 
                            // //Refresh FlatList ! 
                            // this.props.parentFlatList.refreshFlatList(deletingRow);
                          }},
                        ],
                        { cancelable: true }
                    )}}>
                    <LinearGradient
                    colors={['#7f8c8d', 'transparent']}
                    style={{ padding: 15, alignItems: 'center', borderRadius: 200, marginBottom: 20 }}>
                    <Text
                      style={{
                        backgroundColor: 'transparent',
                        fontSize: 15,
                        color: '#fff',
                      }}>
                      SAVE
                    </Text>
                  </LinearGradient>
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
    loading: state.book.loading,
    book: state.book.data,
    error: state.book.error,
    putBook: state.putBook.data
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getBook, putBook }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(BookDetail);
