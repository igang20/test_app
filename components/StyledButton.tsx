// onPress

import { COLORS } from '@/constant/ui'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import StyledText from './StyledText'
//TouchableOpcaity
// &&
//Pressable

type StyledButtonProps = TouchableOpacityProps & {
  label?: string
  icon?: React.ComponentProps<typeof Ionicons>['name']
  size?: 'default' | 'large' | 'small'
  variant?: 'primary' | 'delete'
}

const StyledButton: React.FC<StyledButtonProps> = ({
  label,
  icon,
  size = 'default',
  variant = 'primary',
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.base,
        //sizes
        size === 'small' ? styles.small : null,
        //sizes
        variant === 'delete' ? styles.delete : null
      ]}
      {...props}
    >
      {label && <StyledText>{label}</StyledText>}
      {icon && <Ionicons name={icon} size={14} color={COLORS.PRIMATY_TEXT}></Ionicons>}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  base: {
    color: COLORS.PRIMATY_TEXT,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.PRIMARY_ACTIVE_BTTN,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1
  },
  //sizes
  small: {
    paddingHorizontal: 12,
    paddingVertical: 12
  },
  default: {},
  //Variants
  delete: {
    backgroundColor: COLORS.PRIMARY_RED
  }
})

export default StyledButton
