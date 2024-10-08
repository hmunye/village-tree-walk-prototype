import { colors } from "@/styles";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: colors.foreground,
          fontSize: 40,
          fontFamily: "Barlow-Medium",
        }}
      >
        Settings
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
});
