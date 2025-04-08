import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
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
