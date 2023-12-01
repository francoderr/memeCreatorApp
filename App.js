import Home from "./pages/Home";
import Type from "./pages/Type";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Meme Creator" }}
        />
        <Stack.Screen name="Type" component={Type} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
