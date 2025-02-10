import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import {
  Appearance,
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Switch,
} from "react-native";
import { Link } from "expo-router";

import { useState } from "react";

import { Colors } from "@/constants/Colors";
import { todos } from "@/constants/TodoData";
import CheckBox from "@react-native-community/checkbox"; // Import the CheckBox component

export default function MenuScreen() {
  const [todoState, setState] = useState(todos.sort((a, b) => b.id - a.id));
  const [newTask, setTask] = useState("");

  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const styles = createStyles(theme, colorScheme);

  const ListContianer = Platform.OS === "web" ? ScrollView : SafeAreaView;

  const addTodo = () => {
    setState((prev) => [
      { id: prev.length + 1, title: newTask, completed: false },
      ...prev,
    ]);
    setTask("");
  };

  const toggleTodo = (id) => {
    setState((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setState((prev) => prev.filter((item) => item.id !== id));
  };
  const ListHeader = (
    <View>
      <Text style={styles.todoHead}>Todos</Text>
      <View style={styles.addComponent}>
        <TextInput
          placeholder="Enter a task"
          style={styles.todoInput}
          placeholderTextColor="gray"
          onChangeText={(input) => setTask(input)}
          value={newTask}
        />
        <Pressable style={styles.addBtn} onPress={addTodo}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Add Task</Text>
        </Pressable>
      </View>
    </View>
  );

  const ListItem = ({ item }) => (
    <View key={item.id} style={styles.listElement}>
      <View style={styles.listItem}>
        <Switch
          value={item.completed}
          onValueChange={() => toggleTodo(item.id)}
          boxType="square"
          onCheckColor={theme.text}
        />
        <Text
          style={[
            styles.todoDescription,
            item.completed && {
              textDecorationLine: "line-through",
              color: "gray",
            },
          ]}
          onPress={() => toggleTodo(item.id)}
        >
          {item.title}
        </Text>
      </View>
      <Pressable onPress={() => removeTodo(item.id)}>
        <MaterialCommunityIcons
          name="delete-circle"
          size={40}
          color="red"
          selectable={undefined}
        />
      </Pressable>
    </View>
  );
  const ListSeparatorComp = <View style={styles.separator} />;

  return (
    <ListContianer
      style={{ backgroundColor: theme.background, position: "relative" }}
    >
      <FlatList
        data={todoState}
        renderItem={ListItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={ListHeader}
        ListHeaderComponentStyle={styles.headers}
        ItemSeparatorComponent={ListSeparatorComp}
      />
      <Link href="/" style={{ width: "100%", textAlign: "center", margin: 10 }}>
        <Text style={{ color: "white", fontSize: 20 }}>👈 Back to Home</Text>
      </Link>
    </ListContianer>
  );
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    listContainer: {
      backgroundColor: theme.background,
    },
    listItem: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: 10,
      marginVertical: 8,
      backgroundColor: "#f8f8f8",
      borderRadius: 8,
      gap: 30,
      backgroundColor: theme.background,
      marginBottom: 10,
      color: "white",
    },
    listElement: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 5,
      alignItems: "center",
    },
    addComponent: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      margin: 10,
      padding: 5,
    },
    todoDescription: {
      color: "white",
    },
    headers: {
      padding: 12,
      marginBottom: 10,
    },
    todoHead: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
      color: theme.text,
    },
    todoInput: {
      backgroundColor: "transparent",
      width: "80%",
      color: "white",
      borderRadius: 5,
      borderWidth: 2,
      borderColor: "white",
      fontSize: 15,
      padding: 10,
    },
    addBtn: {
      color: "white",
      padding: 5,
      borderRadius: 5,
      backgroundColor: "white",
      height: 40,
      color: "black",
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      marginLeft: 5,
    },
    separator: {
      padding: 1,
      width: "100%",
      marginHorizontal: "auto",
      backgroundColor: theme.text,
    },
  });
}
