import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState('')
	return (
    <View style={styles.container}>
    <View style={styles.form}>
      <TextInput
        placeholder="Digite uma nova tarefa"
       style={styles.inputLine}
        onChangeText={setTask}
        value={task}
      />
      <TouchableOpacity
      style={styles.button}
      >
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
    <StatusBar style="auto" />
  </View>
	);
}

const styles = StyleSheet.create({
  container: {
   padding: 50,
  },
  form: {
    display: "flex",
    flexDirection:"row",
    alignItems: "center",
  },
  inputLine: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    padding: 10,
    width: "75%",
  },
  button:{
    backgroundColor: "blue",
    padding: 10,
    borderRadius:5,
  },
  buttonText: {
    color: "white",
  },
});
