import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";
import { useRouter } from "expo-router";
import AnimatedButton from "./components/AnimatedButton";
import Database from "./database";

interface kdbx {
  groups: Group[];
}
interface Group {
  title: string;
  entries: Entry[];
}

interface Entry {
  title: string;
  // password: string
}

export default function Page() {
  const router = useRouter();

  const testFile = {
    groups: [
      {title: "Group1", entries: [{title: "Entry1"},{title: "Entry2"}]},
      {title: "Group2", entries: [{title: "Entry3"},{title: "Entry4"},{title: "Entry5"}]},
      {title: "Group3", entries: [{title: "Entry6"}]},
      {title: "Group4", entries: [{title: "Entry7"},{title: "Entry8"},{title: "Entry9"},{title: "Entry10"}]},
    ]
  }

  // check if a file has been opened recently
  const hasOpened = () => {
    return true
  };

  // open file system window, browse to select a .kdbx file.
  const fileSelector = () => {
    global.kdbx = testFile;
    router.push("database"); // placeholder functionality
  }

  // select the most recently opened .kdbx file. Save recent in memory in order
  // to be able to open and close the app and still have the saved path.
  const openRecent = () => {

  }

  return (
    <View style={styles.container}>
      <Image
        source={require("./images/yeah_logo2.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      
      <View style={styles.infoText}>
        <Text style={styles.header}>Welcome!</Text>
        <Text style={styles.text}>
          Start by selecting a .kdxb file on your device.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        {hasOpened() ? (
          <View style={styles.recent}>
            <AnimatedButton
              text="Select new .kdbx file"
              onPress={(e) => fileSelector()}
            />

            <AnimatedButton 
              text="Open recent" 
              onPress={(e) => openRecent} 
            />
          </View>
        ) : (
          <View style={styles.new}>
            <AnimatedButton
              text="Select .kdbx file"
              onPress={(e) => fileSelector()}
            />
          </View>
        )}

      </View>
    </View>
  );
}

// base containers flex proportions: 0.2 + 0.2 + 1 (1/5 + 1/5 + 5/5)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    justifyContent: "center",
    marginTop: 25,
    flex: 0.2,
    // height: 75,
    // width: 200,
  },

  infoText: {
    flex: 0.2,
    justifyContent: "center",
    // maxWidth: 960,
    marginHorizontal: "auto",
    padding: 50,
    // borderWidth: 1,
  },
  header: {
    fontSize: 64,
    fontWeight: "bold",
  },
  text: {
    fontSize: 24,
    color: "#38434D",
  },

  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "red",
  },
  recent: {
    flex: 1,
    justifyContent: "space-evenly",
    marginVertical: 60,
    transform: [{ translateY: -30 }],
    // borderWidth: 1,
  },
  new: {
    flex: 1,
    justifyContent: "center",
    transform: [{ translateY: -30 }],
    // borderWidth: 1,
  },
});
