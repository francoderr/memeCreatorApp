import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

const imageSource = require("../assets/emoji.png");

export default function Type({ navigation }) {
  const [text, setText] = useState("");

  const onType = () => {};
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextInput
        style={{
          width: 200,
          height: 50,
          color:'white',
          borderWidth: 1,
          borderColor: 'white'
        }}
        onChangeText={onType}
        value={text}
        placeholder="Type here..."
        multiline={true}
        // keyboardType="text"
      />

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
        //   onPress={() => alert('You pressed a button.')}
        // onPress={null}
      >
        <Text style={{ color: "#25292e" }}>Done</Text>
      </Pressable>
      {/* <StatusBar style="light" /> */}
    </View>
  );
}
