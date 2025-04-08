import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { PlantlyButton } from "@/components/PlantlyButton";
import PlantlyImage from "@/components/PlantlyImage";


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
      <View>
        <Text style={styles.heading}>Plantly</Text>
        <Text style={styles.tagline}>Keep your plants healthy and hydrated</Text>
      </View>
      <PlantlyImage />
      <PlantlyButton 
        title="Let me in"
        onPress={handlePress} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
  text: {
    fontSize: 24,
  },
  heading :{
    fontSize: 42,
    marginBottom: 12,
    textAlign: "center",
    fontWeight: "bold"
  },
  tagline: {
    fontSize: 18,
    textAlign: "center"
  }
});