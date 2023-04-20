import { useRef, useState } from "react";
import { FlatList, Text, View, Alert, TextInput } from "react-native";
import { Empty } from "../../components/Empty";
import { Header } from "../../components/Header";
import { Tasks } from "../../components/Tasks";
import { TaskDTO } from "../../Dtos/TaskDTO";
import { uuid } from "../../Utils/uuid";
import { styles } from "./styles";

export function Home(){

  const [ tasks, setTasks ] = useState<TaskDTO[]>([]); 
  const [newTask, setNewTask ] = useState('');

  const newTaskInputRef = useRef<TextInput>(null);

  function handleTaskAdd(){

    if (newTask !== '' && newTask.length >= 5){
      setTasks(prevState => [
        ...prevState,
        {id: uuid(), isCompleted: false, title: newTask.trim()},
      ]);
      //console.log(tasks);
      setNewTask('');

      newTaskInputRef.current?.blur();
    }
  }

  function handleTaskDone(id: string){
    //console.log(`tarefa ${id} marcada`)
    setTasks((task) => task.map((task)=> {
      task.id === id ? (task.isCompleted = !task.isCompleted) : null
      return task
    }))
  }
  function handleTaskDeleted(id: string){
    //console.log(`tarefa ${id} deletada`)
    Alert.alert('Excluir tarefa', 'Deseja excluir esta tarefa?', [
      {
        text: 'Sim',
        style: 'default',
        onPress: () => 
           setTasks((tasks) => tasks.filter((task) => task.id !== id))
      },
      {
        text: 'Não',
        style: 'cancel',
      }
    ])
  }

  const totalTaskCreated = tasks.length
  const totalTaskCompleted = tasks.filter(
    ({ isCompleted }) => isCompleted,
  ).length  

  return(
    <View style={styles.container}>
      <Header 
        inputRef={newTaskInputRef}
        task={newTask} 
        onChangeText={setNewTask} 
        onPress={handleTaskAdd }/>
      <View style={styles.tasksContainer}> 
        <View style={styles.tasksInfo}>
          <View style={styles.row}>
            <Text style={styles.tasksCreated}>Created</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>{totalTaskCreated}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.tasksDone}>Done</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>{totalTaskCompleted}</Text>
            </View>
          </View>
        </View>
        <FlatList
          data={tasks}
          keyExtractor={(tasks) => tasks.id}
          renderItem={({item}) => (
            <Tasks 
              key={item.id}
              onTaskDone={() => handleTaskDone(item.id)}
              onTaskDeleted={() => handleTaskDeleted(item.id)}
              //isCompleted={item.isCompleted}
              //title={item.title}
              {...item}
            />
          )} 
          ListEmptyComponent={<Empty />}
        />
      </View>
    </View>
  )
}


//antes da implementação da flate list
//<Tasks title="Cadastrar suspeito de Crime" isCompleted />
//<Tasks title="Cadastrar suspeito de Crime" isCompleted={false} />
//<Tasks title="Cadastrar suspeito de Crime" isCompleted />