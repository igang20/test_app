// onPress
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { COLORS } from '@/constant/ui'

import StyledText from './StyledText'

//TouchableOpcaity
// &&
//Pressable

type StyledButtonProps = TouchableOpacityProps & {
  label?: string
  icon?: React.ComponentProps<typeof Ionicons>['name']
  size?: 'default' | 'large' | 'small'
  variant?: 'primary' | 'secondary' | 'delete'
}

const StyledButton: React.FC<StyledButtonProps> = ({
  label,
  icon,
  size = 'default',
  variant = 'primary',
  disabled,
  ...props
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.base,
        //sizes
        size === 'small' ? styles.small : null,
        size === 'large' ? styles.large : null,
        //sizes
        variant === 'delete' ? styles.delete : null,
        variant === 'secondary' ? styles.secondary : null,
        disabled ? styles.disabled : null
      ]}
      {...props}
    >
      {label && <StyledText variant={size === 'large' ? 'heading' : 'small'}>{label}</StyledText>}
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
  large: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
  default: {},
  //Variants
  delete: {
    backgroundColor: COLORS.PRIMARY_RED
  },
  disabled: {
    opacity: 0.5
  },
  secondary: {
    backgroundColor: COLORS.SECONDARY_BCKG,
    borderColor: COLORS.PRIMARY_ACTIVE_BTTN
  }
})

export default StyledButton
