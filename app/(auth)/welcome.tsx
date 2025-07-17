import Button from '@/components/Button'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Animated, { FadeIn } from 'react-native-reanimated'

const welcome = () => {
  
  return (
    <ScreenWrapper >
      <View style={styles.container}>
          <View style={{alignSelf: 'center'}}>
              
          <Typo color={colors.white} size={43} fontWeight={'900'}>Bubbly</Typo>
          </View>
          <Animated.Image 
            entering={FadeIn.duration(700).springify()}
            source={require('../../assets/images/welcome.png')}
            style={styles.welcomeImage}
            resizeMode={'contain'}
          />
          <View>
            <Typo color={colors.white} size={33} fontWeight={'800'}>
              Stay Connected
            </Typo>

            <Typo color={colors.white} size={33} fontWeight={'800'}>
              With Your Friends
            </Typo>
            <Typo color={colors.white} size={33} fontWeight={'800'}>
              and Family
            </Typo>
          </View>
          <Button onPress={()=>router.push('./login')}>
            <Typo color={colors.white} fontWeight={'bold'} size={23}>Get Started</Typo>
          </Button>
      </View>
    </ScreenWrapper>
  )
}

export default welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: spacingX._20,
    marginVertical: spacingY._10
  },
  background: {
    flex: 1,
    backgroundColor: colors.neutral900 
  },
  welcomeImage:{
    height: verticalScale(300),
    aspectRatio: 1,
    alignSelf: 'center'
  }
})