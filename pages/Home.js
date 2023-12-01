import { StatusBar } from "expo-status-bar";
import { Image, Pressable, Text, View } from "react-native";

const imageSource = require("../assets/emoji.png");

export default function Home({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image source={imageSource} />
      <Pressable
        style={{
          width: 200,
          height: 50,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
          marginTop: 50,
        }}
        onPress={() => navigation.navigate("Type")}
        //   onPress={() => alert('You pressed a button.')}
        // onPress={null}
      >
        <Text
          style={{ color: "#25292e" }}
        >
          Create meme
        </Text>
      </Pressable>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}
