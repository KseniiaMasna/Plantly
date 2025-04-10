import { Text, View, StyleSheet } from "react-native";
import { theme } from "@/theme";
import { PlantType, usePlantStore } from "@/store/plantsStore";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { PlantCard } from "@/components/PlantCard";
import { PlantlyButton } from "@/components/PlantlyButton";
import { useRouter } from "expo-router";

export default function Index() {
  const data = usePlantStore((state) => state.plants);
  const router = useRouter();

  return (
    <GestureHandlerRootView>
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        data={data}
        renderItem={({ item }) => <PlantCard plant={item} />}
        ListEmptyComponent={() => (
          <PlantlyButton
            title="Add first plant"
            onPress={() => {
              router.navigate("/new");
            }}
          />
        )}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    padding: 12,
  },
});
