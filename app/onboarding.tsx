import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { PlantlyButton } from "@/components/PlantlyButton";


export default function OnboardingScreen() {

  //Programmatically navigate user to index screen
  const router = useRouter()
  
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded)

  const handlePress = () => {
    toggleHasOnboarded()
    router.replace("/(tabs)")
  }


  return (
    <LinearGradient 
      start={{ x: 0, y: 0}}
      colors={[theme.colorGreen, theme.colorAppleGreen]}
      style={styles.container}>
      <PlantlyButton 
        title="Let me in"
        onPress={handlePress} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
  text: {
    fontSize: 24,
  },
});