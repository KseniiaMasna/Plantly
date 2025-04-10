import { Image, useWindowDimensions } from "react-native";

type ImageProps = {
  source?: string;
  size?: number;
};

export const PlantlyImage = ({ source, size }: ImageProps) => {
  const { width } = useWindowDimensions();
  const imageSize = size || Math.min(width / 1.5, 400);

  return (
    <Image
      source={require("@/assets/images/plantly.png")}
      style={{ width: imageSize, height: imageSize }}
    />
  );
};
