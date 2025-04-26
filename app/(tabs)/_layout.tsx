import { Link, Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import { theme } from "@/theme";
import { Redirect } from "expo-router";
import { useUserStore } from "@/store/userStore";
import { Pressable } from "react-native";

export default function RootLayout() {
  const auth = useUserStore((state) => state.isOnboarded);
  if (!auth) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorGreen }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="leaf" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ size, color }) => (
            <Entypo name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
