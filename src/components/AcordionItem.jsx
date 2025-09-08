import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation, Platform, UIManager } from "react-native";
import { colors } from "../global/colors";

const AccordionItem = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={toggleExpand} style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.icon}>{expanded ? "-" : "+"}</Text>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.content}>
          <Text style={styles.text}>{content}</Text>
        </View>
      )}
    </View>
  );
};

export default AccordionItem;

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    borderBottomColor: colors.mediumGray,
    paddingVertical: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 13,
    fontWeight: "500",
    fontFamily: "RobotoCondensed-Regular",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  icon: {
    fontSize: 18,
    
  },
  content: {
    marginTop: 8,
  },
  text: {
    fontSize: 14,
    color: "#555",
      lineHeight: 20,
  },
});
