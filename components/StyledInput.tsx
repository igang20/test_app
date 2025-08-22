import { COLORS } from '@/constant/ui'
import React from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'

type StyledTextInputProps = TextInputProps & {
  isError?: boolean
}

const StyledTextInput: React.FC<StyledTextInputProps> = ({ isError, ...props }) => {
  return (
    <TextInput
      {...props}
      style={[Styles.input, props.style, isError ? Styles.error : null]}
      placeholderTextColor={COLORS.PRIMATY_TEXT}
    />
  )
}

const Styles = StyleSheet.create({
  input: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    color: COLORS.PRIMATY_TEXT,
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY_BORDER
  },
  error: {
    borderColor: COLORS.PRIMARY_RED
  }
})

export default StyledTextInput
