import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors } from '@/constants/theme'

const login = () => {
  return (
    <ScreenWrapper>
      <Typo color={colors.white}>login</Typo>
    </ScreenWrapper>
  )
}

export default login

const styles = StyleSheet.create({})