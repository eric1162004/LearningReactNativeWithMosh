import React from "react";
import { View, StyleSheet,TouchableOpacity } from "react-native";
import AppText from "./AppText/AppText";
import Icon from "./Icon";

function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: "center",
    width:"33%"
  },
  label:{
      marginTop: 5,
      textAlign:"center"
  }
});

export default CategoryPickerItem;
