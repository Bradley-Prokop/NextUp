import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: "#001F3F", height: 80, borderColor: "gold", },
          tabBarActiveTintColor: "#FFD700",
          tabBarInactiveTintColor: "#888",
        }}
      >
        {/* Home */}
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color}></Ionicons>
            ),
          }}
        ></Tabs.Screen>

        {/* Todo */}
        <Tabs.Screen
          name="todo"
          options={{
            title: "ToDo",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list" size={size} color={color}></Ionicons>
            ),
          }}
        ></Tabs.Screen>

        {/* Edit */}
        <Tabs.Screen
          name="more"
          options={{
            title: "More",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ellipsis-horizontal" size={size} color={color}></Ionicons>
            ),
          }}
        ></Tabs.Screen>
      </Tabs>
  );
}
