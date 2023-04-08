import { StyleSheet, Text, View, Image, Button } from "react-native";
import { Link } from "expo-router";

export default function Database() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./images/yeah_logo2.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.passwords_container}>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  logo: {
    justifyContent: "center",
    marginTop: 25,
    flex: 0.2,
    // height: 75,
    // width: 200,
  },
  passwords_container: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
});
