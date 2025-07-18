import { Alert, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { colors, radius, spacingX, spacingY } from '@/constants/theme'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import BackButton from '@/components/BackButton'
import Input from '@/components/Input'
import * as Icons from 'phosphor-react-native'
import { verticalScale } from '@/utils/styling'
import Button from '@/components/Button'
import { router } from 'expo-router'


const Login = () => {
  const nameRef = useRef("")
  const emailRef = useRef("")
  const passwordRef = useRef("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async () =>{
    if(!nameRef.current || !emailRef.current || !passwordRef.current){
      Alert.alert('Sign Up', 'Please Fill all the Fields')
      return
    }
    setIsLoading(true)
  }
  return (
    <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScreenWrapper showPattern={true} bgOpacity={0.5}>
        <View style={styles.container}>
          <View style={styles.header}>
            <BackButton iconSize={28} />
            <Typo size={24} color={colors.white}>
             Forgot Password? 
            </Typo>
          </View>
          <View style={styles.content}>
            <ScrollView contentContainerStyle={styles.form} showsVerticalScrollIndicator={false}>

                <View style={{gap: spacingY._10}}>
                    <Typo size={28} fontWeight={'600'}>
                      Welcome Back
                    </Typo>
                    <Typo color={colors.neutral600}>
                      We are Happy to See You!
                    </Typo>
                </View>
                

                 <Input placeholder="Enter Your Email" onChangeText={(text:string) => emailRef.current = text} icon={<Icons.At size={verticalScale(26)} color={colors.neutral600} />}/>

                  <Input placeholder="Enter Your Password" secureTextEntry onChangeText={(text:string) => passwordRef.current = text} icon={<Icons.Lock size={verticalScale(26)} color={colors.neutral600} />}/>

                <View style={{marginTop: spacingY._25, gap: spacingY._15}}>
                  <Button loading={isLoading} onPress={handleSubmit} >
                    <Typo fontWeight={'bold'} color={colors.black} size={20}>
                      Sign In
                    </Typo>
                  </Button>
                </View>

                <View style={styles.footer}>
                  <Typo>
                    Don't have An Account?
                  </Typo>
                  <Pressable onPress={() => router.push('./register')}>
                    <Typo color={colors.primary} fontWeight={'bold'}>
                      Sign Up
                    </Typo>
                  </Pressable>
                </View>
            </ScrollView>

          </View>
        </View>
    </ScreenWrapper>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    
  },
  header: {
    paddingHorizontal: spacingX._20,
    paddingTop: spacingY._15,
    paddingBottom: spacingY._25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: radius._50,
    borderTopRightRadius: radius._50,
    borderCurve: 'continuous',
    paddingHorizontal: spacingX._20,
    paddingVertical: spacingY._20
  },
  form: {
    gap: spacingY._15,
    marginTop: spacingY._20
  
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  }
})