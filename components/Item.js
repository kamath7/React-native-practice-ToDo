import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Item = props => {
  return (
    <View style={styles.task}>
      <Text style={{...props.style,...styles.text}}>{props.task}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 10,
    marginVertical: 10,
    flex: 1,
    textAlign: "center",
    backgroundColor: "#9370DB",
    borderColor: "black",
    borderWidth: 3,
    justifyContent: "center",
    alignItems:'stretch',
    alignContent: 'stretch'
  },
  text: {
    fontSize: 20
  }
});

export default Item;
