import React, { FunctionComponent, useEffect, useRef } from "react";
import { Pressable, View, Text, StyleSheet, Animated, GestureResponderEvent } from "react-native";

interface Props {
    text: string;
    onPress: (event: GestureResponderEvent) => void;
}
// { text, onPress }: Props
const AnimatedButton: FunctionComponent = ({ text, onPress }: Props) => {
    const animatedScale = useRef(new Animated.Value(1)).current;
    // const {text, onPress} = props;

    // useEffect(() => {
    //     animatedScale.setValue(1);
    // }, []);

    const handleOnPressOut = () => {
        Animated.spring(animatedScale, {
          toValue: 1,
          bounciness: 12,
          speed: 50,
          useNativeDriver: true,
        }).start();
    };

    const handleOnPressIn = () => {
        Animated.spring(animatedScale, {
            toValue: 0.85,
            bounciness: 0,
            speed: 50,
            useNativeDriver: true,
          }).start();
    }

    return (
        <Pressable onPressIn={ handleOnPressIn }
                       onPressOut={ handleOnPressOut }
                       onPress={ onPress }>
                <Animated.View 
                    style={[style.button, {transform: [{scale: animatedScale}]}]}>
                    <Text style={style.buttonText}>{text}</Text>
                </Animated.View>
        </Pressable>
    )
}

const style = StyleSheet.create({
    button: {
      backgroundColor: 'steelblue', // skyblue
    //   backgroundColor: {},
    //   width: 200,
    //   height: 80,
      paddingVertical: 15,
      paddingHorizontal: 25,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 3,
    },
    buttonText: {
      color: '#fff',
      fontSize: 30,
    },
  });

export default AnimatedButton