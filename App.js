import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { AppLoading } from "expo";
import {
  useFonts,
  Amaranth_400Regular,
  Charmonman_400Regular
} from "@expo-google-fonts/dev";

import Item from "./components/Item";
export default function App() {
  const [goals, setGoals] = useState([
    { id: 1, task: "Eat Food", completed: true },
    { id: 2, task: "Take a dump", completed: false }
  ]);
  useEffect(() => {}, []);
  let [fontsLoaded] = useFonts({ Amaranth_400Regular, Charmonman_400Regular });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.screen}>
        <Text style={styles.heading}>Tasks</Text>
        <FlatList
          
          keyExtractor={(item, index) => item.id}
          data={goals}
          renderItem={itemData => (
            <Item style={styles.lalle} id={itemData.item.id} task={itemData.item.task} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    marginBottom: 30,
    textAlign: "center",
    fontSize: 42,
    fontFamily: "Charmonman_400Regular"
  },
  screen: {
    padding: 65
  },
  lalle:{
    fontFamily: 'Charmonman_400Regular'
  }
});
