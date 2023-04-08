import { StyleSheet, View, Image, ScrollView, Button } from "react-native";
import GroupButton from "./components/GroupButton";
import EntryButton from "./components/EntryButton";

export default function Database() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./images/yeah_logo2.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.passwordsContainer}>
        <View style={styles.passwordGroups}>
            <GroupButton text="Group1"/>
            <GroupButton text="Group2"/>
            <GroupButton text="Group3"/>
            <GroupButton text="Group4"/>
        </View>

        <View style={styles.passwordEntries}>
          <ScrollView>
            <EntryButton text="Entry1"></EntryButton>
            <EntryButton text="Entry2"></EntryButton>
            <EntryButton text="Entry3"></EntryButton>
            <EntryButton text="Entry4"></EntryButton>
            <EntryButton text="Entry5"></EntryButton>
            <EntryButton text="Entry6"></EntryButton>
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
});
