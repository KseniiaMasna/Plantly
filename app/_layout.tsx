import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import * as Navigation from "expo-navigation-bar";
import * as QuickActions from "expo-quick-actions";
import { Platform } from "react-native";
import { useQuickActionRouting } from "expo-quick-actions/router";

export default function Layout() {
  const [loaded, setLoaded] = useState(true);
  useQuickActionRouting();
  useEffect(() => {
    QuickActions.setItems([
      {
        title: "Add plant",
        icon: Platform.OS === "ios" ? "symbol:leaf" : "leaf",
        id: "0",
        params: { href: "/new" },
      },
    ]);
  }, []);

  useEffect(() => {
    if (loaded) {
      Navigation.setPositionAsync("absolute");
      Navigation.setBackgroundColorAsync("transparent");
    }
  }, []);

  return (
    <Stack>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="onboarding"
        options={{
          headerShown: false,
          presentation: "modal",
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="new"
        options={{
          title: "new plant",
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
