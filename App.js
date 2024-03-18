import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}/>
        <Button title="Add Grocery" color="#0CCFF5" />
      </View>
      <View style={styles.groceryContainer}>
        <Text>Groceries List</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#020202",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccccc",
  },
  textInput: {
    borderWidth: 1,
    width: "65%",
    marginRight: 4,
    borderRadius: 30,
    padding: 8,
    borderWidth: 3,
    borderColor: "#FEBF00",
    color: "#E5EDEF",
    backgroundColor: "#555656",
  },
  groceryContainer: {
    flex: 3,
  },
});
