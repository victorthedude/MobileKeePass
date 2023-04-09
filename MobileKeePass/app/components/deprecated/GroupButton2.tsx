import React, { Component, FunctionComponent, useState } from "react";
import {
  Pressable,
  View,
  Text,
  StyleSheet,
} from "react-native";

interface Props {
  text: string;
}
// { text, onPress }: Props
class GroupButton extends Component {

  constructor(props: any) {
    super(props);
    this.state = {
        bgColor: "steelblue",
        radius: 40,
    };
  }

  select() {
    this.setState({
        bgColor: "#28557d",
        radius: 20,
    })
  }

  unselect() {
    this.setState({
        bgColor: "steelblue",
        radius: 40,
    })
  }

  render() {
      return (
        <Pressable
          onPress={() => {this.state.bgColor == "steelblue" ? this.select() : this.unselect()}}
        >
          <View
            style={[
              style.button,
              {
                backgroundColor: this.state.bgColor,
                borderTopRightRadius: this.state.radius,
                borderBottomRightRadius: this.state.radius,
              },
            ]}
          >
            <Text style={style.buttonText}>{this.props.text}</Text>
          </View>
        </Pressable>
      );
  }
};

const style = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
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
