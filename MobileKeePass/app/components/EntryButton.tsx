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
  const animatedScale = useRef(new Animated.Value(1)).current;

  const handleOnPressOut = () => {
    Animated.spring(animatedScale, {
      toValue: 1,
      speed: 100,
      useNativeDriver: true,
    }).start();
  };

  const handleOnPressIn = () => {
    Animated.spring(animatedScale, {
      toValue: 0.96,
      speed: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      onPressIn={handleOnPressIn}
      onPressOut={handleOnPressOut}
      onPress={onPress}
    >
      <Animated.View
        style={[style.button, { transform: [{ scale: animatedScale }] }]}
      >
        <Text style={style.buttonText}>{text}</Text>
      </Animated.View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  button: {
    backgroundColor: "#28557d", // skyblue
    paddingVertical: 15,
    paddingHorizontal: 25,
    // borderRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    // fontWeight: "bold",
  },
});

export default EntryButton;
