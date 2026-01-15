import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
// Custom Components
import DayDropdown from "@/components/dropdown";
import TaskCard from "@/components/taskCard";

export default function Todo() {
  //Controlls modal visibility
  const [visible, setVisible] = useState(false);
  //Controlls modal tabs
  const [taskType, setTaskType] = useState("default");
  //Used to append a single task to the list
  const [newDefaultTask, setNewDefaultTask] = useState("");
  //Title for a new task list
  const [taskListTitle, setTaskListTitle] = useState("");
  //Subtasks for the task list
  const [subTasks, setSubTasks] = useState([""]);

  //Holds entire week of tasks
  const [allTasksForWeek, setAllTasksForWeek] = useState([]);
  //Holds tasks for selected day
  const [tasksForSelectedDay, setTasksForSelectedDay] = useState([]);
  //holds value of the day passed from child dropdown componenet
  const [selectedDay, setSelectedDay]= useState("");
  
  //Loads in week of tasks from firebase
  useEffect(()=>{

    

  },[]);

  const addTask = () => {
    if (taskType === "default") {
      if (newDefaultTask.trim() === "") return;
      setTasksForSelectedDay((prevTasks): any => [...prevTasks, newDefaultTask]);
      setNewDefaultTask("");
    } else {
      const formatted = formattedList();
      setTasksForSelectedDay((prevTasks): any => [...prevTasks, formatted]);
      setTaskListTitle("");
      setSubTasks([]);
    }
  };

  const addSubTaskInput = () => {
    setSubTasks([...subTasks, ""]);
  };

  const updateInput = (text: any, index: any) => {
    const newInputs = [...subTasks];
    newInputs[index] = text;
    setSubTasks(newInputs);
  };

  function formattedList() {
    let list = taskListTitle;
    let count = 1;
    subTasks.map((task, index) => {
      if (subTasks[index] != "") {
        list = list + "\n" + count + ") " + task;
        count++;
      }
    });
    return list;
  }

  return (
    <SafeAreaView style={styles.todoContainer}>
      {/* Header */}
      <View style={styles.todoHeaderContainer}>
        <Text style={styles.todoHeaderTitle}>Todo</Text>
        <DayDropdown onNewDaySelected={setSelectedDay} />
      </View>

      {/* Task List */}
      <ScrollView style={styles.todoScrollContainer}>
        {/* Test text you can use to test shit */}
        <Text style={{ color: "white", position: "absolute", right: 200,
          top: 100, fontSize: 30}}>ik{selectedDay}</Text>
        
        {tasksForSelectedDay.map((task, index) => (
          <TaskCard
            key={index}
            description={task}
            onPress={() => {
              setTasksForSelectedDay(tasksForSelectedDay.filter((_, i) => i !== index));
            }}
          />
        ))}
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.todoFabButton}
        onPress={() => setVisible(true)}
      >
        <Text style={styles.todoFabIcon}>+</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal visible={visible} transparent animationType="slide">
        <View style={styles.todoModalOverlay}>
          <View style={styles.todoModalContainer}>
            {/* Title */}
            <Text style={styles.todoModalTitle}>Add a task</Text>

            {/* Close Button */}
            <TouchableOpacity
              onPress={() => {
                setVisible(false);
                setNewDefaultTask("");
                setSubTasks([""]);
              }}
              style={styles.todoModalCloseButton}
            >
              <Ionicons name="close" size={40} color={"red"} />
            </TouchableOpacity>

            {/* Tabs */}
            <View style={styles.todoModalTabHeader}>
              {/* Default Task Tab */}
              <TouchableOpacity
                style={[
                  styles.todoModalTab,
                  taskType === "default" && styles.todoModalTabActive,
                ]}
                onPress={() => setTaskType("default")}
              >
                <Text style={styles.todoModalTabLabel}>Default Task</Text>
              </TouchableOpacity>

              {/* Task List Tab */}
              <TouchableOpacity
                style={[
                  styles.todoModalTab,
                  taskType === "list" && styles.todoModalTabActive,
                ]}
                onPress={() => setTaskType("list")}
              >
                <Text style={styles.todoModalTabLabel}>Task List</Text>
              </TouchableOpacity>
            </View>

            {/* Tab Content */}
            <View style={styles.todoModalTabContent}>
              {taskType === "default" ? (
                <View>
                  <TextInput
                    style={styles.todoDefaultTaskInput}
                    placeholder=" Task description..."
                    placeholderTextColor="#000000"
                    value={newDefaultTask}
                    onChangeText={(text) => setNewDefaultTask(text)}
                  />

                  <TouchableOpacity
                    style={styles.todoAddTaskButton}
                    onPress={addTask}
                  >
                    <Text style={styles.todoAddTaskButtonText}>
                      <Ionicons
                        name="add"
                        color="black"
                        size={24}
                      />
                      Add Task
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <ScrollView>
                  {/* Title Input */}
                  <TextInput
                    style={styles.todoListTitleInput}
                    placeholder=" List Title..."
                    placeholderTextColor="#000000"
                    value={taskListTitle}
                    onChangeText={(text) => setTaskListTitle(text)}
                  />

                  {subTasks.map((value, index) => (
                    <TextInput
                      key={index}
                      style={styles.todoListItemInput}
                      placeholder={` Task ${index + 1}`}
                      placeholderTextColor="#000"
                      value={value}
                      onChangeText={(text) => updateInput(text, index)}
                    />
                  ))}

                  <View style={styles.todoTaskListButtonRow}>
                    {/* Add More Subtasks */}
                    <TouchableOpacity
                      style={styles.todoAddListItemButton}
                      onPress={addSubTaskInput}
                    >
                      <Text style={styles.todoAddListItemButtonText}>
                        + Sub-Task
                      </Text>
                    </TouchableOpacity>

                    {/* Add Task List */}
                    <TouchableOpacity
                      style={styles.todoSubmitTaskListButton}
                      onPress={addTask}
                    >
                      <Text style={styles.todoSubmitTaskListButtonText}>
                        Add This Task List
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              )}
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  /** ─── Todo Tab: Main Layout ───────────────────────────── **/
  todoContainer: {
    flex: 1,
    backgroundColor: "#01033A",
  },
  todoHeaderContainer: {
    flexDirection: "row",
    marginHorizontal: "auto",
    marginTop: 10,
    padding: 15,
    marginBottom: 10,
  },
  todoHeaderTitle: {
    color: "white",
    fontSize: 30,
    marginTop: 10,
    marginEnd: 5,
    fontStyle: "italic",
  },
  todoScrollContainer: {
    flexGrow: 1,
  },

  /** ─── Floating Action Button ─────────────────────────── **/
  todoFabButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "gold",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#ffd500ff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 20.65,
  },
  todoFabIcon: {
    color: "#000",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 5,
  },

  /** ─── Modal Overlay & Container ───────────────────────── **/
  todoModalOverlay: {
    position: "absolute",
    bottom: 0,
    height: "70%",
    width: "100%",
    backgroundColor: "#01033A",
    borderRadius: 50,
    borderColor: "gold",
    borderWidth: 2,
    borderBottomWidth: 0,
  },
  todoModalContainer: {
    flex: 1,
    padding: 15,
    alignItems: "center",
  },
  todoModalTitle: {
    color: "gold",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 10,
  },
  todoModalCloseButton: {
    position: "absolute",
    right: 20,
    top: 20,
  },

  /** ─── Modal Tabs ─────────────────────────────────────── **/
  todoModalTabHeader: {
    flexDirection: "row",
    marginTop: 40,
  },
  todoModalTabLabel: {
    color: "gold",
    fontWeight: "bold",
    padding: 5,
    marginHorizontal: 10,
  },
  todoModalTabContent: {
    width: "90%",
    paddingVertical: 20,
    borderWidth: 2,
    borderColor: "gold",
    borderRadius: 20,
    marginTop: 35,
    marginBottom: 130,
  },
  todoModalTab: {
    borderWidth: 0,
    borderColor: "gold",
    borderRadius: 20,
    padding: 5,
    marginHorizontal: 10,
  },
  todoModalTabActive: {
    borderWidth: 2,
    backgroundColor: "black",
  },

  /** ─── Default Task Input ─────────────────────────────── **/
  todoDefaultTaskInput: {
    height: 50,
    width: 250,
    backgroundColor: "white",
    borderRadius: 10,
    color: "black",
    marginHorizontal: "auto",
    marginVertical: 50,
  },

  /** ─── Task List Inputs ───────────────────────────────── **/
  todoListTitleInput: {
    height: 50,
    width: 250,
    backgroundColor: "white",
    borderRadius: 10,
    color: "black",
    marginHorizontal: "auto",
    marginVertical: 20,
  },
  todoListItemInput: {
    height: 45,
    width: 225,
    backgroundColor: "white",
    borderRadius: 10,
    color: "black",
    marginHorizontal: "auto",
    marginVertical: 20,
  },

  /** ─── Modal Buttons ──────────────────────────────────── **/
  todoAddTaskButton: {
    backgroundColor: "gold",
    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignSelf: "center", // centers the button horizontally
    justifyContent: "center",
    alignItems: "center", 
    flexDirection: "row", 
    gap: 8, 
    marginBottom: 20,
  },

  todoAddTaskButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    marginHorizontal: "auto",
  },

  todoAddListItemButton: {
    backgroundColor: "blue",
    borderRadius: 15,
    height: 100,
    width: 100,
    justifyContent: "center",
    marginVertical: 35,
  },
  todoAddListItemButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    marginHorizontal: "auto",
    padding: 5,
  },

  todoSubmitTaskListButton: {
    backgroundColor: "gold",
    borderRadius: 15,
    height: 100,
    width: 100,
    padding: 15,
    justifyContent: "center",
    marginTop: 35,
  },
  todoSubmitTaskListButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
    marginHorizontal: "auto",
  },
  todoTaskListButtonRow: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    marginHorizontal: "auto",
    gap: 25,
  },
});
