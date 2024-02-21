import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
	
	const addTask = () => {
	  if (task.trim().length > 0) {
	    setTasks([...tasks, { id: Math.random().toString(), value: task }]);
	    setTask("");
	  }
	};
  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
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
      	onPress={addTask}
      style={styles.button}
      >
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.listTitle}>
  {tasks.length === 0 ? (
    <Text style={styles.listRed}>Nenhuma Tarefa Cadastrada</Text>
  ) : (
    <Text style={styles.listGreen}>Tarefas Cadastradas</Text>
  )}
</View>
<ScrollView style={styles.containerList} showsVerticalScrollIndicator={false}>
  {tasks.map((task) => (
    <View
      key={task.id}
      style={styles.list}
    >
      <Text style={styles.widthText}>{task.value}</Text>
      <TouchableOpacity
        onPress={() => removeTask(task.id)}
        style={styles.buttonDelete}
      >
        <Text   style={styles.buttonText}>Remover</Text>
      </TouchableOpacity>
    </View>
  ))}
</ScrollView>
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
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
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
  listTitle:{
    marginBottom:20,
  
  },
  listRed:{
    color:"red",
    textAlign: "center",
  },
  listGreen:{
    color:"green",
    textAlign: "center",
  },
  containerList: {
    marginBottom:24,
  
  },
  list:{
    display:"flex",
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginBottom: 10,
    paddingBottom: 5,
  },
   buttonDelete:{
    backgroundColor: "red",
    padding: 10,
    borderRadius:5,
  },

  widthText:{
    width:"75%",
  }
});
