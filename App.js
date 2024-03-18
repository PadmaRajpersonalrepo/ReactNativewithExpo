import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [grocText, setGrocText ] = useState("");
  const [grocList, setGrocList] = useState([]);
  function inputHandler(groc) {
    setGrocText(groc);
  }
  function addHandler() {
    setGrocList((currentGrocList) => [...grocList, grocText]);   //Best way to update state with its values.
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} onChangeText={inputHandler}/>
        <Button title="Add Grocery" color="#5A4FCF" onPress={addHandler}/>
      </View>
      <View style={styles.groceryContainer}>
        {grocList.map((things) => (
          <View key={things}>
            <Text style={styles.groceryList}>{things}</Text>
          </View>
        ))}
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
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccccc",
  },
  textInput: {
    borderWidth: 1,
    width: "65%",
    height: 40,
    marginRight: 4,
    borderRadius: 15,
    padding: 8,
    borderWidth: 3,
    borderColor: "#FEBF00",
    color: "#E5EDEF",
    backgroundColor: "#555656",
  },
  groceryContainer: {
    flex: 3,
  },
  groceryList: {
    color: "white",
    fontSize: 28,
  },
  
});
