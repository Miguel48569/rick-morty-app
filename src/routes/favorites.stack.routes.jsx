import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Favorite from "../screens/Favorite";
import Description from "../screens/Description";

const Stack = createNativeStackNavigator();

export default function FavoriteStackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ title: "" }}>
      <Stack.Screen
        name="FavoritesList"
        component={Favorite}
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
