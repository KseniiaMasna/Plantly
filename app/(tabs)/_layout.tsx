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
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            <Entypo name="leaf" size={size} color={color} />
          ),
          headerRight: () => (
            <Link href="/new" asChild>
              <Pressable hitSlop={20} style={{ marginRight: 18 }}>
                <Entypo name="plus" size={24} color={theme.colorGreen} />
              </Pressable>
            </Link>
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
