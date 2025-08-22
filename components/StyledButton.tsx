// onPress

import React from 'react'
import { TouchableOpacity } from 'react-native'
import StyledText from './StyledText'

//TouchableOpcaity
// &&
//Pressable

type StyledButtonProps = {
  label?: string
}

const StyledButton: React.FC<StyledButtonProps> = ({ label, ...props }) => {
  return <TouchableOpacity {...props}>{label && <StyledText>{label}</StyledText>}</TouchableOpacity>
}

export default StyledButton
