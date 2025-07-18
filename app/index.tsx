import { colors } from "@/constants/theme";
import { router } from "expo-router";
import { useEffect } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import Animated, {FadeInDown} from 'react-native-reanimated'

export default function SplashScreen() {

  return (
    <View style={styles.container}>
      
      <StatusBar barStyle={'light-content'} backgroundColor={colors.neutral900} translucent={true} />
      <Animated.Image 
        source={require('../assets/images/splashImage.png')}
        style={styles.logo}
        entering={FadeInDown.duration(700).springify()}
        resizeMode={'contain'}
      />
    </View>
  );
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral900,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: '23%',
    aspectRatio: 1
  }
})