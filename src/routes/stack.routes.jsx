import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Feed from "../screens/Feed";
import Description from "../screens/Description";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ title: "" }}>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Description"
        component={Description}
        options={{ title: "Personagem" }}
      />
    </Stack.Navigator>
  );
}
