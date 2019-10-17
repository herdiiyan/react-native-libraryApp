import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerNav: {
    backgroundColor: "#192a56"
  },
  headerHome: {
    fontWeight: "bold",
    justifyContent: "center",
    color: "#fff"
  },
  header: {
    justifyContent: "center",
    fontWeight: "bold",
    top: 16,
    color: "#fff"
  },
  headerText: {
    color: "#fff"
  },
  menuIcon: {
    zIndex: 9,
    position: "absolute",
    top: 12,
    left: 20,
    color: "#fff"
  },
  profile: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#777777"
  },
  profileText: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "center"
  },
  name: {
    fontSize: 20,
    paddingBottom: 5,
    color: "black",
    textAlign: "center"
  },
  link: {
    flex: 1,
    fontSize: 20,
    padding: 6,
    paddingLeft: 14,
    margin: 5,
    textAlign: "left"
  },
  stretch: {
    height: 200,
    resizeMode: "stretch"
  },
  bodyHome: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  iconBack: {
    zIndex: 9,
    position: "absolute",
    top: 6,
    left: 5
  },
  textDate: {
    left: 10
  },
  buttonSave: {
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 200
  },
  textSave:{
    color: "#7f8c8d"
  },
  inputUpdate: {
    alignSelf: "stretch"
  },
  bodyDetailBook: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingLeft: 60,
    paddingRight: 60
  },
  headerDetailBook: {
    fontSize: 24,
    color: "#7f8c8d",
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: "#7f8c8d",
    borderBottomWidth: 1,
    marginTop: 50
  },
  swipeout: {
    backgroundColor: "#fff"
  }
});
