import { theme } from "@/theme";
import { Entypo } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

export const unstable_settings = {
  initialRouteName: "index",
};
export const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: () => (
            <Link href="/new" asChild>
              <Pressable hitSlop={40}>
                <Entypo name="plus" size={24} color={theme.colorGreen} />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="plants.[plantId]"
        options={{
          title: "",
        }}
      />
    </Stack>
  );
};

export default Layout;
