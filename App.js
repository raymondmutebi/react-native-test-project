import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Text cllicked");
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello Ray! Really longer text to see what realy happens in.
      </Text>
      <Button
        title="Alert button"
        style={myCustomStyles}
        onPress={() =>
          Alert.alert("You are hacked  ", "Proceed?", [
            { text: "Yes", onPress: () => console.log("He said yes") },
            { text: "No", onPress: () => console.log("He said no") },
          ])
        }
      />

      <Button
        title="Prompt button"
        color={"blue"}
        onPress={() =>
          Alert.prompt("You are hacked  ", "Proceed?", () =>
            console.log("He said yes")
          )
        }
      />

      <TouchableHighlight onPress={() => console.log("Image tapped")}>
        <Image
          blurRadius={5}
          fadeDuration={5000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const myCustomStyles = { backgroundColor: "orange", color: "brown" };

//StyleSheet.create helps us to validate the props passed. Though we can just use plain js objects
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
  },
});
