import React, { FunctionComponent, useState } from "react";
import {
  Pressable,
  View,
  Text,
  StyleSheet,
} from "react-native";

interface Props {
  text: string;
  index: number;
  onPress: () => void;
}
// { text, onPress }: Props
const GroupButton: FunctionComponent = ({ text }: Props) => {
  const [bgColor, setBgColor] = useState("steelblue");
  const [radius, setRadius] = useState(40);

  const handleOnPressOut = () => {};

  const handleOnPressIn = () => {};

  // const handleOnPress = () => {
  //   if (bgColor == "steelblue") {
  //     setBgColor("#28557d");
  //     setRadius(20);
  //   } else {
  //     setBgColor("steelblue");
  //     setRadius(40);
  //   }
  // };
  const select = () => {
    setBgColor("#28557d");
    setRadius(20);
  }

  const unselect = () => {
    setBgColor("steelblue");
    setRadius(40);
  }

  return (
    <Pressable
      onPressIn={handleOnPressIn}
      onPressOut={handleOnPressOut}
      onPress={() => {bgColor == "steelblue" ? select() : unselect()}}
    >
      <View
        style={[
          style.button,
          {
            backgroundColor: bgColor,
            borderTopRightRadius: radius,
            borderBottomRightRadius: radius,
          },
        ]}
      >
        <Text style={style.buttonText}>{text}</Text>
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  button: {
    // backgroundColor: "steelblue", // skyblue
    paddingVertical: 15,
    paddingHorizontal: 25,
    // borderRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    // justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default GroupButton;
