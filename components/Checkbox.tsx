import { COLORS } from '@/constant/ui'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity } from 'react-native'

type StyledCheckBoxProps = {
  check: boolean
  onCheck: () => void
}

const StyledCheckBox: React.FC<StyledCheckBoxProps> = ({ check, onCheck }) => {
  return (
    <TouchableOpacity onPress={onCheck}>
      <Ionicons
        name={check ? 'checkmark-circle' : 'ellipse-outline'}
        size={24}
        color={check ? COLORS.SUCCESS : COLORS.PRIMARY_BORDER}
      />
    </TouchableOpacity>
  )
}

export default StyledCheckBox
