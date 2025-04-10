import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import * as Navigation from "expo-navigation-bar";

export default function Layout() {
  const [loaded, setLoaded] = useState(true);
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
