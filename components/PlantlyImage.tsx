import {Image, useWindowDimensions} from "react-native"

type ImageProps = {
    source?: string
    size?: {w: number,
           h: number
    }
}

const PlantlyImage = ({source, size}: ImageProps) => {
    const {width} = useWindowDimensions()
    const imageSize = Math.min(width / 1.5, 400)

    return(
        <Image 
            source={require("@/assets/images/plantly.png")} 
            style={{width: imageSize, height: imageSize}} />
    )
}

export default PlantlyImage