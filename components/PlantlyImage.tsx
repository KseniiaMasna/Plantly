import { Image, useWindowDimensions } from "react-native";

type ImageProps = {
  source?: string;
  size?: number;
  imageUri?: string;
};

export const PlantlyImage = ({ source, size, imageUri }: ImageProps) => {
  const { width } = useWindowDimensions();
  const imageSize = size || Math.min(width / 1.5, 400);

  return (
    <Image
      source={
        imageUri ? { uri: imageUri } : require("@/assets/images/plantly.png")
      }
      style={{
        width: imageSize,
        height: imageSize,
        borderRadius: 6,
      }}
    />
  );
};
