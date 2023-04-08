import React, { FunctionComponent, useEffect, useRef } from "react";
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  Animated,
  GestureResponderEvent,
} from "react-native";

interface Props {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
}
// { text, onPress }: Props
const EntryButton: FunctionComponent = ({ text, onPress }: Props) => {
  const handleOnPressOut = () => {};

  const handleOnPressIn = () => {};

  return (
    <Pressable
      onPressIn={handleOnPressIn}
      onPressOut={handleOnPressOut}
      onPress={onPress}
    >
      <Animated.View style={style.button}>
        <Text style={style.buttonText}>{text}</Text>
      </Animated.View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  button: {
    backgroundColor: "steelblue", // skyblue
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    marginVertical: 10,
    marginHorizontal: 5,    
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default EntryButton;
