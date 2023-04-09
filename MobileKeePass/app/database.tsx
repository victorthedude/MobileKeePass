import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Pressable,
  Text,
} from "react-native";
import EntryButton from "./components/EntryButton";
import { useRef, useState } from "react";

export default function Database() {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleGroupButtonPress = (i: number) => {
    if (i != selectedIndex) {
      setSelectedIndex(i);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./images/yeah_logo2.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.passwordsContainer}>
        <View style={styles.passwordGroups}>
          {global.kdbx.groups.map((group, i: number) => {
            return (
              <Pressable
                onPress={() => handleGroupButtonPress(i)}
                key={group.title}
              >
                <View
                  style={
                    i == selectedIndex ? styles.selected : styles.unselected
                  }
                >
                  <Text style={styles.text}>{group.title}</Text>
                </View>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.passwordEntries}>
          <ScrollView>
            {selectedIndex != -1 ? (
              global.kdbx.groups[selectedIndex].entries.map((entry) => {
                return (
                  <EntryButton
                    text={entry.title}
                    key={entry.title}
                    onPress={() => {}}
                  />
                );
              })
            ) : (
              <View></View>
            )}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // padding: 24,
  },
  logo: {
    justifyContent: "center",
    marginTop: 25,
    flex: 0.2,
    // height: 75,
    // width: 200,
  },

  passwordsContainer: {
    flex: 1.2,
    flexDirection: "row",
    justifyContent: "center",
    maxWidth: 960,
    marginVertical: 10,
    marginHorizontal: "auto",
  },
  passwordGroups: {
    flex: 0.35,
    // borderWidth: 1,
    justifyContent: "flex-start",
  },
  passwordEntries: {
    flex: 0.65,
    // borderWidth: 1,
    justifyContent: "flex-start",
  },

  selected: {
    backgroundColor: "#28557d",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  unselected: {
    backgroundColor: "steelblue",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
