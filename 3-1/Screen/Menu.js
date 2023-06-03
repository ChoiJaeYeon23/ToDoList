import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const Menu = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> ↓ AI랑 채팅하러 가기 ↓ </Text>
      <Button
        title="GO TO Chat Bot"
        color="#fcb3f1"
        onPress={() => {
          props.navigation.navigate("Gpt");
        }}
      />

      <Text style={styles.title}>{'\n\n'}↓ 달력 보기 ↓</Text>
      <Button
        title="GO TO Calendar"
        color="#fcb3f1"
        onPress={() => {
          props.navigation.navigate("Calendar");
        }}
      />

      <Text style={styles.title}>{'\n\n'}↓ 계산기 ↓</Text>
      <Button
        title="GO TO Culculator"
        color="#fcb3f1"
        onPress={() => {
          props.navigation.navigate("Calculator");
        }}
      />

      
      <Text style={styles.title}>{'\n\n'}↓ 오늘 할 일 수정하러 가기 ↓</Text>
      <Button
        title="GO TO Main"
        color="#fcb3f1"
        onPress={() => {
          props.navigation.navigate("TodoList");
        }}
      />


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default Menu;