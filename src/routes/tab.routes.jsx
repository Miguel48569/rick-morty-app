import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import StackRoutes from "./stack.routes";
import FavoriteStackRoutes from "./favorites.stack.routes";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000",
          borderTopWidth: 1,
          borderTopColor: "#fff",
          elevation: 0, // remove sombra no Android
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#fff",
      }}
    >
      <Tab.Screen
        name="FeedTab"
        component={StackRoutes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
          tabBarLabel: "Início",
        }}
      />
      <Tab.Screen
        name="FavoriteTab"
        component={FavoriteStackRoutes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="heart" size={size} color={color} />
          ),
          tabBarLabel: "Favoritos",
        }}
      />
    </Tab.Navigator>
  );
}
