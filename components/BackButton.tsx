import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '@/constants/theme'
import { BackButtonProps } from '@/types'
import { router } from 'expo-router'
import { CaretLeft } from 'phosphor-react-native'
import { verticalScale } from '@/utils/styling'


const BackButton = ({style, iconSize=26, color=colors.white}: BackButtonProps) => {
  return (
    <TouchableOpacity onPress={() => router.back()} style={[styles.button, style]}>
      <CaretLeft size={verticalScale(iconSize)} color={color} weight='bold' />
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({

})