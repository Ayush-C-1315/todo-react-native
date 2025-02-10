import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
// import React from 'react'

import hero from "@/assets/images/checkList.png";
import { Link } from "expo-router";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={hero} resizeMode="contain" style={styles.image}>
        <Text style={styles.title}>To Do App</Text>
        <View style={styles.buttonContainer}>
          <Link href={"/contact"} asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Contact Us</Text>
            </Pressable>
          </Link>
          <Link href={"/screens/todo"} asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Todo App</Text>
            </Pressable>
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    padding: 3,
    color: "red",
  },
  image: {
    width: "100%",
    justifyContent: "space-around",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    display: "flex",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    padding: 40,
    marginBottom: 120,
  },
  link: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    // textDecorationLine:'underline',
    // width:'100%',
    paddingVertical: 30,
    paddingHorizontal: 20,
    cursor: "pointer",
  },
  button: {
    height: 60,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.75)",
    padding: 6,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 4,
  },
  buttonContainer: {
    flexDirection: "row",
    borderWidth: 2,
    width: "100%",
    padding: 2,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
